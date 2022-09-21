//Tek element seçici

console.log(document.getElementById('baslik'));

console.log(document.getElementById('baslik').className);


const a = document.getElementById('baslik');
a.style.backgroundColor = 'red';
a.style.color = 'yellow';
a.style.padding = '5rem';


const b = document.getElementById('img');
b.style.display = 'none';



const c = document.getElementById('kucukBaslik');
c.textContent = "Bu başlığın içeriği JS ile değiştirildi."
//c.innerText = "Bu başlığın içeriği JS ile değiştirildi."

const d = document.getElementById('ilkParagraf');
console.log(d.textContent);


const e = document.getElementById('ikinciParagraf');
e.innerHTML = "<h1>Bu başlık innerHTML ile oluşturuldu.</h1>"
