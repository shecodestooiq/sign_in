   
const errormsg = document.getElementById('error');
function hide() {
 errormsg.style.display = 'block';
 setTimeout(function(){
   errormsg.style.display = 'none';
 }, 2000);
}





function validationform(event) {
 event.preventDefault()
 let email=document.getElementById("email").value;
 var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
 let nameval=document.getElementById("name");
 let subject = document.forms["myForm"]["subj"].value;


 if(nameval.value == ""){
     alert("please enter your name");
     errormsg.innerHTML="you should write your name";
     hide();

 }else
 if(subject == ""){
     alert("please enter Some Subject");
     errormsg.innerHTML="you should write a subject";
     hide();

 }else
 if(!(regEmail.test(email))){
     alert("please write A Valid email")
     errormsg.innerHTML="you should write A valid Email";
     hide();
 }else{
     alert("your form was successfully submitted")

     errormsg.innerHTML="your form was successfully submitted";
     hide();
 }
 
}
