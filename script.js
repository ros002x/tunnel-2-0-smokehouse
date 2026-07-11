const topbar = document.querySelector("[data-topbar]");
const filterButtons = document.querySelectorAll("[data-filter]");
const menuItems = document.querySelectorAll("[data-category]");

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

    menuItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hidden", !shouldShow);
    });
  });
});
