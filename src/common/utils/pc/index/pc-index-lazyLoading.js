import { render } from "./pc-index-videoCardsRender.js"
import { smLoadRender } from "./pc-index-videoCardsRender.js"
import { lgLoadRender } from "./pc-index-videoCardsRender.js"
import { ScreenAdapter } from '../pc-common/breakPointMedia.js'

const loadingImg = document.querySelector('.pc-index-videoCards-lazyLoading')
let renderAc = false


const adapter = new ScreenAdapter()

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '50px 0px',
    threshold: 1
  }

  const observer = new IntersectionObserver(([entry]) => {
    if (renderAc) return
    renderAc = true

    if (entry.isIntersecting) {
      adapter.onBreakpointChange((newBreakpoint) => {
        if (newBreakpoint === 'sm' || newBreakpoint === 'md' || newBreakpoint === 'lg') {
          // 移动设备加载轻量级资源
          smLoadRender()
          smLoadRender()
        } else {
          // 桌面设备加载完整资源
          lgLoadRender()
          lgLoadRender()
        }
      });
    }

    setTimeout(() => {
      renderAc = false
    }, 500);

  }, observerOptions)



  observer.observe(loadingImg)
})