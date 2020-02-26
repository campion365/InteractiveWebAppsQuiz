
const questionsArray =
[
  //1
  {
    question: "How long can you leave food in the office refrigerator?", 
    options: [
      "As long as it doesn't smell",
      "Two weeks",
      " a month",
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
        "Whenver I feel like it",
        "Never print in color"
    ],

    correctAnswer: "When it's for client or executive team meetings"
  },
  
    //3
    {
    question: "What is proper elevator etiquette in the building?",
    options: [
        "Out of respect for people on other floors, please do not hold the elevator doors for longer than 15 seconds",
        "Do not use the elevators unless you're going up",
        "Do not use the elevators unless you're going down",
        "The elevators are not reliable, never use them"
    ],
    correctAnswer: "Out of respect for people on other floors, please do not hold the elevator doors for longer than 15 seconds"
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

function renderLandingPage(){
  const firstpage = `<section class="startScreen">
    <img class= "images"  src="startscreen_officebright.jpg"  alt="office interior">
    <p id="startsubheader"> Welcome to XYZ. By now you should have had a chance to review the employee handbook.
    Based on what you have learned, please complete the following quiz. <br><br>You need to answer at least 8 questions correctly to pass.</p>

    <div class="startbutton">
    <button type="button" id="start"> Start Quiz</button>
  </div>
  </section>`
  $("main").html(firstpage);
  $("#start").on ('click', function(){
   renderQuestionPage()
  });
}





//if any of this code below is left active the start page goes blank for all the firstpage dynamic stuff down. 
// there seems to be a ton of issues starting around line 161
// every time I get an error that some component is not defined. At first it was the STORE, so changed that name, eventually
//added it to the index.js file above. but after that optionsValue becomes not defined or optionsIndex.




function renderQuestionPage() {
  const questionPage = `<section class="questionDisp">
  <form>
    <fieldset>
      <legend class="xyz">${questionsArray[currentQuestion].question}</legend>
    </fieldset>
  </form>`

    let elementfs = $(questionPage)
  let fieldSelector = elementfs.find('fieldset');
questionsArray[currentQuestion].options.forEach(function (optionsValue, optionsIndex){
    $(`<label class="questionDisp" for="${optionsIndex}">
        <input class="radio" type="radio" id="${optionsIndex}" value="${optionsValue}" name="${optionsValue}" required>
        <span>"${optionsValue}"</span>
      </label>
      `).appendTo(fieldSelector);
  });
  $(`<button type="button" id="submit"> Submit</button>`).appendTo(fieldSelector);
  $("main").empty()
  $("main").append(elementfs)
  $("form").submit (function (){currentQuestion++;
    renderQuestionPage()
    
    //this is where they would show the feedback - correct page or the incorrect page would be shown
//render feedbackPage
  });
};



console.log("renderquestionpage ran did it");
//$("main").html("test text question page//REPLACE THIS STRING WITH HTML");

  //TEMPLATE LITERAL TO PULL QUESTINO THEY ARE ON IN STORE


function renderFeedbackPage (){


}

function renderFinalPage (){
 

}

function quizfinalLaunch (){
  renderLandingPage();


}

$(quizfinalLaunch)







//     let quizPage = $(`<section class="quizpage">
//   <form>
//     <fieldset>
//       <legend class="questionText">${STORE[questionIndex].options}</legend>
//     </fieldset>
//   </form>`)

//   let fieldSelector = $(quizPage).find('fieldset');

//   STORE[questionIndex].options.forEach(function (optionValue, optionsIndex) {
//     $(`<label class="questionDisp" for="${optionsIndex}">
//         <input class="radio" type="radio" id="${optionsIndex}" value="${optionsValue}" name="options" required>
//         <span>${optionsValue}</span>
//       </label>
//       `).appendTo(fieldSelector);
//   });
//   $(`<button type="button" id="submit"> Submit</button>`).appendTo(fieldSelector);
//   return quizPage;
// 