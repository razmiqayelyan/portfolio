import { Box, IconButton } from '@mui/material'
import React from 'react'
import './css/Banner.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { animateScroll } from 'react-scroll/modules';
import Github from '../design/github.svg'
import LinkedIn from '../design/linkedin.svg'

const Banner = () => {
  return (
    <Box className='banner-bg'
      sx={{
        width:"100vw",
        height:"10vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}
    >
      <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
        
      }}>
      
        <IconButton>
          <a href="https://github.com/razmiqayelyan" rel="noreferrer" target="_blank"  ><img width="70%" src={Github} alt="" /></a>
          </IconButton>
         
              <IconButton  onClick={() => animateScroll.scrollTo(0)}  sx={{color:"white"}}>
              <ArrowCircleUpIcon/>
            </IconButton>
           
       
        <IconButton >
          <a href="https://am.linkedin.com/in/raz-miqayelyan-122041209" rel="noreferrer"  target="_blank"  ><img width="70%" src={LinkedIn} alt="" /></a>
        </IconButton>
      </Box>
      
    </Box>
  )
}

export default Banner
