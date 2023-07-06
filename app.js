'use strict'
let userForm = document.querySelector('form')
function handleSubmit(e){
    e.preventDefault()
    let pwd1 = e.target.pswrd.value
    let pwd2 = e.target.pswrdConf.value
    if(pwd1 === pwd2){
        return
    }else{
        alert('Passwords do not match');
    }
}
userForm.addEventListener('submit', handleSubmit)
