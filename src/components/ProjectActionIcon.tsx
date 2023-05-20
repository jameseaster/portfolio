// Imports
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

// Types
interface ProjectActionIconProps {
  icon: string;
}

const ActionIcons: { [key: string]: React.ReactNode } = {
  web: <WebIcon fontSize="large" />,
  code: <CodeIcon fontSize="large" />,
  apple: <AppleIcon fontSize="large" />,
  google: <GoogleIcon fontSize="large" />,
};

/**
 * ProjectActionIcon are the icons available for a projects actions
 */
const ProjectActionIcon: React.FC<ProjectActionIconProps> = ({ icon }) => {
  return <>{ActionIcons[icon]}</>;
};

export default ProjectActionIcon;
