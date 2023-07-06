'use strict'
let userForm = document.querySelector('form')

function handleSubmit(e){
    let pwd1 = e.target.pswrd.value
    let pwd2 = e.target.pswrdConf.value
    if(pwd1 === pwd2){
        return
    }else{
        
    }
    
}
userForm.addEventListener('submit', handleSubmit)




// let userName = e.target.fname.value
// let userLName = e.target.lname.value
// let userEmail = e.target.email.value
// let telephone = e.target.telNum.value