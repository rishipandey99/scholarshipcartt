const scholarshipKartData = {
  heroFeatures: [
    { image: "./assets/icons/hero-feature-counsellors.png", title: "British Council Certified Counsellors" },
    { image: "./assets/icons/hero-feature-visa.png", title: "High Visa Success Commitment" },
    { image: "./assets/icons/hero-feature-network.png", title: "Global University Network" }
  ],
  services: [
    {
      title: "Planning Stage",
      icon: "bi-chat-square-text-fill",
      description: "ScholarshipKart is an IT-enabled education consultancy focused on helping students plan their international education with accurate, real-time information on universities.",
      image: "./assets/images/services-students-campus.png",
      imageAlt: "Students walking on campus",
      buttonText: "Learn More",
      link: "#contact"
    },
    {
      title: "Application Stage",
      icon: "bi-file-earmark-text-fill",
      description: "Get expert shortlisting, application review, SOP guidance, document preparation, and submission support for leading global universities.",
      image: "./assets/images/services-students-campus.png",
      imageAlt: "Students walking on campus",
      buttonText: "Learn More",
      link: "#contact"
    },
    {
      title: "Execution Stage",
      icon: "bi-airplane-engines-fill",
      description: "Complete your admissions journey with offer support, visa guidance, scholarship help, accommodation planning, and pre-departure readiness.",
      image: "./assets/images/services-students-campus.png",
      imageAlt: "Students walking on campus",
      buttonText: "Learn More",
      link: "#contact"
    }
  ],
  programmes: [
    {
      title: "Foundation",
      description: "Playing With Numbers As A Part Of The Daily Work Is Not As Easy As It May Seem...",
      icon: "./assets/icons/programme-foundation.png",
      image: "./assets/images/programme-foundation.png",
      imageAlt: "Students reviewing foundation course documents"
    },
    {
      title: "Undergraduate",
      description: "Playing With Numbers As A Part Of The Daily Work Is Not As Easy As It May Seem...",
      icon: "./assets/icons/programme-undergraduate.png",
      image: "./assets/images/programme-undergraduate.png",
      imageAlt: "Students studying undergraduate programme options",
      imageFirst: true
    },
    {
      title: "Postgraduate",
      description: "Playing With Numbers As A Part Of The Daily Work Is Not As Easy As It May Seem...",
      icon: "./assets/icons/programme-postgraduate.png",
      image: "./assets/images/programme-postgraduate.png",
      imageAlt: "Student writing while preparing for postgraduate study"
    }
  ],
  whatWeDo: [
    { icon: "./assets/icons/what-counselling.png", title: "Counselling" },
    { icon: "./assets/icons/what-admission.png", title: "Admission" },
    { icon: "./assets/icons/what-visa.png", title: "Visa" },
    { icon: "./assets/icons/what-scholarships.png", title: "Scholarships" }
  ],
  whatWeDoDescription: "ScholarshipKart is an IT-enabled education consultancy focused on helping students plan their international education with accurate, real-time information on universities.",
  destinations: [
    { title: "Study in UK", image: "./assets/images/uk.png", flag: "./assets/images/flag-uk.svg", imageAlt: "UK study destination" },
    { title: "Study in Canada", image: "./assets/images/canada.png", flag: "./assets/images/flag-canada.svg", imageAlt: "Canada study destination" },
    { title: "Study in Australia", image: "./assets/images/australia.png", flag: "./assets/images/flag-australia.svg", imageAlt: "Australia study destination" },
    { title: "Study in Ireland", image: "./assets/images/ireland.png", flag: "./assets/images/flag-ireland.svg", imageAlt: "Ireland study destination" },
    { title: "Study in USA", image: "./assets/images/usa.png", flag: "./assets/images/flag-usa.svg", imageAlt: "USA study destination" }
  ],
  aboutScholarship: {
    title: "About Scholarship",
    description: "For international students aspiring to study in the UK, a foundation course is often the first step toward gaining admission to a UK university. These courses are designed to bridge the gap between education systems.",
    bullets: [
      "Save Lakhs with Scholarships",
      "Financial planning support",
      "Education loan guidance"
    ],
    image: "./assets/images/about-scholarship-students.png",
    imageAlt: "Students writing scholarship exams",
    buttonText: "READ MORE",
    link: "#contact"
  },
  partners: [
    { name: "Travel", className: "logo-travel" },
    { name: "Octane", className: "logo-octane", sub: "FITNESS" },
    { name: "LifeFitness", className: "logo-life", sub: "interactive fitness solutions" },
    { name: "Smile", className: "logo-smile" },
    { name: "TRUE", className: "logo-true" },
    { name: "CYBEX", className: "logo-cybex" },
    { name: "Mockup", className: "logo-mockup" },
    { name: "PRECOR", className: "logo-precor" }
  ],
  whyChooseUs: {
    title: "Why Choose Us",
    description: "The United Kingdom is one of the world's top destinations for higher education, offering a wide range of undergraduate degrees across various disciplines with globally recognised standards.",
    image: "./assets/images/why-choose-us-students.png",
    imageAlt: "International students celebrating on campus",
    features: [
      {
        title: "Personalized 1:1 counselling",
        description: "Get guidance tailored to your goals, profile, budget, and preferred destination.",
        icon: "./assets/icons/feature-personalized.png"
      },
      {
        title: "Strong university tie-ups",
        description: "Access a broad university network with support for course and campus matching.",
        icon: "./assets/icons/feature-tieups.png"
      },
      {
        title: "End-to-end support",
        description: "Move from planning to applications, visa, accommodation, and pre-departure with one team.",
        icon: "./assets/icons/feature-support.png"
      },
      {
        title: "In-house IELTS coaching",
        description: "Prepare with focused language support designed around your admission timeline.",
        icon: "./assets/icons/feature-ielts.png"
      },
      {
        title: "Scholarship access",
        description: "Find relevant scholarships and funding options before finalising your study plan.",
        icon: "./assets/icons/feature-scholarship.png"
      }
    ]
  },
  testimonialSection: {
    title: "Students Trust Us",
    subtitle: "Trained by the globally recognised universities to help students secure admissions faster."
  },
  // To edit this section later, add/remove/change testimonial objects below.
  // Required fields: university, image, name, shortText. Optional field: moreText.
  testimonials: [
    {
      university: "University of Birmingham",
      image: "./images/nimit.png",
      name: "Nimit Patel",
      shortText: "Dubai -university of birmingham -msc Acc and Finance ( I am truly grateful to Sunita",
      moreText: "Ma'am for her constant support and guidance throughout my master's application process. From the very beginning, she explained every step clearly and helped me prepare strong applications. She was always approachable, patient, and professional, answering all my questions with care. Thanks to her dedicated efforts I successfully secured admission for my Master's in Dubai. I highly recommend Sunita Ma'am to anyone looking for expert guidance in their higher education journey.)"
    },
    {
      university: "University Of Strathclyde",
      image: "./images/Kashmira_Strath.png",
      name: "Kashmira Patil",
      shortText: "University Of Strathclyde -UK - MSc Advanced Construction Technologies and BIM",
      moreText: ""
    },
    {
      university: "Uni of Nottingham",
      image: "./images/testimonial-img.jpg",
      name: "Kejal Manoj Pardeshi",
      shortText: "Uni of Nottingham -UK - MSc Sports and Exercise Medicine  ( I have had a lovely",
      moreText: "experience with scholarshipkart and sunita ma'am. She is amazing at what she does and will guide you through this process and make it as smooth for you as possible. With clear information from the beginning and regular updates about the process I cannot thank her enough for her support throughout.)"
    },
    {
      university: "SKema Business school",
      image: "./images/testimonial-img.jpg",
      name: "Mishka Tillu",
      shortText: "SKema Business school -France - Msc International Marketing and Business Development",
      moreText: ""
    },
    {
      university: "MET Film School",
      image: "./images/testimonial-img.jpg",
      name: "Ameya Gill",
      shortText: "MET Film School - BA Film -cant get her photo -she is high profile bollywood family gal",
      moreText: ""
    }
  ]
};

window.scholarshipKartData = scholarshipKartData;
