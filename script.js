const signinBtn = document.querySelector(".signin-btn");
const modal = document.getElementById("signinModal");

signinBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

