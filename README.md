### Ternary If

```jsx
let a = 10, b = 5, c = 0;

if (a>b){
    c = a + b;
}
else{
    c = a - b;
}
console.log("c değeri: "+c);
```

```jsx
let a = 10, b = 5, c = 0;

c = (a > b) ? (a + b) : (a - b);
console.log("c değeri: "+c);
```

---

```jsx
function selamVer(){
    console.log("merhaba");
}
```

```jsx
/*
Merhaba
*/
```

---

```jsx
const selamVerDegiskeni = function () {
	console.log("Merhaba")
}

selamVerDegiskeni();
```

```jsx
/*
Merhaba
*/
```

---

### Fat Arrow

```jsx
const selamVerDegiskeni => () {
	console.log("Merhaba")
}

selamVerDegiskeni();
```

```jsx
/*
Merhaba
*/
```

```jsx
/* Parametresiz */
const selamVerDegiskeni _ => {
	console.log("Merhaba")
}

selamVerDegiskeni();
```

```jsx
/*
Merhaba
*/
```

```jsx
const fatArrowParametreli = (sayi) => {
    return sayi * sayi;
};

console.log(fatArrowParametreli(8));
```

```jsx
/*
64
*/
```

```jsx
/* Tek parametreli */
const fatArrowParametreliKisa = sayi => {
    return sayi * sayi;
}
console.log(fatArrowParametreliKisa(8));
```

```jsx
/*
64
*/
```

```jsx
/* Tek parametreli */
const fatArrowParametreliKisa = sayi => sayi * sayi;

console.log(fatArrowParametreliKisa(8));
```

```jsx
/*
64
*/
```

```jsx
const sayilariTopla = (s1, s2) => s1 + s2;

console.log(sayilariTopla(5,10));

const sayilariTopla2 = (s1, s2) => {
    return s1 + s2;
}
console.log(sayilariTopla2(5,10));
```

```jsx
/*
15
15
*/
```

### Array

```jsx
let arabaMarkalari = ["Mercedes", "Audi", "BMW"];

console.log(arabaMarkalari.toString());
console.log(arabaMarkalari);
console.log(arabaMarkalari[0]);

arabaMarkalari[3] = "Honda";
console.log(arabaMarkalari.toString());

console.log(arabaMarkalari.length);
```

![Untitled](Notes/Untitled.png)

```jsx
let arabaMarkalari = ["Mercedes", "Audi", "BMW"];

for (let i = 0; i < arabaMarkalari.length; i++) {
    console.log(arabaMarkalari[i]);
}

for (let anlıkDiziElemani of arabaMarkalari) {

    console.log(anlıkDiziElemani);

}
```

![Untitled](Notes/Untitled%201.png)

```jsx
let myArray = [1, "emre", true];
```

### Array Function

```jsx
let isimler = ["emre", "hasan", "ayşe"];
console.log(isimler.toString());
console.log(isimler.join(".&."));
```

![Untitled](Notes/Untitled%202.png)

```jsx
let isimler = ["emre", "hasan", "ayşe"];
console.log(isimler.toString());

//push diziye eleman ekler ve dizinin yeni boyutunu geri döndürür.
let diziElemanSayisi = isimler.push("ali");
console.log(isimler.toString());
console.log(diziElemanSayisi);

//pop diziden eleman çıkarır ve çıkardığı elemanı geri döndürür.
let dizidenCikarilanEleman = isimler.pop();
console.log(isimler.toString());
console.log(dizidenCikarilanEleman);
```

![Untitled](Notes/Untitled%203.png)

```jsx
let isimler = ["emre", "hasan", "ayşe"];
console.log(isimler.toString());

//dizinin ilk elemanını çıkarır ve bu cıkarılan elemanı döndürür.
let x = isimler.shift();
console.log(isimler.toString());
console.log(x);

//dizinin en basına eleman ekler ve dizinin yeni eleman sayısını döndürür.
let y = isimler.unshift("serkan");
console.log(isimler.toString());
console.log(y);
```

![Untitled](Notes/Untitled%204.png)

```jsx
let isimler = ["emre", "hasan", "ayşe"];
console.log(isimler.toString());

//delete ile verilen indeksteki eleman silinir.
delete isimler[1];
console.log(isimler.toString());
console.log(isimler[0]);
console.log(isimler[1]);
console.log(isimler[2]);
```

![Untitled](Notes/Untitled%205.png)

```jsx
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// At position 2, remove 1 element, add 2 elements
// Return value: an array containing the removed items (if any).
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits.toString());
```

![Untitled](Notes/Untitled%206.png)

```jsx
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// At position 2, don't delete any element, add 2 elements
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits.toString());
```

![Untitled](Notes/Untitled%207.png)

```jsx
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.toString());

// At position 2, remove 2 items: 
fruits.splice(2, 2);
console.log(fruits.toString());
```

![Untitled](Notes/Untitled%208.png)

```jsx
//The concat() method concatenates (joins) two or more arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

const children = arr1.concat(arr2); 

console.log(arr1.toString());
console.log(arr2.toString());
console.log(children.toString());
```

![Untitled](Notes/Untitled%209.png)

```jsx
//Array.slice() returns selected array elements as a new array

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(fruits.toString());
console.log(citrus.toString());
```

![Untitled](Notes/Untitled%2010.png)