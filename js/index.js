'use strict'

// document.addEventListener("DOMContentLoaded", function() {
//     ymaps.ready(init);
// });

// FIRST SLIDER

let FS_left_arrow = document.querySelector('#left_slide_third_block'),
    FS_right_arrow = document.querySelector('#right_slide_third_block'),
    image_size = document.querySelector('.third_block-slides-child img').width +30,
    first_slider_area = document.querySelector('.third_block-slides-child'),
    index_slide = 0,
    body_width = document.body.offsetWidth;

FS_left_arrow.addEventListener('click', ()=>{
    if(index_slide !== 3){
        index_slide++;
        first_slider_area.style.left = (parseInt(getComputedStyle(first_slider_area).left) - image_size) + 'px';
    }else{
        (body_width <= 1200) ? first_slider_area.style.left = '0px' : first_slider_area.style.left = '150px';
        index_slide = 0;
    }
    
});

FS_right_arrow.addEventListener('click', ()=>{
    if(index_slide !== 0){
        index_slide--;
        first_slider_area.style.left = (parseInt(getComputedStyle(first_slider_area).left) + image_size) + 'px';
    }else{
        (body_width <= 1200) ? first_slider_area.style.left = '0px' : first_slider_area.style.left = '150px';
        index_slide = 0;
    }
});

//Second Slider

let SC_left_arrow = document.querySelector('#left_slide_sixth_block'),
    SC_right_arrow = document.querySelector('#right_slide_sixth_block'),
    image_size2 = document.querySelector('.sixth_block-slides-child-block img').width +30,
    second_slider_area = document.querySelector('.sixth_block-slides-child'),
    index_slide2 = 0;

SC_left_arrow.addEventListener('click', ()=>{
    console.log('adf')
    if(index_slide2 !== 2){
        index_slide2++;
        second_slider_area.style.left = (parseInt(getComputedStyle(second_slider_area).left) - image_size2) + 'px';
    }else{
        (body_width <= 1200) ? second_slider_area.style.left = '0px' : second_slider_area.style.left = '0px';
        index_slide2 = 0;
    }
    
});

SC_right_arrow.addEventListener('click', ()=>{
    if(index_slide2 !== 0){
        index_slide2--;
        second_slider_area.style.left = (parseInt(getComputedStyle(second_slider_area).left) + image_size2) + 'px';
    }else{
        (body_width <= 1200) ? second_slider_area.style.left = '0px' : second_slider_area.style.left = '0px';
        index_slide2 = 0;
    }
});

//Showing pages menu

function select_page_menu (block, index_block){
    for(let i = 0; i < document.querySelectorAll('.main_menu_button').length; i++){
        document.querySelectorAll('.main_menu_button')[i].classList.remove("active_button");
    }

    block.classList.add("active_button");

    for(let i = 1; i <= 3; i++){
        document.querySelector(`#menu_block_${i}`).style.top = '-200%';
    }

    document.querySelector(`#menu_block_${index_block}`).style.top = '0px';
}

//Add MAP

ymaps.ready(init);

function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [56.836106, 60.614587],
        zoom: 17 },{
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),    
        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject( {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    
    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([56.836106, 60.614587], {
            hintContent: '<strong>БЦ Высоцкий</strong>',
            balloonContent: '<strong>БЦ Высоцкий</strong>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/Метка.svg',
            // Размеры метки.
            iconImageSize: [50, 62],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-1, -30],

            iconContentLayout: MyIconContentLayout
        }));
    
}

//Open mobile menu
let mobile_menu = document.querySelector('.mobile_menu');

function openAndCloseMobileMenu(){
    if(mobile_menu.style.right != '-200%'){
        mobile_menu.style.right = '-200%';
        document.body.style.overflowY = 'scroll';
    }else{
        mobile_menu.style.right = '0px';
        document.body.style.overflowY = 'hidden';
    }
}

function fjs(){
    mobile_menu.style.right = '-200%';
}

fjs();