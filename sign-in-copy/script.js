let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let form = document.getElementById("form");

function checkEmpty(input, inputType) {
    if (input.value == "" || input.value == null) {
        alert(`Please fill the ${inputType} field`);
        return true;
    }
    console.log(input.value);
    return false;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
        checkEmpty(name, "name") ||
        checkEmpty(email, "email") ||
        checkEmpty(subject, "subject") ||
        checkEmpty(message, "message")
    ) {
        return;
    }

    let validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.match(validRegex)) {
        alert("Invalid email address!");
        return;
    }

    let successMessage = document.getElementById('success-msg')
    successMessage.style.display = 'block'
    successMessage.innerText = 'You successfully submitted your form'

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 5000);

});


