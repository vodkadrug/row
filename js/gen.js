var createDiv = document.createElement('div');
var cs = [
    '#555',
    '#87cefa',
    '#ccc',
    '#fadadd'
];

function randomize() {
    return Math.floor(Math.random() * (4))
}


var field = {
    appear: function() {
        document.getElementById('myDiv').appendChild(document.createElement('div')).style.backgroundColor = cs[randomize()];
    }
}
function run() {
    generator();
}

function generator() {
    for (var i = 0; i < 65; i++) {
        field.appear();
    }
}