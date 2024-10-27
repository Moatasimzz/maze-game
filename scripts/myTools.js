
function highlightBoundary(event) {
    event.target.classList.add("highlighted");
}

function resetBoundary(event) {
    event.target.classList.remove("highlighted");
}

function setStatusMessage(message) {
    document.getElementById("status").textContent = message;
}

