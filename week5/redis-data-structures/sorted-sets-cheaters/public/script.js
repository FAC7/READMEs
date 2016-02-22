var req = new XMLHttpRequest();

function postSortedSet(score, name) {
    req.onreadystatechange = function() {
        if (req.status === 200 & req.readyState === 4) {
            console.log(req.responseText);
        }
    };
    req.open('POST', '/add?' + 'score=' + score + '&name=' + name);
    req.send();
}

(function displayData() {
    req.onreadystatechange = function() {
        if (req.status === 200 & req.readyState === 4) {
            var data = JSON.parse(req.responseText);
            appendData(data);
        }
    };
    req.open('GET', '/display');
    req.send();
})();

document.getElementById('button').addEventListener('click', function () {
    var name = document.getElementById('contestant').value;
    var score = document.getElementById('episode').value;
    postSortedSet(score, name);
});

function appendData(data) {
    var contestants = data;
    var ol = document.createElement('ol');
    data.forEach(function(item) {
        var li = document.createElement('li');
        li.innerHTML = item;
        ol.appendChild(li);
    });
    document.getElementById('results').appendChild(ol);
}
