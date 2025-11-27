// script.js - Lógica Devcod
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animação de Scroll Suave
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.bento-card, .hero-title, .hero-subtitle, li, .faq-item');
    elements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease-out';
        observer.observe(el);
    });

    // 2. FAQ Accordion
    const faqs = document.querySelectorAll('.faq-question');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const item = faq.parentElement;
            document.querySelectorAll('.faq-item').forEach(i => {
                if(i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    // 3. Envio WhatsApp
    const form = document.getElementById('whatsappForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const empresa = document.getElementById('empresa').value;
            const servico = document.getElementById('servico').value;
            const msg = document.getElementById('mensagem').value;
            
            const text = `*NOVA SOLICITAÇÃO VIA SITE*%0A%0A👤 *Nome:* ${nome}%0A🏢 *Empresa:* ${empresa}%0A🚀 *Interesse:* ${servico}%0A📝 *Detalhes:* ${msg}`;
            window.open(`https://wa.me/5511968930203?text=${text}`, '_blank');
        });
    }

    // 4. Lógica de Cookies
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookieConsent')) {
        cookieBanner.classList.remove('hidden');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'true');
        cookieBanner.classList.add('hidden');
    });
});
