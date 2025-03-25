//初始化部件
const one = document.querySelector(".layer img[data-name='1']")
const two = document.querySelector(".layer img[data-name='2']")
const three = document.querySelector(".layer img[data-name='3']")
const four = document.querySelector(".layer img[data-name='4']")
const five = document.querySelector(".layer img[data-name='5']")
const six = document.querySelector(".layer img[data-name='6']")
const seven = document.querySelector(".layer img[data-name='7']")
const eight = document.querySelector(".layer img[data-name='8']")
const nine = document.querySelector(".layer img[data-name='9']")
const ten = document.querySelector(".layer img[data-name='10']")
const eleven = document.querySelector(".layer img[data-name='11']")
const twelve = document.querySelector(".layer img[data-name='12']")
const thirteen = document.querySelector(".layer img[data-name='13']")
const fourteen = document.querySelector(".layer img[data-name='14']")
const fifteen = document.querySelector(".layer img[data-name='15']")
const sixteen = document.querySelector(".layer img[data-name='16']")
const seventeen = document.querySelector(".layer img[data-name='17']")
const eighteen = document.querySelector(".layer img[data-name='18']")
const nineteen = document.querySelector(".layer img[data-name='19']")
const twenty = document.querySelector(".layer img[data-name='20']")
const twentyOne = document.querySelector(".layer img[data-name='21']")
const twentyTwo = document.querySelector(".layer img[data-name='22']")
const all = document.querySelectorAll('.layer img')


const bannerAnimate = document.querySelector('.bannerAnimate')
//记录起始

let start = 0
bannerAnimate.addEventListener('mouseenter', e => start = e.clientX)

//记录移动距离并作出位移变化

bannerAnimate.addEventListener('mousemove', e => {
  if (seventeen.style.transition != '') {
    for (let i = 0; i < all.length; i++) {
      all[i].style.transition = ''
    }
  }
  //初始化位移
  let move = 0
  move = (e.clientX - start)
  one.style.transform = `translateX(${move / 200}px)`
  two.style.transform = `rotate(${move / 300}deg)`

  four.style.transform = `rotate(${move / 280}deg)`
  five.style.transform = `translateX(${move / 80}px)`
  six.style.transform = `translateX(${move / 150}px)`
  seven.style.transform = `translateX(${move / 40}px)`
  eight.style.transform = `translateX(${move / 40}px) rotate(${move / 5000}deg)`
  nine.style.transform = `translateX(${move / 80}px) `
  ten.style.transform = `translateX(${-move / 30}px) translateY(${move / 30}px) `
  eleven.style.transform = `translateX(${move / 200}px) `
  twelve.style.transform = `translateX(${move / 200}px) `
  thirteen.style.transform = `translateX(${move / 70}px) `
  fourteen.style.transform = `translateX(${move / 20}px) translateY(${move / 50}px) rotate(${-move / 250}deg) scale(${1 - move / 4000})`
  fifteen.style.transform = `translateX(${move / 70}px) translateY(${move / 2000}px)`
  sixteen.style.transform = `scale(${1 - move / 8000})`
  seventeen.style.transform = `translateX(${move / 40}px)`
  eighteen.style.transform = `translateX(${move / 80}px) translateY(${-move / 30}px) rotate(${move / 120}deg) scale(${1 - move / 8000})`
  nineteen.style.transform = `translateX(${move / 30}px)`
  twenty.style.transform = `translateX(${move / 30}px)`
  twentyOne.style.transform = `translateX(${move / 30}px)`
  twentyTwo.style.transform = `translateX(${-move / 30}px)`
})



//回弹
bannerAnimate.addEventListener('mouseleave', e => {
  for (let i = 0; i < all.length; i++) {
    all[i].style.transition = 'all .5s'
    all[i].style.transform = `translateX(0)`
  }
})