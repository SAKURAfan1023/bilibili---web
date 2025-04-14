const imgContainer = document.querySelector('.pc-index-swiper-top')
const container = document.querySelector('.pc-index-videoCards-bigCards')
const color = document.querySelector('.pc-index-videoCards-bigCards-mask')
const title = document.querySelector('.pc-index-swiper-bottom-text')
let items = document.querySelectorAll('.pc-index-swiper-top>*')
let width = 0
let isAnimating = false
let imgNum = 1

function init() {
  const firstClone = items[0].cloneNode(true);
  const lastClone = items[items.length - 1].cloneNode(true);

  imgContainer.appendChild(firstClone);
  imgContainer.insertBefore(lastClone, items[0]);
  items = document.querySelectorAll('.pc-index-swiper-top>*')
  width = container.getBoundingClientRect().width
  imgContainer.style.transform = `translateX(-${width}px)`
}

function resetPosition() {
  imgContainer.style.transition = 'none'

  if (imgNum === 0) {
    imgNum = items.length - 2
    imgContainer.style.transform = `translateX(-${width * imgNum}px)`
  } else if (imgNum === items.length - 1) {
    imgNum = 1
    imgContainer.style.transform = `translateX(-${width}px)`
  }

  // 强制重绘
  void imgContainer.offsetWidth
  imgContainer.style.transition = 'transform 0.4s'
}

function rightSwipe() {
  if (isAnimating) return
  isAnimating = true

  imgNum++
  changeColor()
  changeTitle()
  imgContainer.style.transition = 'transform 0.4s'
  imgContainer.style.transform = `translateX(-${width * imgNum}px)`
  if (imgNum === items.length - 1) {
    setTimeout(resetPosition, 400)
  }

  setTimeout(() => isAnimating = false, 400)
}

function leftSwipe() {
  if (isAnimating) return
  isAnimating = true

  imgNum--
  imgContainer.style.transition = 'transform 0.4s'
  imgContainer.style.transform = `translateX(-${width * imgNum}px)`
  changeColor()
  changeTitle()
  if (imgNum === 0) {
    setTimeout(resetPosition, 400)
  }

  setTimeout(() => isAnimating = false, 400)
}

function changeColor() {
  if (imgNum === 1 || imgNum === 10) { color.style.backgroundColor = '#f27aac'; }
  if (imgNum === 0 || imgNum === 9) { color.style.backgroundColor = '#f2af8d'; }
  if (imgNum === 2) { color.style.backgroundColor = '#494a3f'; }
  if (imgNum === 3) { color.style.backgroundColor = '#74535a'; }
  if (imgNum === 4) { color.style.backgroundColor = '#394c4a'; }
  if (imgNum === 5) { color.style.backgroundColor = '#674d4b'; }
  if (imgNum === 6) { color.style.backgroundColor = '#5f5f5a'; }
  if (imgNum === 7) { color.style.backgroundColor = '#241b1e'; }
  if (imgNum === 8) { color.style.backgroundColor = '#314c7b'; }

}

function changeTitle() {
  if (imgNum === 1 || imgNum === 10) { title.href = '#'; title.innerHTML = '<span>预约领取它博会福利</span>' }
  if (imgNum === 0 || imgNum === 9) { title.href = '#'; title.innerHTML = '<span>命定相遇之日，魔法宝袋轻启。</span>' }
  if (imgNum === 2) { title.href = '#'; title.innerHTML = '<span>超能力者敌不过花粉过敏?</span>' }
  if (imgNum === 3) { title.href = '#'; title.innerHTML = '<span>恶作剧经典之铜人！</span>' }
  if (imgNum === 4) { title.href = '#'; title.innerHTML = '<span>晒出你的旅行攻略</span>' }
  if (imgNum === 5) { title.href = '#'; title.innerHTML = '<span>以骑行视角，看不同的地理人文</span>' }
  if (imgNum === 6) { title.href = '#'; title.innerHTML = '<span>辣椒：一种“不存在的”痛快滋味</span>' }
  if (imgNum === 7) { title.href = '#'; title.innerHTML = '<span>猫猫有什么坏心思呢？</span>' }
  if (imgNum === 8) { title.href = '#'; title.innerHTML = '<span>淡妆？浓抹？阁主真有格调</span>' }
}

window.addEventListener('load', init);


window.addEventListener('resize', () => {
  width = container.getBoundingClientRect().width
  imgContainer.style.transform = `translateX(-${width * imgNum}px)`
})

document.querySelector('#nextImg').addEventListener('click', () => {
  rightSwipe()
  imgContainer.addEventListener('transitionend', () => {
    if (imgNum === 0 || imgNum === items.length - 1) {
      resetPosition()
    }
  })
})

document.querySelector('#lastImg').addEventListener('click', () => {
  leftSwipe()
  imgContainer.addEventListener('transitionend', () => {
    if (imgNum === 0 || imgNum === items.length - 1) {
      resetPosition()
    }
  })
})

let timeID = setInterval(() => {
  rightSwipe()
}, 2500)

container.addEventListener('mouseenter', () => {
  clearInterval(timeID)
})

container.addEventListener('mouseleave', () => {
  timeID = setInterval(() => {
    rightSwipe()
  }, 2500)
})



