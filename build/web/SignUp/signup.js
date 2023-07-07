
function verifyPassword(){
    var ps=document.getElementById("password").value;
    var cps=document.querySelector("#con-password").value;
    if(ps.length < 8)
    {
        document.getElementById("messege").classList.add("messege");
        document.getElementById("password").value="";
        document.querySelector("#con-password").value="";
       document.getElementById("messege").innerHTML="** Password length must be grater than 8 characters!";
        return false;
    }
    if(ps.length > 15)
    {
        document.getElementById("messege").classList.add("messege");
        document.getElementById("password").value="";
        document.querySelector("#con-password").value="";
       document.getElementById("messege").innerHTML="** Password length must not exceed 15 characters!";

        return false;
    }
    if(ps != cps)
    {
        document.querySelector("#con-messege").classList.add("messege");
        document.querySelector("#con-messege").innerHTML="** Password not matched!";
        document.getElementById("password").value="";
        document.querySelector("#con-password").value="";
        return false;
    }
}

document.querySelector("#password").addEventListener("focus" , () => {
    document.querySelector("#messege").innerHTML="";
    document.querySelector("#con-messege").innerHTML="";
});

document.querySelector("#con-password").addEventListener("focus" , () => {
    document.querySelector("#messege").innerHTML="";
    document.querySelector("#con-messege").innerHTML="";
});




//  password
document.querySelector("#password").addEventListener("focusin", () => {
    document.querySelector("i").classList.add("show");
    document.querySelectorAll(".pwd")[0].style.border="1px solid #01e973";
});
document.querySelector("#password").addEventListener("focusout", () => {
    
    document.querySelectorAll(".pwd")[0].style.border="1px solid #ababab";
});


document.querySelector("#con-password").addEventListener("focusin", () => {
    document.querySelectorAll("i")[1].classList.add("show");
    document.querySelectorAll(".pwd")[1].style.border="1px solid #01e973";
});

document.querySelector("#con-password").addEventListener("focusout", () => {
    
    document.querySelectorAll(".pwd")[1].style.border="1px solid #ababab";
});



// show and hide password
document.querySelectorAll("i")[0].addEventListener("click", () => {
    if(document.querySelector("#password").type === "password")
    {
        document.querySelector("#password").type="text";
        document.querySelectorAll("i")[0].classList.remove("fa-solid","fa-eye");
        document.querySelectorAll("i")[0].classList.add("fa-solid","fa-eye-slash");
    }
    else{
        document.querySelector("#password").type="password";
        document.querySelectorAll("i")[0].classList.remove("fa-solid","fa-eye-slash");
        document.querySelectorAll("i")[0].classList.add("fa-solid","fa-eye");
    }
});


document.querySelectorAll("i")[1].addEventListener("click", () => {
    if(document.querySelector("#con-password").type === "password")
    {
        document.querySelector("#con-password").type="text";
        document.querySelectorAll("i")[1].classList.remove("fa-solid","fa-eye");
        document.querySelectorAll("i")[1].classList.add("fa-solid","fa-eye-slash");
    }
    else{
        document.querySelector("#con-password").type="password";
        document.querySelectorAll("i")[1].classList.remove("fa-solid","fa-eye-slash");
        document.querySelectorAll("i")[1].classList.add("fa-solid","fa-eye");
    }
});

document.querySelector("#DOB").addEventListener("focus", () => {
    document.querySelector("#DOB").type="date";
});