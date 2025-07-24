import img01 from "../assets/images/mobile.png";

import img02 from "../assets/images/tablet.png";
import img03 from "../assets/images/monitor.png";



export const screensData = 
[
    {
      type: "mobile",
      minWidth: "0",
      maxWidth: "767",
      img: img01,
      description: "Мобільні пристрої"
    },
    {
      type: "tablet",
      minWidth: "768",
      maxWidth: "1023",
      img: img02,
      description: "Планшети"
    },
    {
      type: "desktop",
      minWidth: "1024",
      maxWidth: null,
      img:img03,
      description: "Монітор"
    }
  
]