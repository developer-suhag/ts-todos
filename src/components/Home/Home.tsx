import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useReducer, useRef } from "react";
import SingleTodo from "../SingleTodo/SingleTodo";

interface Todo {
  id: number;
  text: string;
}

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

const Home = () => {
  const todoRef = useRef<HTMLInputElement>(null);

  const reducer = (state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  };

  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = useCallback(() => {
    if (todoRef.current) {
      dispatch({
        type: "ADD",
        text: todoRef.current.value,
      });
      todoRef.current.value = "";
    }
  }, []);

  return (
    <div>
      <Container sx={{ py: 2 }}>
        <Typography
          sx={{ textAlign: "center", fontSize: 36, fontWeight: 700 }}
          color="secondary"
          variant="h1"
        >
          Simple React TypeScript Todo App
        </Typography>
        <Box className="todo-form" sx={{ mt: 6, boxShadow: 2 }}>
          <Typography
            sx={{ color: "#fff", textAlign: "center", mb: 4 }}
            variant="h4"
          >
            Add to ToDo
          </Typography>
          <form>
            <input ref={todoRef} type="text" placeholder="Todo" />
            <Button onClick={addTodo} variant="outlined">
              Add to Todo
            </Button>
          </form>
        </Box>

        {/* todos  */}

        <Box sx={{ py: 4, flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {todos.map((todo) => (
              <SingleTodo key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
