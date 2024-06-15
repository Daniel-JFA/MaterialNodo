window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin, Flip);
  // gsap code here!
  gsap.to("#title-animation", {
    duration: 3,
    text: "A Software Engineer",
    ease: "none",
  });

  let projectCards = gsap.utils.toArray("figure");
  let currentProject = projectCards[0];

  projectCards.forEach((project) => {
    project.addEventListener("click", (e) => changeGrid(project));
  });

  function changeGrid(project) {
    if (project === currentProject) return;

    let state = Flip.getState(projectCards);

    currentProject.dataset.grid = project.dataset.grid;
    project.dataset.grid = "project-1";
    currentProject = project;

    Flip.from(state, {
      absolute: true,
      ease: "Power1.inOut",
    });
  }
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".dot");
  let currentSection = 0;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = index;
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentSection) {
      dot.classList.add("active");
    }
  });
});
