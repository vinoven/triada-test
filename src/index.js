const accordions = document.querySelectorAll(".accordion");
const servicesInfoBlock = document.querySelector(".services-info");

for (let i = 0; i < accordions.length; i++) {
  const accordion = accordions[i];
  const button = accordion.querySelector(".accordion__button");

  button.addEventListener("click", () => {
    const titleNode = servicesInfoBlock.querySelector(".project-card__title");
    titleNode.textContent =
      accordion.querySelector(".accordion__title").textContent;

    accordions.forEach((item, index) => {
      if (index !== i) {
        item.classList.remove("accordion--expanded");
      } else {
        item.classList.toggle("accordion--expanded");
        if (item.classList.contains("accordion--expanded")) {
          servicesInfoBlock.classList.remove("hidden");
        } else {
          servicesInfoBlock.classList.add("hidden");
        }
      }
    });
  });
}
