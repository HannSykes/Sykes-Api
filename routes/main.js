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

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            ilhansykes : '⚡ *SYKES BOT UPDATE* ⚡
```Version : 7.0 beta```
```Update Date : Monday, 10 Oktober 2021 | 23:00 WIB```
```Total Features : 265 ```
```Error Features : 0 ```

╭─────≽「 *WHATS NEW?* 」
┴
┠≽ [NEW] BAN & UNBAN USER
┠≽ [NEW] CUSTOM TEXT WELCOME
┠≽ [NEW] PLAY AND YT DOWNLOAD V2
┠≽ [NEW] VOTING GROUP
┠≽ [NEW] COGAN & CECAN
┠≽ [NEW] DARKJOKES & MEME V2
┠≽ [NEW] TOURL
┠≽ [NEW] REVOKE LINK GROUP
┠≽ [NEW] LISTVN
┠≽ [NEW] MENU LOCATION
┠≽ [NEW] MEME GENERATOR
┠≽ [NEW] AFK
┠≽ [NEW] BUG STORY
┠≽ [NEW] STORYWA
┠≽ [NEW] ANTI DELETE
┠≽ [NEW] ANYMORE.
┬
╰────────────────────────

͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭─────≽「 *INFORMATION* 」
┴
┠≽ Jika menemukan bug silahkan lapor ya!
┠≽ Untuk Sewa BOT silahkan chat owner ya!
┬
╰────────────────────────

*CARA LAPOR BUG?*
ketik #laporbug [text] atau #report [text]
Contoh :
#laporbug kak fitur pinterest ga respon!



Arigathanks :))

~ HannSykes',
            youtube : 'HannSykes'
        }
    }
    res.json(config)
})

module.exports = router
