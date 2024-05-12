document.addEventListener("DOMContentLoaded", function () {
    let leftClicks = 0;
    let rightClicks = 0;
    let timer;
    let timeLeft = 10; // Set the duration of the test in seconds

    const clickArea = document.getElementById("clickArea");
    const cpsCount = document.getElementById("cpsCount");
    const timeLeftDisplay = document.getElementById("timeLeft");

    clickArea.addEventListener("mousedown", function (event) {
        if (event.button === 0) { // Left click
            leftClicks++;
        } else if (event.button === 2) { // Right click
            rightClicks++;
        }
        updateClickCount();
    });

    document.getElementById("start").addEventListener("click", function () {
        leftClicks = 0;
        rightClicks = 0;
        updateClickCount();
        timeLeft = 10; // Reset time left
        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
    });

    function updateTimer() {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            calculateCPS();
        }
    }

    function calculateCPS() {
        const totalClicks = leftClicks + rightClicks;
        const cps = totalClicks / 10; // Divide total clicks by the duration (10 seconds)
        cpsCount.textContent = cps.toFixed(2); // Display CPS with two decimal places
    }

    function updateClickCount() {
        const totalClicks = leftClicks + rightClicks;
        cpsCount.textContent = totalClicks;
    }
});
