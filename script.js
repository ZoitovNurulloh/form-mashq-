document.querySelector("#username").addEventListener("focusout", myText);
document.querySelector("#password").addEventListener("focusout", myPass);



document.querySelector(".btn").addEventListener("click", function () {
  myText();
  myPass();
})

function myText() {
  let message, text;
  let errElement = document.getElementById("username");
  message = document.getElementById("err");
  text = document.getElementById("username").value;

  try {
    if (text == "") {
      errElement.classList.add("user-box__input--err");
      errElement.classList.remove("user-box__input--valid");
      throw "bo'sh";
    }
    if (text.length > 0) {
      errElement.classList.remove("user-box__input--err");
      errElement.classList.add("user-box__input--valid");
      message.innerHTML = "";
    }

  } catch (e) {
    message.innerHTML = "Qiymat " + e;
  }
};

function myPass() {
  let message, pass;
  let errElement = document.getElementById("password");
  message = document.getElementById("err2");
  pass = document.getElementById("password").value;

  try {
    if (pass == "") {
      errElement.classList.add("user-box__input--err");
      errElement.classList.remove("user-box__input--valid");
      throw "bo'sh";
    }
    if (pass.length > 0) {
      errElement.classList.remove("user-box__input--err");
      errElement.classList.add("user-box__input--valid");
      message.innerHTML = "";
    }

  } catch (e) {
    message.innerHTML = "Qiymat " + e;
  }
}