chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('steamcdn-a.akamaihd.net', 'steamcdn.addones.org');
        url = url.replace('steamstore-a.akamaihd.net', 'steamcdn.addones.org');
        url = url.replace('steamcommunity-a.akamaihd.net', 'steamcdn.addones.org');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://steamcdn-a.akamaihd.net/steam/*",
            "*://steamcdn-a.akamaihd.net/steamcommunity/*",            
            "*://steamstore-a.akamaihd.net/public/shared/images/*",
            "*://steamstore-a.akamaihd.net/public/images/*",
            "*://steamcommunity-a.akamaihd.net/public/shared/images/*",
            "*://steamcommunity-a.akamaihd.net/public/images/*",
            "*://steamcommunity-a.akamaihd.net/economy/image/*"
        ]
    },
    ["blocking"]
);