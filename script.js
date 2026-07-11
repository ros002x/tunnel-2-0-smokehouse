const topbar = document.querySelector("[data-topbar]");
const filterButtons = document.querySelectorAll("[data-filter]");
const dishes = document.querySelectorAll("[data-category]");

const updateTopbar = () => {
  topbar.classList.toggle("is-solid", window.scrollY > 18);
};

window.addEventListener("scroll", updateTopbar, { passive: true });
updateTopbar();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    dishes.forEach((dish) => {
      const shouldShow = filter === "all" || dish.dataset.category === filter;
      dish.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
