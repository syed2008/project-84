canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 90;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car_x = 10;
car_y = 10;

car1_width = 100;
car1_height = 90;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car1_x = 10;
car1_y = 100;


function add(){
    background_imgTag = new Image;
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;
    car_imgTag = new Image;
    car_imgTag.onload = uploadcar;
    car_imgTag.src = car_image;
}
function add(){
    background_imgTag = new Image;
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;
    car1_imgTag = new Image;
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    
    }
    function uploadbackground(){
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    }
        
    
    function uploadcar(){
        ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
        
        }
        function uploadcar1(){
            ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
            
            }
     
        window.addEventListener("keydown", my_keydown);
        function my_keydown(e){
         keyPressed = e.keyCode;
         console.log(keyPressed);
         if(keyPressed == '38'){
            //_up();
             console.log("up arrow key");
         }
         if(keyPressed == '40'){
             //_down();
            console.log("down arrow key");
        }
        if(keyPressed == '37'){
           //_left();
            console.log("left arrow key");
        }
        if(keyPressed == '39'){
            //_right();
            console.log("right arrow key");
        }
        } 
       