let hoverCount = 0;

function nextPage() {
    window.location.href = "memory.html";
}

function moveButton() {
    hoverCount++;

    if (hoverCount >= 5) {
        let yesButton = document.getElementById('yesButton');
        yesButton.disabled = false;
        yesButton.classList.add("enabled");
    }

    let noButton = document.getElementById('noButton');
    let x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
    let y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;

    // Ensure button stays within viewport
    x = Math.max(0, Math.min(x, window.innerWidth - noButton.offsetWidth));
    y = Math.max(0, Math.min(y, window.innerHeight - noButton.offsetHeight));

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
