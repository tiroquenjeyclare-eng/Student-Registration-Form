const form = document.getElementById("registrationForm");
const overlay = document.getElementById("successOverlay");
const closeBtn = document.getElementById("closeOverlay");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  overlay.classList.remove("hidden");

  form.querySelectorAll("input, select, textarea, button").forEach(el => {
    el.disabled = true;
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});
