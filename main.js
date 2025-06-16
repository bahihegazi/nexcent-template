const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
