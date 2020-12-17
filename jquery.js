$(document).ready(function(){
    //hide img
    $("#hidable_block").click(function(){
        $("#hidable_block").hide();
    });

    //change content on click
    $(".productsContainer2").hide();
    $(".btnForProductsContainer1").addClass("btn_active");

    $(".btnForProductsContainer1").click(function () {
        $(".productsContainer2").hide();
        $(".productsContainer1").show();
        $(".btnForProductsContainer1").addClass("btn_active");
        $(".btnForProductsContainer2").removeClass("btn_active");
    });
    
    $(".btnForProductsContainer2").click(function () {
        $(".productsContainer1").hide();
        $(".productsContainer2").show();
        $(".btnForProductsContainer2").addClass("btn_active");
        $(".btnForProductsContainer1").removeClass("btn_active");
    });

    //sortable
    $("#sortable").sortable({opacity: 0.5, scroll: false, cursor: "move"});

    //chained selects
    $("#cities").chained("#countries");

    //accordion

    $('.collapse_button').click(function(){
        if($(this).next().hasClass("active"))
        {
            $(this).next().toggleClass("active");
            $(this).next().css({"max-height" : "0"})
        }
        else
        {
            $(this).next().toggleClass("active");
            $(this).next().css({"max-height" : $(this).next().prop('scrollHeight') + 1 + 'px'});
        }
    })
});

//slider
const slider = $('.slider')
const leftArrow = $('.left')
const rightArrow = $('.right')

let index = 0
let delay = 15000
let nOfSlides = $(".slider_element").length
$('.slider').css('width', (nOfSlides) * 100 + '%');

function slide() {
    if (index < nOfSlides - 1) {
        index += 1
        $('.slider').css('transition', '0.3s');
        $('.slider').css('transform', 'translate(' + (index) * (-100 / nOfSlides) + '%)');
    }
    else {
        index = 0
        $('.slider').css('transform', 'translate(' + (index) * (-100 / nOfSlides) + '%)');
        $('.slider').css('transition', '1s');
    }
}
setInterval(slide, delay);

rightArrow.click(slide);

leftArrow.click(() => {
    if (index > 0) {
        index -= 1
        $('.slider').css('transition', '0.3s');
        $('.slider').css('transform', 'translate(' + (index) * (-100 / nOfSlides) + '%)');
    }
    else {
        index = nOfSlides - 1
        $('.slider').css('transform', 'translate(' + (index) * (-100 / nOfSlides) + '%)');
        $('.slider').css('transition', '1s');
    }
})