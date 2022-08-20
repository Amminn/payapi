/* form */

const form = document.getElementById('form')
const submitBtn = document.getElementById('submitBtn')
const email = document.getElementById('the-email')
const emailError = document.getElementById('email-error')
const formInput = document.querySelectorAll('.form .opacity-selector')

// to always prevent the page from reloading 
form.addEventListener('submit', (event) => {
    console.log(`event.preventDefault() is working`)
    event.preventDefault()
})

// when the user change anything inside the form, the function below will work
form.addEventListener('input', () => {
    
    let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if the field is empty make the opacity of it 0.5, if it is filled with text change the opacity to 1
    formInput.forEach(element => {
        if (element.value) {
            element.style.opacity = '1'
        } else if (!element.value) {
            element.style.opacity = '0.5'
        }
    })

    if (!email.value) {
        emailError.textContent = `This Field Cannot be Empty`
        email.style.borderColor = `#ff4545`
        submitBtn.disabled = true
        submitBtn.classList.add('disabled')

    } else if (email.value) {
        emailError.textContent = ``
        email.style.borderColor = `#36536B`
        submitBtn.disabled = false
        submitBtn.classList.remove('disabled')
        
        if (!email.value.match(mailformat)) {
            email.style.borderColor = `#ff4545`        
            emailError.textContent = `Please write your email`
            email.style.color = `#ff4545`
            submitBtn.disabled = true
            submitBtn.classList.add('disabled')
            
        } else if (email.value.match(mailformat)) {
            email.style.color = `#36536B`
            submitBtn.disabled = false
            submitBtn.classList.remove('disabled')
        }
    }
})
