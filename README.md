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

![Untitled](Notes/Untitled1.png)

```jsx
let myArray = [1, "emre", true];
```