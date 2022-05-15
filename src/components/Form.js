import { Alert, Box, Button, Collapse, Container, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import './css/Form.css';
import Banner from '../design/form-banner.svg';
import emailjs from 'emailjs-com'

const Form = () => {
    const form = useRef()
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const [type, setType] = useState('success')

    const sendEmail = (e) => {
        e.preventDefault()
        if(!form.current.email.value || !form.current.name.value || !form.current.phone.value) return
        emailjs.sendForm('Your Service ID', 'Template ID', form.current, 'API_KEY')
        .catch((err) =>  {setText("Error, Please Try Again"); setType("error"); setOpen(true)})
        .then(() => {setText("Message Sended Successfully"); setType("success"); setOpen(true)})
        
    }
    useEffect(() => {
        if(open){

        setTimeout(() => {
            setOpen(!open)
        }, 3000)}
    }, [open])
  return (
    <Box sx={{    
        width:"100vw",
        height:{xs:"60vh",sm:"100vh"}
    }} className='form-bg'>
        <Box sx={{
            margin:{xs:0, sm:20},
            width:{xs:"100vw",sm:"80vw"},
            height:{xs:"100vh",sm:"70vh"},
           
        }}>
            <Box sx={{
                width:"100%",
                height:{xs:"40%", sm:"90%"},
                display:"flex",
                alignItems:"center",
                flexDirection:"center"
            }}>
            <Container>
                <Box sx={{
                    
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"flex-end",
                    gap:2
                }}>
                    <Box sx={{
                        display:{xs:"flex", sm:"none"},
                        justifyContent:"center",
                        alignItems:"center",
                        marginTop:10
                        

                    }}>
                        <Box sx={{display:open?"none":""}}>
                        <img src={Banner} alt="" />
                        </Box>
                    </Box>
                    <Box sx={{
                    desplay:open?'block':'none',
                    width:{sx:"100%", sm:"30%"},
                    height:{sx:"100%", sm:"30%"}
                }}>
                <Collapse in={open}>
                    <Alert width='100%' severity={type}>{text}</Alert>
                </Collapse>
                </Box>
            <form style={{display:"flex", flexDirection:"column", gap:'20px'}} ref={form} onSubmit={sendEmail}>

                <TextField required name='name' label='Full Name'></TextField>
                <TextField required name='email' label='Email'></TextField>
                <TextField required name='phone' label='Phone'></TextField>
                <TextField name='text' multiline label='Your Message'></TextField>
                <Button type='submit'  color="inherit" variant='contained'>Submit</Button>
                
            </form>
                </Box>
            </Container>
            </Box>
        </Box>

            
      
    </Box>
  )
}

export default Form
