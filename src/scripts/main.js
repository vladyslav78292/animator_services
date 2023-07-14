'use strict';

const feedback = document.querySelector('.feedback__slider');
const feedback_offset = 300;

function feedbackUpdateHeight(height) {
  if (!height) return false;
  feedback.style.height = `${height + feedback_offset}px`;
}

if (feedback) {
  feedbackUpdateHeight(feedback.querySelector('.feedback__item').offsetHeight);

  const feedback_slider = new Swiper(feedback, {
    direction: 'vertical',
    slidesPerView: 'auto',
    autoHeight: true,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  feedback_slider.on('slideChange', () => {
    setTimeout(() => {
      feedbackUpdateHeight(feedback_slider.slides[feedback_slider.activeIndex].offsetHeight);
    }, 300);
  });
}
