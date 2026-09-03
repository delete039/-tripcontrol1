import gyutan from "../assets/gyutan.jpg";
import hamburg from "../assets/hamburg.jpg";
import nyuto from "../assets/nyuto.jpg";
import oden from "../assets/oden.jpg";
import robatayaki from "../assets/robatayaki.jpg";
import sendai from "../assets/sendai.jpg";
import shibuya from "../assets/shibuya.jpg";
import tashirojima from "../assets/tashirojima.jpg";
import tempura from "../assets/tempura.jpg";
import tohoku from "../assets/tohoku.jpg";
import tokyo from "../assets/tokyo.jpg";
import tonkatsu from "../assets/tonkatsu.jpg";
import udon from "../assets/udon.jpg";
import yakiniku from "../assets/yakiniku.jpg";

export interface ImageAsset {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

const commons = (src: string, alt: string, file: string): ImageAsset => ({
  src,
  alt,
  credit: "Wikimedia Commons · 作者与许可见来源",
  creditUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(file).replace(/%2F/g, "/")}`
});

export const imageAssets: Record<string, ImageAsset> = {
  tokyo: commons(tokyo, "东京城市夜景", "File:Tokyo by night 2011.jpg"),
  shibuya: commons(shibuya, "涩谷十字路口夜景", "File:Tokyo Shibuya Scramble Crossing 2018-10-09.jpg"),
  tashirojima: commons(tashirojima, "田代岛上的猫", "File:Nekotarou(a cat of Tashirojima island).JPG"),
  nyuto: commons(nyuto, "雪中的乳头温泉露天风吕", "File:Ganiba Onsen, Nyuto Onsenkyo, Akita prefecture Wikivoyage banner.jpg"),
  tohoku: commons(tohoku, "东北大学片平校区", "File:Tohoku Daigaku Honbu.jpg"),
  sendai: commons(sendai, "仙台市区与广濑川", "File:Sendai city - Hirose river 2005.jpg"),
  yakiniku: commons(yakiniku, "日式烧肉便当", "File:Yakiniku Bento - Takumi AU13.80 (4656015074).jpg"),
  tonkatsu: commons(tonkatsu, "日式炸猪排定食", "File:TonkatsuMeal.jpg"),
  hamburg: commons(hamburg, "日式汉堡肉", "File:Hamburg steak (4394859872).jpg"),
  gyutan: commons(gyutan, "仙台牛舌定食", "File:Sendai gyutan.JPG"),
  udon: commons(udon, "稻庭乌冬", "File:Inaniwa udon by rhosoi in Los Altos, CA.jpg"),
  oden: commons(oden, "日式关东煮", "File:Oden by Mori Chan.jpg"),
  robatayaki: commons(robatayaki, "日式炉端烧烤鱼", "File:Ayu robatayaki.jpg"),
  campus: commons(tohoku, "东北大学片平校区", "File:Tohoku Daigaku Honbu.jpg"),
  tempura: commons(tempura, "日式天丼套餐", "File:Tendon, miso soup and tea pokpok313 in Ikebukuro, Tokyo.jpg")
};

export function imageFor(key: string) {
  return imageAssets[key] ?? imageAssets.sendai;
}
