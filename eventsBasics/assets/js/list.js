// Event Delegation

const list = document.getElementById("list")

list.addEventListener("click", function(event) {
  if (event.target.matches("li")) {
    event.target.style.textDecoration = "line-through";
  }
})