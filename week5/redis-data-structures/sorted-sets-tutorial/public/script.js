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

function displayData() {
    req.onreadystatechange = function() {
        if (req.status === 200 & req.readyState === 4) {
            console.log(req.responseText);
            // now do what you like here with the data, go wild be creative!
        }
    };
    req.open('GET', '/display');
    req.send();
}
