function validateForm(){
    let firstName = document.forms["contactForm"]["firstName"].value;
    if(firstName == ""){
        alert("First name field cannot be empty.");
        return false;
    }
    let lastName = document.forms["contactForm"]["lastName"].value;
    if(lastName == ""){
        alert("Last name field cannot be empty.");
        return false;
    }
    let userEmail = document.forms["contactForm"]["userEmail"].value;
    if(userEmail == ""){
        alert("Email field cannot be empty.");
        return false;
    }
    if(userEmail.includes("@") == false || userEmail.includes(".") == false){
        alert("Invalid email address.");
        return false;
    }
}
