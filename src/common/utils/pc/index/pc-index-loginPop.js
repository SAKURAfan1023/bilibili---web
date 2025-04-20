(function () {
  const card = document.querySelector('.pc-loginCard')
  const trigger = document.querySelector('.pc-index-header-imgBorder')
  const state = {
    isAnimate: false,
    timeId: []
  }

  function clearAllTimeouts() {
    state.timeId.forEach(id => clearTimeout(id));
    state.timeId = [];
  }

  function showCard() {
    if (state.isAnimate) return
    state.isAnimate = true
    clearAllTimeouts()
    card.style.display = 'block'
    void card.offsetWidth;
    card.classList.add('pc-loginCard-visible')
    // requestAnimationFrame(() => {
    //   card.classList.add('pc-loginCard-visible')
    // })
  }

  function hideCard() {

    if (!state.isAnimate) return
    clearAllTimeouts()
    const id2 = setTimeout(() => {
      card.classList.remove('pc-loginCard-visible')
      const id1 = setTimeout(() => {
        card.style.display = 'none';
        state.isAnimate = false;
      }, 300)
      state.timeId.push(id1)
    }, 300)
    state.timeId.push(id2)
  }

  trigger.addEventListener('mouseenter', showCard);
  trigger.addEventListener('mouseleave', hideCard);

  card.addEventListener('mouseenter', clearAllTimeouts);
  card.addEventListener('mouseleave', hideCard);
  showCard()
})()