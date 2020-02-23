//fx to run when pg finishes loading
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

function renderQuestionPage() {
console.log(STORE)
  const questionPage = `<section class="quizpage">
  <form>
    <fieldset>
      <legend class="questionText">${STORE[questionIndex].options}</legend>
    </fieldset>
  </form>`

    let fieldSelector = $(quizPage).find('fieldset');

  STORE[questionIndex].options.forEach(function (optionValue, optionsIndex) {
    $(`<label class="questionDisp" for="${optionsIndex}">
        <input class="radio" type="radio" id="${optionsIndex}" value="${optionsValue}" name="options" required>
        <span>${optionsValue}</span>
      </label>
      `).appendTo(fieldSelector);
  });
  $(`<button type="button" id="submit"> Submit</button>`).appendTo(fieldSelector);
  return questionPage;
  $("main").html(questionPage);
};

console.log("renderquestionpage ran did it");
//$("main").html("test text question page//REPLACE THIS STRING WITH HTML");

  //TEMPLATE LITERAL TO PULL QUESTINO THEY ARE ON IN STORE


function renderFeedbackPage (){


}

function renderFinalPage (){
 

}

function quizfinalLaunch (){
  console.log("hello")
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
// };