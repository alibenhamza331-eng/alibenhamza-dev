/**
 * PORTFOLIO - ALI BENHAMZA
 * JavaScript principal - Animations et interactions
 * 
 * Ce fichier gère:
 * - Les animations (intro, particules, typing)
 * - La navigation (menu, scroll, smooth scroll)
 * - Les compétences (barres animées)
 * - Le formulaire de contact (envoi via Google Apps Script)
 * - La traduction FR/EN
 * 
 * URL de déploiement: https://script.google.com/macros/s/AKfycbzwNIwR2Us9bZQ4qzW9A18SEbVw6kfxELX6f3_kZNWPGw2BTxTdH2_zSYCr9KV8wfqJ/exec
 * Couleur succès bouton: #2F7832 (vert foncé)
 * 
 * @version 1.1.0
 * @author Ali Benhamza
 */

// ============================================
// TRADUCTIONS (FR / EN)
// ============================================
const translations = {
    fr: {
        'meta.title': 'Ali Benhamza | Développeur & Cybersécurité',
        'meta.description': "Portfolio d'Ali Benhamza, développeur passionné et apprenti en cybersécurité basé à Casablanca. Découvrez mes projets et compétences.",
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.skills': 'Compétences',
        'nav.projects': 'Projets',
        'nav.pricing': 'Offres',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',
        'nav.menu': 'Menu',
        'nav.lang_toggle': 'Changer la langue',
        'hero.greeting': 'Bonjour, je suis',
        'hero.roles': [
            'Développeur Front-end',
            'Apprenti Cybersécurité',
            'Passionné de Code',
            'Étudiant Autodidacte'
        ],
        'hero.description': 'Casablanca, Maroc<br>Passionné par le code et la cybersécurité',
        'hero.cta_projects': 'Voir mes projets',
        'hero.cta_contact': 'Me contacter',
        'hero.scroll': 'Défiler',
        'about.title': 'À propos',
        'about.subtitle': 'Mon parcours',
        'about.p1': "Passionné de technologie depuis mon plus jeune âge, j'ai découvert le monde du développement web à 12 ans. Ce qui a commencé comme une simple curiosité est rapidement devenu une véritable passion.",
        'about.p2': "Aujourd'hui, je maîtrise <strong>HTML/CSS</strong> et j'ai des bases solides en <strong>Python</strong>. Je me forme activement à la <strong>cybersécurité</strong>, un domaine qui me fascine par son côté défensif et stratégique.",
        'about.p3': "Mon objectif : devenir un expert en sécurité informatique tout en continuant à créer des expériences web modernes et performantes.",
        'about.code': '{\n  <span class="code-key">"nom"</span>: <span class="code-string">"Ali Benhamza"</span>,\n <span class="code-key"> "localisation"</span>: <span class="code-string">"Casablanca, Maroc"</span>,\n  <span class="code-key">"passion"</span>: <span class="code-string">"Code & Cybersécurité"</span>,\n  <span class="code-key">"experience"</span>: <span class="code-string">"1 an"</span>\n}',
        'about.stats_years': "Années d'expérience",
        'about.stats_projects': 'Projets réalisés',
        'about.stats_languages': 'Langages maîtrisés',
        'about.stats_passion': 'Passion',
        'skills.title': 'Compétences',
        'skills.web': 'Développement Web',
        'skills.programming': 'Programmation',
        'skills.security': 'Cybersécurité',
        'skills.tools': 'Outils',
        'skills.skill_html': 'HTML',
        'skills.skill_css': 'CSS3',
        'skills.skill_js': 'JavaScript',
        'skills.skill_responsive': 'Responsive Design',
        'skills.skill_python': 'Python',
        'skills.skill_git': 'Git & GitHub',
        'skills.skill_algorithms': 'Algorithmes',
        'skills.skill_security_basics': 'Bases de la sécurité',
        'skills.skill_linux': 'Linux Basics',
        'skills.skill_networks': 'Réseaux',
        'projects.title': 'Projets',
        'projects.p1_title': 'Portfolio Personnel',
        'projects.p1_desc': 'Mon portfolio personnel avec animations modernes, design responsive et thème sombre.',
        'projects.p2_title': 'Calculatrice Python',
        'projects.p2_desc': "Calculatrice en console avec opérations de base, validations d'entrée et gestion d'erreurs.",
        'projects.view_project': 'Voir le projet',
        'projects.view_script': 'Voir le script',
        'projects.source_code': 'Code source',
        'pricing.title': 'Offres & Tarifs',
        'pricing.lead': 'Des formules claires à partir de <strong>300 MAD</strong>. Hébergement non inclus.',
        'pricing.per_project': 'par projet',
        'pricing.no_hosting': 'Hébergement non inclus',
        'pricing.cta': 'Demander un devis',
        'pricing.badge_popular': 'Populaire',
        'pricing.starter.name': 'Starter',
        'pricing.starter.tagline': 'Site vitrine 1 page',
        'pricing.starter.price': '700 MAD',
        'pricing.starter.f1': '1 page moderne',
        'pricing.starter.f2': 'Design responsive',
        'pricing.starter.f3': 'Section contact',
        'pricing.starter.f4': 'Délai: 3 jours',
        'pricing.starter.f5': '1 révision',
        'pricing.pro.name': 'Pro',
        'pricing.pro.tagline': 'Idéal pour PME',
        'pricing.pro.price': '1000 MAD',
        'pricing.pro.f1': "Jusqu'à 3 pages",
        'pricing.pro.f2': 'UI/UX sur mesure',
        'pricing.pro.f3': 'Optimisation performance',
        'pricing.pro.f4': 'SEO de base',
        'pricing.pro.f5': '2 révisions',
        'pricing.premium.name': 'Premium',
        'pricing.premium.tagline': 'Présence complète',
        'pricing.premium.price': '1300 MAD',
        'pricing.premium.f1': "Jusqu'à 6 pages",
        'pricing.premium.f2': 'Animations avancées',
        'pricing.premium.f3': 'Structure portfolio/blog',
        'pricing.premium.f4': 'Mise en ligne assistée (sans hébergement)',
        'pricing.premium.f5': '3 révisions',
        'pricing.footnote': 'Hébergement et nom de domaine non inclus. Possibles sur devis.',
        'faq.title': 'FAQ',
        'faq.q1': 'Quel est le délai de livraison ?',
        'faq.a1': 'En général: 3 jours (Starter), 5-7 jours (Pro), 7-10 jours (Premium). Le délai dépend du contenu reçu.',
        'faq.q2': "Est-ce que tu gères l'hébergement et le domaine ?",
        'faq.a2': "L'hébergement et le domaine ne sont pas inclus, mais je peux vous conseiller et aider à la mise en ligne.",
        'faq.q3': 'Combien de révisions sont incluses ?',
        'faq.a3': 'Starter: 1 révision, Pro: 2 révisions, Premium: 3 révisions. Des révisions supplémentaires sont possibles.',
        'faq.q4': 'De quoi as-tu besoin pour commencer ?',
        'faq.a4': 'Un brief clair, vos textes, logo, couleurs souhaitées, et 2-3 exemples de sites que vous aimez.',
        'quote.subject_prefix': 'Demande de devis -',
        'quote.message': 'Bonjour,\nJe souhaite un devis pour l\'offre {plan} ({price}).\nType de site:\nNombre de pages:\nBudget:\nDélai souhaité:\nMerci.',
        'quote.default_plan': 'Offre',
        'contact.title': 'Contact',
        'contact.subtitle': 'Travaillons ensemble',
        'contact.text': 'Vous avez un projet en tête ou souhaitez discuter ?<br>N\'hésitez pas à me contacter !',
        'contact.location_label': 'Localisation',
        'contact.location_value': 'Casablanca, Maroc',
        'contact.email_label': 'Email',
        'contact.availability_label': 'Disponibilité',
        'contact.availability_value': 'Projets & Collaborations',
        'contact.form.name_label': 'Nom',
        'contact.form.name_placeholder': 'Votre nom',
        'contact.form.email_label': 'Email',
        'contact.form.email_placeholder': 'votre@email.com',
        'contact.form.subject_label': 'Sujet',
        'contact.form.subject_placeholder': 'Sujet du message',
        'contact.form.message_label': 'Message',
        'contact.form.message_placeholder': 'Votre message...',
        'contact.form.submit': 'Envoyer le message',
        'contact.form.sending': 'Envoi en cours...',
        'contact.form.success': 'Message envoyé !',
        'contact.form.error': "Erreur d'envoi",
        'footer.tagline': 'Développeur & Apprenti Cybersécurité',
        'footer.copyright': '&copy; 2026 Ali Benhamza. Tous droits réservés.',
        'footer.built_with': 'Créé par',
        'global.back_to_top': 'Retour en haut',
        'alerts.github': 'Lien GitHub bientôt disponible !',
        'alerts.linkedin': 'Lien LinkedIn bientôt disponible !',
        'alerts.twitter': 'Lien Twitter bientôt disponible !',
        'console.greeting': '👋 Bonjour !',
        'console.curiosity': 'Tu aimes fouiller dans le code ? Moi aussi !',
        'console.contact': 'Contacte-moi si tu veux collaborer 🚀'
    },
    en: {
        'meta.title': 'Ali Benhamza | Developer & Cybersecurity',
        'meta.description': 'Portfolio of Ali Benhamza, a passionate developer and cybersecurity learner based in Casablanca. Explore my projects and skills.',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.pricing': 'Plans',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',
        'nav.menu': 'Menu',
        'nav.lang_toggle': 'Switch language',
        'hero.greeting': "Hi, I'm",
        'hero.roles': [
            'Front-end Developer',
            'Cybersecurity Learner',
            'Code Enthusiast',
            'Self-taught Student'
        ],
        'hero.description': 'Casablanca, Morocco<br>Passionate about code and cybersecurity',
        'hero.cta_projects': 'See my projects',
        'hero.cta_contact': 'Contact me',
        'hero.scroll': 'Scroll',
        'about.title': 'About',
        'about.subtitle': 'My journey',
        'about.p1': 'Passionate about technology from a young age, I discovered web development at 12. What started as simple curiosity quickly became a true passion.',
        'about.p2': 'Today, I master <strong>HTML/CSS</strong> and have solid foundations in <strong>Python</strong>. I actively train in <strong>cybersecurity</strong>, a field that fascinates me for its defensive and strategic side.',
        'about.p3': 'My goal: become an expert in information security while continuing to create modern, high-performance web experiences.',
        'about.code': '{\n  <span class="code-key">"name"</span>: <span class="code-string">"Ali Benhamza"</span>,\n  <span class="code-key">"location"</span>: <span class="code-string">"Casablanca, Morocco"</span>,\n  <span class="code-key">"passion"</span>: <span class="code-string">"Code & Cybersecurity"</span>,\n  <span class="code-key">"experience"</span>: <span class="code-string">"1 year"</span>\n}',
        'about.stats_years': 'Years of experience',
        'about.stats_projects': 'Projects completed',
        'about.stats_languages': 'Languages mastered',
        'about.stats_passion': 'Passion',
        'skills.title': 'Skills',
        'skills.web': 'Web Development',
        'skills.programming': 'Programming',
        'skills.security': 'Cybersecurity',
        'skills.tools': 'Tools',
        'skills.skill_html': 'HTML',
        'skills.skill_css': 'CSS3',
        'skills.skill_js': 'JavaScript',
        'skills.skill_responsive': 'Responsive Design',
        'skills.skill_python': 'Python',
        'skills.skill_git': 'Git & GitHub',
        'skills.skill_algorithms': 'Algorithms',
        'skills.skill_security_basics': 'Security Fundamentals',
        'skills.skill_linux': 'Linux Basics',
        'skills.skill_networks': 'Networking',
        'projects.title': 'Projects',
        'projects.p1_title': 'Personal Portfolio',
        'projects.p1_desc': 'My personal portfolio with modern animations, responsive design, and a dark theme.',
        'projects.p2_title': 'Python Calculator',
        'projects.p2_desc': 'Console calculator with basic operations, input validation, and error handling.',
        'projects.view_project': 'View project',
        'projects.view_script': 'View script',
        'projects.source_code': 'Source code',
        'pricing.title': 'Plans & Pricing',
        'pricing.lead': 'Clear packages starting at <strong>300 MAD</strong>. Hosting not included.',
        'pricing.per_project': 'per project',
        'pricing.no_hosting': 'Hosting not included',
        'pricing.cta': 'Request a quote',
        'pricing.badge_popular': 'Popular',
        'pricing.starter.name': 'Starter',
        'pricing.starter.tagline': 'One-page showcase site',
        'pricing.starter.price': '700 MAD',
        'pricing.starter.f1': '1 modern page',
        'pricing.starter.f2': 'Responsive design',
        'pricing.starter.f3': 'Contact section',
        'pricing.starter.f4': 'Delivery: 3 days',
        'pricing.starter.f5': '1 revision',
        'pricing.pro.name': 'Pro',
        'pricing.pro.tagline': 'Ideal for small businesses',
        'pricing.pro.price': '100 MAD',
        'pricing.pro.f1': 'Up to 3 pages',
        'pricing.pro.f2': 'Custom UI/UX',
        'pricing.pro.f3': 'Performance optimization',
        'pricing.pro.f4': 'Basic SEO',
        'pricing.pro.f5': '2 revisions',
        'pricing.premium.name': 'Premium',
        'pricing.premium.tagline': 'Full online presence',
        'pricing.premium.price': '1300 MAD',
        'pricing.premium.f1': 'Up to 6 pages',
        'pricing.premium.f2': 'Advanced animations',
        'pricing.premium.f3': 'Portfolio/blog structure',
        'pricing.premium.f4': 'Assisted launch (hosting not included)',
        'pricing.premium.f5': '3 revisions',
        'pricing.footnote': 'Hosting and domain name not included. Available on request.',
        'faq.title': 'FAQ',
        'faq.q1': 'What is the delivery time?',
        'faq.a1': 'Usually: 3 days (Starter), 5-7 days (Pro), 7-10 days (Premium). Timing depends on received content.',
        'faq.q2': 'Do you handle hosting and domain?',
        'faq.a2': 'Hosting and domain are not included, but I can advise and help with the launch.',
        'faq.q3': 'How many revisions are included?',
        'faq.a3': 'Starter: 1 revision, Pro: 2 revisions, Premium: 3 revisions. Extra revisions are possible.',
        'faq.q4': 'What do you need to start?',
        'faq.a4': 'A clear brief, your text, logo, desired colors, and 2-3 example sites you like.',
        'quote.subject_prefix': 'Quote request -',
        'quote.message': 'Hello,\nI would like a quote for the {plan} plan ({price}).\nWebsite type:\nNumber of pages:\nBudget:\nDesired deadline:\nThank you.',
        'quote.default_plan': 'Plan',
        'contact.title': 'Contact',
        'contact.subtitle': "Let's work together",
        'contact.text': 'Do you have a project in mind or want to talk?<br>Feel free to reach out!',
        'contact.location_label': 'Location',
        'contact.location_value': 'Casablanca, Morocco',
        'contact.email_label': 'Email',
        'contact.availability_label': 'Availability',
        'contact.availability_value': 'Projects & Collaboration',
        'contact.form.name_label': 'Name',
        'contact.form.name_placeholder': 'Your name',
        'contact.form.email_label': 'Email',
        'contact.form.email_placeholder': 'your@email.com',
        'contact.form.subject_label': 'Subject',
        'contact.form.subject_placeholder': 'Message subject',
        'contact.form.message_label': 'Message',
        'contact.form.message_placeholder': 'Your message...',
        'contact.form.submit': 'Send message',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Message sent!',
        'contact.form.error': 'Send failed',
        'footer.tagline': 'Developer & Cybersecurity Learner',
        'footer.copyright': '&copy; 2026 Ali Benhamza. All rights reserved.',
        'footer.built_with': 'Built by',
        'global.back_to_top': 'Back to top',
        'alerts.github': 'GitHub link coming soon!',
        'alerts.linkedin': 'LinkedIn link coming soon!',
        'alerts.twitter': 'Twitter link coming soon!',
        'console.greeting': '👋 Hi!',
        'console.curiosity': 'Love digging into code? So do I!',
        'console.contact': "Reach out if you'd like to collaborate 🚀"
    }
};

let currentLang = 'fr';
let typingElement = null;
let typingTimeoutId = null;
let typingIntervalId = null;
let roleElement = null;
let roleTimeoutId = null;

// ============================================
// ATTENDRE LE CHARGEMENT DU DOM
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initParticles();
    initNavigation();
    initTypingEffect();
    initRoleRotation();
    initSkillBars();
    initStatCounters();
    initScrollAnimations();
    initBackToTop();
    initContactForm();
    initSmoothScroll();
    initPricingCtas();
    initComingSoonAlerts();
});

// ============================================
// GESTION DES LANGUES
// ============================================
function initLanguage() {
    const savedLang = localStorage.getItem('lang');
    currentLang = savedLang === 'en' ? 'en' : 'fr';
    applyTranslations(currentLang);

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const nextLang = currentLang === 'fr' ? 'en' : 'fr';
            setLanguage(nextLang, { immediate: true });
        });
    }

    logConsoleMessage();
}

function setLanguage(lang, options = {}) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations(lang);

    if (typingElement) {
        startTypingEffect(options.immediate ? 0 : 3000);
    }

    if (roleElement) {
        startRoleRotation(options.immediate ? 500 : 4000);
    }

    logConsoleMessage();
}

function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;

    const title = translations[lang]['meta.title'];
    const description = translations[lang]['meta.description'];
    const metaDesc = document.querySelector('meta[name="description"]');

    if (title) {
        document.title = title;
    }
    if (metaDesc && description) {
        metaDesc.setAttribute('content', description);
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getTranslation(key);
        if (typeof value === 'string') {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const value = getTranslation(key);
        if (typeof value === 'string') {
            el.innerHTML = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = getTranslation(key);
        if (typeof value === 'string') {
            el.setAttribute('placeholder', value);
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        const value = getTranslation(key);
        if (typeof value === 'string') {
            el.setAttribute('aria-label', value);
        }
    });

    const roleEl = document.getElementById('role-text');
    const roles = getRoles();
    if (roleEl && roles.length > 0) {
        roleEl.textContent = roles[0];
    }

    updateScriptLinks();
}

function getTranslation(key) {
    const value = translations[currentLang]?.[key];
    if (value !== undefined) return value;
    return translations.fr?.[key] ?? key;
}

function getRoles() {
    const roles = getTranslation('hero.roles');
    return Array.isArray(roles) ? roles : [];
}

function updateScriptLinks() {
    const links = document.querySelectorAll('[data-script-link]');
    if (!links.length) return;

    links.forEach(link => {
        const fr = link.getAttribute('data-script-fr');
        const en = link.getAttribute('data-script-en');
        const next = currentLang === 'en' ? en : fr;
        if (next) {
            link.setAttribute('href', next);
        }
    });
}

function logConsoleMessage() {
    console.log(`%c${getTranslation('console.greeting')}`, 'font-size: 24px; font-weight: bold; color: #58a6ff;');
    console.log(`%c${getTranslation('console.curiosity')}`, 'font-size: 14px; color: #8b949e;');
    console.log(`%c${getTranslation('console.contact')}`, 'font-size: 14px; color: #3fb950;');
}

// ============================================
// SYSTÈME DE PARTICULES (Arrière-plan animé)
// ============================================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let isActive = true;
    
    // Configuration des particules
    const config = {
        particleCount: window.innerWidth < 768 ? 25 : 50, // Moins de particules sur mobile
        connectionDistance: 150, // Distance max pour connecter 2 particules
        speed: 0.5, // Vitesse de déplacement
        color: 'rgba(88, 166, 255, 0.5)' // Bleu électrique avec transparence
    };
    
    // Redimensionnement du canvas à la taille de la fenêtre
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    
    // Classe Particle - Représente une particule individuelle
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * config.speed; // Vitesse X aléatoire
            this.vy = (Math.random() - 0.5) * config.speed; // Vitesse Y aléatoire
            this.radius = Math.random() * 2 + 1; // Taille aléatoire
            this.opacity = Math.random() * 0.5 + 0.2; // Transparence aléatoire
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Rebond sur les bords de l'écran
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = config.color.replace('0.5', this.opacity.toString());
            ctx.fill();
        }
    }
    
    // Création des particules
    function createParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Dessiner les lignes de connexion entre particules proches
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Si les particules sont assez proches, les connecter
                if (distance < config.connectionDistance) {
                    const opacity = (1 - distance / config.connectionDistance) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(88, 166, 255, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }
    
    // Boucle d'animation principale
    function animate() {
        if (!isActive) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        animationId = requestAnimationFrame(animate);
    }
    
    // Pause l'animation quand l'onglet est caché (économie de batterie)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isActive = false;
            cancelAnimationFrame(animationId);
        } else {
            isActive = true;
            animate();
        }
    });
    
    // Démarrer l'animation
    createParticles();
    animate();
}

// ============================================
// NAVIGATION (Menu fixe + mobile)
// ============================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navbar) return;
    
    // Effet de scroll: ajoute une ombre quand on scrolle
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
    
    // Menu mobile: ouvrir/fermer au clic sur le hamburger
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Fermer le menu au clic sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Mise en évidence du lien actif selon la section visible
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }, { passive: true });
}

// ============================================
// EFFET DE TYPING (Texte qui s'écrit lettre par lettre)
// ============================================
function initTypingEffect() {
    typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    startTypingEffect(3000);
}

function startTypingEffect(delay) {
    if (!typingElement) return;

    clearTimeout(typingTimeoutId);
    clearInterval(typingIntervalId);
    typingElement.textContent = '';

    const text = getTranslation('hero.greeting');
    let index = 0;

    typingTimeoutId = setTimeout(() => {
        typingIntervalId = setInterval(() => {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typingIntervalId);
            }
        }, 50);
    }, delay);
}

// ============================================
// ROTATION DES RÔLES (Effet typing alterné)
// ============================================
function initRoleRotation() {
    roleElement = document.getElementById('role-text');
    if (!roleElement) return;
    startRoleRotation(4000);
}

function startRoleRotation(initialDelay) {
    if (!roleElement) return;
    clearTimeout(roleTimeoutId);

    const roles = getRoles();
    if (roles.length === 0) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeRole = () => {
        const currentRole = roles[roleIndex];
        let typingSpeed = 100;

        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        roleTimeoutId = setTimeout(typeRole, typingSpeed);
    };

    roleElement.textContent = roles[0];
    roleTimeoutId = setTimeout(typeRole, initialDelay);
}

// ============================================
// ANIMATION DES BARRES DE COMPÉTENCES
// ============================================
function initSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    if (skillItems.length === 0) return;
    
    // Observer quand les éléments entrent dans le viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const level = skillItem.dataset.level; // Pourcentage dans data-level
                const progressBar = skillItem.querySelector('.skill-progress');
                
                if (progressBar && level) {
                    // Animation de remplissage après 200ms
                    setTimeout(() => {
                        progressBar.style.width = `${level}%`;
                    }, 200);
                }
                
                observer.unobserve(skillItem);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => observer.observe(item));
}

// ============================================
// COMPTEURS DE STATISTIQUES (Animation numérique)
// ============================================
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.dataset.target); // Valeur finale
                const duration = 2000; // Durée: 2 secondes
                const step = target / (duration / 16); // 60 FPS
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        statNumber.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        statNumber.textContent = target; // Valeur finale exacte
                    }
                };
                
                updateCounter();
                observer.unobserve(statNumber);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// ============================================
// ANIMATIONS AU SCROLL (Fade in)
// ============================================
function initScrollAnimations() {
    // Ajouter la classe fade-in aux éléments à animer
    const animateElements = document.querySelectorAll(
        '.skill-category, .project-card, .stat-card, .about-story, .code-block, .plan-card, .pricing-footnote, .section-intro'
    );
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => observer.observe(el));
}

// ============================================
// BOUTON RETOUR EN HAUT
// ============================================
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;
    
    // Afficher le bouton après 500px de scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });
    
    // Scroll vers le haut au clic
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// FORMULAIRE DE CONTACT
// ============================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    // URL du script Google Apps Script (déployé)
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzwNIwR2Us9bZQ4qzW9A18SEbVw6kfxELX6f3_kZNWPGw2BTxTdH2_zSYCr9KV8wfqJ/exec';
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon');
        const originalIcon = btnIcon ? btnIcon.textContent : '';
        
        // Récupération des données du formulaire
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };
        
        // État: Envoi en cours
        if (btnIcon) btnIcon.textContent = '⏳';
        if (btnText) btnText.textContent = getTranslation('contact.form.sending');
        submitBtn.disabled = true;
        
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            // État: Succès - bouton vert (#2F7832)
            if (btnIcon) btnIcon.textContent = '✓';
            if (btnText) btnText.textContent = getTranslation('contact.form.success');
            submitBtn.style.background = '#2F7832';
            submitBtn.style.borderColor = '#2F7832';
            form.reset();
        } catch (error) {
            console.error('Erreur:', error);
            if (btnIcon) btnIcon.textContent = '✗';
            if (btnText) btnText.textContent = getTranslation('contact.form.error');
            submitBtn.style.background = '#ff5f56';
        }
        
        // Réinitialiser le bouton après 3 secondes
        setTimeout(() => {
            if (btnIcon) btnIcon.textContent = originalIcon;
            if (btnText) btnText.textContent = getTranslation('contact.form.submit');
            submitBtn.style.background = '';
            submitBtn.style.borderColor = '';
            submitBtn.disabled = false;
        }, 3000);
    });
}

// ============================================
// SMOOTH SCROLL POUR LES ANCRES
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            
            if (target) {
                // Offset de 70px pour tenir compte de la navbar fixe
                const offsetTop = target.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// CTA DEVIS (AUTO-REMPLISSAGE FORMULAIRE)
// ============================================
function initPricingCtas() {
    const ctas = document.querySelectorAll('.plan-cta');
    if (ctas.length === 0) return;

    const subjectInput = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    if (!subjectInput || !messageTextarea) return;

    ctas.forEach(cta => {
        cta.addEventListener('click', () => {
            const card = cta.closest('.plan-card');
            const planName = card?.querySelector('.plan-title')?.textContent?.trim() || getTranslation('quote.default_plan');
            const price = card?.querySelector('.price-amount')?.textContent?.trim() || '';

            const subjectPrefix = getTranslation('quote.subject_prefix');
            subjectInput.value = `${subjectPrefix} ${planName}`.trim();
            messageTextarea.value = buildQuoteMessage(planName, price);
        });
    });
}

function buildQuoteMessage(planName, price) {
    const template = getTranslation('quote.message');
    return template
        .replace('{plan}', planName)
        .replace('{price}', price);
}

// ============================================
// ALERTES "BIENTÔT DISPONIBLE"
// ============================================
function initComingSoonAlerts() {
    const soonLinks = document.querySelectorAll('.js-soon');
    if (soonLinks.length === 0) return;

    soonLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const type = link.dataset.soon || 'github';
            const messageKey = `alerts.${type}`;
            alert(getTranslation(messageKey));
        });
    });
}

// ============================================
// UTILITAIRES
// ============================================
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ============================================
// EFFETS DE CURSEUR PERSONNALISÉ (Desktop uniquement)
// ============================================
if (window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--color-accent-primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease, opacity 0.2s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .plan-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'var(--color-accent-secondary)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'var(--color-accent-primary)';
        });
    });
}
