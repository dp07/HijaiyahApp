function pilihanComputer() {
	var c = Math.round(Math.random() * 28 + 1 );

	if(c == 1) return '1alif';
	if(c == 2) return '2ba';
	if(c == 3) return '3ta';
	if(c == 4) return '4tsa';
	if(c == 5) return '5jim';
	if(c == 6) return '6kha';
	if(c == 7) return '7kho';
	if(c == 8) return '8dal';
	if(c == 9) return '9dzal';
	if(c == 10) return '10ro';
	if(c == 11) return '11zai';
	if(c == 12) return '12sin';
	if(c == 13) return '13syin';
	if(c == 14) return '14shot';
	if(c == 15) return '15dhod';
	if(c == 16) return '16tho';
	if(c == 17) return '17thzo';
	if(c == 18) return '18ain';
	if(c == 19) return '19ghoin';
	if(c == 20) return '20fa';
	if(c == 21) return '21qof';
	if(c == 22) return '22kaf';
	if(c == 23) return '23lam';
	if(c == 24) return '24mim';
	if(c == 25) return '25nun';
	if(c == 26) return '26waw';
	if(c == 27) return '27ha';
	return '28ya';
}



function getHasil(c, p) {
	if(p == c) return 'Benar!';
	return 'Salah!';
}

// ambil pilihan computer
let pilihanKomputer = pilihanComputer();

// ubah gambar soal sesuai pilihan computer
const imgKomputer = document.querySelector('.gsoal');
imgKomputer.setAttribute('src', '../assets/img/'+ pilihanKomputer + '.jpg');

// seleksi elemen li
const pilihan = document.querySelectorAll('.kotak-jawaban li');
// seleksi tombol untuk lanjut
const tNext = document.getElementsByClassName('tnext')[0];
// lock jawaban
let lock = 'buka';
tNext.addEventListener('click', function(){
	lock = 'buka';
	pilihanKomputer = pilihanComputer();
	const info = document.querySelector('.hasil');
	// reset warna jawaban
	pilihan.forEach(function(pil){
		pil.style.backgroundColor = '#FFC107';
	});
	// reset hasil
	info.innerHTML = '';
	// ubah gambar soal saat tombol next ditekan
	imgKomputer.setAttribute('src', '../assets/img/'+ pilihanKomputer + '.jpg');

});

let score = 0;
pilihan.forEach(function(pil){
		pil.addEventListener('click', function(){
			const pilihanPlayer = pil.className;
			const hasil = getHasil(pilihanKomputer, pilihanPlayer);
			
			console.log(pilihanKomputer);
			console.log(pilihanPlayer);
			console.log(hasil);
			const info = document.querySelector('.hasil');
			const jmlScore = document.querySelector('.score');
			// insert hasil dan beri warana
			if(hasil == 'Salah!'){
				info.innerHTML = hasil;
				info.style.color = 'red';
				pil.style.backgroundColor = 'red';
				score -= 1;
				jmlScore.innerHTML = 'Skor: ' + score ;
				
			} else {
				info.innerHTML = hasil;
				info.style.color = 'green';
				pil.style.backgroundColor = 'green';
				if(lock == 'buka'){
					score += 3;
					jmlScore.innerHTML = 'Skor: ' + score ;
					lock = 'tutup';
				}
			}
		});
});


// redirect tombol materi
const tMateri = document.querySelector('.redirect');
tMateri.onclick = function(){
	return window.location.href = "materi.html";
}





