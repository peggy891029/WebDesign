var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
canvas.width= 500;
canvas.height= 500;
ctx.fillStyle= "#fff6d1";
ctx.fillRect(0, 0, 500, 500)

ctx.beginPath()
ctx.fillStyle= "#39afdd";
ctx.moveTo(100, 0)
ctx.lineTo(300, 100)
ctx.lineTo(100, 300)
ctx.closePath()
ctx.fill()

ctx.beginPath()
ctx.fillStyle= "#ffd800";
ctx.moveTo(100, 100)
ctx.lineTo(300, 100)
ctx.lineTo(100, 300)
ctx.closePath()
ctx.fill()
