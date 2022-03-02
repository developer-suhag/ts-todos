import ClearIcon from "@mui/icons-material/Clear";
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const SingleTodo = ({
  todo,
  dispatch,
}: {
  todo: { id: number; text: string };
  dispatch: any;
}) => {
  //

  const { text, id } = todo;

  //
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Paper
        sx={{
          bgcolor: "#1abc9c",
          color: "#fff",
          p: 4,
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{text}</Typography>
        <ClearIcon
          sx={{
            bgcolor: "#fff",
            color: "#ee5253",
            fontSize: 40,
            borderRadius: 5,
            p: 1,
            boxShadow: 2,
            cursor: "pointer",
          }}
          onClick={() => dispatch({ type: "REMOVE", id: id })}
        />
      </Paper>
    </Grid>
  );
};

export default SingleTodo;
