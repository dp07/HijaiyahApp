var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');
var db = new sqlite3.Database('tni.db');
var count = 0;          // count soal for test
var key = 0;            // true answer
var savedAnswer = 0;    // selected answer
var question = 0;       // question number

// set soal and get key
function setSoal(table, test, qnumber){
    db.get("SELECT qnumber, question, key, answer FROM "+table+" WHERE test = "+test+" AND qnumber = "+qnumber, function(err, row){
        $("#data-container").html(row.question);
        
        key = row.key; // read key
        question = row.qnumber; // read qnumber
        savedAnswer = row.answer; // check saved answer
        selectedButton(savedAnswer); // fill button color
    })
}

function initPagination(table, test){
    db.get("SELECT COUNT(*) from "+table+" where test = "+test, function(err, row){
        count = row["COUNT(*)"] // count soal

        // draw pagination
        $("#page-container").pagination({
            dataSource: new Array(count),
            pageSize: 1,
            pageRange:6,
            pageNumber:page,
            className: 'paginationjs-theme-grey',
            callback: function(data, pagination) {
                // console.log([data, pagination]);
                setSoal(table, test, pagination.pageNumber)
            }
            
        })
    })
}

function selected(selectedAnswer){

    if(savedAnswer != 0 || submitted) return console.log(false); // disable re-selected if answered or test submitted
    savedAnswer = selectedAnswer;

    db.run("UPDATE "+table+" SET answer = "+selectedAnswer+" WHERE test = "+test+" AND qnumber = "+question, function(err){
        // console.log(err)
    });
    selectedButton(selectedAnswer) // fill button color
}

// fill selected button
function selectedButton(selectedAnswer){
    $("#label1, #label2, #label3, #label4, #label5").css({"background-color": "#2E1C06", "color": "#FFEE00"})
    if (selectedAnswer == key){
        // console.log(true);
        $("#label"+selectedAnswer).css({"background-color": "#13d62d", "color": "#ffffff"})
    } else {
        // console.log(false);
        $("#label"+selectedAnswer).css({"background-color": "#f1374f", "color": "#ffffff"})
    }
    selectedAnswer != 0 ? $("#label"+key).css({"background-color": "#13d62d", "color": "#ffffff"}) : '';
}

var table = localStorage.selected_test;
var page = localStorage.selected_soal;
var test = 1;

// if (table == "Bahasa_Inggris") {
//     title = "Bahasa Inggris"
//     submitted = (localStorage.submitted_Bahasa_Inggris == "true")
// } else if (table == "Bahasa_Indonesia") {
//     title = "Bahasa Indonesia"
//     submitted = (localStorage.submitted_Bahasa_Indonesia == "true")
// } else {
//     title = "TPU"
//     submitted = (localStorage.submitted_TPU == "true")
// }

// var title = localStorage.selected_test == "Bahasa_Inggris" ? "Bahasa Inggris" : (localStorage.selected_test == "Bahasa_Indonesia" ? "Bahasa Indonesia" : "TPU")
initPagination(table, test)
$("#title").html(title)