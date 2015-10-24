/* 
 * Receive messages to track how many Kardashians have been blocked
 */

//document.addEventListener('DOMContentLoaded',
//        function() {
//            console.log('come on, do something!');
//
//            chrome.tabs.query({active: true, currentWindow: true},
//            function(tabs) {
//                chrome.tabs.sendMessage(tabs[0].id,
//                        {greeting: "hello from the kardashians"},
//                function(response) {
//                    document.getElementById('message').innerHTML('response was: ' + response['farewell']);
//                });
//            });
//
//        });

function requestCount() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendMessage(
                tab.id,
                {greeting: 'yo yo yo'},
        handler
                );
    });
}
function handler(response) {
    document.getElementById('count').innerHTML = response.count;
}

window.onload = function() {
    document.getElementById("button").onclick = requestCount;
    setTimeout(requestCount, 200);
    setInterval(requestCount, 5000);
};
