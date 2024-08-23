// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/CXEOvSQYghqB066BuRrdrO'
global.ig = '@zaky.store0' // ubah aja
global.email = 'zakystore002@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'zaky store' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = 'https://server.ranking.my.id' // Isi Domain Lu
global.apikey2 = 'ptla_c8Ppyw9IUdrhhfkLitpAOfoKAB85fMJTghafAsZTV9U' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_H2TnSeWlRhEF96aNMx94BhyP6KKjQiKhfNCTlVFUkKP' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
//=================================================//
global.owner = ['62895329704678'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'hw v22' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'zakystore' // ubah aja ini nama sticker
global.author = 'zakystore' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})