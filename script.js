let poppedCount = 0;
let totalBalloons = 4;
let revealedMessage = [];

function nextScreen(screenNumber) {
    // Hide current screen
    document.querySelector('.screen.active').classList.remove('active');
    // Show new screen
    document.getElementById('screen' + screenNumber).classList.add('active');
}

// Phase 3: Balloon Pop
function popBalloon(element, word) {
    if (!element.classList.contains('popped')) {
        element.classList.add('popped');
        poppedCount++;
        revealedMessage.push(word);

        // Update revealed message on screen
        document.getElementById('message-reveal').innerText = revealedMessage.join(' ');

        // If all balloons popped, show 'Next' button
        if (poppedCount === totalBalloons) {
            document.getElementById('to-candle-btn').classList.remove('hidden');
        }
    }
}

// Phase 4: Blow Candle
function blowCandle() {
    const flame = document.getElementById('candle-flame');
    const screen4 = document.getElementById('screen4');
    const blowBtn = document.getElementById('blow-btn');
    const nextBtn = document.getElementById('to-bouquet-btn');

    // 1. Extinguish flame
    flame.classList.add('off');

    // 2. Make screen dark and romantic
    screen4.classList.add('screen4-dark');

    // 3. Hide blow button, show next button
    blowBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');

    // Change h2 text
    screen4.querySelector('h2').innerText = "Make a wish... then click below.";
}