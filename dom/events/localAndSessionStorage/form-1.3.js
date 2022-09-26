const myOl = document.querySelector('#myOl');
const myArray = JSON.parse(localStorage.getItem('adListesi'));

if (myArray != null) {
    myArray.forEach(value => {
        const newLi = document.createElement('li');
        newLi.textContent = value;
    
        myOl.appendChild(newLi);
    });    
}

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
    

    
    const newLi = document.createElement('li');
    newLi.textContent = yeniAd;

    myOl.appendChild(newLi);

    e.preventDefault();
})


