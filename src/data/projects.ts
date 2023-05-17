import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

export const projects = [
  {
    id: "123",
    label: "First",
    short:
      "Here is a short description that shouldn't be longer than two lines / 85 characters.",
    details: [
      `Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
    over medium-high heat. Add chicken, shrimp and chorizo, and cook,
    stirring occasionally until lightly browned, 6 to 8 minutes.`,
      `Transfer shrimp to a large plate and set aside, leaving chicken
    and chorizo in the pan.`,
      `Add pimentón, bay leaves, garlic,
    tomatoes, onion, salt and pepper, and cook, stirring often until
    thickened and fragrant, about 10 minutes. Add saffron broth and
    remaining 4 1/2 cups chicken broth; bring to a boil.`,
    ],
    gallery: [
      {
        id: "123",
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/1920px-American_bison_k5680-1.jpg`,
        label: "pic1",
      },
      {
        id: "234",
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/1920px-American_bison_k5680-1.jpg`,
        label: "pic1",
      },
      {
        id: "345",
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/1920px-American_bison_k5680-1.jpg`,
        label: "pic1",
      },
    ],
    icons: [
      {
        id: "abc",
        Icon: WebIcon,
        tooltip: "Website",
        link: "https://sorting-viewer.netlify.app/",
      },
      {
        id: "cde",
        Icon: CodeIcon,
        tooltip: "Code",
        link: "https://github.com/jameseaster/sorting-viewer",
      },
      {
        id: "def",
        Icon: AppleIcon,
        tooltip: "App Store",
        link: "https://apps.apple.com/us/app/winterfest-group/id6444426082",
      },
      {
        id: "efg",
        Icon: GoogleIcon,
        tooltip: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.winterfest",
      },
    ],
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/1920px-American_bison_k5680-1.jpg`,
  },
];
