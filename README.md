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