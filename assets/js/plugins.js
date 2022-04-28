
anime({
     targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--left',
     translateX: [-200,0],
     duration:1000,
     easing:'easeInOutQuad',
     opacity: [
          { value: 1, duration: 10 }
     ],
     complete: ()=>{
          anime({
               targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--left',
               easing:'easeInOutQuad',
               duration:1000,
               rotate:-90,
          });
     }
});
//
anime({
     targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--right',
     translateX: [200,0],
     duration:1000,
     easing:'easeInOutQuad',
     opacity: [
          { value: 1, duration: 10 }
     ],
     complete: ()=>{
          anime({
               targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--right',
               easing:'easeInOutQuad',
               duration:1000,
               rotate:-90,
               complete:()=>{
                    anime({
                         targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__group-1',
                         width:[0+'%',100+'%'],
                         easing: 'easeInOutExpo',
                         duration:1300,
                         padding:['20px 40px']
                    });
                    anime({
                         targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--right',
                         right:-67,
                         easing: 'easeInOutExpo',
                         duration:1300,
                    });
                    anime({
                         targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--left',
                         left:-67,
                         easing: 'easeInOutExpo',
                         duration:1300,
                         complete: () => {
                              anime({
                                   duration:2000,
                                   complete: () => {
                                        //time delay
                                        anime({
                                             targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--right',
                                             right:0,
                                             left: 0,
                                             easing: 'easeInOutExpo',
                                             duration:1300,
                                        });
                                        anime({
                                             targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--left',
                                             right:0,
                                             left: 0,
                                             easing: 'easeInOutExpo',
                                             duration:1300,
                                             complete: () => {
                                                  anime({
                                                       targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--right',
                                                       easing:'easeInOutQuad',
                                                       duration:1000,
                                                       rotate:0,
                                                       opacity:0,
                                                  });
                                                  anime({
                                                       targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__triangle--left',
                                                       easing:'easeInOutQuad',
                                                       duration:1000,
                                                       rotate:0,
                                                       opacity:0,
                                                  });
                                             }
                                        });
                                        anime({
                                             targets: '.TERADEK_LOWER_THIRD_ANIMATION_25 .scene-1 .scene-1__content .content__group-1',
                                             width:[100+'%',0+'%'],
                                             easing: 'easeInOutExpo',
                                             duration:1300,
                                             padding:['20px 0px']
                                        });
                                   }
                              });


                         }
                    });
               }
          });
     }
});


