//your JS code here. If required.
// Select elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Check localStorage on page load
window.onload = function() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if(savedUsername && savedPassword) {
        existingBtn.style.display = "inline-block";
    }
};

// Form submit
submitBtn.addEventListener("click", function(e) {
    e.preventDefault(); // prevent page reload

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if(checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "inline-block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }

    // clear form
    usernameInput.value = "";
    passwordInput.value = "";
    checkbox.checked = false;
});

// Existing user login
existingBtn.addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");
    if(savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});
