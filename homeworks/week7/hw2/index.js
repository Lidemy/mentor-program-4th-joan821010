const section = document.querySelector('.section');

section.addEventListener('click', (e) => {
  if (e.target.classList.contains('hide-a')) {
    e.target.closest('.section__question').classList.toggle('hide-a');
  } else {
    e.target.closest('.section__question').classList.toggle('hide-a');
  }
});

/*
const questions = document.querySelectorAll(".section__question")

for (let question of questions) {
  question.addEventListener("click", function(e) {
    if (e.target.classList.contains("hide-a")) {
      question.classList.toggle("hide-a")
    } else {
      question.classList.toggle("hide-a")
    }
  })
}
*/
