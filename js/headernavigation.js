const length = document.querySelector('.navigationTitle')
const container = document.querySelector('.navigation')


let start = 0
container.addEventListener('touchstart', function (e) {

  start = e.touches[0].clientX
})

let move = 0
container.addEventListener('touchmove', function (e) {

  move = e.touches[0].clientX - start
  console.log(move);
  console.log(endX);

  // length.style.transform = `translateX(${move + endX}px)`
  if (move + endX < 0 && move + endX > -1510) {
    length.style.transform = `translateX(${move + endX}px)`
  } else if (move + endX < -1510) {
    length.style.transform = `translateX(${-1510}px)`
  } else if (move + endX >= 0) {
    move = 0
    endX = 0
  }
})

let endX = 0
container.addEventListener('touchend', function (e) {
  endX = move + endX
})
