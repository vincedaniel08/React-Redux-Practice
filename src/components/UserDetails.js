import React,{useState} from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useDispatch } from 'react-redux'
import { setName } from '../redux/actions/userAction'

export default function UserDetails() {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name:""
    })

    const handleChangeName = (e) => {
     
        setState({...state,name: e.target.value})
    }

    const submit = (e) =>{
      e.preventDefault();
        console.log(state.name);
        dispatch(setName(state.name));
    }

    return (
        <Box sx={{display:"block", maxWidth:200}}>
           <Typography sx={{my:1}}>Enter User Details</Typography>
           <TextField variant="outlined" label="Name" onChange={handleChangeName} value={state.name}/> 
           <Button variant="outlined" fullWidth sx={{my:2}} onClick={submit}>Submit</Button>
        </Box>
    )
}
