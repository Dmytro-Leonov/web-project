const slider = document.querySelector('.slider')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')

let index = 0
let delay = 15000
let nOfSlides = document.getElementsByClassName("slider_element").length

slider.style.width = (nOfSlides)*100 + '%'

function slide(){
    if(index < nOfSlides - 1)
    {
        index += 1
        slider.style.transition = '0.3s'
        slider.style.transform = 'translate(' + (index) * (-100/nOfSlides) + '%)'
    }
    else
    {
        index = 0
        slider.style.transform = 'translate(' + (index) * (-100/nOfSlides) + '%)'
        slider.style.transition = '1s'
    }
}
let timer = setInterval( slide, delay);

rightArrow.addEventListener('click', slide)

leftArrow.addEventListener('click', () => {
    if(index > 0)
    {
        index -= 1
        slider.style.transition = '0.3s'
        slider.style.transform = 'translate(' + (index) * (-100/nOfSlides) + '%)'
    }
    else
    {
        index = nOfSlides-1
        slider.style.transform = 'translate(' + (index) * (-100/nOfSlides) + '%)'
        slider.style.transition = '1s'
    }
})

document.querySelectorAll('.collapse_button').forEach(button => {
    button.addEventListener('click', ()=>{
        let collapse_content = button.nextElementSibling
        button.classList.toggle('collapse_button-active')
        if(button.classList.contains('collapse_button-active'))
        {
            collapse_content.style.maxHeight = collapse_content.scrollHeight + 'px'
        }
        else
        {
            collapse_content.style.maxHeight = null
        }
    })
})


    
