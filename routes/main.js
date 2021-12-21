__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('http://ilhansykes.6te.net/')
})

router.get('/hannsykes', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api/ilhanechaaaaaaaaa', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/api/ilhanechaaaaa', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/infoupdate', (req, res) => {
    config = {
        status: true,
        result: {
            ilhansykes : 'SCRIPT BOT INI GRATIS!\n\nScript Bot ini bisa kalian dapatkan di channel youtube HannSykes!\natau kalian bisa langsung klik link dibawah ini.\n\nhttps://m.youtube.com/c/HannSykes',
            thumb : 'https://b.top4top.io/p_2154rv9zm0.png',
            message : '────「 *MESSAGE* 」────\n\nJika ada fitur yang error silahkan lapor!\n\n────「 *SYKES BOT V9* 」────',
            youtube : 'HannSykes',
            req: 'https://my.forms.app/form/618e50598c8fa556a196c420',
            reqimg: 'https://f.top4top.io/p_214348q1q0.png',
            instagram : '@muhmdilhan_'
        }
    }
    res.json(config)
})

router.get('/cekupdate', (req, res) => {
    configg = {
        status: true,
        result: {
            thumb : 'https://c.top4top.io/p_214399h8y0.png',
            version : '9.0 Science',
            date : '03-12-2021',
            link : '_https://youtu.be/K8AyNFgqk38_',
            grupwa : 'https://chat.whatsapp.com/JnJZlnxmTnR5mpDDlbmgKR',
            youtube : 'HannSykes',
            instagram : '@muhmdilhan_'
        }
    }
    res.json(configg)
})

module.exports = router
