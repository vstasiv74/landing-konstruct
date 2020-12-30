let open = document.getElementById("open")
let close = document.getElementById("close")
let links = document.querySelector(".menu-list")
let scrolllinks = document.querySelectorAll(".scroll-link")

function openMenu() {
	open.style.display = "none"
	close.style.display = "block"
	links.style.display = "block"
}

function closeMenu() {
	close.style.display = "none"
	open.style.display = "block"
	links.style.display = ""
}

open.addEventListener("click", function () {
	openMenu();
})
close.addEventListener("click", function () {
	closeMenu();

})

for (let i = 0; i < scrolllinks.length; i++) {
	scrolllinks[i].addEventListener("click", function (e) {
		e.preventDefault();
		let element = document.querySelector(this.getAttribute("href"));
		let offset = element.getBoundingClientRect().top + window.pageYOffset - element.clientTop - 30;
		window.scrollTo({top: offset, behavior: "smooth"});
		closeMenu();
	})
}
