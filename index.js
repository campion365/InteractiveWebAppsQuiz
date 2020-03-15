
const questionsArray =
  [
    //1
    {
      question: "How long can you leave food in the office refrigerator?",
      options: [
        "As long as it doesn't smell",
        "Two weeks",
        "A month",
        "The refrigerator is emptied at 5pm on Fridays. All leftover items will be thrown away"
      ],
      correctAnswer: "The refrigerator is emptied at 5pm on Fridays. All leftover items will be thrown away"
    },
    //2
    {
      question: "When should you print color documents versus black and white?",
      options: [
        "When it's for client or executive team meetings",
        "When you find a really cool picture of a cat",
        "Whenever I feel like it",
        "Never print in color"
      ],

      correctAnswer: "When it's for client or executive team meetings"
    },

    //3
    {
      question: "What is proper elevator etiquette in the building?",
      options: [
        "Out of respect for other floors, please do not hold the elevator doors",
        "Do not use the elevators unless you're going up",
        "Do not use the elevators unless you're going down",
        "The elevators are not reliable, never use them"
      ],
      correctAnswer: "Out of respect for other floors, please do not hold the elevator doors"
    },


    //4
    {
      question: "Do replacement employee access badges cost money?",
      options: [
        "No",
        "Yes",
        "Depends on how much you're liked here",
        "Your first card is free, but replacing a lost access card will cost an employee $10"
      ],
      correctAnswer: "Your first card is free, but replacing a lost access card will cost an employee $10"
    },



    //5
    {
      question: "Are you allowed to park in the office lot over the weekend?",
      options: [
        "Yes, if you're working at the office and notify security",
        "No",
        "Yes, just like Monday through Friday",
        "Yes, just give $5 to security"
      ],
      correctAnswer: "Yes, if you're working at the office and notify security"
    },

    //6
    {
      question: "What should you do if you leave your employee badge at home?",
      options: [
        "Borrow one from a co-worker",
        "Notify the front desk at ext.4040 to get a temporary badge",
        "Tell the CEO",
        "Call the cops"

      ],
      correctAnswer: "Notify the front desk at ext.4040 to get a temporary badge"
    },

    //7
    {
      question: "Who is responsible for putting dishes in the dishwasher?",
      options: [
        "Not me, Bro!",
        "The custodial staff",
        "Everyone is responsible for putting their own dishes in the dishwasher",
        "Santa Claus"
      ],
      correctAnswer: "Everyone is responsible for putting their own dishes in the dishwasher"
    },

    //8
    {
      question: "Do I have to walk out to my car alone when I work late?",
      options: [
        "Yes",
        "No",
        "Ask a co-worker",
        "We have security availabe to walk you to your car if you'd like. Dial ext4140 to request this service"
      ],
      correctAnswer: "We have security availabe to walk you to your car if you'd like. Dial ext4140 to request this service"
    },

    //9
    {
      question: "Is the consumption of alcohol allowed in the office?",
      options: [
        "Sure, we're cool",
        "Yes, during birthday parties",
        "If someone else is drinking, than yes",
        "No, alcohol consumption is not allowed in the office"
      ],
      correctAnswer: "No, alcohol consumption is not allowed in the office"
    },


    //10
    {
      question: "A vendor gave me a baseball game ticket. The printed cost is $100. Can I go?",
      options: [
        "Play Ball!",
        "No, any gift or meal that is worth more than $50 is deemed excessive",
        "Not unless the entire team is being invited",
        "Sure, as long as we've placed orders with them before"
      ],
      correctAnswer: "No, any gift or meal that is worth more than $50 is deemed excessive"
    }
  ];

let currentQuestion = 0;
let score = 0;

//update score field
function updateScore() {
  score++;
  $('.scoreNum').text(score);
}

// updates the question number 
function updateQuestionNumber() {
  currentQuestion++;
  $('.questionNum').text(currentQuestion + 1)
}


//renders the starting page for the quiz - also page that retake quiz button drives to
function renderLandingPage() {
  $('.questionNum').text('1');
  $('.scoreNum').text('0');
  currentQuestion = 0;
  score = 0;
  const firstpage = `<section class="startScreen">
    <img class= "images"  src="startscreen_officebright.jpg"  alt="office interior">
    <p id="startsubheader"> Welcome to XYZ. By now you should have had a chance to review the employee handbook.
    Based on what you have learned, please complete the following quiz. <br><br>You need to answer at least 8 questions correctly to pass.</p>

    <div class="startbutton">
    <button type="button" id="start"> Start Quiz</button>
  </div>
  </section>`
  $("main").html(firstpage);
  $("#start").on('click', function () {
    renderQuestionPage();
  });
  console.log("renderlandingpage ran");
}


//renders question - question text, answer options as radio buttons
function renderQuestionPage() {
  const questionPage = `<section class="questionDisp">
  <form>
    <fieldset>
      <legend class="questiondisplayarea">${questionsArray[currentQuestion].question}</legend>
    </fieldset>
  </form>`

  let elementfs = $(questionPage)
  let fieldSelector = elementfs.find('fieldset');
  questionsArray[currentQuestion].options.forEach(function (optionsValue, optionsIndex) {
    $(`<label class="questionDisp" for="${optionsIndex}">
        <input class="radio" type="radio" id="${optionsIndex}" value="${optionsValue}" name="questionoption" required>
        <span>"${optionsValue}"</span><br>
      </label>
      `).appendTo(fieldSelector);
  });
  $(`<button type="submit" id="submit"> Submit</button>`).appendTo(fieldSelector);
  $("main").empty()
  $("main").append(elementfs)
  $("form").submit(function (event) {
    event.preventDefault();
    renderFeedbackPage();
    $("input[type=radio]").attr('disabled', true);

  });
  console.log("renderquestionpage ran did it");
};

//queues up feedback page by checking to see if selected option is correct or not and queues approp response
function renderFeedbackPage() {
  $("#submit").hide();
  let selected = $('input:checked');
  let answer = selected.val();
  let correct = questionsArray[currentQuestion].correctAnswer;
  if (answer === correct) {
    rightAnswer();
  }
  else {
    wrongAnswer();
  };
  handleNextQuestionPage()
  console.log("renderfeedback pg ran")
}


//feedback for correct answer and updates the score
function rightAnswer() {
  $("main").append(
    `<section class="responseDisp"> </section>
      <p class="responserightbox">Correct!</p>
      <button type="button" id="next">Next</button>`
  );
  $("input:checked").closest("label").css("border", "2px solid #002A62");
  updateScore();
  console.log("rightanswer ran");
}

// feedback if the answer is incorrect
function wrongAnswer() {
  $("main").append(
    `<section class="responseDisp"> </section> 
    <p class="responsewrongbox">Incorrect!<br><br>The correct answer is: ${questionsArray[currentQuestion].correctAnswer}</p>
      <button type="button" id="next">Next</button>`
  );
  console.log("wronganswer ran")
};


//updates question number or handles the render final page function
function handleNextQuestionPage() {
  $("#next").on('click', function () {
    if (currentQuestion >= questionsArray.length - 1) {
      renderFinalPage();
    }
    else {
      updateQuestionNumber();
      renderQuestionPage();
      $("input[type=radio]").attr('disabled', false);
    }

  });

  console.log("renderNextQuestion ran");
}

//function to show final page and pull in score note based on final score
function renderFinalPage() {
  $("main").empty();
  $("main").append(
    `<section class="finalpgDisp"> </section>
        <img class= "images" src="Finishscreen.jpg" scr= alt="office white board">
        <h2 id="finalscore"> You got ${score} out of 10 questions correct </h2>
        <br>
        <section class= "feedbacktext">${finalScoreNote()} </section>
        <br>
        <div class="retakebutton">
        <button type="button" id="retake"> Retake Quiz</button>
      </div>`
  )
  retakeQuiz ();
};

function finalScoreNote() {
  const passed = 'Congratulations, you passed the company policies quiz!'

  const okay = 'You almost passed the quiz. Please review the company policy handbook and retake the quiz.'

  const terrible = 'You did not pass the quiz. Please review the company policy handbook and retake the quiz.'

  if (score >= 9) {
    return passed;
  } else if (score < 9 && score >= 8) {
    return okay;
  } else {
    return terrible;
  };
}


//retake quiz button - calls back to render landing page.
function retakeQuiz() {
  $("#retake").on('click', function () {
    renderLandingPage();
  })

  console.log("final page ran");
};

//runs to set up everything initially - don't include all fxns
function quizfinalLaunch() {
  renderLandingPage();
}

$(quizfinalLaunch);