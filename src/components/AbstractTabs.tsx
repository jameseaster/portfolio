import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// Types
export interface AbstractTabsProps {
  tabs: AbstractTab[];
}

export interface AbstractTab {
  id: string;
  label: string;
  panel: AbstractPanel;
}

export interface AbstractPanel {
  id: string;
  components: React.ReactNode;
}

/**
 * Tooltip with title wrapped in Typography component with white font
 */
const AbstractTabs: React.FC<AbstractTabsProps> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs sx={{ mb: 2 }} centered value={value} onChange={handleChange}>
          {tabs.map((tab, idx) => (
            <Tab
              key={tab.id}
              disableRipple
              label={tab.label}
              sx={{ textTransform: "none", py: 0 }}
              {...a11yProps(idx)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ panel }, idx) => (
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
      {value === index && (
        <Box
          sx={{
            px: 3,
            pb: 3,
            overflow: "scroll",
            height: { xs: "60vh", sm: "70vh", md: "80vh" },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
