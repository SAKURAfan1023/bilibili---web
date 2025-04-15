const containers = document.querySelectorAll('.pc-index-header-infPopover')
const icons = document.querySelectorAll('.right-entry-icon')


//顶部右侧图标跳动绑定
for (let i = 1; i < 14; i++) {
  if (i === 7) {
    ;
  } else if (i < 7) {
    containers[i].addEventListener('mouseenter', e => {
      icons[i - 1].style.transition = 'transform 0.2s'
      icons[i - 1].style.transform = 'translateY(-4px)'
      setTimeout(() => {
        icons[i - 1].style.transform = 'translateY(0px)'
      }, 200)
    })
  } else {
    containers[i].addEventListener('mouseenter', e => {
      icons[i - 2].style.transition = 'transform 0.2s'
      icons[i - 2].style.transform = 'translateY(-4px)'
      setTimeout(() => {
        icons[i - 2].style.transform = 'translateY(0px)'
      }, 200)
    })
  }
}

const titlesContainers = document.querySelectorAll('.pc-index-header-left li')
const title = document.querySelectorAll('.pc-index-header-left li span')

for (let i = 1; i < 15; i++) {
  if (i === 7 || i === 8) {
    ;
  } else {
    titlesContainers[i].addEventListener('mouseenter', e => {
      title[i].style.transition = 'transform 0.2s'
      title[i].style.transform = 'translateY(-4px)'
      setTimeout(() => {
        title[i].style.transform = 'translateY(0px)'
      }, 200)
    })
  }
}
