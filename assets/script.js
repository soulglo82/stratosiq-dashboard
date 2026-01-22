// StratosIQ Dashboard Filter Script
document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const engineSections = document.querySelectorAll(".engine-section");

  if (!filterButtons.length || !engineSections.length) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", function() {
      const filter = this.dataset.filter;

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      // Show/hide sections
      if (filter === "all") {
        engineSections.forEach(section => section.style.display = "block");
      } else {
        engineSections.forEach(section => {
          const engine = section.dataset.engine;
          section.style.display = (engine === filter) ? "block" : "none";
        });
      }
    });
  });
});