# Higher Order and Callback Functions

```jsx
//without higher order and callback functions
let myArray = [1, 2, 3];

const multiply = function (array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        tempArray[i] = array[i] * 2;
    }
     console.log(tempArray);
}

const divide = function (array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        tempArray[i] = array[i] / 2;
    }
     console.log(tempArray);
}

const add = function (array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        tempArray[i] = array[i] + 2;
    }
    console.log(tempArray);
}

const subtract = function (array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        tempArray[i] = array[i] - 2;
    }
    console.log(tempArray);
}

console.log(myArray);

multiply(myArray);
divide(myArray);
add(myArray);
subtract(myArray);
```

![Untitled](Untitled.png)

---

```jsx
let myArray = [1, 2, 3];

//first class function
const multiply = function (value) {
    return value * 2;
}
const divide = function (value) {
    return value / 2;
}
const add = function (value) {
    return value + 2;
}
const subtract = function (value) {
    return value - 2;
}

//higher order function 
/* 
parametre olarak fonksiyon alabilen,
return olarak fonksiyon döndüren dödürebilen fonksiyonlardır
*/
const fourOperation = function (array, operation) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        //tempArray[i] = array[i] * 2;
        tempArray[i] = operation(array[i]);
    }
     console.log(tempArray);
}

console.log(myArray)

fourOperation(myArray, multiply);
fourOperation(myArray, divide);
fourOperation(myArray, add);
fourOperation(myArray, subtract);

//fourOperation fonksiyonu higher order fonksiyondur.
//multiply veya divide fonksiyonları callback fonksiyonlardır.

/*
Callback fonksiyonları, bir başka fonksiyon içerisinde çağırılan ve 
çağrıldığı yere değer döndüren fonksiyonlardır.
*/
```

![Untitled](Untitled%201.png)

---