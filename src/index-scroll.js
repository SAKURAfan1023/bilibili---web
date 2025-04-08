

//试图采用touchmove的形式来解决页面左右滑动问题，因为e.preventDefault报错原因，无法动态阻止滑动，遗憾败北
//css方法有效 html {
// touch-action: none;
// touch-action: pan-x;
// }



// let startX = 0, startY = 0

// document.addEventListener('touchstart', function (e) {
//   startX = e.touches[0].clientX
//   startY = e.touches[0].pageY
// })

// document.addEventListener('touchmove', function (e) {
//   let endX = e.touches[0].clientX
//   let endY = e.touches[0].pageY
//   if (Math.abs(endX - startX) < Math.abs(endY - startY)) {

//   } else {
//     e.preventDefault()
//   }
// }, { passive: false });


// let tempX = 0, tempY = 0

// document.addEventListener('touchmove', function (e) {
//   let X = e.touches[0].clientX
//   let Y = e.touches[0].clientY
//   if (Math.abs(tempX - X) > 0) {
//     e.preventDefault()
//   }
//   tempX = X
//   tempY = Y
// }, { passive: false })
