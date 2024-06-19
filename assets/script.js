const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

console.log (slides);

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
const title = document.querySelector("#banner p");
const dots = document.querySelectorAll (".dot");
let index = 0

console.log(title) //j'avais écris .banner au début au lieu de #banner donc j'ai vérfié avec un console.log



function updateDots () {
	dots.forEach((dot,i) => {
		if(i === index){
			dot.classList.add("dot_selected");
		} 
		else{
			dot.classList.remove("dot_selected");
		}
	});
}

arrowRight.addEventListener("click", () => {
	index++;
	if (index === slides.length) {// si l'index est égal à la longueur des slides 
		index = 0; // Si on atteint la fin, on revient au premier slide
	}

	//Affichage d'un msg pour vérifier l'event 
	console.log("Clic sur la flèche droite")

	bannerImg.src = slides[index].image;
	title.innerHTML = slides[index].tagLine;

	updateDots(); 
});

arrowLeft.addEventListener("click", () => {
	index--;
	if (index < 0) {
		index = slides.length - 1; //Si on atteint le début, on revient au dernier slide
	}

	//Affichage d'un msg pour vérifier l'event 
	console.log("Clic sur la flèche gauche")

	bannerImg.src = slides[index].image;
	title.innerHTML = slides [index].tagLine;

	updateDots(); //mets à jour les points
});

