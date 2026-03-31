const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

// Apply saved theme on load
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.checked = true;
} else {
  themeToggle.checked = false;
}

const applyTheme = (isDark) => {
  if (isDark) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

themeToggle.addEventListener("change", (event) => {
  applyTheme(event.target.checked);
});