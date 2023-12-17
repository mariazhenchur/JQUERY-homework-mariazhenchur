/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */


$(function () {
  const headers = $('h3');

  headers.each(function () {
    const nextDiv = $(this).next('div');

    if (nextDiv.length > 0) {
      $(this).before(nextDiv);
    }
  });
});
