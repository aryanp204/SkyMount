// function kavan() {
//   let a = 10;
//   function outer() {
//     let b = 20;
//     function inner() {
//       console.log(a, b);
//     }
//     return inner;
//   }
//   return outer;
// }
// var end = kavan()();
// end();

$(document).ready(function () {
  // When the user scrolls the page
  $(window).scroll(function () {
    // Check the scroll position
    if ($(this).scrollTop() > 200) {
      // If scrolled down 100px or more, add the 'active' class to the navbar
      $('.navbar').addClass('common-background');
    } else {
      // If scrolled up less than 100px, remove the 'active' class from the navbar
      $('.navbar').removeClass('common-background');
    }
  });
});
