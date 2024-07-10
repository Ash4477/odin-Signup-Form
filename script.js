function passMatchCheck() {
    const invalidText = document.querySelector("#pass-confirm + label + p");
    if (passKey.value != '' && passConfirmKey.value != '') {
        if (passKey.value !== passConfirmKey.value) {
            invalidText.classList.remove("hidden"); 
        }

        else {
            invalidText.classList.add("hidden");
        }
    }

    else {
        invalidText.classList.add("hidden");
    }
}

const passKey = document.querySelector("#pass");
const passConfirmKey = document.querySelector("#pass-confirm");

passKey.addEventListener("change", passMatchCheck);
passConfirmKey.addEventListener("change", passMatchCheck);
