$(function () {
    // var swiper = new Swiper('.swiper-container', {
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });

    // var swiper = new Swiper('.swiper-container', {
    //     pagination: {
    //       el: '.swiper-pagination',
    //       dynamicBullets: true,
    //     },
    //   });

    /*진행 페이지 매김*/ 
    // var swiper = new Swiper('.swiper-container', {
    //     pagination: {
    //       el: '.swiper-pagination',
    //       type: 'progressbar',
    //     },
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });

    /*분수 페이지 매김*/
    // var swiper = new Swiper('.swiper-container', {
    //     pagination: {
    //       el: '.swiper-pagination',
    //       type: 'fraction',
    //     },
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   }); 

    /*마우스 휠, 키보드 loop 무한루프*/
    //  var swiper = new Swiper('.swiper-container', {
    //     cssMode: true,
    //     loop: true,
    //     navigation: {
    //      nextEl: '.swiper-button-next',
    //      prevEl: '.swiper-button-prev',
    //     },
    //     pagination: {
    //       el: '.swiper-pagination'
    //    },
    //     mousewheel: true,
    //     keyboard: true,
    //   });

      /*무한루프*/
    //   var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     loop: true,
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });

    /*자동재생*/
     var swiper = new Swiper('.swiper-container', {
         spaceBetween: 30,
         centeredSlides: true,
         autoplay: {
           delay: 1500,
           disableOnInteraction: false,
         },
        pagination: {
           el: '.swiper-pagination',
         clickable: true,
         },
         navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
 });

      /*루프 모드가있는 Thumbs Gallery*/
    //   var galleryThumbs = new Swiper('.gallery-thumbs', {
    //     spaceBetween: 10,
    //     slidesPerView: 4,
    //     loop: true,
    //     freeMode: true,
    //     loopedSlides: 5, //looped slides should be the same
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //   });
    //   var galleryTop = new Swiper('.gallery-top', {
    //     spaceBetween: 10,
    //     loop:true,
    //     loopedSlides: 5, //looped slides should be the same
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //     thumbs: {
    //       swiper: galleryThumbs,
    //     },
    //   });
});
