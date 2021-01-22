flip = () => {
  let cardContainers = document.querySelectorAll(".flip-card");
  const btn = document.querySelector(".details-button");
  const flipCardInner = document.querySelector(".flip-card-inner");

  btn.addEventListener('click', function () {
    flipCardInner.classList.add("actives");
  })
}

unflip = () => {
  const back = document.querySelector(".back-button");
  const flipCardInner = document.querySelector(".flip-card-inner");
  back.addEventListener('click', function () {
    flipCardInner.classList.remove("actives");
  })
}

unflip();
flip();