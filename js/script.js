document.getElementById('menuButton').addEventListener('click', openNav);
document.getElementById('closeButton').addEventListener('click', closeNav);

// Get all the navigation links
var navLinks = document.querySelectorAll('.overlay a');

// Add an event listener to each navigation link
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', closeNav);
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  console.log("Navigation opened"); // This will print to the console when the nav is opened
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  console.log("Navigation closed"); // This will print to the console when the nav is closed
}

window.addEventListener('scroll', function() {
  var scrollMessage = document.getElementById('scroll-message');
  var titleText = document.querySelector('.title-text');
  var menuButton = document.getElementById('menuButton');
  var writingsSection = document.getElementById('writings');
  var codingSection = document.getElementById('coding-projects');

  if (window.scrollY > 0) {
    scrollMessage.style.opacity = '0';
    titleText.style.opacity = '1';
  } else {
    scrollMessage.style.opacity = '1';
    titleText.style.opacity = '0';
  }

  if (window.scrollY >= writingsSection.offsetTop && window.scrollY < codingSection.offsetTop) {
    menuButton.className = 'color2';
  } else if (window.scrollY >= codingSection.offsetTop) {
    menuButton.className = 'color3';
  } else {
    menuButton.className = 'color1';
  }
});