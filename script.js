
function  validationForm(event) {
    let name_m = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let text = document.getElementById("text");
        event.preventDefault();
        if (name_m.value = "") {
            alert("enter your name");
        }
        if (text.value = "") {
            alert("enter your name");
        }
        if (subject.value = "") {
            alert("enter your name");
        }
        if (email.value = "") {
            alert("enter your name");
        }
        let expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (expression.test(email.value) == false) {
         alert("enter valid email :")   
        }
    }
    
    
    