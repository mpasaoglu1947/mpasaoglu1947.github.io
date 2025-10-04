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

// ---- Global opt-in: load GA only after Accept ----
(function () {
  const KEY = 'ga_consent';                         // 'granted' | 'denied'
  const banner  = document.getElementById('consent-banner');
  const accept  = document.getElementById('consent-accept');
  const decline = document.getElementById('consent-decline');

  function show(){ banner?.classList.add('show'); }
  function hide(){ banner?.classList.remove('show'); }

  function sendPV(){
    if (!window.gtag) return;
    gtag('event','page_view',{
      page_title: document.title,
      page_location: location.href,
      page_path: location.pathname + location.search + location.hash
    });
  }

  function loadGA(){
    if (window.GA_LOADED || !window.GA_MEASUREMENT_ID) return;
    // Load GA library now
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + window.GA_MEASUREMENT_ID;
    document.head.appendChild(s);

    gtag('js', new Date());
    // we control page_view manually (hash navigation)
    gtag('config', window.GA_MEASUREMENT_ID, { send_page_view: false });

    window.GA_LOADED = true;
    // initial page view after lib is ready
    setTimeout(sendPV, 600);
  }

  // Persisted choice?
  const saved = localStorage.getItem(KEY);
  if (saved === 'granted') {
    // user accepted previously
    gtag('consent','update',{ analytics_storage:'granted',
                              ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied' });
    loadGA();
  } else if (saved === 'denied') {
    // user declined previously — keep denied, never load GA
    gtag('consent','update',{ analytics_storage:'denied',
                              ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied' });
  } else {
    // no decision yet → show banner
    show();
  }

  accept?.addEventListener('click', ()=>{
    localStorage.setItem(KEY,'granted');
    hide();
    gtag('consent','update',{ analytics_storage:'granted',
                              ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied' });
    loadGA();
  });

  decline?.addEventListener('click', ()=>{
    localStorage.setItem(KEY,'denied');
    hide();
    gtag('consent','update',{ analytics_storage:'denied',
                              ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied' });
    // do not load GA
  });

  // Count section changes (only works after GA loads)
  window.addEventListener('hashchange', sendPV);
})();




sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



