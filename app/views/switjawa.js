function pilihanComputer() {
	var c = Math.random();

	if(c < 0.34) return 'gajah';
	if ( c >= 0.34 && c <= 0.67) return'orang';
	return 'semut';
}

function getHasil(c, p) {
	if(p == c) return 'Seri!';
	if(p == 'gajah') return (c == 'orang') ? 'Menang!' : 'Kalah!';
	if(p == 'orang') return (c == 'gajah') ? 'Kalah!' : 'Menang!';
	if(p == 'semut') return (c == 'orang') ? 'Kalah!' : 'Menang!';
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
		pil.addEventListener('click', function(){
			const pilihanKomputer = pilihanComputer();
			const pilihanPlayer = pil.className;
			const hasil = getHasil(pilihanKomputer, pilihanPlayer);
			// console.log(pilihanKomputer);
			// console.log(pilihanPlayer);
			// console.log(hasil);

			const imgKomputer = document.querySelector('.img-komputer');
			imgKomputer.setAttribute('src', 'img/'+ pilihanKomputer + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		});
});

// const pGajah = document.querySelector('.gajah');

// pGajah.addEventListener('click', function(){
// 	const pilihanKomputer = pilihanComputer();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanKomputer, pilihanPlayer);
// 	// console.log(pilihanKomputer);
// 	// console.log(pilihanPlayer);
// 	// console.log(hasil);

// 	const imgKomputer = document.querySelector('.img-komputer');
// 	imgKomputer.setAttribute('src', 'img/'+ pilihanKomputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });