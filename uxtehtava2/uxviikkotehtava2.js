const dialog = document.querySelector("dialog");
const loginButton = document.querySelector("#login");
const closeButton = document.querySelector("#close");

loginButton.addEventListener("click", () => {
    dialog.showModal();
  });
  
  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });