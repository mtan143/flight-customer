import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableOfContents from '../components/TableOfContents'
import ComboTicket from '../components/ComboTicket';
import Entertainment from '../components/Entertainment';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div  > 

     
    <Box sx={{ width: '100%' , }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , justifyContent: 'center'}} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"centered >
          <Tab label="Các chặng bay và hãng bay" {...a11yProps(0)} />
          <Tab label="Combo Vé máy bay" {...a11yProps(1)} />
          <Tab label="Hoạt động Tham quan và Giải trí" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TableOfContents />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ComboTicket />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Entertainment />
      </TabPanel>
    </Box>
    </div>
  );
}