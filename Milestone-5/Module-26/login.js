
// Step-1: 
document.getElementById('btn-submit').addEventListener('click', function(){
    //Step-2:
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3:
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //Step-4:
    if(email === 'asib@rahman.com' && password === '12345'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})