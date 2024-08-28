function generateOtp() {
    const otp_container = document.getElementById("otp_container")
    otp_container.innerHTML = "";
    otp_random = Math.floor(Math.random() * 5) + 4;
    for (let i = 0; i < otp_random; i++) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const optElem = document.createElement("div");
        optElem.className = 'otp-element';
        optElem.textContent = randomNumber;
        otp_container.appendChild(optElem);
    }
}

document.getElementById("generate_otp").addEventListener("click", generateOtp)
