/*remove*/

document.querySelector('p').remove(); // p silindi

document.querySelector('form').remove(); // form ve cocuklarını siler
//document.querySelector('form').removeChild(document.querySelector('input')); //sadece input silinir

const silinecekLi = document.querySelector('ul li');
silinecekLi.remove(); // Ankara silindi


document.querySelector('ol').removeChild(document.querySelectorAll('ol li')[2]);
// Sivas silindi