/* ====================== */
/*      TYPING EFFECT      */
/* ====================== */
const texts = ["Lili Bin","Lielt Biniyam", "Frontend Developer", "Creative Coder"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if(count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typing-text').textContent = letter;
  if(index === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 150);
  }
}());

/* ====================== */
/*      THEME SWITCH      */
/* ====================== */
const themeSelector = document.getElementById('theme');
themeSelector.addEventListener('change', function(){
  document.body.className = this.value;
});

/* ====================== */
/*      DARK/LIGHT TOGGLE */
/* ====================== */
const modeBtn = document.getElementById('mode-toggle');
modeBtn.addEventListener('click', () => {
  if(document.body.classList.contains('theme1')) {
    document.body.classList.remove('theme1');
    document.body.classList.add('theme4');
    modeBtn.textContent = "🌙";
  } else {
    document.body.classList.remove('theme4');
    document.body.classList.add('theme1');
    modeBtn.textContent = "☀️";
  }
});

/* ====================== */
/*      SCROLL FADE-IN    */
/* ====================== */
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* ====================== */
/*       STICKY HEADER     */
/* ====================== */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  /* Show back-to-top button */
  const backToTop = document.getElementById('back-to-top');
  if(window.scrollY > 300) backToTop.style.display = "block";
  else backToTop.style.display = "none";
});

/* ====================== */
/*     BACK TO TOP BTN     */
/* ====================== */
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

/* ====================== */
/*      CURRENT YEAR       */
/* ====================== */
document.getElementById('year').textContent = new Date().getFullYear();
/* ====================== */
/* NAV LINK HIGHLIGHT ON SCROLL */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if(window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
document.querySelector("form").addEventListener("submit", function(e) {
  let valid = true;

  const name = document.getElementById("full_name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const successMsg = document.getElementById("success");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  successMsg.textContent = "";

  // Name validation
  if (name.value.trim() === "") {
    nameError.textContent = "Please enter your full name.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Phone validation (optional)
  const phonePattern = /^[0-9]{7,15}$/;
  if (phone.value && !phone.value.match(phonePattern)) {
    phoneError.textContent = "Please enter a valid phone number.";
    valid = false;
  }

  // Stop submission if invalid
  if (!valid) {
    e.preventDefault();
    return;
  }

  // Show success message
  successMsg.textContent = "Your message has been sent successfully 💌";
});
