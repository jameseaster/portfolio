import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// Types
export interface AbstractTabsProps {
  tabs: AbstractTab[];
  panels: AbstractPanel[];
}

export interface AbstractTab {
  id: string;
  label: string;
}

export interface AbstractPanel {
  id: string;
  components: React.ReactNode;
}

/**
 * Tooltip with title wrapped in Typography component with white font
 */
const AbstractTabs: React.FC<AbstractTabsProps> = ({ tabs, panels }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs centered value={value} onChange={handleChange}>
          {tabs.map((tab, idx) => (
            <Tab
              key={tab.id}
              label={tab.label}
              sx={{ textTransform: "none" }}
              {...a11yProps(idx)}
            />
          ))}
        </Tabs>
      </Box>
      {panels.map((panel, idx) => (
        <TabPanel key={panel.id} value={value} index={idx}>
          {panel.components}
        </TabPanel>
      ))}
    </Box>
  );
};

export default AbstractTabs;

interface TabPanelProps {
  index: number;
  value: number;
  children?: React.ReactNode;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
