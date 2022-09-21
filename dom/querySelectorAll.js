//Çoklu element seçici

/* 
!!! 
querySelectorAll dizi oluştururi, diğerleri gibi colelction değil 
!!!
*/

const linkArray = document.querySelectorAll('a');
//const linkList = document.querySelectorAll('.link');
console.log(linkArray);


const listArray = document.querySelectorAll('li');
console.log(listArray);


const listArrayOdd = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i < listArrayOdd.length; i++) {
    listArrayOdd[i].style.backgroundColor = "yellow";
}


const listArrayEven = document.querySelectorAll('li:nth-child(even)');
listArrayEven.forEach(item => {
    item.style.backgroundColor = 'red';
})

