$(".btn").click(function(event){
        if (!gameState){
                return;
        }

        if (gamePattern[userClickNo] === event.target.id){
                switch(event.target.id){
                        case "red":
                                $(".red").addClass("pressed");
                                setTimeout(function(){$(".red").removeClass("pressed")}, 100);
                                var sound = new Audio("sounds/red.mp3");
                                sound.play();
                                break;
                        case "green":
                                $(".green").addClass("pressed");
                                setTimeout(function(){$(".green").removeClass("pressed")}, 100);
                                var sound = new Audio("sounds/green.mp3");
                                sound.play();
                                break;
                        case "yellow":
                                $(".yellow").addClass("pressed");
                                setTimeout(function(){$(".yellow").removeClass("pressed")}, 100);
                                var sound = new Audio("sounds/yellow.mp3");
                                sound.play();
                                break;
                        case "blue":
                                $(".blue").addClass("pressed");
                                setTimeout(function(){$(".blue").removeClass("pressed")}, 100);
                                var sound = new Audio("sounds/blue.mp3");
                                sound.play();
                                break;
            }
            if(userClickNo === gamePattern.length-1){
                    $("#level-title")[0].innerText = "level  " + (++level).toString();
                    setTimeout(function(){nextSequence();}, 600);
                    userClickNo = 0;
            }
            else{
                userClickNo++;
            }
        }
        else{
                var sound = new Audio("sounds/wrong.mp3");
                sound.play();
                $("body").css("background-color", "red");setTimeout(function(){$("body").css("background-color", "#011F3F")}, 200);
                $("#level-title")[0].innerText = "Game Over, Press Any Key to Restart";
                gamePattern = [];
                userPattern = [];
                waitingUserClick = false;
                userClickNo = 0;
                gameState = false;
                level = 1;
        }
})

$(document).keydown(function(event){
        if (gameState){
                return;
        }
        $("#level-title")[0].innerText = "level  " + (level).toString();
        gameState = true;
        nextSequence();
})

var gamePattern = [];
var userPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gameState = false;
var waitingUserClick = false;
var userClickNo = 0
var level = 1;

function nextSequence(){
    var randNum = Math.floor(Math.random()*4);
    var randChosenColor = buttonColors[randNum];
    var sound = new Audio("sounds/"+randChosenColor+".mp3");
    sound.play();
    $("."+randChosenColor).fadeOut("quick").fadeIn("quick")
    gamePattern.push(randChosenColor)
    return randChosenColor;
}

$(document).touchend(function(event){
        if (!gameState){
                gameState = true;
                nextSequence();
        }
        if (gamePattern[userClickNo] === event.target.id){
                switch(event.target.id){
                        case "red":
                                $(".red").addClass("pressed");
                                setTimeout(function(){$(".red").removeClass("pressed")}, 100);
                                var sound = new Audio("sounds/red.mp3");
                                sound.play();
                                break;
                        case "green":
                                $(".green").addClass("pressed");
                                setTimeout(function(){$(".green").removeClass("pressed")}, 100);
                                var sound = new Audio("sounds/green.mp3");
                                sound.play();
                                break;
                        case "yellow":
                                $(".yellow").addClass("pressed");
                                setTimeout(function(){$(".yellow").removeClass("pressed")}, 100);
                                var sound = new Audio("sounds/yellow.mp3");
                                sound.play();
                                break;
                        case "blue":
                                $(".blue").addClass("pressed");
                                setTimeout(function(){$(".blue").removeClass("pressed")}, 100);
                                var sound = new Audio("sounds/blue.mp3");
                                sound.play();
                                break;
            }
            if(userClickNo === gamePattern.length-1){
                    $("#level-title")[0].innerText = "level  " + (++level).toString();
                    setTimeout(function(){nextSequence();}, 600);
                    userClickNo = 0;
            }
            else{
                userClickNo++;
            }
        }
        else{
                var sound = new Audio("sounds/wrong.mp3");
                sound.play();
                $("body").css("background-color", "red");setTimeout(function(){$("body").css("background-color", "#011F3F")}, 200);
                $("#level-title")[0].innerText = "Game Over, Press Any Key to Restart";
                gamePattern = [];
                userPattern = [];
                waitingUserClick = false;
                userClickNo = 0;
                gameState = false;
                level = 1;
        }
})