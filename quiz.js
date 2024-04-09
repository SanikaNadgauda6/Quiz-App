const questions = [
  {
    correctAnswer: 'Three',
    answers: ['Two', 'Three', 'Four', 'Five'],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'Cheetah',
    answers: ['Lion', 'Tiger', 'Cheetah', 'Leopard'],
    question: "Which of these animals is the fastest?",
  },
  {
    correctAnswer: 'Paris',
    answers: ['London', 'New York', 'Paris', 'Tokyo'],
    question: "Which city is known as the 'City of Love'?",
  },
  {
    correctAnswer: 'Earth',
    answers: ['Mars', 'Venus', 'Jupiter', 'Earth'],
    question: "Which planet do we live on?",
  },
  {
    correctAnswer: 'Elephant',
    answers: ['Ant', 'Elephant', 'Fly', 'Mosquito'],
    question: "Which of these animals is the largest?",
  },
  {
    correctAnswer: 'Soccer',
    answers: ['Basketball', 'Soccer', 'Tennis', 'Golf'],
    question: "Which sport is also known as football in some countries?",
  },
  {
    correctAnswer: 'Laptop',
    answers: ['Tablet', 'Desktop', 'Smartphone', 'Laptop'],
    question: "Which device is portable and can be placed on your lap?",
  },
  {
    correctAnswer: 'Leonardo da Vinci',
    answers: ['Michelangelo', 'Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci'],
    question: "Who painted the Mona Lisa?",
  },
  {
    correctAnswer: 'China',
    answers: ['India', 'Brazil', 'China', 'Russia'],
    question: "Which country has the largest population?",
  },
  {
    correctAnswer: 'Pythagoras',
    answers: ['Euclid', 'Newton', 'Archimedes', 'Pythagoras'],
    question: "Who is known for the Pythagorean theorem?",
  }
];
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEL = document.getElementById("next");

  let currentQuestion = 0;
  let score = 0;
  const totalScore = questions.length;
  showQuestion();
  nextEL.addEventListener("click", ()=>{
    scoreEl.textContent = `Score: ${score} / ${totalScore} `;
    nextQuestion();
  });
  function showQuestion(){      
        
    const {question, correctAnswer, answers} = questions[currentQuestion];

    questionEl.textContent = question;

      const shuffledOptions = shuffleOptions(answers);  

      shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEl.appendChild(btn); 
        
        btn.addEventListener('click', () => {
          if(opt === correctAnswer){
            score++;
          }else{
            score = score - 0.25;
          }
          scoreEl.textContent = `Score: ${score} / ${totalScore} `;
          nextQuestion();
        });
      });
    }
    
    function nextQuestion(){
      currentQuestion++;
      optionEl.textContent = '';
      if(currentQuestion >= questions.length){
          questionEl.textContent = "Quiz Completed!!!"
          nextEL.remove();
        }
        else{
          showQuestion();
        }
    }

function shuffleOptions(options){
  for(let i = options.length-1; i>=0; i--){
    const j = Math.floor(Math.random() * (i+1));
      [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

