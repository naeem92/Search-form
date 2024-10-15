const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const links = document.querySelector(".navbar-links"); // Corrected here

openButton.addEventListener("click", () => {
  openButton.classList.add("hidden");
  openButton.classList.remove("show");

  closeButton.classList.add("show");
  closeButton.classList.remove("hidden");

  links.classList.add("mobile-links");
});

closeButton.addEventListener("click", () => {
  closeButton.classList.add("hidden");
  closeButton.classList.remove("show");

  openButton.classList.add("show");
  openButton.classList.remove("hidden");

  links.classList.remove("mobile-links");
});

// Open modal when clicking on an element with data-target attribute
document.querySelectorAll('[data-target]').forEach(trigger => {
  trigger.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(trigger.dataset.target).classList.add('active'); 
  });
});
// Close modal when clicking the close button or outside the modal
document.addEventListener('click', e => {
  const modalWrapper = e.target.closest('.modal_wrapper');

  if (modalWrapper && (e.target.matches('.close-modal') || e.target === modalWrapper)) {
      modalWrapper.classList.remove('active');
  }
});

const animateTextTyping = (node) => {
  const text = node.textContent;
  const chars = text.split("");

  node.innerHTML = "";
  node.classList.add("typing");
  i = 0;

  const addNextChar = (i) => {
    let nextChar = chars[i] === "\n" ? "<br>" : chars[i];
    node.innerHTML += "<span>" + nextChar + "</span>";
    if (i < chars.length - 1) {
      setTimeout(function () {
        addNextChar(i + 1);
      }, 20 + Math.random() * 50);
    } else {
      setTimeout(function () {
        node.classList.remove("typing");
      }, 20 + Math.random() * 150);
    }
  };

  addNextChar(i);
};

window.onload = () => {
  animateTextTyping(document.getElementById("text"));
};
