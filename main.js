function yesClick() {
prompt("Nói lý do cậu thích tớ đi :3 ");
    alert("Tớ biết ngay mà. chiều nay tắm rửa sạch sẽ nằm ráo nước đi nhé. Tớ qua dẫn đi chơi.!")
}

function noClick() {
    let x = window.innerWidth;
    let y = window.innerHeight;
    let button = document.getElementById("not") ;
    button.style.left = Math.round(x*Math.random()) + "px";
    button.style.top = Math.round(y*Math.random()) * "px";
}