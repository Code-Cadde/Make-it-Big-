const myBtn = document.getElementById("myBtn");
const varsalerInput = document.getElementById("varsalerInput");



myBtn.addEventListener ("click", function() {
    const inputText = varsalerInput.value;
    const uppercaseText = inputText.toUpperCase();
    varsalerInput.value = uppercaseText;

});

