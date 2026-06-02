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
      <a href="${service.link}" class="link-arrow">${service.buttonText} <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
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
        <img src="${destination.image}" alt="${destination.imageAlt}" decoding="async">
        <span class="flag-badge"><img src="${destination.flag}" alt="${destination.title} flag" decoding="async"></span>
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
    <div class="partner-logo" aria-label="${partner.name}">
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
  const title = document.getElementById("testimonialSectionTitle");
  const subtitle = document.getElementById("testimonialSectionSubtitle");
  if (!track || !window.Swiper) return;

  if (title && siteData.testimonialSection?.title) title.textContent = siteData.testimonialSection.title;
  if (subtitle && siteData.testimonialSection?.subtitle) subtitle.textContent = siteData.testimonialSection.subtitle;

  track.innerHTML = siteData.testimonials.map((item, index) => {
    const shortText = item.shortText || [item.role, item.review ? `(${item.review}` : ""].filter(Boolean).join(" ");
    const moreText = item.moreText || item.fullReview || "";
    return `
    <div class="swiper-slide">
      <div class="testi-card">
        <div class="card-top">
          <h6>${item.university}</h6>
          <div class="stars" aria-label="5 stars">
            ${'<img src="images/Star.png" alt="Star">'.repeat(5)}
          </div>
        </div>
        <div class="profile-img-wrapper">
          <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async">
        </div>
        <div class="card-bottom">
          <h5>${item.name}</h5>
          <p class="review">${shortText}</p>
          ${moreText ? `<p class="moretext review"> ${moreText}</p><a class="moreless-button" href="#" data-testimonial-index="${index}">Read more</a>` : ""}
        </div>
      </div>
    </div>
  `;
  }).join("");

  new Swiper(".mySwiper", {
    spaceBetween: 15,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true
      },
      576: {
        slidesPerView: 2.2,
        spaceBetween: 20,
        centeredSlides: true
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15
      }
    }
  });
}

function initTestimonialPopup() {
  const popup = document.querySelector(".testimonial-popup");
  const dialog = document.querySelector(".testimonial-dialog");
  const body = document.querySelector(".testimonial-popup-body");
  if (!popup || !dialog || !body) return;

  function closePopup() {
    popup.hidden = true;
    dialog.removeAttribute("open");
    document.body.classList.remove("popup-open");
  }

  document.addEventListener("click", event => {
    const button = event.target.closest(".testimonial-read-more, .moreless-button");
    if (!button) return;
    event.preventDefault();
    const item = siteData.testimonials[Number(button.dataset.testimonialIndex)];
    const shortText = item.shortText || [item.role, item.review ? `(${item.review}` : ""].filter(Boolean).join(" ");
    const moreText = item.moreText || item.fullReview || "";
    body.innerHTML = `
      <div class="popup-flex">
        <img src="${item.image}" class="popup-img" alt="${item.name}">
        <div class="popup-right">
          <h4>${item.name}</h4>
          <p class="popup-title"><strong>${item.university}</strong></p>
          <div class="popup-stars" aria-label="5 stars">${"<span>&#9733;</span>".repeat(5)}</div>
          <p class="popup-text">${shortText} ${moreText}</p>
        </div>
      </div>
    `;
    popup.hidden = false;
    dialog.setAttribute("open", "");
    document.body.classList.add("popup-open");
  });

  popup.querySelectorAll(".testimonial-popup-overlay, .testimonial-popup-close").forEach(element => {
    element.addEventListener("click", closePopup);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !popup.hidden) closePopup();
  });
}

function initDestinationSlider() {
  if (!document.querySelector(".destinationSwiper") || !window.Swiper) return;
  if (window.matchMedia("(max-width: 767px)").matches) return;
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
      form.reset();
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
  initTestimonialPopup();
  initDestinationSlider();
  initScrollAnimations();
  initStaticForms();
});
