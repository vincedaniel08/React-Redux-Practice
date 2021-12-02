import { Box } from '@mui/system'
import React from 'react'
import UserDetails from '../components/UserDetails'
import DiplayDetails from '../components/DiplayDetails'

export default function Index() {
    return (
        <Box sx={{ textAlign:"center",mt:5 }}>
            <UserDetails/>
            <DiplayDetails/>
        </Box>
    )
}
