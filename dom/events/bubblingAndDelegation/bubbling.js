document.querySelector('#parentDiv').addEventListener('click', e => {
    console.log('parentDiv tıklanıldı !');
});

document.querySelector('#childDiv').addEventListener('click', e => {
    console.log('childDiv tıklanıldı !');
});

document.querySelector('#olList').addEventListener('click', e => {
    console.log('olList tıklanıldı !');
});





document.querySelector('#firstItem').addEventListener('click', e => {
    console.log('firstItem tıklanıldı !');
});

document.querySelector('#secondItem').addEventListener('click', e => {
    console.log('secondItem tıklanıldı !');
});

document.querySelector('#thirdItem').addEventListener('click', e => {
    console.log('thirdItem tıklanıldı !');
});


/* 
Event bubbling:
Oluşturduğumuz click eventi tıklanılan en küçük cocuktan 
en büyük aile büyüğüne kadar aktarılır yani ulaşır.

Özetle çocuğa tıklamak demek ailenin diğer büyüklerine de tıklamak
demektir.

Fakat...
Bu click eventi aynı seviyedeki diğer çocuklara ulaşmaz...
*/

