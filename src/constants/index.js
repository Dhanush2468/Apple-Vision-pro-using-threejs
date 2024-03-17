import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Store", "Mac", "iPhone", "Support"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Welcome to the ",
        "era of spatial ",
        "computing.",
      ],
      video: highlightFirstVideo,
      videoDuration: 10,
    },
    {
      id: 2,
      textLists: ["Apple Vision Pro","seamlessly blends", "digital content with","your physical space."],
      video: highlightSecondVideo,
      videoDuration: 9,
    },
    {
      id: 3,
      textLists: [
        "You navigate simply",
        "by using your eyes,",
        "hands, and voice.",
      ],
      video: highlightThirdVideo,
      videoDuration: 6,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthVideo,
      videoDuration: 5,
    },
  ];  
  
  export const models = [
    {
      id: 1,
      title: "Vision Pro in Natural Aluminum",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "Vision Pro in Blue Aluminum",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "Vision Pro in White Aluminum",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "Vision Pro  in Black Aluminum",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.25"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];