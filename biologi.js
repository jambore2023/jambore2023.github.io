
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', function() {
    const value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill1.style.top = value * 1.5 + 'px';
});



/**/

    /*
       text.style.marginTop = Math.min(value * 2.5 + 'px', text,height);
    leaf.style.top = Math.min(value * -1.5, laef.height) + 'px';
    leaf.style.left = Math.min(value * 1.5, leaf.height) + 'px';
    hill4.style.left = Math.min(value * -1.5, hill4.height) + 'px';
    hill5.style.left = Math.min(value *1.5, hill4.height) + 'px';
    hill1.style.top = Mat.min(value * 1.5, hill1.height) + 'px';*/