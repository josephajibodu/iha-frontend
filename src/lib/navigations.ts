import LINKS, { LinkItem } from "./links";

const navigation: { main: LinkItem[] } = {
  main: [
    LINKS.Home,
    LINKS.About,
    {
      title: "Programs",
      menu: [
        LINKS.TrainingProgrammes,
        LINKS.Innovations,
        LINKS.Research,
        LINKS.Partnership,
      ],
    },
    LINKS.AHIF2026,
    // LINKS.Portfolio,
    LINKS.News,
  ],
};

export default navigation;
