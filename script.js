const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

function openLogin() {
    signupModal.style.display = "none";
    loginModal.style.display = "flex";
}

function openSignup() {
    loginModal.style.display = "none";
    signupModal.style.display = "flex";
}

function closeModal() {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
}

function switchToSignup() {
    openSignup();
}

function switchToLogin() {
    openLogin();
}

function login(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;

    alert(
        "Login interface ready.\n\n" +
        "Next step: connect this form to Supabase Authentication."
    );
}

function signup(event) {
    event.preventDefault();

    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert(
        "Registration interface ready.\n\n" +
        "Next step: connect this form to Supabase Authentication."
    );
}

window.addEventListener("click", function(event) {

    if (event.target === loginModal) {
        closeModal();
    }

    if (event.target === signupModal) {
        closeModal();
    }

});
