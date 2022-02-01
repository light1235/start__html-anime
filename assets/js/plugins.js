const textWrapper = document.querySelector('.TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1 .content__top .content__group-inner .content__title .real-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const DescriptionWrapper = document.querySelector('.TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1 .content__top .content__group-inner .content__description .real-text');
DescriptionWrapper.innerHTML = DescriptionWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime({
     targets: '.TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1',
     translateY: [200, 0],
     opacity: [0, 1],
     rotateZ: [15,0],
     duration: 1000,
     delay: 200,
     easing: 'easeOutExpo',
     complete() {
          anime({
               targets: '.TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1 .content__top .content__group-inner .content__title',
               translateX: [50,0],
               translateY:[50,0],
               opacity:[0,1],
               rotateZ:[5,0],
               delay:200,
               duration:1500,
               easing:'easeOutExpo',
               begin() {
                    anime({
                         targets: '.TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1 .content__top .content__group-inner .content__title .real-text',
                         textShadow: ['10px 3px 10px , 1px 3px 10px ','19px 7px 45px #ffffff, 1px 3px 41px #ffffff','0px 0px 0px #ffffff, 0px 0px 0px #ffffff' ],
                         duration: 4000,
                         easing:'easeOutExpo',
                         complete(){
                              anime({
                                   targets: '.TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1 .content__top .content__group-inner .content__description .real-text',
                                   textShadow: ['10px 3px 10px , 1px 3px 10px ','9px 7px 15px #ffffbb, 1px 3px 15px #ffffbb','0px 0px 0px #ffffbb, 0px 0px 0px #ffffbb' ],
                                   duration: 4000,
                                   easing:'easeOutExpo',
                                   complete() {
                                        anime({
                                             targets: '.TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1',
                                             translateY:[0,200],
                                             opacity:[1,0],
                                             rotateZ:15,
                                             duration: 1500,
                                             delay:1000,
                                             easing:'easeOutExpo',
                                             complete(){
                                                  anime({
                                                       targets: '.TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1 .content__top .content__group-inner .content__description .letter, .TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1 .content__top .content__group-inner .content__title',
                                                       opacity: 0,
                                                       duration: 10,
                                                       easing:'easeOutExpo',
                                                  });
                                             }
                                        });

                                   }
                              });
                         }
                    });
               }
          });

          anime({
               targets: '.TERADEK_LOWER_THIRD_ANIMATION_10 .scene-1 .scene-1__content .content__group-1 .content__top .content__group-inner .content__description .letter',
               opacity: [0,1],
               duration: 1500,
               easing:'easeOutExpo',
               delay: (el, i) => 45 * (i+1),
          });

     }
});
