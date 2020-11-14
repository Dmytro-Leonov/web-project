//slider
const slider = document.querySelector('.slider')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')

let index = 0
let delay = 15000
let nOfSlides = document.getElementsByClassName("slider_element").length

slider.style.width = (nOfSlides) * 100 + '%'

function slide() {
    if (index < nOfSlides - 1) {
        index += 1
        slider.style.transition = '0.3s'
        slider.style.transform = 'translate(' + (index) * (-100 / nOfSlides) + '%)'
    }
    else {
        index = 0
        slider.style.transform = 'translate(' + (index) * (-100 / nOfSlides) + '%)'
        slider.style.transition = '1s'
    }
}
let timer = setInterval(slide, delay);

rightArrow.addEventListener('click', slide)

leftArrow.addEventListener('click', () => {
    if (index > 0) {
        index -= 1
        slider.style.transition = '0.3s'
        slider.style.transform = 'translate(' + (index) * (-100 / nOfSlides) + '%)'
    }
    else {
        index = nOfSlides - 1
        slider.style.transform = 'translate(' + (index) * (-100 / nOfSlides) + '%)'
        slider.style.transition = '1s'
    }
})

//collapse content
document.querySelectorAll('.collapse_button').forEach(button => {
    button.addEventListener('click', () => {
        let collapse_content = button.nextElementSibling
        button.classList.toggle('collapse_button-active')
        if (button.classList.contains('collapse_button-active')) {
            collapse_content.style.maxHeight = collapse_content.scrollHeight + 'px'
        }
        else {
            collapse_content.style.maxHeight = null
        }
    })
})

//animations
window.addEventListener('load', () => {
    let blocks = document.querySelectorAll('.aboutUsBlock')
    blocks.forEach(block => {
            block.classList.add('aboutUsBlock_appear')
        })
})

window.addEventListener('scroll', () => {
    let blocks = document.querySelectorAll('.product')
    blocks.forEach(block => {
        let blockPos = block.getBoundingClientRect().top
        let screenPos = window.innerHeight
        if(blockPos < screenPos)
            block.classList.add('product_appear')
      })
})

//popup
let openButton = document.querySelector('.privacy_policy')
let closeButton = document.querySelector('.close_button')
let overlay = document.getElementById('overlay')

openButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.add('active')
    overlay.classList.add('active')
  })

closeButton.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('active')
    overlay.classList.remove('active')
})  

//form validation
const form = document.getElementById('form');
const surname = document.getElementById('surname')
const name_ = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', e => {
	e.preventDefault()
	checkInputs()
});

function checkInputs() {
	const surnameValue = surname.value.trim()
	const nameValue = name_.value.trim()
	const emailValue = email.value.trim()
	const passwordValue = password.value
    const password2Value = password2.value
    let lettersOnly = /^[A-Za-z]+$/
	
	if(surnameValue === '') {
		setErrorFor(surname, 'Surname cannot be blank')
	} else if(!surnameValue.match(lettersOnly)) {
        setErrorFor(surname, 'Invalid characters in surname')
    } else {
		setSuccessFor(surname)
    }
    
    if(nameValue === '') {
		setErrorFor(name_, 'Name cannot be blank')
	} else if(!nameValue.match(lettersOnly)) {
        setErrorFor(name_, 'Invalid characters in name')
    } else {
		setSuccessFor(name_);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank')
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Invalid email')
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank')
	} else if(passwordValue.length < 8) {
		setErrorFor(password, 'Password must be at least 8 characters long')
    } else if(passwordValue.length > 20) {
        setErrorFor(password, 'Password is too long')
    } else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords do not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
