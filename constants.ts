
import { ActivityType, DayItinerary, FlightInfo, Accommodation, TransportMapItem } from './types';

// Precise location data and curated images matching the user's PDF references
export const ITINERARY_DATA: DayItinerary[] = [
  {
    id: 'day1',
    date: '3/28 (五)',
    title: '抵達東京 & 淺草下町夜色',
    weatherForecast: { temp: '12°C - 18°C', condition: 'Cloudy' },
    items: [
      {
        id: '1-1',
        time: '17:30',
        title: '抵達成田機場 (NRT)',
        type: ActivityType.TRANSPORT,
        description: '抵達東京！請跟隨「鐵道/Train」指標前往 B1 搭車。',
        guideStory: '成田機場是東京的大門。若有購買西瓜卡(Suica)或 Pasmo 的需求，建議在改札口前的自助機台處理。',
        location: 'Narita Airport Terminal 1',
        address: 'Narita International Airport (NRT), Chiba, Japan',
        imageUrl: 'https://d1grca2t3zpuug.cloudfront.net/2025/05/naritaairport01-1913x1196.webp', 
        highlights: [
          { category: 'TIP', text: '入境約需 40-60 分鐘' }
        ]
      },
      {
        id: '1-2',
        time: '18:10',
        title: '搭乘京成 Access 特急',
        type: ActivityType.TRANSPORT,
        description: '往羽田空港方向，直達淺草站（不用換車）。',
        guideStory: '京成 Access 特急橘色線條車身，不需對號入座。沿途會經過晴空塔，這將是你看到的第一個東京地標！',
        location: 'Narita Airport Station',
        address: 'Narita Airport Station, Chiba',
        imageUrl: 'https://www.keisei.co.jp/keisei/tetudou/skyliner/tc/assets/images/top/routemap_express.jpg',
        highlights: [
          { category: 'TIP', text: '可使用 Suica/Pasmo 刷卡進站' },
          { category: 'TIP', text: '車程約 60 分鐘' }
        ]
      },
      {
        id: '1-3',
        time: '18:50',
        title: '辦理入住：Asakusa Ryokan Toukaisou',
        type: ActivityType.STAY,
        location: 'Asakusa Ryokan Toukaisou',
        address: '2-16-12 Nishi-Asakusa, Taito-ku, Tokyo',
        description: 'Check-in 放行李。',
        guideStory: '東海莊是一家位於淺草寧靜巷弄中的傳統旅館，能體驗到濃厚的昭和風情。周邊有許多錢湯（公共澡堂）。',
        imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/249891198.jpg?k=0421f96cc13dc51a72c0d1af1b198befbad88863639ec8de40ee9442d38003f1&o=', 
        highlights: [
          { category: 'TIP', text: '櫃台時間至 22:00' }
        ]
      },
      {
        id: '1-4',
        time: '19:00',
        title: '晚餐：染太郎 或 與ろゐ屋',
        type: ActivityType.FOOD,
        location: 'Sometaro Okonomiyaki',
        address: '2-2-2 Nishi-Asakusa, Taito City, Tokyo',
        description: '【染太郎】體驗自己煎御好燒，或【與ろゐ屋】品嚐清爽柚子拉麵。',
        guideStory: '染太郎是淺草著名的老店，木造建築非常有氣氛，許多文人雅士都曾造訪。榻榻米座位需要脫鞋。若不想油煙味太重，與ろゐ屋的雙黃蛋拉麵是清爽首選，就在傳法院通上。',
        imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNqlAm4EsuHNVDBZs5_h-wfYSjmA8e0nNEoLltb3CWKLMX_PHxcBr82PQFWOZw61hTztvHEUR_FUZ-Y0ZvN9dC2zVk69p_TsL6d7GMkyxBvK-lUEsDP7YkZtIp-wv4Nrp7PQGV1-4YJkfd/s640/IMG_6925.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '染太郎：什錦御好燒 (Osome-yaki)' },
          { category: 'MUST_EAT', text: '與ろゐ屋：柚子醬油拉麵' },
          { category: 'TIP', text: '染太郎只收現金' }
        ]
      },
      {
        id: '1-5',
        time: '21:00',
        title: '淺草寺 & 雷門夜拍',
        type: ActivityType.SIGHTSEEING,
        location: 'Senso-ji',
        address: '2-3-1 Asakusa, Taito City, Tokyo',
        description: '夜間參拜散步，避開白天人潮。',
        guideStory: '晚上的淺草寺本堂會關門，但雷門、五重塔與寶藏門都會打燈直到 23:00。此時仲見世通的店家拉下鐵門，鐵捲門上有描繪淺草歷史的「淺草繪卷」，是白天看不到的隱藏版景點！',
        imageUrl: 'https://nightscape.tokyo/tw/wp-content/uploads/2023/01/asakusa-2.jpg', 
        highlights: [
          { category: 'TIP', text: '必拍：發光的雷門大燈籠' },
          { category: 'TIP', text: '必拍：仲見世通鐵捲門彩繪' }
        ]
      }
    ]
  },
  {
    id: 'day2',
    date: '3/29 (六)',
    title: '移動日：新宿轉乘 & 富士山下',
    weatherForecast: { temp: '8°C - 15°C', condition: 'Sunny' },
    items: [
      {
        id: '2-1',
        time: '07:00',
        title: '淺草晨間散策',
        type: ActivityType.SIGHTSEEING,
        location: 'Kaminarimon',
        address: '2-3-1 Asakusa, Taito City, Tokyo',
        description: '享受無人的雷門。',
        guideStory: '早晨 7 點前的淺草寺空氣特別清新，常能看到當地人在此晨運或遛狗，是感受「下町」生活感的最佳時刻。',
        imageUrl: 'https://travel.jr-central.co.jp/plan/tokushu/ex/blog/0002/images/img_mv.webp',
        highlights: [
          { category: 'TIP', text: '最佳拍照點：雷門正對面馬路' }
        ]
      },
      {
        id: '2-2',
        time: '08:00',
        title: '早餐：Misojyu',
        type: ActivityType.FOOD,
        location: 'Misojyu Asakusa',
        address: '1-7-5 Asakusa, Taito City, Tokyo',
        description: '專賣味噌湯與飯糰的文青早餐店。',
        guideStory: '這是一家將傳統味噌湯做得很時尚的店。湯料非常豐富，有整塊蔬菜或肉類。二樓有用餐區，裝潢以書法和攝影作品為主，非常適合拍照。',
        imageUrl: 'https://img.bigfang.tw/2023/12/1702775631-4efdd2f969559e8b1c92e99f32ded48e.jpg',
        highlights: [
          { category: 'MUST_ORDER', text: 'Morning Set (飯糰+味噌湯)' },
          { category: 'MUST_EAT', text: '角煮味噌湯' }
        ]
      },
      {
        id: '2-3',
        time: '09:00',
        title: '前往新宿車站',
        type: ActivityType.TRANSPORT,
        description: '銀座線(淺草) > 半藏門線(表參道) > 步行至新宿 JR 月台。',
        guideStory: '新宿站是迷宮，建議預留充足時間。我們要搭乘的是 JR 中央線特急月台（通常在 9 或 10 號月台）。',
        location: 'Shinjuku Station',
        address: 'Shinjuku Station, Tokyo',
        imageUrl: 'https://tabiaruko.com/wp-content/uploads/2024/09/30809066_m-1.jpg', 
        highlights: [
          { category: 'TIP', text: '建議走「東口」或「南口」進站' },
          { category: 'TIP', text: '目標：JR 特急月台' }
        ]
      },
      {
        id: '2-4',
        time: '10:30',
        title: '搭乘：富士回遊號 (Fuji Excursion)',
        type: ActivityType.TRANSPORT,
        location: 'JR Shinjuku Station',
        address: 'Shinjuku Station, Tokyo',
        description: '直達河口湖的特急列車。',
        guideStory: '富士回遊號是前往河口湖最舒適的方式。列車進入山梨縣後，請留意車窗「左側」，天氣好時能看到巨大的富士山逼近眼前！',
        imageUrl: 'https://www.fujikyu-railway.jp/common/images/fujikaiyuu/train1.jpg',
        highlights: [
          { category: 'TIP', text: '座位推薦：左側窗邊 (D席)' },
          { category: 'RESERVATION', text: '全車指定席，需事先劃位' }
        ]
      },
      {
        id: '2-5',
        time: '13:00',
        title: '富士急樂園 (Fuji-Q Highland)',
        type: ActivityType.SIGHTSEEING,
        location: 'Fuji-Q Highland',
        address: '5-6-1 Shinnishihara, Fujiyoshida, Yamanashi',
        description: '絕叫系的聖地！',
        guideStory: '這裡有金氏世界紀錄等級的雲霄飛車。如果不玩設施，這裡也有「麗莎與卡斯柏小鎮」，充滿法式風情，還有免費的富士山景觀台。',
        imageUrl: 'https://www.fujiq.jp/igflrr000000003y-img/top_mtfuji.png',
        highlights: [
          { category: 'TIP', text: '必玩：FUJIYAMA 過山車' },
          { category: 'TIP', text: '必玩：Eejanaika (翻轉次數最多)' }
        ]
      },
      {
        id: '2-6',
        time: '16:00',
        title: '河口湖畔散步',
        type: ActivityType.SIGHTSEEING,
        location: 'Lake Kawaguchi',
        address: 'Funatsu, Fujikawaguchiko, Minamitsuru District, Yamanashi',
        description: '從樂園搭公車 10–15 分，享受湖畔寧靜。',
        guideStory: '河口湖是富士五湖中開發最完善的。沿著湖畔步道走，可以看到富士山倒映在湖面的「逆富士」美景（通常清晨或傍晚無風時最明顯）。',
        imageUrl: 'https://onsen-ryokan.hk/wp-content/uploads/2017/04/d08050220154d2e1a27469c4c0d51b1b.jpg',
        highlights: [
          { category: 'TIP', text: '預計停留至 17:30' },
          { category: 'TIP', text: '最佳拍攝點：產屋崎' }
        ]
      },
      {
        id: '2-7',
        time: '18:00',
        title: '入住：美富士飯店 (Check-in)',
        type: ActivityType.STAY,
        location: 'Hotel Mifujien',
        address: '207 Azagawa, Fujikawaguchiko, Minamitsuru District, Yamanashi 401-0303',
        description: '傳統日式溫泉旅館。',
        guideStory: '這間飯店的所有房間都面湖，可以躺在房間看富士山。辦理入住後，稍作休息準備享用晚餐。',
        imageUrl: 'https://cdn.jalan.jp/jalan/images/pict3L/Y7/Y310977/Y310977062.jpg',
        highlights: [
          { category: 'TIP', text: '大廳有免費茶水' }
        ]
      },
      {
        id: '2-8',
        time: '19:00',
        title: '晚餐：懷石料理 + 溫泉',
        type: ActivityType.FOOD,
        location: 'Hotel Mifujien',
        address: '207 Azagawa, Fujikawaguchiko, Minamitsuru District, Yamanashi 401-0303',
        description: '飯店內享用豐盛晚餐與溫泉。',
        guideStory: '晚餐是精緻的會席料理，包含山梨縣特產。餐後請務必體驗露天風呂，運氣好能看到富士山下的點點燈火。',
        imageUrl: 'https://cdn.jalan.jp/jalan/images/pict3L/Y7/Y310977/Y310977162.jpg',
        highlights: [
          { category: 'MUST_EAT', text: '飯店懷石料理' },
          { category: 'TIP', text: '溫泉開放至午夜' }
        ]
      }
    ]
  },
  {
    id: 'day3',
    date: '3/30 (日)',
    title: '自駕環湖：忍野八海 & 西湖',
    weatherForecast: { temp: '7°C - 16°C', condition: 'Sunny' },
    items: [
      {
        id: '3-1',
        time: '09:00',
        title: '早餐：Haostay Coffee',
        type: ActivityType.FOOD,
        location: 'Haostay Coffee',
        address: '251-4 Funatsu, Fujikawaguchiko, Yamanashi',
        description: '坐公車約 9 分鐘，享受湖畔咖啡。',
        guideStory: '這是一間擁有絕佳景觀的咖啡廳，頂樓露台可以直接眺望富士山。他們的拿鐵拉花非常精緻。',
        imageUrl: 'https://www.porta-y.jp/wp-content/uploads/2023/02/haostay_coffee-230207-2.jpg', 
        highlights: [
          { category: 'MUST_ORDER', text: '富士山造型拿鐵' }
        ]
      },
      {
        id: '3-2',
        time: '10:00',
        title: '取車：Nippon Rent-A-Car',
        type: ActivityType.TRANSPORT,
        location: 'Nippon Rent-A-Car Kawaguchiko',
        address: '3647-1 Funatsu, Fujikawaguchiko, Yamanashi 401-0301',
        description: '開始自駕之旅！',
        guideStory: '日本為右駕，雨刷和方向燈與台灣相反，請務必慢行適應。出發前請設定好導航（輸入 MapCode 或電話號碼最準確）。',
        imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwf0XtBKJsW-nE2AeCDi0_0ksGGC_mZVxG0Vpr-e0ap0AabKC0crm9y8KADOodTeR_LaZu8BwtQwD_2Y2GDN9u59mZK-uhVpTUEuM5p2OUu7c71sqPTwu-VHzYs7T35dxIRzCkKAg=w243-h174-n-k-no-nu', 
        highlights: [
          { category: 'TIP', text: '需攜帶：台灣駕照 + 日文譯本' },
          { category: 'TIP', text: '或：國際駕照 (IDP)' }
        ]
      },
      {
        id: '3-3',
        time: '10:30',
        title: '忍野八海 (Oshino Hakkai)',
        type: ActivityType.SIGHTSEEING,
        location: 'Oshino Hakkai',
        address: 'Shibokusa, Oshino, Minamitsuru District, Yamanashi',
        description: '世界文化遺產，清澈的湧泉群。',
        guideStory: '這裡的水是富士山融雪經過80年過濾而成的，清澈見底。「湧池」是最深也最美的一個，藍得不可思議。觀光客多，建議往裡面走到「鏡池」拍逆富士。',
        imageUrl: 'https://static.gltjp.com/glt/data/directory/12000/11258/20201026_054156_c0b3552b_w1920.webp', 
        highlights: [
          { category: 'MUST_EAT', text: '現烤草餅 (Kusa Mochi)' },
          { category: 'MUST_EAT', text: '名水豆腐' },
          { category: 'MUST_BUY', text: '辣椒味噌 (伴手禮)' }
        ]
      },
      {
        id: '3-4',
        time: '12:20',
        title: '山中湖午餐',
        type: ActivityType.FOOD,
        location: 'Lake Yamanaka',
        address: 'Yamanakako, Minamitsuru District, Yamanashi',
        description: 'Meshi Dokoro Yoshizawa (定食) 或 Reel Cafe (拉麵)。',
        guideStory: '山中湖是五湖中面積最大的，也是著名的「天鵝湖」。Reel Cafe 是一家由舊義大利餐廳改建的拉麵店，湯頭非常細緻，是拉麵迷的隱藏名單。',
        imageUrl: 'https://www.porta-y.jp/wp-content/uploads/2025/02/meshidokoro-yoshizawa-250213-3.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: 'Reel Cafe：醬油拉麵' },
          { category: 'TIP', text: '若選 Yoshizawa：推薦炸豬排定食' }
        ]
      },
      {
        id: '3-5',
        time: '14:00',
        title: '西湖 療癒之里 根場',
        type: ActivityType.SIGHTSEEING,
        location: 'Saiko Iyashi-no-Sato Nenba',
        address: '2710 Saiko, Fujikawaguchiko, Yamanashi 401-0332',
        description: '富士山下的合掌村。',
        guideStory: '這裡重現了過去被土石流掩埋的茅草屋聚落。你可以租借戰國盔甲或和服拍照，這裡的富士山景觀比白川鄉更壯闊，且遊客較少。',
        imageUrl: 'https://img.bobblog.tw/2019/tokyo/travel/saiko-iyashi-no-sato-nemba/saiko-iyashi-no-sato-nemba-19.jpg', 
        highlights: [
          { category: 'TIP', text: '推薦體驗：和服/武士服租借' },
          { category: 'MUST_BUY', text: '手工陶藝品' }
        ]
      },
      {
        id: '3-6',
        time: '17:00',
        title: '本栖湖夕陽',
        type: ActivityType.SIGHTSEEING,
        location: 'Lake Motosu',
        address: 'Nakanokura, Minobu, Minamikoma District, Yamanashi 409-3104',
        description: '千元鈔票上的富士山。',
        guideStory: '前往「中之倉峠展望地」可以拍到跟日幣 1000 元紙鈔背面一模一樣的景色（逆富士）。這裡也是搖曳露營的聖地。',
        imageUrl: 'https://cdn.zekkei-japan.jp/images/spots/84aa30ac7ceb0a6f0311e716161c1cad.jpg',
        highlights: [
          { category: 'TIP', text: '日落時間：17:50' },
          { category: 'TIP', text: '地點：公廁旁的觀景台' }
        ]
      },
      {
        id: '3-7',
        time: '18:30',
        title: '晚餐：燒肉 HIMAWARITEI',
        type: ActivityType.FOOD,
        location: 'Yakiniku Himawaritei',
        address: '5511-1 Funatsu, Fujikawaguchiko, Yamanashi',
        description: '在地人推薦的人氣燒肉。',
        guideStory: '這家店使用高品質的國產牛，但價格比東京親民許多。特別推薦他們的「甲州牛」，肉質鮮甜。建議先訂位。',
        imageUrl: 'https://lh3.googleusercontent.com/geougc-cs/AMBA38vDUIV8u9ZCbP4lrERe9YThUBCx9R6mChjuhcXRyIBZ6Zm6wSxQedasmEtdE7zEFNROlldbP5mQMsUKgPl0THjxx9yoP0guX0J9GdvzW_pOa-EdQTwgu0GBqXALVk1raDuvV92T=s3840-w3840-h1738-rw', 
        highlights: [
          { category: 'MUST_EAT', text: '特上牛五花 (Karubi)' },
          { category: 'MUST_EAT', text: '石鍋拌飯' },
          { category: 'RESERVATION', text: '建議事先電話預約' }
        ]
      }
    ]
  },
  {
    id: 'day4',
    date: '3/31 (一)',
    title: '櫻花與五重塔 & 餺飥麵',
    weatherForecast: { temp: '9°C - 17°C', condition: 'Sunny' },
    items: [
      {
        id: '4-1',
        time: '09:30',
        title: '早餐：Lake Bake Café',
        type: ActivityType.FOOD,
        location: 'Lake Bake Cafe',
        address: '2585-85 Oishi, Fujikawaguchiko, Yamanashi 401-0305',
        description: '絕美湖景麵包店。',
        guideStory: '這家店就在大石公園旁，以天然酵母麵包聞名。露台座位正對富士山，是奢侈的早餐享受。',
        imageUrl: 'https://ytimg.yam.com/images/article/202405/2410534927.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '自家製酵母麵包' },
          { category: 'MUST_EAT', text: '司康 (Scone)' }
        ]
      },
      {
        id: '4-2',
        time: '11:00',
        title: '大石公園 (Oishi Park)',
        type: ActivityType.SIGHTSEEING,
        location: 'Oishi Park',
        address: '2585 Oishi, Fujikawaguchiko, Yamanashi 401-0305',
        description: '四季花海與富士山。',
        guideStory: '這裡有一條長長的花街道。3月底4月初可能有早開的鬱金香或水仙花。這裡也是買富士山週邊商品最齊全的地方之一。',
        imageUrl: 'https://tw.wamazing.com/media/wp-content/uploads/sites/4/2025/03/ooishipark_pixta_90606576_M.jpg.webp', 
        highlights: [
          { category: 'MUST_BUY', text: '富士山造型餅乾' },
          { category: 'MUST_EAT', text: '藍莓霜淇淋' }
        ]
      },
      {
        id: '4-3',
        time: '11:30',
        title: '新倉山淺間公園 (忠靈塔)',
        type: ActivityType.SIGHTSEEING,
        location: 'Chureito Pagoda',
        address: '2-4-1 Asama, Fujiyoshida, Yamanashi 403-0011',
        description: '日本旅遊書封面的經典場景。',
        guideStory: '想要看到「五重塔+櫻花+富士山」的三合一絕景，必須爬上 398 階的「咲古耶姬」階梯。雖然累，但上面的景色絕對值得！早上去比較順光。',
        imageUrl: 'https://imgcp.aacdn.jp/img-a/1200/900/global-aaj-front/article/2017/06/595048184fa06_5950474045019_1189093891.jpg', 
        highlights: [
          { category: 'TIP', text: '請穿好走的鞋子' },
          { category: 'TIP', text: '人潮眾多，請依序排隊拍照' }
        ]
      },
      {
        id: '4-4',
        time: '13:30',
        title: '午餐：Tomifuji (とみふじ)',
        type: ActivityType.FOOD,
        location: 'Tomifuji',
        address: '527 Funatsu, Fujikawaguchiko, Yamanashi 401-0301',
        description: '在地家庭料理。',
        guideStory: '這是一間由老夫婦經營的小店，充滿昭和家庭感。定食份量大又便宜，是當地人的愛店。',
        imageUrl: 'https://lh3.googleusercontent.com/geougc-cs/AMBA38vPjNTJV8guRamAxmgf5PoFpXgLTHbQ7lzJO7S8xY8aAMD_7A6I3WfpiUl3lsbBSBdNW9VsL0XRfvKFW8OUKS8yGm-49FT5kNV5f5Qsw1l8CdSF5BcAEIgFn-qrZeproohAVXOTQ_NU88Jw=s3840-w3840-h1738-rw', 
        highlights: [
          { category: 'MUST_EAT', text: '炸竹莢魚定食' },
          { category: 'MUST_EAT', text: '薑燒豬肉定食' }
        ]
      },
      {
        id: '4-5',
        time: '15:30',
        title: '天上山公園纜車 (Kachi Kachi)',
        type: ActivityType.SIGHTSEEING,
        location: 'Mt. Fuji Panoramic Ropeway',
        address: '1163-1 Azagawa, Fujikawaguchiko, Yamanashi 401-0303',
        description: '360度俯瞰河口湖。',
        guideStory: '纜車是以日本童話「咔嚓咔嚓山」為主題，到處都是狸貓和兔子的裝飾。山頂有「絕景鞦韆」和「天上的鐘」，求姻緣很靈驗喔！',
        imageUrl: 'https://images.keizai.biz/mtfuji_keizai/headline/1519120662_photo.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '狸貓糯米糰子' },
          { category: 'MUST_BUY', text: '兔子御守' }
        ]
      },
      {
        id: '4-6',
        time: '18:00',
        title: '晚餐：Hoto Fudo (ほうとう不動)',
        type: ActivityType.FOOD,
        location: 'Hoto Fudo East',
        address: '2458 Funatsu, Fujikawaguchiko, Yamanashi 401-0301',
        description: '河口湖必吃鄉土料理：餺飥麵。',
        guideStory: '餺飥麵是用南瓜味噌湯底煮粗麵條，蔬菜精華完全融入湯中，非常暖胃。使用滾燙的鐵鍋上桌。',
        imageUrl: 'https://tw.tabiiro.travel/lpimg/gourmet/309267/main/img1.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '不動餺飥麵 (Hoto)' },
          { category: 'MUST_EAT', text: '馬肉刺身 (敢吃的話)' }
        ]
      },
      {
        id: '4-7',
        time: '19:30',
        title: '歸還租車',
        type: ActivityType.TRANSPORT,
        location: 'Nippon Rent-A-Car',
        address: '3647-1 Funatsu, Fujikawaguchiko, Yamanashi 401-0301',
        description: '檢查車況，加滿油後歸還。',
        guideStory: '還車前記得去附近的加油站將油箱加滿 (Full Tank)，並保留收據給店員檢查。',
        imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwf0XtBKJsW-nE2AeCDi0_0ksGGC_mZVxG0Vpr-e0ap0AabKC0crm9y8KADOodTeR_LaZu8BwtQwD_2Y2GDN9u59mZK-uhVpTUEuM5p2OUu7c71sqPTwu-VHzYs7T35dxIRzCkKAg=w243-h174-n-k-no-nu', 
        highlights: [
          { category: 'TIP', text: '請保留加油收據' }
        ]
      }
    ]
  },
  {
    id: 'day5',
    date: '4/1 (三)',
    title: '河口湖 → 澀谷 → 東京鐵塔 & Shibuya Sky',
    weatherForecast: { temp: '14°C - 20°C', condition: 'Sunny' },
    items: [
      {
        id: '5-1',
        time: '10:10',
        title: '移動：高速巴士前往澀谷',
        type: ActivityType.TRANSPORT,
        location: 'Kawaguchiko Station',
        address: 'Kawaguchiko Station, Yamanashi',
        description: '搭乘高速巴士直達澀谷 Mark City。',
        guideStory: '上車前請確認車票時間。巴士約需 2 小時抵達澀谷。下車地點通常在澀谷 Mark City 5樓的高速巴士轉運站。',
        imageUrl: 'https://img.bobblog.tw/2019/tokyo/transport/shibuya-to-fuji/Shibuya-bus-18.jpg', 
        highlights: [
          { category: 'TIP', text: '車程約 2 小時' }
        ]
      },
      {
        id: '5-2',
        time: '12:00',
        title: '澀谷站寄放行李',
        type: ActivityType.OTHER,
        location: 'Shibuya Station',
        address: '1-12-1 Dogenzaka, Shibuya City, Tokyo',
        description: 'Big Echo Shibuya Dogenzaka Store 預約寄放行李',
        guideStory: '澀谷站人潮洶湧，建議利用 Mark City 或車站內的 Coin Locker。若找不到大型置物櫃，可搜尋附近的「Ecbo Cloak」行李寄放服務。',
        imageUrl: 'https://ecbo-production.s3-ap-northeast-1.amazonaws.com/images/7sJOUY44/1d3eb3de717cd300377bc150d8dab586df96e7ed.webp', 
        highlights: [
          { category: 'TIP', text: '準備 100 日圓硬幣或 Suica' }
        ]
      },
      {
        id: '5-3',
        time: '12:10',
        title: '午餐：肉屋之台所 (澀谷店)',
        type: ActivityType.FOOD,
        location: 'Nikuya no Daidokoro Shibuya',
        address: '1-25-6 Shibuya, Shibuya City, Tokyo',
        description: 'A4/A5 和牛燒肉吃到飽！',
        guideStory: '這家位於澀谷的燒肉店提供整頭買入的黑毛和牛。特別推薦「和牛豪華拼盤」，視覺效果滿分，肉質鮮嫩。',
        imageUrl: 'https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/313819/698a6dfd8caad4bb04e055dcafbebc78.jpg?token=64b1d4b&api=v2', 
        highlights: [
          { category: 'MUST_EAT', text: '和牛豪華拼盤' },
          { category: 'MUST_ORDER', text: '厚切牛舌' },
          { category: 'RESERVATION', text: '建議事先網路訂位' }
        ]
      },
      {
        id: '5-4',
        time: '13:30',
        title: '東京鐵塔 & 芝公園賞櫻',
        type: ActivityType.SIGHTSEEING,
        location: 'Shiba Park',
        address: '4-10-17 Shibakoen, Minato City, Tokyo',
        description: '增上寺 × 鐵塔 × 櫻花。',
        guideStory: '搭乘山手線至濱松町，步行即可抵達。芝公園 4 號地是拍攝東京鐵塔與櫻花同框的絕佳位置。增上寺大殿旁的櫻花配上紅色鐵塔也是經典構圖。',
        imageUrl: 'https://article-image.travel.navitime.jp/img/NTJnews0473-zh-tw/mat1038_1_1.webp', 
        highlights: [
          { category: 'TIP', text: '必拍：芝公園 4 號地' },
          { category: 'TIP', text: '必拍：增上寺與鐵塔' }
        ]
      },
      {
        id: '5-5',
        time: '15:00',
        title: '皇居外苑 (二重橋)',
        type: ActivityType.SIGHTSEEING,
        location: 'Imperial Palace Nijubashi Bridge',
        address: '1-1 Chiyoda, Chiyoda City, Tokyo',
        description: '東京的歷史中心，莊嚴寧靜。',
        guideStory: '從芝公園移動到皇居。二重橋是皇居最知名的地標，也是昔日江戶城的正門區域。廣場上的碎石路是為了防刺客而鋪設的（走在上面會有聲音）。',
        imageUrl: 'https://visit-chiyoda.tokyo/app/upload/spot_image/3a99eeb0be0a2c3f36e7ffdea2f2f30b.jpg', 
        highlights: [
          { category: 'TIP', text: '必拍：二重橋倒影' }
        ]
      },
      {
        id: '5-6',
        time: '17:00',
        title: 'Shibuya Sky (夕陽+夜景)',
        type: ActivityType.SIGHTSEEING,
        location: 'Shibuya Sky',
        address: '2-24-12 Shibuya, Shibuya City, Tokyo 150-6145',
        description: '東京最潮展望台，俯瞰十字路口。',
        guideStory: '建議 16:50 入場，這樣可以一次捕捉到「金色時刻」、日落與繁華夜景。頂樓風大請注意保暖。',
        imageUrl: 'https://banbi.tw/wp-content/uploads/20200123223910_87.jpg', 
        highlights: [
          { category: 'RESERVATION', text: '務必提前 2 週購票' },
          { category: 'TIP', text: '禁止攜帶腳架/自拍棒/帽子' }
        ]
      },
      {
        id: '5-7',
        time: '18:30',
        title: '晚餐：AFURI (澀谷店)',
        type: ActivityType.FOOD,
        location: 'AFURI Shibuya',
        address: '1F Grand Tokyo Shibuya Bldg, 3-21-3 Shibuya, Tokyo',
        description: '清爽系柚子鹽拉麵。',
        guideStory: 'AFURI 的湯頭使用神奈川阿夫利山的天然水，加入雞肉、魚介與柚子汁熬煮，帶有清新的柑橘香氣，非常適合女生或想解膩的人。',
        imageUrl: 'https://d1grca2t3zpuug.cloudfront.net/2021/05/afuriinfo08.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '柚子鹽拉麵' },
          { category: 'MUST_EAT', text: '炙燒叉燒飯' }
        ]
      },
      {
        id: '5-8',
        time: '20:00',
        title: '移動：前往西日暮里',
        type: ActivityType.TRANSPORT,
        location: 'Nippori Station',
        address: 'Nishi-Nippori Station, Tokyo',
        description: '取回行李，搭乘山手線。',
        guideStory: '回到澀谷站取回行李，搭乘 JR 山手線直達西日暮里（約 20 分鐘）。盡量避開上下班尖峰時間的擁擠車廂。',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Yamanote-Line-E235.jpg/330px-Yamanote-Line-E235.jpg', 
        highlights: [
          { category: 'TIP', text: '車程約 20 分鐘' }
        ]
      },
      {
        id: '5-9',
        time: '20:30',
        title: '入住：日暮里 Airbnb',
        type: ActivityType.STAY,
        location: 'Nippori',
        address: 'Near Nishi-Nippori Station, Tokyo',
        description: 'Check-in 休息。',
        guideStory: '抵達民宿辦理入住。日暮里一帶治安良好且安靜，車站附近有超商可採買隔天早餐。',
        imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-48797772/original/0fb6cf06-ca41-4dba-a0b6-ab8fd8da7698.png?sw_cache=trips_images&im_w=960', 
        highlights: [
          { category: 'TIP', text: '確認 Wifi 密碼與熱水器' }
        ]
      }
    ]
  },
  {
    id: 'day6',
    date: '4/2 (四)',
    title: '迪士尼半日 & 晴空塔市景',
    weatherForecast: { temp: '15°C - 21°C', condition: 'Cloudy' },
    items: [
      {
        id: '6-1',
        time: '08:00',
        title: '東京迪士尼 (Land/Sea)',
        type: ActivityType.SIGHTSEEING,
        location: 'Tokyo Disney Resort',
        address: '1-1 Maihama, Urayasu, Chiba 279-0031',
        description: '半日快閃，鎖定重點設施。',
        guideStory: '建議只選 2-3 個最想玩的重點設施，不要讓自己太累。Land 推薦美女與野獸（需 DPA），Sea 推薦夢幻泉鄉（需 DPA 或 SP）。',
        imageUrl: 'https://media2.tokyodisneyresort.jp/home/top/check-calendar.jpg', 
        highlights: [
          { category: 'TIP', text: '必載 App: Tokyo Disney Resort' },
          { category: 'MUST_EAT', text: '三眼怪麻糬' },
          { category: 'MUST_EAT', text: '煙燻火雞腿' }
        ]
      },
      {
        id: '6-2',
        time: '14:00',
        title: 'IKSPIARI (購物+午餐)',
        type: ActivityType.SHOPPING,
        location: 'Ikspiari',
        address: '1-4 Maihama, Urayasu, Chiba 279-8529',
        description: '迪士尼旁的歐風商場。',
        guideStory: '就在舞濱站外面，不用買票進迪士尼也能逛。餐廳選擇多，商店也很多（有 Disney Store），適合中午稍微休息採買。',
        imageUrl: 'https://static.gltjp.com/glt/data/directory/12000/11846/20210807_214423_dc0d829b_w1920.webp', 
        highlights: [
          { category: 'MUST_BUY', text: 'Disney Store (免門票)' }
        ]
      },
      {
        id: '6-3',
        time: '15:00',
        title: '移動：前往晴空塔 (押上)',
        type: ActivityType.TRANSPORT,
        location: 'Tokyo Skytree Station',
        address: 'Oshiage Station, Tokyo',
        description: '舞濱 → 新木場 → 押上。',
        guideStory: '先搭 JR 京葉線到新木場，轉乘東京 Metro 半藏門線直達押上（晴空塔前）。車程約 45 分鐘。',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3usSF-uIcfdlWtYtzzof1uyBznvy7yQkWXA&s', 
        highlights: [
          { category: 'TIP', text: '轉乘需出站再進站' }
        ]
      },
      {
        id: '6-4',
        time: '15:45',
        title: '登上東京晴空塔 (市景)',
        type: ActivityType.SIGHTSEEING,
        location: 'Tokyo Skytree',
        address: '1-1-2 Oshiage, Sumida City, Tokyo 131-0045',
        description: '350m 展望台俯瞰東京。',
        guideStory: '白天視野最清晰，可以看到淺草寺、隅田川蜿蜒的樣子，天氣好甚至能看到遠方的富士山。體驗一下站在「天望甲板」透明地板上的刺激感。',
        imageUrl: 'https://d1grca2t3zpuug.cloudfront.net/2025/02/67bbed4dc1c4c-860x500.webp', 
        highlights: [
          { category: 'TIP', text: '推薦：天望甲板 (350m)' },
          { category: 'TIP', text: '可加購：天望回廊 (450m)' }
        ]
      },
      {
        id: '6-5',
        time: '17:30',
        title: '逛 Solamachi (300+店鋪)',
        type: ActivityType.SHOPPING,
        location: 'Tokyo Solamachi',
        address: '1-1-2 Oshiage, Sumida City, Tokyo',
        description: '超好逛的晴空街道。',
        guideStory: '這裡集結了所有你想買的伴手禮。必逛：3樓的 Loft、4樓的 Pokémon Center 和東京香蕉（Tokyo Banana）。',
        imageUrl: 'https://article-image.travel.navitime.jp/img/NTJtrv0969-en/5.jpg', 
        highlights: [
          { category: 'MUST_BUY', text: '東京香蕉 (晴空塔限定)' },
          { category: 'MUST_BUY', text: 'Press Butter Sand' },
          { category: 'TIP', text: '可在此辦理退稅' }
        ]
      },
      {
        id: '6-6',
        time: '19:00',
        title: '晚餐：Solamachi 美食街',
        type: ActivityType.FOOD,
        location: 'Tokyo Solamachi Dining',
        address: '1-1-2 Oshiage, Sumida City, Tokyo',
        description: '任選美食：六厘舍沾麵、鰻魚飯等。',
        guideStory: 'Solamachi 的餐廳選擇非常多。想吃沾麵霸主「六厘舍」記得要排隊。或者到 30F/31F 的景觀餐廳享受最後的東京夜景晚餐。',
        imageUrl: 'https://bobbyfun.tw/wp-content/uploads/pixnet/2df8cdaeefcee1f717743d3c35910482.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '六厘舍：特製沾麵' },
          { category: 'TIP', text: '30F/31F 有免費觀景區' }
        ]
      },
      {
        id: '6-7',
        time: '20:00',
        title: '移動：返回西日暮里',
        type: ActivityType.TRANSPORT,
        location: 'Nishi-Nippori Station',
        address: 'Nishi-Nippori Station, Tokyo',
        description: '押上 → 西日暮里。',
        guideStory: '搭乘地鐵或公車返回西日暮里休息，整理行李準備隔天回國。',
        imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-48797772/original/0fb6cf06-ca41-4dba-a0b6-ab8fd8da7698.png?sw_cache=trips_images&im_w=960', 
        highlights: [
          { category: 'TIP', text: '車程約 30 分鐘' }
        ]
      }
    ]
  },
  {
    id: 'day7',
    date: '4/3 (四)',
    title: '築地美食 & 滿載而歸',
    weatherForecast: { temp: '13°C - 19°C', condition: 'Sunny' },
    items: [
      {
        id: '7-2',
        time: '10:15',
        title: '築地場外市場',
        type: ActivityType.FOOD,
        location: 'Tsukiji Outer Market',
        address: '4-16-2 Tsukiji, Chuo City, Tokyo 104-0045',
        description: '東京的廚房，海鮮天堂。',
        guideStory: '雖然批發市場搬走了，但場外市場依然是美食一級戰區！「丸武」是藝人泰利伊藤家開的玉子燒店，甜甜熱熱的超好吃。想吃海鮮丼推薦「築地虎杖」或「壽司大(如果排得到)」。',
        imageUrl: 'https://d28dpoj42hxr8c.cloudfront.net/files/user/201610121233_1.jpg?v=1476243196', 
        highlights: [
          { category: 'MUST_EAT', text: '丸武玉子燒' },
          { category: 'MUST_EAT', text: '黑鮪魚壽司/海鮮丼' },
          { category: 'MUST_EAT', text: '草莓大福' }
        ]
      },
      {
        id: '7-3',
        time: '12:00',
        title: '上野阿美橫丁',
        type: ActivityType.SHOPPING,
        location: 'Ameyoko Shopping District',
        address: '4-9-14 Ueno, Taito City, Tokyo',
        description: '最後補貨！藥妝零食大採購。',
        guideStory: '這裡有最便宜的藥妝店（OS Drug 不退稅但直接便宜）和「二木的菓子」（零食批發價）。充滿叫賣聲，很有台灣夜市的親切感。',
        imageUrl: 'https://rstatic.enjoytokyo.jp/assets/images/article/bb/215782/2694384.jpg?1752653100=&p=t&w=1800', 
        highlights: [
          { category: 'MUST_BUY', text: '二木的菓子 (買伴手禮)' },
          { category: 'MUST_BUY', text: 'OS Drug (便宜藥妝)' }
        ]
      },
      {
        id: '7-4',
        time: '14:30',
        title: '搭乘 Skyliner 前往成田',
        type: ActivityType.TRANSPORT,
        location: 'Keisei Nippori Station',
        address: 'Nippori Station, Tokyo',
        description: '最速機場交通，36分鐘抵達。',
        guideStory: 'Skyliner 全車對號座，舒適寬敞。上車前記得在日暮里站買個鐵路便當或飲料。',
        imageUrl: 'https://www.keisei.co.jp/keisei/tetudou/skyliner/tc/assets/images/top/routemap_skyliner.jpg', 
        highlights: [
          { category: 'TIP', text: '預留時間逛機場免稅店' }
        ]
      },
      {
        id: '7-5',
        time: '17:40',
        title: '班機起飛返台',
        type: ActivityType.TRANSPORT,
        location: 'Narita Airport Terminal 1',
        address: 'Narita International Airport (NRT)',
        description: '泰獅航空 SL395 (17:40-20:20)。',
        guideStory: '如果有剩下的零錢，可以在機場扭蛋機花掉。祝您旅途愉快，期待下次再來日本！',
        imageUrl: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_266554/20250102065621_f3FCH/jpg', 
        highlights: [
          { category: 'TIP', text: 'TPE 抵達時間：20:20' }
        ]
      }
    ]
  }
];

export const FLIGHTS: FlightInfo[] = [
  {
    type: 'DEPARTURE',
    airline: '台灣虎航 (Tigerair)',
    flightNumber: 'IT202',
    route: '台北桃園 (TPE) > 東京成田 (NRT)',
    time: '3/28 13:20 - 17:30'
  },
  {
    type: 'RETURN',
    airline: '泰獅航空 (Thai Lion Air)',
    flightNumber: 'SL395',
    route: '東京成田 (NRT) > 台北桃園 (TPE)',
    time: '4/3 17:40 - 20:20'
  }
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    name: 'Asakusa Ryokan Toukaisou',
    dates: '3/28 - 3/29',
    notes: '淺草區，傳統日式旅館，近雷門',
    address: '2-16-12 Nishi-Asakusa, Taito-ku, Tokyo'
  },
  {
    name: 'Hotel Mifujien (美富士飯店)',
    dates: '3/29 - 3/31',
    notes: '河口湖畔，客房內可看富士山，附溫泉',
    address: '207 Azagawa, Fujikawaguchiko, Yamanashi'
  },
  {
    name: '日暮里 Airbnb',
    dates: '4/1 - 4/3',
    notes: '交通樞紐，Skyliner 直達機場方便',
    address: 'Near Nippori Station, Arakawa City'
  }
];

export const TRANSPORT_MAPS_DATA: TransportMapItem[] = [
  {
    id: 'keisei-access',
    name: '京成 Access 特急',
    company: 'Keisei',
    color: '#ea5404',
    textColor: '#ffffff',
    description: '連接成田機場與淺草/羽田的快速列車。不需對號入座，可刷西瓜卡。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Keisei-Type3100-3151.jpg',
    mapUrl: 'https://www.keisei.co.jp/keisei/tetudou/skyliner/tc/assets/images/top/routemap_express.jpg',
    officialLink: 'https://www.keisei.co.jp/keisei/tetudou/skyliner/tc/traffic/index.php'
  },
  {
    id: 'jr-yamanote',
    name: 'JR 山手線',
    company: 'JR',
    color: '#9acd32',
    textColor: '#ffffff',
    description: '東京最重要的環狀線，連接新宿、澀谷、東京、上野等大站。綠色車廂。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Series-E235-0_4.jpg/1200px-Series-E235-0_4.jpg',
    mapUrl: 'https://maptabi.wordpress.com/wp-content/uploads/2019/03/route_25897448920_o.png',
    officialLink: 'https://www.jreast.co.jp/tc/downloads/index.html'
  },
  {
    id: 'jr-keiyo',
    name: 'JR 京葉線',
    company: 'JR',
    color: '#c9242f',
    textColor: '#ffffff',
    description: '前往東京迪士尼 (舞濱站) 必搭的路線。東京車站轉乘需走很遠。',
    imageUrl: 'https://tw.wamazing.com/media/wp-content/uploads/sites/4/2020/01/keiyoline_5.jpg.webp',
    mapUrl: 'https://img.gototravel.tw/2019/japanmap/kyoto/map43.jpg',
    officialLink: 'https://www.jreast.co.jp/tc/downloads/index.html'
  },
  {
    id: 'fuji-excursion',
    name: '富士回遊號',
    company: 'JR',
    color: '#E60012',
    textColor: '#ffffff',
    description: '新宿直達河口湖的特急列車 (E353系)。全車指定席，一定要預約。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/JRE_Series-E353-S211_Fuji-kaiyu-15.jpg',
    mapUrl: 'https://sainteat.tw/wp-content/uploads/%E6%B2%B3%E5%8F%A3%E6%B9%96%E5%AF%8C%E5%A3%AB%E5%9B%9E%E9%81%8A%E8%B7%AF%E7%B7%9A%E5%9C%96.jpg',
    officialLink: 'https://www.jreast.co.jp/hachioji/fuji_excursion/tw/'
  },
  {
    id: 'metro-ginza',
    name: '東京 Metro 銀座線',
    company: 'Tokyo Metro',
    color: '#f39700',
    textColor: '#ffffff',
    description: '亞洲第一條地鐵。連接澀谷、表參道、銀座、淺草等觀光熱點。',
    imageUrl: 'https://tw.wamazing.com/media/wp-content/uploads/sites/4/2020/02/ginzaline_24622173_M.jpg',
    mapUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Tokyo_metro_Ginza_line.png',
    officialLink: 'https://www.tokyometro.jp/tcn/subwaymap/index.html'
  },
  {
    id: 'metro-hanzomon',
    name: '東京 Metro 半藏門線',
    company: 'Tokyo Metro',
    color: '#8b76cc',
    textColor: '#ffffff',
    description: '紫色路線。可前往澀谷、表參道、清澄白河、押上(晴空塔)。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hanzomon-Line_Series18000-18005.jpg/1200px-Hanzomon-Line_Series18000-18005.jpg',
    mapUrl: 'https://d1grca2t3zpuug.cloudfront.net/2024/04/metrolineinfoa07-870x500.webp',
    officialLink: 'https://www.tokyometro.jp/tcn/subwaymap/index.html'
  },
  {
    id: 'metro-hibiya',
    name: '東京 Metro 日比谷線',
    company: 'Tokyo Metro',
    color: '#b5b5ac',
    textColor: '#000000',
    description: '銀色路線。連接中目黑、六本木、銀座、秋葉原、上野。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Tokyo-Metro_Series13000-13137.jpg',
    mapUrl: 'https://d1grca2t3zpuug.cloudfront.net/2024/10/6711ddffee475-870x488.webp',
    officialLink: 'https://www.tokyometro.jp/tcn/subwaymap/index.html'
  },
  {
    id: 'toei-oedo',
    name: '都營大江戶線',
    company: 'Toei',
    color: '#b6007a',
    textColor: '#ffffff',
    description: '深粉紅/洋紅色。環狀地下鐵，經過新宿、六本木、築地市場。',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Toei-subway12-600.jpg',
    mapUrl: 'https://wp-odai.wamazing.com/media/wp-content/uploads/sites/2/2022/06/tokyosubway_310.png.webp',
    officialLink: 'https://www.kotsu.metro.tokyo.jp/ch_h/services/subway.html'
  },
  {
    id: 'metro-hanzomon',
    name: '東京 JR 東日本地圖',
    company: 'JR',
    color: '#006000',
    textColor: '#ffffff',
    description: '東京 JR 東日本地圖。',
    imageUrl: 'https://dimg04.tripcdn.com/images/0M73d12000j5x69nb5C46.jpg',
    mapUrl: 'https://dimg04.tripcdn.com/images/0M73d12000j5x69nb5C46.jpg',
    officialLink: 'https://www.tokyometro.jp/tcn/subwaymap/index.html'
  }
];
