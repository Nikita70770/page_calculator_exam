// Фильтры 'Назначение'
const filters_appointment = document.querySelectorAll('.appointment > *');
// Фильтры 'Конструктивная схема'
const filters_design_scheme = document.querySelectorAll('.design_scheme > *');
// Фильтры 'Категория сложности объекта'
const filters_complexity_obj = document.querySelectorAll('.complexity_obj > *');
// Фильтры 'Категория сложности обследования'
const filters_complexity_survey = document.querySelectorAll('.complexity_survey > *');
// Фильтры 'Категория сложности обмерных работ'
const filters_complexity_works = document.querySelectorAll('.complexity_works > *');
// Фильтры 'Исходные чертежи'
const filters_original_drawings = document.querySelectorAll('.original_drawings > *');
// Фильтры 'Сейсмичность района обследования'
const filters_seismicity_area = document.querySelectorAll('.seismicity_area > *');
// Фильтры 'Цеха с агрессивным воздействием окружающей среды'
const filters_aggressiveness = document.querySelectorAll('.aggressiveness > *');

// Массив чекбоксов внутри столбца 'Обследование строительных конструкций'
// const building_structures = document.querySelectorAll('.building_structures > * input[type="checkbox"]');
const building_structures = document.querySelectorAll(
    '.section_column.object_parameters_2 > .section_row label:nth-child(1) input'
);
const cb_select_all_1 = building_structures[0];

// Массив чекбоксов внутри столбца 'Обмерные работы строительных конструкций'
// const measuring_works = document.querySelectorAll('.measuring_works > * input[type="checkbox"]');
const measuring_works = document.querySelectorAll(
    '.section_column.object_parameters_2 > .section_row label:nth-child(2) input'
);

const cb_select_all_2 = measuring_works[0];
// Массив чекбоксов внутри столбца 'Обследование инженерных систем'
const engineering_systems = document.querySelectorAll(
    '.section_column.object_parameters_2 > .section_row label:nth-child(3) input'
);
const cb_select_all_3 = engineering_systems[0];

// Кнопка 'Скачать смету'
const btn_download_estimate = document.querySelector('.btn_download_estimate');
const sub_menu = document.querySelector('.sub_menu');

// Добавление обработчика события 'change'
filters_appointment.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        checkbox_change(filters_appointment, e);
    });
});

// Добавление обработчика события 'change'
filters_design_scheme.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        checkbox_change(filters_design_scheme, e);
    });
});

// Добавление обработчика события 'change'
filters_complexity_obj.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        checkbox_change(filters_complexity_obj, e);
    });
});

// Добавление обработчика события 'change'
filters_complexity_survey.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        checkbox_change(filters_complexity_survey, e);
    });
});

// Добавление обработчика события 'change'
filters_complexity_works.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        checkbox_change(filters_complexity_works, e);
    });
});

// Добавление обработчика события 'change'
filters_original_drawings.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        checkbox_change(filters_original_drawings, e);
    });
});

// Добавление обработчика события 'change'
filters_seismicity_area.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        checkbox_change(filters_seismicity_area, e);
    });
});

// Добавление обработчика события 'change'
filters_aggressiveness.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        checkbox_change(filters_aggressiveness, e);
    });
});

// Чекбокс для выбора всех элементов в столбце 'Обследование строительных конструкций'
cb_select_all_1.addEventListener('change', () => {
    if (cb_select_all_1.checked == true) {
        building_structures.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else if (cb_select_all_1.checked == false) {
        building_structures.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
});

// Чекбокс для выбора всех элементов в столбце 'Обмерные работы строительных конструкций'
cb_select_all_2.addEventListener('change', () => {
    if (cb_select_all_2.checked == true) {
        measuring_works.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else if (cb_select_all_2.checked == false) {
        measuring_works.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
});

// Чекбокс для выбора всех элементов в столбце 'Обследование инженерных систем'
cb_select_all_3.addEventListener('change', () => {
    if (cb_select_all_3.checked == true) {
        engineering_systems.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else if (cb_select_all_3.checked == false) {
        engineering_systems.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
});

building_structures.forEach(function (checkbox) {
    if (checkbox != cb_select_all_1) {
        checkbox.addEventListener('change', () => {
            cb_select_all_1.checked = false;
        });
    }
});

measuring_works.forEach(function (checkbox) {
    if (checkbox != cb_select_all_2) {
        checkbox.addEventListener('change', () => {
            cb_select_all_2.checked = false;
        });
    }
});

engineering_systems.forEach(function (checkbox) {
    if (checkbox != cb_select_all_3) {
        checkbox.addEventListener('change', () => {
            cb_select_all_3.checked = false;
        });
    }
});

// Обработчик события 'change'
function checkbox_change(filters, checkbox) {
    for (item of filters) {
        item.classList.remove('active');
    }
    active_elem = checkbox.target.parentNode;
    active_elem.classList.add('active');
}

btn_download_estimate.onclick = () => {
    sub_menu.classList.toggle('show');
};

// window.onclick = () => {};
