import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import Main from '../design/main00.svg'
import Logo from '../design/logo1.svg'
import { animateScroll } from 'react-scroll/modules';


import React from 'react'

const MainPage = () => {
  return (
      <Box  sx={{
        color:"white",
        maxWidth:  "100wv",
        maxHeight: "100hv"
      }}>
            <AppBar sx={{bgcolor:"black"}} position='relative' color='transparent'>
                  <Toolbar>
                    

                    <Box sx={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:{xs:"space-between", sm:"space-between"},
                      width:"100%",
                      height:50,
                    }}>
                      <Box sx={{
                       
                      }}>
                        <IconButton onClick={() => animateScroll.scrollTo(0)}>
                          <img width='50px' src={Logo} alt="" />
                        </IconButton>

                      </Box>
                      <Box sx={{
                      display:"flex",
                      flexDirection:"row",
                      alignItems:"center",
                      gap:5
                    }}>



                      {/* <Box sx={{
                        display:"flex",
                        gap:10
                      }}>
                      <IconButton sx={{
                width:{xs:5, sm:10, md:15},
                height:{xs:5, sm:10, md:15}
              }}>
                <img src={Email} alt="" />
              </IconButton >
              <IconButton sx={{
                width:{xs:5, sm:10, md:15},
                height:{xs:5, sm:10, md:15}
              }}>
                <img src={Github} alt="" />
              </IconButton>
              <IconButton sx={{
                width:{xs:5, sm:10, md:15},
                height:{xs:5, sm:10, md:15}
              }}>
                <img src={LinkedIn} alt="" />
              </IconButton>
                      </Box> */}

                      <Button sx={{display:{xs:"none", sm:"block"}}} onClick={() => animateScroll.scrollTo(800)}  color="inherit" variant='text'> <Typography   variant='subtitle2'>About Me</Typography></Button>
                     <Button sx={{display:{xs:"none", sm:"block"}}} onClick={() => animateScroll.scrollTo(1500)} variant='text' color="inherit"><Typography  variant='subtitle2'>Skills</Typography></Button>
                      <Button sx={{
                        display:{xs:"none", sm:"block"},
                        backgroundColor:"white",
                        color:"black",
                        borderRadius:10,
                        '&:hover':{
                          backgroundColor:"black",
                          color:"white",
                          border:"0.2px solid white"
                        }
                      }} variant='contained'
                      onClick={() => animateScroll.scrollTo(2700)}
                      >Contact Me</Button>
                       <Button size='small' sx={{
                        display:{xs:"block", sm:"none"},
                        backgroundColor:"white",
                        color:"black",
                        borderRadius:10,
                        '&:hover':{
                          backgroundColor:"black",
                          color:"white",
                          border:"0.2px solid white"
                        }
                      }} variant='contained'
                      onClick={() => animateScroll.scrollTo(2000)}
                      
                      >Contact Me</Button>
                      
                      </Box>

                    </Box>
                        
                  </Toolbar>
            </AppBar>
            <Box sx={{
             
            }}>
              <img width="100%" src={Main} alt="" />
            </Box>
      </Box>
  )
}

export default MainPage
