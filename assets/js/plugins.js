
var tl = anime.timeline({
     // easing: 'easeOutExpo',
     // duration: 750
});

// Add children
tl
     .add({
          targets: '.TERADEK_LOWER_THIRD_ANIMATION_14 .scene-1 .scene-1__content .content__group-1, .TERADEK_LOWER_THIRD_ANIMATION_14 .scene-1 .scene-1__content .content__group-1 .content__group-layer-2',
          width:[0+'%',100+'%'],
          elasticity: 600,
          duration:700,
          easing:'easeOutQuad',
          delay: (el, i) => 1000 * (i + 1)
     })
     .add({
          targets: '.TERADEK_LOWER_THIRD_ANIMATION_14 .scene-1 .scene-1__content .content__group-1 .content__group-layer-2 .layer-inner .content__image img',
          rotate: {
               value: '+=2turn', // 0 + 2 = '2turn'
               duration: 2800,
               easing: 'easeInOutSine'
          },
          duration: 1800,
          easing: 'easeInOutSine'
     })
     .add({
          targets: '.TERADEK_LOWER_THIRD_ANIMATION_14 .scene-1 .scene-1__content .content__group-1',
          width:[100+'%',0+'%'],
          easing:'easeOutExpo',
          duration:800,
     })
     .add({
          targets: '.TERADEK_LOWER_THIRD_ANIMATION_14 .scene-1 .scene-1__content .content__group-1 .content__group-layer-2',
          width:[100+'%',0+'%'],
          easing:'easeOutExpo',
          duration:800,
     });
