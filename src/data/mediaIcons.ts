import medium_white from "../assets/icons/medium_white.png";
import medium_black from "../assets/icons/medium_black.png";
import github_white from "../assets/icons/github_white.png";
import github_black from "../assets/icons/github_black.png";
import codewars_white from "../assets/icons/codewars_white.png";
import codewars_black from "../assets/icons/codewars_black.png";
import linkedin_white from "../assets/icons/linkedin_white.png";
import linkedin_black from "../assets/icons/linkedin_black.png";

export const mediaIcons = [
  {
    id: "linked_in",
    tooltip: "LinkedIn",
    url: "https://www.linkedin.com/in/jameseaster-dev/",
    style: {},
    icon: {
      light: linkedin_white,
      dark: linkedin_black,
    },
  },
  {
    id: "github",
    tooltip: "GitHub",
    url: "https://github.com/jameseaster",
    style: {},
    icon: {
      light: github_white,
      dark: github_black,
    },
  },
  {
    id: "codewars",
    tooltip: "Codewars Profile",
    url: "https://www.codewars.com/users/jameseaster",
    icon: {
      light: codewars_white,
      dark: codewars_black,
    },
  },
  {
    id: "medium",
    tooltip: "Medium Articles",
    url: "https://medium.com/@jameseaster.dev",
    icon: {
      light: medium_white,
      dark: medium_black,
    },
  },
];
