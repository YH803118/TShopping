import moomin1 from "../upload/product1.jpeg";
import moomin2 from "../upload/product2.jpeg";
import moomin3 from "../upload/product3.png";
import moomin4 from "../upload/moomin1.jpeg";
import moomin5 from "../upload/moomin2.jpeg";
import { productManT, productWomenT, productAllT } from "./Types";

type genderFilter = {
  [index: string]: string;
  man: "남성";
  women: "여성";
};
const genderCheck: genderFilter = {
  man: "남성",
  women: "여성",
};

export const productAll: productAllT = {
  아우터: "outter",
  가디건: "cardigan",
  셔츠: "shirts",
  블라우스: "blouse",
  니트: "neat",
  후드티: "hood",
  티셔츠: "T-shirts",
  팬츠: "pants",
  스커트: "skirt",
  언더웨어: "under-wear",
  신발: "shoes",

  수트: "suit",
  맨투맨: "manman",

  스웨터: "sweater",
};

const productWomen: productWomenT = {
  아우터: "outter",
  가디건: "cardigan",
  셔츠: "shirts",
  블라우스: "blouse",
  니트: "neat",
  후드티: "hood",
  티셔츠: "T-shirts",
  팬츠: "pants",
  스커트: "skirt",
  언더웨어: "under-wear",
  신발: "shoes",
};

const productMan: productManT = {
  팬츠: "pants",
  아우터: "outter",
  수트: "suit",
  후드티: "hood",
  맨투맨: "manman",
  니트: "neat",
  가디건: "cardigan",
  스웨터: "sweater",
  셔츠: "shirts",
  언더웨어: "under-wear",
  신발: "shoes",
};

export type product = {
  [index: string]: string | number | any;
  id: number;
  name: string;
  kind: string;
  size: string;
  color: string;
  src: string | any;
  price: number;
  sale: number;
  count: number;
};

export const initialProducts: product[] = [
  {
    id: 1,
    name: "무민",
    gender: "남성",
    kind: "맨투맨",
    size: "M",
    color: "블랙,네이비,화이트,베이지",
    src: moomin1,
    price: 20000,
    sale: 0.15,
    count: 1,
  },
  {
    id: 2,
    name: "무민2",
    size: "L",
    gender: "남성",
    kind: "셔츠",
    color: "베이지,그린,블루",
    src: moomin2,
    price: 130000,
    sale: 0.25,
    count: 1,
  },
  {
    id: 3,
    name: "무민3",
    size: "XL",
    gender: "여성",
    kind: "재킷",
    color: "블랙,화이트",
    src: moomin3,
    price: 10000,
    sale: 0.1,
    count: 1,
  },
  {
    id: 4,
    name: "무민4",
    gender: "여성",
    kind: "청바지",
    size: "M",
    color: "생지,샐비지,워싱",
    src: moomin4,
    price: 50000,
    sale: 0.15,
    count: 1,
  },
  {
    id: 5,
    name: "무민5",
    gender: "남성",
    kind: "패딩",
    size: "M",
    color: "블랙,오렌지,네이비",
    src: moomin5,
    price: 15000,
    sale: 0.2,
    count: 1,
  },
];
