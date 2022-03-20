/* form */

const form = document.getElementById('form')
const email = document.getElementById('the-email')
const emailError = document.getElementById('email-error')
const formInput = document.querySelectorAll('.form .opacity-selector')


form.addEventListener('input', () => {
    let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    formInput.forEach(element => {
        if(element.value) {
            element.style.opacity = '1'
        } else if (!element.value) {
            element.style.opacity = '0.5'
        }
    })

    if (!email.value) {
        emailError.textContent = `This Field Cannot be Empty`
        email.style.borderColor = `#ff4545`        
    } else if (email.value) {
        emailError.textContent = ``
        email.style.borderColor = `#36536B`
        
        if(!email.value.match(mailformat)) {
            email.style.borderColor = `#ff4545`        
            emailError.textContent = `Please write your email`
            email.style.color = `#ff4545`
        } else if (email.value.match(mailformat)) {
            email.style.color = `#36536B`
        }
    }
})