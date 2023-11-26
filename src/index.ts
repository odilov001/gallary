import "./css/index.css";
import axios from "axios";

/* DOM VARIABLES */
const loader_1: HTMLDivElement = document.querySelector(".loader-1");
const loader_2: NodeListOf<HTMLDivElement> = document.querySelectorAll(".loader-2");
const container: HTMLElement = document.querySelector(".container");
const boxElms: NodeListOf<HTMLDivElement> = document.querySelectorAll(".box");
const boxesElm: HTMLDivElement = document.querySelector(".boxes");
const inputSearch: HTMLInputElement = document.querySelector("input");
const form: HTMLFormElement = document.forms[0];
const btnMore: HTMLButtonElement = document.querySelector(".btnMore");
const btnSearch: HTMLButtonElement = document.querySelector(".btnSearch");

/* LOGICAL VARIABLES */
const accesKey = "QaxOLYJFNjV5katlAPBXlpedw2R2Ovti2SKbFZEI4RU";
const API = `https://api.unsplash.com/photos/random?count=28&client_id=${accesKey}`;
let inputValue = "";
let page = 1;

container.style.display = "none";
btnMore.style.display = "none";

setTimeout(() => {
	loader_1.style.display = "none";
	container.style.display = "block";
	form.style.display = "flex";
}, 3000);

// sayt ishga tushganda random suratlarni Api dan olish sorovi
async function getRandomImg() {
	try {
		const response = await axios.get(API);
		renderImages(response.data);
	} catch (error) {
		console.error("XATOLIK YUZ BERDI", error);
		loader_2.forEach((loaderItem) => {
			loaderItem.style.display = "flex";
		});
	}
}

async function getSearchImg() {
	btnMore.style.display = "block";

	inputValue = inputSearch.value;
	const SEARCH_URL_INPUT_IMG = `https://api.unsplash.com/search/photos?per_page=28&page=${page}&query=${inputValue}&client_id=${accesKey}`;

	try {
		const response = await axios.get(SEARCH_URL_INPUT_IMG);
		renderImages(response.data.results);
	} catch (error) {
		console.error("XATOLIK YUZ BERDI", error);
	}
}

// UI FUNCTION
function renderImages(data: any[]) {
	if (page === 1) {
		boxesElm.innerHTML = "";
	}
	data.map((result) => {
		const searchImg = document.createElement("div");
		searchImg.classList.add("search");
		searchImg.innerHTML = `<img src="${result.urls.regular}" alt="${result.urls.regular}" class="photoBox" />`;
		boxesElm.append(searchImg);
	});
	// Remove loader after rendering images
	removeLoader();
}

// HANDLER FUNCTION
function handlerSearch() {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		page = 1;
		inputValue = inputSearch.value;

		if (inputValue === "") {
			alert("Please fill input ");
		}

		getSearchImg();
	});
}

function handlerClick() {
	btnMore.addEventListener("click", async () => {
		page++;
		showLoader();
		await getSearchImg();
		boxesElm.scrollBy({ top: 100, behavior: "smooth" });
	});
}

// LOGICAL FUNCTION

function showLoader() {
	loader_2.forEach((loaderItem) => {
		loaderItem.style.display = "flex";
	});
}

function removeLoader() {
	loader_2.forEach((loaderItem) => {
		loaderItem.style.display = "none";
	});
}

function init() {
	handlerSearch();
	handlerClick();
	getRandomImg();
}
init();
