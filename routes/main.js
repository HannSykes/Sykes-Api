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
            ilhansykes : '⚡ *SYKES BOT UPDATE* ⚡\n```Version : 7.0 beta```\n```Update Date : Monday, 10 Oktober 2021 | 23:00 WIB```\n```Total Features : 265 ```\n```Error Features : 0 ```\n\n╭─────≽「 *WHATS NEW?* 」\n┴\n\n┠≽ [NEW] BAN & UNBAN USER\n┠≽ [NEW] CUSTOM TEXT WELCOME\n┠≽ [NEW] PLAY AND YT DOWNLOAD V2\n┠≽ [NEW] VOTING GROUP\n┠≽ [NEW] COGAN & CECAN\n┠≽ [NEW] DARKJOKES & MEME V2\n┠≽ [NEW] TOURL\n┠≽ [NEW] REVOKE LINK GROUP\n┠≽ [NEW] LISTVN\n┠≽ [NEW] MENU LOCATION\n┠≽ [NEW] MEME GENERATOR\n┠≽ [NEW] AFK\n┠≽ [NEW] BUG STORY\n┠≽ [NEW] STORYWA\n┠≽ [NEW] ANTI DELETE\n┠≽ [NEW] ANYMORE.\n┬\n╰────────────────────────\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭─────≽「 *INFORMATION* 」\n┴\n┠≽ Jika menemukan bug silahkan lapor!\n┠≽ Untuk Sewa BOT silahkan chat owner!\n┬\n╰────────────────────────\n\n*CARA LAPOR BUG?*\nketik #laporbug [text] atau #report [text]\nContoh :\n#laporbug kak fitur pinterest ga respon!\n\n\n\nArigathanks :))\n\n~ HannSykes',
            thumb : 'https://a.top4top.io/p_2137526ni3.jpg',
            message : '────「 *MESSAGE FOR USER* 」────\n\nNO MESSAGE FROM THE CREATOR!\nPLEASE CHECK AGAIN LATER.\n\n────「 *SYKES BOT V7* 」────',
            youtube : 'HannSykes',
            instagram : '@muhmdilhan_'
        }
    }
    res.json(config)
})

module.exports = router
