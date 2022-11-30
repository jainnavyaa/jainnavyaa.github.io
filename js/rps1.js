//global variables

let RndNumber
let userChoice

function setup() {
  createCanvas(1300, 500);
 
  RndNumber = round ( random( 0.5, 3.5) )
 
  userChoice = createInput('')
  userChoice.position(390, 350)
}

function draw() {
  background(220);
 
  frameRate(2) ;
  textSize(40)
  text('Choose a number 1: Rock , 2:Paper , 3:Scissors ', 230, 125)
  textSize(80)
 //text(RndNumber, 50, 100)
 // text (userChoice.value(), 150, 250)
 
  let UC = userChoice.value();
 
  if(RndNumber == 1)
    {
      if(UC == 2)
        {
          text('You Won !!', 400, 350)
        }
      else if (UC == 3)
        {
          text('Computer Won !!', 150, 350)
        }
      else
        {
          text("It's Tie", 150, 350)
        }  
    }
  else if (RndNumber == 2)
    {
       if(UC == 3)
        {
          text('You Won !!', 150, 350)
        }
      else if (UC == 1)
        {
          text('Computer Won !!', 150, 350)
        }
      else
        {
          text("It's Tie", 150, 350)
        }
     
    }
      else if(RndNumber == 3)
    {
      if(UC == 2)
        {
          text('Computor Won !!', 150, 350)
        }
      else if (UC == 3)
        {
          text('its a tie!', 150, 350)
        }
      else
        {
          text("you won!", 150, 350)
        }  
    }
        
 
  // third case for RndNumber == 3 is pending complete it 
 
 
 
 
}
