import { useEffect } from "react";

import LogoArabic from "./imgs/logo-arabic.png";
import LogoBlue from "./imgs/logo-blue.png";
import LogoFull from "./imgs/logo-full.webp";
import LogoImg from "./imgs/logo-img.png";
import Logo from "./imgs/logo.png";
import Necron3D from "./imgs/necron-3d.png";
import SectionEnd from "./imgs/section-end.png";
import WebHero from "./imgs/webhosting-page/hero-stock.png";
import WebHeroBG from "./imgs/webhosting-page/hero-bg.png";
import VPSHero from "./imgs/vps-page/hero-stock.png";
import VPSHerBG from "./imgs/vps-page/hero-bg.png";
import MinecraftHero from "./imgs/minecraft-page/hero-stock.png";
import MinecraftHeroBG from "./imgs/minecraft-page/minecraft-hero-bg.png";
import DiscordHero from "./imgs/discord-page/hero-stock.png";
import DiscordHeroBG from "./imgs/discord-page/hero-bg.png";
import ContactHero from "./imgs/contact-page/hero-stock.png";
import DedicatedHero from "./imgs/dedicated-page/hero-stock.png";
import DedicatedHeroBG from "./imgs/dedicated-page/hero-bg.png";
import Error404PNG from "./imgs/error404.png";

const imageUrlsToPreload = [
  LogoArabic,
  LogoBlue,
  LogoFull,
  LogoImg,
  Logo,
  Necron3D,
  SectionEnd,
  WebHero,
  WebHeroBG,
  VPSHero,
  VPSHerBG,
  MinecraftHero,
  MinecraftHeroBG,
  DiscordHero,
  DiscordHeroBG,
  ContactHero,
  DedicatedHero,
  DedicatedHeroBG,
  Error404PNG,
];

const PreloadImages = ({ setIsLoading }) => {
  // Load images for a better experience
  useEffect(() => {
    const images = [];
    let loadedImages = 0;

    const startTime = performance.now(); // Record the start time

    imageUrlsToPreload.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === imageUrlsToPreload.length) {
          const endTime = performance.now(); // Record the end time

          // Let the loading animation happen for at least 0.9s
          if (endTime - startTime < 900) {
            window.setTimeout(() => {
              setIsLoading(false); // All images are loaded
            }, 900 - (endTime - startTime));
          } else {
            setIsLoading(false); // All images are loaded
          }
        }
      };

      images.push(img);
    });
  }, []);
  return null; // Doesn't return any HTML
};

export default PreloadImages;
