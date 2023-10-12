
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const menuButton = document.querySelector(".navbar-toggler")
const menuShow = document.querySelector(".navbar-collapse")

function btnToggle() {

    if (menuShow.style.display === "none") {
      menuShow.style.display = "block";
    } else {
      menuShow.style.display = "none";
    }
  }


menuButton.addEventListener('click', btnToggle())