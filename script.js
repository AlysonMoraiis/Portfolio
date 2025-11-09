document.addEventListener('DOMContentLoaded', () => {
    // Navegação de features dentro de cada bloco de projeto
    const projectBlocks = document.querySelectorAll('.project-block');
    const features = [
        [
            { title: 'A World of Advanced Technology', desc: 'Step into Revenchine, a metroidvania where humanity has reached the peak of technological evolution. Wield cutting-edge tools and gadgets to overcome obstacles and uncover the mysteries hidden within a vast alternate universe.' },
            { title: 'Challenge Your Mind and Skill', desc: 'Each stage brings intricate puzzles and formidable enemies that will test your logic and reflexes. Adapt, strategize, and use your technology wisely to unlock new paths and push your limits further with every challenge.' },
            { title: 'The Endless Pursuit of Evolution', desc: 'Upgrade your character, expand your abilities, and dive deeper into the unknown. As you progress, one question remains—how far can human evolution truly go?' }
        ],
        [
            { title: 'Endless Escape', desc: 'Face an endless climb to escape a wild bear! Test your reflexes and stay focused as you ascend higher and higher, overcoming challenges and breaking your own distance records.' },
            { title: 'Unlock and Conquer', desc: 'Collect coins along your journey and unlock new survivors with unique looks. Show your progress and conquer every meter with style and determination!.' },
            { title: 'Climb Through Worlds', desc: 'Explore different maps, weather conditions, and times of day that completely change the experience. No matter who you are — Just Keep Climbing!' }
        ],
        [
            { title: 'Rise of the Pirate Warrior', desc: 'Set sail into a world of endless battles and glory. As a fearless pirate wielding your blade, you’ll face relentless waves of enemies determined to claim your treasure and your life. Only skill and courage will keep you standing.' },
            { title: 'Conquer the Seas and the World', desc: 'Travel through stunning locations across the globe — from sunken ruins to cursed islands — unlocking new arenas, abilities, and challenges. Every victory brings you closer to becoming the most feared pirate to ever live.' },
            { title: 'Power, Blades, and Bosses', desc: 'Unleash devastating abilities, upgrade your powers, and battle powerful bosses that guard each region. Your legend will be forged in the chaos of combat — can you survive the storm?' }
        ],
        [
            { title: 'Meet the Builder', desc: 'In Building a Way, follow a Rufous Hornero bird starting at the forest floor. With patience and quick thinking, help him navigate his way upward to reach his home.' },
            { title: 'Reach New Heights', desc: 'The goal is to get to his nest, located on the highest trunk of the tallest tree. Every step requires strategy and careful planning.' },
            { title: 'Tools for the Journey', desc: 'Construct three key objects along the way — a ladder, a plank, and a wall — to aid the bird in climbing toward his nest.' }
        ],
        [
            { title: 'Step into the Curse', desc: 'Infinite Curse is a retro turn-based roguelike RPG filled with items and evil creatures. Take on the role of Taylor, a thief on a quest for Vlad’s precious treasures.' },
            { title: 'Fight to Survive', desc: 'After being cursed with eternal life trapped inside the mansion, Taylor must battle enemies and scavenge for supplies to stay alive.' },
            { title: 'Is Escape Possible?', desc: 'Explore the mansion, face relentless dangers, and try to uncover a way out. But the real question remains — does an escape even exist?' }
        ]
    ];

    projectBlocks.forEach((block, i) => {
        let current = 0;
        const title = block.querySelector('.project-feature-title');
        const desc = block.querySelector('.project-feature-desc');
        const leftBtn = block.querySelector('.project-nav.left');
        const rightBtn = block.querySelector('.project-nav.right');
        const indicators = block.querySelectorAll('.project-block-indicator');

        function update() {
            title.textContent = features[i][current].title;
            desc.textContent = features[i][current].desc;
            indicators.forEach((el, idx) => {
                el.classList.toggle('active', idx === current);
            });
        }

        leftBtn.addEventListener('click', () => {
            current = (current - 1 + features[i].length) % features[i].length;
            update();
        });
        rightBtn.addEventListener('click', () => {
            current = (current + 1) % features[i].length;
            update();
        });

        update();
    });

    // Controle do slideshow de projetos
    const slides = document.querySelectorAll('.project-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        showSlide(0);
    }

    // Seleciona todas as seções e links de navegação
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 🔥 Adiciona rolagem suave ao clicar nos links
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Função para verificar qual seção está visível
    function checkActiveSection() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 300;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkActiveSection);
    checkActiveSection();
});
