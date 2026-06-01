const siteData = window.scholarshipKartData;

function renderFeatureCards() {
  const featureRoot = document.getElementById("featureCards");
  if (!featureRoot) return;
  featureRoot.innerHTML = siteData.heroFeatures.map(card => `
    <article class="feature-card">
      <img src="${card.image}" alt="${card.title}" loading="lazy" decoding="async">
      <span>${card.title}</span>
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
      <a href="${service.link}" class="link-arrow">${service.buttonText} <i class="bi bi-arrow-right"></i></a>
    `;

    if (image) {
      image.src = service.image;
      image.alt = service.imageAlt;
    }
  }

  function setService(index, immediate = false) {
    const service = siteData.services[index];
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

  menu.innerHTML = siteData.services.map((service, index) => `
    <button class="service-tab-art ${index === 0 ? "active" : ""}" type="button" role="tab" aria-selected="${index === 0}" data-service="${index}">${service.title}</button>
  `).join("");

  menu.addEventListener("click", event => {
    const button = event.target.closest(".service-tab-art");
    if (button && button.classList.contains("active")) return;
    if (button) setService(Number(button.dataset.service));
  });

  setService(0, true);
}

function renderProgrammeCards() {
  const programmeRoot = document.getElementById("programmeCards");
  if (!programmeRoot) return;
  programmeRoot.innerHTML = siteData.programmes.map(programme => `
    <article class="programme-card ${programme.imageFirst ? "programme-card-image-first" : ""}">
      <div class="programme-copy">
        <img class="programme-icon" src="${programme.icon}" alt="" loading="lazy" decoding="async">
        <h3>${programme.title}</h3>
        <p>${programme.description}</p>
      </div>
      <img class="programme-photo" src="${programme.image}" alt="${programme.imageAlt}" loading="lazy" decoding="async">
    </article>
  `).join("");
}

function renderWhatCards() {
  const whatRoot = document.getElementById("whatCards");
  if (!whatRoot) return;
  whatRoot.innerHTML = siteData.whatWeDo.map(item => `
    <div class="col-lg-3 col-md-6">
      <article class="what-card">
        <img class="what-card-icon" src="${item.icon}" alt="" loading="lazy" decoding="async">
        <h3>${item.title}</h3>
        <p>${siteData.whatWeDoDescription}</p>
        <a href="#contact" class="link-arrow what-link-arrow" aria-label="Learn more about ${item.title}">
          <img src="./assets/icons/what-arrow.png" alt="" loading="lazy" decoding="async">
        </a>
      </article>
    </div>
  `).join("");
}

function renderDestinations() {
  const track = document.getElementById("destinationTrack");
  if (!track) return;
  track.innerHTML = siteData.destinations.map(destination => `
    <div class="swiper-slide">
      <article class="destination-card">
        <img src="${destination.image}" alt="${destination.imageAlt}" loading="lazy" decoding="async">
        <span class="flag-badge"><img src="${destination.flag}" alt="" loading="lazy" decoding="async"></span>
        <h3>${destination.title}</h3>
      </article>
    </div>
  `).join("");
}

function renderAboutScholarship() {
  const root = document.getElementById("aboutScholarship");
  const about = siteData.aboutScholarship;
  if (!root) return;
  root.innerHTML = `
    <article class="content-showcase content-showcase-about">
      <div class="content-card">
        <h2>${about.title}</h2>
        <p>${about.description}</p>
        <ul>
          ${about.bullets.map(item => `<li>${item}</li>`).join("")}
        </ul>
        <a class="showcase-cta" href="${about.link}">
          <span>${about.buttonText}</span>
          <img src="./assets/icons/cta-arrow.png" alt="" loading="lazy" decoding="async">
        </a>
      </div>
      <figure class="showcase-media">
        <img src="${about.image}" alt="${about.imageAlt}" loading="lazy" decoding="async">
      </figure>
    </article>
  `;
}

function renderPartners() {
  if (!document.getElementById("partnersTop") || !document.getElementById("partnersBottom")) return;
  const logos = siteData.partners.map(partner => `
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

function renderWhyChooseUs() {
  const root = document.getElementById("whyChooseUs");
  const why = siteData.whyChooseUs;
  if (!root) return;
  root.innerHTML = `
    <article class="why-layout">
      <div class="why-copy">
        <h2>${why.title}</h2>
        <p>${why.description}</p>
        <div class="why-feature-grid">
          ${why.features.map(feature => `
            <article class="feature-item-card">
              <img src="${feature.icon}" alt="" loading="lazy" decoding="async">
              <h3>${feature.title}</h3>
              <p>${feature.description}</p>
            </article>
          `).join("")}
        </div>
      </div>
      <figure class="why-media">
        <img src="${why.image}" alt="${why.imageAlt}" loading="lazy" decoding="async">
      </figure>
    </article>
  `;
}

function renderTestimonials() {
  const track = document.getElementById("testimonialTrack");
  const dots = document.getElementById("testimonialDots");
  if (!track || !window.Swiper) return;
  const sliderItems = [...siteData.testimonials, ...siteData.testimonials];

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
    dots.innerHTML = siteData.testimonials.map((_, index) => `
      <button class="testimonial-dot ${index === 0 ? "active" : ""}" type="button" aria-label="Show testimonial ${index + 1}" data-testimonial-dot="${index}"></button>
    `).join("");
  }

  const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 12,
    loop: true,
    loopAdditionalSlides: siteData.testimonials.length,
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
      dot.classList.toggle("active", index === testimonialSwiper.realIndex % siteData.testimonials.length);
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

function initDestinationSlider() {
  if (!document.querySelector(".destinationSwiper") || !window.Swiper) return;
  new Swiper(".destinationSwiper", {
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
        slidesPerView: 2,
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
  renderProgrammeCards();
  renderWhatCards();
  renderDestinations();
  renderAboutScholarship();
  renderPartners();
  renderWhyChooseUs();
  renderTestimonials();
  initDestinationSlider();
  initScrollAnimations();
  initStaticForms();
});
