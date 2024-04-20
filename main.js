
const tecnologies = [
  {
    name: "Javascript",
    icon: "js.png",
    url: "https://www.javascript.com/",
  },
  {
    name: "Typescript",
    icon: "typescript.png",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "React.png",
    url: "https://react.dev/",
  },
  {
    name: "VueJs",
    icon: "vuejs.png",
    url: "https://vuejs.org/",
  },
  {
    name: "NodeJs",
    icon: "node.png",
    url: "https://nodejs.org/en",
  },
  {
    name: "C-sharp",
    icon: "c-sharp.png",
    url: "https://learn.microsoft.com/pt-br/dotnet/csharp/",
  },
  {
    name: "MySql-SQL",
    icon: "mysql.png",
    url: "https://www.mysql.com/",
  },
  {
    name: "Git & GitHub",
    icon: "git.png",
    url: "https://git-scm.com/",
  },
];
const iconsInfo = [
  { icon: "fa-facebook", url: "https://www.facebook.com/jesimielnobrega25" },
  {
    icon: "fa-instagram",
    url: "https://www.instagram.com/jesimielnobrega25?igsh=MTIwaTA0emVsbzR6cQ==",
  },
  { icon: "fa-linkedin", url: "https://www.linkedin.com/in/jesimielnobrega/" },
  { icon: "fa-github", url: "https://github.com/jesimielnobrega" },
];
const menuOptions = ["Início", "Sobre", "Habilidades", "Contactos"];

const contacts = document.getElementById("contacts");
const contactsDiv = document.createElement("div");
const opt = document.getElementById("opt");
const hab = document.getElementById("hab");

menuOptions.forEach((option) => {
  const spanEl = document.createElement("span");
  spanEl.innerHTML = option;
  if (option === "Habilidades") {
    spanEl.classList.add("habi");
  }
	if(option==="Contactos"){
		spanEl.classList.add("cont");
	}
  spanEl.classList.add("sp");
  opt.appendChild(spanEl);
});

iconsInfo.forEach((info) => {
  const linkEl = document.createElement("a");
  linkEl.href = info.url;
  const iconElement = document.createElement("i");
  iconElement.classList.add("fa-brands", info.icon, "fa-xl");
  linkEl.appendChild(iconElement);
  contactsDiv.appendChild(linkEl);
  contactsDiv.classList.add("cont_div");
});

tecnologies.forEach((tec) => {
  const linkEl = document.createElement("a");
  const iconElement = document.createElement("img");
  const tecEl = document.createElement("div");
  const descEl = document.createElement("p");
  descEl.innerText = tec.name;
	descEl.style.cursor="pointer"
  linkEl.href = tec.url;
	linkEl.target="_blanck"
  iconElement.src = tec.icon;
  linkEl.appendChild(iconElement);
  tecEl.appendChild(linkEl);
  tecEl.appendChild(descEl);
  tecEl.classList.add("tec");
  hab.appendChild(tecEl);
});

contacts.appendChild(contactsDiv);

document.getElementsByClassName("habi")[0].addEventListener("click", () => {
  scrollToElement("habilities");
});

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    // Calcula a posição do elemento na página
    const elementPosition = element.getBoundingClientRect().top;
    // Rola a página até o elemento
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth", // Rola suavemente
    });
  }
}

[...document.getElementsByClassName("cont")].map((el, index)=>{
	el.addEventListener("click", () => {
		if(index%2==0){
			scrollToElement("conts")
		}
		const element = document.getElementById('arrow');
		element.classList.add("animated")
		element.style.display="block"
		setTimeout(() => {
			element.style.display="none"
				element.classList.remove("animated")
		}, 5000)
	});
})

document.getElementById("ab").addEventListener("click",()=>{
	scrollToElement("about")
})

