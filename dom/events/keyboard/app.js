const myForm = document.querySelector('#form');

const myInput = document.querySelector('#firstInput');

/*
myForm.addEventListener('submit', eventiYakala);

function eventiYakala(e){
    console.log(myInput.value);
    
    e.preventDefault();
} 
*/

myForm.addEventListener('submit', function (e){
    e.preventDefault();
    console.log("İnput içerisine yazılan string: " + myInput.value);
    console.log("Event adı: " + e.type);
    document.querySelector('#bilgi').textContent = "Form başarıyla gönderilmiştir !";
});



const mySecondInput = document.querySelector('#secondInput');

//İkinci inputta bir tuşa basılınca tettiklenir.
mySecondInput.addEventListener('keydown', function (e) {
    console.log("Event adı: " + e.type);
});
//İkinci inputta bir tuştan ellini çekince tetiklenir.
mySecondInput.addEventListener('keyup', function (e) {
    console.log("Event adı: " + e.type);
});

/*
//Bir tuşa basılıp çekildiğinde tetiklenir
mySecondInput.addEventListener('keypress', function (e) {
    console.log("Event adı: " + e.type);
});
*/



const myThirdInput = document.querySelector('#thirdInput');

//Input alanına tıklanıldığında tetiklenir
myThirdInput.addEventListener('focus', function (e) {
    e.preventDefault();
    console.log("Event adı: " + e.type);
});
//Input alanından çıkıldığında tetiklenir
myThirdInput.addEventListener('blur', function (e) {
    console.log("Event adı: " + e.type);
});



const myFourthInput = document.querySelector('#fourthInput');

//Input alanına yazılan bir şey CTRL+X yapıldığında tetiklenir (kesildiğinde).
myFourthInput.addEventListener('cut', function (e) {
    console.log("Event adı: " + e.type);
});
//Input alanına yazılan bir şey CTRL+V yapıldığında tetiklenir (yapıştırıldığında).
myFourthInput.addEventListener('paste', function (e) {
    console.log("Event adı: " + e.type);
});



//focus-blur ve keydown-keyup hariç herhangi bir olay gerçekleştiğinde tetiklenir...
const myFifthInput = document.querySelector('#fifthInput');

myFifthInput.addEventListener('input', function (e) {

    console.log("Event adı: " + e.type);
    document.querySelector('#veri').textContent = myFifthInput.value;
    //document.querySelector('#veri').textContent = e.target.value;
});


const mySelect = document.querySelector('#sehir');
//Seçilen şehir değiştiği anda tetiklenir...
mySelect.addEventListener('change', function (e) {
    document.querySelector('#uyari').textContent = e.target.value;
    console.log("Event adı: " + e.type);
})