document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // 🧩 Navegação de features dentro de cada bloco de projeto
    // ========================================
    const projectBlocks = document.querySelectorAll('.project-block');

    // Cada subarray = projeto | cada objeto = feature (título + descrição)
    const features = {
        en: [
            [
                { title: 'A World of Advanced Technology', desc: 'Step into Revenchine, a metroidvania where humanity has reached the peak of technological evolution. Wield cutting-edge tools and gadgets to overcome obstacles and uncover the mysteries hidden within a vast alternate universe.' },
                { title: 'Challenge Your Mind and Skill', desc: 'Each stage brings intricate puzzles and formidable enemies that will test your logic and reflexes. Adapt, strategize, and use your technology wisely to unlock new paths and push your limits further with every challenge.' },
                { title: 'The Endless Pursuit of Evolution', desc: 'Upgrade your character, expand your abilities, and dive deeper into the unknown. As you progress, one question remains — how far can human evolution truly go?' }
            ],
            [
                { title: 'Endless Escape', desc: 'Face an endless climb to escape a wild bear! Test your reflexes and stay focused as you ascend higher and higher, overcoming challenges and breaking your own distance records.' },
                { title: 'Unlock and Conquer', desc: 'Collect coins along your journey and unlock new survivors with unique looks. Show your progress and conquer every meter with style and determination!' },
                { title: 'Climb Through Worlds', desc: 'Explore different maps, weather conditions, and times of day that completely change the experience. No matter who you are — Just Keep Climbing!' }
            ],
            [
                { title: 'Rise of the Pirate Warrior', desc: 'Set sail into a world of endless battles and glory. As a fearless pirate wielding your blade, you’ll face relentless waves of enemies determined to claim your treasure and your life.' },
                { title: 'Conquer the Seas and the World', desc: 'Travel through stunning locations across the globe — from sunken ruins to cursed islands — unlocking new arenas, abilities, and challenges.' },
                { title: 'Power, Blades, and Bosses', desc: 'Unleash devastating abilities, upgrade your powers, and battle powerful bosses that guard each region.' }
            ],
            [
                { title: 'Meet the Builder', desc: 'In Building a Way, follow a Rufous Hornero bird starting at the forest floor. With patience and quick thinking, help him navigate his way upward to reach his home.' },
                { title: 'Reach New Heights', desc: 'The goal is to get to his nest, located on the highest trunk of the tallest tree. Every step requires strategy and careful planning.' },
                { title: 'Tools for the Journey', desc: 'Construct three key objects along the way — a ladder, a plank, and a wall — to aid the bird in climbing toward his nest.' }
            ],
            [
                { title: 'Step into the Curse', desc: 'Infinite Curse is a retro turn-based roguelike RPG filled with items and evil creatures. Take on the role of Taylor, a thief on a quest for Vlad’s precious treasures.' },
                { title: 'Fight to Survive', desc: 'After being cursed with eternal life trapped inside the mansion, Taylor must battle enemies and scavenge for supplies to stay alive.' },
                { title: 'Is Escape Possible?', desc: 'Explore the mansion, face relentless dangers, and try to uncover a way out.' }
            ]
        ],
        pt: [
            [
                { title: 'Um Mundo de Tecnologia Avançada', desc: 'Entre em Revenchine, um metroidvania onde a humanidade alcançou o auge da evolução tecnológica. Use ferramentas e dispositivos avançados para superar obstáculos e desvendar mistérios escondidos em um vasto universo alternativo.' },
                { title: 'Desafie sua Mente e Habilidade', desc: 'Cada fase traz quebra-cabeças complexos e inimigos desafiadores que testam sua lógica e reflexos. Adapte-se, planeje e use sua tecnologia com sabedoria para desbloquear novos caminhos.' },
                { title: 'A Busca Infinita pela Evolução', desc: 'Melhore seu personagem, expanda suas habilidades e mergulhe mais fundo no desconhecido. Conforme avança, resta uma pergunta — até onde pode ir a evolução humana?' }
            ],
            [
                { title: 'Fuga Infinita', desc: 'Enfrente uma escalada infinita para escapar de um urso selvagem! Teste seus reflexos e mantenha o foco enquanto sobe cada vez mais alto.' },
                { title: 'Desbloqueie e Conquiste', desc: 'Colete moedas ao longo do caminho e desbloqueie novos personagens com visuais únicos. Mostre sua evolução e conquiste cada metro com estilo!' },
                { title: 'Suba por Mundos Diferentes', desc: 'Explore diferentes mapas, condições climáticas e períodos do dia que transformam completamente a experiência. Não importa quem você seja — Apenas Continue Subindo!' }
            ],
            [
                { title: 'Ascensão do Guerreiro Pirata', desc: 'Navegue por um mundo de batalhas e glória sem fim. Como um pirata destemido, você enfrentará ondas de inimigos decididos a tomar seu tesouro.' },
                { title: 'Conquiste os Mares e o Mundo', desc: 'Viaje por locais deslumbrantes — de ruínas submersas a ilhas amaldiçoadas — desbloqueando novas arenas, habilidades e desafios.' },
                { title: 'Poder, Lâminas e Chefes', desc: 'Liberte habilidades devastadoras, melhore seus poderes e enfrente chefes poderosos que guardam cada região.' }
            ],
            [
                { title: 'Conheça o Construtor', desc: 'Em Building a Way, siga um joão-de-barro que começa no chão da floresta. Com paciência e raciocínio rápido, ajude-o a subir até seu ninho.' },
                { title: 'Alcance Novas Alturas', desc: 'O objetivo é chegar ao ninho, localizado no tronco mais alto da árvore mais alta. Cada passo requer estratégia e planejamento.' },
                { title: 'Ferramentas da Jornada', desc: 'Construa três objetos principais — uma escada, uma tábua e uma parede — para ajudar o pássaro a subir até seu lar.' }
            ],
            [
                { title: 'Entre na Maldição', desc: 'Infinite Curse é um RPG roguelike retrô baseado em turnos, repleto de itens e criaturas malignas. Assuma o papel de Taylor, um ladrão em busca dos tesouros de Vlad.' },
                { title: 'Lute para Sobreviver', desc: 'Após ser amaldiçoado com a vida eterna dentro da mansão, Taylor deve lutar contra inimigos e encontrar recursos para sobreviver.' },
                { title: 'Será Possível Escapar?', desc: 'Explore a mansão, enfrente perigos implacáveis e tente descobrir uma saída.' }
            ]
        ]
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    projectBlocks.forEach((block, i) => {
        let current = 0;
        const title = block.querySelector('.project-feature-title');
        const desc = block.querySelector('.project-feature-desc');
        const leftBtn = block.querySelector('.project-nav.left');
        const rightBtn = block.querySelector('.project-nav.right');
        const indicators = block.querySelectorAll('.project-block-indicator');

        function update() {
            title.textContent = features[currentLang][i][current].title;
            desc.textContent = features[currentLang][i][current].desc;
            indicators.forEach((el, idx) => el.classList.toggle('active', idx === current));
        }

        leftBtn.addEventListener('click', () => {
            current = (current - 1 + features[currentLang][i].length) % features[currentLang][i].length;
            update();
        });

        rightBtn.addEventListener('click', () => {
            current = (current + 1) % features[currentLang][i].length;
            update();
        });

        update();
    });

    // ========================================
    // 🖼️ Slideshow
    // ========================================
    const slides = document.querySelectorAll('.project-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => (slide.style.display = i === index ? 'block' : 'none'));
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

    // ========================================
    // 🧭 Navegação suave e seção ativa
    // ========================================
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

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

    // ========================================
    // 🌐 Alternância de idioma
    // ========================================
    const flag = document.getElementById('language-flag');
    if (flag) {
        setLanguage(currentLang);

        flag.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'pt' : 'en';
            localStorage.setItem('lang', currentLang);
            setLanguage(currentLang);
            updateAllFeatures();
        });

        function setLanguage(lang) {
            flag.src = lang === 'en' ? 'images/bandeirabrasil.jpg' : 'images/bandeiraeua.png';
            flag.alt = lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês';
            document.querySelectorAll('[data-en][data-pt]').forEach(el => {
                el.textContent = el.getAttribute(`data-${lang}`);
            });
        }

        function updateAllFeatures() {
            projectBlocks.forEach((block, i) => {
                const title = block.querySelector('.project-feature-title');
                const desc = block.querySelector('.project-feature-desc');
                const indicators = block.querySelectorAll('.project-block-indicator');
                let current = Array.from(indicators).findIndex(el => el.classList.contains('active'));
                title.textContent = features[currentLang][i][current].title;
                desc.textContent = features[currentLang][i][current].desc;
            });
        }
    }
});
