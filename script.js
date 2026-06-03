const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thanks! Your message was submitted.");
  form.reset();
});
