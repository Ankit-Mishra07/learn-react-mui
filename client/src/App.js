import {Button, styled, Typography} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import Add from '@mui/icons-material/Add';
function App() {
  const BlueButton = styled(Button)(({theme}) => ({
    backgroundColor : "skyblue",
  color : "#888",
  margin: 5,
  "&:hover" : {
    backgroundColor : "lightblue"
  },

  "&:disabled" : {
    backgroundColor : "gray",
    color : "white"
  }
  }))


  return (
    <div>
     <Button variant="text">Text</Button>
<Button startIcon={<SettingsIcon />} variant="contained" color="otherColor" size="small">Settings</Button>
<Button startIcon={<Add />} variant="contained" color="success" size="small">Add new post</Button>
<Button variant="outlined" disabled>Outlined</Button>
<Typography variant="h1" component="p">
  it uses h1 style but its a p tag
</Typography>;
    <BlueButton>My Button</BlueButton>
    <BlueButton>My another Button</BlueButton>
    </div>
  );
}

export default App;
