//初始化引用
const all = document.querySelectorAll('.layer img')

const bannerAnimate = document.querySelector('.bannerAnimate')
//记录起始

let start = 0
bannerAnimate.addEventListener('mouseenter', e => start = e.clientX)

//记录移动距离并作出位移变化

bannerAnimate.addEventListener('mousemove', e => {
  if (all[0].style.transition != '') {
    for (let i = 0; i < all.length; i++) {
      all[i].style.transition = ''
    }
  }
  //记录位移
  let move = 0
  move = (e.clientX - start)
  all[0].style.transform = `translateX(${move / 200}px)`
  all[1].style.transform = `rotate(${move / 300}deg)`

  all[3].style.transform = `rotate(${move / 280}deg)`
  all[4].style.transform = `translateX(${move / 80}px)`
  all[5].style.transform = `translateX(${move / 150}px)`
  all[6].style.transform = `translateX(${move / 40}px)`
  all[7].style.transform = `translateX(${move / 40}px) rotate(${move / 5000}deg)`
  all[8].style.transform = `translateX(${move / 80}px) `
  all[9].style.transform = `translateX(${-move / 30}px) translateY(${move / 30}px) `
  all[10].style.transform = `translateX(${move / 200}px) `
  all[11].style.transform = `translateX(${move / 200}px) `
  all[12].style.transform = `translateX(${move / 70}px) `
  all[13].style.transform = `translateX(${move / 20}px) translateY(${move / 50}px) rotate(${-move / 250}deg) scale(${1 - move / 4000})`
  all[14].style.transform = `translateX(${move / 70}px) translateY(${move / 2000}px)`
  all[15].style.transform = `scale(${1 - move / 8000})`
  all[16].style.transform = `translateX(${move / 40}px)`
  all[17].style.transform = `translateX(${move / 80}px) translateY(${-move / 30}px) rotate(${move / 120}deg) scale(${1 - move / 8000})`
  all[18].style.transform = `translateX(${move / 30}px)`
  all[19].style.transform = `translateX(${move / 30}px)`
  all[20].style.transform = `translateX(${move / 30}px)`
  all[21].style.transform = `translateX(${-move / 30}px)`
})


//回弹
bannerAnimate.addEventListener('mouseleave', e => {
  for (let i = 0; i < all.length; i++) {
    all[i].style.transition = 'all .5s'
    all[i].style.transform = `translateX(0)`
  }
})