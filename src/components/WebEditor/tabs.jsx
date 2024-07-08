import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Code from './Code'
import Result from './Result'
import { DataContext } from './DataProvider'
import Header from './Header'

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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
  const { js, setJs, problems, exp, setExp } = React.useContext(DataContext)

  React.useEffect(() => {
    let data = problems[value]
    setExp(data)
    let inputs = data?.inputs?.map((inp, idx) => `inp${idx+1}`)
    if(inputs == undefined) inputs = [];
    setJs(
    `/* Change only the function func
@params:
${inputs?.map((inp,idx) => `${inp} = ${JSON.stringify(data?.inputs[idx])}`).join('\n  ')}
*/
const func = (${String(inputs)}) => {
// Write the code here
return 'hello world'
}
    `)
  }, [value, problems])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {problems.map((element, idx) => {
            // return <Tab label=`Item ${idx}` {...a11yProps(0)} />
            let label = `Problem ${idx+1}`
            return <Tab label={label} {...a11yProps(idx)} />
        })
        }
        </Tabs>
        <div className='problem-statement'>
            <h4>{problems[value]?.['problem name']}</h4>
            <span>{problems[value]?.['description']}</span>
            <h5 style={{fontStyle: 'italic'}}>Input Format</h5>
            <span>{problems[value]?.['inputs description']}</span>
            <h5 style={{fontStyle: 'italic'}}>Output Format</h5>
            <span>{problems[value]?.['expected description']}</span>
        </div>
      </Box>
      {
        problems.map((element, idx) => {

            return (
                <CustomTabPanel value={value} index={idx}>
                    <div className='parent'>
                        <Code />
                        <Result />
                    </div>
                </CustomTabPanel>
            )
        })
      }
    </Box>
  );
}