//Tek element seçici

console.log(document.querySelector('p'));
//console.log(document.querySelector('#img'));

console.log(document.querySelector('.liste-item'));
console.log(document.querySelector('ul li'));
console.log(document.querySelector('.link.link-google'));




//Sadece ilk tek ve ilk çift eleman renk değiştirir. Çünkü tek secici...
document.querySelector('li:nth-child(even)').style.color = 'blue'
document.querySelector('li:nth-child(odd)').style.color = 'red'

console.log("*********************");

const myOl = document.querySelector('ol.siraliListe');
console.log(myOl);

console.log("---------------------");

let value;
value = myOl.childNodes; //Önerilmez ! 
/*Çünkü sade liste elemanları yer almaz, commet satırları 
vb. şeyler de yer alır*/
/*text'ler ol list oluşturulurken li sonunda alt satıra 
gecmek için kullanulan "ENTER" tuşunu temsil eder.*/
console.log(value);

console.log("---------------------");

value = myOl.childNodes[0].nodeType; 
console.log(value); // text -> 3
value = myOl.childNodes[1].nodeType; 
console.log(value); // comment -> 8
value = myOl.childNodes[3].nodeType;
console.log(value); // li -> 1

console.log("---------------------");

value = myOl.firstChild;
console.log(value);
value = myOl.firstElementChild;
console.log(value);
value = myOl.lastElementChild;
console.log(value);
value = myOl.childElementCount;
console.log(value); //myOl içinde kaç tane li var onu söyler

console.log("---------------------");
value = myOl.parentElement; 
console.log(value); //parent 'ı verir
value = myOl.parentElement.parentElement; 
console.log(value);

console.log("---------------------");

//siblings
value = document.querySelector('li');
console.log(value);

value = document.querySelector('li').nextElementSibling;
console.log(value);

value = myOl.querySelector('li').nextElementSibling.previousElementSibling;
console.log(value);

value = myOl.querySelector('li').nextElementSibling.previousElementSibling.previousElementSibling;
console.log(value); //ol li 'nin komşusu değil parent'i dir. O yuzden null döner
