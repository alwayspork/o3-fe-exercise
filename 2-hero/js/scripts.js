var img = new Image();
	hero = document.querySelector('.hero'),
	style = hero.currentStyle || window.getComputedStyle(hero, false),
	heroImg = style.backgroundImage.slice(5, -2);
    img.src = heroImg;

var int = setInterval(function() {
    if (img.complete) {
        clearInterval(int);
        document.querySelector('.hero').classList.toggle('fadeIn');
    }
}, 50);
