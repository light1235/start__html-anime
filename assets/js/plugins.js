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

(function () {
     const images = document.querySelectorAll('.detection');

   let  observer = new IntersectionObserver((entries) => {

          entries.forEach(entry => {
               if(entry.intersectionRatio > 0) {
                         entry.target.style.backgroundColor = '#000';
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
