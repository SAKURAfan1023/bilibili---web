

export function alertMsg(message) {
  const div = document.createElement('div')
  div.innerHTML = `
  <div style="width: 80%; fontSize: 18px; lineHight:30px; display: position; left: 0; top: 0; backgroundColor: pink">${message}</div>
  `
}