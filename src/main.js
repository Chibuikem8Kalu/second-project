function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected").forEach(c => c.classList.remove("selected"));
	
	document.querySelectorAll(".nav")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})