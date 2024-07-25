import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataContext } from './DataProvider';
import { Chip, styled, Button, Collapse } from '@mui/material';
import { green, yellow } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import Code from './Code';
import Result from './Result';
const BACKGROUND_COLOR_LIGHT_GRAY = '#f0f0f0';
const BACKGROUND_COLOR_DARKER_GRAY = '#e0e0e0';

const DifficultyChip = styled(Chip)`
  margin-top: 5px;
  margin-bottom: 15px; /* Increased bottom margin */
  font-weight: bold;
  font-size: 11px; /* Reduced font size */
  padding: 0; /* Remove padding */
  height: 25px; /* Adjust height */
`;

// Utility function to get difficulty color
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

// Function to get a lighter shade of a color using alpha function
function getLighterColor(color, opacity) {
  return alpha(color, opacity);
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
  const { setJs, problems, setExp } = React.useContext(DataContext);
  const [showHint, setShowHint] = React.useState(false);

  React.useEffect(() => {
    let data = problems[value];
    setExp(data);
    let inputs = data?.inputs?.map((inp, idx) => `inp${idx + 1}`);
    if (inputs === undefined) inputs = [];
    setJs(
      `/* Change only the function func
@params:
${inputs.map((inp, idx) => `  ${inp} = ${JSON.stringify(data?.inputs[idx])}`).join('\n')}
*/
const func = (${inputs.join(', ')}) => {
// Write the code here
return 'hello world'
}
      `
    );
  }, [value, problems, setExp, setJs]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {problems.map((element, idx) => {
            let label = `Problem ${idx + 1}`;
            let difficulty = problems[idx]?.difficulty || 'default';
            let tabColor = getLighterColor(getDifficultyColor(difficulty), 0.6); // Adjust brightness with alpha function
            return (
              <Tab
                key={idx}
                label={label}
                {...a11yProps(idx)} // Correct usage of a11yProps
                sx={{ backgroundColor: tabColor }}
              />
            );
          })}
        </Tabs>

        <div className="problem-statement" style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '9px' }}>{problems[value]?.['problem name']}</h4>
          <DifficultyChip
            label={problems[value]?.['difficulty']}
            style={{ backgroundColor: getDifficultyColor(problems[value]?.['difficulty']) }}
          />
          <br />
          <span>{problems[value]?.['description']}</span>
          <h5 style={{ fontStyle: 'italic' }}>Input Format</h5>
          <span>{problems[value]?.['inputs description']}</span>
          <h5 style={{ fontStyle: 'italic' }}>Output Format</h5>
          <span>{problems[value]?.['expected description']}</span>
          <br />
          {problems[value]?.hint && (
            <>
              <Button
                style={{ marginTop: '20px', marginBottom: '10px' }}
                onClick={toggleHint}
                sx={{
                  mt: 1,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  color: '#000',
                  backgroundColor: BACKGROUND_COLOR_LIGHT_GRAY,
                  '&:hover': {
                    backgroundColor: BACKGROUND_COLOR_DARKER_GRAY,
                  },
                }}
              >
                Hint
              </Button>
              <Collapse in={showHint}>
                <Box>
                  <Typography>{problems[value]?.hint}</Typography>
                </Box>
              </Collapse>
            </>
          )}
        </div>
      </Box>
      {problems.map((element, idx) => (
        <CustomTabPanel value={value} index={idx} key={idx}>
          <div className="parent">
            <Code />
            <Result />
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
