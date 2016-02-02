$(document).ready(function() {
  var questions = [{question: "Q.Identify the country represented by this flag", choices: ['A','B','C','D'], correctAnswer: 2 }, 

                    { question: "Q.what is the capital of russia", choices: ['A','B','C','D'],correctAnswer: 4 }, 

                    { question: "What is 8*9?", choices: [72, 99, 108, 134, 156], correctAnswer: 0 },

                     {  question: "Q.Which of the following is the largest river of world.", choices:['A','B','C','D'], correctAnswer: 3},
  
                    {  question: "What is 8*8?", choices: [20, 30, 40, 50, 64], correctAnswer: 4 }];
  
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
 function createQuestionElement(index) {
  
    var qElement = $('<div>', {
      id: 'question'
    });
    
    /*var header = $('<h2>Q. ' + (index + 1) + ':</h2>');
    qElement.append(header);*/
    
    var question = $('<h3>').append(questions[index].question);
    qElement.append(question);
    
    var optionbutton = createoptions(index);
    qElement.append(optionbutton);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createoptions(index) {
    var optionbox = $('<div>');
    var item;
    var input = '';
    var option=['A','B','C','D','X'];
    for ( i = 0; i < questions[index].choices.length; i++) {
      item = $('<div>');
      input = '<td>'+'<div class="option" name="ans">' + option[i] + '</div>'+'</td>';
      input+='<td>'+'<div class="answer">'+questions[index].choices[i]+'</div>'+'</td>';
      item.append(input);
      optionbox.append(item);
    }
    return optionbox;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('<div class="option">').val();
   /* if( selections[questionCounter]!=correctAnswer)
    {
       input = '<td>'+'<div class="option" name="ans">' + option[4] + '</div>'+'</td>';
    }*/
  }

  function countdown()
  {

          var sTime = new Date().getTime();
          var countDown = 10;

          function UpdateTime() {
              var cTime = new Date().getTime();
              var diff = cTime - sTime;
              var seconds = countDown - Math.floor(diff / 1000);
              if(seconds>=0)
              {
                var minutes=Math.floor(seconds/60);
                seconds-=minutes*60;
                $("#minutes").text(minutes <10? "0" +minutes : minutes);
                $("#seconds").text(seconds <10? "0"+seconds : seconds);

              }
                   }
          UpdateTime();
          var counter = setInterval(UpdateTime, 500);
          }
    
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      countdown();
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<h3>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
});