
document.querySelectorAll('.animated-svg').forEach(svg => {
    svg.addEventListener('mouseenter', () => {
        svg.style.animation = 'float 2s infinite ease-in-out';
        svg.style.transform = 'scale(1.1)';
    });
    svg.addEventListener('mouseleave', () => {
        svg.style.animation = 'float 6s infinite ease-in-out';
        svg.style.transform = 'scale(1)';
    });
});
