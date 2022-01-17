// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import $ from 'jquery'
import 'slick-carousel'

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
    })
    $('.header__burger svg').click(function () {
        $('.header__mobile').slideToggle()
    })
})