const questions = [
  {
    question: "Những kiến thức về địa lí Việt Nam?",
    optionA: "địa lí tự nhiên và địa lí kinh tế xã hội",
    optionB: "địa lí tự nhiên và địa lí dân cư",
    optionC: "địa lí dân cư và địa lí kinh tế",
    optionD: "địa lí kinh tế và địa lí tự nhiên",
    correctOption: "optionA",
  },

  {
    question:
      "Đặc điểm nào dưới đây không phải là của vị trí địa lí tự nhiên nước ta ?",
    optionA: "Vị trí cầu nối giữa Đông Nam Á đất liền và Đông Nam Á hải đảo",
    optionB: "Vị trí nội chí tuyến",
    optionC: "Vị trí gần trung tâm khu vực Đông Nam Á",
    optionD: "Vị trí nằm ở bán cầu Tây",
    correctOption: "optionD",
  },

  {
    question: "Việt Nam có biên giới đất liền với?",
    optionA: `Trung Quốc, Lào, Thái Lan`,
    optionB: "Trung Quốc, Lào, Cam-pu-chia",
    optionC: "Lào, Cam-pu-chia, Thái Lan",
    optionD: " Cam-pu-chia, Thái Lan, Trung Quốc",
    correctOption: "optionB",
  },

  {
    question: "Phần lớn khoáng sản của nước ta có trữ lượng ?",
    optionA: "lớn và vừa",
    optionB: "vừa và nhỏ",
    optionC: "vừa và rất nhỏ",
    optionD: "rất lớn và lớn",
    correctOption: "optionB",
  },

  {
    question:
      "Địa hình đồi núi chiếm 3/4 diện tích lãnh thổ nước ta, nhưng chủ yếu là",
    optionA: "đồi núi cao",
    optionB: "đồi núi trung bình",
    optionC: "đối núi thấp",
    optionD: "đối núi đá vôi",
    correctOption: "optionC",
  },

  {
    question: "Địa hình nào sau đây không phải là địa hình nhân tạo?",
    optionA: "Hầm mỏ",
    optionB: " Đồng bằng phù sa mới",
    optionC: "Đê đập",
    optionD: "Kênh rạch",
    correctOption: "optionB",
  },
  {
    question: "Đặc điểm nào sau đây không đúng với vùng núi Đông Bắc nước ta?",
    optionA: "Vùng đồi núi thấp",
    optionB: "Các dãy núi chạy theo hướng tây bắc - đông nam",
    optionC: "Địa hình thấp dần từ tây bắc xuống đông nam",
    optionD: "Địa hình các-xtơ phổ biến",
    correctOption: "optionB",
  },

  {
    question: "Đồng bằng có diện tích lớn nhất nước ta là ?",
    optionA: "đồng bằng sông Hồng",
    optionB: "đồng bằng duyên hải Bắc Trung Bộ",
    optionC: "đồng bằng duyên hải miền Trung",
    optionD: "đồng bằng sông Cửu Long",
    correctOption: "optionD",
  },

  {
    question: "Đồng bằng sông Hồng có đặc điểm nào sau đây?",
    optionA: "Hệ thống kênh rạch chằng chịt",
    optionB: "Về mưa lũ, nhiều vùng trũng bị ngập sâu",
    optionC: `Hệ thống đê sông chống lũ`,
    optionD: "Về mùa khô, nước mặn xâm nhập trên diện rộng",
    correctOption: "optionC",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 9 ,
      hãy cho biết khu vực nào ở nước ta chịu tác động của bão với tần suất lớn nhất ?`,
    optionA: "Ven biển Bắc Bộ",
    optionB: "Ven biển các tỉnh Thanh Hóa , Nghệ An",
    optionC: "Ven biển các tỉnh Hà Tĩnh , Quảng Bình",
    optionD: "Ven biển Nam Trung Bộ",
    correctOption: "optionC",
  },
];

let shuffledQuestions = []; //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
  //function to shuffle and push 10 questions to shuffledQuestions array
  //app would be dealing with 10questions per session
  while (shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1; //holds the current question number
let playerScore = 0; //holds the player score
let wrongAttempt = 0; //amount of wrong answers picked by player
let indexNumber = 0; //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
  const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      //get's correct's radio input with correct answer
      correctOption = option.labels[0].id;
    }
  });

  //checking to make sure a radio input has been checked or an option being chosen
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore++; //adding to player's score
      indexNumber++; //adding 1 to index so has to display next question..
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++; //adds 1 to wrong attempts
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 2000);
    }
  });
}

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer(); //check if player picked right or wrong option
  unCheckRadioButtons();
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
    if (indexNumber <= 9) {
      //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
      NextQuestion(indexNumber);
    } else {
      handleEndGame(); //ends game if index number greater than 9 meaning we're already at the 10th question
    }
    resetOptionBackground();
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null;
  let remarkColor = null;

  // condition check for player remark and remark color
  if (playerScore <= 3) {
    remark = "Bad Grades, Keep Practicing.";
    remarkColor = "red";
  } else if (playerScore >= 4 && playerScore < 7) {
    remark = "Average Grades, You can do better.";
    remarkColor = "orange";
  } else if (playerScore >= 7) {
    remark = "Excellent, Keep the good work going.";
    remarkColor = "green";
  }
  const playerGrade = (playerScore / 10) * 100;

  //data to display to score board
  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("grade-percentage").innerHTML = playerGrade;
  document.getElementById("wrong-answers").innerHTML = wrongAttempt;
  document.getElementById("right-answers").innerHTML = playerScore;
  document.getElementById("score-modal").style.display = "flex";
}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}
