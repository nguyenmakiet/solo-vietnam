import { Destination, MapWaypoint } from "./types"
import { heroUrl } from "@/lib/cloudinary"

// Map-only waypoints for itinerary mapPoints (places without a location page)
const WP = {
  cbCity: { name: "Cao Bang city", lat: 22.6657, lng: 106.2522 },
  maPhuc: { name: "Ma Phuc Pass", lat: 22.73333, lng: 106.31667 },
  phjaThap: { name: "Phja Thap incense village", lat: 22.70136, lng: 106.3695 },
  diaTren: { name: "Dia Tren paper village", lat: 22.711712, lng: 106.393367 },
  phucSen: { name: "Phuc Sen blacksmith village", lat: 22.6834, lng: 106.4087 },
  vinhQuy: { name: "Vinh Quy grass hill", lat: 22.67262, lng: 106.617583 },
  trucLam: { name: "Truc Lam Ban Gioc Pagoda", lat: 22.85097, lng: 106.723256 },
  khuoiKy: { name: "Khuoi Ky stone village", lat: 22.85447, lng: 106.70125 },
  ngocCon: { name: "Ngoc Con (Phi Pha) viewpoint", lat: 22.924106, lng: 106.538292 },
  baoLac: { name: "Bao Lac town", lat: 22.947017, lng: 105.680119 },
  phiaOac: { name: "Phia Oac", lat: 22.5838, lng: 105.8839 },
} satisfies Record<string, MapWaypoint>

export const caoBang: Destination = {
  slug: "cao-bang",
  name: "Cao Bang",
  updatedAt: "2026-11-07",
  province: "Cao Bang",
  provinceSlug: "cao-bang",
  region: "north",

  description:
    "Cao Bang sits on the Chinese border in Vietnam's far north-east, inside the Non Nuoc Cao Bang UNESCO Global Geopark. The Cao Bang Loop - a motorbike route of roughly 200-300km from Cao Bang city - takes in Ban Gioc Waterfall on the border, Nguom Ngao Cave, Angel Eye Mountain, Tay and Nung craft villages and quiet karst valleys. It's a newer, quieter alternative to the Ha Giang Loop, and the two can be joined into one longer ride. Pac Bo, where Ho Chi Minh returned to Vietnam in 1941, and the 15-level Khau Coc Cha Pass lie further west.",

  tagline: "The Cao Bang Loop: waterfalls, karst valleys and border villages",

  heroImage: heroUrl("cao-bang_tu6hxy"),

  tags: ["nature", "history", "trekking", "waterfall", "adventure"],

  travelStyle: ["solo-friendly", "adventure", "hidden-gem", "budget"],

  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "6-9 hours",
      cost: "about 170,000-350,000 VND",
      notes: "Sleeper buses leave from My Dinh, Giap Bat and Gia Lam bus stations; night buses (around 9-10pm) arrive early, ready to pick up a bike. Limousine vans take about 5-6 hours for 350,000-500,000 VND. Putting your own motorbike on the bus costs about 100,000-200,000 VND extra. Book 1-2 weeks ahead for holidays.",
    },
    {
      from: "Ha Giang",
      vehicle: "bus",
      duration: "about 6-7 hours",
      cost: "about 100,000-150,000 VND",
      notes: "Buses usually leave early in the morning from Ha Giang bus station. Or ride: see the Ha Giang Loop + Cao Bang itineraries.",
    },
  ],

  itineraries: [
    {
      duration: "1D",
      label: "Cao Bang Loop in a day",
      days: [
        {
          day: 1,
          title: "Phja Thap, Ban Gioc Waterfall, Nguom Ngao Cave, Angel Eye Mountain",
          distance: "~183km",
          stops: ["ban-gioc-waterfall", "nguom-ngao-cave", "angel-eye-mountain"],
          mapPoints: [WP.cbCity, WP.phjaThap, "ban-gioc-waterfall", WP.trucLam, "nguom-ngao-cave", "angel-eye-mountain", WP.cbCity],
          notes: "A long day: about 183km and 4.5 hours of riding before stops, so leave early. Phja Thap is a Nung incense-making village on the way. Ban Gioc Waterfall is open 7am-5:30pm: 40,000 VND adults, 20,000 VND children 6-15, and a bamboo raft to the falls is 50,000 VND per person. Truc Lam Pagoda sits on the hill just by the falls. Nguom Ngao Cave is a few km away (7:30am-5pm, 45,000 VND for the self-guided section). Angel Eye Mountain on the way back, then into the city before dark.",
        },
      ],
    },
    {
      duration: "2D1N",
      label: "Short loop with a homestay night",
      days: [
        {
          day: 1,
          title: "Ma Phuc Pass, craft villages, Ban Gioc Waterfall, Nguom Ngao Cave",
          stops: ["ban-gioc-waterfall", "nguom-ngao-cave"],
          mapPoints: [WP.cbCity, WP.maPhuc, WP.phjaThap, WP.diaTren, "ban-gioc-waterfall", WP.trucLam, "nguom-ngao-cave", WP.khuoiKy],
          notes: "Climb Ma Phuc Pass out of the city, then stop at Phja Thap (incense) and Dia Tren (bark paper), two Nung craft villages. Ban Gioc Waterfall: 40,000 VND adults, raft to the falls 50,000 VND; water flow peaks around 10:30am-1pm, while before 10am is best for photos. Truc Lam Pagoda is on the hill by the falls. Nguom Ngao Cave nearby (45,000 VND). Sleep in a stone stilt house in Khuoi Ky village - you can rent Tay costume for photos (about 100,000 VND).",
        },
        {
          day: 2,
          title: "Ngoc Con viewpoint, Phong Nam Valley, Angel Eye Mountain, Thang Hen Lake",
          stops: ["phong-nam-valley", "angel-eye-mountain", "thang-hen-lake"],
          mapPoints: [WP.khuoiKy, WP.ngocCon, "phong-nam-valley", "angel-eye-mountain", "thang-hen-lake", WP.cbCity],
          notes: "Ngoc Con viewpoint over the Quay Son River is a long uphill walk - only if you're fit and the weather is good. Ride through Phong Nam Valley, then Angel Eye Mountain (free) and Thang Hen Lake (60,000 VND per motorbike; prettiest around 6-7:30am or 4:30-5:30pm). Leave yourself time to reach Cao Bang city before dark.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Cao Bang Loop - recommended",
      days: [
        {
          day: 1,
          title: "Ma Phuc Pass, craft villages, Vinh Quy grass hill",
          stops: [],
          mapPoints: [WP.cbCity, WP.maPhuc, WP.phjaThap, WP.diaTren, WP.phucSen, WP.vinhQuy],
          notes: "Ma Phuc Pass out of the city, then three craft villages: Phja Thap (incense), Dia Tren (bark paper) and Phuc Sen (Nung blacksmiths). End at Vinh Quy grass hill for sunset - the open, golden ridges are at their best in late autumn and the dry months - and stay at a homestay nearby.",
        },
        {
          day: 2,
          title: "Ban Gioc Waterfall, Nguom Ngao Cave, Khuoi Ky, Phong Nam Valley",
          stops: ["ban-gioc-waterfall", "nguom-ngao-cave", "phong-nam-valley"],
          mapPoints: [WP.vinhQuy, "ban-gioc-waterfall", WP.trucLam, "nguom-ngao-cave", WP.khuoiKy, WP.ngocCon, "phong-nam-valley"],
          notes: "Ban Gioc Waterfall in the morning (7am-5:30pm; 40,000 VND adults, raft 50,000 VND) - before 10am for photos, 10:30am-1pm for the strongest flow. Truc Lam Pagoda on the hill by the falls. Nguom Ngao Cave (45,000 VND self-guided; the full 3.3km guided route is about 195,000 VND). Khuoi Ky stone village (Tay costume rental about 100,000 VND). Ngoc Con viewpoint if you're fit and it's clear, then ride into Phong Nam Valley and stay at a homestay in the valley or near Angel Eye Mountain.",
        },
        {
          day: 3,
          title: "Angel Eye Mountain, Thang Hen Lake, Pac Bo, back to Cao Bang",
          stops: ["angel-eye-mountain", "thang-hen-lake", "pac-bo-historic-site"],
          mapPoints: ["angel-eye-mountain", "thang-hen-lake", "pac-bo-historic-site", WP.cbCity],
          notes: "Angel Eye Mountain (free) and Thang Hen Lake early, when mist sits on the water (60,000 VND per motorbike). Then Pac Bo (8am-5pm; 25,000 VND, electric car about 20,000 VND), where Ho Chi Minh lived in the cave by the clear Lenin Stream - the water is at its prettiest in the morning. Back in Cao Bang city for the night bus to Hanoi.",
        },
      ],
    },
    {
      duration: "5D4N",
      label: "Big Cao Bang Loop with Khau Coc Cha Pass",
      days: [
        {
          day: 1,
          title: "Ma Phuc Pass, craft villages, Vinh Quy grass hill",
          stops: [],
          mapPoints: [WP.cbCity, WP.maPhuc, WP.phjaThap, WP.diaTren, WP.phucSen, WP.vinhQuy],
          notes: "Ma Phuc Pass out of the city, then three craft villages: Phja Thap (incense), Dia Tren (bark paper) and Phuc Sen (Nung blacksmiths). End at Vinh Quy grass hill for sunset - the open, golden ridges are at their best in late autumn and the dry months - and stay at a homestay nearby.",
        },
        {
          day: 2,
          title: "Ban Gioc Waterfall, Nguom Ngao Cave, Khuoi Ky, Phong Nam Valley",
          stops: ["ban-gioc-waterfall", "nguom-ngao-cave", "phong-nam-valley"],
          mapPoints: [WP.vinhQuy, "ban-gioc-waterfall", WP.trucLam, "nguom-ngao-cave", WP.khuoiKy, WP.ngocCon, "phong-nam-valley"],
          notes: "Ban Gioc Waterfall in the morning (7am-5:30pm; 40,000 VND adults, raft 50,000 VND) - before 10am for photos, 10:30am-1pm for the strongest flow. Truc Lam Pagoda on the hill by the falls. Nguom Ngao Cave (45,000 VND self-guided; the full 3.3km guided route is about 195,000 VND). Khuoi Ky stone village (Tay costume rental about 100,000 VND). Ngoc Con viewpoint if you're fit and it's clear, then ride into Phong Nam Valley and stay at a homestay in the valley or near Angel Eye Mountain.",
        },
        {
          day: 3,
          title: "Angel Eye Mountain, Thang Hen Lake, Pac Bo",
          stops: ["angel-eye-mountain", "thang-hen-lake", "pac-bo-historic-site"],
          mapPoints: ["angel-eye-mountain", "thang-hen-lake", "pac-bo-historic-site"],
          notes: "Angel Eye Mountain and Thang Hen Lake in the morning mist (60,000 VND per motorbike), then Pac Bo (8am-5pm; 25,000 VND, electric car about 20,000 VND) and the Lenin Stream. Stay at a homestay near Pac Bo.",
        },
        {
          day: 4,
          title: "Na Tenh Pass, Khau Coc Cha (Me Pia) Pass, Bao Lac",
          stops: ["khau-coc-cha-pass"],
          mapPoints: ["pac-bo-historic-site", "khau-coc-cha-pass", WP.baoLac],
          notes: "West over Na Tenh Pass to Khau Coc Cha, also called Me Pia Pass: about 2.5km of road stacked in 15 switchback levels. The best view is a short hike from a small shop where you park (about 10,000 VND). Bao Lac town is about 17km on, with an evening market - stay there. Ride this stretch in daylight only; fog is common and the roads are quiet.",
        },
        {
          day: 5,
          title: "Bao Lac to Phia Oac and back to Cao Bang",
          stops: [],
          mapPoints: [WP.baoLac, WP.phiaOac, WP.cbCity],
          notes: "Ride back towards Cao Bang via Phia Oac - Phia Den National Park, whose peak reaches 1,931m; in Dec-Jan there can be frost or even snow. Arrive in Cao Bang city for the night bus to Hanoi.",
        },
      ],
    },
    {
      duration: "6D5N",
      label: "Ha Giang Loop + Cao Bang (one way)",
      days: [
        {
          day: 1,
          title: "Ha Giang → Quan Ba → Yen Minh → Lung Cu (night in Lo Lo Chai)",
          distance: "~160km",
          stops: ["ha-giang-city", "quan-ba-heaven-gate", "quan-ba-twin-mountains", "yen-minh-pine-forest", "tham-ma-pass", "hmong-king-palace", "lung-cu-flag-tower", "lo-lo-chai-village"],
          notes: "The longest day - leave by 7am and keep stops short. Quan Ba Heaven Gate and the Twin Mountains first, lunch in Yen Minh, then Tham Ma Pass and the Hmong King Palace (7:30am-5pm, 20,000-25,000 VND). Reach Lung Cu Flag Tower (8am-5pm, 25,000 VND) before it closes and sleep in Lo Lo Chai, the farthest point of the loop - try a night in a traditional rammed-earth Lo Lo house. Don't ride the passes after about 7pm.",
        },
        {
          day: 2,
          title: "Lo Lo Chai → Dong Van → Ma Pi Leng Pass → Nho Que River → Meo Vac",
          distance: "~60km",
          stops: ["dong-van-old-town", "ma-pi-leng-pass", "nho-que-river"],
          notes: "The best day of the loop. Dong Van Old Town in the morning - if it's Sunday, the market is busiest 7-10am. Then Ma Pi Leng Pass at your own pace, stopping at every viewpoint. For the Nho Que boat, don't search \"Nho Que River\" on Google Maps (it sends you toward Cao Bang) - search \"Tu San\" and follow the main road, not forest tracks. The boat is about 150,000 VND per person including the shuttle down to the pier (2026); aim to be there by 4pm. Night in Meo Vac.",
        },
        {
          day: 3,
          title: "Meo Vac to Khau Coc Cha (Me Pia) Pass and Bao Lac",
          stops: ["khau-coc-cha-pass"],
          mapPoints: ["meo-vac-town", "khau-coc-cha-pass", WP.baoLac],
          notes: "Leave the Ha Giang Loop at Meo Vac and head east into Cao Bang province. Khau Coc Cha, also called Me Pia Pass, stacks about 2.5km of road in 15 switchback levels; the best view is a short hike from a small shop where you park (about 10,000 VND). Stay in Bao Lac. Ride in daylight only - after dark the roads are unlit and fog rolls in.",
        },
        {
          day: 4,
          title: "Bao Lac to Pac Bo and Ban Gioc",
          distance: "~139km",
          stops: ["pac-bo-historic-site"],
          mapPoints: [WP.baoLac, "pac-bo-historic-site", WP.khuoiKy],
          notes: "A long riding day of about 139km. Pac Bo (8am-5pm; 25,000 VND, electric car about 20,000 VND) and the Lenin Stream around midday, then on to the Ban Gioc area. Sleep in a stone stilt house in Khuoi Ky village near the falls. Carry snacks and water - there's little on the road after Trung Khanh.",
        },
        {
          day: 5,
          title: "Ban Gioc Waterfall, Nguom Ngao Cave, Phong Nam Valley",
          stops: ["ban-gioc-waterfall", "nguom-ngao-cave", "phong-nam-valley"],
          mapPoints: [WP.khuoiKy, "ban-gioc-waterfall", WP.trucLam, "nguom-ngao-cave", WP.ngocCon, "phong-nam-valley"],
          notes: "Ban Gioc Waterfall early (7am-5:30pm; 40,000 VND adults, raft 50,000 VND), Truc Lam Pagoda on the hill by the falls, then Nguom Ngao Cave (45,000 VND). Ngoc Con viewpoint if you're fit and it's clear, then Phong Nam Valley. Stay in the valley or near Angel Eye Mountain.",
        },
        {
          day: 6,
          title: "Angel Eye Mountain, Thang Hen Lake, Cao Bang city",
          distance: "~92km",
          stops: ["angel-eye-mountain", "thang-hen-lake"],
          mapPoints: ["angel-eye-mountain", "thang-hen-lake", WP.cbCity],
          notes: "Angel Eye Mountain (free) and Thang Hen Lake (60,000 VND per motorbike) in the morning, then into Cao Bang city. Return the bike if your shop allows a one-way drop-off (arrange it before you start), and take the night bus to Hanoi.",
        },
      ],
    },
    {
      duration: "7D6N",
      label: "Ha Giang Loop + Cao Bang, slower (one way)",
      days: [
        {
          day: 1,
          title: "Ha Giang → Quan Ba → Yen Minh",
          distance: "~100km",
          stops: ["ha-giang-city", "quan-ba-heaven-gate", "quan-ba-twin-mountains", "lung-khuy-cave", "yen-minh-pine-forest", "yen-minh-town"],
          notes: "Relaxed first day to get used to the bike. Quan Ba Heaven Gate for the first big view over the Twin Mountains, then Lung Khuy Cave just beyond them (30,000-50,000 VND, about 1-2 hours with the walk up - go in daylight). Afternoon through the Yen Minh Pine Forest, a stretch of highland pine that changes the whole atmosphere. Night in Yen Minh.",
        },
        {
          day: 2,
          title: "Yen Minh → Tham Ma → Hmong King Palace → Lung Cu (night in Lo Lo Chai)",
          distance: "~80km",
          stops: ["yen-minh-town", "tham-ma-pass", "hmong-king-palace", "lung-cu-flag-tower", "lo-lo-chai-village"],
          notes: "Tham Ma Pass as the plateau opens up - some children here push flowers and hair braiding for money (see FAQ). Hmong King Palace (Vuong Family Mansion) at Sa Phin, then Lung Cu Flag Tower near Vietnam's northernmost point. Sleep in Lo Lo Chai below the tower, ideally in a rammed-earth Lo Lo house - the Lo Lo culture is found in very few places.",
        },
        {
          day: 3,
          title: "Lo Lo Chai → Dong Van → Ma Pi Leng Pass → Meo Vac",
          distance: "~60km",
          stops: ["dong-van-old-town", "ma-pi-leng-pass", "nho-que-river"],
          notes: "Short in distance, biggest in impact. Morning in Dong Van Old Town (Sunday market 7-10am). Ma Pi Leng Pass slowly, with every viewpoint. Nho Que boat from the Tu San pier - search \"Tu San\" on Google Maps, not \"Nho Que River\" - about 150,000 VND per person including the shuttle (2026). Night in Meo Vac; off the passes before dark.",
        },
        {
          day: 4,
          title: "Meo Vac to Khau Coc Cha (Me Pia) Pass and Bao Lac",
          stops: ["khau-coc-cha-pass"],
          mapPoints: ["meo-vac-town", "khau-coc-cha-pass", WP.baoLac],
          notes: "Leave the Ha Giang Loop at Meo Vac and head east into Cao Bang province. Khau Coc Cha, also called Me Pia Pass, stacks about 2.5km of road in 15 switchback levels; the best view is a short hike from a small shop where you park (about 10,000 VND). Stay in Bao Lac. Ride in daylight only - after dark the roads are unlit and fog rolls in.",
        },
        {
          day: 5,
          title: "Bao Lac to Pac Bo and Ban Gioc",
          distance: "~139km",
          stops: ["pac-bo-historic-site"],
          mapPoints: [WP.baoLac, "pac-bo-historic-site", WP.khuoiKy],
          notes: "A long riding day of about 139km. Pac Bo (8am-5pm; 25,000 VND, electric car about 20,000 VND) and the Lenin Stream around midday, then on to the Ban Gioc area. Sleep in a stone stilt house in Khuoi Ky village near the falls. Carry snacks and water - there's little on the road after Trung Khanh.",
        },
        {
          day: 6,
          title: "Ban Gioc Waterfall, Nguom Ngao Cave, Phong Nam Valley",
          stops: ["ban-gioc-waterfall", "nguom-ngao-cave", "phong-nam-valley"],
          mapPoints: [WP.khuoiKy, "ban-gioc-waterfall", WP.trucLam, "nguom-ngao-cave", WP.ngocCon, "phong-nam-valley"],
          notes: "Ban Gioc Waterfall early (7am-5:30pm; 40,000 VND adults, raft 50,000 VND), Truc Lam Pagoda on the hill by the falls, then Nguom Ngao Cave (45,000 VND). Ngoc Con viewpoint if you're fit and it's clear, then Phong Nam Valley. Stay in the valley or near Angel Eye Mountain.",
        },
        {
          day: 7,
          title: "Angel Eye Mountain, Thang Hen Lake, Cao Bang city",
          distance: "~92km",
          stops: ["angel-eye-mountain", "thang-hen-lake"],
          mapPoints: ["angel-eye-mountain", "thang-hen-lake", WP.cbCity],
          notes: "Angel Eye Mountain (free) and Thang Hen Lake (60,000 VND per motorbike) in the morning, then into Cao Bang city. Return the bike if your shop allows a one-way drop-off (arrange it before you start), and take the night bus to Hanoi.",
        },
      ],
    },
  ],

  bestTimeSummary: "Sep-Nov is the best time: dry roads, clear skies and ripe rice in Phong Nam Valley in Sep-Oct. Mar-Apr is also good. Jun-Aug is the rainy season - Ban Gioc is at its most powerful, but expect heavy rain, slippery roads and landslides. Dec-Feb is dry but cold, with possible frost or snow at Phia Oac. After heavy rain the falls and streams turn murky, so check the forecast.",
  bestMonths: [3, 4, 5, 9, 10, 11],

  recommendedStay: "1-5 days",

  transport: "By motorbike - the sights are 20-50km apart and public transport to them is very limited. Rent in Cao Bang city, fill the tank before leaving town, download offline maps (signal drops in the valleys) and don't ride after dark: the roads are unlit and fog is common. Watch for fast trucks on the highways near the border. If you don't ride, go with an Easy Rider or a car tour.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "about 150,000-200,000 VND/day (semi-automatic); 260,000-500,000 VND/day (scooter, manual or trail bike)",
      notes: "Deposits vary: some shops hold your passport, others ask for 5-10 million VND in cash - ask first. You need an International Driving Permit (1968 convention) with the motorcycle category plus your home licence. Check the bike before you take it and photograph it. Petrol is not included. Riding on from Ha Giang or ending in Ha Giang? Ask the shop about one-way drop-off before you book.",
      shops: [
        { name: "Lan Be Travel (Explore Cao Bang)", area: "Cao Bang city", address: "066 Ly Tu Trong, Thuc Phan", phone: "+84 70 88 33 888", url: "https://explorecaobang.com/en", notes: "Semi-automatic 180,000, scooters 260,000, manual 280,000, Honda XR150 500,000 VND/day; helmet, raincoat and waterproof bag included. Also runs Easy Rider loop tours." },
        { name: "Cao Bang Green Riders", area: "Cao Bang city", address: "260, Group 30, Nung Tri Cao, Cao Bang city", phone: "0397 352 995", url: "https://caobanggreenriders.com/", notes: "Prices quoted on site. Also on Facebook: https://www.facebook.com/share/1CFjxvWTqU/" },
        { name: "QT Motorbikes and Tours", area: "Cao Bang city (also Ha Giang)", address: "054 Cau Bang Giang, Hop Giang", phone: "+84 975 278 711", url: "https://qtmotorbikesandtours.com.vn/motorbike-rental-ha-giang-cao-bang/", notes: "WhatsApp 24/7. Accepts a passport, licence or ID as the security deposit. Check current prices with the shop." },
        { name: "Cao Bang Motorbike Rentals", area: "Cao Bang city", url: "https://www.facebook.com/share/19bwy8Xpue/" },
      ],
      verifiedAt: "2026-11-07",
    },
  ],

  nearbyDestinations: ["ha-giang", "ha-noi"],

  faqs: [
    {
      question: "What is the Cao Bang Loop?",
      answer: "A motorbike route from Cao Bang city through the Non Nuoc Cao Bang Geopark, roughly 200-300km depending on the version. The short loop (1-3 days) covers Ban Gioc Waterfall, Nguom Ngao Cave, Phong Nam Valley, Angel Eye Mountain and Thang Hen Lake; longer versions add Pac Bo, Khau Coc Cha Pass and Bao Lac in the west.",
    },
    {
      question: "Cao Bang Loop or Ha Giang Loop?",
      answer: "Ha Giang has the bigger, sharper mountain scenery and the famous Ma Pi Leng Pass, but it's busier. Cao Bang is quieter, with rounded karsts, waterfalls and valleys, and homestays rarely fill up outside national holidays. Many guides call its roads gentler, though some riders find its passes just as hard - don't treat it as easy. If you have a week, you can ride both: see the Ha Giang Loop + Cao Bang itineraries.",
    },
    {
      question: "Can I ride from Ha Giang to Cao Bang?",
      answer: "Yes. Leave the Ha Giang Loop at Meo Vac, ride over Khau Coc Cha Pass to Bao Lac, then on to Pac Bo and Ban Gioc - see the 6- and 7-day itineraries. Ask your rental shop before you book whether you can drop the bike in Cao Bang (or pick it up there and return it in Ha Giang), and what it costs. Buses between Ha Giang and Cao Bang take about 6-7 hours (100,000-150,000 VND) and usually leave early in the morning.",
    },
    {
      question: "Do I need a motorbike licence?",
      answer: "To ride yourself you need your home motorbike licence plus an International Driving Permit (1968 convention) with the motorcycle category. If you don't have one, go as a passenger with an Easy Rider: for example, Lan Be Travel charges about 1,700,000 VND per person for a 1-day loop, 3,400,000 VND for 2 days and 5,100,000 VND for 3 days, including bike, rider, entry fees, meals and homestays.",
    },
    {
      question: "Do I need a permit to visit Ban Gioc Waterfall?",
      answer: "None of the sources we checked mention a special permit, but Ban Gioc is right on the Chinese border, so check with your rental shop or homestay before you go. Don't fly a drone there.",
    },
    {
      question: "How much is Ban Gioc Waterfall?",
      answer: "From 4 July 2026: 40,000 VND for adults and 20,000 VND for children 6-15. A bamboo raft out to the falls is 50,000 VND per person. Open 7am-5:30pm; come before 10am for photos or around 10:30am-1pm for the strongest flow.",
    },
    {
      question: "How do I get to Cao Bang from Hanoi?",
      answer: "Sleeper buses take 6-9 hours and cost about 170,000-350,000 VND; the night buses (around 9-10pm) arrive early, ready to start riding. Limousine vans take about 5-6 hours for 350,000-500,000 VND. Book 1-2 weeks ahead for holidays.",
    },
    {
      question: "Any tips for riding the loop?",
      answer: "Fill up before leaving town and carry cash in small notes - many roadside places don't take QR payments. Download offline maps; signal drops in the valleys. Google Maps' car mode keeps you on the main roads, while motorbike mode can send you down narrow tracks. Don't ride after dark, and allow extra time: the sights are 20-50km apart.",
    },
    {
      question: "When is the best time to visit Cao Bang?",
      answer: "Sep-Nov, with Mar-Apr a good second. Jun-Aug brings the most powerful waterfall but also heavy rain and landslide risk. Dec-Feb is cold, with possible frost or snow at Phia Oac.",
    },
  ],

  coordinates: {
    lat: 22.6657,
    lng: 106.2522,
  },
  mapPriority: 2,
  mapZoom: 11,
  // ─── FAQ ─────────────────────────────────────────────────

}
