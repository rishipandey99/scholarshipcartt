const featureCards = [
  { image: "./assets/images/figma/Group 1000001827 (2).png", title: "British Council Certified Counsellors" },
  { image: "./assets/images/figma/Group 1000001827.png", title: "High Visa Success Commitment" },
  { image: "./assets/images/figma/Group 1000001827 (1).png", title: "Global University Network" }
];

const services = [
  {
    title: "Planning Stage",
    icon: "bi-chat-square-text-fill",
    description: "ScholarshipKart is an IT-enabled education consultancy focused on helping students plan their international education with accurate, real-time information on universities.",
    image: "./assets/images/figma/Group 1321314081.png",
    imageAlt: "Students walking on campus"
  },
  {
    title: "Application Stage",
    icon: "bi-file-earmark-text-fill",
    description: "Get expert shortlisting, application review, SOP guidance, document preparation, and submission support for leading global universities.",
    image: "./assets/images/figma/Group 1321314081.png",
    imageAlt: "Students walking on campus"
  },
  {
    title: "Execution Stage",
    icon: "bi-airplane-engines-fill",
    description: "Complete your admissions journey with offer support, visa guidance, scholarship help, accommodation planning, and pre-departure readiness.",
    image: "./assets/images/figma/Group 1321314081.png",
    imageAlt: "Students walking on campus"
  }
];

const whatWeDo = [
  { icon: "bi-chat-square-text-fill", title: "Counselling" },
  { icon: "bi-file-earmark-text-fill", title: "Admission" },
  { icon: "bi-passport-fill", title: "Visa" },
  { icon: "bi-mortarboard-fill", title: "Scholarships" }
];

const partners = [
  { name: "Travel", className: "logo-travel" },
  { name: "Octane", className: "logo-octane", sub: "FITNESS" },
  { name: "LifeFitness", className: "logo-life", sub: "interactive fitness solutions" },
  { name: "Smile", className: "logo-smile" },
  { name: "TRUE", className: "logo-true" },
  { name: "CYBEX", className: "logo-cybex" },
  { name: "Mockup", className: "logo-mockup" },
  { name: "PRECOR", className: "logo-precor" }
];

const testimonials = [
  {
    university: "University name",
    image: "./assets/images/student-testimonial.png",
    name: "Dazzle Healer",
    role: "Front End Developer",
    review: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing."
  },
  {
    university: "University name",
    image: "./assets/images/student-testimonial.png",
    name: "Dazzle Healer",
    role: "Front End Developer",
    review: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing."
  },
  {
    university: "University name",
    image: "./assets/images/student-testimonial.png",
    name: "Dazzle Healer",
    role: "Front End Developer",
    review: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing."
  },
  {
    university: "University name",
    image: "./assets/images/student-testimonial.png",
    name: "Dazzle Healer",
    role: "Front End Developer",
    review: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing."
  },
  {
    university: "University name",
    image: "./assets/images/student-testimonial.png",
    name: "Dazzle Healer",
    role: "Front End Developer",
    review: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing."
  }
];

function renderFeatureCards() {
  const featureRoot = document.getElementById("featureCards");
  if (!featureRoot) return;
  featureRoot.innerHTML = featureCards.map(card => `
    <article class="feature-card">
      <img src="${card.image}" alt="${card.title}" loading="lazy" decoding="async">
    </article>
  `).join("");
}

function renderServices() {
  const menu = document.getElementById("serviceMenu");
  const detail = document.getElementById("serviceDetail");
  const image = document.getElementById("serviceImage");
  if (!menu || !detail) return;

  function updateServiceContent(service) {
    detail.innerHTML = `
      <i class="bi ${service.icon}" aria-hidden="true"></i>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <a href="#contact" class="link-arrow">Learn More <i class="bi bi-arrow-right"></i></a>
    `;

    if (image) {
      image.src = service.image;
      image.alt = service.imageAlt;
    }
  }

  function setService(index, immediate = false) {
    const service = services[index];
    menu.querySelectorAll(".service-tab-art").forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
      button.setAttribute("aria-selected", String(buttonIndex === index));
    });

    if (immediate) {
      updateServiceContent(service);
      return;
    }

    detail.classList.add("is-changing");
    if (image) image.classList.add("is-changing");

    window.setTimeout(() => {
      updateServiceContent(service);
      detail.classList.remove("is-changing");
      if (image) image.classList.remove("is-changing");
    }, 180);
  }

  menu.innerHTML = services.map((service, index) => `
    <button class="service-tab-art ${index === 0 ? "active" : ""}" type="button" role="tab" aria-selected="${index === 0}" data-service="${index}">${service.title}</button>
  `).join("");

  menu.addEventListener("click", event => {
    const button = event.target.closest(".service-tab-art");
    if (button && button.classList.contains("active")) return;
    if (button) setService(Number(button.dataset.service));
  });

  setService(0, true);
}

function renderWhatCards() {
  const whatRoot = document.getElementById("whatCards");
  if (!whatRoot) return;
  whatRoot.innerHTML = whatWeDo.map(item => `
    <div class="col-lg-3 col-md-6">
      <article class="what-card">
        <i class="bi ${item.icon}" aria-hidden="true"></i>
        <h3>${item.title}</h3>
        <p>ScholarshipKart is an IT-enabled education consultancy focused on helping students plan their international education with accurate, real-time information on universities.</p>
        <a href="#contact" class="link-arrow what-link-arrow" aria-label="Learn more about ${item.title}">
          <img src="./assets/images/figma/Group 1000001838.png" alt="" loading="lazy" decoding="async">
        </a>
      </article>
    </div>
  `).join("");
}

function renderPartners() {
  if (!document.getElementById("partnersTop") || !document.getElementById("partnersBottom")) return;
  const logos = partners.map(partner => `
    <div class="partner-logo">
      <span class="logo-badge ${partner.className}">
        ${partner.name}
        ${partner.sub ? `<span class="logo-sub">${partner.sub}</span>` : ""}
      </span>
    </div>
  `).join("");
  const markup = `<div class="partner-set">${logos}</div><div class="partner-set">${logos}</div>`;

  document.getElementById("partnersTop").innerHTML = markup;
  document.getElementById("partnersBottom").innerHTML = markup;
}

function renderTestimonials() {
  const track = document.getElementById("testimonialTrack");
  const dots = document.getElementById("testimonialDots");
  if (!track || !window.Swiper) return;
  const sliderItems = [...testimonials, ...testimonials];

  track.innerHTML = sliderItems.map(item => `
    <div class="swiper-slide">
      <article class="testimonial-card">
        <div class="testimonial-top">
          <h3>${item.university}</h3>
          <div class="stars" aria-label="5 stars">${"<span>&#9733;</span>".repeat(5)}</div>
          <svg class="testimonial-wave" viewBox="0 0 316 56" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 31C67 46 125 51 184 46C232 42 276 35 316 27V56H0V31Z"></path>
          </svg>
          <span class="student-photo-wrap">
            <img class="student-photo" src="${item.image}" alt="${item.name}" loading="lazy" decoding="async">
          </span>
        </div>
        <div class="testimonial-body">
          <h4>${item.name}</h4>
          <span class="testimonial-role">${item.role}</span>
          <p>${item.review}</p>
        </div>
      </article>
    </div>
  `).join("");

  if (dots) {
    dots.innerHTML = testimonials.map((_, index) => `
      <button class="testimonial-dot ${index === 0 ? "active" : ""}" type="button" aria-label="Show testimonial ${index + 1}" data-testimonial-dot="${index}"></button>
    `).join("");
  }

  const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 12,
    loop: true,
    loopAdditionalSlides: testimonials.length,
    speed: 650,
    grabCursor: true,
    watchOverflow: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 12,
      }
    }
  });

  function setActiveDot() {
    dots?.querySelectorAll(".testimonial-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === testimonialSwiper.realIndex % testimonials.length);
    });
  }

  dots?.addEventListener("click", event => {
    const dot = event.target.closest(".testimonial-dot");
    if (!dot) return;
    testimonialSwiper.slideToLoop(Number(dot.dataset.testimonialDot));
  });

  testimonialSwiper.on("slideChange", setActiveDot);
  setActiveDot();
}

function initScrollAnimations() {
  const animatedItems = document.querySelectorAll(".fade-on-scroll");
  if (!animatedItems.length) return;

  if (!("IntersectionObserver" in window)) {
    animatedItems.forEach(item => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  animatedItems.forEach(item => observer.observe(item));
}

function initStaticForms() {
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeatureCards();
  renderServices();
  renderWhatCards();

  renderPartners();
  renderTestimonials();
  initScrollAnimations();
  initStaticForms();
});
if (document.querySelector(".destinationSwiper") && window.Swiper) {
  const swiper = new Swiper(".destinationSwiper", {
    slidesPerView: 4.2,
    spaceBetween: 8,
    loop: true,
    slideToClickedSlide: true,
    speed: 700,

    autoplay: {
      delay: 2600,
    },

    navigation: {
      nextEl: ".destination-next",
      prevEl: ".destination-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1.2, 
      },
      576: {
        slidesPerView:2, 
      },
      768: {
        slidesPerView: 2.5, 
      },
      992: {
        slidesPerView: 4.2, 
      },
      1200: {
        slidesPerView: 4.2,
      }
    }
  });
}
