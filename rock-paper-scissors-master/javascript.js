//rules open Close
let rules = document.querySelector('.item-btn-rules');
let gameImg = document.querySelector('.gameRules')
let closeImg = document.querySelector('.close-btn')

rules.addEventListener("click" , 
function open() {
   console.log('click')
   if (gameImg.style.display === "none") {
      gameImg.style.display = "";
      
   }
}
)

closeImg.addEventListener("click" , 
function close() {

  if (gameImg.style.display === "") {
     gameImg.style.display = "none";
  }
}
)
/////////////////////////////////////////////
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let rock = document.querySelector('.rock')

let AIarray = [paper , scissors , rock]




//trigger dumb AI to select from array

//paper beat rock beat scissor beat paper






paper.addEventListener('click' , function paperA(){
   let randomElement = AIarray[Math.floor(Math.random() * AIarray.length)];
    if (randomElement === paper) {
       
       console.log(randomElement)
       console.log("DRAW!!!")
       
    }
     if (randomElement === scissors) {
       console.log(randomElement)
       console.log('You LOST')
       
    }
     if (randomElement === rock) {
       console.log(randomElement)
       console.log('you win') 
       
    }  
    })

scissors.addEventListener('click' , function scissorsA(){ 
   let randomElement = AIarray[Math.floor(Math.random() * AIarray.length)];
   if (randomElement === scissors) {
       console.log(randomElement)
       console.log("DRAW")
       
    }
     if (randomElement === rock) {
       console.log(randomElement)
       console.log('You LOAST')
    }
     if (randomElement === paper) {
       console.log(randomElement)
       console.log('you WON');
    } 
    
})
rock.addEventListener('click' , function rockA(){
   let randomElement = AIarray[Math.floor(Math.random() * AIarray.length)];
   if (randomElement === rock) {
       console.log(randomElement)
       console.log("DRAW!!!")
   } 
     if (randomElement === paper) {
       console.log(randomElement)
       console.log('You LOST')
     } 
     if (randomElement === scissors) {
       console.log(randomElement)
       console.log('you win')
      } 
}
)


