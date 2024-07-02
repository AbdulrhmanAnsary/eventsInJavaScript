// Event Handling

let button = document.getElementById("active-button")

button.addEventListener("click", function(event) {
  setTimeout(function(){
  alert(event.target.textContent);
  }, 100)
})
