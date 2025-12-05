// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initWaveAnimation();
    setupSmoothScroll();
    setupScrollAnimations();
});

// ==================== Wave Animation ====================
function initWaveAnimation() {
    const canvas = document.getElementById('waveCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Wave data
    let waves = [];
    const waveCount = 4;
    const waveAmplitude = 30;
    const waveFrequency = 0.005;

    for (let i = 0; i < waveCount; i++) {
        waves.push({
            offset: (i * Math.PI) / waveCount,
            phase: 0,
            amplitude: waveAmplitude - i * 5,
            yPosition: canvas.offsetHeight * (0.3 + i * 0.15),
            color: i % 2 === 0 ? '#FF1B7D' : '#FFED4E', // Alternating pink and yellow
            width: canvas.offsetWidth
        });
    }

    // Draw solid filled waves
    function drawWaves(time) {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

        // Draw multiple wave layers
        waves.forEach((wave, index) => {
            drawWavePath(
                ctx,
                wave.yPosition,
                wave.amplitude,
                wave.offset,
                time * 0.002,
                wave.color,
                wave.width,
                index
            );
        });

        // Draw mouse-tracking particles
        drawParticles(ctx, mouseX, mouseY, canvas.offsetWidth, canvas.offsetHeight);
    }

    // Draw single wave with solid fill
    function drawWavePath(ctx, yPos, amplitude, offset, time, color, width, layerIndex) {
        const points = [];
        const frequency = 0.005;
        const segments = width / 5;

        // Build wave path points
        for (let i = 0; i <= segments; i++) {
            const x = (i / segments) * width;
            const sine = Math.sin(x * frequency + time + offset);
            const y = yPos + sine * amplitude;
            points.push({ x, y });
        }

        // Draw filled wave
        ctx.beginPath();
        ctx.moveTo(0, canvas.offsetHeight);

        // Draw top curve
        for (let point of points) {
            ctx.lineTo(point.x, point.y);
        }

        // Draw bottom line
        ctx.lineTo(width, canvas.offsetHeight);
        ctx.closePath();

        // Create gradient for wave fill
        const gradient = ctx.createLinearGradient(0, yPos - amplitude, 0, yPos + amplitude);

        if (layerIndex % 2 === 0) {
            // Pink wave gradient
            gradient.addColorStop(0, 'rgba(255, 27, 125, 0.3)');
            gradient.addColorStop(0.5, 'rgba(255, 27, 125, 0.6)');
            gradient.addColorStop(1, 'rgba(255, 27, 125, 0.2)');
        } else {
            // Yellow wave gradient
            gradient.addColorStop(0, 'rgba(255, 237, 78, 0.3)');
            gradient.addColorStop(0.5, 'rgba(255, 237, 78, 0.6)');
            gradient.addColorStop(1, 'rgba(255, 237, 78, 0.2)');
        }

        ctx.fillStyle = gradient;
        ctx.fill();

        // Add wave outline
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.8;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    // Draw particles near mouse
    function drawParticles(ctx, mouseX, mouseY, width, height) {
        const particleCount = 8;
        const particleDistance = 80;

        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2;
            const px = mouseX + Math.cos(angle) * particleDistance;
            const py = mouseY + Math.sin(angle) * particleDistance;

            if (px >= 0 && px <= width && py >= 0 && py <= height) {
                // Draw particle circle
                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 27, 125, 0.4)' : 'rgba(255, 237, 78, 0.4)';
                ctx.fill();

                // Draw connecting line to mouse
                ctx.beginPath();
                ctx.moveTo(mouseX, mouseY);
                ctx.lineTo(px, py);
                ctx.strokeStyle = i % 2 === 0 ? 'rgba(255, 27, 125, 0.2)' : 'rgba(255, 237, 78, 0.2)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        // Draw central dot
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 1, 102, 0.6)';
        ctx.fill();
    }

    // Animation loop
    function animate(time) {
        drawWaves(time);
        animationId = requestAnimationFrame(animate);
    }

    animate(0);
}

// ==================== Smooth Scroll Navigation ====================
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== Scroll Animations ====================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe project cards and other elements
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });

    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        observer.observe(category);
    });
}

// Add fade-in animation to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
