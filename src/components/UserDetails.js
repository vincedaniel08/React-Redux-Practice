import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useDispatch } from "react-redux";
import { setName, addStudent } from "../redux/actions/userAction";

export default function UserDetails() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
  });
  const [stateStudent, setStateStudent] = useState({
    id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    studentName: "",
    studentCourse: "",
  });

  const handleChangeName = (e) => {
    e.preventDefault();
    setState({ ...state, name: e.target.value });
  };
  const handleChangeStudentName = (e) => {
    setStateStudent({ ...stateStudent, studentName: e.target.value });
  };
  const handleChangeStudentCourse = (e) => {
    setStateStudent({ ...stateStudent, studentCourse: e.target.value });
  };

  const submitName = (e) => {
    e.preventDefault();
    console.log(state.name);
    dispatch(setName(state.name));
  };

  const submitAddStudent = (e) => {
    e.preventDefault();
    console.log(stateStudent);
    dispatch(addStudent(stateStudent));
    setStateStudent({ ...stateStudent, id: Math.floor(Math.random() * (999 - 100 + 1) + 100) });
  
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ p: 1 }}>
        <Typography sx={{ my: 1 }}>Enter User Details</Typography>
        <TextField
          label="Name"
          fullWidth
          onChange={handleChangeName}
          value={state.name}
        />
        <Button variant="outlined" fullWidth onClick={submitName}>
          Submit
        </Button>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography sx={{ my: 1 }}>Add Student Details</Typography>
        <TextField
          label="Student Name"
          fullWidth
          onChange={handleChangeStudentName}
          value={stateStudent.studentName}
        />
        <TextField
          label="Student Course"
          fullWidth
          onChange={handleChangeStudentCourse}
          value={stateStudent.studentCourse}
        />
        <Button fullWidth variant="outlined" onClick={submitAddStudent}>
          Add
        </Button>
      </Box>
    </Box>
  );
}
