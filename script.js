document.addEventListener("DOMContentLoaded", function () {
    let clicks = 0;
    let timer;
    let timeLeft = 10; // Set the duration of the test in seconds

    const clickArea = document.getElementById("clickArea");
    const cpsCount = document.getElementById("cpsCount");
    const timeLeftDisplay = document.getElementById("timeLeft");

    clickArea.addEventListener("mousedown", function () {
        clicks++;
        cpsCount.textContent = clicks;
    });

    document.getElementById("start").addEventListener("click", function () {
        clicks = 0;
        cpsCount.textContent = 0;
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
        const cps = clicks / 10; // Divide total clicks by the duration (10 seconds)
        cpsCount.textContent = cps.toFixed(2); // Display CPS with two decimal places
    }
});
