/**
Для усіх посилань зі сторінки додайте атрибут target="\_blank", якщо
href починається на`https://
 */


$(function () {
  let $httpsLinks = $('a[href^="https://"]');
  $httpsLinks.attr('target', '_blank');
});

