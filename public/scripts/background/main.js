chrome.browserAction.onClicked.addListener(tab => {
        chrome.tabs.sendMessage(tab.id, {ask_url: true}, function (response) {
            alert(response.url)
        })
})

