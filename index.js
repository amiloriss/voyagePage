$(document).ready(function() {
  $('.website-nav-adaptive').on('click', function() {
    $('.website-nav-adaptive .line-first').toggleClass('line-first-active');
    $('.website-nav-adaptive .line-second').toggleClass('line-second-active');

    $('.website-nav-adaptive ul').slideToggle();
  });

  $('.search').on('click', function() {
    $('.search-place').css('display', 'block');

    $('.hidden-body').on('click', function() {
      $('.search-place').css('display', 'none');
    });
  });

  let line_image = document.getElementById('line-of-img');

  let img = $('.line-of-img > img');
  let collection_img = [img];
  let collection_img_length;

  collection_img.forEach(function(el) {
    collection_img_length = el.length;
  });

  line_image.style.width = collection_img_length * 1170 + 1170 + 'px';

  let count = 1;
  let move_slide = 0;

  $('.arrow-next').on('click', function() {
    if (count < collection_img_length) {
      move_slide += 1170;
      line_image.style.right = move_slide + 'px';
      count++;
    }
  });

  $('.arrow-back').on('click', function() {
    if (count > 1 && count <= collection_img_length) {
      move_slide -= 1170;
      line_image.style.right = move_slide + 'px';
      count--;
    }
  });
});
