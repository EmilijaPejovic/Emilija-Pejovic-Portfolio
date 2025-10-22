// ====== Projects Data ======
const projects = [
  {
    title: "Zenlorien",
    description:
      "Designed and developed an Android application for maintaining mental health through various psychotherapeutic exercises provided by a licensed psychotherapist.<br><br>Built using Java, Android SDK, XML, REST APIs and SQLite.",
    link: "https://github.com/EmilijaPejovic/Zenlorien-Demo",
  },
  {
    title: "Volare Fly",
    description:
      "Designed and developed a touristic agency website to reach a collection of customers, offering them various trips such as vacations, winter stays and visits to European cities.<br><br>Built using Angular, HTML5, CSS3 and TypeScript.",
  },
  {
    title: "Razen Travel",
    description:
      "Designed and developed a touristic agency website to reach a collection of customers, offering them various trips such as vacations, winter stays and visits to European cities.<br><br>Built using Angular, HTML5, CSS3 and TypeScript.",
  },
  {
    title: "Vanilia",
    description:
      "Designed and developed a bakery website to reach a collection of customers, providing them with quality baked goods.<br><br>Built using HTML5, CSS3, JavaScript and JQuery.",
  },
];

// ====== Render Projects ======
const projectGrid = document.getElementById("projectGrid");

projects.forEach((project) => {
  const div = document.createElement("div");
  div.classList.add("project");
  div.innerHTML = `
    <h4>${project.title}</h4>
    <p>${project.description}</p>
    ${project.link ? `<a href="${project.link}" target="_blank">Check it out on GitHub</a>` : ""}
  `;
  projectGrid.appendChild(div);
});

// ====== Current Year ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== Responsive Navigation ======
const header = document.querySelector("header");
const nav = header.querySelector("nav");
const menuButton = document.createElement("div");

menuButton.classList.add("menu-toggle");
menuButton.innerHTML = '<i class="fas fa-bars"></i>';
header.insertBefore(menuButton, nav);

menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");
  const icon = menuButton.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark"); // menja u "X"
});

// Automatsko zatvaranje menija kada se klikne link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuButton.querySelector("i").classList.add("fa-bars");
    menuButton.querySelector("i").classList.remove("fa-xmark");
  });
});
