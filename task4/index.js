// ## Task 4

// В папці [task4](task4/) створіть HTML-сторінку з 6 чекбоксами. Підключіть бібліотеку **JQuery** та напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.


$(function () {
    $('.checkbox').change(function () {
        const checkedCheckboxes = $('.checkbox:checked');

        if (checkedCheckboxes.length >= 3) {
            $('.checkbox').attr('disabled', true);
        } else {
            $('.checkbox').attr('disabled', false);
        }
    });
});