// redirect tombol mulai game
const tMulai = document.querySelector('.tmulai');
tMulai.onclick = function(){
	return window.location.href = "game.html";
}

const jumbo = document.querySelector('.jumbo');
// const thumbnail = document.querySelector('.thumbnail');
const thumbnail = document.querySelector('.thumbnail');
thumbnail.addEventListener('click', function(e){
	// cek apakah yang di klik adalah gambar dan tukar
	if(e.target.className.length <= 4){
		jumbo.src = e.target.src;
	}

	// pejelasan tiap huruf hijaiyah
	if(e.target.className == 'alif'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Alif';
		tLatin.innerHTML ='Makna Latin: A, I, U';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya diucapkan dengan tenggorokan yang terjauh';
	} else if (e.target.className == 'ba'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Ba';
		tLatin.innerHTML ='Makna Latin: B';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya merapatkan kedua bibir';
	} else if (e.target.className == 'ta'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'T';
		tLatin.innerHTML ='Makna Latin: T';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya menyentuhkan lidah dengan gigi seri bagian atas';
	} else if (e.target.className == 'tsa'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Tsa';
		tLatin.innerHTML ='Makna Latin: TS';
		cBaca.innerHTML = 'Cara Baca: Diucapakan dengan suara dan nafas yang terdengar mengalir';
	} else if (e.target.className == 'jim'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Jim';
		tLatin.innerHTML ='Makna Latin: J';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya menyentuhkan tengah-tengah lidah dengan langit-langit';
	} else if (e.target.className == 'kha'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Kha';
		tLatin.innerHTML ='Makna Latin: H';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya dikeluarkan dari tengah-tengah tenggorokan';
	} else if (e.target.className == 'kho'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Kho';
		tLatin.innerHTML ='Makna Latin: KH';
		cBaca.innerHTML = 'Cara Baca: Diucapkan dengan nafas yang mengalir';
	} else if (e.target.className == 'dal'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Dal';
		tLatin.innerHTML ='Makna Latin: D';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya menyentuhkan lidah dengan gigi seri bagian atas';
	} else if (e.target.className == 'dzal'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Dzal';
		tLatin.innerHTML ='Makna Latin: DZ';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya menyentuhkan lidah dengan gigi seri bagian atas';
	} else if (e.target.className == 'ro'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Ro';
		tLatin.innerHTML ='Makna Latin: R';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya menyentuhkan dinding lidah dengan langit-langit';
	} else if (e.target.className == 'zai'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Zai';
		tLatin.innerHTML ='Makna Latin: Z';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya lidah berada diantara 2 gigi seri bagian atas dan bawah';
	} else if (e.target.className == 'sin'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Sin';
		tLatin.innerHTML ='Makna Latin: S';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya ujung lidah berada diantara 2 gigi seri';
	} else if (e.target.className == 'syin'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Syin';
		tLatin.innerHTML ='Makna Latin: SY';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya mengangkat tengah lidah ke langit-langit';
	} else if (e.target.className == 'shot'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Shod';
		tLatin.innerHTML ='Makna Latin: SH';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya ujung lidah berada diantara 2 gigi seri';
	} else if (e.target.className == 'dhod'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Dhod';
		tLatin.innerHTML ='Makna Latin: DH';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya menyentuhkan sisi lidah dengan sisi geraham bagian atas';
	} else if (e.target.className == 'tho'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Tho';
		tLatin.innerHTML ='Makna Latin: TH';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya ujung lidang disentuhkan dengan gusi gigi seri bagian atas';
	} else if (e.target.className == 'thzo'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Thzo';
		tLatin.innerHTML ='Makna Latin: ZH';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya ujung lidang disentuhkan dengan 2 gigi seri bagian atas';
	} else if (e.target.className == 'ain'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Ain';
		tLatin.innerHTML ='Makna Latin: A';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya dari tengah-tengah tenggorokan';
	} else if (e.target.className == 'ghoin'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Ghoin';
		tLatin.innerHTML ='Makna Latin: GH';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya dari pangkal tenggorokan';
	} else if (e.target.className == 'fa'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Fa';
		tLatin.innerHTML ='Makna Latin: F';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya menyentuhkan 2 gigi seri atas dengan bibir bawah bagian dalam';
	} else if (e.target.className == 'qof'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Qof';
		tLatin.innerHTML ='Makna Latin: Q';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya menyentuhkann pangkal lidah dengan langit-langit bagian belakang';
	} else if (e.target.className == 'kaf'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Kaf';
		tLatin.innerHTML ='Makna Latin: K';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya mengangkat pangkal lidah di depan posisi huruf Qof';
	} else if (e.target.className == 'lam'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Lam';
		tLatin.innerHTML ='Makna Latin: L';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya mengangkat ujung lidah, disentuhkan dengan langit-langit';
	} else if (e.target.className == 'mim'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Mim';
		tLatin.innerHTML ='Makna Latin: M';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya merapatkan kedua bibir';
	} else if (e.target.className == 'nun'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Nun';
		tLatin.innerHTML ='Makna Latin: N';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya menyentukan ujung lidah diantara posisi Ro dan Lam';
	} else if (e.target.className == 'waw'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Waw';
		tLatin.innerHTML ='Makna Latin: W';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya dengan cara memonyongkan 2 bibir';
	} else if (e.target.className == 'ha'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Ha';
		tLatin.innerHTML ='Makna Latin: H';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya dikeluarkan dari tengah-tengah tenggorokan';
	} else if (e.target.className == 'ya'){
		const title = document.querySelector('.card-title');
		const tLatin = document.querySelector('.tlatin');
		const cBaca = document.querySelector('.cbaca');
		title.innerHTML = 'Ya';
		tLatin.innerHTML ='Makna Latin: Y';
		cBaca.innerHTML = 'Cara Baca: Makhrojnya membuka kedua bibir dengan sempurna';
	} 
});

