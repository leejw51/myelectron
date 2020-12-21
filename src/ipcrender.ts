const { ipcRenderer } = require('electron')


export function test_ipcrender() {

console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // "pong"이 출력됩니다.

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // "pong"이 출력됩니다.
})
ipcRenderer.send('asynchronous-message', 'ping')
}