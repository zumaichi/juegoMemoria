import "./style.css";

function descubrir(card: HTMLElement) {
  card.classList.toggle("descubierta");
}

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    descubrir(card as HTMLElement);
  });
});
