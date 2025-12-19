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