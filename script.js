// Contador de tiempo (Ajusta la fecha en la que empezaron)
        const startDate = new Date('2025-09-23T00:00:00'); // Pon tu fecha real aquí
        function updateTimer() {
            const now = new Date();
            const diff = now - startDate;
            document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
            document.getElementById('hours').innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
            document.getElementById('mins').innerText = Math.floor((diff / 1000 / 60) % 60);
        }
        setInterval(updateTimer, 1000);
        updateTimer();

        // Función de Confeti
        function launchLove() {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff758c', '#ff4d6d', '#ffffff']
            });
            alert("¡Eres lo mejor que me ha pasado! ❤️");
        }

const snowGround = document.getElementById('snow-ground');
let snowDepth = 0;

function createSnowflake() {
    const snowflake = document.createElement('div');
    
    // En lugar de hacerlo directo, envuélvelo así:

  snowflake.classList.add('snowflake');
    
    // 20% corazones, 80% nieve
    const isHeart = Math.random() < 0.20; 
    
    

    if (isHeart) {
        snowflake.innerText = '❤';
        snowflake.classList.add('heart');
    } else {
        const icons = ['❄', '❅', '❆', '•'];
        snowflake.innerText = icons[Math.floor(Math.random() * icons.length)];
    }
    
    snowflake.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 4; // Un poco más lento para que sea romántico
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.fontSize = (Math.random() * 15 + 10) + 'px';
    snowflake.style.opacity = Math.random();

    document.body.appendChild(snowflake);

    // Acumulación suave
    if (snowDepth < 100) {
        snowDepth += 0.1; 
        snowGround.style.height = snowDepth + 'px';
    }

    setTimeout(() => { snowflake.remove(); }, duration * 1000);
}

// Agrega esto al principio de tu script.js para que la nieve 
// empiece un poquito más tarde que la flor
setTimeout(() => {
    setInterval(createSnowflake, 100); // Nieve rápida
}, 10000);
