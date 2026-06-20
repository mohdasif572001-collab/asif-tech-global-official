(function () {
    const NATIVE_AD_CONTAINER_ID = 'container-59a6e60e212e575cc54e5697e35dfd6b';
    const NATIVE_AD_SCRIPT =
        'https://pl29818664.effectivecpmnetwork.com/59a6e60e212e575cc54e5697e35dfd6b/invoke.js';

    function loadNativeAd() {
        if (document.getElementById(NATIVE_AD_CONTAINER_ID)) return;

        const section = document.createElement('aside');
        section.className = 'site-ad';
        section.setAttribute('aria-label', 'Advertisement');
        section.innerHTML = `
            <div class="site-ad__label">Advertisement</div>
            <div id="${NATIVE_AD_CONTAINER_ID}"></div>
        `;

        const footer = document.querySelector('footer');
        if (footer) {
            footer.before(section);
        } else {
            document.body.appendChild(section);
        }

        const style = document.createElement('style');
        style.textContent = `
            .site-ad {
                width: min(1180px, calc(100% - 32px));
                min-height: 90px;
                margin: 24px auto;
                overflow: hidden;
                text-align: center;
            }
            .site-ad__label {
                margin-bottom: 8px;
                color: #667085;
                font: 11px/1.4 "Segoe UI", Arial, sans-serif;
                text-transform: uppercase;
            }
            .site-ad iframe,
            .site-ad img {
                max-width: 100%;
            }
            .site-ad:has(#${NATIVE_AD_CONTAINER_ID}:empty) {
                min-height: 0;
            }
        `;
        document.head.appendChild(style);

        const script = document.createElement('script');
        script.async = true;
        script.dataset.cfasync = 'false';
        script.src = NATIVE_AD_SCRIPT;
        section.appendChild(script);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadNativeAd);
    } else {
        loadNativeAd();
    }
})();
