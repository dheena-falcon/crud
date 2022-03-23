import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DatePicker from './DatePicker'
import AssignUser from './AssignUser';
import TaskDescription from './TaskDescription';
import axios from 'axios';
import { useEffect } from 'react';
import TaskList from './TaskList';

export default function Task() {
    const [showResults, setShowResults] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const [taskObj, settaskObj] = React.useState(null)
    const primary = blue[50];

    const handleChange = () => {
        if(!showResults){
            setShowResults(true)
            setCount(count + 1)
        }
       
        
      };
    const handleSave = () => {
        setShowResults(false)
       alert('saved')
       settaskObj('added successfully')
        
      };
      const handleCancel = () => {
        setShowResults(false)
        setCount(count - 1)
      };
      useEffect(()=>{
        const headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const url = 'https://stage.api.sloovi.com/login'
        const article = { 
                email : "smithwills1989@gmail.com",
                password : "12345678" 
                };
      
            try {
                const data =  axios.post(url, article,{headers}); 
                  console.log(data) 
            } catch (error) {
                console.log(error) 
            }
        

      },[])


      
      
  return (

   
    <div>
    <Box  border={1} borderColor='lightgray' width={400}  mt={20} ml={5} bgcolor={primary}> 
    <AppBar position="static" style={{backgroundColor: '#f2f2f2',border:'1px solid'}} >
        <Toolbar>
       
          <Typography variant="h6"  style={{flexGrow: 1,color:'black'}}>
            Task   {count}
          </Typography>
        
          <IconButton edge="start"   aria-label="menu" onClick={handleChange}>
            <AddIcon  />
          </IconButton>
        </Toolbar>
      </AppBar>

      { showResults ? 
        <Box p={2} mt={2}>
             <Box   mb={1} display="flex" flexDirection='column'>
            <TaskDescription />
            </Box>
        <DatePicker />
        <Box  mt={2} mb={1} display="flex" flexDirection='column'>
        <AssignUser />
        </Box>
        
            <Box  mt={2} mb={1} display="flex" justifyContent="flex-end" mr={1.9}>
            <Button style={{textTransform: 'none'}}  onClick={handleCancel}>Cancel</Button>
            <Button  variant="contained" style={{backgroundColor: 'green',border:'none',color:'#fff',textTransform: 'none',marginLeft:'10px'}} onClick={handleSave}>Save</Button>
            </Box> 
        </Box> : 
        <Box>
            {taskObj && !showResults? <TaskList/>:null}
           
           
        
         </Box> }
        
      
    </Box>
    </div>
   
  )
}
