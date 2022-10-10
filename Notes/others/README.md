# Others

### Ternary If

```jsx
let a = 10, b = 5, c = 0;

if (a>b){
    c = a + b;
}
else{
    c = a - b;
}
console.log("The value of c is: "+c);
```

```jsx
let a = 10, b = 5, c = 0;

c = (a > b) ? (a + b) : (a - b);
console.log("The value of c is: "+c);
```

---

```jsx
//Sonsuz döngü
for( ; ; ){

}
```

### for

```jsx
let arabaMarkalari = ["Mercedes", "Audi", "BMW"];

for (let i = 0; i < arabaMarkalari.length; i++) {
    console.log(arabaMarkalari[i]);
}

for (let anlıkDiziElemani of arabaMarkalari) {
    console.log(anlıkDiziElemani);
}
```

![Untitled](Untitled.png)

```jsx
let serkan = {
    firstName: 'Serkan',
    lastName: 'ISIK',
    yearOfBirth: 1998,
};

for (const key in serkan) {
    console.log(key);
}
```

![Untitled](Untitled%201.png)

```jsx
let serkan = {
    firstName: 'Serkan',
    lastName: 'ISIK',
    yearOfBirth: 1998,
};

for (const key in serkan) {
    console.log(serkan[key]);
}
```

![Untitled](Untitled%202.png)

---

### const

```jsx
/*
Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.
*/
const myArray = [1,2,3];

myArray.push(4);
console.log(myArray);

try {
    myArray = [1,11,111];
  }
catch (err) {
    console.log("Error!")
}
```

![Untitled](Untitled%203.png)

![Untitled](Untitled%204.png)

![Untitled](Untitled%205.png)

---

<aside>
📌 Javascript’te fonksiyon dışındaki bir değişkeni fonksiyon içinde kullanabiliriz. Fakat fonksiyon içinde de aynı isimde değişken tanımlarsak artık o sadece fonksiyon içinde yaşar…

</aside>

---

# Local and Session Storage

![Untitled](Untitled%206.png)

---

### this

![Untitled](Untitled%207.png)

---

```jsx
const myArray = ["İstanbul", "Ankara", "Bursa"];
console.log(myArray);
console.log(typeof myArray);

const dizim = new Array ('Sivas', 'Şanlıurfa', 'Adana');
console.log(dizim);
console.log(typeof dizim);
```

![Untitled](Untitled%208.png)

---

```jsx
let a = 1;
if(a){
    console.log("True", a);
}else{
    console.log("False", a);
}

let b = 0;
if(b){
    console.log("True", b);
}else{
    console.log("False", b);
}

let c = -1;
if(c){
    console.log("True", c);
}else{
    console.log("False", c);
}

let d;
if(d){
    console.log("True", d);
}else{
    console.log("False", d);
}
```

![Untitled](Untitled%209.png)

---

```jsx
/*
    setTimeOut  ve  setInterval fonksiyonları verilen süreye göre çalışır. 
    Örneğin 2 saniye verilsin...
    
    setTimeOut -> 2 saniye sonra ilgili kodu çalıştırır.
    setInterval -> 2 saniyede bir ilgili kodu çalıştırır.
*/

/*
document.querySelector , setTimeOut , setInternal browser 'ın sağladığı ozelliklerdir
JavaScript 'e özgü değillerdir
*/
```