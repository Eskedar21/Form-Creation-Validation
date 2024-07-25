

document.addEventListener('DOMContentLoaded', function () {
   const form =  document.getElementById('registration-form');//Form Selection
   const feedbackDiv =  document.getElementById('form-feedback');//Feedback Division Selection

   //Form Submission Event Listener
   form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    //Retrieve User Inputs
   const userName = document.getElementById('username').value.trim();;
   const email = document.getElementById('email').value.trim();
   const password =  document.getElementById('password').value.trim();;


   //Initialize Validation Variables
 let isValid = true;
 let messages = [''];


   //Username Validation:
 
  if(userName.length < 3 ){
    isValid = false;
    messages.push('Username must be at least 3 characters long.');
   
   
  }
  //Email Validation:
  if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push('Email must include both "@" and "." characters.');
    
}
 //Password Validation:
 if(password.length < 8 ){
    isValid = false;
    messages.push('Password must be at least 8 characters long.');
    
  
    }

    //Feedback Display Logic:
    feedbackDiv.style.display = "block";
    if(isValid){
        feedbackDiv.textContent =  "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    }
    if (!isValid){
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545";
    }

});
});



