import type {
  DiningOption,
  PrepItem,
  ReservationItem,
  TravelInfoSection,
  TripDay
} from "../types";

export const tripMeta = {
  title: "东京与东北旅行",
  subtitle: "东京购物、田代岛、乳头温泉与仙台",
  startDate: "2026-10-03",
  endDate: "2026-10-08",
  travelers: 2,
  outbound: "春秋航空 北京 → 成田，约 15:30 抵达 T3",
  inbound: "春秋航空 IJ017，成田 T3 17:55 → 北京",
  tokyoHotel: "大崎大和ROYNET酒店",
  sendaiHotel: "仙台御宿野乃天然温泉酒店"
};

export const tripDays: TripDay[] = [
  {
    date: "2026-10-03",
    shortDate: "10/3",
    weekday: "周六",
    city: "东京",
    title: "抵达东京",
    subtitle: "成田入境、大崎入住、目黑烧肉",
    imageKey: "tokyo",
    color: "#c64b37",
    route: [
      { lat: 35.7719, lng: 140.3929 },
      { lat: 35.6197, lng: 139.7286 },
      { lat: 35.6339, lng: 139.7156 }
    ],
    activities: [
      {
        id: "d1-arrive",
        time: "15:30",
        end: "16:45",
        title: "抵达成田机场 T3",
        japanese: "成田国際空港 第3ターミナル",
        detail: "入境、提取托运行李。不要在此安排购物，优先完成交通与通票领取。",
        category: "flight",
        place: "成田机场 T3",
        coordinate: { lat: 35.7719, lng: 140.3929 },
        editable: true
      },
      {
        id: "d1-pass",
        time: "16:45",
        end: "17:10",
        title: "领取 JR EAST PASS",
        detail: "前往机场第2航站楼站区域，凭两人护照领取 10/4 启用的五日通票。若航班严重延误，改在东京站或涩谷领取。",
        category: "walk",
        alert: "JR EAST Travel Service Center 当前营业至 20:00，出发前复核。",
        source: "https://www.jreast.co.jp/en/multi/faq/"
      },
      {
        id: "d1-transfer",
        time: "17:10",
        end: "18:45",
        title: "成田机场 → 大崎",
        detail: "按到达时刻选择 N'EX 经品川换乘或 Skyliner 经日暮里换乘。当天不启用 JR EAST PASS。",
        category: "rail",
        cost: "现场按实际路线支付",
        coordinate: { lat: 35.6197, lng: 139.7286 },
        editable: true
      },
      {
        id: "d1-hotel",
        time: "18:45",
        end: "19:10",
        title: "酒店入住并放行李",
        japanese: "ダイワロイネットホテル東京大崎",
        detail: "不含早餐。房间稍作整理后乘 JR 山手线一站前往目黑。",
        place: "大崎大和ROYNET酒店",
        category: "hotel",
        coordinate: { lat: 35.6197, lng: 139.7286 }
      },
      {
        id: "d1-dinner",
        time: "19:30",
        end: "21:30",
        title: "烧肉 Ponga 目黑本店",
        japanese: "焼肉 ぽんが 目黒本店",
        detail: "主选。预约仅座位，重点吃厚切牛舌、横膈膜和和牛拼盘。航班延误时及时联系餐厅。",
        place: "目黑",
        category: "meal",
        coordinate: { lat: 35.6339, lng: 139.7156 },
        source: "https://yakiniku-ponga.com/megurohonten/",
        editable: true
      }
    ]
  },
  {
    date: "2026-10-04",
    shortDate: "10/4",
    weekday: "周日",
    city: "东京 → 仙台",
    title: "涩谷购物",
    subtitle: "SHIBUYA109、表参道炸猪排、东京站晚餐",
    imageKey: "shibuya",
    color: "#d9a228",
    route: [
      { lat: 35.6197, lng: 139.7286 },
      { lat: 35.6595, lng: 139.6987 },
      { lat: 35.6674, lng: 139.7111 },
      { lat: 35.6812, lng: 139.7671 },
      { lat: 38.2601, lng: 140.8824 }
    ],
    activities: [
      {
        id: "d2-start",
        time: "09:30",
        end: "10:05",
        title: "退房并前往涩谷",
        detail: "便利店简单早餐。行李寄存在酒店，购物完成后再回大崎取。",
        category: "rail",
        place: "大崎 → 涩谷",
        coordinate: { lat: 35.6595, lng: 139.6987 }
      },
      {
        id: "d2-109",
        time: "10:15",
        end: "12:10",
        title: "SHIBUYA109 重点购物",
        detail: "围绕地雷系、量产系、清楚系与日常可穿哥特风。先完整逛目标楼层，再决定购买，避免反复上下楼。",
        category: "shopping",
        place: "SHIBUYA109",
        coordinate: { lat: 35.6595, lng: 139.6987 },
        source: "https://www.shibuya109.jp/"
      },
      {
        id: "d2-lunch",
        time: "12:30",
        end: "13:40",
        title: "とんかつ まい泉 青山本店",
        detail: "周末普通用餐不能预约，现场排队。优先黑豚炸猪排或混合炸物御膳。",
        category: "meal",
        place: "表参道",
        coordinate: { lat: 35.6674, lng: 139.7111 },
        source: "https://mai-sen.com/restaurant/aoyama/"
      },
      {
        id: "d2-laforet",
        time: "14:00",
        end: "15:30",
        title: "Laforet 原宿补充购物",
        detail: "只看 SHIBUYA109 没有覆盖的日常哥特和年轻设计品牌，不追求逛完。",
        category: "shopping",
        place: "ラフォーレ原宿",
        coordinate: { lat: 35.6693, lng: 139.7051 }
      },
      {
        id: "d2-coffee",
        time: "15:30",
        end: "16:10",
        title: "咖啡休息",
        detail: "保留弹性，根据购物进度就近选择，避免为了指定咖啡店绕路。",
        category: "buffer",
        editable: true
      },
      {
        id: "d2-luggage",
        time: "16:10",
        end: "17:25",
        title: "返回大崎取行李，前往东京站",
        detail: "使用 JR EAST PASS。东京站内预留找 Gransta 与新干线站台的时间。",
        category: "rail",
        coordinate: { lat: 35.6812, lng: 139.7671 }
      },
      {
        id: "d2-dinner",
        time: "18:00",
        end: "19:05",
        title: "格之进汉堡肉",
        japanese: "格之進ハンバーグ＆バル",
        detail: "店内用餐。主选金格汉堡肉，最晚 19:20 离店。餐厅位于东京站 Gransta B1 改札内。",
        category: "meal",
        place: "东京站",
        coordinate: { lat: 35.6812, lng: 139.7671 },
        source: "https://www.gransta.jp/mall/gransta_tokyo/kakunoshin/"
      },
      {
        id: "d2-shinkansen",
        time: "20:16",
        end: "21:47",
        title: "东京 → 仙台",
        detail: "东北新干线 Hayabusa 指定席，使用 JR EAST PASS。提前约 20 分钟到站台。",
        category: "rail",
        place: "东京站 → 仙台站",
        coordinate: { lat: 38.2601, lng: 140.8824 },
        editable: true
      },
      {
        id: "d2-sendai-hotel",
        time: "22:05",
        end: "22:25",
        title: "入住仙台御宿野乃",
        japanese: "天然温泉 杜都の湯 御宿 野乃仙台",
        detail: "不含早餐。之后连续入住，不每天搬行李。",
        category: "hotel",
        place: "仙台御宿野乃天然温泉酒店",
        coordinate: { lat: 38.2636, lng: 140.8757 }
      }
    ]
  },
  {
    date: "2026-10-05",
    shortDate: "10/5",
    weekday: "周一",
    city: "石卷・田代岛",
    title: "田代岛猫岛",
    subtitle: "最高优先级，但受检修船班和海况影响",
    imageKey: "tashirojima",
    color: "#2f7d65",
    route: [
      { lat: 38.2601, lng: 140.8824 },
      { lat: 38.4345, lng: 141.3036 },
      { lat: 38.2984, lng: 141.4169 },
      { lat: 38.2868, lng: 141.4178 }
    ],
    activities: [
      {
        id: "d3-depart",
        time: "07:30",
        end: "09:15",
        title: "仙台 → 石卷",
        detail: "便利店早餐，搭乘仙石东北线。具体车次与轮船衔接在 9 月底检修时刻表发布后锁定。",
        category: "rail",
        alert: "当前时间为规划窗口，不是最终车次。",
        coordinate: { lat: 38.4345, lng: 141.3036 },
        editable: true
      },
      {
        id: "d3-ticket",
        time: "09:15",
        end: "09:50",
        title: "步行至中央码头并购票",
        detail: "船票不能预约、只收现金、先到先得。两人往返至少准备 ¥5,000 现金，所有乘客一起排队。",
        category: "walk",
        cost: "¥1,250/人/单程",
        source: "https://www.ajishimaline.com/about.html"
      },
      {
        id: "d3-ferry",
        time: "待定",
        end: "待定",
        title: "石卷 → 仁斗田港",
        detail: "2026 年 9 月末起使用检修特别时刻表，官网尚未公布最终班次。以出发前官方公告为准。",
        category: "boat",
        alert: "关键待复核项：船班可能临时停航或变更停靠港。",
        coordinate: { lat: 38.2984, lng: 141.4169 },
        source: "https://www.ajishimaline.com/pg117.html",
        editable: true
      },
      {
        id: "d3-island",
        time: "约 11:00",
        end: "14:40",
        title: "田代岛步行游览",
        detail: "仁斗田港、猫神社、岛之驿、漫画岛方向。不要喂猫；优先按返程船班倒推，不走过远。",
        category: "visit",
        place: "田代岛",
        coordinate: { lat: 38.2868, lng: 141.4178 }
      },
      {
        id: "d3-lunch",
        time: "12:00",
        end: "12:45",
        title: "岛之驿午餐",
        japanese: "田代島 島のえき",
        detail: "主选轻食，10:00–15:00、不定休。岛上餐饮可能临时休息，随身带一份便利店备用食物。",
        category: "meal",
        source: "https://www.city.ishinomaki.lg.jp/cont/10053500/0050/3639/tashirojima.pdf"
      },
      {
        id: "d3-coffee",
        time: "13:00",
        end: "13:30",
        title: "クロネコ堂咖啡",
        detail: "营业时就去，若当天休息不绕路等待。",
        category: "meal"
      },
      {
        id: "d3-return",
        time: "待定",
        end: "约 18:10",
        title: "田代岛 → 石卷 → 仙台",
        detail: "返程船班是当天硬约束。回到石卷后使用 JR EAST PASS 返回仙台。",
        category: "boat",
        alert: "绝不能错过当日返程船。",
        editable: true
      },
      {
        id: "d3-dinner",
        time: "19:00",
        end: "20:30",
        title: "牛舌料理阁",
        japanese: "牛たん料理 閣 ブランドーム本店",
        detail: "预约两人。以烤牛舌定食和熟食为主，不安排牛舌刺身。",
        category: "meal",
        place: "一番町",
        coordinate: { lat: 38.2617, lng: 140.8714 },
        source: "https://gyutankaku.in/",
        editable: true
      }
    ]
  },
  {
    date: "2026-10-06",
    shortDate: "10/6",
    weekday: "周二",
    city: "秋田・乳头温泉",
    title: "休暇村乳头温泉乡",
    subtitle: "不混浴、午餐与两种源泉日归温泉",
    imageKey: "nyuto",
    color: "#46789a",
    route: [
      { lat: 38.2601, lng: 140.8824 },
      { lat: 39.7006, lng: 140.722 },
      { lat: 39.8044, lng: 140.8086 }
    ],
    activities: [
      {
        id: "d4-shinkansen-out",
        time: "09:05",
        end: "10:25",
        title: "仙台 → 田泽湖",
        detail: "秋田新干线 Komachi 指定席，使用 JR EAST PASS。便利店早餐在车上简单吃。",
        category: "rail",
        place: "仙台站 → 田泽湖站",
        coordinate: { lat: 39.7006, lng: 140.722 },
        editable: true
      },
      {
        id: "d4-bus-out",
        time: "10:40",
        end: "11:25",
        title: "田泽湖站 → 休暇村前",
        detail: "羽后交通乳头线普通巴士，不预约。车内可使用二维码和信用卡支付，但仍准备现金。",
        category: "bus",
        source: "https://ugokotsu.co.jp/wp-content/jikoku/latest/nyuto2026.pdf",
        coordinate: { lat: 39.8044, lng: 140.8086 }
      },
      {
        id: "d4-lunch",
        time: "12:00",
        end: "12:50",
        title: "休暇村餐厅午餐",
        detail: "两人暂定炸猪排咖喱与热稻庭乌冬配天妇罗。工作日午餐当前为 12:00–13:30。",
        category: "meal",
        cost: "两人约 ¥2,730",
        source: "https://www.qkamura.or.jp/nyuto/blog/detail/?id=98750"
      },
      {
        id: "d4-bath",
        time: "13:00",
        end: "15:20",
        title: "日归温泉与休息",
        detail: "男女分浴，享用露天风吕与两种源泉内汤。普通日归入浴当前 11:00–15:00，入场时再次确认结束时间。",
        category: "bath",
        place: "休暇村乳头温泉乡",
        source: "https://www.qkamura.or.jp/nyuto/"
      },
      {
        id: "d4-bus-back",
        time: "15:46",
        end: "16:28",
        title: "休暇村前 → 田泽湖站",
        detail: "当前 2026 年时刻表对应班次。建议 15:35 前在站牌等候。",
        category: "bus",
        source: "https://ugokotsu.co.jp/wp-content/jikoku/latest/nyuto2026.pdf",
        editable: true
      },
      {
        id: "d4-shinkansen-back",
        time: "17:12",
        end: "18:29",
        title: "田泽湖 → 仙台",
        detail: "Komachi 指定席。正式车次在 9/6 预约时按 10 月运行表再次确认。",
        category: "rail",
        editable: true
      },
      {
        id: "d4-dinner",
        time: "19:30",
        end: "21:00",
        title: "おでん三吉",
        detail: "预约 1 楼座位。泡汤后吃仙台老店关东煮，藏之庄保留为不预约候补。",
        category: "meal",
        place: "定禅寺通・稻荷小路",
        coordinate: { lat: 38.2665, lng: 140.8687 },
        source: "https://oden-sankichi.com/shop/",
        editable: true
      }
    ]
  },
  {
    date: "2026-10-07",
    shortDate: "10/7",
    weekday: "周三",
    city: "仙台",
    title: "东北大学",
    subtitle: "博物馆、青叶山校园与米泽牛烧肉",
    imageKey: "tohoku",
    color: "#754f8e",
    route: [
      { lat: 38.2636, lng: 140.8757 },
      { lat: 38.2575, lng: 140.8347 },
      { lat: 38.2663, lng: 140.8785 }
    ],
    activities: [
      {
        id: "d5-depart",
        time: "09:35",
        end: "10:15",
        title: "酒店 → 青叶山校区",
        detail: "便利店早餐，搭乘仙台地铁东西线。JR EAST PASS 不覆盖仙台地铁。",
        category: "rail",
        coordinate: { lat: 38.2575, lng: 140.8347 }
      },
      {
        id: "d5-museum",
        time: "10:20",
        end: "12:20",
        title: "东北大学综合学术博物馆",
        japanese: "東北大学総合学術博物館",
        detail: "重点看地球科学、化石与学术标本。开放 10:00–16:00，普通参观不预约。",
        category: "visit",
        source: "https://www.museum.tohoku.ac.jp/",
        coordinate: { lat: 38.2575, lng: 140.8347 }
      },
      {
        id: "d5-lunch",
        time: "12:30",
        end: "13:30",
        title: "校内午餐",
        detail: "主选 Momiji Dining；若拥挤或菜单不合适，改去 Buddy's Table。",
        category: "meal",
        place: "东北大学青叶山校区"
      },
      {
        id: "d5-campus",
        time: "13:30",
        end: "15:45",
        title: "青叶山校园散步",
        detail: "以校园环境和公开区域为主，不塞入额外远距离景点。中途安排咖啡休息。",
        category: "visit"
      },
      {
        id: "d5-rest",
        time: "16:20",
        end: "18:00",
        title: "返回酒店休息",
        detail: "最后一晚仍住仙台，整理购物和行李，为翌日返程减压。",
        category: "hotel"
      },
      {
        id: "d5-dinner",
        time: "18:30",
        end: "20:30",
        title: "米泽牛烧肉仔虎",
        japanese: "米沢牛焼肉 仔虎 仙台駅前店",
        detail: "预约仅座位。建议厚切牛舌、上选拼盘和特选横膈膜，避开生食。",
        category: "meal",
        place: "Herb SENDAI 8F",
        coordinate: { lat: 38.2663, lng: 140.8785 },
        cost: "两人约 ¥14,000–18,000",
        source: "https://team-toranomon.com/shop-ekimae/",
        editable: true
      }
    ]
  },
  {
    date: "2026-10-08",
    shortDate: "10/8",
    weekday: "周四",
    city: "仙台 → 成田",
    title: "轻松返程",
    subtitle: "取消成田山，晚些离开仙台并留足机场时间",
    imageKey: "sendai",
    color: "#5d6d75",
    route: [
      { lat: 38.2636, lng: 140.8757 },
      { lat: 38.2601, lng: 140.8824 },
      { lat: 35.7138, lng: 139.7773 },
      { lat: 35.7719, lng: 140.3929 }
    ],
    activities: [
      {
        id: "d6-morning",
        time: "09:30",
        end: "10:15",
        title: "起床、早餐与整理行李",
        detail: "便利店早餐。确认护照、充电宝、托运行李和免税商品位置。",
        category: "hotel"
      },
      {
        id: "d6-checkout",
        time: "10:20",
        end: "10:40",
        title: "退房并步行至仙台站",
        detail: "不安排成田山，保持返程节奏轻松。",
        category: "walk"
      },
      {
        id: "d6-souvenir",
        time: "10:40",
        end: "11:15",
        title: "仙台站最后补充伴手礼",
        detail: "只购买明确需要的点心与车上饮料，11:15 开始前往新干线站台。",
        category: "shopping"
      },
      {
        id: "d6-shinkansen",
        time: "11:31",
        end: "12:58",
        title: "仙台 → 上野",
        detail: "Hayabusa 14 指定席，使用 JR EAST PASS。",
        category: "rail",
        coordinate: { lat: 35.7138, lng: 139.7773 },
        editable: true
      },
      {
        id: "d6-transfer",
        time: "12:58",
        end: "13:20",
        title: "JR 上野 → 京成上野",
        detail: "从地下新干线站台步行至京成上野。表定只有 22 分钟，拖行李时不要停留；错过则直接改乘下一班 Skyliner。",
        category: "walk",
        alert: "全程最紧的一次换乘：建议下车前提前到车门附近，并在仙台站确认下一班 Skyliner 时刻。"
      },
      {
        id: "d6-skyliner",
        time: "13:20",
        end: "14:01",
        title: "京成上野 → 成田机场 T2",
        detail: "Skyliner 47，全车指定席。抵达机场第2航站楼站。",
        category: "rail",
        cost: "¥2,567–2,580/人",
        source: "https://www.keisei.co.jp/keisei/tetudou/skyliner/us/skyliner/purchase.php",
        editable: true
      },
      {
        id: "d6-airport-lunch",
        time: "14:10",
        end: "14:50",
        title: "T2 4F 午餐",
        detail: "优先 Inaba Wako 综合炸物或炸牡蛎；排队超过 10 分钟改去信州荞麦处 Sojibo，选大虾天丼或热天妇罗荞麦面。",
        category: "meal",
        coordinate: { lat: 35.7732, lng: 140.3874 }
      },
      {
        id: "d6-t3",
        time: "15:05",
        end: "15:25",
        title: "前往 T3 出发大厅",
        detail: "沿联络通道步行。机场官方估算站区至 T3 出发大厅约 13 分钟。",
        category: "walk",
        source: "https://www.narita-airport.jp/en/access/shuttlebus/walking-through/"
      },
      {
        id: "d6-checkin",
        time: "15:25",
        end: "16:25",
        title: "值机、托运与出境",
        detail: "春秋航空 T3 2F F 柜台。计划 15:30 前后完成排队，之后安检和边检。",
        category: "flight",
        alert: "柜台预计起飞前 150 分钟开放、前 45 分钟关闭，临行复核。"
      },
      {
        id: "d6-gate",
        time: "16:25",
        end: "17:20",
        title: "候机并前往登机口",
        detail: "可购买机上饮料和食物，最晚 17:20 到登机口。",
        category: "buffer"
      },
      {
        id: "d6-flight",
        time: "17:55",
        title: "IJ017 成田 → 北京",
        detail: "春秋航空，由成田 T3 起飞。",
        category: "flight",
        coordinate: { lat: 35.7719, lng: 140.3929 }
      }
    ]
  }
];

export const diningOptions: DiningOption[] = [
  {
    id: "ponga",
    date: "10/3",
    meal: "晚餐",
    name: "烧肉 Ponga 目黑本店",
    japanese: "焼肉 ぽんが 目黒本店",
    role: "主选",
    category: "烧肉",
    price: "两人约 ¥12,000–18,000",
    ratings: [{ provider: "食べログ", score: "3.54 · 1664评", checked: "2026-08-28", url: "https://tabelog.com/tokyo/A1316/A131601/13136905/" }],
    summary: "抵达后的第一餐，离大崎酒店近，肉类选择丰富。",
    orders: ["厚切牛舌", "横膈膜", "黑毛和牛拼盘"],
    caution: "航班延误时及时联系餐厅。",
    imageKey: "yakiniku",
    coordinate: { lat: 35.6339, lng: 139.7156 },
    url: "https://yakiniku-ponga.com/megurohonten/"
  },
  {
    id: "ushigoro",
    date: "10/3",
    meal: "晚餐",
    name: "Ushigoro Kan 五反田",
    japanese: "うしごろ 貫 五反田店",
    role: "候补",
    category: "烧肉",
    price: "约 ¥5,500/人起",
    ratings: [{ provider: "食べログ", score: "3.54", checked: "2026-08-28", url: "https://tabelog.com/tokyo/A1316/A131603/13180146/" }, { provider: "TableCheck", score: "可预约", checked: "2026-08-28", url: "https://www.tablecheck.com/ja/shops/ushigoro-kan-gotanda/reserve" }],
    summary: "距离酒店更近，但不同时占用预约，仅在 Ponga 无法使用时考虑。",
    orders: ["极上稀少部位", "寿喜烧风烤肉", "咖喱收尾"],
    caution: "仅座位预约也有当日取消费用。",
    imageKey: "yakiniku",
    coordinate: { lat: 35.6227, lng: 139.7244 },
    url: "https://www.tablecheck.com/ja/shops/ushigoro-kan-gotanda/reserve"
  },
  {
    id: "maisen",
    date: "10/4",
    meal: "午餐",
    name: "Maisen 青山本店",
    japanese: "とんかつ まい泉 青山本店",
    role: "主选",
    category: "炸物",
    price: "约 ¥2,000–3,000/人",
    ratings: [{ provider: "食べログ", score: "3.44 · 1537评", checked: "2026-08-28", url: "https://tabelog.com/tokyo/A1306/A130602/13001850/" }, { provider: "周末", score: "现场排队", checked: "2026-08-28" }],
    summary: "购物途中吃炸猪排，建筑本身也有老东京气质。",
    orders: ["黑豚炸猪排", "混合炸物御膳", "炸虾"],
    imageKey: "tonkatsu",
    coordinate: { lat: 35.6674, lng: 139.7111 },
    url: "https://mai-sen.com/restaurant/aoyama/"
  },
  {
    id: "kakunoshin",
    date: "10/4",
    meal: "晚餐",
    name: "格之进汉堡肉",
    japanese: "格之進ハンバーグ＆バル",
    role: "主选",
    category: "汉堡肉",
    price: "¥2,100/人起",
    ratings: [{ provider: "食べログ", score: "3.49 · 495评", checked: "2026-08-28", url: "https://tabelog.com/tokyo/A1302/A130201/13249432/" }, { provider: "官方", score: "不可预约", checked: "2026-08-28" }],
    summary: "东京站内用餐，不绕路，适合新干线前控制时间。",
    orders: ["金格汉堡肉", "熟成肉拼盘"],
    caution: "位于改札内，最晚 19:20 离店。",
    imageKey: "hamburg",
    coordinate: { lat: 35.6812, lng: 139.7671 },
    url: "https://www.gransta.jp/mall/gransta_tokyo/kakunoshin/"
  },
  {
    id: "island-station",
    date: "10/5",
    meal: "午餐",
    name: "田代岛 岛之驿",
    japanese: "田代島 島のえき",
    role: "主选",
    category: "岛上轻食",
    price: "约 ¥800–1,500/人",
    ratings: [{ provider: "食べログ", score: "3.11 · 20评", checked: "2026-08-28", url: "https://tabelog.com/miyagi/A0404/A040403/4026847/" }, { provider: "石卷市资料", score: "营业待复核", checked: "2026-08-28" }],
    summary: "岛上最顺路的午餐点，营业与供应可能受当天情况影响。",
    orders: ["当日热食", "饮料", "猫主题小物"],
    caution: "务必携带便利店备用食物。",
    imageKey: "tashirojima",
    coordinate: { lat: 38.2868, lng: 141.4178 },
    url: "https://www.city.ishinomaki.lg.jp/cont/10053500/0050/3639/tashirojima.pdf"
  },
  {
    id: "kaku",
    date: "10/5",
    meal: "晚餐",
    name: "牛舌料理阁",
    japanese: "牛たん料理 閣 ブランドーム本店",
    role: "主选",
    category: "牛舌",
    price: "约 ¥2,500–5,000/人",
    ratings: [{ provider: "食べログ", score: "3.75 · 2753评", checked: "2026-08-28", url: "https://tabelog.com/miyagi/A0401/A040101/4000039/" }, { provider: "工作日晚餐", score: "可预约", checked: "2026-08-28" }],
    summary: "仙台代表性牛舌餐，重点安排烤牛舌与熟食。",
    orders: ["牛舌烧定食", "牛舌炖煮", "尾汤"],
    caution: "不安排牛舌刺身。",
    imageKey: "gyutan",
    coordinate: { lat: 38.2617, lng: 140.8714 },
    url: "https://gyutankaku.in/"
  },
  {
    id: "kyukamura-lunch",
    date: "10/6",
    meal: "午餐",
    name: "休暇村乳头温泉乡餐厅",
    japanese: "休暇村乳頭温泉郷 レストラン",
    role: "主选",
    category: "温泉午餐",
    price: "两人约 ¥2,730",
    ratings: [{ provider: "休暇村官方", score: "工作日 12:00–13:30", checked: "2026-08-28", url: "https://www.qkamura.or.jp/nyuto/" }],
    summary: "不离开休暇村，减少等车和换馆压力。",
    orders: ["炸猪排咖喱", "热稻庭乌冬配天妇罗"],
    imageKey: "udon",
    coordinate: { lat: 39.8044, lng: 140.8086 },
    url: "https://www.qkamura.or.jp/nyuto/"
  },
  {
    id: "sankichi",
    date: "10/6",
    meal: "晚餐",
    name: "おでん三吉",
    japanese: "おでん三吉",
    role: "主选",
    category: "关东煮",
    price: "约 ¥3,000–5,000/人",
    ratings: [{ provider: "食べログ", score: "3.48 · 494评", checked: "2026-08-28", url: "https://tabelog.com/miyagi/A0401/A040101/4000041/" }],
    summary: "泡汤后的暖胃晚餐，节奏比围炉居酒屋更轻松。",
    orders: ["关东煮拼盘", "炸物", "仙台芹菜相关季节菜"],
    imageKey: "oden",
    coordinate: { lat: 38.2665, lng: 140.8687 },
    url: "https://oden-sankichi.com/shop/"
  },
  {
    id: "kuranosho",
    date: "10/6",
    meal: "晚餐",
    name: "藏之庄总本店",
    japanese: "蔵の庄 総本店",
    role: "候补",
    category: "围炉乡土菜",
    price: "约 ¥4,000–6,000/人",
    ratings: [{ provider: "食べログ", score: "3.52 · 665评", checked: "2026-08-28", url: "https://tabelog.com/miyagi/A0401/A040101/4001017/" }, { provider: "官方", score: "无休", checked: "2026-08-28" }],
    summary: "宫城围炉烧与乡土菜候补，三吉无法使用时再联系。",
    orders: ["围炉烧", "炸物", "宫城蔬菜"],
    imageKey: "robatayaki",
    coordinate: { lat: 38.2637, lng: 140.881 },
    url: "https://sanwarc.co.jp/kuranosho-honten/"
  },
  {
    id: "momiji",
    date: "10/7",
    meal: "午餐",
    name: "Momiji Dining",
    japanese: "もみじダイニング",
    role: "主选",
    category: "大学食堂",
    price: "约 ¥600–1,000/人",
    ratings: [{ provider: "校内餐饮", score: "现场用餐 · 无稳定外部评分", checked: "2026-08-28" }],
    summary: "体验东北大学日常，离当天参观路线更顺。",
    orders: ["当日定食", "咖喱", "炸物套餐"],
    imageKey: "campus",
    coordinate: { lat: 38.2571, lng: 140.8357 },
    url: "https://www.tohoku.ac.jp/"
  },
  {
    id: "buddys",
    date: "10/7",
    meal: "午餐",
    name: "Buddy's Table",
    japanese: "Buddy's Table",
    role: "候补",
    category: "校园餐厅",
    price: "约 ¥1,000–1,800/人",
    ratings: [{ provider: "食べログ", score: "3.04 · 6评", checked: "2026-08-28", url: "https://tabelog.com/miyagi/A0401/A040101/4022191/" }, { provider: "官方", score: "工作日午餐", checked: "2026-08-28" }],
    summary: "更舒适、带咖啡的校园午餐候补。",
    orders: ["当日午餐", "咖啡"],
    imageKey: "campus",
    coordinate: { lat: 38.2585, lng: 140.8323 },
    url: "https://buddys-t.com/"
  },
  {
    id: "kotora",
    date: "10/7",
    meal: "晚餐",
    name: "米泽牛烧肉仔虎",
    japanese: "米沢牛焼肉 仔虎 仙台駅前店",
    role: "主选",
    category: "米泽牛烧肉",
    price: "两人约 ¥14,000–18,000",
    ratings: [{ provider: "食べログ", score: "3.71 · 944评", checked: "2026-08-28", url: "https://tabelog.com/miyagi/A0401/A040101/4003320/" }, { provider: "官方", score: "可预约", checked: "2026-08-28" }],
    summary: "最后一顿正式晚餐，肉类稳定、离酒店和车站都近。",
    orders: ["厚切牛舌", "上选拼盘", "特选横膈膜"],
    caution: "仅预约座位，现场避开刺身和冷面。",
    imageKey: "yakiniku",
    coordinate: { lat: 38.2663, lng: 140.8785 },
    url: "https://team-toranomon.com/shop-ekimae/"
  },
  {
    id: "airport-wako",
    date: "10/8",
    meal: "午餐",
    name: "Inaba Wako",
    japanese: "とんかつ いなば和幸",
    role: "主选",
    category: "综合炸物",
    price: "约 ¥1,500–2,500/人",
    ratings: [{ provider: "食べログ", score: "3.08 · 113评", checked: "2026-08-28", url: "https://tabelog.com/chiba/A1204/A120401/12000580/" }, { provider: "Yahoo地图", score: "3.95 · 43评", checked: "2026-08-28", url: "https://map.yahoo.co.jp/v3/place/K7iP-A44y52" }],
    summary: "选择综合炸物或炸牡蛎，避免和 Maisen 基础炸猪排完全重复。",
    orders: ["综合炸物", "炸牡蛎"],
    caution: "14:20 仍无法入座就立刻改去 Sojibo。",
    imageKey: "tonkatsu",
    coordinate: { lat: 35.7732, lng: 140.3874 },
    url: "https://www.narita-airport.jp/en/shop/"
  },
  {
    id: "airport-sojibo",
    date: "10/8",
    meal: "午餐",
    name: "信州荞麦处 Sojibo",
    japanese: "信州そば処 そじ坊",
    role: "候补",
    category: "天妇罗与热荞麦",
    price: "约 ¥1,200–2,000/人",
    ratings: [{ provider: "食べログ", score: "3.11 · 216评", checked: "2026-08-28", url: "https://tabelog.com/chiba/A1204/A120401/12013433/" }, { provider: "成田机场", score: "T2安检前", checked: "2026-08-28" }],
    summary: "出餐较稳的机场候补，不点沾面。",
    orders: ["大虾天丼", "热天妇罗荞麦面"],
    imageKey: "tempura",
    coordinate: { lat: 35.7732, lng: 140.3874 },
    url: "https://www.narita-airport.jp/en/shop/"
  }
];

export const reservationItems: ReservationItem[] = [
  {
    id: "hotel-tokyo",
    title: "大崎大和ROYNET酒店",
    eventDate: "10/3–10/4",
    status: "booked",
    priority: "high",
    detail: "已预订，大床房，不含早餐。"
  },
  {
    id: "hotel-sendai",
    title: "仙台御宿野乃天然温泉酒店",
    eventDate: "10/4–10/8",
    status: "booked",
    priority: "high",
    detail: "已预订，大床房，不含早餐。"
  },
  {
    id: "ponga-res",
    title: "Ponga 目黑本店",
    eventDate: "10/3",
    dueDate: "尽快",
    time: "19:30",
    status: "todo",
    priority: "high",
    detail: "预约两人、仅座位。航班延误需主动联系。",
    url: "https://yakiniku-ponga.com/reservation/"
  },
  {
    id: "pass-buy",
    title: "购买 JR EAST PASS 五日券",
    eventDate: "10/4–10/8",
    dueDate: "9/4 北京时间 09:00",
    status: "todo",
    priority: "high",
    detail: "两张成人票，每张 ¥35,000，启用日选 10/4。",
    url: "https://www.jreast.co.jp/en/multi/pass/eastpass.html"
  },
  {
    id: "train-tokyo-sendai",
    title: "东京 → 仙台 Hayabusa",
    eventDate: "10/4",
    dueDate: "9/4 北京时间 09:00",
    time: "20:16–21:47",
    status: "todo",
    priority: "high",
    detail: "购买通票时同步预约两人相邻普通车指定席。"
  },
  {
    id: "kakunoshin-res",
    title: "格之进汉堡肉",
    eventDate: "10/4",
    time: "18:00",
    status: "not-needed",
    priority: "medium",
    detail: "店铺当前不可预约。17:40 前到店排队，最晚 19:20 离店前往新干线。",
    url: "https://www.gransta.jp/mall/gransta_tokyo/kakunoshin/"
  },
  {
    id: "ferry-check",
    title: "田代岛检修船班复核",
    eventDate: "10/5",
    dueDate: "9月底",
    status: "verify",
    priority: "high",
    detail: "特别时刻表尚未发布。无预约、只收现金、先到先得。",
    url: "https://www.ajishimaline.com/pg117.html"
  },
  {
    id: "kaku-res",
    title: "牛舌料理阁",
    eventDate: "10/5",
    dueDate: "建议提前 2–3 周",
    time: "19:00",
    status: "todo",
    priority: "high",
    detail: "品牌店本店，工作日晚餐，两人。",
    url: "https://gyutankaku.in/"
  },
  {
    id: "komachi-out",
    title: "仙台 ↔ 田泽湖 Komachi",
    eventDate: "10/6",
    dueDate: "9/6 北京时间 09:00",
    time: "去程 09:05；返程约 17:12",
    status: "todo",
    priority: "high",
    detail: "预约两段相邻指定席，最终按 10 月运行表确认。"
  },
  {
    id: "nyuto-confirm",
    title: "休暇村日归开放复核",
    eventDate: "10/6",
    dueDate: "10/3–10/4",
    status: "verify",
    priority: "medium",
    detail: "电话确认日归温泉与工作日午餐照常开放。",
    url: "https://www.qkamura.or.jp/nyuto/"
  },
  {
    id: "sankichi-res",
    title: "おでん三吉",
    eventDate: "10/6",
    dueDate: "建议提前 2–3 周",
    time: "19:30",
    status: "todo",
    priority: "high",
    detail: "预约两人、1 楼座位。",
    url: "https://oden-sankichi.com/shop/"
  },
  {
    id: "kotora-res",
    title: "米泽牛烧肉仔虎",
    eventDate: "10/7",
    dueDate: "建议提前 2–3 周",
    time: "18:30",
    status: "todo",
    priority: "high",
    detail: "仙台站前店，两人，仅座位，可备注申请靠窗。",
    url: "https://team-toranomon.com/reservation/"
  },
  {
    id: "train-sendai-ueno",
    title: "仙台 → 上野 Hayabusa 14",
    eventDate: "10/8",
    dueDate: "9/8 北京时间 09:00",
    time: "11:31–12:58",
    status: "todo",
    priority: "high",
    detail: "使用 JR EAST PASS 预约相邻指定席。"
  },
  {
    id: "skyliner",
    title: "Skyliner 47",
    eventDate: "10/8",
    dueDate: "9/8 北京时间 09:00",
    time: "13:20–14:01",
    status: "todo",
    priority: "high",
    detail: "京成上野至机场第2航站楼，两人指定席。",
    url: "https://www.keisei.co.jp/keisei/tetudou/skyliner/us/skyliner/purchase.php"
  }
];

export const prepItems: PrepItem[] = [
  {
    id: "passport",
    group: "证件与订单",
    title: "检查两人护照与入境资格",
    timing: "现在处理",
    priority: "high",
    detail: "确认有效期、姓名与机票酒店订单完全一致，并分别保存纸质及离线副本。"
  },
  {
    id: "insurance",
    group: "证件与订单",
    title: "购买覆盖医疗与行程变更的旅行保险",
    timing: "现在处理",
    priority: "high",
    detail: "重点查看境外医疗、航班延误、行李延误和取消责任。"
  },
  {
    id: "esim-check",
    group: "网络与手机",
    title: "确认两部手机是否支持 eSIM",
    timing: "现在处理",
    priority: "high",
    detail: "中国大陆销售的部分机型不支持 eSIM。不能使用时选择日本实体流量卡或运营商漫游。"
  },
  {
    id: "data-plan",
    group: "网络与手机",
    title: "为两部手机分别准备流量方案",
    timing: "提前 2–3 周",
    priority: "high",
    detail: "不建议只依赖一台手机热点。比较总流量、有效期、限速、热点共享与激活区域。"
  },
  {
    id: "apps",
    group: "网络与手机",
    title: "安装并登录日本旅行常用应用",
    timing: "提前一周",
    priority: "medium",
    detail: "Google Maps、翻译、JR EAST、Japan Travel by NAVITIME、天气和航空公司应用。"
  },
  {
    id: "offline-maps",
    group: "网络与手机",
    title: "下载东京、仙台、石卷与田泽湖离线地图",
    timing: "提前一周",
    priority: "medium",
    detail: "同时截图酒店日文地址、田代岛码头和休暇村巴士站。"
  },
  {
    id: "payment",
    group: "支付与现金",
    title: "准备银行卡、交通 IC 与日元现金",
    timing: "提前一周",
    priority: "high",
    detail: "田代岛船票只收现金。两人至少单独留出 ¥10,000 小额现金，不与日常消费混用。"
  },
  {
    id: "pass-tickets",
    group: "交通与预约",
    title: "完成通票、新干线和 Skyliner 预约",
    timing: "9/4–9/8",
    priority: "high",
    detail: "按预约中心日期逐项完成，并核对两人座位是否相邻。"
  },
  {
    id: "restaurants",
    group: "交通与预约",
    title: "完成四顿重点晚餐预约",
    timing: "尽快",
    priority: "high",
    detail: "预约 Ponga、牛舌阁、三吉、仔虎；格之进不可预约，按 17:40 到店排队。候补餐厅不要同时占用预约。"
  },
  {
    id: "ferry-weather",
    group: "交通与预约",
    title: "复核田代岛船班和海况",
    timing: "9月底及出发前",
    priority: "high",
    detail: "必要时交换 10/5 田代岛与 10/6 乳头温泉的白天行程。"
  },
  {
    id: "clothes",
    group: "行李与衣物",
    title: "按东北初秋天气准备分层衣物",
    timing: "提前一周",
    priority: "medium",
    detail: "东京与乳头温泉温差明显，带轻薄保暖层、防风外套、舒适步行鞋和折叠伞。"
  },
  {
    id: "onsen-kit",
    group: "行李与衣物",
    title: "准备温泉与岛上用品",
    timing: "出发前一天",
    priority: "medium",
    detail: "小毛巾、替换袜子、防水袋、轻便雨具。不要携带大件行李上岛。"
  },
  {
    id: "medicine",
    group: "健康与安全",
    title: "准备常用药与处方证明",
    timing: "提前一周",
    priority: "medium",
    detail: "晕船药、肠胃药、止痛药和个人长期用药；核对日本入境限制。"
  },
  {
    id: "power",
    group: "行李与衣物",
    title: "核对插头、电压与充电宝",
    timing: "出发前一天",
    priority: "medium",
    detail: "日本为 A 型插座、100V。充电宝必须随身携带，不能托运。"
  },
  {
    id: "weight",
    group: "行李与衣物",
    title: "称量去程与返程行李",
    timing: "出发前一天",
    priority: "high",
    detail: "为涩谷购买的衣服预留托运行李空间，核对春秋航空额度和单件限制。"
  },
  {
    id: "final-charge",
    group: "出发当天",
    title: "手机、充电宝与耳机全部充满",
    timing: "出发当天",
    priority: "high",
    detail: "确认 eSIM 二维码、酒店地址和本网页离线版可以打开。"
  }
];

export const travelInfoSections: TravelInfoSection[] = [
  {
    id: "hotels",
    title: "酒店",
    items: [
      {
        label: "东京",
        value: "ダイワロイネットホテル東京大崎",
        note: "大崎站附近，10/3 入住，10/4 退房，不含早餐。",
        url: "https://www.daiwaroynet.jp/osaki/"
      },
      {
        label: "仙台",
        value: "天然温泉 杜都の湯 御宿 野乃仙台",
        note: "10/4–10/8 连住，不含早餐。",
        url: "https://dormy-hotels.com/dormyinn/hotels/nono_sendai/"
      }
    ]
  },
  {
    id: "emergency",
    title: "紧急联系",
    items: [
      { label: "日本报警", value: "110" },
      { label: "急救与消防", value: "119" },
      { label: "JNTO 游客热线", value: "+81-50-3816-2787", note: "24小时，多语种旅游紧急支持。" },
      { label: "网地岛航线", value: "0225-93-6125", note: "船班与运行状态咨询。" },
      { label: "羽后交通田泽湖营业所", value: "0187-43-1511", note: "乳头线巴士咨询。" },
      { label: "休暇村乳头温泉乡", value: "0187-46-2244" }
    ]
  },
  {
    id: "phrases",
    title: "常用日语",
    items: [
      { label: "预约", value: "二名で予約しています。", note: "我们预约了两位。" },
      { label: "全熟", value: "生ものは避けたいです。よく火を通してください。", note: "想避开生食，请充分加热。" },
      { label: "行李寄存", value: "荷物を預かっていただけますか。", note: "可以帮忙寄存行李吗？" },
      { label: "船班", value: "田代島行きの船は運航していますか。", note: "去田代岛的船正常运行吗？" },
      { label: "站台", value: "この電車は仙台に行きますか。", note: "这班车去仙台吗？" }
    ]
  },
  {
    id: "onsen",
    title: "温泉礼仪",
    items: [
      { label: "入浴前", value: "先淋浴清洁身体，小毛巾不放进浴池。" },
      { label: "浴场", value: "休暇村使用男女分浴，不安排混浴设施。" },
      { label: "纹身", value: "如有纹身，出发前向设施确认遮盖及入浴规定。" },
      { label: "补水", value: "泡汤前后喝水，避免空腹、饮酒后或一次浸泡过久。" }
    ]
  },
  {
    id: "taxfree",
    title: "免税与托运",
    items: [
      { label: "衣服", value: "一般物品可在日本穿用，最终需由本人带出境。" },
      { label: "消耗品", value: "食品、化妆品等免税密封包装不要在日本拆封。" },
      { label: "托运行李", value: "免税商品放入托运行李时，应在航空公司托运前完成海关确认。" },
      { label: "制度日期", value: "本次 10/8 离境仍处于旧制；日本退款制自 2026/11/1 起实施。" }
    ]
  }
];

export const officialSources = [
  { label: "JR EAST PASS", url: "https://www.jreast.co.jp/en/multi/pass/eastpass.html" },
  { label: "网地岛航线", url: "https://www.ajishimaline.com/" },
  { label: "羽后交通乳头线", url: "https://ugokotsu.co.jp/wp-content/jikoku/latest/nyuto2026.pdf" },
  { label: "休暇村乳头温泉乡", url: "https://www.qkamura.or.jp/nyuto/" },
  { label: "东北大学博物馆", url: "https://www.museum.tohoku.ac.jp/" },
  { label: "成田机场", url: "https://www.narita-airport.jp/en/" }
];
