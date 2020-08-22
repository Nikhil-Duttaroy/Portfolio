let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("pink");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("themeD");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("chal raha hai");
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "css/light.css";
  }

  if (mode == "pink") {
    document.getElementById("theme-style").href = "css/styles.css";
  }

  if (mode == "dark") {
    document.getElementById("theme-style").href = "css/dark.css";
  }

  localStorage.setItem("theme", mode);
}

gsap.from("#overlay1", {
  duration: 1.5,
  x: "50%",
  opacity: 0,
  ease: "fade",
});

gsap.from("#overlay2", {
  duration: 1.5,
  delay: 1.5,
  y: "-15px",
  x: "-5px",
  opacity: 0,
  ease: "slow",
});
gsap.from("#overlay3", {
  duration: 1.5,
  delay: 3,
  y: "-15px",
  x: "-5px",
  opacity: 0,
  ease: "slow",
});

const contact = document.querySelector(".button");
const contact1 = document.querySelector(".sb");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");


contact.addEventListener("click", () => {
	modal.style.display = "block";
	first.classList.add("isBlur");
	second.classList.add("isBlur");
	third.classList.add("isBlur");
	fourth.classList.add("isBlur");
	gsap.from(".modal",{
		opacity:0,
		yPercent:-100,
		xPercent:100,
		rotate:256,
		duration:2,
		ease:"back(3)",
	})
}
)
contact1.addEventListener("click", () => {
	modal.style.display = "block";
	first.classList.add("isBlur");
	second.classList.add("isBlur");
	third.classList.add("isBlur");
	fourth.classList.add("isBlur");
	gsap.from(".modal",{
		opacity:0,
		yPercent:100,
		xPercent:-100,
		rotate:256,
		duration:2,
		ease:"back(3)",
	})
}
)


close.addEventListener("click", () =>{
  modal.style.display = "none";
  first.classList.remove("isBlur");
  second.classList.remove("isBlur");
  third.classList.remove("isBlur");
  fourth.classList.remove("isBlur");
	
})