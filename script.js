document.addEventListener("DOMContentLoaded", function () {
    const marqueeContainer = document.getElementById("marqueeContainer");
    const cardContainer = document.querySelector('.marquee-container');
  
    
    const initialCards = cardContainer.innerHTML;
    cardContainer.innerHTML += initialCards;
  

    const cardCount = document.querySelectorAll('.card').length;
    const animationDuration = cardCount *5  + 's';
    document.styleSheets[0].insertRule(`.marquee-container { animation-duration: ${animationDuration}; }`, 0);
  });
