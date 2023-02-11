import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { QuizContext } from "../Context/Quiz";

export default function QuestionCard() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

    const [quizState, dispatch] = React.useContext(QuizContext)
    const currentQuestion = quizState.question.questions[quizState.currentQuestionIndex];
    console.log(quizState.answers);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (value === "best") {
    //   setHelperText("You got it!");
    //   setError(false);
    // } else if (value !== "best") {
    //   setHelperText("Sorry, wrong answer!");
    //   setError(true);
    // } else {
    //   setHelperText("Please select an option.");
    //   setError(true);
    // }
  };

  return (
    <>
      {quizState.showResults && (
        <div>
          <Typography>
            You've got {quizState.correctAnswerCount} of{" "}
            {quizState.question.questions.length}{" "}
          </Typography>
          <Button
            onClick={() => dispatch({ type: "RESTART" })}
            sx={{ mt: 1 }}
            type="reset"
            variant="contained"
          >
            Restart Quiz
          </Button>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <span>Question {quizState.currentQuestionIndex + 1}</span>
          <form onSubmit={handleSubmit}>
            <FormControl
              sx={{
                m: 3,
                border: "1px solid",
                borderRadius: 5,
                padding: 4,
                width: "50%",
              }}
              error={error}
              variant="standard"
            >
              <FormLabel id="demo-error-radios">
                <Typography variant="h4" pb={2}>
                  {currentQuestion?.question}
                </Typography>{" "}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                {quizState.answers.map((answer,index)=>{
                 
                 return (
                   <>
                     <FormControlLabel
                       value={index}
                       control={<Radio />}
                       label={answer}
                       key={index}
                     />
                   </>
                 );
                })}
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
              <Button
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                sx={{ mt: 1 }}
                type="submit"
                variant="contained"
              >
                Next Question
              </Button>
            </FormControl>
          </form>
        </div>
      )}
    </>
  );
}
