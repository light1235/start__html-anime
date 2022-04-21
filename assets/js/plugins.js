anime({
     targets: '.TERADEK_LOWER_THIRD_ANIMATION_17 .scene-1 .scene-1__content .content__group-1',
     width:[0 +'%',100 + '%'],
     duration:1500,
     easing: 'easeInOutExpo',
     delay:1000,
     complete:() => {
          anime({
               targets: '.content__top-separator, .content__bottom-separator',
               translateX: [-100 + '%', 0 + '%'],
               duration:1500,
               easing: 'easeInOutExpo',
          });
          anime({
               targets: '.TERADEK_LOWER_THIRD_ANIMATION_17 .scene-1 .scene-1__content .content__group-1 .content__image img',
               rotate: {
                    value: '+=2turn', // 0 + 2 = '2turn'
                    duration: 2800,
                    easing: 'easeInOutSine'
               },
               duration: 1800,
               easing: 'easeInOutSine',
               complete: () => {
                    anime({
                         targets: '.content__top-separator, .content__bottom-separator',
                         translateX: [0 + '%', -100 + '%'],
                         duration:1500,
                         easing: 'easeInOutExpo',
                    });
                    anime({
                         targets: '.TERADEK_LOWER_THIRD_ANIMATION_17 .scene-1 .scene-1__content .content__group-1',
                         width:[100 +'%',0 + '%'],
                         duration:1500,
                         easing: 'easeInOutExpo',
                         delay: 500,
                    });
               }
          })
     }
});
