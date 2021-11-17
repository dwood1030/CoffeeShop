const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Javascript for contact form
function testVariable() {
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("email").value;
    var result = 'Thank you for signing up, ' + strText + '!';
    if (strText == "") {
      alert("Name is required!");
      return false;
    } else if (strText1 == "") {
        alert("Email is required!");
        return false;
    } else {
      document.getElementById('spanResult').textContent = result;}
}   