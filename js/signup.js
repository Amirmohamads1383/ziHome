const loginPasswordInput = document.querySelector("#login-password-input");
const loginAlert = document.querySelector("#login-alert");
const loginBtn = document.querySelector("#login-btn");
const showPasswordIcon = document.querySelector("#show-password-icon");

const errorLogin = () => {
    let password = 123;

    if (loginPasswordInput.value != password) {
        loginAlert.innerHTML = "رمز عبور صحیح نمی باشد.";
        loginAlert.style.display = "block";
        loginPasswordInput.style.border = "1px solid #dc2655";
        loginBtn.setAttribute("disabled", "");
    } else {
        loginAlert.innerHTML = "";
        loginAlert.style.display = "none";
        loginPasswordInput.style.border = "1px solid #c2c5c6";
        loginBtn.removeAttribute("disabled", "");
    }
}

// Show Password
let isShowPassword = false;

const showPasswordHandler = () => {
    if (isShowPassword) {
        loginPasswordInput.setAttribute("type", "password");
        isShowPassword = false;
    } else {
        loginPasswordInput.setAttribute("type", "text");
        isShowPassword = true;
    }
}

loginPasswordInput.addEventListener("blur", errorLogin);
showPasswordIcon.addEventListener("click", showPasswordHandler);