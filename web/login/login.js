document.querySelector("i").addEventListener("click",()=> {
    if(document.querySelector("#password").type === "text"){
        document.querySelector("#password").type="password";
        document.querySelector("i").classList.remove("fa-solid","fa-eye-slash");
        document.querySelector("i").classList.add("fa-solid","fa-eye");
        
}
    else{
        document.querySelector("#password").type="text";
        document.querySelector("i").classList.remove("fa-solid","fa-eye");
        document.querySelector("i").classList.add("fa-solid","fa-eye-slash");

    }
});

document.querySelector("#password").addEventListener("focus",() => {
    document.querySelector("i").style.opacity="1";
    document.querySelector(".pwd").style.border="1px solid #01e973";
});
document.querySelector("#password").addEventListener("blur",() => {

    document.querySelector(".pwd").style.border="1px solid #ababab";
});
