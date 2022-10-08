# ES6 Class

<aside>

📌 “JavaScript is a multi-paradigm scripting language, which means that **it is very dynamic in nature and supports various types of programming styles, such as object-oriented, imperative, and functional programming.“**

</aside>

<aside>

❗ Composition kavramını araştır !

</aside>

```jsx
//JS object oriented bir dildir ama bu onun Java, C# gibi oldugu anlamına gelmez
//OOP bir aile ise, class based onun bir parçasıdır diyebiliriz. protype-base gibi.

//Javascript is a multi-paradigm language that supports procedural, object-oriented (prototype-based) and functional programming styles.
```

```jsx
class Person{
    constructor(ad, soyad){
        this.ad = ad;
        this.soyad = soyad;
    }

    selamVer(){
        return `Merhaba ben ${this.ad + " " + this.soyad}`;
    }
}

const emre = new Person('Emre', 'Altunbilek');
const hasan = new Person('Hasan', 'Yılmaz');

console.log(emre.selamVer());
console.log(hasan.selamVer());

/* 
İşin özünde yine bir Person nesnesi oluşturduk. class vb. farklı bir 
şey oluşturmadık
*/
```

![Untitled](Untitled.png)

### Kalıtım

```jsx
class Person{
    constructor(ad, soyad){
        this.ad = ad;
        this.soyad = soyad;
    }

    selamVer(){
        return `Merhaba ben ${this.ad + " " + this.soyad}`;
    }
}

class Ogrenci extends Person{
    constructor(ad, soyad, no){
        super(ad, soyad); //Ogrenci 'y ioluşturduğumuz class 'ı çağırdık
        this.no = no;
    }
}

const emre = new Person('Emre', 'Altunbilek');
const hasan = new Person('Hasan', 'Yılmaz');

console.log(emre.selamVer());
console.log(hasan.selamVer());

const serkan = new Ogrenci('Serkan', 'IŞIK', 1810206031);

console.log(serkan.selamVer());
console.log(serkan.no);
```

![Untitled](Untitled%201.png)

### Static

```jsx
class Person{
    static sayac = 0;

    constructor(ad, soyad){
        this.ad = ad;
        this.soyad = soyad;
        Person.sayac++;
    }
}

class Ogrenci extends Person{
    constructor(ad, soyad, no){
        super(ad, soyad); //Ogrenci 'y ioluşturduğumuz class 'ı çağırdık
        this.no = no;
    }
}

const emre = new Person('Emre', 'Altunbilek');
const hasan = new Person('Hasan', 'Yılmaz');

const serkan = new Ogrenci('Serkan', 'IŞIK', 1810206031);

console.log(emre.ad);
console.log(hasan.ad);
console.log(serkan.ad);

console.log(Person.sayac);
//static değişkenler ait olduğu class adı ile çağırılır
```

![Untitled](Untitled%202.png)

![Untitled](Untitled%203.png)

```jsx
class Person{
    static test(){
        console.log("--------------------");
    }

    constructor(ad, soyad){
        this.ad = ad;
        this.soyad = soyad;
    }
}

class Ogrenci extends Person{
    constructor(ad, soyad, no){
        super(ad, soyad); //Ogrenci 'y ioluşturduğumuz class 'ı çağırdık
        this.no = no;
    }
}

const emre = new Person('Emre', 'Altunbilek');
const hasan = new Person('Hasan', 'Yılmaz');

const serkan = new Ogrenci('Serkan', 'IŞIK', 1810206031);

Person.test();
//static fonksiyonlar ait olduğu class adı ile çağırılır

//Math.random();
/* random da static 'dir */
```

![Untitled](Untitled%204.png)

---

### Encapsulation in JavaScript

```jsx
class Person{
    constructor(ad, soyad){
        this.ad = ad;
        this._soyad = soyad;
    }

    get soyadGet(){
        return this._soyad;
    }

    set soyadSet(yeniDeger){
        this._soyad = yeniDeger;
    }

    selamVer(){
        return `Merhaba ben ${this.ad + " " + this.soyad}`;
    }
}

class Ogrenci extends Person{
    constructor(ad, soyad, no){
        super(ad, soyad); //Ogrenci 'y ioluşturduğumuz class 'ı çağırdık
        this.no = no;
    }
}

const emre = new Person('Emre', 'Altunbilek');
const hasan = new Person('Hasan', 'Yılmaz');

const serkan = new Ogrenci('Serkan', 'IŞIK', 1810206031);

console.log(emre._soyad);
/*
kapsülleme yapabilsek de JavaScript ilgili değişkenleri privite
yapmaz. Zaten prive olsaydı 
emre._soyad 
diyerek erişemezdik.

JavaScript'de kapsulleme koda bakan kişiye bilgi verir, privite yapmaz.
*/

console.log(emre.soyadGet);

emre.soyadSet = "Altun";
console.log(emre._soyad);
```

![Untitled](Untitled%205.png)

### Destructuring

```jsx
// array destructuring
let arr = ['Serkan', 'ISIK'];

const firstName = arr[0];
console.log(firstName);
const secondName = arr[1];
console.log(secondName);

console.log("**************");

let array = ['Esmanur', 'MAZLUM'];

const [first, second] = array
console.log(first);
console.log(second);

console.log("-------");

let colors = ['Black', 'White', 'Red', 'Yellow']

const [c1, c2,   ,c3] = colors;

console.log(c1,c2,c3);

console.log("-------");

let brands = ['Apple', 'Google', 'Amazon', 'Microsoft', 'Samsung', 'Toyota'];

const [b1, b2, ...others] = colors;
console.log(b1,b2);
console.log(others);

console.log("-------");

const [team1,team2,team3,team4] = ['Galatasaray', 'Fenerbahçe', 'Beşiktaş'];
console.log(team1,team2,team3,team4);

console.log("-------");

const [t1,t2,t3,t4='Trabzonspor'] = ['Galatasaray', 'Fenerbahçe', 'Beşiktaş'];
console.log(t1,t2,t3,t4);
```

![Untitled](Untitled%206.png)

```jsx
// object destructuring

let myObject = {
    firstName: 'Serkan',
    secondName: 'ISIK',
    tcNo: 123123123
}

const myFirstName = myObject.firstName;
const mySecondName = myObject.secondName;
const myTcNo = myObject.tcNo;

console.log(myFirstName, mySecondName, myTcNo);

console.log("**************");

// Array destructuring'de sıralamaya göre eşleştirilir.
/* Object destructuring'de direkt olarak key 'e göre eşleştirilir. */
const {firstName:f, secondName:s, tcNo:t} = myObject;
console.log(f, s, t);

console.log("-------");

const {firstName, secondName, tcNo} = myObject;
console.log(firstName, secondName, tcNo);

console.log("-------");

// myObject parçalanıyor
const {firstName:f2, secondName:s2, tcNo:t2, city:c2='Kilis'} = myObject;
console.log(f2, s2, t2, c2);
```

![Untitled](Untitled%207.png)

```jsx
const country = 'Germany';
const city = 'Berlin';

const place = {
    country: country,
    city: city
}

console.log(place);

console.log("**************");

// sıfırdan yeni bir object oluşturuluyor
const place2 = {country,city}
console.log(place2);
```

![Untitled](Untitled%208.png)

---

```jsx
let myObject = {
    firstName: 'Serkan',
    secondName: 'ISIK',
    tcNo: 123123123
}

const {tcNo} = myObject;

console.log(tcNo);
```

![Untitled](Untitled%209.png)

```jsx
let myObject = {
    firstName: 'Serkan',
    secondName: 'ISIK',
    tcNo: 123123123
}

const {tcNo, ...others} = myObject;

console.log(tcNo);
console.log(others);
```

![Untitled](Untitled%2010.png)

---

```jsx
let kisi = {
    ad: {
        firstName: "Serkan",
        lastName: "ISIK"
    },
    sevdigiRenkler: ["Black","White"],
    age:23
}

const {ad} = kisi;
console.log(ad);
```

![Untitled](Untitled%2011.png)

```jsx
let kisi = {
    ad: {
        firstName: "Serkan",
        lastName: "ISIK"
    },
    sevdigiRenkler: ["Black","White"],
    age:23
}

const {ad: {firstName, lastName}} = kisi;
console.log(firstName);
console.log(lastName);
```

![Untitled](Untitled%2012.png)

---

```jsx
let kisi = {
    ad: {
        firstName: "Serkan",
        lastName: "ISIK"
    },
    sevdigiRenkler: ["Black","White"],
    age:23
}

const {sevdigiRenkler} = kisi;
console.log(sevdigiRenkler);
```

![Untitled](Untitled%2013.png)

```jsx
let kisi = {
    ad: {
        firstName: "Serkan",
        lastName: "ISIK"
    },
    sevdigiRenkler: ["Black","White"],
    age:23
}

const {sevdigiRenkler: [renk1,renk2]} = kisi;
console.log(renk1);
console.log(renk2);
```

![Untitled](Untitled%2014.png)

---

```jsx
let kisi = {
    ad: {
        firstName: "Serkan",
        lastName: "ISIK"
    },
    sevdigiRenkler: ["Black","White"],
    age:23
}

//const {ad , sevdigiRenkler, age} = kisi;
const {ad: {firstName,lastName} , sevdigiRenkler: [renk1,renk2], age} = kisi;

console.log(firstName);
console.log(lastName);
console.log(renk1);
console.log(renk2);
console.log(age);
```

![Untitled](Untitled%2015.png)