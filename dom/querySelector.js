//Tek element seçici

console.log(document.querySelector('p'));
//console.log(document.querySelector('#img'));

console.log(document.querySelector('.liste-item'));
console.log(document.querySelector('ul li'));
console.log(document.querySelector('.link.link-google'));


//Sadece ilk tek ve ilk çift eleman renk değiştirir. Çünkü tek secici...
document.querySelector('li:nth-child(even)').style.color = 'blue'
document.querySelector('li:nth-child(odd)').style.color = 'red'
