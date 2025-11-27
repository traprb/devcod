// script.js - Enterprise Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animação de Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.bento-card, h1, h2, li').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease-out';
        observer.observe(el);
    });

    // 2. Lógica do FAQ (Accordion)
    const faqs = document.querySelectorAll('.faq-question');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const item = faq.parentElement;
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
});