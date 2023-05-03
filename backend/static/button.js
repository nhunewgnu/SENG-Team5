const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn"); // Assuming you have a button with id 'logout-btn'
const userInfo = document.getElementById("user-info"); // Assuming you have a div with id 'user-info'
const authOptions = document.getElementById("auth-options"); // Assuming you have a div with id 'auth-options'
const usernameDisplay = document.getElementById("username-display"); // Assuming you have an element with id 'username-display'

loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  updateUI();
});

function updateUI() {
  const username = localStorage.getItem("username");
  if (username) {
    userInfo.style.display = "block";
    authOptions.style.display = "none";
    usernameDisplay.textContent = username;
  } else {
    userInfo.style.display = "none";
    authOptions.style.display = "block";
  }
}

updateUI(); // Call the updateUI function when the script loads

