function validationFrom(event) {
    event.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    let error = document.getElementById("errorMessage");
    let success = document.getElementById("successMessage")

    if (name.value == "") {
        // alert("Enter your name");
        name.focus();
        name.style.borderColor = "red"
        error.innerText = "ERROR: Enter your name";
        error.style.display = "block";
        setTimeout(function () { error.style.display = "none"; }, 2000);
        return false;
    }
    if (email.value == "") {
        // alert("Enter your email");
        email.focus();
        email.style.borderColor = "red"
        error.innerText = "ERROR: Enter your email";
        error.style.display = "block";
        setTimeout(function () { error.style.display = "none"; }, 2000);
        return false;
    }
    //Check email format
    let emailFormat = /^[a-zA-Z0-9_]+@gmail.com$/i;
    if (!emailFormat.test(email.value)) {
        // alert("ERROR: Invalid email format [Gmail account only]");
        email.focus();
        email.style.borderColor = "red";
        error.innerText = "ERROR: Invalid email format [Gmail account only]";
        error.style.display = "block";
        setTimeout(function () { error.style.display = "none"; }, 2000);
        return false;
    }

    if (subject.value == "") {
        // alert("Enter the subject");
        subject.focus();
        subject.style.borderColor = "red"
        error.innerText = "ERROR: Enter the subject";
        error.style.display = "block";
        setTimeout(function () { error.style.display = "none"; }, 2000);
        return false;
    }
    if (message.value == "") {
        // alert("Enter your message");
        message.focus();
        message.style.borderColor = "red"
        error.innerText = "ERROR: Enter your message";
        error.style.display = "block";
        setTimeout(function () { error.style.display = "none"; }, 2000);
        return false;
    }
    if ((name.value != "") && (email.value != "") && (subject.value != "") && (message.value != "")) {
        success.style.display = "block";
        setTimeout(function () { success.style.display = "none"; }, 2000);
    }
}