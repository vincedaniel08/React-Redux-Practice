import { Box } from '@mui/system'
import React from 'react'
import UserDetails from '../components/UserDetails'
import DiplayDetails from '../components/DiplayDetails'

export default function Index() {
    return (
        <Box sx={{display:"block", textAlign:"center", mx:"40%",mt:30 }}>
            <UserDetails/>
            <DiplayDetails/>
        </Box>
    )
}
