
let text = document.getElementById('text');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', function() {
    const value = window.scrollY;
    hill4.style.left = value * -1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill1.style.top = value * 1.5 + 'px';
});
