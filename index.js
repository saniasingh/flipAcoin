var coin = document.getElementById('coin');
var button = document.getElementById('button');
var result = document.getElementById('result');
var headsCounter = document.getElementById('headsCounter');
var TailsCounter = document.getElementById('TailsCounter');
var featureCoin = document.getElementById('featureCoin');
var heads = 0;
var tails = 0;

function coinToss() {
    var x = Math.floor(Math.random() * 2);
    if (x === 0) {
        coin.innerHTML = '<img class="heads animate-coin" style="max-width=10%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4pFSUGSHvQsXR0LZgiD2lOsrq8jbOZf2eGI0rxF26nY5cijTAZU9TWQXxUiEZ_1J_mQ&usqp=CAU" />';  
        heads += 1;
        result.innerHTML = '<h2> You Got Heads! </h2>';
        headsCounter.innerHTML = '<h3> Heads:<span> ' + heads + '</span></h3>';
    } else {
        coin.innerHTML = '<img class="tails animate-coin" style="max-width=10%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD36hN0oYpsV35YP4YeXhYxhO1-Il-C6VXTGRGSVKUfPyWqeja9GUnAGlhgUq7LP5H0Q4&usqp=CAU" />';
        tails += 1;
        result.innerHTML = '<h2> You Got Tails! </h2>';
        TailsCounter.innerHTML = '<h3> Tails:<span> ' + tails + '</span></h3>';
    }

}

button.onclick = function() {
    coinToss();
    featureCoin.remove();
}