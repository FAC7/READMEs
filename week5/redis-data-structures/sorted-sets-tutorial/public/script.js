var req = new XMLHttpRequest();

function postSortedSet(score, name) {
    request.onreadystatechange = function() {
        if (req.status === 200 & req.readyState === 4) {
            console.log(req.responseText);

        }
    };
    req.open('POST', '/add?' + 'score=' + score + '&name=' + name);
    req.send();
}
