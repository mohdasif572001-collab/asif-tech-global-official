(function () {
    const socialLinks = [
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/channel/UCRfvXfU4toossqCIbuXNblA',
            color: '#ff0000'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/p/DV_GgUSDJJB/?igsh=MXh4Nmd4OXRsdTA1Yw==',
            color: '#c13584'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/profile.php?id=100024868689885',
            color: '#1877f2'
        }
    ];

    function addSocialLinks() {
        const footer = document.querySelector('footer');
        if (!footer || footer.querySelector('.site-socials')) return;

        const section = document.createElement('nav');
        section.className = 'site-socials';
        section.setAttribute('aria-label', 'Social media');

        socialLinks.forEach(({ name, url, color }) => {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = name;
            link.style.setProperty('--social-color', color);
            link.setAttribute('aria-label', `Open ASIF TECH GLOBAL on ${name}`);
            section.appendChild(link);
        });

        const style = document.createElement('style');
        style.textContent = `
            .site-socials {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
                width: min(1180px, calc(100% - 32px));
                margin: 0 auto 20px;
                padding-top: 18px;
                border-top: 1px solid rgba(255, 255, 255, 0.16);
            }
            .site-socials a {
                color: #ffffff;
                background: var(--social-color);
                border-radius: 6px;
                padding: 8px 14px;
                font: 700 13px/1.2 "Segoe UI", Arial, sans-serif;
                text-decoration: none;
            }
            .site-socials a:hover,
            .site-socials a:focus-visible {
                filter: brightness(1.12);
                outline: 2px solid #ffffff;
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
        footer.prepend(section);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addSocialLinks);
    } else {
        addSocialLinks();
    }
})();
