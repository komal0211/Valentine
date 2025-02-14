document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const backgroundMusic = document.getElementById('backgroundMusic');

    const sureModal = document.getElementById('sureModal');
    const pukkaModal = document.getElementById('pukkaModal');

    const sureYesButton = document.getElementById('sureYes');
    const sureNoButton = document.getElementById('sureNo');

    const pukkaYesButton = document.getElementById('pukkaYes');
    const pukkaNoButton = document.getElementById('pukkaNo');

    // Show the first confirmation modal on "Yes!" click
    yesButton.addEventListener('click', function() {
        sureModal.style.display = 'flex';
    });

    // Handle "Yes" click for the first modal
    sureYesButton.addEventListener('click', function() {
        sureModal.style.display = 'none';
        pukkaModal.style.display = 'flex';
    });

    // Handle "No" click for the first modal
    sureNoButton.addEventListener('click', function() {
        sureModal.style.display = 'none';
    });

    // Handle "Yes" click for the second modal
    pukkaYesButton.addEventListener('click', function() {
        pukkaModal.style.display = 'none';
        container.innerHTML = `
            <h1>Yay! I love you too! ❤️ <br></h1>
            <h3>I’ll always be the pineapple to your heart, sweet and a little bit unexpected, but perfectly meant to be. 🍍💖</h3>
            <img src="https://media.giphy.com/media/9d3LQ6TdV2Flo8ODTU/giphy.gif?cid=790b7611zjlhr6ysudwmdf6b60n2dj4ctuzey2klglul04es&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Hug" class="hug" id="hugGif" height="30%" width="30%">
        `;
        setTimeout(function() {
            const hugGif = document.getElementById('hugGif');
            if (hugGif) {
                hugGif.src = "https://tse3.mm.bing.net/th?id=OIP.J611IuHNiXk5_N4FcCYuFgHaGK&pid=Api";
                hugGif.alt = "Kiss";
            }
        }, 5000);
    });

    // Handle "No" click for the second modal
    pukkaNoButton.addEventListener('click', function() {
        pukkaModal.style.display = 'none';
    });

    // Handle "No" button moving (Only on Desktop)
    function moveNoButton() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    }

    // Detect if the user is on mobile
    function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (!isMobile()) {
        noButton.addEventListener('mouseover', moveNoButton);
    } else {
        noButton.addEventListener('click', function() {
            alert('Please say yes! 🥺');
        });
    }

    // Attempt to play the audio after user clicks "Yes"
    yesButton.addEventListener('click', function() {
        backgroundMusic.play().catch(function(error) {
            console.error("Autoplay prevented:", error);
        });
    });

    backgroundMusic.addEventListener('error', function(error) {
        console.error("Error loading audio:", error);
    });

    sureNoButton.addEventListener('click', function() {
        alert('Please say yes! 🥺');
    });

    pukkaNoButton.addEventListener('click', function() {
        alert('Aaa abhi option nhi h 😎🥺');
    });
});
