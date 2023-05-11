const gitalk = new Gitalk({
    clientID: '1edcf51120d78d14fafb',
    clientSecret: '2709738244ad1c73a3a9b17383995bc4fe983c89',
    repo: 'pinglun.github.io',      // The repository of store comments,
    owner: '211xxa',
    admin: ['pinglun.github.io'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')