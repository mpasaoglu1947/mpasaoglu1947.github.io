/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
              const sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
              if (!sectionsClass) return;        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});


document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});


// ---- GA4 page views for hash-based navigation ----
(function () {
  function sendPageView() {
    if (!window.gtag) return;
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: location.pathname + location.search + location.hash
    });
  }

  // initial load
  sendPageView();

  // when user navigates between sections (#home, #about, ...)
  window.addEventListener('hashchange', sendPageView);

  // (optional) track language switch clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.gtag) gtag('event', 'language_change', { lang: btn.dataset.lang });
    });
  });
})();

// --- Consent + GA4 lazy loader ---
(function(){
  const KEY = 'ga_consent';            // 'granted' | 'denied'
  const banner = document.getElementById('consent-banner');
  const acceptBtn = document.getElementById('consent-accept');
  const declineBtn = document.getElementById('consent-decline');

  function loadGA(){
    if (window.GA_LOADED || !window.GA_MEASUREMENT_ID) return;
    // queue
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', window.GA_MEASUREMENT_ID, { send_page_view: false });

    // script
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + window.GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    window.GA_LOADED = true;

    // send initial page_view once loaded (we also guard for immediate availability)
    const sendPV = () => {
      if (!window.gtag) return;
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: location.href,
        page_path: location.pathname + location.search + location.hash
      });
    };
    // try now and again after a tick
    sendPV(); setTimeout(sendPV, 600);
  }

  function hideBanner(){ banner && banner.classList.remove('show'); }
  function showBanner(){ banner && banner.classList.add('show'); }

  const saved = localStorage.getItem(KEY);
  if (saved === 'granted'){ loadGA(); }
  else if (saved !== 'denied'){ showBanner(); }

  acceptBtn && acceptBtn.addEventListener('click', ()=>{
    localStorage.setItem(KEY, 'granted');
    hideBanner(); loadGA();
  });

  declineBtn && declineBtn.addEventListener('click', ()=>{
    localStorage.setItem(KEY, 'denied');
    hideBanner(); // GA not loaded
  });

  // If you already have hashchange tracking elsewhere, it will kick in after GA loads.
})();



sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


