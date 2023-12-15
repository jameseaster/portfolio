// Imports
import packageJson from "../../package.json";

// Global State Actions
interface Actions {
  UPDATE_ANIMATION_TRACKER: string;
}
const ACTIONS: Actions = {
  UPDATE_ANIMATION_TRACKER: "UPDATE_ANIMATION_TRACKER",
};

// App Constants
interface AppConstants {
  APP_VERSION: string;
  HEADER_HEIGHT: number;
  NAV_ICON_SIZE: number;
  PATH_NAMES: { [key: string]: string };
}
const APP_CONSTANTS: AppConstants = {
  APP_VERSION: packageJson.version,
  HEADER_HEIGHT: 12,
  NAV_ICON_SIZE: 40,
  PATH_NAMES: {
    "/": "",
    "/info": "About Me",
    "/work": "My Work",
    "/contact": "Contact",
  },
};

export { ACTIONS, APP_CONSTANTS };
