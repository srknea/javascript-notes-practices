
document.querySelector('#form').addEventListener('submit', function (e) {
    const yeniAd = document.querySelector('.isim').value;
    localStorage.setItem('AD',yeniAd)
    e.preventDefault();
})

