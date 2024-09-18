// Toggle dark and light mode
document.getElementById('mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

// Function to show specific skills
function showSkill(skill) {
    const skillContent = document.getElementById('skill-content');
    let content = '';

    if (skill === 'gfx') {
        content = '<h3>Graphic Design</h3><p>I have experience in creating various GFX assets, thumbnails, and user interfaces for games.</p><img src="gfx-image.png" alt="GFX Image" style="width: 100%;">';
    } else if (skill === 'scripting') {
        content = '<h3>Scripting</h3><p>Skilled in Lua and JavaScript, with experience in developing complex game mechanics and systems in Roblox Studio.</p>';
    } else if (skill === 'leveldesign') {
        content = '<h3>Level Design</h3><p>Proficient in designing immersive game environments, balancing aesthetics with functionality.</p>';
    }

    skillContent.innerHTML = content;
}

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { 
        slideIndex = 0; 
    }
    if (n < 0) { 
        slideIndex = slides.length - 1; 
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}