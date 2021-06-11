canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");

nasa_images_mars_array=["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);

rover_width=100;
rover_height=90;



rover_x=10;
rover_y=10;


img_background=nasa_images_mars_array[random_number];
console.log("background_img="+img_background);
rover_img="rover.png";

function add()
{
    put_background_image= new Image();
    put_background_image.onload= uploadBackground;
    put_background_image.src=img_background;

    put_background_img_rover=new Image();
    put_background_img_rover.onload=uploadimgrover;
    put_background_img_rover.src=rover_img;

}
function uploadBackground()
{
    ctx.drawImage(put_background_image,0,0, canvas.width,canvas.height);
}

function uploadimgrover()
{
    ctx.drawImage(put_background_img_rover,rover_x,rover_y,rover_width,rover_height );

}
window.addEventListener("keydown" ,my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log("keyPressed");

    if(keyPressed == '38') {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
     
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '93')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if (rover_y>=0)
    {
        rover_y=rover_y-10;
    console.log("When up arrow is pressed, x="+rover_x+"y="+rover_y);
    uploadBackground();
    uploadimgrover();
    }
}

function down()
{
    if (rover_y<=500)
    {      
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadimgrover();
    }
}

function right()
{
    if (rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x=" +rover_x+ "y=" +rover_y);
        uploadBackground();
        uploadimgrover();
    }
}

function left()
{
    if(rover_x >=0)
    {   
        rover_x=rover_x-10;
        console.log("When left arrow is presse, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadimgrover();

    }
}

