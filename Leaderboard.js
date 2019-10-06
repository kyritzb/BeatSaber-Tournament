//Beat Saber Tornament 
//By Bryan Kyritz

var songs = [];
var people = [];
var peopleScores= [];


var scoreBySong = [];
var ownerScores= [];


  var songCol = 3;
  var scoreCol = 4;
  var peopleCol = 2;


var loops = 100;
function OnSubmit(e) 
{
  loadsongs();
  load();
}

function loadsongs()
{
  songs.push("SANTA SAN");
  songs.push("BUBBLE TEA");
  songs.push("Future Candy");
  songs.push("CANDYYLAND (Remix)");
  songs.push("Flower Dance Pt. 2");
  //--------
  songs.push("g a r d e n (Short Ver.)");
  songs.push("Your voice so");
  songs.push("YES or YES");
  songs.push("Senbonzakura (Short Ver.)");
  songs.push("Responsibility Response");
  //---------
  songs.push("Time To Say Goodbye");
  songs.push("Reality Check Through The Skull");
  songs.push("Gerudo Valley - The LoZ");
  songs.push("S3RL - Pika Girl");
  songs.push("Still Alive - Portal");
  //----------
  songs.push("Baseline Yatteru? (ft. Nanahira)");
  songs.push("TWISTSTEP");
  songs.push("Inferno");
  songs.push("Undertale - Heartache");
  songs.push("Rockerfeller Street");
  //----------
  songs.push("Routine");
  songs.push("Sendan Life");
  songs.push("Prom Dress");
  songs.push("Jojo's BA");
  songs.push("MILK");
  //----------
  songs.push("Magic Logic Labyrinth");
  songs.push("Lone digger");
  songs.push("Death by Glamour");
  songs.push("Made in Love");
  songs.push("Bitch Lasagna (PDP Remix)")
}

var app = SpreadsheetApp;
var logSheet = app.getActiveSpreadsheet().getSheetByName("Logs");
var board = app.getActiveSpreadsheet().getSheetByName("Leaderboard");
var score = app.getActiveSpreadsheet().getSheetByName("Scores");
function load() {
    
  getDifferentPeople();
  getsScoresEachSong();
  sort();
  drawTemplate();
  calcScores();
  
  //display();
}

function calcScores()
{
  var tempscore = [];
  var tempMedals = []; //index 0 = gold, 1 == silver, 2 == bronze
  for(var i = 0; i<people.length; i++)
  {
    tempscore.push(0);
    var empty = [];
    empty[0] = 0;
    empty[1] = 0;
    empty[2] = 0;
    
    for(var h = 0; h<3; h++)
    {
      tempMedals.push(empty);
    }
  }
  

  
  for(var song = 0; song<songs.length; song++)
  {

    var pbArrScore = getPbArrScore(song);
    var pbArrName = getPbArrName(song);
    
    pbArrName.reverse();
    pbArrScore.reverse();
    
    for(var m = 0; m<3; m++)
    {
      for(var p = 0; p<people.length; p++)
      {
        if(pbArrName[m] == people[p])
        {
          if(pbArrScore[m] != 0)
          {
            //--------------------------------------------------------------0-5
            if(song<5)
            {
              if(m == 0)
              {
                tempscore[p]=tempscore[p]+30;
                tempMedals[p][0] = tempMedals[p][0]+1;
              }
              else if(m == 1)
              {
                tempscore[p]=tempscore[p]+20;
                tempMedals[p][1] = tempMedals[p][1]+1;
              }
              else if(m == 2)
              {
                tempscore[p]=tempscore[p]+15;
                tempMedals[p][2] = tempMedals[p][2]+1;
              }
            }
            //--------------------------------------------------------------
            //--------------------------------------------------------------5-10
            else if(song<10)
            {
              if(m == 0)
              {
                tempscore[p]=tempscore[p]+25;
                tempMedals[p][0] = tempMedals[p][0]+1;
              }
              else if(m == 1)
              {
                tempscore[p]=tempscore[p]+15;
                tempMedals[p][1] = tempMedals[p][1]+1;
              }
              else if(m == 2)
              {
                tempscore[p]=tempscore[p]+10;
                tempMedals[p][2] = tempMedals[p][2]+1;
              }
            }
            //--------------------------------------------------------------
            //--------------------------------------------------------------10-15
            else if(song<15)
            {
              if(m == 0)
              {
                tempscore[p]=tempscore[p]+15;
                tempMedals[p][0] = tempMedals[p][0]+1;
              }
              else if(m == 1)
              {
                tempscore[p]=tempscore[p]+10;
                tempMedals[p][1] = tempMedals[p][1]+1;
              }
              else if(m == 2)
              {
                tempscore[p]=tempscore[p]+7;
                tempMedals[p][2] = tempMedals[p][2]+1;
              }
            }
            //--------------------------------------------------------------15-20
            else if(song<20)
            {
              if(m == 0)
              {
                tempscore[p]=tempscore[p]+10;
                tempMedals[p][0] = tempMedals[p][0]+1;
              }
              else if(m == 1)
              {
                tempscore[p]=tempscore[p]+7;
                tempMedals[p][1] = tempMedals[p][1]+1;
              }
              else if(m == 2)
              {
                tempscore[p]=tempscore[p]+3;
                tempMedals[p][2] = tempMedals[p][2]+1;
              }
            }
            //--------------------------------------------------------------
            //--------------------------------------------------------------20-25
            else if(song<25)
            {
              if(m == 0)
              {
                tempscore[p]=tempscore[p]+7;
                tempMedals[p][0] = tempMedals[p][0]+1;
              }
              else if(m == 1)
              {
                tempscore[p]=tempscore[p]+5;
                tempMedals[p][1] = tempMedals[p][1]+1;
              }
              else if(m == 2)
              {
                tempscore[p]=tempscore[p]+3;
                tempMedals[p][2] = tempMedals[p][2]+1;
              }
            }
            //--------------------------------------------------------------25-30
            else if(song<30)
            {
              if(m == 0)
              {
                tempscore[p]=tempscore[p]+5;
                tempMedals[p][0] = tempMedals[p][0]+1;
              }
              else if(m == 1)
              {
                tempscore[p]=tempscore[p]+3;
                tempMedals[p][1] = tempMedals[p][1]+1;
              }
              else if(m == 2)
              {
                tempscore[p]=tempscore[p]+1;
                tempMedals[p][2] = tempMedals[p][2]+1;
              }
            }
            //--------------------------------------------------------------
          }
        }  
      }
    }
  }
  //Done Calculating score
  score.clear();
  
  score.getRange(1,1).setWrap(true);
  score.getRange(1,1).setValue("Name");
  
  score.getRange(1,2).setWrap(true);
  score.getRange(1,2).setValue("Score");
  
  score.getRange(1,3).setWrap(true);
  score.getRange(1,3).setValue("Golds");
  
  score.getRange(1,4).setWrap(true);
  score.getRange(1,4).setValue("Silvers");
  
  score.getRange(1,5).setWrap(true);
  score.getRange(1,5).setValue("Bronze");
  
  
  for(var i = 0; i<people.length ; i++)
  {
    score.getRange(i+2,1).setWrap(true);
    score.getRange(i+2,1).setValue(people[i]);
    score.getRange(i+2,2).setValue(tempscore[i]);
    score.getRange(i+2,3).setValue(tempMedals[i][0]);
    score.getRange(i+2,4).setValue(tempMedals[i][1]);
    score.getRange(i+2,5).setValue(tempMedals[i][2]);
  }
}

function drawTemplate()
{
  board.clear();
  for(var song = 0; song<songs.length; song++)
  {
    board.getRange(1,(song*2)+1).setWrap(true);
    board.getRange(2,(song*2)+1).setValue("Name");
    /*
    if(song%2 == 0)
    {  
      board.getRange(2,(song*2)+1,100).setBackgroundRGB(52, 155, 235);
      board.getRange(2,(song*2)+2,100).setBackgroundRGB(52, 155, 235);
    }
    else
    {
      board.getRange(2,(song*2)+2,100).setBackgroundRGB(242, 102, 56);
      board.getRange(2,(song*2)+3,100).setBackgroundRGB(242, 102, 56);
    }
    */
    
    board.getRange(1,(song*2)+2).setWrap(true);
    board.getRange(2,(song*2)+2).setValue("Score");
    
    
    board.getRange(1,(song*2)+1).setWrap(true);
    board.getRange(1,(song*2)+1).setValue(songs[song]);
    
    board.getRange(1, (song*2)+1, 1, 2).merge();

    var pbArrScore = getPbArrScore(song);
    var pbArrName = getPbArrName(song);
    
    pbArrScore.reverse();
    pbArrName.reverse();
    
    for(var p = 0; p<people.length; p++)
    {
      board.getRange(3+p,(song*2)+1).setValue(pbArrName[p]);
      board.getRange(3+p,(song*2)+2).setValue(pbArrScore[p]);
    }
    
    
  }
  
}


function getPbArrScore(songID)
{
  var unsortedScore =[];
  var unsortedPeople =[];
  for(var p = 0; p<people.length; p++)
  {
    unsortedScore.push(getPB(songID, people[p]));
    unsortedPeople.push(people[p]);
  }
  return sortPBScore(unsortedScore, unsortedPeople);
}
function getPbArrName(songID)
{
  var unsortedScore =[];
  var unsortedPeople =[];
  for(var p = 0; p<people.length; p++)
  {
    unsortedScore.push(getPB(songID, people[p]));
    unsortedPeople.push(people[p]);
  }
  return sortPBName(unsortedScore, unsortedPeople);
}

function sortPBScore(unsortedScore,unsortedPeople )
{
  var len = unsortedScore.length;
    for (var i = 0; i < len; i++) 
    {
        for (var j = 0; j < len; j++) 
        {
            if (unsortedScore[j] > unsortedScore[j + 1]) 
            {
                //Score swap
                var tmp = unsortedScore[j];
                unsortedScore[j] = unsortedScore[j + 1];
                unsortedScore[j + 1] = tmp;               
            }
        }
    }
  return unsortedScore;
}

function sortPBName(unsortedScore,unsortedPeople )
{
  var len = unsortedScore.length;
    for (var i = 0; i < len; i++) 
    {
        for (var j = 0; j < len; j++) 
        {
            if (unsortedScore[j] > unsortedScore[j + 1]) 
            {
                //Score swap
                var tmp = unsortedScore[j];
                unsortedScore[j] = unsortedScore[j + 1];
                unsortedScore[j + 1] = tmp;
              
              
                //name swap
                var tmp = unsortedPeople[j];
                unsortedPeople[j] = unsortedPeople[j + 1];
                unsortedPeople[j + 1] = tmp;
                
                
            }
        }
    }
  return unsortedPeople;
}


function getPB(songID, person)
{
  var highest = 0;
    for(var i = 0; i<scoreBySong[songID].length; i++)
    {
      if(ownerScores[songID][i] == person)
      {
        if(scoreBySong[songID][i] > highest)
        {
          highest = scoreBySong[songID][i];
        }
      }
    
  }
  return highest;
}

function sort()
{
  /*
  Logger.log("Song: " + songs[0]);
  Logger.log("Before:");
  for(var i = 0; i <scoreBySong[0].length; i++)
  {
    Logger.log(ownerScores[0][i] + "|||" + scoreBySong[0][i]);
  }
  */
  for(var i = 0; i<songs.length; i++)
  {
    bubbleSort(i);
  }
  /*
  Logger.log("After:");
  for(var i = 0; i <scoreBySong[0].length; i++)
  {
    Logger.log(ownerScores[0][i] + "|||" + scoreBySong[0][i]);
  }
  */
  
}

function bubbleSort(numSong)
{
    var len = scoreBySong[numSong].length;
    for (var i = 0; i < len; i++) 
    {
        for (var j = 0; j < len; j++) 
        {
            if (scoreBySong[numSong][j] > scoreBySong[numSong][j + 1]) 
            {
                //Score swap
                var tmp = scoreBySong[numSong][j];
                scoreBySong[numSong][j] = scoreBySong[numSong][j + 1];
                scoreBySong[numSong][j + 1] = tmp;
              
                //name swap
                var tmp = ownerScores[numSong][j];
                ownerScores[numSong][j] = ownerScores[numSong][j + 1];
                ownerScores[numSong][j + 1] = tmp;
                
            }
        }
    }
};


function display()
{
  for(var song = 0; song<songs.length; song++)//goes through each song
  {
    var cursong = songs[song];
    
    Logger.log("--------------");
    Logger.log(cursong);
    
    
    for(var scoreNum = 0; scoreNum < scoreBySong[song].length; scoreNum++)
    {  
      Logger.log(ownerScores[song][scoreNum] + "|||" + scoreBySong[song][scoreNum]);
    }
    
  }
}

function getDifferentPeople()
{
  var logPersonCol = 2;
  for(var i = 1; i<loops; i++)
  {
    var peep = logSheet.getRange(i+1, logPersonCol).getValue();
    if(!isNotAdded(peep) && peep.length!=0)
    {
      people.push(peep);
    }   
  }
}

function isNotAdded(personname)
{
  for(var i = 0; i<people.length; i++)
  {
    if(people[i] == personname)
      return true;
  }
  return false;
}

function getsScoresEachSong()
{
  
  for(var i = 0; i<songs.length; i++)//goes through each song
  {
    var cursong = songs[i];
   
    //Logger.log("--------------");
    //Logger.log(cursong);
    var temparrscores = [];
    var temparrpeople = [];
    for(var j = 0; j <loops; j++)
    {
      var searchsong = logSheet.getRange(j+2, songCol).getValue();
      var searchscore = logSheet.getRange(j+2, scoreCol).getValue();
      var searchperson = logSheet.getRange(j+2, peopleCol).getValue();

      if(searchsong == cursong)
      {
          //Logger.log(searchperson + "|||" + searchscore);
          temparrpeople.push(searchperson);
          temparrscores.push(searchscore);
        
      }
    }
    ownerScores.push(temparrpeople);
    scoreBySong.push(temparrscores);
  }
}
