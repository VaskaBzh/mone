import * as flsFunctions from './modules/functions.js'
import { SwiperInit } from "./modules/swiper.js";
import { bulletsInit } from "./modules/bullets.js";
import { mapsInit } from "./modules/mapInit.js";
import { popups } from "./modules/popups.js";
import { renderLists } from "./modules/listMarks.js";
import { burger } from "./modules/burger.js";
import { anchor } from "./modules/anchor.js";
import { scrollUp } from "./modules/scrollUp.js";

flsFunctions.isWebp()
SwiperInit();
bulletsInit();
mapsInit();
popups();
renderLists();
burger();
anchor();
scrollUp();