$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -5
    }, 750);
});

function buttonCenter(x) {

	var left = document.getElementById('left-button');
	var right = document.getElementById('right-button');

	if (x.matches) {
		left.classList.add("text-center");
		left.classList.remove("text-right");
		
		right.classList.add("text-center");
		right.classList.remove("text-left");
	} else {
		left.classList.remove("text-center");
		left.classList.add("text-right");
		
		right.classList.remove("text-center");
		right.classList.add("text-left");
	}
}

var x = window.matchMedia("(max-width: 1200px)");
buttonCenter(x);
x.addListener(buttonCenter);