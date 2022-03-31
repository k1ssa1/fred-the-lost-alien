import platform from '../img/platform.png'
import hills from '../img/hills.png'
import bg from '../img/bg.png'
import platformSmallTall from '../img/platformSmallTall.png'
import alien from '../img/alien.png'

console.log(platform)
const canvas = document.querySelector('canvas');

// creating the context
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 570

// adding gravity
const gravity = 2 

// creating the class Player
class Player{
    constructor(){
      this.speed = 8
        this.position = {
            x: 100,
            y:100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.image = createImage(alien)
        this.width = 80
        this.height = 90
    }

// method that defines the player
    draw(){
      c.drawImage(this.image , this.position.x, this.position.y, this.width,this.height)
    }

// method that updates the position of the player 

    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y +this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
    }
}


// creating a class Platform

class Platform{
    constructor({x,y, image}){
        this.position = {
           x,
           y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw(){
        c.drawImage(this.image , this.position.x, this.position.y)
    }
}

class GenericObject{
  constructor({x,y, image}){
      this.position = {
         x,
         y
      }
      this.image = image
      this.width = image.width
      this.height = image.height
  }

  draw(){
      c.drawImage(this.image , this.position.x, this.position.y)
  }
}

function createImage(imageSrc){
  const image = new Image()
  image.src = imageSrc
  return image
}


let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)

// creating an instance of the player
let player = new Player();

// creating mutiple platforms instances 
let platforms = []

let genericObject = []



const keys ={
    right:{
        pressed: false,
    },
    left:{
        pressed: false,
    }
}


// adding a variable for the win scenario win scenario
let scrollOffset = 0


function init(){

 platformImage = createImage(platform)


// creating an instance of the player
 player = new Player();

// creating mutiple platforms instances 
 platforms = [new Platform({
  x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width ,y:270, image: createImage(platformSmallTall)
})
   ,new Platform({
     x:-1, y:470, image: platformImage
}), new Platform({
    x: platformImage.width - 3 ,y:470, image: platformImage
}), new Platform({
  x: platformImage.width * 2 + 100 ,y:470, image: platformImage
}), new Platform({
  x: platformImage.width * 3 + 300 ,y:470, image: platformImage
}), new Platform({
  x: platformImage.width * 4 + 300 - 2 ,y:470, image: platformImage
}), new Platform({
  x: platformImage.width * 5 + 700 - 2 ,y:470, image: platformImage
})]

 genericObject = [
  new GenericObject({
    x: -1, y: -1, image: createImage(bg)
  }), 
  new GenericObject({
    x: -1, y: -1, image: createImage(hills)
  })
]



// adding a variable for the win scenario win scenario
 scrollOffset = 0

}

// creating an animation
function animate(){
     requestAnimationFrame(animate)
     c.fillStyle= 'white'
     c.fillRect(0,0,canvas.width,canvas.height)

    genericObject.forEach(genericObject => {
      genericObject.draw()
    })

     platforms.forEach(platform => {
         platform.draw()
     })
     player.update()
     
     if(keys.right.pressed && player.position.x < 400){
        player.velocity.x = player.speed
     }
     else if(
       (keys.left.pressed && player.position.x > 100) || 
       (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
       ){
         player.velocity.x = -player.speed
     }
     else {
         player.velocity.x = 0
         if(keys.right.pressed){
            scrollOffset += player.speed
            platforms.forEach(platform => {
                platform.position.x -= player.speed
            })

            // creating the parallax scroll
            genericObject.forEach(genericObject => {
              genericObject.position.x -= player.speed * .66
            })
         }else if(keys.left.pressed && scrollOffset > 0){
            scrollOffset -= player.speed
            platforms.forEach(platform => {
                platform.position.x += player.speed
            })

            // creating the parallax scroll
            genericObject.forEach(genericObject => {
              genericObject.position.x += 3 * .66
            })
             
         }
     }

     console.log(scrollOffset)

     // adding platform colision detection
     platforms.forEach(platform => {
     if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){
         player.velocity.y = 0
    }
    })

    // adding the condition for the win scenario
    if(scrollOffset >  platformImage.width * 5 + 700 - 2){
        window.alert("You win")
        init()
    }

 

    // adding the lose condition
    if(player.position.y > canvas.height){
      window.alert("Oh no you've lost, but try again")
      init()
    }
}
   
init()
animate()
  

// adding event listeners

// adding control with the keyboard

addEventListener('keydown', ({ keyCode }) => {
    console.log(keyCode)
    switch(keyCode) {
        case 38: 
            console.log('up')
            player.velocity.y -= 25
            break

        case 37: 
            console.log('left')
            keys.left.pressed =true
            break

        case 39: 
            console.log('right')
            keys.right.pressed =true
            break

        case 40: 
            console.log('down')
            break
    }

   //  console.log(keys.right.pressed)
   //  console.log(keys.left.pressed)
})

addEventListener('keyup', ({ keyCode }) => {
    console.log(keyCode)
    switch(keyCode) {
        case 38: 
            console.log('up')
            break

        case 37: 
            console.log('left')
            keys.left.pressed =false
            break

        case 39: 
            console.log('right')
            keys.right.pressed =false
            break

        case 40: 
            console.log('down')
            break
    }

    
 //   console.log(keys.right.pressed)
 //    console.log(keys.left.pressed)
})