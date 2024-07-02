const userNameDisplay = document.getElementById("user-name-display")
const form = document.getElementById("form")

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (event.target.querySelector("input").value.length > 0) {
    userNameDisplay.textContent = event.target.querySelector("input").value
  }
})