
document.getElementById('submit-button').addEventListener('click', function(){
    const emailField = document.getElementById('email-input');
    const emailSubmit = emailField.value;
    emailField.value = '';
    
    const passwordField = document.getElementById('password-input');
    const passwordSubmit = passwordField.value;
    
    passwordField.value = '';

    if(emailSubmit == 'hamed.mgt.cu@gmail.com' && passwordSubmit == '1234'){
            window.location.href = 'bankbalance.html';
        }
    
})

// bankBalance part js starts........................>

// document.getElementById('deposit-button').addEventListener('click', function(){
//     // const depositAmount = document.getElementById('deposit-input');
//     // const depositInput = depositAmount.value;
//     console.log("depositInput");
// })



