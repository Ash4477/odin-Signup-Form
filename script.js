function passMatchCheck() {
    const invalidText = document.querySelector("#pass-confirm + label + p");
    if (passKey.value != '' && passConfirmKey.value != '') {
        if (passKey.value !== passConfirmKey.value) {
            invalidText.classList.add("show"); 
        }

        else {
            invalidText.classList.remove("show");
        }
    }

    else {
        invalidText.classList.remove("show");
    }
}

const passKey = document.querySelector("#pass");
const passConfirmKey = document.querySelector("#pass-confirm");

passKey.addEventListener("change", passMatchCheck);
passConfirmKey.addEventListener("change", passMatchCheck);