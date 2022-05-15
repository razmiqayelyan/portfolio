import { Box } from '@mui/material'
import React from 'react'
import About from '../design/About1.svg'


const AboutMe = () => {
  return (
    <>
      <Box sx={{

        width:{xs:"80wv", sm:"100wv"},
        height:{xs:"80wv", sm:"100wv"},
        display:{xs:"none", sm:"flex"},
        alignItems:"center",
        justifyContent:"center"
        }}>
          <img width="100%" height="100%" src={About} alt="" />

      </Box>
    </>
  )
}

export default AboutMe
