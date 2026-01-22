const signinBtn = document.querySelector(".signin-btn");

const signinModal = document.getElementById("signinModal");
const signupModal = document.getElementById("signupModal");

const openSignup = document.getElementById("openSignup");
const backToSignin = document.getElementById("backToSignin");

function closeAll() {
    signinModal.classList.remove("active");
    signupModal.classList.remove("active");
}

signinBtn.addEventListener("click", () => {
    closeAll();
    signinModal.classList.add("active");
});

openSignup.addEventListener("click", (e) => {
    e.preventDefault();
    closeAll();
    signupModal.classList.add("active");
});

backToSignin.addEventListener("click", (e) => {
    e.preventDefault();
    closeAll();
    signinModal.classList.add("active");
});

[signinModal, signupModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});