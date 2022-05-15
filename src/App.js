import { Box } from '@mui/material';
import './App.css';
import AboutMe from './components/AboutMe';
import Form from './components/Form';
import MainPage from './components/MainPage';
import Banner from './components/Banner';

function App() {
  return (
    <Box sx={{
      width:"100%",
      height:"300%",
      overflow:"hidden",
      display:"flex",
      flexDirection:"column"
    }}>
    <MainPage/>
    <AboutMe/>
    <Form/>
    <Banner/>    
      
    </Box>
  );
}

export default App;
