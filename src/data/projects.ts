import scc from "../assets/screenshots/scc.png";
import scc2 from "../assets/screenshots/scc2.png";
import scc3 from "../assets/screenshots/scc3.png";
import scc4 from "../assets/screenshots/scc4.png";
import scc5 from "../assets/screenshots/scc5.png";
import music from "../assets/screenshots/music.png";
import music2 from "../assets/screenshots/music2.png";
import music3 from "../assets/screenshots/music3.png";
import music4 from "../assets/screenshots/music4.png";
import workflow from "../assets/screenshots/workflow.png";
import workflow2 from "../assets/screenshots/workflow2.png";
import workflow3 from "../assets/screenshots/workflow3.png";
import workflow4 from "../assets/screenshots/workflow4.png";
import navportal from "../assets/screenshots/navportal.png";
import navportal2 from "../assets/screenshots/navportal2.png";
import navportal3 from "../assets/screenshots/navportal3.png";
import navportal4 from "../assets/screenshots/navportal4.png";
import sorting_viewer from "../assets/screenshots/sorting_viewer.png";
import sorting_viewer2 from "../assets/screenshots/sorting_viewer2.png";
import sorting_viewer3 from "../assets/screenshots/sorting_viewer3.png";
import winterfest_mobile from "../assets/screenshots/winterfest_mobile.png";
import winterfest_mobile2 from "../assets/screenshots/winterfest_mobile2.png";
import mobile_app_manager from "../assets/screenshots/mobile_app_manager.png";
import mobile_app_manager2 from "../assets/screenshots/mobile_app_manager2.png";
import mobile_app_manager3 from "../assets/screenshots/mobile_app_manager3.png";
import mobile_app_manager4 from "../assets/screenshots/mobile_app_manager4.png";
import mobile_app_manager5 from "../assets/screenshots/mobile_app_manager5.png";

export const projects = [
  {
    id: "navportal_project_card",
    image: navportal,
    label: "NavPortal",
    short:
      "United States Army Corps of Engineers multi-platform waterway management application.",
    details: [
      `Features: Data filtering, insight visualizations, interactive map, data table, asynchronous analysis, project persistence, authentication`,
      `Tech Stack: React, Esri, Elastic, MUI, Azure`,
    ],
    gallery: [
      {
        id: "hAQh0367kveT",
        image: navportal,
        label: "navportal_charts",
      },
      {
        id: "u57i5zi0zuJw",
        image: navportal3,
        label: "navportal_project_select",
      },
      {
        id: "UVJCuPjQd8vc",
        image: navportal2,
        label: "naportal_datatable",
      },
      {
        id: "uSlagCl0OonB",
        image: navportal4,
        label: "navportal_template",
      },
    ],
    icons: [
      {
        id: "OD2suobjDOij",
        link: "",
        disabled: true,
        icon: "web",
        tooltip: "Private Website",
      },
      {
        id: "e7AkVEmkzTOj",
        icon: "code",
        disabled: true,
        tooltip: "Private Repository",
        link: "",
      },
    ],
  },
  {
    id: "secure_care_connect_card",
    image: scc2,
    label: "Secure Care Connect",
    short:
      "Progressive web app that utilizes verifiable credentials to decentralize health care needs.",
    details: [
      `Features: Instant message, verifiable profile, team onboarding, & decentralized control of medical profile`,
      `Vue.js, Quasar, MongoDB, Express`,
    ],
    gallery: [
      {
        id: "kDPXpvoaujM2",
        image: scc2,
        label: "scc2",
      },
      {
        id: "9UsquSgClCBX",
        image: scc,
        label: "scc",
      },
      {
        id: "Hp0BMNcZwznU",
        image: scc3,
        label: "scc3",
      },
      {
        id: "9hz8ivRZVauQ",
        image: scc4,
        label: "scc4",
      },
      {
        id: "RlGu6xba3UgN",
        image: scc5,
        label: "scc5",
      },
    ],
    icons: [
      {
        id: "pQkFZmLJJZob",
        icon: "code",
        tooltip: "Private Repository",
        disabled: true,
        link: "https://github.com/dogwoodlogic/SecureCareConnect",
      },
      {
        id: "yOGYgApSqFMz",
        link: "https://qc.securecare.cloud/",
        disabled: false,
        icon: "web",
        tooltip: "Website",
      },
    ],
  },
  {
    id: "winterfest_mobile_card",
    image: winterfest_mobile,
    label: "Winterfest Mobile App",
    short:
      "Official conference mobile app that connects attendees through information & activities.",
    details: [
      `Features: Live polls with realtime results, raffle drawings, news feed, & event schedule`,
      `Tech Stack: React Native, Google Firebase`,
    ],
    gallery: [
      {
        id: "vB6MDAacdKeO",
        image: winterfest_mobile2,
        label: "winterfest_mobile2",
      },
      {
        id: "OfbTVr87ztnN",
        image: winterfest_mobile,
        label: "winterfest_mobile",
      },
    ],
    icons: [
      {
        id: "MNJ6st3BFKjY",
        icon: "code",
        tooltip: "Private Repository",
        disabled: true,
        link: "https://github.com/jameseaster/winterfest",
      },
      {
        id: "KCbAX6lIdTae",
        icon: "apple",
        tooltip: "App Store",
        disabled: false,
        link: "https://apps.apple.com/us/app/winterfest-group/id6444426082",
      },
      {
        id: "OtZpgXnGx6Ib",
        icon: "google",
        disabled: false,
        tooltip: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.winterfest",
      },
    ],
  },
  {
    id: "winterfest_mobile_manager_card",
    image: mobile_app_manager,
    label: "Mobile App Content Manager",
    short:
      "Manages Winterfest mobile app by updating component content without redeploying code.",
    details: [
      `Features: Provides mobile app stats & insights and controls all raffles, news cards, schedule, and live polls.`,
      `React, Firebase, MUI, Nivo Charts`,
    ],
    gallery: [
      {
        id: "qtrJnmlyb9p3",
        image: mobile_app_manager,
        label: "mobile_app_manager",
      },
      {
        id: "jKSdClR2ymgb",
        image: mobile_app_manager2,
        label: "mobile_app_manager2",
      },
      {
        id: "XwJkNSlwKuC7",
        image: mobile_app_manager3,
        label: "mobile_app_manager3",
      },
      {
        id: "9sSEm2VRZvOC",
        image: mobile_app_manager4,
        label: "mobile_app_manager4",
      },
      {
        id: "mRSb6CZBXF1x",
        image: mobile_app_manager5,
        label: "mobile_app_manager5",
      },
    ],
    icons: [
      {
        id: "pQkFZmLJJZob",
        icon: "code",
        tooltip: "Private Repository",
        disabled: true,
        link: "https://github.com/jameseaster/wf-content-mgmt",
      },
      {
        id: "yOGYgApSqFMz",
        link: "https://winterfest-app-manager.netlify.app/home",
        disabled: false,
        icon: "web",
        tooltip: "Website",
      },
    ],
  },
  {
    id: "workflow_card",
    image: workflow,
    label: "Workflow",
    short:
      "Internal platform for geospatial analyst team's management workflow and sprint insights.",
    details: [
      `Features: Interactive map, customized kanban board, sprint cycle creations, & dashboard for team analytics`,
      `React, Redux, Esri, React-Router, Express, MongoDB, Sass`,
    ],
    gallery: [
      {
        id: "KbPPIl24wcon",
        image: workflow,
        label: "workflow",
      },
      {
        id: "Agjg5TtoFE6G",
        image: workflow2,
        label: "workflow2",
      },
      {
        id: "Y6PvuO5zqP9g",
        image: workflow3,
        label: "workflow3",
      },
      {
        id: "UAwcOixuJWpT",
        image: workflow4,
        label: "workflow4",
      },
    ],
    icons: [
      {
        id: "ogaLvoLnON3O",
        icon: "code",
        tooltip: "Code",
        disabled: false,
        link: "https://github.com/JALBTCX-PFM-ABE/workflow-client",
      },
      {
        id: "M7Qi6Gq7e1KA",
        link: "",
        disabled: true,
        icon: "web",
        tooltip: "Interal Team Access Only",
      },
    ],
  },
  {
    id: "sorting_view_card",
    image: sorting_viewer,
    label: "Sorting Viewer",
    short:
      "Colorful depictions and brief descriptions of six different sorting algorithms.",
    details: [
      `Features: Depicts six different sorting algorithms, and utilizes asynchronous code to visual their differences in efficiency and execution`,
      `Use the info button to read about each algorithm and toggle the theme button for light and dark dark`,
      `Vue.js, TypeScript, PrimeVue`,
    ],
    gallery: [
      {
        id: "78HAFs2RV54g",
        image: sorting_viewer,
        label: "sorting_viewer",
      },
      {
        id: "wclCV9vNQ2rb",
        image: sorting_viewer2,
        label: "sorting_viewer2",
      },
      {
        id: "eKHvJq9K7IEv",
        image: sorting_viewer3,
        label: "sorting_viewer3",
      },
    ],
    icons: [
      {
        id: "gOYsMVCqWdZL",
        icon: "code",
        tooltip: "Code",
        disabled: false,
        link: "https://github.com/jameseaster/sorting-viewer",
      },
      {
        id: "xM9lrexbId7A",
        link: "https://sorting-viewer.netlify.app/",
        disabled: false,
        icon: "web",
        tooltip: "Website",
      },
    ],
  },
  {
    id: "music_card",
    image: music,
    label: "Musician - Guitarist - Composer",
    short:
      "A website crafted to share audio recordings, videos, music notation, & photos of my music.",
    details: [
      `Features: Full customized audio player, photo gallery, YouTube player with sheet music PDFs, and contact form`,
      `TypeScript, React, React-Router, Ant-Design, Craco, Axios, Howler, EmailJS, Netlify`,
    ],
    gallery: [
      {
        id: "bSQeVoSswFEv",
        image: music,
        label: "music",
      },
      {
        id: "GTVef51NoC4l",
        image: music2,
        label: "music2",
      },
      {
        id: "agHCkBNgP2b5",
        image: music3,
        label: "music3",
      },
      {
        id: "H8NhTfA0Bh37",
        image: music4,
        label: "music4",
      },
    ],
    icons: [
      {
        id: "FlaI0vo89c6S",
        icon: "code",
        tooltip: "Code",
        disabled: false,
        link: "https://github.com/jameseaster/music",
      },
      {
        id: "4UdwKBBXEwI4",
        link: "https://www.jameseastermusic.com/",
        disabled: false,
        icon: "web",
        tooltip: "Website",
      },
    ],
  },
];
