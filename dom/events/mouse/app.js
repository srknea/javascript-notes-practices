/* Event Kavramı */

//Mouse Eventleri

/*
addEventListener 
İlk argüman: Beklenen olay
İkinci argüman: Tek parametreli bir fonksiyon
*/

document.querySelector('#firstButton').addEventListener('click', function (e) {
    console.log("Butona tıklanıldı !");
});

document.querySelector('#secondButton').addEventListener('click', function (e) {
    console.log(e.target);
});


document.querySelector('#thirdButton').addEventListener('click', function (e) {
    console.log(e.target.className);
});


document.querySelector('#link').addEventListener('click', function (e) {
    e.preventDefault(); //Linke tıklayınca Google' gidilmeyecek !
});
/*
HTML'de bir like tıklanınca bir siteye gitmesi istenilir...
Bu varsayılan temel bir durumdur.
Bunun olmasını preventDefault ile önleyebiliriz.
*/

document.querySelector('#fourthButton').addEventListener('dblclick', function (e) {
    console.log("Çift tıklanıldı !");
});




document.querySelector('#fifthButton').addEventListener('mousedown', function (e) {
    console.log("Mouse down !");
});
document.querySelector('#fifthButton').addEventListener('mouseup', function (e) {
    console.log("Mouse up !");
});




document.querySelector('#secondLink').addEventListener('mouseenter', function (e) {
    console.log("Mause enter !"); //Mause linkin üzerine geldiğinde gerçekleşir...
});
document.querySelector('#secondLink').addEventListener('mouseleave', function (e) {
    console.log("Mause leave !"); 
});


//mauseover ilgili yapının çocuklarının üzerine gelince de çalışır... 
document.querySelector('#secondContainer').addEventListener('mouseover', function (e) {
    console.log("Container içerisine girildi veya container'a ait bir child'a girildi"); 
});
/*
document.querySelector('#secondLink').addEventListener('mouseout', function (e) {
    console.log("Container içerisinden çıkıldı veya container'a ait bir child'dan çıkıldı"); 
});
*/


document.querySelector('#thirdContainer').addEventListener('mousemove', function (e) {
   console.log("Mouse move !"); //mouse ilgili bolgede hareket ettikçe tetiklenir
});




//koordinat
document.querySelector('#fourthContainer').addEventListener('mousemove', function (e) {
    document.querySelector('#koordinat').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    //mouse ilgili bolgede hareket ettikçe tetiklenir
 });
 


//arka plan rengi değiştirme
 document.querySelector('#fifthContainer').addEventListener('mouseenter', function (e) {
    document.querySelector('#fifthContainer').style.backgroundColor = 'red'
    //mouse ilgili bolgede hareket ettikçe tetiklenir
 });
 document.querySelector('#fifthContainer').addEventListener('mouseleave', function (e) {
    document.querySelector('#fifthContainer').style.backgroundColor = 'yellow'
    //mouse ilgili bolgede hareket ettikçe tetiklenir
 });


 //arka plan rengi değiştirme
 //koordinat
 //rgb
document.querySelector('#sixthContainer').addEventListener('mousemove', function (e) {
    //mouse ilgili bolgede hareket ettikçe tetiklenir
    document.querySelector('#digerKoordinat').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    document.querySelector('#rgb').textContent = `R: ${e.clientX %256} G: ${(e.clientY % 256)+1} B: ${(e.clientX + e.clientY) %256}`;
    
    document.querySelector('#sixthContainer').style.backgroundColor = `rgb(${e.clientX % 256}, ${e.clientY %256}, ${(e.clientX + e.clientY) %256})`; 
 });
