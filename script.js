const fileInput = document.getElementById("image-upload");
const uploadBox = document.querySelector(".upload-box");
const uploadHint = document.querySelector(".upload-hint");
const uploadedImage = document.getElementById("uploaded-image");
const imagePreview = document.getElementById("image-preview");
const removeBtn = document.getElementById("remove-btn");
const changeBtn = document.getElementById("change-btn");
const svgWrapper = document.querySelector(".svg-wrapper");
const svgUploadIcon = document.querySelector(".svg-wrapper svg");
const form = document.getElementById("registration-form");

svgUploadIcon.addEventListener("click", () => fileInput.click());

uploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadBox.style.border = "2px dashed hsl(252, 6%, 83%)";
  uploadBox.style.backgroundColor = "hsl(245, 19%, 35%)";
  uploadBox.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
  uploadBox.style.transform = "scale(1.01)";
});

uploadBox.addEventListener("dragleave", () => {
  uploadBox.style.border = "2px dashed hsl(245, 15%, 58%)";
  uploadBox.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  uploadBox.style.boxShadow = "none";
  uploadBox.style.transform = "scale(1)";
});

uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();
  resetUploadBoxStyles();

  uploadBox.style.border = "2px dashed hsl(245, 15%, 58%)";
  uploadBox.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  uploadBox.style.boxShadow = "none";
  uploadBox.style.transform = "scale(1)";
  handleFileUpload(e.dataTransfer.files);
});
fileInput.addEventListener("change", (e) => {
  handleFileUpload(e.target.files);
});

function handleFileUpload(files) {
  if (files.length !== 1) {
    return;
  }
  const file = files[0];
  const validTypes = ["image/jpeg", "image/png"];
  const maxSize = 500 * 1024;

  if (!validTypes.includes(file.type)) {
    showMessage("Invalid file type. Please upload JPG or PNG.", true);
    return;
  }
  if (file.size > maxSize) {
    showMessage("File too large. Please upload a photo under 500KB.", true);
    return;
  }
  fileInput.files = files;
  previewImage(file);
  resetMessage();
}

function previewImage(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImage.src = e.target.result;
    imagePreview.style.display = "block";
    svgWrapper.style.display = "none";
  };
  reader.readAsDataURL(file);
}
removeBtn.addEventListener("click", () => {
  uploadedImage.src = "";
  imagePreview.style.display = "none";
  svgWrapper.style.display = "flex";
  fileInput.value = "";
  resetMessage();
});

changeBtn.addEventListener("click", () => {
  fileInput.value = "";
  fileInput.click();
});

function resetUploadBoxStyles() {
  uploadBox.style.border = "2px dashed hsl(245, 15%, 58%)";
  uploadBox.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  uploadBox.style.boxShadow = "none";
  uploadBox.style.transform = "scale(1)";
}
function showMessage(message, isError) {
  uploadHint.style.display = "block";
  uploadHint.innerHTML = `
        <span class="warning-icon" style="color: ${
          isError ? " hsl(7, 88%, 67%)" : "hsl(140, 60%, 45%)"
        }">
          &#9432;
        </span> 
        <span style="color: ${isError ? " hsl(7, 88%, 67%)" : "inherit"}">
          ${message}
        </span>
      `;
}
function resetMessage() {
  uploadHint.style.display = "block";
  uploadHint.innerHTML = `
        <span class="warning-icon">
          &#9432;
        </span> 
        <span>Upload your photo (JPG or PNG, max size: 500KB)</span>
      `;
}

const emailInput = document.getElementById("email");

emailInput.addEventListener("input", () => {
  emailValidMessage.innerHTML = "";
});

const imageInput = document.getElementById("image-upload");
const userImg = document.querySelector(".user-img img");

const userName = document.querySelector(".user-name");
const userEmail = document.getElementById("user-email");
const gitLogin = document.querySelector(".git-login");
const nameInput = document.getElementById("name");
const loginInput = document.getElementById("login");
const userNameTicket = document.querySelector(".user-name-ticket");
const emailValidMessage = document.querySelector(".email-valid-message");
const formContainer = document.querySelector(".form-container");
const ticketContainer = document.querySelector(".ticket-container");
const nameValidMessage = document.querySelector(".name-valid-message");
const gitLoginValidMessage = document.querySelector(".git-login-valid-message");

nameInput.addEventListener("input", () => {
  nameInput.style.border = "1px solid hsl(245, 19%, 35%)";
  nameValidMessage.innerHTML = "";
});
loginInput.addEventListener("input", () => {
  loginInput.style.border = "1px solid hsl(245, 19%, 35%)";
  gitLoginValidMessage.innerHTML = "";
});
emailInput.addEventListener("input", (e) => {
  emailInput.style.border = "1px solid hsl(245, 19%, 35%)";
});
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;
  if (!emailInput || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    emailValidMessage.innerHTML = `
    <span class="warning-icon" style="color: hsl(7, 88%, 67%)">
      &#9432;
    </span> 
    <span style="color: hsl(7, 88%, 67%)">
      Please enter a valid email address
    </span>`;
    emailInput.style.border = "1px solid hsl(7, 88%, 67%)";
    emailInput.focus();
    isValid = false;
  } else {
    emailValidMessage.innerHTML = "";
  }

  if (!nameInput || !nameInput.value.trim()) {
    nameValidMessage.innerHTML = `
    <span class="warning-icon" style="color: hsl(7, 88%, 67%)">
      &#9432;
    </span> 
    <span style="color: hsl(7, 88%, 67%)">
      Please enter your name
    </span>`;
    nameInput.style.border = "1px solid hsl(7, 88%, 67%)";
    nameInput.focus();
    isValid = false;
  } else {
    nameInput.style.border = "";
  }

  if (!loginInput || !loginInput.value.trim()) {
    gitLoginValidMessage.innerHTML = `
    <span class="warning-icon" style="color: hsl(7, 88%, 67%)">
      &#9432;
    </span> 
    <span style="color: hsl(7, 88%, 67%)">
      Please enter your GitHub username
    </span>`;
    loginInput.style.border = "1px solid hsl(7, 88%, 67%)";
    loginInput.focus();
    isValid = false;
  } else {
    loginInput.style.border = "";
  }

  if (isValid) {
    const ticketNumber = Math.floor(10000 + Math.random() * 90000);
    const ticketNumberElement = document.querySelector(".ticket-number p");
    ticketNumberElement.textContent = `#${ticketNumber}`;
    userName.textContent = nameInput.value;
    userNameTicket.textContent = nameInput.value;
    userEmail.textContent = emailInput.value;
    gitLogin.textContent = loginInput.value;

    formContainer.style.display = "none";
    ticketContainer.style.display = "flex";
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        userImg.src = e.target.result;
        userImg.alt = "User Avatar";
      };
      reader.readAsDataURL(file);
    }
  }
});
