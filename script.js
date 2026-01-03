//DOM Elements - all the elements we need from HTML
const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengthText = document.querySelector(".strength-container p");

// Character sets
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

lengthSlider.addEventListener("input", () => {
     lengthDisplay.textContent = lengthSlider.value;

})

// generating the password
generateButton.addEventListener("click", makePassword)
function makePassword(){
    const length = Number(lengthSlider.value);
    const uppercase = uppercaseCheckbox.checked;
    const lowercase = lowercaseCheckbox.checked;
    const numbers = numbersCheckboxCheckbox.checked;
    const symbols = symbolsCheckbox.checked;

    if(!UppercasePresence && !LowercasePresence && !NumbersPresence && !SymbolsPresence){
        alert("Please select at least one char type.");
        return;
    }

    const newPassword = createRandomPassword(length,UppercasePresence,LowercasePresence,NumbersPresence,SymbolsPresence)

    passwordInput.value = newPassword;
    updateStrengthMeter(newPassword0)
}

function createRandomPassword(length,UppercasePresence,LowercasePresence,NumbersPresence,SymbolsPresence){
    let allCharacters = "";
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ

    if (UppercasePresence) allCharacters += uppercaseLetters;
    if (LowercasePresence) allCharacters += lowercaseLetters;
    if (NumbersPresence) allCharacters += numbersCharacters;
    if (SymbolsPresence) allCharacters += symbolCharacters;

    let password="";

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allCharacters.length())
        password += allCharacters[randomIndex];
    }

    return password;
}