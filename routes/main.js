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
            ilhansykes : '⚡ *SYKES BOT UPDATE* ⚡\n```Version : 7.0 beta```\n```Update Date : Monday, 10 Oktober 2021 | 23:00 WIB```\n```Total Features : 265 ```\n```Error Features : 0 ```\n\n╭─────≽「 *WHATS NEW?* 」\n┴\n\n┠≽ [NEW] BAN & UNBAN USER\n┠≽ [NEW] CUSTOM TEXT WELCOME\n┠≽ [NEW] DOWNLOADER V2\n┠≽ [NEW] VOTING GROUP\n┠≽ [NEW] COGAN & CECAN\n┠≽ [NEW] DARKJOKES & MEME V2\n┠≽ [NEW] TOURL\n┠≽ [NEW] REVOKE LINK GROUP\n┠≽ [NEW] LISTVN\n┠≽ [NEW] MENU LOCATION\n┠≽ [NEW] MEME GENERATOR\n┠≽ [NEW] AFK\n┠≽ [NEW] BUG STORY\n┠≽ [NEW] STORYWA\n┠≽ [NEW] ANTI DELETE\n┠≽ [NEW] ISLAM MENU\n┠≽ [NEW] RESTART & SHUTDOWN\n┠≽ [NEW] SEMOJI\n┠≽ [NEW] ANYMORE.\n┬\n╰────────────────────────\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭─────≽「 *INFORMATION* 」\n┴\n┠≽ Jika menemukan bug silahkan lapor!\n┠≽ Untuk Sewa BOT silahkan chat owner!\n┬\n╰────────────────────────\n\n*CARA LAPOR BUG?*\nketik #laporbug [text] atau #report [text]\nContoh :\n#laporbug kak fitur pinterest ga respon!\n\n\n\nArigathanks :))\n\n~ HannSykes',
            thumb : 'https://h.top4top.io/p_2142hy6ec0.png',
            message : '────「 *MESSAGE* 」────\n\nSCRIPT BOT INI GRATIS!\n\nScript Bot ini bisa kalian dapatkan di channel youtube HannSykes!\natau kalian bisa langsung klik link dibawah ini.\n\nhttps://m.youtube.com/c/HannSykes\n\n────「 *SYKES BOT V7* 」────',
            youtube : 'HannSykes',
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
            version : '7.0 Science',
            date : '13-11-2021',
            link : '_Tes.com_',
            youtube : 'HannSykes',
            instagram : '@muhmdilhan_'
        }
    }
    res.json(configg)
})

module.exports = router
