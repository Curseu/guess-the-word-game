 player1=localStorage.getItem("player1name");
 player2=localStorage.getItem("player2name");
 player1score=0;
 player2score=0;
 document.getElementById("player1_name").innerHTML=player1+" : ";
 document.getElementById("player2_name").innerHTML=player2+" : ";
 document.getElementById("player1_score").innerHTML=player1score;
 document.getElementById("player2_score").innerHTML=player2score;
 document.getElementById("player_question").innerHTML="Question turn - "+player1;
 document.getElementById("player_answer").innerHTML="Answer turn - "+player2;
 function send(){
     get_word=document.getElementById("word").value;
     word=get_word.toLowerCase();
     console.log("word in LowerCase= "+word);

     char1=word.charAt(1);
     console.log(char1);

     lengthdivde2=Math.floor(word.length/2);
     char2=word.charAt(lengthdivde2);
     console.log(char2);

     lengthminus1=word.length-1;
     char3=word.charAt(lengthminus1);
     console.log(char3);
     
     remove1=word.replace(char1,"_");
     remove2=remove1.replace(char2,"_");
     remove3=remove2.replace(char3,"_");
     console.log(remove3);

     Question="<h4 id='word_display'>Q."+remove3+"</h4>";
     inputbox="<br> Answer: <input type='text' id='input'>";
     checkbutton="<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";

     row=Question+inputbox+checkbutton;
     document.getElementById("output").innerHTML=row;
     document.getElementById("word").value="";
 }
 Questionturn="player1";
 answerturn="player2";
 function check(){
     getanswer=document.getElementById("input").value;
     answer=getanswer.toLowerCase();
     console.log(answer);
     if(answer ==word ){
         if(answerturn=="player1"){
             player1score=player1score+1000;
             document.getElementById("player1_score").innerHTML=player1score;
         }
         else{
            player2score=player2score+1000;
            document.getElementById("player2_score").innerHTML=player2score;  
         }

     }
     if(Questionturn =="player1"){
         Questionturn="player2";
         document.getElementById("player_question").innerHTML="questionturn"+player2;
     } else{Questionturn="player1";
     document.getElementById("player_question").innerHTML="questionturn"+player1;

     }
     if(answerturn =="player1"){
        answerturn="player2";
        document.getElementById("player_answer").innerHTML="answerturn"+player2;
    } else{answerturn="player1";
    document.getElementById("player_answer").innerHTML="answerturn"+player1;

    }
    document.getElementById("output").innerHTML="";
 }