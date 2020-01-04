// Wrap every letter in a span

// let textWrapper = document.querySelector('.ml1 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

//scrollmagic.io

var controller = new ScrollMagic.Controller();

var animation = anime({
    targets: ".element",
    scale: [1.5]
});

new ScrollMagic.Scene({
    triggerElement: '.trigger',
    duration: "130%",
    triggerHook: 0.3
})
     .setAnime(animation)
     .addIndicators()
     .addTo(controller);


// observer on scroll 


function ups() {
     anime({
          targets: '.detection',
          easing: 'linear',
          duration: 2500,
          translateY: 250
     });
}
(function () {
     const images = document.querySelectorAll('.detection');

   let  observer = new IntersectionObserver((entries) => {

          entries.forEach(entry => {
               if(entry.intersectionRatio > 0) {
                         entry.target.style.backgroundColor = '#000';
                         ups();
               }
               else {
                    entry.target.style.backgroundColor = '#eaea';
               }
          })

     });

     images.forEach(image => {
          observer.observe(image)
     });
})();

//use but have some problem with vh to ways observe

$( document ).ready(function() {
     $(window).scroll(function() {
     let square = document.querySelector('.header__square .section-number');
     let leftLine = document.querySelector('.decoration__text');
     let arrowTop = document.querySelector('.arrow-top a');
     let arrowBottom = document.querySelector('.arrow-bottom a');

          var hT = $('#wealth').offset().top,
               hH = $('#wealth').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
          if (wS > (hT+(hH-50)-wH) && (hT > wS) && (wS+wH > hT+(hH-50))){
               square.innerText = '02';
          leftLine.innerHTML ='OUR GOAL';
          arrowTop.href = "#partners";
          arrowBottom.href = "#strong";
          }
     });
});

// and last





