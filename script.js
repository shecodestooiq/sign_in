
function check_Controls() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');
    let hidden_text = document.getElementById('hidden_text');
    let submitbtn = document.getElementsByClassName('btn')

    if (username.value == "") {
        alert('Enter your username')
        document.getElementById('hidden_text').innerHTML = "Enter your username";
    }

    else if (email.value == "") {
        alert('Enter your email')
        document.getElementById('hidden_text').innerHTML = "Enter your email";
    }

    else if (subject.value == "") {
        alert('Enter your subject')
        document.getElementById('hidden_text').innerHTML = "Enter your subject";
    }

    else if (message.value == "") {
        alert('Enter your message')
        document.getElementById('hidden_text').innerHTML = "Enter your message";
    }
    else {
        alert('Successfully submited')
        document.getElementById('hidden_text').innerHTML = "Successfully submited";
    }

    setTimeout(this, 2000);
}
