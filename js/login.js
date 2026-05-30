
/* Login */
const loginInput = document.querySelector("#login-input");
const loginAlert = document.querySelector("#login-alert");
const loginBtn = document.querySelector("#login-btn");

const errorLogin = () => {
    const phoneNumber = loginInput.value;
    if ( phoneNumber.length < 11) {
        loginAlert.innerHTML = "شماره موبایل صحیح نمی باشد.";
        loginAlert.style.display = "block";
        loginInput.style.border = "1px solid #dc2655";
        loginBtn.setAttribute("disabled" , "" );
    }
    else {
        loginAlert.innerHTML = "";
        loginAlert.style.display = "none";
        loginInput.style.border = "1px solid #c2c5c6";
        loginBtn.removeAttribute("disabled" , "" );
    }
}

loginInput.addEventListener("blur", errorLogin);