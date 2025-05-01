

export function alertMsg(message) {
  const div = document.createElement('div')
  let className = 'width: 80%; height:60px; font-size: 22px; line-height:30px;  background-color: #f4abc9;;display:flex;justify-content:center;align-items:center;border-radius:40px'
  div.style = `transition: translate,0.5s;width:100vw; display: flex; justify-content: center;overflow: hidden;position: absolute; left: 0; top: -100px;z-index:10000`
  div.innerHTML = `
  <div style="${className}">
  ${message}
  </div>
  `
  document.querySelector('body').append(div)
  void div.offsetTop
  div.style.transform = 'translateY(120px)'
  setTimeout(() => {

    div.style.transform = 'translateY(0)'
    void div.offsetTop
    setTimeout(() => div.remove(), 500)
  }, 3000)
}