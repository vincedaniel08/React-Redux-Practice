import React, { useState } from "react";
import { Typography, Button, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteStudent, editStudent } from "../redux/actions/userAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //backgroundColor: 'background.paper',
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
};

export default function DiplayDetails() {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [stateStudent, setStateStudent] = useState({
    studentName: "",
    studentCourse: "",
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = (student) => {
    setOpen(true);
    setStateStudent({
      ...stateStudent,
      id: student.id,
      studentName: student.studentName,
      studentCourse: student.studentCourse,
    });
  };
  const handleChangeStudentName = (e) => {
    setStateStudent({
        ...stateStudent,
        studentName: e.target.value
      });
  }
  const handleChangeStudentCourse = (e) => {
    setStateStudent({
        ...stateStudent,
        studentCourse: e.target.value
      });
  }
  //edit
  const handleEdit = () => {
      console.log(stateStudent)
    dispatch(editStudent(stateStudent));
    setOpen(false);
  };

  //delete
  const handleDelete = (id) => {
    console.log("id:", id);
    dispatch(deleteStudent(id));
  };
  return (
    <Box sx={{ display: "block" }}>
      <Box>
        <Typography> User Details</Typography>
        <Typography sx={{ my: 2 }}> Name : {state.name}</Typography>
        <Typography sx={{ my: 2 }}>Counter : {state.counter}</Typography>
      </Box>
      <Box sx={{ display: "flex", border: 1, justifyContent: "center" }}>
        {state.students &&
          state.students.map((student, index) => {
            return (
              <Box key={index + 1} sx={{ p: 2 }}>
                <Typography>Name: {student.studentName}</Typography>
                <Typography>Course: {student.studentCourse}</Typography>
                <Button onClick={() => handleOpen(student)}>Edit</Button>
                <Button onClick={() => handleDelete(student.id)}>Delete</Button>
              </Box>
            );
          })}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography>Edit Student</Typography>
          <TextField
            label="Student Name"
            onChange={handleChangeStudentName}
            value={stateStudent.studentName}
          />
          <TextField
            label="Student Course"
            onChange={handleChangeStudentCourse}
            value={stateStudent.studentCourse}
          />
          <Button onClick={handleEdit}>Edit</Button>
        </Box>
      </Modal>
    </Box>
  );
}
