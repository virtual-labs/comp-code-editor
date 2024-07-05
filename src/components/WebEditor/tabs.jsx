import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Code from './Code';
import Result from './Result';
import { DataContext } from './DataProvider';
import Header from './Header';
import { Chip, styled } from '@mui/material';
import { green, yellow, red } from '@mui/material/colors';

const DifficultyChip = styled(Chip)`
  margin-top: 5px;
  margin-bottom: 15px; /* Increased bottom margin */
  font-weight: bold;
  font-size: 11px; /* Reduced font size */
  padding: 0; /* Remove padding */
  height: 25px; /* Adjust height */
`;

function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case 'beginner':
      return green[500];
    case 'intermediate':
      return yellow[700];
    case 'advanced':
      return '#FF6F61';
    default:
      return 'default';
  }
}

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
  const { js, setJs, problems, exp, setExp } = React.useContext(DataContext);

  React.useEffect(() => {
    let data = problems[value];
    setExp(data);
    let inputs = data?.inputs?.map((inp, idx) => `inp${idx + 1}`);
    if (inputs == undefined) inputs = [];
    setJs(
      `/* Change only the function func
@params:
${'  ' + inputs?.map((inp, idx) => `${inp} = ${JSON.stringify(data?.inputs[idx])}`).join('\n  ')}
*/
const func = (${String(inputs)}) => {
// Write the code here
return 'hello world'
}
    `);
  }, [value, problems]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {problems.map((element, idx) => {
            let label = `Problem ${idx + 1}`;
            return <Tab label={label} {...a11yProps(idx)} />;
          })}
        </Tabs>
        <div className='problem-statement'>
          <h4 style={{ marginBottom: '9px' }}>{problems[value]?.['problem name']}</h4>
          <DifficultyChip
            label={problems[value]?.['difficulty']}
            style={{ backgroundColor: getDifficultyColor(problems[value]?.['difficulty']) }}
          />
          <br />  {/* Add a line break to ensure the chip is on a separate line */}
          <span>{problems[value]?.['description']}</span>
          <h5 style={{ fontStyle: 'italic' }}>Input Format</h5>
          <span>{problems[value]?.['inputs description']}</span>
          <h5 style={{ fontStyle: 'italic' }}>Output Format</h5>
          <span>{problems[value]?.['expected description']}</span>
        </div>
      </Box>
      {problems.map((element, idx) => (
        <CustomTabPanel value={value} index={idx}>
          <div className='parent'>
            <Code />
            <Result />
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
