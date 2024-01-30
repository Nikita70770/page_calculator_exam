//
const filters_appointment = document.querySelectorAll('.appointment > *');
//
const filters_design_scheme = document.querySelectorAll('.design_scheme > *');
//
const filters_complexity_obj = document.querySelectorAll('.complexity_obj > *');
//
const filters_complexity_survey = document.querySelectorAll('.complexity_survey > *');
//
const filters_complexity_works = document.querySelectorAll('.complexity_works > *');
//
const filters_original_drawings = document.querySelectorAll('.original_drawings > *');

//
const filters_seismicity_area = document.querySelectorAll('.seismicity_area > *');

//
const filters_aggressiveness = document.querySelectorAll('.aggressiveness > *');

//
const building_structures = document.querySelectorAll('.building_structures > * input[type="checkbox"]');
const cb_select_all_1 = building_structures[0];

//
const measuring_works = document.querySelectorAll('.measuring_works > * input[type="checkbox"]');
const cb_select_all_2 = measuring_works[0];

//
const engineering_systems = document.querySelectorAll('.engineering_systems > * input[type=checkbox]');
const cb_select_all_3 = engineering_systems[0];

const btn_download_estimate = document.querySelector('.btn_download_estimate');
const sub_menu = document.querySelector('.sub_menu');

//
filters_appointment.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        for (item of filters_appointment) {
            item.classList.remove('active');
        }
        active_elem = e.target.parentNode;
        active_elem.classList.add('active');
    });
});

//
filters_design_scheme.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        for (item of filters_design_scheme) {
            item.classList.remove('active');
        }
        active_elem = e.target.parentNode;
        active_elem.classList.add('active');
    });
});

//
filters_complexity_obj.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        for (item of filters_complexity_obj) {
            item.classList.remove('active');
        }
        active_elem = e.target.parentNode;
        active_elem.classList.add('active');
    });
});

filters_complexity_survey.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        for (item of filters_complexity_survey) {
            item.classList.remove('active');
        }
        active_elem = e.target.parentNode;
        active_elem.classList.add('active');
    });
});

//
filters_complexity_works.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        for (item of filters_complexity_works) {
            item.classList.remove('active');
        }
        active_elem = e.target.parentNode;
        active_elem.classList.add('active');
    });
});

//
filters_original_drawings.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        for (item of filters_original_drawings) {
            item.classList.remove('active');
        }
        active_elem = e.target.parentNode;
        active_elem.classList.add('active');
    });
});

//
filters_seismicity_area.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        for (item of filters_seismicity_area) {
            item.classList.remove('active');
        }
        active_elem = e.target.parentNode;
        active_elem.classList.add('active');
    });
});

//
filters_aggressiveness.forEach(function (item_list) {
    item_list.querySelector('input[type=checkbox]').addEventListener('change', function (e) {
        for (item of filters_aggressiveness) {
            item.classList.remove('active');
        }
        active_elem = e.target.parentNode;
        active_elem.classList.add('active');
    });
});

//
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

//
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

//
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

btn_download_estimate.onclick = () => {
    sub_menu.classList.toggle('show');
};

// window.onclick = () => {};
