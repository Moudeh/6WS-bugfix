var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));
var $closeBtnsDiv = [].slice.call(document.querySelectorAll('.content-wrapper'));

setTimeout(function () {
    $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function ($el) {
    $el.addEventListener('click', function () {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--el-active');
        this.classList.add('s--active');
    });
});

$closeBtnsArr.forEach(function ($btn) {
    $btn.addEventListener('mousedown', function (e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    });
});

$closeBtnsDiv.forEach(function ($body) {
    $body.addEventListener('mousedown', function (e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    });
});

//
//
//The following Javascript works on Week Section for Mobile View
//
//
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl1').hasClass('in');

    if (!$(e.target).closest('#wocheColl1').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl1').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl2').hasClass('in');

    if (!$(e.target).closest('#wocheColl2').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl2').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl3').hasClass('in');

    if (!$(e.target).closest('#wocheColl3').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl3').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl4').hasClass('in');

    if (!$(e.target).closest('#wocheColl4').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl4').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl5').hasClass('in');

    if (!$(e.target).closest('#wocheColl5').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl5').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl6').hasClass('in');

    if (!$(e.target).closest('#wocheColl6').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl6').collapse('toggle');
    }
});