

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
