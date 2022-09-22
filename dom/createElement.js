/*Element ekleme*/

const yeniLi = document.createElement('li'); //li oluşturma

yeniLi.className = 'list-item';
yeniLi.textContent = 'İzmir';
//yeniLi.id = "yeni-id";
//yeniLi.setAttribute('deger', 'yeni-deger');

console.log(yeniLi);

document.querySelector('#liste').appendChild(yeniLi); //ul 'ye li ' yi ekleme
//İzmir eklendi

console.log("*********************");


/* replace */

//bu içerik değiştirmedir replace değildir.
//document.querySelector('h1').textContent = "İçeriği değiştirildi" 

const yeniElement = document.createElement('h6'); //h6 oluşturma

yeniElement.className = 'yeni-baslik';
yeniElement.textContent = 'JS İS HERE';

console.log(yeniElement);


const degistirilecekBaslik = document.querySelector('#baslik');


const baslikParent = document.querySelector('body');
baslikParent.replaceChild(yeniElement, degistirilecekBaslik);

