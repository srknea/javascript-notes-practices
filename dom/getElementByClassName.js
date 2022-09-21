//Çoklu element seçici

const links = document.getElementsByClassName('link');
console.log(links);
console.log(links[0]);

links[0].style.color = 'red';
links[1].style.backgroundColor = '#aaaaaa';
links[2].textContent = 'İnstagram için tıkla !';

console.log("---------------------");

//Diziye çevirmemiz gereklidir !
const myArray = Array.from(links);
myArray.reverse();
myArray.forEach(item => {
    console.log(item);
})

console.log("---------------------");

//bütün liste-item 'lari getirir
console.log(document.getElementsByClassName('liste-item'));

//ul içindeki liste-item class ismine sahip olanları getirir
console.log(document.querySelector('ul').getElementsByClassName('liste-item')); 
console.log(document.querySelector('ol').getElementsByClassName('liste-item'));

