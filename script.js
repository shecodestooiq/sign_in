function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById("username");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let msg = document.getElementById("msg");
    let errMsg = document.getElementById("divMsg");

if (name.value == "") {
    alert("Enter your name");
    name.focus();
    errMsg.style.display = "block";
    errMsg.style.color = "red";
    errMsg.innerHTML = "Enter your name please!";
    setTimeout(() => {errMsg.style.display = "none";}, 2000);
    return false;
}
if (email.value == "") {
    alert("Enter your email");
    email.focus();
    errMsg.style.display = "block";
    errMsg.style.color = "red";
    errMsg.innerHTML = "Enter your email please!";
    setTimeout(() => {errMsg.style.display = "none";}, 2000);
    return false;
}
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (regex.test(email.value) === false) {
    alert("Enter valid email please!");
    email.focus();
    errMsg.style.display = "block";
    errMsg.style.color = "red";
    errMsg.innerHTML = "Enter valid email please!";
    setTimeout(() => {errMsg.style.display = "none";}, 2000);
    return false;
}

if (subject.value == "") {
    alert("Enter your subject");
    subject.focus();
    errMsg.style.display = "block";
    errMsg.style.color = "red";
    errMsg.innerHTML = "Enter your subject please!";
    setTimeout(() => {errMsg.style.display = "none";}, 2000);
    return false;
}
if (msg.value == "") {
    alert("Enter your message");
    msg.focus();
    errMsg.style.display = "block";
    errMsg.style.color = "red";
    errMsg.innerHTML = "Enter your message please!";
    setTimeout(() => {errMsg.style.display = "none";}, 2000);
    return false;
} else {
    alert("Form submitted successfully!");
    errMsg.style.display = "block";
    errMsg.style.color = "green";
    errMsg.innerHTML = "Your message was sent, Thank You!";
    name.value = "";
    email.value = "";
    subject.value = "";
    msg.value = "";
}
}