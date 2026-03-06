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
        usernameInput.value = savedUsername; // pre-fill username
        passwordInput.value = savedPassword; // pre-fill password
        checkbox.checked = true; // remember checkbox checked
        existingBtn.style.display = "inline-block"; // show existing user button
    }
};

// Form submit
submitBtn.addEventListener("click", function(e) {
    e.preventDefault(); // prevent page reload

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if(username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

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
});

// Existing user login
existingBtn.addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");
    if(savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});