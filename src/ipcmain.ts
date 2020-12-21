// main 프로세스안에서
const { ipcMain } = require('electron')


export function setup_ipcmain() {
    console.log("ipcmain setup=============")
    ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg) // "ping" 출력
    event.reply('asynchronous-reply', 'pong')
    })

    ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg) // "ping" 출력
    event.returnValue = 'pong'
    })

}