const titleClickHandler = (event) => {
  if (!event.target.classList.contains('collapsible-toggle')) return;

  // 1.
  // Get all cards
  const cardsNodeList = document.querySelectorAll('.project-card');
  const cards = Array.from(cardsNodeList);

  // 2.
  // Get the card whose title was clicked...
  const currentCard = cards.find((card) => {
    const toggle = card.querySelector('.collapsible-toggle');
    return toggle.dataset.id === event.target.dataset.id;
  });

  // ...and it's elements:
  const currentCardTitle = currentCard.querySelector('.collapsible-toggle');

  const currentCardCollapsible = currentCard.querySelector(
    '.card-collapsible-wrapper'
  );

  // 2.
  // Check if another card if expanded...
  const expandedCard = cards.find((card) => {
    if (card === currentCard) return false;

    const cardTitle = card.querySelector('.collapsible-toggle');
    return cardTitle.classList.contains('content-expanded');
  });

  // ...and if it is, collapse it
  if (expandedCard) {
    const expandedCardCollapsible = expandedCard.querySelector(
      '.card-collapsible-wrapper'
    );

    const expandedCardTitle = expandedCard.querySelector('.collapsible-toggle');

    expandedCardTitle.classList.remove('content-expanded');
    expandedCardCollapsible.style.maxHeight = null;
  }

  // 4.
  // Expand or collapse the current card
  currentCardTitle.classList.toggle('content-expanded');

  if (currentCardCollapsible.style.maxHeight) {
    currentCardCollapsible.style.maxHeight = null;
    //
  } else {
    currentCardCollapsible.style.maxHeight =
      currentCardCollapsible.scrollHeight + 'px';
  }
};

// ***********************************************

const projectRenderCnt = document.querySelector('.gallery');

projectRenderCnt.addEventListener('click', titleClickHandler);
