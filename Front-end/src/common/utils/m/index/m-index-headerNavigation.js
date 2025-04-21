(function () {
  const length = document.querySelector('.navigationTitle')
  const container = document.querySelector('.navigation')
  const list = document.querySelector('.navigationTitleList')
  const moveLine = document.querySelector('.moveUnderline')

  let start = 0
  container.addEventListener('touchstart', function (e) {

    start = e.touches[0].clientX
  })

  let move = 0
  container.addEventListener('touchmove', function (e) {
    moveLine.style.transition = 'all 0s'
    move = e.touches[0].clientX - start
    if (move + endX < 0 && move + endX > -1510) {
      length.style.transform = `translateX(${move + endX}px)`
      moveLine.style.transform = `translateX(${move + endX + temp}px)`

    } else if (move + endX < -1510) {
      length.style.transform = `translateX(${-1510}px)`
      moveLine.style.transform = `translateX(${-1510 + temp}px)`

    } else if (move + endX >= 0) {
      length.style.transform = `translateX(0px)`
      moveLine.style.transform = `translateX(${temp}px)`

      move = 0
      endX = 0
    }
  })

  let endX = 0
  container.addEventListener('touchend', function (e) {
    if (move !== 0) {
      endX = move + endX
      move = 0
    }
  })

  let temp = 0

  list.addEventListener('click', function (e) {

    if (e.target.tagName === 'A') {
      moveLine.style.transition = 'all 0.2s ease-out'
      moveLine.style.width = `${e.target.offsetWidth}px`
      moveLine.style.transform = `translateX(${e.target.getBoundingClientRect().left}px)`
      temp = e.target.offsetLeft

      // moveLine.style.transition = 'none'
    }
  })

})()