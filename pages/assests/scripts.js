document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
	if (e.ctrlKey && e.key === 'c') e.preventDefault();
});
document.addEventListener('keydown', function (e) {
	if (
		e.key === 'F12' ||
		(e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) ||
		(e.ctrlKey && e.key === 'U')
	) {
		e.preventDefault();
		alert('NO NO GO AND TYPE YOUR CODE😒😒🤐🤡');
	}
});

// Images navigations
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

images.forEach((img, index) => {
	img.addEventListener("click", () => {
		currentIndex = index;
		showImage();
		lightbox.style.display = "flex";
	});
});

function showImage() {
	lightboxImg.src = images[currentIndex].src;
}

prevBtn.onclick = () => {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	showImage();
};

nextBtn.onclick = () => {
	currentIndex = (currentIndex + 1) % images.length;
	showImage();
};

closeBtn.onclick = () => (lightbox.style.display = "none");

lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) lightbox.style.display = "none";
});

document.addEventListener("keyup", (e) => {
	if (e.key === "Escape") {
		lightbox.style.display = "none";
	}
});
// --------------------------------------------------------------
// Navbar
const headerData = `<div class="brand">
					<div class="logo"><img src="assests/logo.ico" alt="Logo" /></div>
					<div>
						<h1>Foxtech</h1>
						<div class="sub"></div>
					</div>
				</div>

				<nav aria-label="Main navigation">
					<ul>
						<li><a href="/django-learning/index.html">Home</a></li>
					</ul>
				</nav>`
const header = document.getElementById("header");

header.innerHTML = headerData;

// --------------------------------------------------------------
// Footer
const footerData = `<footer style="background:#222; color:#fff; padding:15px; text-align:center; margin-top:40px;">
    <p>&copy; 2026 Foxtech Private Solutions</p>
    <p>
		<h3 style="display: inline-block">Contributors: </h3>
        <a href="#" style="color:#ccc; text-decoration:none;">Foxtech.dev.labs</a> |
        <a href="https://github.com/Ha-ily123" style="color:#ccc; text-decoration:none;">Haily</a> |
        <a href="https://github.com/Jijitha2006" style="color:#ccc; text-decoration:none;">Jiitha</a>
    </p>
</footer>
`
const footer = document.getElementById("footer");

footer.innerHTML = footerData;

// --------------------------------------------------------------
