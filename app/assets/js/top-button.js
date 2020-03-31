var Swal = require('sweetalert2');
function backHome()
{
    Swal.fire({
        title: 'Kembali?',
        text: "Anda akan kembali ke halaman pilih tes, jawaban akan tetap tersimpan",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Kembali',
        cancelButtonText: 'Tetap di sini'
    }).then((result) => {
        if (result.value) {
            window.location = "modetest.html"
        }
    })
}

function submitTest()
{
    Swal.fire({
        title: 'Selesai?',
        text: "Anda akan menyelesaikan tes "+title+", soal lain yang belum terjawab akan hangus.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Selesai',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.value) {
            localStorage.setItem("submitted_"+localStorage.selected_test, true)
            if (localStorage.submitted_Bahasa_Inggris == "true" && localStorage.submitted_Bahasa_Indonesia == "true" && localStorage.submitted_TPU == "true") return window.location = "nilai.html"; // if all test is submitted
            window.location = "modetest.html"
        }
    })
}

if (table == "Bahasa_Inggris") {
    title = "Bahasa Inggris"
    submitted = (localStorage.submitted_Bahasa_Inggris == "true")
} else if (table == "Bahasa_Indonesia") {
    title = "Bahasa Indonesia"
    submitted = (localStorage.submitted_Bahasa_Indonesia == "true")
} else {
    title = "TPU"
    submitted = (localStorage.submitted_TPU == "true")
}

if (submitted) $("#submitButton").hide();