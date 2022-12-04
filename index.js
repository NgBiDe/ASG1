let shoppingCart = document.querySelector('.shopping-cart'); /*shoppingcart*/

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
}

var swiper = new Swiper(".sponsor-slider", { /*img slider for sponsors*/
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});