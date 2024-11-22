new Swiper('.card-wrapper', {
    // direction: 'vertical',
    loop: true,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        },
    }
  });