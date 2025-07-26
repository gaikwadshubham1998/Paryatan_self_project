function validate() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const message = document.getElementById("message").value.trim();

    // error span 
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const mobileError = document.getElementById("mobileError");
    const messageError = document.getElementById("messageError");


    //clear previous error messages 
    nameError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Name validation
    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = "Please enter a valid email.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }
    }
    // Mobile number validation
    if (mobile === "") {
        mobileError.textContent = "Please enter your mobile number.";
        isValid = false;
    } else {
        const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (!mobileRegex.test(mobile)) {
            mobileError.textContent = "Please enter a valid 10-digit number.";
            isValid = false;
        }
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    } else if (message.length < 50) {
        messageError.textContent = "Message must be at least 50 characters.";
        isValid = false;
    } else {
        messageError.textContent = "";
    }
    if (isValid) {
        alert("Your Form Submited Sucessfully.");
    }
    return isValid;

}



