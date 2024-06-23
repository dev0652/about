function getCurrentCard(cards, event) {
  return cards.find(card => {
    const toggle = card.querySelector('.collapsible-toggle');
    return toggle.dataset.id === event.target.dataset.id;
  });
}

function disableKeyboardFocusOnLinks(cardLinks) {
  cardLinks.forEach(cardLink => {
    cardLink.tabIndex = '-1';
  });
}

function checkForExpandedCards(cards, currentCard) {
  return cards.find(card => {
    if (currentCard && card === currentCard) return false;

    const cardTitle = card.querySelector('.collapsible-toggle');

    return cardTitle.classList.contains('content-expanded');
  });
}

function collapseExpandedCard(expandedCard) {
  const expandedCardCollapsible = expandedCard.querySelector('.collapsible');
  const expandedCardTitle = expandedCard.querySelector('.collapsible-toggle');
  const expandedCardLinks = expandedCard.querySelectorAll('.project-link');

  expandedCardTitle.classList.remove('content-expanded');
  expandedCardTitle.ariaExpanded = 'false';
  expandedCardCollapsible.style.maxHeight = null;

  disableKeyboardFocusOnLinks(expandedCardLinks);
}

function toggleCurrentCard(currentCard) {
  const currentCardTitle = currentCard.querySelector('.collapsible-toggle');
  const currentCardCollapsible = currentCard.querySelector('.collapsible');
  const currentCardLinks = currentCard.querySelectorAll('.project-link');

  currentCardTitle.classList.toggle('content-expanded');

  if (currentCardCollapsible.style.maxHeight) {
    currentCardCollapsible.style.maxHeight = null;

    currentCardCollapsible.classList.remove('animated');
    currentCardTitle.ariaExpanded = 'false';

    disableKeyboardFocusOnLinks(currentCardLinks);
  } else {
    currentCardCollapsible.style.maxHeight =
      currentCardCollapsible.scrollHeight + 'px';

    currentCardCollapsible.classList.add('animated');
    currentCardTitle.ariaExpanded = 'true';

    currentCardLinks.forEach(cardLink => {
      cardLink.removeAttribute('tabIndex');
    });
  }
}

function titleClickHandler(event) {
  if (!event.target.classList.contains('collapsible-toggle')) return;

  const cardsNodeList = document.querySelectorAll('.project-card');
  const cards = Array.from(cardsNodeList);

  const currentCard = getCurrentCard(cards, event);

  const expandedCard = checkForExpandedCards(cards, currentCard);
  if (expandedCard) collapseExpandedCard(expandedCard);

  toggleCurrentCard(currentCard);
}

export function collapseAllCards() {
  const cardsNodeList = document.querySelectorAll('.project-card');
  const cards = Array.from(cardsNodeList);

  const expandedCard = checkForExpandedCards(cards);
  if (expandedCard) collapseExpandedCard(expandedCard);
}

function titleKeypressHandler(event) {
  if (event.key === 'Enter' || event.key === ' ') titleClickHandler(event);
}

const projectRenderCnt = document.querySelector('.gallery');

projectRenderCnt.addEventListener('click', titleClickHandler);
projectRenderCnt.addEventListener('keydown', titleKeypressHandler);
