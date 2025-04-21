window.addEventListener('scroll', () => {
  let scrollHight = document.documentElement.scrollTop
  if (scrollHight > 80) {
    document.querySelector('.pc-index-fixedHeader').display = ' '
    document.querySelector('.pc-index-fixedHeader').style.top = '0px'
  } else {
    document.querySelector('.pc-index-fixedHeader').display = 'none'
    document.querySelector('.pc-index-fixedHeader').style.top = '-64px'
  }

})
