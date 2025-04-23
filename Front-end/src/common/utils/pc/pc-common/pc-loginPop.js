const cards = document.querySelectorAll('.pc-loginCard')
const triggers = document.querySelectorAll('.pc-index-header-imgBorder')
const state = {
  isAnimate: false,
  timeId: []
}


export function clearAllTimeouts() {
  state.timeId.forEach(id => clearTimeout(id));
  state.timeId = [];
}

export function showCard(event) {
  if (state.isAnimate) return
  if (event) {
    if (event.target.id === 'pc-index-header-imgBorder-2') {
      state.isAnimate = true
      clearAllTimeouts()
      cards[1].style.display = 'block'
      void cards[1].offsetWidth;
      cards[1].classList.add('pc-loginCard-visible')
      return
    }
  }
  state.isAnimate = true
  clearAllTimeouts()
  cards[0].style.display = 'block'
  void cards[0].offsetWidth;
  cards[0].classList.add('pc-loginCard-visible')
}

export function hideCard(event) {
  if (!state.isAnimate) return
  clearAllTimeouts()
  const id2 = setTimeout(() => {
    if (event) {
      if (event.target.id === 'pc-loginCard-2') {
        cards[1].classList.remove('pc-loginCard-visible')
        const id1 = setTimeout(() => {
          cards[1].style.display = 'none';
          state.isAnimate = false;
        }, 300)
        state.timeId.push(id1)
      } else {
        cards[0].classList.remove('pc-loginCard-visible')
        const id1 = setTimeout(() => {
          cards[0].style.display = 'none';
          state.isAnimate = false;
        }, 300)
        state.timeId.push(id1)
      }
    }
  }, 300)
  state.timeId.push(id2)
}

export function showCard2(event) {
  if (state.isAnimate) return
  if (event) {
    if (event.target.id === 'pc-index-header-imgBorder-2') {
      document.querySelectorAll('.pc-index-header-imgBorder')[1].style.scale = '2.5'
      document.querySelectorAll('.pc-index-header-imgBorder')[1].style.marginTop = '10px'
      state.isAnimate = true
      clearAllTimeouts()
      cards[1].style.display = 'block'
      void cards[1].offsetWidth;
      cards[1].classList.add('pc-loginCard-visible')
      return
    }
  }
  state.isAnimate = true
  clearAllTimeouts()
  document.querySelectorAll('.pc-index-header-imgBorder')[0].style.scale = '2.5'
  document.querySelectorAll('.pc-index-header-imgBorder')[0].style.marginTop = '10px'
  cards[0].style.display = 'block'
  void cards[0].offsetWidth;
  cards[0].classList.add('pc-loginCard-visible')
}

export function hideCard2(event) {
  if (!state.isAnimate) return
  clearAllTimeouts()
  const id2 = setTimeout(() => {
    if (event) {
      if (event.target.id === 'pc-loginCard-2') {
        cards[1].classList.remove('pc-loginCard-visible')
        document.querySelectorAll('.pc-index-header-imgBorder')[1].style.scale = '1'
        document.querySelectorAll('.pc-index-header-imgBorder')[1].style.marginTop = '0px'
        const id1 = setTimeout(() => {
          cards[1].style.display = 'none';
          state.isAnimate = false;
        }, 300)
        state.timeId.push(id1)
      } else {
        cards[0].classList.remove('pc-loginCard-visible')
        document.querySelectorAll('.pc-index-header-imgBorder')[0].style.scale = '1'
        document.querySelectorAll('.pc-index-header-imgBorder')[0].style.marginTop = '0px'
        const id1 = setTimeout(() => {
          cards[0].style.display = 'none';
          state.isAnimate = false;
        }, 300)
        state.timeId.push(id1)
      }
    }
  }, 300)
  state.timeId.push(id2)
}

triggers.forEach(item => item.addEventListener('mouseenter', showCard))
triggers.forEach(item => item.addEventListener('mouseleave', hideCard))

cards.forEach(item => item.addEventListener('mouseenter', clearAllTimeouts))
cards.forEach(item => item.addEventListener('mouseleave', hideCard))

if (!localStorage.getItem('token')) {
  showCard()
}
