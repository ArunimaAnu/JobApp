import { AppBar, Avatar, Box, Button, Divider, Drawer, List, ListItemIcon, Toolbar, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { blue } from '@mui/material/colors';

const Navuser = (props) => {
  var location = useLocation();
  var name =location.state;
  console.log(name)
  var navigate=useNavigate();
  const handleOne=()=>{
    navigate('/userdash', { state: { name } })
  }
  const handleTwo=()=>{
    navigate('/browser', { state: { name } })
  }
  const handleThree=()=>{
    navigate('/viewappjob', { state: { name } })
  }
  const handleFour=()=>{
    navigate('/updateprof', { state: { name } })
  }
    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [op, setOp] = React.useState(false);

  const toggDraw = (newOp) => () => {
    setOp(newOp);
  };

  const DrawerList = (
    <Box sx={{ width: 250, color:"#00000000" }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{backgroundColor:"#00000000", color:"blue"}}>
          <ListItem>
          {/* <Link to='/userdash/'> */}
            <ListItemButton onClick={handleOne}> 
              <ListItemText primary="Dashboard"/><br/>
              </ListItemButton>
              {/* </Link> */}
              </ListItem>
              <ListItem>
          {/* <Link to='/browser'> */}
            <ListItemButton onClick={handleTwo}> 
              <ListItemText primary="Browse Jobs" /><br/>
              </ListItemButton>
              {/* </Link> */}
              </ListItem>
              <ListItem >
              {/* <Link to='/viewappjob'> */}
              <ListItemButton onClick={handleThree}> 
              <ListItemText primary="View Applied Jobs" /><br/>
              </ListItemButton>
              {/* </Link> */}
              </ListItem>
              <ListItem >
              {/* <Link to='/updateprof'> */}
              <ListItemButton onClick={handleFour}> 
              <ListItemText primary="Update Profile" />
            </ListItemButton>
            {/* </Link> */}
          </ListItem><br/>
          <ListItem >
              <Link to='/'>
              <ListItemButton> 
              <ListItemText primary="Log out" />
            </ListItemButton>
            </Link>
          </ListItem>

      </List>
    </Box>
  );
  const DrawerOut = (
    <Box sx={{ width: 250, color:"#00000000" }} role="presentation" onClick={toggDraw(false)}>
<Typography></Typography>

    </Box>
  );
  return (
    <div className="nav">
      
      <AppBar position='static' sx={{backgroundColor:'#00000000'}}>
              <Toolbar >
              {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            
            <Button onClick={toggleDrawer(true)}><MenuIcon sx={{color:"black"}}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{color:"#00000000"}}>
        {DrawerList}
      </Drawer>
          {/* </IconButton> */}
          
       
              <Typography align='left' variant='h6' component="div" sx={{ flexGrow: 1, color:"black"}}>USER DASHBOARD</Typography>
      
              <Button onClick={toggDraw(true)}><Avatar src="/broken-image.jpg" /></Button>
      <Drawer open={open} onClose={toggDraw(false)} sx={{color:"#00000000", align:"right"}}>
        {DrawerList}
      </Drawer>
                  </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navuser