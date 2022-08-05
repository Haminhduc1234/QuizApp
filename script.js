(function () {
    const myQuestions =
    [
        {
            question: 'Javascript is _____________ language',
            answers: {
                a: 'Programing',
                b: 'Application',
                c: 'None of These',
                d: 'Scripting'
            },
            multi: false,
            correctAnswer: ['d' , 'b']
        },
        {
            question: 'Which of the following is a valid type of function javascript supports ?',
            answers: {
                a: 'Named function',
                b: 'Anonymous function',
                c: 'Both of the both',
                d: 'None of the both'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Which built-in method returns the index within the calling string object of the first occurrence of the specified value ? ',
            answers: {
                a: 'getIndex()',
                b: 'location()',
                c: 'indexOf()',
                d: 'getLocation()'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Which one of the following is valid data type of Javascript ? ',
            answers: {
                a: 'Number',
                b: 'Void',
                c: 'Boolean',
                d: 'Nothing'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Trong Javascript sự kiện OnUnload thực hiện khi nào?',
            answers: {
                a: 'Khi bắt đầu chạy chương trình',
                b: 'Khi click chuột',
                c: 'Khi kết thúc 1 chương trình',
                d: 'Khi di chuyển chuột qua'
            },
            multi: false,
            correctAnswer: ['a', 'c']
        },
        {
            question: 'Thẻ textarea dùng để làm gì?',
            answers: {
                a: 'Tạo một ô text để nhập dữ liệu 1 dòng',
                b: 'Tạo 1 ô password',
                c: 'Tạo 1 textbox cho phép nhập liệu nhiều dòng',
                d: 'Tất cả các đáp án trên'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Which of the following is a valid type of function javascript supports ?',
            answers: {
                a: 'None of These',
                b: 'Scripting',
                c: 'Programing',
                d: 'Named Function'
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            question: 'Trong Javascript sự kiện OnUnload thực hiện khi nào?',
            answers: {
                a: 'Khi bắt đầu chạy chương trình',
                b: 'Khi click chuột',
                c: 'Khi kết thúc 1 chương trình',
                d: 'Khi di chuyển chuột qua'
            },
            multi: false,
            correctAnswer: ['a','c']
        },
        {
            question: 'Which of the following is a valid type of function javascript supports ?',
            answers: {
                a: 'Named function',
                b: 'Anonymous function',
                c: 'Both of the both',
                d: 'None of the both'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Which built-in method returns the index within the calling string object of the first occurrence of the specified value ? ',
            answers: {
                a: 'getIndex()',
                b: 'location()',
                c: 'indexOf()',
                d: 'getLocation()'
            },
            multi: false,
            correctAnswer: 'c'
        },
    ];
    // Functions
    function renderQuiz() {
        const output = [];

        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                const answers = [];
                for (letter in currentQuestion.answers) {

                    //HTML radio button
                    answers.push(
                        `<label>
                                <input type="checkbox" name="question${questionNumber}" value="${letter}">
                                ${letter} : ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }

                //add question to arr contains output
                output.push(
                    `<div class="slide">
                        <div class="question"> ${currentQuestion.question} </div>
                        <div class="answers"> ${answers.join("")} </div>
                    </div>`
                );
            }
        );

        quizContainer.innerHTML = output.join('');
    }

    //Click Start Quiz
    const start__Btn = document.querySelector('.start__btn');
    const sub__Btn = document.querySelector('#submit');
    const container__quiz = document.querySelector('.container__quiz');

    start__Btn.onclick = () => {
        container__quiz.classList.add('active__container');
        start__Btn.classList.add('hide');
    }

    // Show Results

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            var checkboxes = document.getElementsByName(`question${questionNumber}`);
            var values = [];
            // looping through all checkboxes
            for (var i = 0; i < checkboxes.length; i++) {
              if(checkboxes[i].checked == true)
              {
                  values.push(checkboxes[i].value);
              };
            }
            console.log(values);
            console.log(currentQuestion.correctAnswer);
            let countCorrectAnswer = 0;
            for (let i = 0; i < values.length ; i++) {
                for(let j = 0; j < currentQuestion.correctAnswer.length ; j++)
                {
                    if (values[i] == currentQuestion.correctAnswer[j]) {
                        countCorrectAnswer++; 
                    }
                }
            }
            console.log(countCorrectAnswer);

            if(countCorrectAnswer == currentQuestion.correctAnswer.length)
            {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } 
            else answerContainers[questionNumber].style.color = 'red';
                
        });

        // Result handle
        let message = null;
        if (numCorrect <= 3) {
            message = "Bad Grades, Keep Practicing!"
            messageColor = "red"
        }
        else if (numCorrect >= 4 && numCorrect < 7) {
            message = "Average Grades, You can do better!"
            messageColor = "orange"
        }
        else if (numCorrect >= 7) {
            message = "Excellent, Keep the good work going!"
            messageColor = "green"
        }
        document.querySelector('.endGame').textContent = message;
        document.querySelector('.endGame').style.color = messageColor;
        document.getElementById("player__score").textContent = numCorrect;
        document.querySelector('.container__end').style.display = 'flex';
    }


    // Show slide answers
    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    let closeEndGameModal =  function () {
        container__End.style.display = 'none';
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const container__End = document.querySelector('.container__end');
    const Btn__EndGame = document.querySelector('.modal__endGame__Btn');


    renderQuiz();

    // Button
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    Btn__EndGame.addEventListener("click", closeEndGameModal);
})();
