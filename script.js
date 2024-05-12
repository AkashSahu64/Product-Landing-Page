function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // JavaScript for slideshow
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }
  
  function startCountdown() {
    var countDownDate =
      new Date().getTime() + 2 * 60 * 60 * 1000 + 36 * 60 * 1000 + 59 * 1000; // Current time + 2 hours, 36 minutes, and 59 seconds
  
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
  
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      var countdownElement = document.getElementById("countdown");
      if (countdownElement) {
        countdownElement.innerHTML =
          hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
          clearInterval(x);
          countdownElement.innerHTML = "EXPIRED";
        }
      }
    }, 1000);
  }
  
  // Start countdown when page loads
  window.onload = function () {
    startCountdown();
  };
  
  // Restart countdown when page is refreshed
  window.onbeforeunload = function () {
    clearInterval(x);
    startCountdown();
  };
  // Restart countdown when page is refreshed
  window.onbeforeunload = function () {
    clearInterval(x);
    startCountdown();
  };
  
  // ==========third===============
  
  document.querySelectorAll(".accordion-button").forEach((accordionButton) => {
    accordionButton.addEventListener("click", () => {
        const accordionContent = accordionButton.nextElementSibling;
        const expanded = accordionButton.getAttribute("aria-expanded") === "true";
  
        if (expanded) {
            accordionContent.style.display = "none"; // Hide the answer
            accordionButton.setAttribute("aria-expanded", "false");
        } else {
            accordionContent.style.display = "block"; // Show the answer
            accordionButton.setAttribute("aria-expanded", "true");
        }
    });
  });
  
  
  