document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    const cardNameValue = document.getElementById("name").value.trim();
    const cardNumberValue = document.getElementById("number").value.trim();
    const cardMonthValue = document.getElementById("month").value.trim();
    const cardYearValue = document.getElementById("year").value.trim();
    const cardCvValue = document.getElementById("cv-input").value.trim();
    const nameElement = document.getElementById("card-info");
    const numberElement = document.getElementById("card-number");
    const cvElement = document.getElementById("cv");
    let dateElement = document.getElementById("date");

    const cardWitnNoSpace = cardNumberValue.replace(/\s/g, "");

    let isValid = true

    if (cardNameValue === "") {
      const cardNameInput = document.getElementById("name");
      cardNameInput.classList.add("invalid-input");
      isValid = false
    } else {
      const cardNameInput = document.getElementById("name");
      nameElement.innerHTML = cardNameValue;
      cardNameInput.classList.remove('invalid-input')
    }

    if (isNaN(cardWitnNoSpace) || cardWitnNoSpace === "") {
      const cardNumberInput = document.getElementById("number");
      const cardNumberMessage = document.getElementById("invalid-number");
      cardNumberInput.classList.add("invalid-input");
      cardNumberMessage.style.display = "block";
      isValid = false
    } else {
        const cardNumberInput = document.getElementById("number");
        const cardNumberMessage = document.getElementById("invalid-number");
      numberElement.innerHTML = cardNumberValue;
      cardNumberInput.classList.remove("invalid-input");
      cardNumberMessage.style.display = "none";
    }

    if (isNaN(cardCvValue) || cardCvValue === "") {
      const cardCvInput = document.getElementById("cv-input");
      const cardCvMessage = document.getElementById("invalid-cv");
      cardCvInput.classList.add("invalid-input");
      cardCvMessage.style.display = "inline-flex";
      isValid = false
    } else {
        const cardCvInput = document.getElementById("cv-input");
        const cardCvMessage = document.getElementById("invalid-cv");
        cvElement.innerHTML = cardCvValue;
        cardCvInput.classList.remove("invalid-input");
        cardCvMessage.style.display = 'none'
    }

    if (
      isNaN(cardMonthValue) ||
      cardMonthValue === "" ||
      cardMonthValue > 12 ||
      cardMonthValue < 1
    ) {
      let cardMonthInput = document.getElementById("month");
      let cardMonthYearMessage = document.getElementById("invalid-m-y");
      cardMonthYearMessage.style.display = "inline-flex";
      cardMonthInput.classList.add("invalid-input");
      isValid = false
    } else if (
      isNaN(cardYearValue) ||
      cardYearValue === "" ||
      cardYearValue < 24
    ) {
      let cardYearInput = document.getElementById("year");
      let cardMonthYearMessage = document.getElementById("invalid-m-y");
      cardMonthYearMessage.style.display = "inline-flex";
      cardYearInput.classList.add("invalid-input");
      isValid = false
    } else {
        let cardMonthYearMessage = document.getElementById("invalid-m-y");
        let cardYearInput = document.getElementById("year");
        let cardMonthInput = document.getElementById("month");
        cardYearInput.classList.remove("invalid-input");
        cardMonthInput.classList.remove("invalid-input");
        dateElement.innerHTML = cardMonthValue + "/" + cardYearValue;
        cardMonthYearMessage.style.display = "none";
    }

    if (isValid){
      const formElement = document.getElementById('form')
      const thankyouElement = document.getElementById('thank-you')
      formElement.style.display = 'none'
      thankyouElement.style.display = 'block'
    }
 
  });
});

