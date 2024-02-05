// FCStudentsList.jsx

import React from 'react';
import Button from '@mui/material/Button';
import PersonRemove from '@mui/icons-material/PersonRemove';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from "../assets/avatar1.jpg";

export default function FCStudentsList(props) {

  const btnDeleteStudent = (e) => {
    let studentIdToDelete = e.currentTarget.dataset.studentid; // Use dataset.studentid
    let updatedStudents = props.students.filter(stu => stu.id !== parseInt(studentIdToDelete));
    props.sendUpdatedListToParent(updatedStudents);
  }

  let studentsListStr = props.students.map(stu => (
    <ListItem
      key={stu.id}
      secondaryAction={
        <IconButton aria-label="delete" color="error" data-studentid={stu.id} onClick={btnDeleteStudent}>
          <PersonRemove />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°`}
            src={logo}
          />
        </ListItemAvatar>
        <ListItemText primary={`Line item ${stu.id}`} />
      </ListItemButton>
    </ListItem>
  ));

  return (
    <div>
      FCPersonsList
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {studentsListStr}
      </List>
    </div>
  )
}
