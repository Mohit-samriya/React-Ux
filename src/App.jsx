import * as React from 'react';
import './App.css';
import { Typography,AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Tabs, Tab, Box, Avatar } from '@material-ui/core'
import ResponsiveAppBar from './Bar'
import { createTheme,ThemeProvider } from '@mui/material/styles';
//import {Avatar} from '@material-ui/icons'
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { green, purple } from '@mui/material/colors';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles((theme) => 
    createStyles({
    head: {
      display: "flex",
      justifyContent: "space-between"
    },

    f: {
      display: "flex",
      flexDirection: 'row'
    },

    f1: {
      display: "flex",
      flexDirection: 'column',
      rowGap: '10px',
    },

    f2: {
      display: "flex",
      flexDirection: 'column',
      rowGap: '10px',
    },

    f3: {
      display: "flex",
      flexDirection: 'column',
      rowGap: '10px',
    },

    f4: {
      display: "flex",
      flexDirection: 'column',
      rowGap: '10px',
    },

    tab: {
      background: "white"
    },

    tabs: {
      borderBlockColor: '#191D19',
      border: "2px",
      paddingTop: '70px',
    },
    
  }));

  const theme = createTheme({
    palette : {
        primary: {
            main: green[100],
        },
        secondary: {
            main: purple[500],
          },
    }
})

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 5 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  

const App = () => {

  const classes = useStyles();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className='app'>
    <CssBaseline/>
    <ResponsiveAppBar/> 
    <Box paddingTop={15} paddingLeft={35} sx={{background:'#F7F7F7',width: '100%'}} >
    <Container className={classes.head}>
    <Typography variant='h6'>Patient Information</Typography>
    <Typography variant='h7'>Last updated 10:25 AM today</Typography>
    </Container>
    <Container className={classes.f}>
    <Avatar sx={{ width: 56, height: 56}}>S</Avatar>
      <Container className={classes.f1}>
      <Typography variant='h6'>Sara Smith</Typography>
      <Typography variant='h7'>Phone:   302-857-9685</Typography>
      <Typography variant='h7'>Email:   sarasmith@gmail.com</Typography>
      <Typography variant='h7'>Gender:    Female</Typography>
      <Typography variant='h7'>Age:   45</Typography>
      </Container>
      <Container className={classes.f2}>
      <Typography variant='h7'>Surgery Type: Rotator Cuff Repair</Typography>
      <Typography variant='h7'>Surgery Date: 15 Aug 2020</Typography>
      <Typography variant='h7'>Height(cm): 163</Typography>
      <Typography variant='h7'>Weight(lb): 110 </Typography>
      <Typography variant='h7'>BMI: 19</Typography>
      </Container>
      <Container className={classes.f3}>
      <Typography variant='h7'>Anesthesilogist: Dr.Chrtina Hardway</Typography>
      <Typography variant='h7'>Anesthesilogist Phone: 301-896-5482</Typography>
      <Typography variant='h7'>Anesthesilogist Email: christna@gmail.com</Typography>
      </Container>
      <Container className={classes.f4}>
        <Typography variant='h7'> Surgery Clearance</Typography>
        <Avatar sx={{ bgcolor: "#43C43F" , width: 56, height: 56}}>YES</Avatar>
      </Container>
    </Container>
    <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="wrapped label tabs example"
        className={classes.tabs}
      >
        <Tab  label="List of prior Surgenes" {...a11yProps(0)}/>
        <Tab  label=" List of Medical Diagnosis" {...a11yProps(1)}/>
        <Tab  label="List of Medications" {...a11yProps(2)}/>
        <Tab  label="Airway Evalution " {...a11yProps(3)}/>
        <Tab  label="Anesthesia Clearance and Recommendation" {...a11yProps(4)} weapped />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.tab}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box width={300} marginBottom={3}>
          <Box  sx={{ p: 1, background: '#E8F5FE' }}>
            <Typography>First Time Surgery</Typography>
          </Box>
            <Box sx={{background:'#F7F7F7'}}>
            <Typography>NO</Typography>
            </Box>
          </Box>

          <Box width={400} marginBottom={3}>
          <Box  sx={{ p: 1, background: '#E8F5FE' }}>
            <Typography>Family History of Surgical Complication</Typography>
          </Box>
            <Box sx={{background:'#F7F7F7'}}>
            <Typography>YES</Typography>
            </Box>
          </Box>

          <Box width={400} marginBottom={3}>
          <Box  sx={{ p: 1, background: '#E8F5FE' }}>
            <Typography>if Yes, please provide more details</Typography>
          </Box>
            <Box sx={{background:'#F7F7F7'}}>
            <Typography>The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.</Typography>
            </Box>
          </Box>
          
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
    </div>
  );
}


export default App;
