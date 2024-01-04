// slick slider  for featured product
$('.main_slider ').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: true
});
// slick slider  for featured product

// slick slider for top category
$('.top_slider ').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: true
});
// slick slider  for top category


// mixitup for leatest product category
// scripts.js
document.addEventListener('DOMContentLoaded', function () {
      // Initialize MixItUp
      var containerEl = document.querySelector('.containerEl');
      var mixer = mixitup(containerEl, {
          selectors: {
              target: '.mix', 
          },
      });
  
      // Filter items on page load
      mixer.filter('.category-a');
});
  
// mixitup for leatest product category
 
// mixitup for discount items
// scripts.js
document.addEventListener('DOMContentLoaded', function () {
      // Initialize MixItUp
      var contain_items = document.querySelector('.contain_items');
      var mixer = mixitup(contain_items,  {
            selectors: {
                target: '.mix', 
            },
        });
    
        // Filter items on page load
        mixer.filter('.category-a');
});
// mixitup for discount items 
    

// custom js for blog page
$('.main_blog').slick({
      arrows: false,
      dots: true
});
// custom js for blog page

// for about us client
$('.information').slick({
      arrows: false,
      dots: true
});
// for about us client