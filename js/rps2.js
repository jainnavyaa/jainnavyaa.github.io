let btnRock, btnPaper, btnScissors, btnGame, btn3Game, btn5Game, btnReplay, btnExit ;

let RndNumber = 0 ;

// variable for text
let notes = "Welcome to My game , plz choose  your option."
let result = ""



function setup()
{
  createCanvas(1300, 500);
 
  btnGame = createButton("Single Game")
  btnGame.position (500, 500)
  btnGame.style("width" , "100px")
  btnGame.mousePressed(showRPS)
  //btnGame.hide()
   
  btn3Game = createButton("Best Of Three")
  btn3Game.position (700, 500)
  btn3Game.style("width" , "100px")
  //btn3Game.hide()
 
  btn5Game = createButton("Best of Fivee")
  btn5Game.position (900, 500)
  btn5Game.style("width" , "100px")
  //btn5Game.hide()
 
  btnRock = createButton("Rock")
  btnRock.position (500, 500)
  btnRock.style("width" , "100px")
  btnRock.mousePressed(CompRock)
  btnRock.hide()
   
  btnPaper = createButton("Paper")
  btnPaper.position (700, 500)
  btnPaper.style("width" , "100px")
  btnPaper.mousePressed(CompPaper)
  btnPaper.hide()
 
  btnScissors = createButton("Scissors")
  btnScissors.position (900, 500)
  btnScissors.style("width" , "100px")
  btnScissors.mousePressed(CompScissors)
  btnScissors.hide()

}

function draw()
{
 
    background(220);
  //  increase the size of the text
 
  text("My Game Rock Paper Scissors", 550, 150)
 
    text(notes, 520, 200);
 
  text (result , 150, 300)
 
  //text (RndNumber , 300, 300)
 
}


function showRPS()
{
  notes = "please choose one out of Rock, paper, scissors"
  btnGame.hide()
  btn3Game.hide()
  btn5Game.hide()
 
  btnScissors.show()
  btnPaper.show()
  btnRock.show()

 
  result = " "
 
  RndNumber = round ( random( 0.5, 3.5) )
 
}

function CompRock()
{

   if(RndNumber == 2)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 3)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }

  hideRPS();
 
}

// crete function for comparing against paper
function CompPaper()
{

   if(RndNumber == 1)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 3)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }
 
  hideRPS();
 
}


// create function for comparing against scissors

function CompScissors()
{
   if(RndNumber == 2)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 1)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }
 
  hideRPS();
 
 
}


function hideRPS()
{
  btnPaper.hide()
  btnRock.hide()
  btnScissors.hide()
 
  notes = ""
 
 
}