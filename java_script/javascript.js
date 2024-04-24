let next=0;
let correct_ans=0;


function checkAnswer(ans){

	if(ans==TriviaQuestionsAns[next][1])
	{
		correct_ans++;
		next++;
		getNextQuestion();
	}//end if
	else{
		next++;
		getNextQuestion();
	}

}//end checkAnswer

//Display results and reset quiz
function endShowResults(){

	if(correct_ans <5)
	{
		document.getElementById("TriviaQuestion").innerHTML ='YOU ARE GETTING THERE. GIVE IT ANOTHER TRY !!';
		document.getElementById("retry").style.display="inline-block";
	}
	else{
		document.getElementById("TriviaQuestion").innerHTML ='CONGRATULATIONS !!. YOU ARE '+ Math.trunc(correct_ans/13*100) + '% JAMAICAN !!';
		document.getElementById("retry").style.display="inline-block";

	}
}


function resetQuiz(){

	next=0;
	correct_ans=0;
	document.getElementById("TriviaQuestion").innerHTML ='';
	getNextQuestion();
	document.getElementById("start").style.display="none";
	document.getElementById("retry").style.display="none";
}


function getNextQuestion()
{

			//check if all 13 questions have been answered. if yes, end quiz and dispaly results. else continue to next question
			if(next==13)
			{
				endShowResults ();
			}

			else{
			    document.getElementById("TriviaQuestion").innerHTML = TriviaQuestionsAns[next][0];

			}

}//end getNextQuestion


//create a two-dimensional array to hold trivia questions and correct response.

const TriviaQuestionsAns = [
  ['Where in Jamaica can you find a functional  324 Year old water wheel ?', 'Hanover'],
  ['Where in Jamaica can you find the first capital city ?', 'spain'],
  ['Where in Jamaica can you find seven (7) miles of white sand beach ?', 'Negril'],
  ['Where in Jamaica can you find one of the few travertine waterfalls in the world that empties directly into the sea ?', 'dunns'],
  ['Where in Jamaica is the birthplace of Usain Bolt ? ', 'Trelawny'],
  ['Where in Jamaica can you find the bar voted best bar in the world 2021 ?', 'Pelican'],
  ['Where in Jamaica can you find a spring with healing properties ?', 'milkRiver'],
  ['Where in Jamaica is the worlds 7th best coffee beans grown ?', 'porti'],
  ['Where in Jamaica can you find the Bob Marley Museum ?', 'bob'],
  ['Where in Jamaica did the Morant Bay Rebellion happen ?', 'bogle'],
  ['Where in Jamaica did Ian Fleming call home ?', '007'],
  ['Where in Jamaica can you find the Rose Hall Great House ?', 'Mobay'],
  ['Where in Jamaica was Iris Potato first introduced to the island ?', 'baby']
];