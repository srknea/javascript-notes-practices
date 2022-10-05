document.querySelector('#parentDiv').addEventListener('click', e => {
    console.log('parentDiv tıklanıldı !');
});

document.querySelector('#childDiv').addEventListener('click', e => {
    console.log('childDiv tıklanıldı !');
});

document.querySelector('#olList').addEventListener('click', e => {
    console.log('olList tıklanıldı !');
    e.stopPropagation();
});

/*
https://www.loginradius.com/blog/engineering/javascript-events-bubbling-capturing-and-propagation/
*/



