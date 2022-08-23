const checkBox = document.querySelector(".hamburger-menu input");
const navUl = document.querySelector("nav ul");

checkBox.addEventListener('click', function() {
	navUl.classList.toggle('slide');
	// body.css('overflow', 'hidden');
});
