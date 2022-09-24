// Aynı seviyedeki cocukları birlikte tetikleme

document.querySelector('#parentDiv').addEventListener('click', e => {
    if(e.target.classList.contains('item')){ //item sınıf ismi içeren elementler için true döndürür
        console.log("Listedeki bir elemanta tıklanıldı !");
    }
    /*
    if (e.target.className === 'item olItem') {
        console.log("Listedeki bir elemanta tıklanıldı !");
    }
    */    
});



/*-----------------------------------------------------*/

/*
<ol id="olList">
    <li id="firstItem" class="item olItem">İstanbul</li>
    <li id="secondItem" class="item olItem">Ankara</li>
    <li id="thirdItem" class="item olItem">Bursa</li>
</ol>
*/

/*
if (e.target.className === 'item olItem') {
    console.log("Listedeki bir elemanta tıklanıldı !");
}
*/


/*
Yukarıdaki yapının çalışması için çalışması içim

e.target.className === 'item'
Demek yeterli değildir !

className bütün yapıya bakar....
Sadece 'item' içerip içerimiyor mu ona bakmaz.
Bu nedenle bütün class adlarını yazmamız gerekir...

Yani ...
'item olItem'
*/

