import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import { useSelector } from 'react-redux'

export default function DiplayDetails() {
    const state = useSelector(state => state.user)
    return (
        <Box sx={{display:"block", maxWidth:200}}>
            <Typography>  User Details</Typography>
            <Typography sx={{my:2}}> Name : {state.name}</Typography>
            <Typography sx={{my:2}}>Counter : {state.counter}</Typography>
        </Box>
    )
}
