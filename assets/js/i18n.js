const I18N = {
  en: {
    /* nav + sections */
    "nav.home":"Home","nav.about":"About","nav.skills":"Skills","nav.pubs":"Publications","nav.project":"Projects","nav.contact":"Contact",
    "section.about":"About","section.skills":"Skills","section.pubs":"Publications","section.projects":"Projects","section.contact":"Contact",

    /* home */
    "home.hello":"Hello,","home.ben":"I'm ","home.role1":"Computer Engineer","home.role2":"AI & Computer Vision Researcher",

    /* about */
    "about.subtitle":"I'm Muhammet",
    "about.text":"I am Muhammet Paşaoğlu, a researcher in Computer Engineering specializing in computer vision, deep learning, and artificial intelligence. My academic journey bridges theory and application, with a strong focus on stylization, face recognition, and generative AI.",

    /* skills */
    "skills.subtitle":"Research & Technical Skills",
    "footer.rights":"All rights reserved",
    "skills.text":"I work across computer vision, artificial intelligence, and deep learning. My core strengths include building and evaluating recognition systems, developing generative models, and applying game theory to machine learning.",

    /* projects (work cards) */
    "work.styl.title":"Stylization & Face Recognition",
    "work.styl.desc":"Introduced <strong>Automatic Partial Stylization (APS)</strong>—selectively stylizes regions to test robustness, showing even partial stylization can fool SOTA face networks.",
    "work.edges.title":"Semi-Supervised Edge Optimizer",
    "work.edges.desc":"Fusing RGB & depth cues to generate a semi-supervised edge detection module.",
    "work.recsys.title":"Optimizing Recommendation Systems",
    "work.recsys.desc":"Fusion of KNN, SVD, and XGBoost for enhanced recommendation performance.",
    "work.midas.title":"Panoramic Image Stitching",
    "work.midas.desc":"Using MiDaS depth maps to build seamless panoramic reconstructions.",
    "work.hairless.title":"Hairless Image Preprocessing for Accurate Skin Lesion Detection and Segmentation",
    "work.hairless.desc":"Preprocessing pipeline removing hair artifacts in dermoscopy to boost lesion segmentation & classification accuracy.",
    "work.gan.title":"A Hybrid Conditional GAN Design for Image-to-Image",
    "work.gan.desc":"Combining U-Net and ResNet for robust image-to-image translation.",

    /* publications badges */
    "pubs.under_review":"Under Review",
    "pubs.accepted":"Accepted",
    "pubs.inpub":"In Publication Phase",
    "pubs.conf":"Conference",

    /* contact buttons */
    "contact.email":"Email","contact.linkedin":"LinkedIn","contact.orcid":"ORCID","contact.github":"GitHub"
  },

  tr: {
    /* nav + sections */
    "nav.home":"Ana Sayfa","nav.about":"Hakkımda","nav.skills":"Yetenekler","nav.pubs":"Yayınlar","nav.project":"Projeler","nav.contact":"İletişim",
    "section.about":"Hakkımda","section.skills":"Yetenekler","section.pubs":"Yayınlar","section.projects":"Projeler","section.contact":"İletişim",

    /* home */
    "home.hello":"Merhaba,","home.ben":"Ben ","home.role1":"Bilgisayar Mühendisi","home.role2":"Yapay Zekâ & Bilgisayarlı Görüş Araştırmacısı",

    /* about */
    "about.subtitle":"Ben Muhammet",
    "about.text":"Ben Muhammet Paşaoğlu. Bilgisayar mühendisliği alanında; bilgisayarlı görme, derin öğrenme ve yapay zekâ konularında çalışıyorum. Araştırmalarım stilizasyon, yüz tanıma ve üretken yapay zekâ odağında; kuram ile uygulamayı birleştirmeyi hedefler.",

    /* skills */
    "skills.subtitle":"Araştırma ve Teknik Yetenekler",
    "skills.text":"Bilgisayarlı görme, yapay zekâ ve derin öğrenme alanlarında çalışıyorum. Güçlü yanlarım; tanıma sistemleri geliştirme/değerlendirme, üretken modeller tasarlama ve oyun teorisini makine öğrenmesine uygulamadır.",

    /* projects (work cards) */
    "work.styl.title":"Stilizasyon & Yüz Tanıma",
    "work.styl.desc":"Dayanıklılığı ölçmek için bölgeleri seçerek stilize eden <strong>Otomatik Kısmi Stilizasyon (APS)</strong> yöntemini sunduk; kısmi stilizasyonun bile SOTA ağları yanıltabildiğini gösterdik.",
    "work.edges.title":"Yarı Denetimli Kenar İyileştirici",
    "work.edges.desc":"RGB ve derinlik ipuçlarını birleştirerek yarı denetimli kenar tespiti modülü.",
    "work.recsys.title":"Öneri Sistemlerinin Optimizasyonu",
    "work.recsys.desc":"KNN, SVD ve XGBoost birleşimiyle daha yüksek öneri performansı.",
    "work.midas.title":"Panoramik Görüntü Birleştirme",
    "work.midas.desc":"MiDaS derinlik haritalarıyla kesintisiz panorama üretimi.",
    "work.hairless.title":"Doğru Cilt Lezyonu Tespiti ve Segmentasyonu için Tüylerden Arındırılmış Görüntü Ön İşleme",
    "work.hairless.desc":"Dermatoskopi görüntülerindeki kıl artefaktlarını temizleyerek leke segmentasyonu ve sınıflandırmasını iyileştirir.",
    "work.gan.title":"A Hybrid Conditional GAN Design for Image-to-Image",
    "work.gan.desc":"U-Net ve ResNet birleşimiyle sağlam görüntüden-görüntüye dönüştürme.",

    /* publications badges */
    "pubs.under_review":"Değerlendirmede",
    "pubs.accepted":"Kabul Edildi",
    "pubs.inpub":"Yayın sürecinde",
    "pubs.conf":"Konferans",

    "footer.rights":"Tüm hakları saklıdır",

    /* contact buttons */
    "contact.email":"E-posta","contact.linkedin":"LinkedIn","contact.orcid":"ORCID","contact.github":"GitHub"
  }
};

function setLang(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.addEventListener('click', ()=> setLang(b.dataset.lang));
  });
});
