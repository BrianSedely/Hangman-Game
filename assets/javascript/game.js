var wordArr = ["Doc Brown","Marty McFly","DeLorean","Great Scott!","Flux Capacitor","One Point Twenty-one Gigawatts"];
var randomWord = wordArr[Math.floor(Math.random()*wordArr.length)];

var x
var answerArr = [];
var count = 0;

function startUp()
{
    for (var i=0; i<randomWord.length; i++)
    {
        answerArr[i]="_";
    }

    x=answerArr.join(" ");
    document.getElementById("answer").innerHTML=x;

}

function Letter()
{
    var letter=document.getElementById("letter").value;
    
    if (letter.length>0)
    {
        for (var i = 0; i<randomWord.length; i++)
        {
            if (randomWord[i] === letter)
            {
                answerArr[i]=letter;
            }
        }
        count++;
        document.getElementById("counter").innerHTML="No of clicks: " + count;
        document.getElementById("answer").innerHTML=answerArr.join(" ");
    }
}