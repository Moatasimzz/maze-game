
const start = document.getElementById('start');
const end = document.getElementById('end');
const boundaries = document.querySelectorAll('.boundary');


start.addEventListener('mouseover', () => {
    setStatusMessage("Good luck!");
});

end.addEventListener('mouseover', () => {
    setStatusMessage("Congratulations! You reached the end! Without hitting The Wall !! :)");
});

boundaries.forEach(boundary => {
    boundary.addEventListener('mouseover', () => {
        setStatusMessage("You hit a wall :( Game over.");
        boundaries.forEach(b => b.classList.add("highlighted")); 
    });

    boundary.addEventListener('mouseleave', resetBoundary);
});

start.addEventListener('mouseleave', () => {
    setStatusMessage("Begin moving your mouse over the 'S'.");
});
