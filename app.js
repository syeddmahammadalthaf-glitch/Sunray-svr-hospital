/**
 * Sunray Hospital (SVR NEURO & NEPHRO CARE) - Application Logic
 * Interactive SPA matching the reference demo with enhanced booking, search, and portal previews
 */

// --- DATA STORES ---

const DEPARTMENTS = [
  {
    id: "nephrology",
    name: "Nephrology & Kidney Care",
    code: "NE",
    desc: "Comprehensive kidney care, acute and chronic kidney disease management, diabetic nephropathy, glomerulonephritis, CRRT, and pediatric nephrology.",
    icon: "dialysis.png",
    servicesCount: 12,
    leadDoc: "Dr. M. Surendra Babu"
  },
  {
    id: "hemodialysis",
    name: "Hemodialysis Unit",
    code: "HD",
    desc: "24/7 high-flux computerized hemodialysis, hemodiafiltration (HDF), emergency bedside dialysis, and advanced water treatment plant.",
    icon: "dialysis.png",
    servicesCount: 8,
    leadDoc: "Dr. M. Surendra Babu"
  },
  {
    id: "neurology",
    name: "Neurology & Stroke Care",
    code: "NL",
    desc: "Comprehensive diagnosis and therapy for stroke, epilepsy, migraines, neuropathies, Parkinson's disease, dementia, and neuro-rehabilitation.",
    icon: "neurosurgery.jpg",
    servicesCount: 9,
    leadDoc: "Dr. R. Ram Mohan"
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery & Spine Center",
    code: "NS",
    desc: "Microsurgical brain tumor resection, minimally invasive spine surgery, cranial trauma surgery, and spinal cord decompression.",
    icon: "neurosurgery.jpg",
    servicesCount: 7,
    leadDoc: "Dr. R. Ram Mohan"
  },
  {
    id: "neuro_icu",
    name: "Neuro ICU & Critical Care",
    code: "ICU",
    desc: "Dedicated neuro-intensive care unit with multi-parameter monitoring, invasive intracranial pressure monitoring, and ventilator support.",
    icon: "critical-care.jpg",
    servicesCount: 6,
    leadDoc: "Dr. R. P. Raghavendra Raju"
  },
  {
    id: "general_medicine",
    name: "General Medicine & Diabetology",
    code: "GM",
    desc: "Adult healthcare, comprehensive diabetes and hypertension management, infectious disease treatment, fever clinics, and metabolic care.",
    icon: "general-medicine.jpg",
    servicesCount: 10,
    leadDoc: "Dr. R. P. Raghavendra Raju"
  },
  {
    id: "general_surgery",
    name: "General & Laparoscopic Surgery",
    code: "GS",
    desc: "Minimally invasive laparoscopic cholecystectomy, appendectomy, hernia repair, trauma surgery, and gastrointestinal surgical procedures.",
    icon: "general-surgery.jpg",
    servicesCount: 11,
    leadDoc: "Dr. Ganesh Reddy Illuri"
  },
  {
    id: "urology",
    name: "Urology & Renal Surgery",
    code: "UR",
    desc: "AV fistula creation, kidney stone laser removal (PCNL/URS), prostate laser surgery (TURP), and reconstructive urology.",
    icon: "urolgy.jpg",
    servicesCount: 8,
    leadDoc: "Dr. Bhavani Shankar"
  },
  {
    id: "gynecology",
    name: "Obstetrics & Gynecology",
    code: "OG",
    desc: "Women's wellness, prenatal checkups, high-risk pregnancy care, painless labor support, and laparoscopic gynecological procedures.",
    icon: "gynecology.jpg",
    servicesCount: 9,
    leadDoc: "Dr. G.P Sandhya Reddy"
  },
  {
    id: "emergency",
    name: "24/7 Casualty & Polytrauma",
    code: "ER",
    desc: "Round-the-clock emergency casualty, resuscitation bays, dedicated trauma team, ambulance transfer, and acute poisoning care.",
    icon: "emergency.png",
    servicesCount: 5,
    leadDoc: "Emergency Medical Officers"
  },
  {
    id: "diagnostics",
    name: "Laboratory & Diagnostics",
    code: "LB",
    desc: "24/7 automated clinical biochemistry, arterial blood gas (ABG), renal biopsies, digital X-Ray, ultrasound, and ECG.",
    icon: "lab-us-xray.png",
    servicesCount: 14,
    leadDoc: "Diagnostic Specialists"
  }
];

const DOCTORS = [
  {
    id: "dr-surendra-babu",
    name: "Dr. M. Surendra Babu",
    deptId: "nephrology",
    deptName: "Nephrology & Renal Care",
    qualification: "MBBS, MD, DM (Nephrology, NIMS Hyderabad)",
    designation: "Chief Consultant Nephrologist & Transplant Physician",
    exp: "18+ Years Exp",
    opd: "Mon - Sat: 10:00 AM - 2:00 PM | 5:00 PM - 8:30 PM",
    image: "assets/doctors/dr-m-surendra-babu.jpg",
    description: "Renowned nephrologist in Rayalaseema. Expert in high-flux hemodialysis, peritoneal dialysis, renal transplants, glomerulonephritis, and diabetic kidney management."
  },
  {
    id: "dr-ram-mohan",
    name: "Dr. R. Ram Mohan",
    deptId: "neurology",
    deptName: "Neurosurgery & Spine",
    qualification: "MBBS, MS, M.Ch (Neurosurgery)",
    designation: "Senior Consultant Neurosurgeon & Spine Specialist",
    exp: "16+ Years Exp",
    opd: "Mon - Sat: 11:00 AM - 3:00 PM | 6:00 PM - 8:30 PM",
    image: "assets/doctors/dr-r-ram-mohan.jpg",
    description: "Expert in complex cranial surgeries, stroke intervention, spinal trauma, brain tumors, endoscopic skull base surgery, and comprehensive neuro-rehabilitation."
  },
  {
    id: "dr-ganesh-reddy",
    name: "Dr. Ganesh Reddy Illuri",
    deptId: "general_surgery",
    deptName: "General & Laparoscopic Surgery",
    qualification: "MBBS, M.S (Gen. Surgery), FIAGES",
    designation: "Consultant General & Laparoscopic Surgeon | Asst. Prof. GGH Anantapur",
    exp: "14+ Years Exp",
    opd: "Mon - Sat: 9:00 AM - 1:00 PM | 4:30 PM - 7:30 PM",
    image: "assets/doctors/dr-ganesh-reddy-illuri.jpg",
    description: "Leading laparoscopic surgeon specialized in keyhole surgeries, hernia repair, gallbladder removal, appendectomy, and emergency trauma surgery."
  },
  {
    id: "dr-raghavendra-raju",
    name: "Dr. R. P. Raghavendra Raju",
    deptId: "general_medicine",
    deptName: "General Medicine & Critical Care",
    qualification: "MBBS, MD (General Medicine)",
    designation: "Consultant Physician & Critical Care Specialist",
    exp: "15+ Years Exp",
    opd: "Mon - Sat: 9:30 AM - 2:00 PM | 5:00 PM - 9:00 PM",
    image: "assets/doctors/dr-r-p-raghavendra-raju.jpg",
    description: "Comprehensive adult medical specialist focusing on uncontrolled diabetes, hypertension, infectious diseases, sepsis, and intensive critical care management."
  },
  {
    id: "dr-sandhya-reddy",
    name: "Dr. G.P Sandhya Reddy",
    deptId: "gynecology",
    deptName: "Obstetrics & Gynecology",
    qualification: "MBBS, MS (OBG, Osmania Medical College)",
    designation: "Consultant Obstetrician & Gynecologist",
    exp: "12+ Years Exp",
    opd: "Mon - Sat: 10:00 AM - 2:00 PM | 5:00 PM - 8:00 PM",
    image: "assets/doctors/dr-g-p-sandhya-reddy.jpg",
    description: "Specialist in high-risk pregnancy, painless normal deliveries, laparoscopic hysterectomy, PCOS, infertility workup, and women's preventive health."
  },
  {
    id: "dr-sravanthi-reddy",
    name: "Dr. Sravanthi Nivedhitha Reddy",
    deptId: "general_medicine",
    deptName: "Diabetology & Internal Medicine",
    qualification: "MBBS, MD (General Medicine)",
    designation: "Consultant Diabetologist & General Physician",
    exp: "10+ Years Exp",
    opd: "Mon - Sat: 10:30 AM - 2:30 PM | 4:30 PM - 8:00 PM",
    image: "assets/doctors/dr-sravanthi-nivedhitha-reddy.jpg",
    description: "Focused on diabetic organ protection, renal risk screening in diabetics, thyroid disorders, geriatric health, and lifestyle medicine."
  },
  {
    id: "dr-bhavani-shankar",
    name: "Dr. Bhavani Shankar",
    deptId: "urology",
    deptName: "Urology & Vascular Surgery",
    qualification: "MBBS, MS (General Surgery)",
    designation: "Consultant Laparoscopic Surgeon & AV Fistula Specialist",
    exp: "11+ Years Exp",
    opd: "Mon - Sat: 10:00 AM - 2:00 PM | 5:00 PM - 8:00 PM",
    image: "assets/doctors/dr-bhavani-shankar.jpg",
    description: "Expert in arteriovenous (AV) fistula creation for dialysis patients, vascular access revisions, renal cysts, and minimal access surgery."
  }
];

const SERVICES = [
  {
    no: "01",
    title: "Hemodialysis Unit",
    category: "Nephrology",
    desc: "24/7 modern computerized hemodialysis machines with RO water purification, biocompatible dialyzers, and continuous nephrology supervision.",
    tag: "24/7 Available"
  },
  {
    no: "02",
    title: "Renal Transplant Care",
    category: "Nephrology",
    desc: "Pre-transplant evaluation, donor-recipient compatibility protocols, post-operative immunosuppression monitoring, and graft surveillance.",
    tag: "Specialized"
  },
  {
    no: "03",
    title: "AV Fistula Surgery",
    category: "Vascular Access",
    desc: "Radio-cephalic & brachio-cephalic arteriovenous fistula creations, graft placements, and fistula salvage interventions.",
    tag: "Day Care / Minor OT"
  },
  {
    no: "04",
    title: "Neuro ICU & Stroke Care",
    category: "Neurology",
    desc: "Hyper-acute stroke protocol, clot thrombolysis coordination, mechanical ventilation, cerebral edema management, and continuous EEG monitoring.",
    tag: "Critical Care"
  },
  {
    no: "05",
    title: "Laparoscopic Surgery",
    category: "Surgery",
    desc: "Advanced keyhole surgeries for gall bladder stones, appendicitis, hernias, and abdominal emergencies with minimal scar and quick recovery.",
    tag: "Modular OT"
  },
  {
    no: "06",
    title: "24/7 Emergency & Casualty",
    category: "Emergency",
    desc: "Immediate triage, trauma resuscitation, cardiac monitoring, and dedicated ambulance transfer service across Anantapur.",
    tag: "Open 24 Hours"
  }
];

const REVIEWS = [
  {
    name: "Rajasekhar Reddy M.",
    location: "Anantapur",
    rating: 5,
    date: "2 weeks ago",
    comment: "Dr. M. Surendra Babu is extremely patient and explains every single detail of kidney health thoroughly. My father's creatinine levels stabilized significantly under his guidance. Nursing staff in the dialysis unit is very gentle and courteous."
  },
  {
    name: "K. Ramanjaneyulu",
    location: "Papampeta, Anantapur",
    rating: 5,
    date: "1 month ago",
    comment: "Best neuro and kidney care hospital in Anantapur. After acute stroke symptoms, Dr. Ram Mohan's prompt diagnosis and treatment ensured my uncle made a full recovery. Highly grateful to the doctors and the prompt reception team."
  },
  {
    name: "Lalitha Kumari",
    location: "Bellary Road, Anantapur",
    rating: 5,
    date: "3 weeks ago",
    comment: "Very clean hospital with top-notch dialysis facilities. The doctors take time to answer all questions without rushing. The AV fistula surgery was smoothly done with zero complications. 4.8 rating is truly well deserved."
  }
];

// --- APP STATE ---

const state = {
  currentPage: "Home",
  mobileMenuOpen: false,
  portalRole: "Patient",
  
  // Booking Wizard State
  bookingStep: 1,
  selectedDepartment: "nephrology",
  selectedDoctor: "dr-surendra-babu",
  selectedService: "Specialist OPD Consultation",
  selectedDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
  selectedSlot: "10:30 AM",
  patientName: "",
  patientPhone: "",
  patientAge: "",
  patientCity: "Anantapur",
  patientSymptoms: "",
  confirmedToken: null
};

// --- SVG ICON GENERATOR ---

function getIconSvg(name, size = 20) {
  const base = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  switch (name) {
    case "phone":
      return `<svg ${base}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
    case "location":
      return `<svg ${base}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
    case "calendar":
      return `<svg ${base}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
    case "clock":
      return `<svg ${base}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
    case "heart":
      return `<svg ${base}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    case "shield":
      return `<svg ${base}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`;
    case "users":
      return `<svg ${base}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
    case "arrow":
      return `<svg ${base}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
    case "check":
      return `<svg ${base}><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    case "search":
      return `<svg ${base}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
    case "lock":
      return `<svg ${base}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
    case "menu":
      return `<svg ${base}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    case "close":
      return `<svg ${base}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    case "star":
      return `<svg ${base} fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    default:
      return `<svg ${base}><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}

// --- CORE NAVIGATION ---

function setPage(pageName) {
  state.currentPage = pageName;
  state.mobileMenuOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  renderApp();
}

function showToast(msg) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `${getIconSvg('check', 18)} <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// --- RENDER SECTIONS ---

function renderHeader() {
  const navItems = ["Home", "About", "Departments", "Doctors", "Services", "Appointments", "Reviews", "Contact"];
  
  return `
    <div class="topline">
      <div class="container tiny">
        <a href="https://www.google.com/maps/dir/?api=1&destination=Sunray+Hospital%28SVR+NEURO+%26+NEPHRO+CARE%29" target="_blank" rel="noreferrer">
          ${getIconSvg('location', 15)} Nadivanka Junction, Bellary - Anantapur Rd, Anantapur
        </a>
        <a href="tel:09989517151">
          ${getIconSvg('phone', 15)} 099895 17151
        </a>
        <span class="desktop-only topline-badge">
          ${getIconSvg('clock', 13)} 24/7 Hemodialysis & Emergency | OPD: 9:30 AM - 2:00 PM & 5:00 PM - 8:30 PM
        </span>
      </div>
    </div>
    <div class="container nav">
      <a href="javascript:void(0)" class="brand" onclick="setPage('Home')">
        <img src="assets/images/logo.png" alt="Sunray SVR Hospital" class="brand-logo-img" onerror="this.style.display='none'; document.getElementById('fallback-brandmark').style.display='flex';" />
        <div id="fallback-brandmark" class="brandmark-fallback" style="display:none;">☀</div>
        <div class="brand-tagline">
          <span class="brand-sub">NEURO &amp; NEPHRO CARE</span>
          <span class="brand-loc">ANANTAPUR</span>
        </div>
      </a>

      <button class="hamb" onclick="toggleMobileMenu()" aria-label="Toggle Menu">
        ${getIconSvg(state.mobileMenuOpen ? 'close' : 'menu', 24)}
      </button>

      <nav class="navlinks ${state.mobileMenuOpen ? 'open' : ''}">
        ${navItems.map(item => `
          <button class="${state.currentPage === item ? 'active' : ''}" onclick="setPage('${item}')">
            ${item}
          </button>
        `).join('')}
        <div class="mobile-drawer-actions">
          <button class="login" onclick="setPage('Portal')">
            ${getIconSvg('users', 15)} Portal Login
          </button>
          <button class="primary small" onclick="setPage('Appointments')">
            ${getIconSvg('calendar', 15)} Book Appointment
          </button>
        </div>
      </nav>

      <div class="navactions">
        <button class="login" onclick="setPage('Portal')">
          ${getIconSvg('users', 15)} Portal
        </button>
      </div>
    </div>
  `;
}

function renderHero() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="demo-badge">
            <span></span> ★ 4.8 / 5 RATED HOSPITAL · ANANTAPUR
          </div>
          <p class="eyebrow">SVR NEURO & NEPHRO CARE</p>
          <h1>
            Advanced Kidney &<br />
            <em>Neurological Care.</em>
          </h1>
          <p class="lead">
            Sunray Hospital (SVR Neuro & Nephro Care) is Anantapur's premier multispecialty center at Nadivanka Junction, recognized for high-flux hemodialysis, renal transplant care, neurosurgery, laparoscopic care, and 24/7 emergency medicine.
          </p>
          <div class="hero-buttons">
            <button class="primary" onclick="setPage('Appointments')">
              Book an Appointment ${getIconSvg('arrow', 18)}
            </button>
            <button class="secondary" onclick="setPage('Departments')">
              Explore Departments
            </button>
            <a class="secondary" href="tel:09989517151">
              ${getIconSvg('phone', 18)} Call 099895 17151
            </a>
          </div>
          <div class="trustrow">
            <div>
              ${getIconSvg('shield', 22)}
              <span>
                <b>4.8★ Rated Care</b>
                <small>Top Patient Reviews & High Outcomes</small>
              </span>
            </div>
            <div>
              ${getIconSvg('heart', 22)}
              <span>
                <b>SVR Neuro & Nephro</b>
                <small>Hemodialysis, Renal & Neuro ICU</small>
              </span>
            </div>
          </div>
        </div>
        <div class="hero-photo">
          <img src="assets/images/hospital_img1_b.jpg" alt="Sunray Hospital SVR Neuro & Nephro Care" onerror="this.src='assets/images/hospital_img1.jpg'" />
          <div class="photo-caption">
            <span>Hospital Facility · Nadivanka Junction</span>
            <b>Sunray Hospital (SVR NEURO &amp; NEPHRO CARE)</b>
            <small>4-1-879, Bellary - Uravakonda - Anantapur Rd, LB Nagar, Anantapur</small>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderInfoStrip() {
  return `
    <section class="infostrip">
      <div class="container stripgrid">
        <div>
          ${getIconSvg('heart')}
          <span>
            <b>Multi-Specialty</b>
            <small>SVR Neuro & Nephro Care</small>
          </span>
        </div>
        <div>
          ${getIconSvg('shield')}
          <span>
            <b>4.8★ Patient Rating</b>
            <small>Justdial & Google Verified</small>
          </span>
        </div>
        <div>
          ${getIconSvg('clock')}
          <span>
            <b>24/7 Hemodialysis</b>
            <small>Emergency Dialysis & ICU</small>
          </span>
        </div>
        <a href="tel:09989517151">
          ${getIconSvg('phone')}
          <span>
            <b>Call Hospital Desk</b>
            <small>099895 17151</small>
          </span>
        </a>
      </div>
    </section>
  `;
}

function renderContactBand() {
  return `
    <section class="contact-band">
      <div class="container contact-band-grid">
        <div>
          <span class="eyebrow">NEED IMMEDIATE CARE?</span>
          <h2>Care starts with a simple conversation.</h2>
          <p>Call the hospital reception for specialist consultations, OPD appointment scheduling, hemodialysis slots, or emergency casualty intake.</p>
        </div>
        <div class="contact-actions">
          <a class="primary" href="tel:09989517151">
            ${getIconSvg('phone', 18)} Call 099895 17151
          </a>
          <button class="secondary" onclick="setPage('Appointments')">
            ${getIconSvg('calendar', 18)} Book Consultation Online
          </button>
        </div>
        <div class="contact-facts">
          <a href="tel:09989517151">
            ${getIconSvg('phone')}
            <span>
              <small>Direct Appointments Desk</small>
              <b>099895 17151 / 08554-235678</b>
            </span>
          </a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Sunray+Hospital%28SVR+NEURO+%26+NEPHRO+CARE%29" target="_blank" rel="noreferrer">
            ${getIconSvg('location')}
            <span>
              <small>Hospital Location</small>
              <b>Get Directions (Nadivanka Junc.)</b>
            </span>
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderFeaturesSection() {
  return `
    <section class="section">
      <div class="container">
        <div class="sectionhead">
          <p class="eyebrow">OUR CARE PATHWAY</p>
          <h2>Everything patients need, in one place</h2>
          <p>A clean, patient-centric digital portal to explore departments, book verified doctors, and manage renal and neurological treatment plans.</p>
        </div>
        <div class="featuregrid">
          <div class="feature" onclick="setPage('Appointments')">
            <span class="iconbox">${getIconSvg('calendar', 26)}</span>
            <b>Appointments</b>
            <p>Direct 7-step booking journey from department and doctor selection to instant confirmed digital token.</p>
            <span class="learn">Book Appointment ${getIconSvg('arrow', 16)}</span>
          </div>
          <div class="feature" onclick="setPage('Doctors')">
            <span class="iconbox">${getIconSvg('users', 26)}</span>
            <b>Specialist Doctors</b>
            <p>Led by Dr. M. Surendra Babu (DM Nephrology, NIMS) and Dr. R. Ram Mohan (M.Ch Neurosurgery).</p>
            <span class="learn">Meet Specialists ${getIconSvg('arrow', 16)}</span>
          </div>
          <div class="feature" onclick="setPage('Departments')">
            <span class="iconbox">${getIconSvg('heart', 26)}</span>
            <b>Hemodialysis & Nephro</b>
            <p>Advanced dialysis center with computerized equipment, biocompatible filters, and AV fistula surgeries.</p>
            <span class="learn">View Renal Services ${getIconSvg('arrow', 16)}</span>
          </div>
          <div class="feature" onclick="setPage('Portal')">
            <span class="iconbox">${getIconSvg('shield', 26)}</span>
            <b>Patient & Doctor Portal</b>
            <p>Unified digital records for upcoming appointments, lab reports, OPD rosters, and dialysis logs.</p>
            <span class="learn">Open Portal ${getIconSvg('arrow', 16)}</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderArchitectureSection() {
  return `
    <section class="section soft">
      <div class="container two">
        <div>
          <div class="sectionhead" style="text-align: left; margin-bottom: 24px;">
            <p class="eyebrow">HOSPITAL INFRASTRUCTURE</p>
            <h2>Built with Clinical Precision for Patients & Families</h2>
            <p>Sunray Hospital (SVR Neuro & Nephro Care) combines trusted clinical expertise with modern diagnostic and surgical infrastructure right here in Anantapur.</p>
          </div>
          <div class="checklist">
            <p>${getIconSvg('check')} <span><strong>Dedicated Hemodialysis Center:</strong> High-flux machines with computerized fluid monitoring and 24/7 emergency slots.</span></p>
            <p>${getIconSvg('check')} <span><strong>Advanced Neuro ICU:</strong> Specialized neurological monitoring, ventilator care, and acute stroke protocol.</span></p>
            <p>${getIconSvg('check')} <span><strong>Verified Medical Team:</strong> Specialists with senior qualifications from NIMS, Osmania, and Govt. General Hospital.</span></p>
            <p>${getIconSvg('check')} <span><strong>24/7 Emergency & Pharmacy:</strong> Fully stocked in-house pharmacy, clinical lab, and ambulance support.</span></p>
          </div>
        </div>
        <div class="mockcard">
          <div class="mocktop">
            <span>Hospital Clinical Flow</span>
            <span class="livepill">24/7 ACTIVE</span>
          </div>
          <div class="layer">
            <b>Patient Triage & Front Desk</b>
            <small>OPD Token · Emergency Casualty · Direct Admission</small>
          </div>
          <div class="connector">↓</div>
          <div class="layer">
            <b>Specialist Evaluation & Diagnostics</b>
            <small>Nephrology · Neurosurgery · ABG · Renal Lab · Ultrasound</small>
          </div>
          <div class="connector">↓</div>
          <div class="layer">
            <b>Targeted Treatment & Rehabilitation</b>
            <small>Hemodialysis · Modular OT · Neuro ICU · Post-Transplant Care</small>
          </div>
        </div>
      </div>
    </section>
  `;
}

// --- SUB-PAGES ---

function renderDepartmentsPage() {
  return `
    <section class="page">
      <div class="container">
        <div class="sectionhead">
          <p class="eyebrow">DEPARTMENTS & SPECIALTIES</p>
          <h2>Explore Hospital Departments</h2>
          <p>Comprehensive specialized medical care with deep expertise in neurology, nephrology, general surgery, and emergency medicine.</p>
        </div>

        <div class="searchbar">
          ${getIconSvg('search', 20)}
          <input type="text" id="dept-search-input" placeholder="Search departments, e.g. Nephrology, Neurology, Surgery..." oninput="handleDeptSearch(this.value)" />
        </div>

        <div class="deptgrid" id="dept-cards-container">
          ${DEPARTMENTS.map(dept => `
            <div class="dept" data-name="${dept.name.toLowerCase()} ${dept.desc.toLowerCase()}">
              <span class="depticon">${dept.code}</span>
              <h3>${dept.name}</h3>
              <p>${dept.desc}</p>
              <button onclick="startBookingWithDept('${dept.id}')">
                Book Appointment ${getIconSvg('arrow', 16)}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function handleDeptSearch(query) {
  const cards = document.querySelectorAll('#dept-cards-container .dept');
  const term = query.toLowerCase().trim();
  cards.forEach(card => {
    const text = card.getAttribute('data-name');
    if (!term || text.includes(term)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function renderDoctorsPage() {
  return `
    <section class="page">
      <div class="container">
        <div class="sectionhead">
          <p class="eyebrow">DOCTOR DIRECTORY</p>
          <h2>Meet Our Senior Medical Specialists</h2>
          <p>Experienced consultants dedicated to patient-centric treatment, thorough diagnosis, and compassionate care.</p>
        </div>

        <div class="doc-filter-bar">
          <button class="doc-filter-btn active" onclick="filterDoctors('all', this)">All Specialists</button>
          <button class="doc-filter-btn" onclick="filterDoctors('nephrology', this)">Nephrology & Kidney</button>
          <button class="doc-filter-btn" onclick="filterDoctors('neurology', this)">Neurology & Spine</button>
          <button class="doc-filter-btn" onclick="filterDoctors('general_surgery', this)">General Surgery</button>
          <button class="doc-filter-btn" onclick="filterDoctors('general_medicine', this)">General Medicine</button>
          <button class="doc-filter-btn" onclick="filterDoctors('gynecology', this)">Gynecology</button>
        </div>

        <div class="docgrid" id="doctor-cards-grid">
          ${DOCTORS.map(doc => `
            <div class="doccard" data-dept="${doc.deptId}">
              <div class="docimg-wrap">
                <img src="${doc.image}" alt="${doc.name}" onerror="this.src='assets/images/hospital_img1.jpg'" />
                <span class="doctag">${doc.deptName}</span>
              </div>
              <div class="doccontent">
                <h3>${doc.name}</h3>
                <div class="docqualification">${doc.qualification}</div>
                <p>${doc.description}</p>
                <div class="docmeta">
                  <span>${getIconSvg('clock', 15)} ${doc.opd}</span>
                </div>
                <button class="primary" onclick="startBookingWithDoctor('${doc.id}', '${doc.deptId}')">
                  ${getIconSvg('calendar', 16)} Book Consultation
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function filterDoctors(category, btn) {
  document.querySelectorAll('.doc-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const cards = document.querySelectorAll('#doctor-cards-grid .doccard');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-dept') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function renderServicesPage() {
  return `
    <section class="page">
      <div class="container">
        <div class="sectionhead">
          <p class="eyebrow">HOSPITAL SERVICES</p>
          <h2>Specialized Clinical Facilities</h2>
          <p>Equipped with state-of-the-art medical technology to provide advanced diagnostic and surgical procedures in Anantapur.</p>
        </div>

        <div class="servicegrid">
          ${SERVICES.map(srv => `
            <div class="service">
              <span>${srv.no}</span>
              <h3>${srv.title}</h3>
              <p>${srv.desc}</p>
              <b>${srv.tag}</b>
            </div>
          `).join('')}
          <div class="service future">
            <span>+</span>
            <h3>More Specialized Services</h3>
            <p>Full-fledged 24/7 automated clinical biochemistry lab, ABG analyzer, Ultrasound scans, and dedicated pharmacy services.</p>
            <b>24/7 Available</b>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderReviewsPage() {
  return `
    <section class="page">
      <div class="container">
        <div class="sectionhead">
          <p class="eyebrow">PATIENT TESTIMONIALS</p>
          <h2>What People Say About Sunray Hospital</h2>
          <p>Verified feedback from patients and families who experienced our care and medical treatment.</p>
        </div>

        <div class="review-stats-card">
          <div class="rating-big">
            <div class="rating-num">4.8</div>
            <div class="rating-stars">★★★★★</div>
            <div class="rating-label">Overall Rating on Justdial & Google</div>
          </div>
          <div class="rating-highlights">
            <div class="highlight-box">
              <b>Frequently Praised</b>
              <p>Doctors are patient, thorough in explaining medical conditions, and effective in diagnosis and therapy.</p>
            </div>
            <div class="highlight-box">
              <b>Positive Outcomes</b>
              <p>Multiple reviews highlight successful surgeries, kidney recovery, and neurological improvement.</p>
            </div>
            <div class="highlight-box">
              <b>Supportive Staff</b>
              <p>Courteous nursing personnel and supportive reception desk aiding with appointments and dialysis care.</p>
            </div>
          </div>
        </div>

        <div class="testigrid">
          ${REVIEWS.map(item => `
            <div class="testicard">
              <div class="testi-stars">${'★'.repeat(item.rating)}</div>
              <blockquote>"${item.comment}"</blockquote>
              <div class="testi-author">
                <div class="avatar-circle">${item.name.charAt(0)}</div>
                <div class="author-info">
                  <b>${item.name}</b>
                  <small>Verified Patient · ${item.location}</small>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// --- 7-STEP INTERACTIVE APPOINTMENT BOOKING WIZARD ---

function renderAppointmentsPage() {
  const step = state.bookingStep;
  const stepTitles = [
    "Department",
    "Specialist Doctor",
    "Service Type",
    "Date & Available Slot",
    "Patient Details",
    "Review Summary",
    "Confirmation & Token"
  ];

  return `
    <section class="page">
      <div class="container narrow">
        <div class="demo-badge" style="margin: 0 auto 12px; display: table;">
          <span></span> APPOINTMENT BOOKING PORTAL
        </div>
        <div class="sectionhead" style="margin-bottom: 24px;">
          <p class="eyebrow">EASY ONLINE BOOKING</p>
          <h2>Book an Appointment</h2>
          <p>Fast, direct scheduling with senior specialists at Sunray Hospital (SVR Neuro & Nephro Care).</p>
        </div>

        <!-- 7-Step Progress Indicators -->
        <div class="steps">
          ${stepTitles.map((title, idx) => {
            const num = idx + 1;
            const cls = step === num ? 'step active' : step > num ? 'step done' : 'step';
            return `
              <div class="${cls}">
                <span>${step > num ? getIconSvg('check', 16) : num}</span>
                <small>${title}</small>
              </div>
            `;
          }).join('')}
        </div>

        <div class="booking">
          <div class="bookinghead">
            <div>
              <span class="eyebrow">STEP ${step} OF 7</span>
              <h3>${stepTitles[step - 1]}</h3>
            </div>
            <span class="secure">
              ${getIconSvg('lock', 15)} Instant Confirmation
            </span>
          </div>

          <div class="booking-body">
            ${renderBookingStepContent(step)}
          </div>

          <div class="bookingfoot">
            <button class="secondary" ${step === 1 || step === 7 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''} onclick="prevBookingStep()">
              Back
            </button>
            ${step < 6 ? `
              <button class="primary" onclick="nextBookingStep()">
                Continue ${getIconSvg('arrow', 16)}
              </button>
            ` : step === 6 ? `
              <button class="primary" onclick="confirmAppointment()">
                Confirm & Generate Token ${getIconSvg('check', 16)}
              </button>
            ` : `
              <button class="primary" onclick="resetBooking()">
                Book Another Appointment ${getIconSvg('arrow', 16)}
              </button>
            `}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBookingStepContent(step) {
  switch (step) {
    case 1:
      // Department
      return `
        <p style="margin-bottom: 20px; font-size: 0.95rem; color: var(--muted);">Please choose the clinical department for your consultation:</p>
        <div class="optiongrid">
          ${DEPARTMENTS.map(dept => `
            <button class="option ${state.selectedDepartment === dept.id ? 'selected' : ''}" onclick="selectDepartment('${dept.id}')">
              <span>${dept.code}</span>
              <div>
                <b>${dept.name}</b>
                <small>${dept.leadDoc}</small>
              </div>
            </button>
          `).join('')}
        </div>
      `;

    case 2:
      // Specialist Doctor
      const availableDocs = DOCTORS.filter(d => d.deptId === state.selectedDepartment);
      const docsToShow = availableDocs.length > 0 ? availableDocs : DOCTORS;
      return `
        <p style="margin-bottom: 20px; font-size: 0.95rem; color: var(--muted);">Select the specialist doctor you wish to consult with:</p>
        <div class="optiongrid">
          ${docsToShow.map(doc => `
            <button class="option ${state.selectedDoctor === doc.id ? 'selected' : ''}" onclick="selectDoctor('${doc.id}')">
              <span>👨‍⚕️</span>
              <div>
                <b>${doc.name}</b>
                <small>${doc.qualification}</small>
              </div>
            </button>
          `).join('')}
        </div>
      `;

    case 3:
      // Service Type
      const serviceOptions = [
        "Specialist OPD Consultation",
        "Hemodialysis Routine Session",
        "Neurological Assessment & Rehab",
        "Post-Transplant Follow-up",
        "Pre-Surgery Surgical Assessment",
        "Second Opinion / Medical Evaluation"
      ];
      return `
        <div class="formgrid single">
          <label>
            Selected Service / Consultation Nature
            <select onchange="state.selectedService = this.value">
              ${serviceOptions.map(srv => `
                <option value="${srv}" ${state.selectedService === srv ? 'selected' : ''}>${srv}</option>
              `).join('')}
            </select>
          </label>
        </div>
      `;

    case 4:
      // Date & Slot
      const slots = [
        "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
        "11:30 AM", "12:00 PM", "12:30 PM", "05:00 PM",
        "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"
      ];
      return `
        <div class="formgrid">
          <label>
            Consultation Date
            <input type="date" value="${state.selectedDate}" min="${new Date().toISOString().split('T')[0]}" onchange="state.selectedDate = this.value" />
          </label>
          <div class="slot-container">
            <span>Choose Preferred Available OPD Time Slot</span>
            <div class="slot-grid">
              ${slots.map(s => `
                <button class="slot-btn ${state.selectedSlot === s ? 'selected' : ''}" onclick="selectSlot('${s}')">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      `;

    case 5:
      // Patient Info
      return `
        <div class="formgrid">
          <label>
            Patient Full Name *
            <input type="text" id="patient-name-input" placeholder="e.g. Ramesh Reddy" value="${state.patientName}" oninput="state.patientName = this.value" />
          </label>
          <label>
            Phone Number *
            <input type="tel" id="patient-phone-input" placeholder="e.g. 9876543210" value="${state.patientPhone}" oninput="state.patientPhone = this.value" />
          </label>
          <label>
            Age (Years)
            <input type="number" placeholder="e.g. 45" value="${state.patientAge}" oninput="state.patientAge = this.value" />
          </label>
          <label>
            City / Area
            <input type="text" placeholder="e.g. Anantapur / Papampeta" value="${state.patientCity}" oninput="state.patientCity = this.value" />
          </label>
          <label style="grid-column: span 2;">
            Symptoms / Reason for Consultation
            <textarea rows="3" placeholder="Briefly describe symptoms (e.g. kidney pain, headache, dialysis regular slot, etc.)" oninput="state.patientSymptoms = this.value">${state.patientSymptoms}</textarea>
          </label>
        </div>
      `;

    case 6:
      // Review
      const deptObj = DEPARTMENTS.find(d => d.id === state.selectedDepartment) || DEPARTMENTS[0];
      const docObj = DOCTORS.find(d => d.id === state.selectedDoctor) || DOCTORS[0];
      return `
        <div class="review">
          <div class="review-item">
            <span>Hospital</span>
            <b>Sunray Hospital (SVR NEURO & NEPHRO CARE)</b>
          </div>
          <div class="review-item">
            <span>Department</span>
            <b>${deptObj.name}</b>
          </div>
          <div class="review-item">
            <span>Doctor</span>
            <b>${docObj.name} (${docObj.qualification})</b>
          </div>
          <div class="review-item">
            <span>Consultation Service</span>
            <b>${state.selectedService}</b>
          </div>
          <div class="review-item">
            <span>Appointment Date & Time</span>
            <b>${state.selectedDate} at ${state.selectedSlot}</b>
          </div>
          <div class="review-item">
            <span>Patient Name</span>
            <b>${state.patientName || 'Guest Patient'}</b>
          </div>
          <div class="review-item">
            <span>Contact Phone</span>
            <b>${state.patientPhone || 'Not provided'}</b>
          </div>
          <div class="review-item">
            <span>Hospital Location</span>
            <b>Nadivanka Junction, Bellary Rd, Anantapur</b>
          </div>
        </div>
      `;

    case 7:
      // Confirmation & Token
      const conf = state.confirmedToken;
      return `
        <div class="success-token-card">
          <div class="token-badge">APPOINTMENT CONFIRMED</div>
          <div class="token-number">${conf.tokenId}</div>
          <p style="margin-bottom: 20px; color: var(--navy); font-weight: 600;">
            Your consultation token has been generated. Please arrive 15 minutes before your scheduled slot.
          </p>
          <div class="token-details">
            <div>
              <span>Patient</span>
              <b>${conf.patient}</b>
            </div>
            <div>
              <span>Doctor</span>
              <b>${conf.doctor}</b>
            </div>
            <div>
              <span>Department</span>
              <b>${conf.department}</b>
            </div>
            <div>
              <span>Date & Time</span>
              <b>${conf.date} | ${conf.slot}</b>
            </div>
            <div>
              <span>Hospital Desk</span>
              <b>099895 17151</b>
            </div>
            <div>
              <span>Location</span>
              <b>Nadivanka Junction, Anantapur</b>
            </div>
          </div>
          <div class="token-actions">
            <button class="primary" onclick="window.print()">
              🖨 Print Token Slip
            </button>
            <a class="secondary" href="https://wa.me/919989517151?text=Hello%20Sunray%20Hospital,%20I%20have%20booked%20appointment%20token%20${conf.tokenId}%20for%20${conf.date}." target="_blank" rel="noreferrer">
              💬 WhatsApp Reception
            </a>
          </div>
        </div>
      `;
  }
}

function selectDepartment(deptId) {
  state.selectedDepartment = deptId;
  const matchDoc = DOCTORS.find(d => d.deptId === deptId);
  if (matchDoc) {
    state.selectedDoctor = matchDoc.id;
  }
  renderApp();
}

function selectDoctor(docId) {
  state.selectedDoctor = docId;
  renderApp();
}

function selectSlot(slot) {
  state.selectedSlot = slot;
  renderApp();
}

function nextBookingStep() {
  if (state.bookingStep === 5) {
    if (!state.patientName.trim()) {
      alert("Please enter the patient's name to proceed.");
      return;
    }
    if (!state.patientPhone.trim()) {
      alert("Please enter a valid phone number.");
      return;
    }
  }
  state.bookingStep++;
  renderApp();
}

function prevBookingStep() {
  if (state.bookingStep > 1) {
    state.bookingStep--;
    renderApp();
  }
}

function confirmAppointment() {
  const deptObj = DEPARTMENTS.find(d => d.id === state.selectedDepartment) || DEPARTMENTS[0];
  const docObj = DOCTORS.find(d => d.id === state.selectedDoctor) || DOCTORS[0];
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  
  state.confirmedToken = {
    tokenId: `SR-${new Date().getFullYear()}-${randomNum}`,
    patient: state.patientName || "Guest Patient",
    doctor: docObj.name,
    department: deptObj.name,
    date: state.selectedDate,
    slot: state.selectedSlot,
    created: new Date().toLocaleString()
  };

  state.bookingStep = 7;
  showToast(`Appointment Token ${state.confirmedToken.tokenId} Confirmed!`);
  renderApp();
}

function resetBooking() {
  state.bookingStep = 1;
  state.confirmedToken = null;
  renderApp();
}

function startBookingWithDept(deptId) {
  selectDepartment(deptId);
  state.bookingStep = 2;
  setPage('Appointments');
}

function startBookingWithDoctor(docId, deptId) {
  state.selectedDepartment = deptId;
  state.selectedDoctor = docId;
  state.bookingStep = 3;
  setPage('Appointments');
}

// --- PORTAL PREVIEW ---

function renderPortalPage() {
  const role = state.portalRole;
  return `
    <section class="page">
      <div class="container">
        <div class="portalhead">
          <div>
            <span class="eyebrow">${role.toUpperCase()} ACCESS</span>
            <h2>${role === 'Admin' ? 'Hospital Administration' : role + ' Dashboard'}</h2>
            <p>Interactive preview of role-based records, OPD schedules, and dialysis tracking at Sunray Hospital.</p>
          </div>
          <div class="role-switcher-tabs">
            <button class="role-tab-btn ${role === 'Patient' ? 'active' : ''}" onclick="switchPortalRole('Patient')">Patient View</button>
            <button class="role-tab-btn ${role === 'Doctor' ? 'active' : ''}" onclick="switchPortalRole('Doctor')">Doctor View</button>
            <button class="role-tab-btn ${role === 'Admin' ? 'active' : ''}" onclick="switchPortalRole('Admin')">Admin View</button>
          </div>
        </div>

        <div class="dashboardgrid">
          ${role === 'Patient' ? `
            <div class="dashcard">
              <small>Upcoming OPD Token</small>
              <b>SR-2026-4821</b>
              <span>Confirmed with Dr. M. Surendra Babu</span>
            </div>
            <div class="dashcard">
              <small>Dialysis Schedule</small>
              <b>Tue & Fri</b>
              <span>Slot: 10:00 AM (Bed #4)</span>
            </div>
            <div class="dashcard">
              <small>Prescription Reports</small>
              <b>3 Available</b>
              <span>Last updated: 3 days ago</span>
            </div>
            <div class="dashcard">
              <small>Lab Vitals</small>
              <b>Normal</b>
              <span>Renal panel recorded</span>
            </div>
          ` : role === 'Doctor' ? `
            <div class="dashcard">
              <small>Today's OPD Queue</small>
              <b>24 Patients</b>
              <span>18 Completed · 6 Waiting</span>
            </div>
            <div class="dashcard">
              <small>Dialysis In-Patients</small>
              <b>8 Active</b>
              <span>All vitals monitored</span>
            </div>
            <div class="dashcard">
              <small>Emergency Admissions</small>
              <b>2 Cases</b>
              <span>Neuro ICU Bed #2, #5</span>
            </div>
            <div class="dashcard">
              <small>Surgery Schedule</small>
              <b>1 Minor OT</b>
              <span>AV Fistula at 3:30 PM</span>
            </div>
          ` : `
            <div class="dashcard">
              <small>Total Bed Occupancy</small>
              <b>84%</b>
              <span>General, ICU & Dialysis</span>
            </div>
            <div class="dashcard">
              <small>Active Dialysis Bays</small>
              <b>10 / 12</b>
              <span>RO Water Plant Status: Pure</span>
            </div>
            <div class="dashcard">
              <small>Doctors on Duty</small>
              <b>7 Consultants</b>
              <span>OPD & Emergency covered</span>
            </div>
            <div class="dashcard">
              <small>Emergency Casualty</small>
              <b>24/7 Ready</b>
              <span>Ambulance standby ready</span>
            </div>
          `}
        </div>

        <div class="portalbody">
          <div class="panel">
            <div class="paneltitle">
              <h3>${role} Modules</h3>
              <span class="livepill">ONLINE PREVIEW</span>
            </div>
            <div class="modulelist">
              ${(role === 'Patient' 
                ? ["My Appointments", "Dialysis Record Card", "Doctor Case Notes", "Blood Test Reports", "Download Invoices", "Prescription PDF"]
                : role === 'Doctor' 
                ? ["Patient OPD Roster", "E-Prescriptions", "Dialysis Fluid Orders", "Radiology Requests", "Surgical Worklist", "Discharge Summaries"]
                : ["Doctor Roster", "Patient Registration", "Bed Allocation", "Pharmacy Stock", "Billing & Cashier", "Emergency Triage"]
              ).map(mod => `
                <div>
                  <span>${mod}</span>
                  <b onclick="showToast('${mod} loaded.')">Open</b>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="panel darkpanel">
            ${getIconSvg('shield', 32)}
            <h3>Hospital Data Security</h3>
            <p>Protected patient records with encrypted authentication and strict role-based access control for medical compliance.</p>
            <button class="primary small" onclick="showToast('Session verified.')">
              ${getIconSvg('lock', 14)} Authorized Session
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function switchPortalRole(newRole) {
  state.portalRole = newRole;
  renderApp();
}

// --- ABOUT PAGE ---

function renderAboutPage() {
  return `
    <section class="page">
      <div class="container about">
        <div>
          <p class="eyebrow">ABOUT SUNRAY HOSPITAL</p>
          <h2>Excellence in Renal & Neurological Healthcare</h2>
          <p style="margin-bottom: 16px;">
            <strong>Sunray Hospital (SVR Neuro & Nephro Care)</strong> is a trusted multispecialty healthcare destination in Anantapur, Andhra Pradesh. The institution is known for providing compassionate, evidence-based medical treatment with modern diagnostic tools and surgical amenities.
          </p>
          <p style="margin-bottom: 16px;">
            Located strategically at <strong>Nadivanka Junction on Bellary - Uravakonda - Anantapur Road</strong>, the hospital serves patients from across Rayalaseema seeking advanced kidney-related interventions, such as high-flux hemodialysis and pre/post-renal transplant follow-ups, alongside specialized neurological evaluations, brain and spine care, and general surgical procedures.
          </p>
          <div class="checklist" style="margin-top: 24px;">
            <p>${getIconSvg('check')} <span>Patient-first consultation ethics with dedicated doctor explanations.</span></p>
            <p>${getIconSvg('check')} <span>Advanced dialysis infrastructure with high water purity standards.</span></p>
            <p>${getIconSvg('check')} <span>24-hour round-the-clock emergency, casualty and in-house pharmacy.</span></p>
          </div>
        </div>
        <div style="text-align: center;">
          <img src="assets/images/hospital_img1_b.jpg" alt="Sunray Hospital Infrastructure" onerror="this.src='assets/images/hospital_img1.jpg'" style="max-height: 420px; width: 100%; object-fit: cover;" />
        </div>
      </div>
    </section>
  `;
}

// --- CONTACT & MAP PAGE ---

function renderContactPage() {
  return `
    <section class="page">
      <div class="container">
        <div class="sectionhead">
          <p class="eyebrow">GET IN TOUCH</p>
          <h2>Sunray Hospital (SVR NEURO & NEPHRO CARE)</h2>
          <p>We are conveniently located at Nadivanka Junction in Anantapur. Reach out to our 24/7 helpline or visit our medical facility.</p>
        </div>

        <div class="contactgrid">
          <div class="contactcard">
            <div class="contactrow">
              ${getIconSvg('location')}
              <div>
                <small>Hospital Address</small>
                <b>Sunray Hospital, Nadivanka Junction, 4-1-879, Bellary - Uravakonda - Anantapur Rd, LB Nagar, Somanath Nagar, Anantapur, Papampeta, Andhra Pradesh 515001, India</b>
              </div>
            </div>

            <div class="contactrow">
              ${getIconSvg('phone')}
              <div>
                <small>Helpline & Appointments</small>
                <b>099895 17151</b>
                <span style="font-size: 0.85rem; color: var(--muted); display: block; margin-top: 2px;">Secondary: 08554-235678 · +91 80939 36969</span>
              </div>
            </div>

            <div class="contactrow">
              ${getIconSvg('clock')}
              <div>
                <small>Hospital Working Hours</small>
                <b>Open 24 Hours / 7 Days a Week (Emergency & Hemodialysis)</b>
                <span style="font-size: 0.85rem; color: var(--muted); display: block; margin-top: 2px;">OPD Timings: Monday – Saturday (9:30 AM - 2:00 PM | 5:00 PM - 8:30 PM)</span>
              </div>
            </div>

            <div class="contact-button-row">
              <a class="primary" href="tel:09989517151">
                ${getIconSvg('phone', 16)} Call Hospital
              </a>
              <a class="secondary" href="https://www.google.com/maps/dir/?api=1&destination=Sunray+Hospital%28SVR+NEURO+%26+NEPHRO+CARE%29" target="_blank" rel="noreferrer">
                ${getIconSvg('location', 16)} Directions
              </a>
              <a class="secondary" href="https://wa.me/919989517151?text=Hello%20Sunray%20Hospital,%20I%20would%20like%20to%20inquire%20about%20appointments." target="_blank" rel="noreferrer">
                💬 WhatsApp
              </a>
            </div>
          </div>

          <div class="map-container">
            <iframe 
              title="Sunray Hospital Location Map" 
              src="https://maps.google.com/maps?q=Sunray+Hospital+Nadivanka+Junction+Anantapur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  `;
}

// --- FOOTER ---

function renderFooter() {
  return `
    <footer>
      <div class="container footgrid">
        <div>
          <a href="javascript:void(0)" class="brand footerbrand" onclick="setPage('Home')">
            <div class="brandmark-fallback" style="width:36px; height:36px; font-size:1.1rem;">☀</div>
            <div class="brand-info">
              <b>Sunray Hospital</b>
              <small>SVR NEURO & NEPHRO CARE</small>
            </div>
          </a>
          <p>
            Anantapur's premier multispecialty hospital dedicated to advanced nephrology, hemodialysis, neurology, and patient-centered surgical care.
          </p>
          <div style="margin-top: 14px; font-size: 0.85rem; color: #94a3b8;">
            ★ 4.8 / 5 Rating on Justdial & Google
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <button onclick="setPage('About')">About Hospital</button>
          <button onclick="setPage('Departments')">All Departments</button>
          <button onclick="setPage('Doctors')">Our Specialists</button>
          <button onclick="setPage('Services')">Hospital Facilities</button>
        </div>

        <div>
          <h4>Patients</h4>
          <button onclick="setPage('Appointments')">Book Appointment</button>
          <button onclick="setPage('Reviews')">Patient Reviews</button>
          <button onclick="setPage('Portal')">Patient Portal</button>
          <button onclick="setPage('Contact')">Find Directions</button>
        </div>

        <div>
          <h4>Contact Desk</h4>
          <p style="color: var(--sunray-bright); font-weight: 700; font-size: 1.1rem; margin-bottom: 8px;">
            099895 17151
          </p>
          <p>
            Nadivanka Junction, 4-1-879,<br />
            Bellary - Uravakonda - Anantapur Rd,<br />
            LB Nagar, Papampeta,<br />
            Anantapur, Andhra Pradesh – 515001
          </p>
        </div>
      </div>

      <div class="container copyright">
        © ${new Date().getFullYear()} Sunray Hospital (SVR NEURO & NEPHRO CARE) · All Rights Reserved
      </div>
    </footer>
  `;
}

function renderFloatingAction() {
  return `
    <div class="floating">
      <button onclick="setPage('Appointments')">
        ${getIconSvg('calendar', 18)} Book Now
      </button>
    </div>
  `;
}

function renderMobileActionBar() {
  return `
    <div class="mobile-action-bar">
      <a href="tel:09989517151">
        ${getIconSvg('phone', 18)}
        <span>Call</span>
      </a>
      <button onclick="setPage('Appointments')">
        ${getIconSvg('calendar', 18)}
        <span>Book</span>
      </button>
      <button onclick="setPage('Doctors')">
        ${getIconSvg('users', 18)}
        <span>Doctors</span>
      </button>
      <a href="https://www.google.com/maps/dir/?api=1&destination=Sunray+Hospital%28SVR+NEURO+%26+NEPHRO+CARE%29" target="_blank" rel="noreferrer">
        ${getIconSvg('location', 18)}
        <span>Directions</span>
      </a>
    </div>
  `;
}

// --- MAIN APP RENDER ---

function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  let pageContent = '';
  switch (state.currentPage) {
    case 'Home':
      pageContent = `
        ${renderHero()}
        ${renderInfoStrip()}
        ${renderFeaturesSection()}
        ${renderArchitectureSection()}
        ${renderContactBand()}
      `;
      break;
    case 'About':
      pageContent = renderAboutPage();
      break;
    case 'Departments':
      pageContent = renderDepartmentsPage();
      break;
    case 'Doctors':
      pageContent = renderDoctorsPage();
      break;
    case 'Services':
      pageContent = renderServicesPage();
      break;
    case 'Appointments':
      pageContent = renderAppointmentsPage();
      break;
    case 'Reviews':
      pageContent = renderReviewsPage();
      break;
    case 'Contact':
      pageContent = renderContactPage();
      break;
    case 'Portal':
      pageContent = renderPortalPage();
      break;
    default:
      pageContent = renderHero();
  }

  root.innerHTML = `
    <header class="header">
      ${renderHeader()}
    </header>
    <main>
      ${pageContent}
    </main>
    ${state.currentPage !== 'Home' ? renderContactBand() : ''}
    ${renderFooter()}
    ${renderFloatingAction()}
    ${renderMobileActionBar()}
  `;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
