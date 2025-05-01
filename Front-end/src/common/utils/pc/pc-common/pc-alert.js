import img from '@/assets/images/logo/close.a35a1809.svg'

export function alertMsg(message) {
  const div = document.createElement('div')
  let className1 = 'width: 80%; height:60px; font-size: 22px; line-height:30px;  background-color: #f4abc9;;display:flex;justify-content:center;align-items:center;border-radius:40px'
  let className2 = `cursor:pointer;position: absolute; top:13px;right:212px;background-image:url(${img});width: 32px; height: 32px;`
  div.style = `transition: translate,0.5s;width:100vw; display: flex; justify-content: center;overflow: hidden;position: absolute; left: 0; top: -100px;z-index:10000`
  div.innerHTML = `
  <div style="${className1}">
    <div style="${className2}" class='alert-close-button'></div>
  ${message}
  </div>
  `
  requestAnimationFrame(() => {
    document.querySelector('.alert-close-button').addEventListener('click', () => {
      div.style.transform = 'translateY(0)'
    })
  })

  document.querySelector('body').append(div)
  void div.offsetTop
  div.style.transform = 'translateY(120px)'
  setTimeout(() => {

    div.style.transform = 'translateY(0)'
    void div.offsetTop
    setTimeout(() => div.remove(), 500)
  }, 3000)
}