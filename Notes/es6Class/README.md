# ES6 Class

<aside>

📌 “JavaScript is a multi-paradigm scripting language, which means that it is very dynamic in nature and supports various types of programming styles, such as object-oriented, imperative, and functional programming.“

</aside>

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