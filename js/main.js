const channel = () => {
  let swiper = new Swiper('.channel-slider', {

    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      },
    },


    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  })

  if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
  }
}

// Канал рекомендации
const recommended = () => {
  let swiper = new Swiper('.recommended-slider', {

    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1600: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 2
      },
    },


    navigation: {
      nextEl: '.channel-recommended-button-next',
      prevEl: '.channel-recommended-button-prev',
    },
  })
  if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
  }
}


const food_drink = () => {
  let swiper = new Swiper('.channel-food-slider', {

    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      },
    },

    navigation: {
      nextEl: '.channel-food-button-next',
      prevEl: '.channel-food-button-prev',
    },
  })
  if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
  }
}

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});


channel();
recommended();
food_drink();