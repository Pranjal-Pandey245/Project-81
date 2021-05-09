canvas=document.getElementById("canvas_1");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.rect(153, 140, 430, 200 );
ctx.stroke();

ctx. beginPath();
ctx. strokeStyle ="blue";
ctx. lineWidth = 5;
ctx.arc(300, 210, 40, 0, 2 *Math.PI);
ctx.stroke()

ctx. beginPath();
ctx. strokeStyle ="black";
ctx. lineWidth = 5;
ctx.arc(370, 210, 40, 0, 2 *Math.PI);
ctx.stroke()

ctx. beginPath();
ctx. strokeStyle ="red";
ctx. lineWidth = 5;
ctx.arc(440, 210, 40, 0, 2 *Math.PI);
ctx.stroke()

ctx. beginPath();
ctx. strokeStyle ="yellow";
ctx. lineWidth = 5;
ctx.arc(335, 260, 40, 0, 2 *Math.PI);
ctx.stroke()

ctx. beginPath();
ctx. strokeStyle ="green";
ctx. lineWidth = 5;
ctx.arc(405, 260, 40, 0, 2 *Math.PI);
ctx.stroke()