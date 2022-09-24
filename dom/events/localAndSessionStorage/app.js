// local ve session storage
/*
Local Storage:
Kod ile silinene kadar veya kullanıcı tarafından silinene 
kadar saklanır.

Session Storage:
Browser açıp kapatılana kadar saklanır.
*/

/*
Değerler KEY - VALUE ile saklanır.
String olarak saklanır…
*/

//sessionStorage.setItem('İL', 'Kilis');

localStorage.setItem('AD', 'Serkan');
localStorage.setItem('YAS', '23');

console.log(localStorage.getItem('AD'));
console.log(localStorage.getItem('YAS'));


/* item silme */
//localStorage.removeItem('AD');
//localStorage.removeItem('YAS');
localStorage.clear();


