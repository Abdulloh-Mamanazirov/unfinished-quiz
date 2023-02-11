let questions = [
  {
    category: "math",
    question: "2+2",
    answers: [2, 4, 6, 8],
    correct_answer: 2,
  },
  {
    category: "math",
    question: "5*2",
    answers: [7, 3, 10, 8],
    correct_answer: 3,
  },
  {
    category: "english",
    question: "meaning of 'book'",
    answers: ["kitob", "daftar", "odam", "mashina"],
    correct_answer: 1,
  },
];
/*
let select = document.querySelector('select')
select.addEventListener('change', e =>{
    let value = e.target.value;
    const getCategory = questions.filter(e => e.category === value)
    console.log(getCategory);
})
*/

let data = [
  {
    categories: ["HTML", "CSS", "JavaScript"],
  },
  {
    questions: [
      {
        category: "HTML",
        question: "What is HTML?",
        answers: [
          { a: "Hy Te Ma Lan", isTrue: true },
          { b: "qwey TRe QWa Lan", isTrue: false },
          { c: "Hyp qwey Lan", isTrue: false },
        ],
      },
      {
        category: "HTML",
        question: "What is <br> in HTML?",
        answers: [
          { a: "border", isTrue: false },
          { b: "line break", isTrue: true },
          { c: "border radius", isTrue: false },
        ],
      },
      {
        category: "CSS",
        question: "What is CSS?",
        answers: [
          { a: "cascading style sheet", isTrue: true },
          { b: "cadsf sd  sd", isTrue: false },
          { c: "ccc sss  sss", isTrue: false },
        ],
      },
      {
        category: "JavaScript",
        question: "What is JavaScript?",
        answers: [
          { a: "asdasdasd", isTrue: false },
          { b: "sf,dldgm;dsg sdf", isTrue: false },
          { c: "Programming language", isTrue: true },
        ],
      },
      {
        category: "JavaScript",
        question: "What is loop in JavaScript?",
        answers: [
          { a: "Lan", isTrue: false },
          { b: "loops are used to repeat a block of codeloop", isTrue: true },
          { c: "Hyp qwey Lan", isTrue: false },
        ],
      },
      {
        category: "JavaScript",
        question: "What is DOM in JS?",
        answers: [
          { a: "Document Oriented Machine", isTrue: false },
          { b: "Data Overflow Manipulation", isTrue: false },
          { c: "Document Object Model", isTrue: true },
        ],
      },
      {
        category: "JavaScript",
        question: "How do we write Arrow function in JS?",
        answers: [
          { a: "let myFunction() => {}", isTrue: false },
          { b: "myFunction(){}", isTrue: false },
          { c: "let myFunction = () => {}", isTrue: true },
        ],
      },
      {
        category: "JavaScript",
        question: "What is IIFE?",
        answers: [
          { a: "Inner Information Filter Export", isTrue: false },
          { b: "Immediately Invocated Function Expression", isTrue: true },
          { c: "Invocated Import Function Expression", isTrue: false },
        ],
      },
    ],
  },
];
// data.map((e) => console.log(e.categories));
// data.map((e) => console.log(e.questions));
let select = document.querySelector("select");
select.addEventListener("change", (e) => {
  let value = e.target.value;
  let fizz = data[1].questions.filter((e) => {
    return e.category === value
  });
  console.log(fizz);
});