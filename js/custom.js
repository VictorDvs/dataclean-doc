function loadFirstTopic() {
  const startPage = document.body.getAttribute("data-start-page");
  if (!startPage) return;

  // Cherche le premier lien dans la TOC
  const firstTopicLink = document.querySelector(`.map a[href="${startPage}"]`);

  if (firstTopicLink) {
    // Si trouvé, simule le clic
    firstTopicLink.click();
  } else {
    // Sinon, on attend 50ms et on réessaie
    setTimeout(loadFirstTopic, 50);
  }
}

// Démarre quand le DOM est prêt
document.addEventListener("DOMContentLoaded", () => {
  loadFirstTopic();
});




