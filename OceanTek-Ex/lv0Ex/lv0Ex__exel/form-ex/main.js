const loginForm = document.querySelector("#login");
const forgotForm = document.querySelector("#forgot");
const lgBtn = document.querySelector("#nutdangnhap");

// function setFormMessage(loginForm, type, message) {
//   for (
//     let i = 0;
//     i < loginForm.querySelectorAll(".form__message").length;
//     i++
//   ) {
//     const messageElement = loginForm.querySelectorAll(".form__message")[i];
//     lgPassMsg.textContent = message;
//     messageElement.classList.remove("form__message--error");
//     loginForm
//       .querySelectorAll(".form__message")[1]
//       .classList.add(`form__message--${type}`);
//   }
// }

loadLoginBtn = (formType) => {
  formType.querySelector(`.button__text`).classList.add(`form--hidden`);
  formType.querySelector(`.button__icon`).classList.remove(`form--hidden`);
  setTimeout(() => {
    formType.querySelector(`.button__text`).classList.remove(`form--hidden`);
    formType.querySelector(`.button__icon`).classList.add(`form--hidden`);
  }, 1000);
};


// nutloadforgot = () => {
//   forgotForm.querySelector(`.button__text`).classList.add(`form--hidden`);
//   forgotForm.querySelector(`.button__icon`).classList.remove(`form--hidden`);
//   setTimeout(() => {
//     forgotForm.querySelector(`.button__text`).classList.remove(`form--hidden`);
//     forgotForm.querySelector(`.button__icon`).classList.add(`form--hidden`);
//   }, 1000);
// };

let peopleObject = [{ name: `admin`, password: `admin` }];

document.addEventListener("DOMContentLoaded", () => {
  let lgUseNameMsg = loginForm.querySelectorAll(`.form__message`)[0];
  let lgPassMsg = loginForm.querySelectorAll(`.form__message`)[1];

  function resetmsg() {
    lgUseNameMsg.textContent = "";
    lgPassMsg.textContent = "";
    loginForm.querySelectorAll(".form__message")[2].textContent = "";
    forgotForm.querySelectorAll(".form__message")[0].textContent = "";
    forgotForm.querySelectorAll(".form__message")[1].textContent = "";
    forgotForm.querySelectorAll(".form__message")[2].textContent = "";
  }
  document.querySelector("#nutdangnhap").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    lgBtn.classList.add("form--hidden");
    document.querySelector(`.button__text`).classList.remove(`form--hidden`);
    document.querySelector(`.button__icon`).classList.add(`form--hidden`);
    document.querySelectorAll(`.form__message`)[2].textContent = "";
    document.getElementById(`inputUser`).value = "";
    document.getElementById(`inputPassword`).value = "";
    document.getElementById(`inputPassword`).value = "";
  });

  document.querySelector("#forgetP").addEventListener("click", (e) => {
    e.preventDefault();
    resetmsg();
    loginForm.classList.add("form--hidden");
    lgBtn.classList.add(`form--hidden`);
    forgotForm.classList.remove(`form--hidden`);
    // document.getElementsByClassName(`item`).value=``;
    // document.querySelector(`#oldPassword`).value=``;
    // document.querySelector(`#newPassword`).value=``;
    // forgotForm.querySelector(`.form__message`).textContent=``;
  });

  document.querySelector("#loginF").addEventListener("click", (e) => {
    e.preventDefault();
    resetmsg();
    loginForm.classList.remove("form--hidden");
    lgBtn.classList.add(`form--hidden`);
    forgotForm.classList.add(`form--hidden`);
    // document.getElementsByClassName(`item`).value=``;
    // document.querySelector(`#oldPassword`).value=``;
    // document.querySelector(`#newPassword`).value=``;
    // forgotForm.querySelector(`.form__message`).textContent=``;
  });

  document.querySelector("#xIcon").addEventListener("click", (e) => {
    e.preventDefault();
    resetmsg();
    loginForm.classList.add("form--hidden");
    lgBtn.classList.remove("form--hidden");
  });

  document.querySelector("#fgclose").addEventListener("click", (e) => {
    e.preventDefault();
    resetmsg();
    loginForm.classList.remove("form--hidden");
    lgBtn.classList.remove("form--hidden");
    forgotForm.classList.add(`form--hidden`);
    loginForm.classList.remove(`form__message--error`);
    loginForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    lgUseNameMsg.textContent = "";
    lgPassMsg.textContent = "";
    resetmsg;

    let user = document.querySelector("#inputUser").value;
    let password = document.querySelector("#inputPassword").value;

    if (
      user === peopleObject[0].name &&
      password === peopleObject[0].password
    ) {
      loadLoginBtn(loginForm);
      setTimeout(() => {
        loginForm.querySelectorAll(".form__message")[2].textContent =
          "Success login";
      }, 1000);
      setTimeout(() => {
        lgBtn.classList.remove("form--hidden");

        loginForm.classList.add("form--hidden");
        lgBtn.textContent = "????ng nh???p th??nh c??ng";
      }, 2000);
    } else if (user !== "" && password == "") {
      // loadLoginBtn();
      
        lgPassMsg
          .classList.add(`form__message--error`);
        lgPassMsg.textContent =
          "B???t bu???c nh???p";
        loginForm.querySelectorAll(".form__message")[2].textContent = "";
      
    } else if (user == "" && password !== "") {
      // loadLoginBtn();
      
        lgUseNameMsg
          .classList.add(`form__message--error`);
        lgUseNameMsg.textContent =
          "B???t bu???c nh???p";
        loginForm.querySelectorAll(".form__message")[2].textContent = "";
      
    } else if (
      user == peopleObject[0].name &&
      password !== peopleObject[0].password
    ) {
      loadLoginBtn();
      setTimeout(() => {
        lgUseNameMsg
          .classList.remove(`form__message--error`);
        lgPassMsg.textContent =
          "Sai password ????ng nh???p";
        lgPassMsg
          .classList.add(`form__message--error`);
        loginForm.querySelectorAll(".form__message")[2].textContent = "";
      }, 1000);
    } else if (
      user !== peopleObject[0].name &&
      password == peopleObject[0].password
    ) {
      loadLoginBtn();
      setTimeout(() => {
        lgUseNameMsg.textContent =
          "Sai name ????ng nh???p";
        lgPassMsg
          .classList.remove(`form__message--error`);
        lgUseNameMsg
          .classList.add(`form__message--error`);
        
      }, 1000);
    } else if (user == "" && password == "") {
      // loadLoginBtn();
      
        lgUseNameMsg
          .classList.add(`form__message--error`);
        lgPassMsg
          .classList.add(`form__message--error`);
        lgUseNameMsg.textContent =
          "B???t bu???c nh???p";
        lgPassMsg.textContent =
          "B???t bu???c nh???p";
        loginForm.querySelectorAll(".form__message")[2].textContent = "";
      
    } else if (
      user !== peopleObject[0].name &&
      password !== peopleObject[0].password
    ) {
      loadLoginBtn();
      setTimeout(() => {
        lgUseNameMsg
          .classList.add(`form__message--error`);
        lgPassMsg
          .classList.add(`form__message--error`);
        // lgUseNameMsg.textContent =
        //   "Sai name or password ????ng nh???p";
        lgPassMsg.textContent =
          "Sai name or password ????ng nh???p";
        loginForm.querySelectorAll(".form__message")[2].textContent = "";
      }, 1000);
    } else if (
      user !== peopleObject[0].name &&
      password !== peopleObject[0].password
    ) {
      loadLoginBtn();
      setTimeout(() => {
        lgUseNameMsg
          .classList.add(`form__message--error`);
        lgPassMsg
          .classList.add(`form__message--error`);
        lgUseNameMsg.textContent =
          "Sai name or password ????ng nh???p";
        lgPassMsg.textContent =
          "Sai name or password ????ng nh???p";
        loginForm.querySelectorAll(".form__message")[2].textContent = "";
      }, 1000);
    }

    //   for(let i=0;i<peopleObject.length;i++){
    //   if (
    //     user == peopleObject[i].name &&
    //     password == peopleObject[i].password
    //     ) {
    //       document.querySelector(`.button__text`).classList.add(`form--hidden`);
    //       document.querySelector(`.button__icon`).classList.remove(`form--hidden`);
    //     setTimeout(() => {
    //       loginForm.classList.add("form--hidden");
    //       lgBtn.classList.remove("form--hidden");
    //       lgBtn.textContent = "????ng nh???p th??nh c??ng";
    //     }, 2000);
    //   } else {
    //     setFormMessage(loginForm, `error`, "Sai t??n ????ng nh???p ho???c m???t kh???u");
    //     document.getElementById(`inputUser`).value = "";
    //     document.getElementById(`inputPassword`).value = "";
    //   }
    // }
  });

  // Logic forgot password

  forgotForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    let oldPassword = document.querySelector(`#oldPassword`).value;
    let newPassword = document.querySelector(`#newPassword`).value;
    let oldPassMsg = document.getElementById(`oldpass`);
    let newPassMsg = document.getElementById(`newpass`);

    if (newPassword === `` && oldPassword === ``) {
      resetmsg();
      // nutloadforgot();
      
        oldPassMsg.textContent = `B???t bu???c nh???p`;
        newPassMsg.textContent = `B???t bu???c nh???p`;
      
    } else if (oldPassword === ``) {
      resetmsg();
      // nutloadforgot();
      
        oldPassMsg.textContent = `B???t bu???c nh???p`;
      
    } else if (newPassword === ``) {
      resetmsg();
      // nutloadforgot();
      
        newPassMsg.textContent = `B???t bu???c nh???p`;
      
    } else if (oldPassword !== `admin`) {
      resetmsg();
      loadLoginBtn(forgotForm);
      setTimeout(() => {
        oldPassMsg.textContent = `Password kh??ng ????ng`;
      }, 1000);
    } else if (oldPassword === `admin` && newPassword === "admin") {
      resetmsg();
      loadLoginBtn(forgotForm);
      setTimeout(() => {
        newPassMsg.textContent = `Tr??ng password c??`;
      });
    } else if (oldPassword === `admin`) {
      loadLoginBtn(forgotForm);
      setTimeout(() => {
        peopleObject[0].password = newPassword;
        loginForm.classList.remove("form--hidden");
        lgBtn.classList.add("form--hidden");
        forgotForm.classList.add(`form--hidden`);
        loginForm.classList.remove(`form__message--error`);
        resetmsg();
        document.getElementById(
          `chngpsmessage`
        ).textContent = `?????i m???t kh???u th??nh c??ng`;
      }, 1000);
    }
  });
});
