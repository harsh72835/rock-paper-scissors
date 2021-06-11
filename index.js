//challenge 1 with cp team

function ageInDays(){
    var age = prompt("What's your birth year?");
    //console.log(age);
    var ageInDays = (2021 - age) * 365;
    var h1 = document.createElement("h1");
    h1.setAttribute('id','ageInDays');
    var textAnswer = document.createTextNode("You are" + ageInDays + " days old.");
    document.getElementById('flex-box-result').appendChild(h1);
    h1.appendChild(textAnswer);
    //the method is "getElementById" not "getElementsById"
    // document.getElementById('ageInDays').innerHTML = "You are " + ageInDays + " days old.";
}

function reset(){
    document.getElementById('ageInDays').remove();
}
//challenge 2: cat generator
function generate(){

    var image = document.createElement("img");
    image.setAttribute('src','https://static01.nyt.com/images/2018/09/01/science/01TB-CATS/01TB-CATS-videoSixteenByNineJumbo1600.jpg');
    var finalImage = document.getElementById('flex-box-image');
    finalImage.appendChild(image);
}

//challenge 3: rok paper scissors

function selection(img){
     //console.log(img);
    // console.log(img.alt);
    var humanChoice = img.id;
    var computerChoice = numberToChoice(random());
    console.log( humanChoice+ " computer choice: " + computerChoice);
    results = decideWinner(humanChoice, computerChoice);
    console.log(results);
    message = finalMessage(results) // "You won!";
    console.log(message);
    finalFrontend(humanChoice,computerChoice,message);

}
function random(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}
function decideWinner(humanChoice, computerChoice){
    var rpsData = {
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    }
    var yourScore = rpsData[humanChoice][computerChoice];
    var computerScore = rpsData[computerChoice][humanChoice];

    return [yourScore,computerScore];
}

function finalMessage(yourScore,computerScore){
    if(yourScore === 0 ){
        return {'message':'you lostt!','color':'red'};
    }
    else if(yourScore === 0.5){
        return {'message':'game Ties!!','color':'yellow'};
    }
    else {
        return {'message':'You won!','color':'green'};
    }
}
function finalFrontend(humanChoiceImage,computerChoiceImage,message){
    var imageData ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var computerDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+ imageData[humanChoiceImage]+"' style='box-shadow:0px 10px 20px blue;'>";
    messageDiv.innerHTML = " <h1 style='color: " + message['color'] + "; font-size:30px; padding:10px;'>"+ message['message']+"</h1>";
    computerDiv.innerHTML = "<img src='"+ imageData[computerChoiceImage]+"' style='box-shadow:0px 10px 20px red;'>"

    document.getElementById('flex-box-img').appendChild(humanDiv);
    document.getElementById('flex-box-img').appendChild(messageDiv);
    document.getElementById('flex-box-img').appendChild(computerDiv);

}


