function canvasLine() {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(35, 65);
    ctx.lineTo(265, 65);
    ctx.stroke();
}