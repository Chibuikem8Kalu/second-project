let run = [...document.querySelectorAll('h1, h2')];
function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected").forEach(c => c.classList.remove("selected"));
	
	document.querySelectorAll(".nav")[run.indexOf(titles[0])].classList.add("selected");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
console.log("true");
});

const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () =>{
	menu.classList.toggle('hidden')
});

/*const nav = document.querySelector('nav');
nav.addEventListener('click', () =>{
	menu.classList.toggle('hidden')
} )*/