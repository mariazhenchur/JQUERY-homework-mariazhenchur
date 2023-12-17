/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */


$(function () {
  const $headings = $('h2.head');
  $headings.css('background-color', 'green');

  $headings.each(function () {
    const $innerElement = $(this).children('.inner');
    $innerElement.css('font-size', '35px');
  });
});


//////////////or///////////////


// $(function () {
//   $('.head').css('background-color', 'green');
//   $('.inner').css('font-size', '35px');
// });