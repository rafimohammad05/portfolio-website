// When scrolling to section, fade-up animation starts
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(aboutSection);
});
