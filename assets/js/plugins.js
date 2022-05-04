

anime({
     targets: '.TERADEK_LOWER_THIRD_ANIMATION_32 .scene-1 .scene-1__content .content__group-1',
     width:[0+'%',100+'%'],
     easing:'easeInOutExpo',
     duration:1000,
     delay:500,
});
anime({
     targets: '.TERADEK_LOWER_THIRD_ANIMATION_32 .scene-1 .scene-1__content .content__group-1 .content__left--decoration',
     left:[0+'%',100+'%'],
     easing:'easeInOutQuad',
     duration:1200,
     delay:650,
     complete: () => {
          anime({
               targets: '.TERADEK_LOWER_THIRD_ANIMATION_32 .scene-1 .scene-1__content .content__group-1 .content__left--decoration',
               easing:'linear',
               duration:600,
               left: [
                    { value: -20+'%', duration: 1 },
                    { value: 20+'%', duration: 500, delay: 100 },
                    { value: -8+'%', duration: 500, delay: 100 },
                    { value: 2+'%', duration: 500, delay: 100 },
                    { value: -25+'%', duration: 500, delay: 200 },
                    { value: 100+'%', duration: 1, delay: 50 }
               ],
               complete:() => {
                    anime({
                         targets: '.TERADEK_LOWER_THIRD_ANIMATION_32 .scene-1 .scene-1__content .content__group-1',
                         width:[100+'%',0+'%'],
                         easing:'easeInOutExpo',
                         duration:1000,
                         delay:250,
                    });
                    anime({
                         targets: '.TERADEK_LOWER_THIRD_ANIMATION_32 .scene-1 .scene-1__content .content__group-1 .content__left--decoration',
                         left:[100+'%',0+'%'],
                         easing:'linear',
                         duration:1000,
                    });
               }
          });
     }
});
