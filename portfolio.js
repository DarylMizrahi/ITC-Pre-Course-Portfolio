const GITHUB_URL =
  "https://avatars3.githubusercontent.com/u/31851560?s=400&u=58ee5ef508bc0d15fab5c536c05acd600fbcba9e&v=4";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

function displayLanguages() {
  let footerLanguages = ["HTML", "CSS", "and", "JavaScript"];
  let characters = "";
  for (let value of footerLanguages) {
    characters += "," + " " + value;
  }
  document.querySelector("#languages").innerText += characters;
}

displayLanguages();

function changeMaps() {
  //First put the cards in display none and the activate option that disable the display none one
  let mapIndex = 0;
  let maps = document.querySelectorAll(".map");
  let buttonPrevious = document.querySelector(".previous");
  let buttonNext = document.querySelector(".next");

  if (buttonPrevious != null) {
    buttonPrevious.addEventListener("click", function () {
      maps[mapIndex].classList.remove("active");
      mapIndex--;
      maps[mapIndex].classList.add("active");
      buttonNext.disabled = false;

      if (mapIndex === 0) {
        buttonPrevious.disabled = true;
      }
    });
    buttonNext.addEventListener("click", function () {
      maps[mapIndex].classList.remove("active");
      mapIndex++;
      maps[mapIndex].classList.add("active");
      buttonPrevious.disabled = false;

      if (maps.length === mapIndex + 1) {
        buttonNext.disabled = true;
      }
    });
  }
}

changeMaps();

function displayConsole() {
  let submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", function () {
    let radioResult = document.querySelector("input[type=radio]:checked");
    console.log(
      `First name: ${document.getElementById("first-name").value} Last Name: ${
        document.getElementById("last-name").value
      } Email: ${document.getElementById("email").value} Comment: ${
        document.getElementById("comment").value
      } Gender: you are a ${radioResult.value}`
    );
  });
}

displayConsole();

function disabledButton() {
  let buttonDisable = document.getElementById("submit-btn");
  const inputFields = [].slice.call(
    document.querySelectorAll(".form-to-fill input.form-control")
  );

  if (inputFields.length > 0) {
    for (let i = 0; i < inputFields.length; i++) {
      console.log("hi");

      inputFields[i].addEventListener("change", function () {
        console.log(inputFields[i]);
        let itsOk = checkIfInputIsOk(inputFields);
        //let fieldsToFill = ["first-name", "email", "comment"];
        //checkIfInputIsOk(inputFields);
        console.log(itsOk);
        if (itsOk) {
          buttonDisable.disabled = false;
          return true;
        } else {
          buttonDisable.disabled = true;
          return false;
        }
      });
    }
  }
}
disabledButton();

function checkIfInputIsOk(inputs) {
  console.log(inputs);
  return inputs.map((x) => !!x.value).every((x) => x);
}

document
  .querySelector(".form-to-fill")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

function clickCard() {
  let animateCard = document.querySelector("card");
  let bodyMain = document.querySelector("home-page");
  if (bodyMain != null) {
    animateCard.classList;
  }
}
