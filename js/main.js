const channel = () => {
  let swiper = new Swiper('.channel-slider', {

    loop: true,
    slidesPerView: 6,

    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  })
}

const recommended = () => {
  let swiper = new Swiper('.recommended-slider', {

    loop: true,
    slidesPerView: 3,

    navigation: {
      nextEl: '.channel-recommended-button-next',
      prevEl: '.channel-recommended-button-prev',
    },
  })
}


const food_drink = () => {
  let swiper = new Swiper('.channel-food-slider', {

    loop: true,
    slidesPerView: 6,

    navigation: {
      nextEl: '.channel-food-button-next',
      prevEl: '.channel-food-button-prev',
    },
  })
}





channel();
recommended();
food_drink();
