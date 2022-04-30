import React, { useState } from 'react'
import {AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material"
import {Mail, Notifications, Pets} from '@mui/icons-material';
import { borderRadius } from '@mui/system';
const StyledToolbar = styled(Toolbar) ({
  display: "flex",
  justifyContent : "space-between"
})

const Search = styled("div")(({theme}) => ({
  backgroundColor : "white",
  padding : "0 10px",
  borderRadius:theme.shape.borderRadius,
  width :"40%"
}))
const Icons = styled("div")(({theme}) => ({
  display:"none",
  gap:"10px",
  alignItems :"center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))
const UserBox = styled("div")(({theme}) => ({
  display:"flex",
  gap:"20px",
  alignItems :"center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <AppBar position="sticky">
     <StyledToolbar>
       <Typography variant='h6'
       sx={{display : {xs : "none", sm:"block"}}}
       >WEB DEV</Typography>
      <Pets 
      sx={{display : {xs : "block", sm:"none"}}}
      />
      <Search><InputBase placeholder='search...' /></Search>
      <Icons>
        <Badge badgeContent={4} color="error">
          <Mail/>
        </Badge>
        <Badge badgeContent={2} color="error">
          <Notifications/>
        </Badge>
        <Avatar 
        src="data:image/jpeg;base64,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"
        sx={{width : 30, height:30}}
        onClick={() => setOpen(true)}
        />
      </Icons>

      <UserBox onClick={() => setOpen(true)}>
        <Avatar 
        src="data:image/jpeg;base64,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"
        sx={{width : 30, height:30}}
        />
        <Typography variant='span'>Akki</Typography>
      </UserBox>
     </StyledToolbar>
     <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
    </>
  )
}

export default Navbar