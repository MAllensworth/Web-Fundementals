console.log("page loading...");

var likes = [3, 5, 8];
var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id]  +  " petting(s)";
}

function message() {
    alert('You are looking for a dog!');
    var message2='You are looking for a cat!'
}


function hide(element) {
    element.remove();
}