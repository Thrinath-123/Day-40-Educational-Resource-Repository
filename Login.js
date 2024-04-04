
let btnSubmit=document.getElementById('btnSubmit');
let email1;
let password1;
let name1;
btnSubmit.addEventListener('click',()=>{
    email1=document.getElementById('remail').value;
    password1=document.getElementById('rpassword').value;
    name1=document.getElementById('fullname1').value;
    console.log(email1);
    console.log(password1);
    console.log(name1);
});





let btn=document.getElementById('btn1');
btn.addEventListener('click',()=>{
     mail=document.getElementById('email').value;
     password=document.getElementById('password').value;
     console.log(email1);
    console.log(password1);
    console.log(name1);
     if(mail=='hari@gmail.com'){
        alert(`${'hari'}  Login successfully`);
     }
     else{
        alert(`Please enter valid username and password`);
     }
})