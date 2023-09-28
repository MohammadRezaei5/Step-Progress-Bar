// ------------------- VARIABLES -------------------
const progress = document.getElementById("progress-line");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const submit = document.getElementById("submit");
const reloadBtn = document.getElementById("reload-btn");
const circles = document.querySelectorAll(".progress-circle");
const infoDiv = document.getElementById("info");
const lastProgressSection = document.querySelector(
  ".progress-container:last-child"
);
const greenText = document.createElement("div");

// ------------------- REFRESH-FUNCTION -------------------
function refreshPage() {
  window.location.reload();
}

// ------------------- COUNTER -------------------
let currentActive = 1;

// ------------------- NEXTBUTTON-EVENTLISTENER -------------------
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

// ------------------- PREVBUTTON-EVENTLISTENER -------------------
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// ------------------- SUBMITBUTTON-EVENTLISTENER -------------------
submit.addEventListener("click", () => {
  submit.textContent = "لطفا صبر کنید ...";
  prev.disabled = true;

  setTimeout(() => {
    next.style.display = "none";
    prev.style.display = "none";
    submit.style.display = "none";
    infoDiv.style.display = "block";

    circles[circles.length - 1].classList.add("checkmark");
    circles[circles.length - 1].classList.remove("active");

    greenText.textContent = "ثبت نام شما با موفقیت انجام شد";
    greenText.classList.add("success");
    lastProgressSection.appendChild(greenText);
  }, 3000);
});

// ------------------- UPDATE-FUNCTION -------------------
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
      circle.classList.remove("checkmark");
    }

    if (idx < currentActive - 1) {
      circle.classList.add("checkmark");
      circle.classList.remove("active");
    } else {
      circle.classList.remove("checkmark");
    }
  });

  if (currentActive === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if (currentActive === circles.length) {
    next.disabled = true;
    submit.disabled = false;
  } else {
    next.disabled = false;
    submit.disabled = true;
  }
}
