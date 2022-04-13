import pic1 from "./assets/김규민.jpg";
import pic2 from "./assets/전희선.jpg";
import pic3 from "./assets/서혜은.jpg";
import pic4 from "./assets/황주희.jpg";
import pic5 from "./assets/백지연.png";

const $ = (selector) => document.querySelector(selector);

let currentStep = 0;

const quizList = [
  {
    src: pic1,
    answer: "김규민",
  },
  {
    src: pic2,
    answer: "전희선",
  },
  {
    src: pic3,
    answer: "서혜은",
  },
  {
    src: pic4,
    answer: "황주희",
  },
  {
    src: pic5,
    answer: "백지연",
  },
];

function showModal(modalContent, keepContent = false) {
  const modalBody = $("p.modal__body");
  const modal = $(".modal");

  modalBody.innerHTML = modalContent;
  modal.classList.remove("hide");

  if (keepContent) return;
  setTimeout(() => {
    modal.classList.add("hide");
  }, 800);
}

function goNextStep(score, image) {
  showModal("딱 들키뿟노");

  currentStep++;
  score.innerText = +score.innerText + 1;
  image.src = quizList[currentStep].src;
}

function goInitStep() {
  showModal(`<a href="/">메인 갈람갈</a>`, true);
}

function stayCurrentStep() {
  showModal("아아ㅋ ㅋ");
}

function attachEvent({ score, answer, image }) {
  answer.addEventListener("click", (e) => {
    // if (e.target.closest(".answer__list > li") {}
    if (!(e.target instanceof HTMLLIElement)) return;

    const selectedAnswer = e.target.innerText;
    const realAnswer = quizList[currentStep].answer;

    if (selectedAnswer === realAnswer) {
      if (currentStep < 4) {
        goNextStep(score, image);
      } else {
        goInitStep();
      }
    } else {
      stayCurrentStep();
    }
  });
}

function initGame({ score, image }) {
  currentStep = 0;
  score.innerText = currentStep;
  image.src = quizList[currentStep].src;
}

function gameManager(gameInfo) {
  initGame(gameInfo);
  attachEvent(gameInfo);
}

// 스크립트를 어떻게 실행하든 무조건 DOM이 완성된 이후에 실행되는 것을 보장
// 스크립트를 defer 나 type="module" 을 주면 항상 DOM이 완성된 후 실행되므로 고민할 필요 없음
window.onload = () => {
  gameManager({
    score: $(".scoreBoard__score"),
    answer: $(".answer__list"),
    image: $(".imageBoard > img"),
  });
};
