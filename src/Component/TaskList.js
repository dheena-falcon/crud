import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import NotificationsPausedIcon from '@material-ui/icons/NotificationsPaused';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
export default function TaskList() {
  return (
      <>
      <Box style={{display:'flex',alignItems:'center'}}>
      <Box width={60} height={55} style={{padding:'10px'}}>
      <img width='100%' height='100%' style={{borderRadius:'10px'}} src='https://images.prismic.io/digitalocean/0b619d51-a723-4748-997f-39ed5697a540_intro-to-cloud.jpg?auto=compress,format' alt="BigCo Inc. logo"/>
      </Box>
        <Box style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
          <p style={{fontSize:'14px',margin:"0"}}>Follow Up</p>
          <p style={{fontSize:'14px',margin:"0",color:'pink'}}>29/4/2020</p>
          </Box>
          <Box style={{display:'flex',justifyContent:'flex-end',padding:'15px 10px 15px 0',flexGrow:1}}>
        <Box mr={3} bgcolor='#f2f2f2'>
        <ButtonGroup  size="small" aria-label="small outlined button group" >
        <Button variant="outlined" style={{padding:'0px'}}>
        <IconButton aria-label="delete"  >
          <Edit fontSize="small" />
        </IconButton>
        </Button>
        </ButtonGroup>
        </Box>

        <Box bgcolor='#f2f2f2'>   
            <ButtonGroup  size="small" aria-label="small outlined button group">
        <Button  style={{padding:'0px'}}>
            <IconButton aria-label="delete"  >
          <NotificationsPausedIcon fontSize="small" />
        </IconButton>
        </Button>
        <Button  style={{padding:'0px'}}>
        <IconButton aria-label="delete"  >
          <CheckIcon fontSize="small" />
        </IconButton>
        </Button>

        </ButtonGroup>
</Box>
    

    </Box>
    </Box>
      </>

  )
}
