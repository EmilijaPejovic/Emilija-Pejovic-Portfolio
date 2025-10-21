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
      description: "Designed and developed a touristic agency website to reach a collection of customers, offering them various trips such as vacations, winter stays and visits to European cities.<br><br>Built using Angular, HTML5, CSS3 and TypeScript."
    },
    {
      title: "Razen Travel",
      description: "Designed and developed a touristic agency website to reach a collection of customers, offering them various trips such as vacations, winter stays and visits to European cities.<br><br>Built using Angular, HTML5, CSS3 and TypeScript."
    },
    {
      title: "Vanilia",
      description: "Designed and developed a bakery website to reach a collection of customers, providing them with quality baked goods.<br><br>Built using HTML5, CSS3, JavaScript and JQuery."
    }
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
  