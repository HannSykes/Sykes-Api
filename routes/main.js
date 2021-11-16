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
            ilhansykes : '⚡ SYKES BOT UPDATE ⚡\n```Version : 7.1 Science```\n```Update Date : Wed, 16 November 2021 | 16:37 WIB```\n```Total Features : 218```\n```Error Features : 1```\n\n╭─────≽「 WHATS NEW? 」\n┴\n┠≽ [NEW] BAN & UNBAN USER\n┠≽ [NEW] CUSTOM TEXT WELCOME\n┠≽ [NEW] DOWNLOADER V2\n┠≽ [NEW] VOTING GROUP\n┠≽ [NEW] COGAN & CECAN\n┠≽ [NEW] DARKJOKES & MEME V2\n┠≽ [NEW] TOURL\n┠≽ [NEW] REVOKE LINK GROUP\n┠≽ [NEW] LISTVN\n┠≽ [NEW] MENU LOCATION\n┠≽ [NEW] MEME GENERATOR\n┠≽ [NEW] AFK\n┠≽ [NEW] BUG STORY\n┠≽ [NEW] STORYWA\n┠≽ [NEW] ANTI DELETE\n┠≽ [NEW] ISLAM MENU\n┠≽ [NEW] RESTART & SHUTDOWN\n┠≽ [NEW] SEMOJI\n┠≽ [NEW] MAKER MENU\n┠≽ [NEW] GAME MENU\n┠≽ [NEW] STICKER CMD\n┠≽ [NEW] TOAUDIO\n┠≽ [NEW] ANIME MENU\n┠≽ [NEW] ANYMORE.\n┬\n╰────────────────────────\n\n͏͏͏͏͏͏͏͏͏͏͏͏╭─────≽「 INFORMATION 」\n┴\n┠≽ Jika menemukan bug silahkan lapor!\n┠≽ Untuk Sewa BOT silahkan chat owner!\n┬\n╰────────────────────────\n\nCARA LAPOR BUG?\nketik #laporbug [text] atau #report [text]\nContoh :\n#laporbug kak fitur pinterest ga respon!\n\n\n\nArigathanks :))\n~ HannSykes',
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
            version : '7.1 Science',
            date : '16-11-2021',
            link : '_https://youtu.be/MtZl9KwUmQc_',
            youtube : 'HannSykes',
            instagram : '@muhmdilhan_'
        }
    }
    res.json(configg)
})

module.exports = router
