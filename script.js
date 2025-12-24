function createSnow() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄';
    snowflake.classList.add('snowflake');
    
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

function startSnowing() {
    setInterval(createSnow, 100);
}

function revealSurprise() {
    const intro = document.getElementById('intro-content');
    const surprise = document.getElementById('surprise-content');
    const music = document.getElementById('bg-music');
    
    document.body.classList.add('festive-mode');

    music.volume = 0.3; 
    music.play().catch(error => console.log("Audio play failed"));

    startSnowing();

    intro.style.opacity = '0';
    intro.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        intro.style.display = 'none';
        surprise.classList.add('show');
        createHearts();
    }, 500);
}

function createHearts() {
    for(let i=0; i<10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = '2rem';
            heart.style.transition = 'all 2s ease';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.top = Math.random() * 50 + '%';
                heart.style.opacity = 0;
            }, 50);

            setTimeout(() => heart.remove(), 2000);
        }, i * 200);
    }
}