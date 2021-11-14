__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
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
            ilhansykes : 'SEDANG DALAM PEMBUATAN CHANGELOG!',
            thumb : 'https://h.top4top.io/p_2142hy6ec0.png',
            message : '────「 *MESSAGE* 」────\n\nSCRIPT BOT INI GRATIS!\n\nScript Bot ini bisa kalian dapatkan di channel youtube HannSykes!\natau kalian bisa langsung klik link dibawah ini.\n\nhttps://m.youtube.com/c/HannSykes\n\n────「 *SYKES BOT V7* 」────',
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
            version : '```7.0 Science```',
            date : '```13-11-2021```',
            link : '_https://youtu.be/TwQntGx7mhM_',
            youtube : 'HannSykes',
            instagram : '@muhmdilhan_'
        }
    }
    res.json(configg)
})

module.exports = router
