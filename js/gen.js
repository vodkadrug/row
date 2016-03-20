var cs = [
    '#000',
    '#87cefa',
    '#ccc',
    '#face45'
]

function randomize() {
    return Math.floor(Math.random() * (4))
}

function del() {
    $('.box div').click(function() {
        $(this).remove();
    });
}

var field = {
    appear: function() {
        document.querySelectorAll('.box')[0].appendChild(document.createElement('div'));
        console.log(document.querySelectorAll('.box div'))
    }
}
function run() {
    generator();
}

function generator() {
    for (var i = 0; i < 64; i++) {
        field.appear();
    }
}
