var numberOfSquares=6;
var colors=generateRandomColors(numberOfSquares);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorN");
var messageDisplay=document.querySelector("#message");
var header=document.querySelector("h1");
var resetButton=document.querySelector("#btnColor");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var colorPicked=pickColor();
var gameMode=0;

colorDisplay.textContent=colorPicked;

for(var i=0; i<squares.length; i++)
{
   squares[i].style.backgroundColor=colors[i];
   squares[i].addEventListener("click",function(){
        var selectedColor=this.style.backgroundColor;
        if(selectedColor===colorPicked)
        {
            messageDisplay.textContent="Correct!";
            changeColorsWin(colorPicked);
            header.style.backgroundColor=colorPicked;
            resetButton.textContent="Play again?";
        }
        else 
        {
            this.style.backgroundColor="#330d00";
            messageDisplay.textContent="Try again!";
        }
   });
}

easyBtn.addEventListener("click", function(){
    if(gameMode==0)
    {
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        numberOfSquares=3;
        colors=generateRandomColors(numberOfSquares);
        colorPicked=pickColor();
        colorDisplay.textContent=colorPicked;
        for(var i=0; i<squares.length; i++)
        {
            if(colors[i])
            {
             squares[i].style.backgroundColor=colors[i];
            }
            else
            {
                squares[i].style.display="none";
            }
            
        }
        messageDisplay.textContent="";
        gameMode=1;
        header.style.backgroundColor="#ff9933";
    }
});

hardBtn.addEventListener("click", function(){
    if(gameMode==1)
    {
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        numberOfSquares=6;
        colors=generateRandomColors(numberOfSquares);
        colorPicked=pickColor();
        colorDisplay.textContent=colorPicked;
        for(var i=0; i<squares.length; i++)
        {
            squares[i].style.backgroundColor=colors[i]; 
            squares[i].style.display="block";
        }
        messageDisplay.textContent="";
        gameMode=0;
        header.style.backgroundColor="#ff9933";
    }
});

resetButton.addEventListener("click",function(){
    colors=generateRandomColors(numberOfSquares);
    colorPicked=pickColor();
    colorDisplay.textContent=colorPicked;
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    resetButton.textContent="New colors";
    header.style.backgroundColor="#ff9933";
    messageDisplay.textContent="";
});

function changeColorsWin(color)
{
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor=color;

    }
}

function pickColor()
{
    var random= Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}