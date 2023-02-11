import { Button, LinearProgress, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import React from "react";
import { redirect, useNavigate } from "react-router";
import Amount from "../Components/Amount";
import CategorySelect from "../Components/CategorySelect";
// import DifficultySelect from "../Components/DifficultySelect";
import TimeSelect from "../Components/TimeSelect";
// import useAxios from "../Hooks/useAxios";

const Starting = () => {
  // const { response, error, loading } = useAxios({ url: "/api_category.php" });

  // if (loading) {
  //   return (
  //     <Box sx={{ width: "100%" }}>
  //       <h1>Loading...</h1>
  //       <LinearProgress />
  //     </Box>
  //   );
  // }

  // if(error){
  //   return <Typography variant="h6" mt={20} color="red">
  //       Something went wrong!
  //   </Typography>
  // }

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    redirect("/quiz")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Quiz App</h1>
      <CategorySelect/>
      {/* <DifficultySelect/> */}
      {/* <BasicSelect label="Difficulty" />
      <BasicSelect label="Type" /> */}
      <Amount />
      <TimeSelect/>
      <Button sx={{ marginTop: "15px" }} variant="contained">
        Start Quiz
      </Button>
    </form>
  );
};

export default Starting;
