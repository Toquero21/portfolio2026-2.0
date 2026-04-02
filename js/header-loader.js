    const header = document.getElementById("site-header");

    fetch('/partials/header.html')
    .then(response => response.text())
    .then(html => {
        header.innerHTML = html;
        initHeaderBehavior();
    })
    .catch(error => {
        console.error('Error al cargar el header', error);
    });

    function initHeaderBehavior(){
    // marcar enlace activo
    const links = document.querySelectorAll('#primary-nav a, #site-header nav a');
    const current = location.pathname.split('/').pop() || 'index.html';
    links.forEach(a => {
        const href = a.getAttribute('href') || '';
        if (href.endsWith(current) || (href === '/index.html' && current === 'index.html')) {
        a.setAttribute('aria-current', 'page');
        }
        try {
        if (a.hostname && a.hostname !== location.hostname) {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        }
        } catch (e) {}
    });

    const toggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (toggle && navList) {
        toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        navList.classList.toggle('show');
        });

        navList.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navList.classList.remove('show');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
        });

        document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navList.classList.remove('show');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
        });
    }

    // cargar footer en #site-footer
    const footerContainer = document.getElementById('site-footer');
    if (footerContainer) {
        fetch('/partials/footer.html')
        .then(r => r.text())
        .then(html => {
            footerContainer.innerHTML = html;
            const yearEl = document.getElementById('year');
            if (yearEl) yearEl.textContent = new Date().getFullYear();
        })
        .catch(err => console.warn('Footer no cargado', err));
    }
    }
