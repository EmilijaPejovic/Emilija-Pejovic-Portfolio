// Scroll to top when refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

// ====== Projects Data ======
const projects = [
  {
    title: "Eagle Shop",
    badge: "E-commerce Frontend",
    description:
      "A premium e-commerce frontend focused on structured product presentation, responsive behavior, and a clean shopping experience.",
    details:
      "<span class='text-accent-blue'>Built with scalable frontend architecture, reusable UI patterns, and cart and checkout flows, with preparation for future backend and API integration.</span>",
    link: "",
    linkLabel: "",
  },
  {
    title: "Zenlorien",
    badge: "Android App",
    description:
      "An Android application focused on mental well-being, offering guided psychotherapeutic exercises created by a licensed psychotherapist.",
    details:
      "<span class='text-accent-blue'>Built with Java, Android SDK, REST APIs, and SQLite, with focus on structured mobile UI and local data management.</span>",
    link: "https://github.com/EmilijaPejovic/Zenlorien-Demo",
    linkLabel: "View on GitHub",
  },
  {
    title: "Volare Fly",
    badge: "Angular Web App",
    description:
      "A travel agency website focused on browsing destinations, seasonal offers, and trip categories.",
    details:
      "<span class='text-accent-blue'>Built with Angular, HTML5, CSS3, and TypeScript, with emphasis on component-based structure and responsive layout.</span>",
    link: "",
    linkLabel: "",
  },
  {
    title: "Razen Travel",
    badge: "Angular Web App",
    description:
      "A travel website designed to organize vacation packages and city trips with clear navigation and structure.",
    details:
      "<span class='text-accent-blue'>Built with Angular, HTML5, CSS3, and TypeScript, focusing on maintainable frontend architecture and usability.</span>",
    link: "",
    linkLabel: "",
  },
  {
    title: "Vanilia",
    badge: "Website",
    description:
      "A bakery website focused on clean layout and approachable product presentation.",
    details:
      "<span class='text-accent-blue'>Built with HTML5, CSS3, JavaScript, and jQuery, with emphasis on usability and visual consistency.</span>",
    link: "",
    linkLabel: "",
  },
];

// ====== Render Projects ======
const featuredProjectsGrid = document.getElementById("featuredProjectsGrid");
const secondaryProjectsGrid = document.getElementById("secondaryProjectsGrid");

const featuredProjects = projects.slice(0, 2);
const secondaryProjects = projects.slice(2);

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project";

  const badgeHtml = project.badge
    ? `<span class="project-badge">${project.badge}</span>`
    : "";

  const linkHtml = project.link
    ? `<a
         href="${project.link}"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="${project.title} ${project.linkLabel || "View Project"}"
       >
         ${project.linkLabel || "View Project"}
       </a>`
    : "";

  card.innerHTML = `
    ${badgeHtml}
    <h4>${project.title}</h4>
    <p>${project.description}</p>
    ${project.details ? `<p class="project-details">${project.details}</p>` : ""}
    ${linkHtml}
  `;

  return card;
}

if (featuredProjectsGrid) {
  featuredProjects.forEach((project) => {
    featuredProjectsGrid.appendChild(createProjectCard(project));
  });
}

if (secondaryProjectsGrid) {
  secondaryProjects.forEach((project) => {
    secondaryProjectsGrid.appendChild(createProjectCard(project));
  });
}

// ====== Current Year ======
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

// ====== Responsive Navigation ======
const menuButton = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

if (menuButton && nav) {
  const icon = menuButton.querySelector("i");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }
  });

  nav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      if (target) {
        const targetTop = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      }

      nav.classList.remove("active");

      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
      }
    });
  });
}

// ====== Scroll to top when clicking profile picture ======
const profilePic = document.querySelector(".profile-pic");

if (profilePic) {
  profilePic.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ====== Back to Top Arrow ======
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ====== Dynamic Email Subject ======
const form = document.querySelector(".contact-form");
const subjectInput = form?.querySelector('input[name="subject"]');
const hiddenSubject = form?.querySelector("#hiddenSubject");

if (form && subjectInput && hiddenSubject) {
  form.addEventListener("submit", () => {
    hiddenSubject.value = `Portfolio: ${subjectInput.value}`;
  });
}

// ====== Contact Form Interactive State ======
const contactForm = document.querySelector(".contact-form");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const cancelMessageBtn = document.getElementById("cancelMessageBtn");

if (contactForm && sendMessageBtn && cancelMessageBtn) {
  const formFields = Array.from(
    contactForm.querySelectorAll(
      'input[type="text"], input[type="email"], textarea'
    )
  );

  let formActivated = false;

  const isFieldFilled = (field) => field.value.trim().length > 0;

  const areAllFieldsFilled = () => formFields.every(isFieldFilled);

  const hasAnyText = () => formFields.some((field) => field.value.trim().length > 0);

  const resetFormState = () => {
    contactForm.reset();

    if (hiddenSubject) {
      hiddenSubject.value = "";
    }

    formActivated = false;
    sendMessageBtn.disabled = true;
    cancelMessageBtn.classList.remove("show");
  };

  const updateFormState = () => {
    const anyText = hasAnyText();
    const allFilled = areAllFieldsFilled();

    sendMessageBtn.disabled = !allFilled;

    if (formActivated || anyText) {
      cancelMessageBtn.classList.add("show");
    } else {
      cancelMessageBtn.classList.remove("show");
    }
  };

  formFields.forEach((field) => {
    field.addEventListener("focus", () => {
      formActivated = true;
      updateFormState();
    });

    field.addEventListener("input", () => {
      formActivated = true;
      updateFormState();
    });
  });

  cancelMessageBtn.addEventListener("click", () => {
    resetFormState();
  });

  document.addEventListener("click", (event) => {
    const clickedOutsideForm = !contactForm.contains(event.target);
    const clickedToggleButton =
      typeof contactToggleBtn !== "undefined" &&
      contactToggleBtn &&
      contactToggleBtn.contains(event.target);

    if (clickedOutsideForm && !clickedToggleButton) {
      const anyText = hasAnyText();

      // If there is no entered text and the form was only activated by focus, 
      // clicking outside returns it to the initial state.
      if (formActivated && !anyText) {
        formActivated = false;
        updateFormState();
      }
    }
  });

  contactForm.addEventListener("submit", () => {
    sendMessageBtn.disabled = true;
  });

  updateFormState();
}

// ====== Contact Form Mobile Version ======
const contactToggleBtn = document.getElementById("contactToggleBtn");
const contactFormEl = document.querySelector(".contact-form");

if (contactToggleBtn && contactFormEl) {
  contactToggleBtn.addEventListener("click", () => {
    contactFormEl.classList.toggle("show");

    if (contactFormEl.classList.contains("show")) {
      contactToggleBtn.textContent = "Close Form";
    } else {
      contactToggleBtn.textContent = "Get in touch";
    }
  });
}

// Fade-in
const fadeEls = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

fadeEls.forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// ====== Featured Toggle (Mobile) ======
const featuredToggleBtn = document.getElementById("featuredToggleBtn");
const featuredPoints = document.getElementById("featuredPoints");

if (featuredToggleBtn && featuredPoints) {
  featuredToggleBtn.addEventListener("click", () => {
    featuredPoints.classList.toggle("show");

    if (featuredPoints.classList.contains("show")) {
      featuredToggleBtn.textContent = "Close";
    } else {
      featuredToggleBtn.textContent = "View details";
    }
  });
}

// ====== Hero Section View Projects Button - Scrtoll to to of the Selected Projects Section ======
const heroProjectsBtn = document.querySelector('.hero a[href="#projects"]');

if (heroProjectsBtn) {
  heroProjectsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector("#projects");
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    if (target) {
      const targetTop = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }
  });
}