function home (req,res){
    res.end('you are home');
}

function other1(req,res){
    var ipsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    res.end(ipsum);
}

function notFound (req,res){
    res.write('You are mistaken.\n');
    res.end('this is something else entirely. I am super rude. Bye');
}

module.exports = {
    'home'      : home,
    'other1'    : other1,
    'notFound'  : notFound
}
