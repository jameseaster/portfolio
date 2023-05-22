import * as screenshots from "../assets/screenshots";

export const projects = [
  {
    id: "navportal_project_card",
    image: screenshots.navportal,
    label: "NavPortal",
    short:
      "United States Army Corps of Engineers multi-platform waterway management application.",
    details: [
      {
        header: "Features:",
        paragraphs: [
          "Data filtering, insight visualizations, interactive map, data table, asynchronous analysis, project persistence, authentication",
        ],
      },
      {
        header: "Tech Stack:",
        paragraphs: ["React, Esri, Elastic, MUI, Azure"],
      },
    ],
    gallery: [
      {
        id: "hAQh0367kveT",
        image: screenshots.navportal,
        label: "navportal_charts",
      },
      {
        id: "u57i5zi0zuJw",
        image: screenshots.navportal3,
        label: "navportal_project_select",
      },
      {
        id: "UVJCuPjQd8vc",
        image: screenshots.navportal2,
        label: "naportal_datatable",
      },
      {
        id: "uSlagCl0OonB",
        image: screenshots.navportal4,
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
    image: screenshots.scc2,
    label: "Secure Care Connect",
    short:
      "Progressive web app that utilizes verifiable credentials to decentralize health care needs.",
    details: [
      {
        header: "Features:",
        paragraphs: [
          "Instant message, verifiable profile, team onboarding, & decentralized control of medical profile",
        ],
      },
      {
        header: "Tech Stack:",
        paragraphs: ["Vue.js, Quasar, MongoDB, Express"],
      },
    ],
    gallery: [
      {
        id: "kDPXpvoaujM2",
        image: screenshots.scc2,
        label: "scc2",
      },
      {
        id: "9UsquSgClCBX",
        image: screenshots.scc,
        label: "scc",
      },
      {
        id: "Hp0BMNcZwznU",
        image: screenshots.scc3,
        label: "scc3",
      },
      {
        id: "9hz8ivRZVauQ",
        image: screenshots.scc4,
        label: "scc4",
      },
      {
        id: "RlGu6xba3UgN",
        image: screenshots.scc5,
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
    image: screenshots.winterfestMobile,
    label: "Winterfest Mobile App",
    short:
      "Official conference mobile app that connects attendees through information & activities.",
    details: [
      {
        header: "Features:",
        paragraphs: [
          "Live polls with realtime results, raffle drawings, news feed, & event schedule",
        ],
      },
      {
        header: "Tech Stack:",
        paragraphs: ["React Native, Google Firebase"],
      },
    ],
    gallery: [
      {
        id: "vB6MDAacdKeO",
        image: screenshots.winterfestMobile2,
        label: "winterfestMobile2",
      },
      {
        id: "OfbTVr87ztnN",
        image: screenshots.winterfestMobile,
        label: "winterfestMobile",
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
    image: screenshots.mobileAppManager,
    label: "Mobile App Manager",
    short:
      "Manages Winterfest mobile app by updating component content without redeploying code.",
    details: [
      {
        header: "Features:",
        paragraphs: [
          "Provides mobile app stats & insights and controls all raffles, news cards, schedule, and live polls.",
        ],
      },
      {
        header: "Tech Stack:",
        paragraphs: ["React, Firebase, MUI, Nivo Charts"],
      },
    ],
    gallery: [
      {
        id: "qtrJnmlyb9p3",
        image: screenshots.mobileAppManager,
        label: "mobileAppManager",
      },
      {
        id: "jKSdClR2ymgb",
        image: screenshots.mobileAppManager2,
        label: "mobileAppManager2",
      },
      {
        id: "XwJkNSlwKuC7",
        image: screenshots.mobileAppManager3,
        label: "mobileAppManager3",
      },
      {
        id: "9sSEm2VRZvOC",
        image: screenshots.mobileAppManager4,
        label: "mobileAppManager4",
      },
      {
        id: "mRSb6CZBXF1x",
        image: screenshots.mobileAppManager5,
        label: "mobileAppManager5",
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
    image: screenshots.workflow,
    label: "Workflow",
    short:
      "Internal platform for geospatial analyst team's management workflow and sprint insights.",
    details: [
      {
        header: "Features:",
        paragraphs: [
          "Interactive map, customized kanban board, sprint cycle creations, & dashboard for team analytics",
        ],
      },
      {
        header: "Tech Stack:",
        paragraphs: [
          "React, Redux, Esri, React-Router, Express, MongoDB, Sass",
        ],
      },
    ],
    gallery: [
      {
        id: "KbPPIl24wcon",
        image: screenshots.workflow,
        label: "workflow",
      },
      {
        id: "Agjg5TtoFE6G",
        image: screenshots.workflow2,
        label: "workflow2",
      },
      {
        id: "Y6PvuO5zqP9g",
        image: screenshots.workflow3,
        label: "workflow3",
      },
      {
        id: "UAwcOixuJWpT",
        image: screenshots.workflow4,
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
    image: screenshots.sortingViewer,
    label: "Sorting Viewer",
    short:
      "Colorful depictions and brief descriptions of six different sorting algorithms.",
    details: [
      {
        header: "Features:",
        paragraphs: [
          "Depicts six different sorting algorithms, and utilizes asynchronous code to visual their differences in efficiency and execution",
          "Use the info button to read about each algorithm and toggle the theme button for light and dark dark",
        ],
      },
      {
        header: "Tech Stack:",
        paragraphs: ["Vue.js, TypeScript, PrimeVue"],
      },
    ],
    gallery: [
      {
        id: "78HAFs2RV54g",
        image: screenshots.sortingViewer,
        label: "sortingViewer",
      },
      {
        id: "wclCV9vNQ2rb",
        image: screenshots.sortingViewer2,
        label: "sortingViewer2",
      },
      {
        id: "eKHvJq9K7IEv",
        image: screenshots.sortingViewer3,
        label: "sortingViewer3",
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
    image: screenshots.music,
    label: "Music",
    short:
      "A website crafted to share audio recordings, videos, music notation, & photos of my music.",
    details: [
      {
        header: "Features:",
        paragraphs: [
          "Fully customized audio player, photo gallery, YouTube player with sheet music PDFs, and contact form",
        ],
      },
      {
        header: "Tech Stack:",
        paragraphs: [
          "TypeScript, React, React-Router, Ant-Design, Craco, Axios, Howler, EmailJS, Netlify",
        ],
      },
    ],
    gallery: [
      {
        id: "bSQeVoSswFEv",
        image: screenshots.music,
        label: "music",
      },
      {
        id: "GTVef51NoC4l",
        image: screenshots.music2,
        label: "music2",
      },
      {
        id: "agHCkBNgP2b5",
        image: screenshots.music3,
        label: "music3",
      },
      {
        id: "H8NhTfA0Bh37",
        image: screenshots.music4,
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
