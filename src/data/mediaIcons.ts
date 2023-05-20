import medium from "../assets/icons/medium.png";
import github from "../assets/icons/github.png";
import codewars from "../assets/icons/codewars.png";
import linkedin from "../assets/icons/linkedin.png";

export const mediaIcons = [
  {
    id: "linked_in",
    img: linkedin,
    tooltip: "LinkedIn",
    url: "https://www.linkedin.com/in/jameseaster-dev/",
    style: { filter: "grayScale(1)" },
  },
  {
    id: "github",
    img: github,
    tooltip: "GitHub",
    url: "https://github.com/jameseaster",
    style: { filter: "grayScale(1)" },
  },
  {
    id: "codewars",
    img: codewars,
    tooltip: "Codewars Profile",
    url: "https://www.codewars.com/users/jameseaster",
    // style: { backgroundColor: "#A8332A" },
    style: { backgroundColor: "#CCC" },
  },
  {
    id: "medium",
    tooltip: "Medium Articles",
    img: medium,
    url: "https://medium.com/@jameseaster.dev",
    // style: { backgroundColor: "white" },
    style: { filter: "grayScale(1)" },
  },
];
