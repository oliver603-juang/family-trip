// ==========================================
// config.js - 2026 台南親子遊行程資料
// Generated from: 2026台南親子遊(3).kmz
// ==========================================

// 1. APP 基本設定
window.TRIP_ID = "2026-tainan-0430-v3";
window.APP_TITLE = "2026 台南親子遊";
window.APP_LOGO = "logo.jpg";

window.CURRENCY_OPTIONS = [
  { code: "TWD", symbol: "NT$", label: "台幣" },
  { code: "JPY", symbol: "¥", label: "日幣" },
  { code: "USD", symbol: "$", label: "美金" },
];

window.STAY_OPTIONS = ["30 min","1 hr","1.5 hr","2 hr","2.5 hr","3 hr","4 hr","5 hr","Overnight","-"];

// 2. 主行程資料
window.RAW_KML_DATA = [
  {
    dayId: "day1", date: "4/30 (三)", title: "南下探索之旅", themeColor: "bg-[#E4C2C1]",
    spots: [
      { name: "延平北路三段104巷", lat: 25.0665561, lon: 121.5105023, desc: "旅程起點，出發！", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "自行車文化探索館", lat: 24.2087665, lon: 120.61127, desc: "台中大甲，全台首座自行車互動體驗館。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "隆田文化資產教育園區", lat: 23.1909581, lon: 120.3190407, desc: "台南官田，沉浸式互動體驗認識嘉南大圳歷史。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "海德沃福 (台南永康店)", lat: 23.0027369, lon: 120.234208, desc: "HARD OFF 挖寶時間！", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "海德沃福 (台南東門店)", lat: 22.9756673, lon: 120.238219, desc: "HARD OFF 東門分店，繼續挖寶。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "福爾摩沙遊艇酒店", lat: 22.9989225, lon: 120.1554594, desc: "入住安平運河畔的遊艇主題飯店。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day2", date: "5/1 (四)", title: "安平古蹟巡禮", themeColor: "bg-[#A9BFA8]",
    spots: [
      { name: "安平古堡", lat: 23.0015093, lon: 120.1606244, desc: "台灣第一座城堡，荷蘭時期建造的熱蘭遮城遺址。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "安平定情碼頭德陽艦園區", lat: 22.9891513, lon: 120.1565805, desc: "全台唯一的軍艦博物館，登上德陽艦甲板。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "海德沃福HARD OFF(台南頂美店)", lat: 23.0021177, lon: 120.1866696, desc: "台南第三間 HARD OFF，最後機會挖寶。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "汴頭里", lat: 23.3678557, lon: 120.461686, desc: "北返中途休息站。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day3", date: "5/2 (五)", title: "嘉義台中知識之旅", themeColor: "bg-[#A2C4C9]",
    spots: [
      { name: "冷研碳索館", lat: 23.4464166, lon: 120.2709933, desc: "嘉義大林，全台首座氣體主題觀光工廠。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "國立自然科學博物館", lat: 24.1572335, lon: 120.6660606, desc: "台中北區，台灣最大的科學博物館。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "苗栗馥藝金鬱金香酒店", lat: 24.6908496, lon: 120.8906935, desc: "苗栗市區住宿，準備隔日行程。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day4", date: "5/3 (六)", title: "苗栗探險回程", themeColor: "bg-[#E8D595]",
    spots: [
      { name: "巴巴坑道休閒礦場", lat: 24.6460335, lon: 120.9994515, desc: "苗栗三灣，體驗礦坑文化的休閒園區。", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
      { name: "延平北路三段104巷", lat: 25.0665561, lon: 121.5105023, desc: "回到溫暖的家，旅程結束！", mapCode: "GPS", ticket: { adult: 0, child: 0 } },
    ],
  },
];

// 3. 願望清單
window.WISHLIST_DATA = [
  { name: "灣麗親子公園", lat: 24.4472842, lon: 120.656201, desc: "苗栗苑裡，大型戶外親子遊樂場。" },
  { name: "中埔穀倉農創園區", lat: 23.4472233, lon: 120.4928316, desc: "嘉義中埔，日式穀倉改建的文創園區。" },
  { name: "約客厚禮築夢手創館", lat: 24.3100553, lon: 120.705433, desc: "台中后里，DIY 手作體驗觀光工廠。" },
];

// 4. 交通資訊
window.FLIGHT_INFO = {
  outbound: { flight: "自駕", airline: "交通", from: "台北", to: "台南", dep: "07:00", arr: "12:00", date: "4/30 (三)", duration: "~5h" },
  inbound: { flight: "自駕", airline: "交通", from: "苗栗", to: "台北", dep: "14:00", arr: "16:00", date: "5/3 (六)", duration: "~2h" },
};

// 5. 住宿資訊
window.HOTEL_INFO = [
  { day: "4/30", name: "福爾摩沙遊艇酒店", location: "台南安平", desc: "遊艇主題親子飯店", lat: 22.9989225, lon: 120.1554594 },
  { day: "5/2", name: "苗栗馥藝金鬱金香酒店", location: "苗栗市", desc: "苗栗市區商務飯店", lat: 24.6908496, lon: 120.8906935 },
];
// 6. 圖標庫 (Icons)
const e = React.createElement;
window.Icons = {
  Plane: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M2 12h5" }),
      e("path", { d: "M13 12h3" }),
      e("path", {
        d: "M19.74 7.33a2.3 2.3 0 0 1 2.93 2.93l-3.33 3.33a2.3 2.3 0 0 1-3.25 0l-7.34-7.34a2.3 2.3 0 0 1 0-3.25l3.33-3.33z",
      }),
      e("path", { d: "M14.66 14.66 9 22H2l2.5-9" }),
      e("path", { d: "M7 17l-5 5" })
    ),
  Smile: (p) =>
    e(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p },
      e("circle", { cx: 12, cy: 12, r: 10 }),
      e("path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }),
      e("line", { x1: 9, x2: 9.01, y1: 9, y2: 9 }),
      e("line", { x1: 15, x2: 15.01, y1: 9, y2: 9 })
    ),
  List: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("line", { x1: 8, x2: 21, y1: 6, y2: 6 }), e("line", { x1: 8, x2: 21, y1: 12, y2: 12 }), e("line", { x1: 8, x2: 21, y1: 18, y2: 18 }), e("line", { x1: 3, x2: 3.01, y1: 6, y2: 6 }), e("line", { x1: 3, x2: 3.01, y1: 12, y2: 12 }), e("line", { x1: 3, x2: 3.01, y1: 18, y2: 18 })),
  LayoutGrid: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { width: 7, height: 7, x: 3, y: 3, rx: 1 }), e("rect", { width: 7, height: 7, x: 14, y: 3, rx: 1 }), e("rect", { width: 7, height: 7, x: 14, y: 14, rx: 1 }), e("rect", { width: 7, height: 7, x: 3, y: 14, rx: 1 })),
  Calculator: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { width: 16, height: 20, x: 4, y: 2, rx: 2 }), e("line", { x1: 8, x2: 16, y1: 6, y2: 6 }), e("line", { x1: 16, x2: 16, y1: 14, y2: 18 }), e("path", { d: "M16 10h.01" }), e("path", { d: "M12 10h.01" }), e("path", { d: "M8 10h.01" }), e("path", { d: "M12 14h.01" }), e("path", { d: "M8 14h.01" }), e("path", { d: "M12 18h.01" }), e("path", { d: "M8 18h.01" })),
  Clock: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("circle", { cx: 12, cy: 12, r: 10 }), e("polyline", { points: "12 6 12 12 16 14" })),
  Wallet: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4" }), e("path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5" }), e("path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z" })),
  MapPin: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), e("circle", { cx: 12, cy: 10, r: 3 })),
  Ticket: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), e("path", { d: "M13 5v2" }), e("path", { d: "M13 17v2" }), e("path", { d: "M13 11v2" })),
  X: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M18 6 6 18" }), e("path", { d: "m6 6 12 12" })),
  Settings: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), e("circle", { cx: 12, cy: 12, r: 3 })),
  Search: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("circle", { cx: 11, cy: 11, r: 8 }), e("path", { d: "m21 21-4.3-4.3" })),
  Navigation: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("polygon", { points: "3 11 22 2 13 21 11 13 3 11" })),
  ArrowDown: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m6 9 6 6 6-6" })),
  Mail: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { width: 20, height: 16, x: 2, y: 4, rx: 2 }), e("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })),
  Car: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }), e("circle", { cx: 7, cy: 17, r: 2 }), e("path", { d: "M9 17h6" }), e("circle", { cx: 17, cy: 17, r: 2 })),
  Footprints: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" }), e("path", { d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" })),
  Hotel: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M10 22v-6.57" }), e("path", { d: "M12 11h.01" }), e("path", { d: "M12 7h.01" }), e("path", { d: "M14 15.43V22" }), e("path", { d: "M15 16a5 5 0 0 0-6 0" }), e("path", { d: "M16 11h.01" }), e("path", { d: "M16 7h.01" }), e("path", { d: "M8 11h.01" }), e("path", { d: "M8 7h.01" }), e("rect", { x: 4, y: 2, width: 16, height: 20, rx: 2 })),
  Store: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" }), e("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }), e("path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }), e("path", { d: "M2 7h20" }), e("path", { d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" })),
  Fuel: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("line", { x1: 3, x2: 15, y1: 22, y2: 22 }), e("line", { x1: 4, x2: 14, y1: 9, y2: 9 }), e("path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }), e("path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" })),
  Shield: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })),
  Bot: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M12 8V4H8" }), e("rect", { width: 16, height: 12, x: 4, y: 8, rx: 2 }), e("path", { d: "M2 14h2" }), e("path", { d: "M20 14h2" }), e("path", { d: "M15 13v2" }), e("path", { d: "M9 13v2" })),
  Camera: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }), e("circle", { cx: 12, cy: 13, r: 3 })),
  Image: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }), e("circle", { cx: 9, cy: 9, r: 2 }), e("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })),
  ShoppingBag: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }), e("path", { d: "M3 6h18" }), e("path", { d: "M16 10a4 4 0 0 1-8 0" })),
  Coffee: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M10 2v2" }), e("path", { d: "M14 2v2" }), e("path", { d: "M16 8a1 1 0 0 1 1 1v5.917a3 3 0 0 1-2.556 2.967l-.476.07A7.06 7.06 0 0 1 13 18H9a7.06 7.06 0 0 1-.968-.046l-.476-.07A3 3 0 0 1 5 14.917V9a1 1 0 0 1 1-1Z" }), e("path", { d: "M16 8h2a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1-2.5 2.5H16" }), e("path", { d: "M6 2v2" }), e("path", { d: "M4 22h16" })),
  Loader2: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })),
  Map: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" }), e("line", { x1: 9, x2: 9, y1: 3, y2: 18 }), e("line", { x1: 15, x2: 15, y1: 6, y2: 21 })),
  AlertTriangle: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), e("path", { d: "M12 9v4" }), e("path", { d: "M12 17h.01" })),
  Star: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })),
  Heart: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" })),
  Compass: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("circle", { cx: 12, cy: 12, r: 10 }), e("polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" })),
  Sparkles: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }), e("path", { d: "M5 3v4" }), e("path", { d: "M19 17v4" }), e("path", { d: "M3 5h4" }), e("path", { d: "M17 19h4" })),
  Edit: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })),
  Utensils: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }), e("path", { d: "M7 2v20" }), e("path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })),
  LocateFixed: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("line", { x1: 2, x2: 5, y1: 12, y2: 12 }), e("line", { x1: 19, x2: 22, y1: 12, y2: 12 }), e("line", { x1: 12, x2: 12, y1: 2, y2: 5 }), e("line", { x1: 12, x2: 12, y1: 19, y2: 22 }), e("circle", { cx: 12, cy: 12, r: 7 }), e("circle", { cx: 12, cy: 12, r: 3 })),
  ShoppingBasket: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m5 11 4-7" }), e("path", { d: "m19 11-4-7" }), e("path", { d: "M2 11h20" }), e("path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" }), e("path", { d: "m9 11 1 9" }), e("path", { d: "m15 11-1 9" })),
  Gift: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { x: 3, y: 8, width: 18, height: 4, rx: 1 }), e("path", { d: "M12 8v13" }), e("path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" })),
  Plus: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M5 12h14" }), e("path", { d: "M12 5v14" })),
};
