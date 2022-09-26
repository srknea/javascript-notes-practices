# Object

```jsx
let person = {
    firstName: 'Serkan',
    lastName: 'ISIK',
    yearOfBirth: 1998,
    married: false,
    favoriteColors: ['Black', 'White', "Grey"],
		//Method: Object içindeki fonksiyon
    calculateAge: function () { 
        this.age = 2022 - this.yearOfBirth;
    }
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.yearOfBirth);
console.log(person.married);
console.log(person.favoriteColors);

person.calculateAge(); 
console.log(person.age); //you have to call the function first
```

![Untitled](Untitled.png)

```jsx
let person = {
    firstName: 'Serkan',
    lastName: 'ISIK',
    yearOfBirth: 1998,
    married: false,
    favoriteColors: ['Black', 'White', "Grey"],
};

console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['yearOfBirth']);
console.log(person['married']);
console.log(person['favoriteColors']);
```

![Untitled](Untitled%201.png)

```jsx
let person = {
    firstName: 'Serkan',
    lastName: 'ISIK',
    yearOfBirth: 1998,
    married: false,
    favoriteColors: ['Black', 'White', "Grey"],
};

let person2 = {
    firstName: 'Esmanur',
    lastName: 'MAZLUM',
    yearOfBirth: 2000,
    married: false,
    favoriteColors: ['Black', 'Green', "Blue"],
};

//Array
let people = [person, person2];

console.log(people);
console.log(people[0].firstName);
console.log(people[1].firstName);
```

![Untitled](Untitled%202.png)

```jsx
let person = new Object();

person.firstName = "Serkan";
person.lastName = "ISIK"
person.yearOfBirth = 1998;

console.log(person.firstName);
console.log(person.lastName);
console.log(person.yearOfBirth);
```

![Untitled](Untitled%203.png)

---

## Second Part

```jsx
let person = {
    firstName: 'Serkan',
    lastName: 'ISIK',
    //year-Of-Birth: 1998,  //Hatalı !
    ['year-Of-Birth']: 1998 // "-"  kullanımı
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person['year-Of-Birth']);
```

![Untitled](Untitled%204.png)

```jsx
//object literals
let person = {
    firstName: 'Serkan',
    age: 23,
    bilgileriSoyle: function () {
        return `Benim adım ${this.firstName} ben ${this.age} yaşındayım`; //template literal				
    }
};

console.log(person.bilgileriSoyle());
```

![Untitled](Untitled%205.png)

```jsx
let person = {
    firstName: 'Serkan',
    age: 23
};

console.log(person);

person.age = 24;

console.log(person);

person.lastName = 'ISIK';

console.log(person);

//Oluşturulan yapıyı sonradan değiştirmek önerilmez, çünkü takibi zorlaşır.
```

![Untitled](Untitled%206.png)

### Factory Functions

```jsx
let person = {
    firstName: 'Serkan',
    lastName: 'ISIK',
    age: 23,
};
console.log(person);

console.log("--------------");

//factory functions
//bu fonksiyon object döndürür.
function createPerson(parFirstName,parLastName,parAge){
    return {
        firstName: parFirstName,
        lastName: parLastName,
        age: parAge
    }
}

const serkan = createPerson('Serkan', 'ISIK', 23);
console.log(serkan);

const esmanur = createPerson('Esmanur', 'MAZLUM', 21);
console.log(esmanur);
```

![Untitled](Untitled%207.png)

![Untitled](Untitled%208.png)

```jsx
function createPerson(parFirstName,parLastName,parAge){
    return {
        firstName: parFirstName,
        lastName: parLastName,
        age: parAge,
        bilgileriGoster: function (){
            return `Benim adım ${this.firstName} ben ${this.age} yaşındayım`;
        }
    }
}

const serkan = createPerson('Serkan', 'ISIK', 23);
console.log(serkan.bilgileriGoster());

const esmanur = createPerson('Esmanur', 'MAZLUM', 21);
console.log(esmanur.bilgileriGoster());
```

![Untitled](Untitled%209.png)

# Constructor Functions

```jsx
//constructor functions
function Ogrenci (parFirstName,parLastName,parAge){
    this.firstName = parFirstName;
    this.lastName = parLastName;
    this.age = parAge;
    this.bilgileriGoster = function () {
        return `Benim adım ${this.firstName} ben ${this.age} yaşındayım`;
    }
}

const serkan = new Ogrenci('Serkan','ISIK',23);

console.log(serkan);
console.log(serkan.bilgileriGoster());

/*
new kullanıldığında:
1- Yeni bir object oluşturulur.
2- factory functions 'lardaki gibi return kullanılmak zorunda kalınmaz
3- this kelimesini o an oluşturulacak olan object'e bağlar
*/
```

![Untitled](Untitled%2010.png)

---

```jsx
function Ogrenci (parFirstName,parLastName,parAge){
    this.firstName = parFirstName;
    this.lastName = parLastName;
    this.age = parAge;
    this.bilgileriGoster = function () {
        return `Benim adım ${this.firstName} ben ${this.age} yaşındayım`;
    }
    console.log(this); // Dikkat !
}

const serkan = new Ogrenci('Serkan','ISIK',23);
```

![Untitled](Untitled%2011.png)

---

<aside>
📌 Javascript 'deki tüm objeler onu oluşturan constructor fonksiyonun tanımına
erişebilir.

</aside>

```
function Ogrenci (parFirstName,parLastName,parAge){
    this.firstName = parFirstName;
    this.lastName = parLastName;
    this.age = parAge;
    this.bilgileriGoster = function () {
        return `Benim adım ${this.firstName} ben ${this.age} yaşındayım`;
    }
}

const serkan = new Ogrenci('Serkan','ISIK',23);

console.log(serkan.constructor);
```

![Untitled](Untitled%2012.png)

<aside>
📌 Array ve Fuction ‘lar da birer object ’dir. Onlar da kurucu constructor ‘larına erişebilirler.

</aside>

```jsx
const myObject = {};
console.log(myObject.constructor);

const myArray = [];
console.log(myArray.constructor);

const myFunction = function () {
};
console.log(myFunction.constructor);

/* Javascript temelinde kendilerini oluşturan kurucu fonksiyona eriştik fakat
kod içeriği bizimle paylaşılmıyor*/ 
```

![Untitled](Untitled%2013.png)

---

```jsx
const myObject = {};
console.log(myObject); //myObject'in constructor'ına eriştik

const myArray = [];
console.log(myArray); 

const myFunction = function () {
};
console.log(myFunction);
```

![Untitled](Untitled%2014.png)

---

```jsx
const myObject = {};
console.log(myObject.constructor()); // boş bir object oluşturuldu

const myArray = [];
console.log(myArray.constructor()); // boş bir array oluşturuldu

const myFunction = function () {
};
console.log(myFunction.constructor()); // boş bir fonksiyon oluşturuldu

```

![Untitled](Untitled%2015.png)

```jsx
function Ogrenci (parFirstName,parLastName,parAge){
    this.firstName = parFirstName;
    this.lastName = parLastName;
    this.age = parAge;
    this.bilgileriGoster = function () {
        return `Benim adım ${this.firstName} ben ${this.age} yaşındayım`;
    }
}

const serkan = new Ogrenci('Serkan','ISIK',23);

console.log(serkan);

const esmanur = new serkan.constructor('Esmanur', 'MAZLUM', 21);

console.log(esmanur);

/*serkan object'inin kurucu fonksiyonunu Ogrenci 'ye erişip yeni bir 
object oluşturduk.*/
```

![Untitled](Untitled%2016.png)

```jsx
const myObject = {};
const secondObject = myObject.constructor(); // boş bir object oluşturuldu

console.log(myObject);
console.log(secondObject);

console.log("----------");

const myArray = [];
const secondArray = myArray.constructor(); // boş bir array oluşturuldu

console.log(myArray);
console.log(secondArray);

console.log("----------");

const myFunction = function () {
};
const secondFunction = myFunction.constructor(); // boş bir fonksiyon oluşturuldu

console.log(myFunction);
console.log(secondFunction);
```

---