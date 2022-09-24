document.querySelector('#form').addEventListener('submit', function (e) {
    const yeniAd = document.querySelector('.isim').value;
    let adDizisi;

    if(localStorage.getItem('adListesi') === null){
        adDizisi = [];
    } else{
        adDizisi = JSON.parse(localStorage.getItem('adListesi'))
    }

    adDizisi.push(yeniAd);
    localStorage.setItem('adListesi', JSON.stringify(adDizisi));
    
    e.preventDefault();
})

/* 
Array birden fazla string yapıyı bir arada tutan yapıdır.
Ama burada array kullanamıyoruz o nedenle önce JSON' a dönüştüreceğiz.
Ardından buraya alacağız...
*/

//JSON.parse(); //Verilen string ifade JSON 'a dönüştürülür
// JSON.stringify(); // JSSON ifade stringe dönüştürülür

/*
Local stroge sadece string değerler ile .alışır.
Fakat aynı KEY ' ait olan birden fazla eleman
var ise bunları JSON formatında yazmamız gerekir.
*/
