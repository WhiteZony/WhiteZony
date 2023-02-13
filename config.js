/**
 * Create By WhiteZony
 * Contact Me on wa.me/94760260530
 * Follow https://github.com/WhiteZony
 */

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
    zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
    'https://api.zahwazein.xyz': 'Your Key',
}

// Other
global.owner = ['94760260530, 94787804171']
global.premium = ['94760260530']
global.packname = 'Zbot'
global.author = 'MD-WhatsApp Bot'
global.sessionName = 'Zbot'
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})