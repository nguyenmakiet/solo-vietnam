import { Destination } from "./types"
import { heroUrl } from "@/lib/cloudinary"

export const ninhBinh: Destination = {
  slug: "ninh-binh",
  name: "Ninh Binh",
  updatedAt: "2026-11-03",
  province: "Ninh Binh",
  provinceSlug: "ninh-binh",
  region: "north",

  description:
    "Ninh Binh, about 100km south of Hanoi, is limestone karst country: rivers that run through caves, rice fields at the foot of the peaks, and the temples of Hoa Lu, Vietnam's capital in the 10th century. The Trang An landscape is a UNESCO World Heritage site. People often call it 'Ha Long Bay on land', but there's no sea here - you see it from a rowing boat, a bicycle seat and a long stone stairway.",

  tagline: "Rowing boats through karst caves, rice fields and an ancient capital",

  heroImage: heroUrl("ninh-binh_qa9mtc"),

  tags: ["nature", "history", "culture", "boat-tour", "cycling"],

  travelStyle: ["solo-friendly", "budget", "family", "easy"],

  // ─── Getting There ───────────────────────────────────────
  gettingThere: [
    {
      from: "Hanoi",
      vehicle: "train",
      duration: "about 2h10",
      cost: "from 210,000 VND",
      notes: "Nine trains a day from Hanoi Station, from 6:00am to 9:45pm. Ninh Binh station is in the city, a few km from Trang An, Tam Coc and Hoa Lu. Book on the Vietnam Railways site or at the station. Heading back, the last afternoon train leaves Ninh Binh at 4:55pm.",
    },
    {
      from: "Hanoi",
      vehicle: "bus",
      duration: "about 2 hours",
      cost: "100,000-250,000 VND",
      notes: "Buses leave from Giap Bat, My Dinh and Nuoc Ngam bus stations; limousine vans cost about 180,000-240,000 VND. Book a few days ahead - the cheaper seats sell out first.",
    },
    {
      from: "Hanoi",
      vehicle: "motorbike",
      duration: "2-3 hours",
      cost: "Petrol only",
      notes: "About 100km. Motorbikes take National Route 1A via Phu Ly; the Phap Van - Cau Gie expressway is for cars only.",
    },
    {
      from: "Ho Chi Minh City",
      vehicle: "fly",
      duration: "fly to Hanoi, then about 2 hours by road",
      cost: "900,000-1,500,000 VND one way to Hanoi",
      notes: "Fly to Noi Bai (Hanoi), then continue by train, bus or limousine. Leave enough time for the road transfer when you pick your flights.",
    },
  ],

  // ─── Itineraries ─────────────────────────────────────────
  itineraries: [
    {
      duration: "1D",
      label: "Day trip from Hanoi",
      days: [
        {
          day: 1,
          title: "Trang An boat, Hoa Lu Ancient Capital, Hang Mua",
          stops: ["trang-an", "hoa-lu-ancient-capital", "hang-mua"],
          notes: "Take the 6:00am train (arrives 8:13am) or an early limousine. Start with the Trang An boat trip: 300,000 VND for adults, about 2.5-3 hours; book online to skip the ticket queue. Hoa Lu Ancient Capital is close by (20,000 VND, 7am-5pm). Late afternoon, climb the roughly 500 steps of Hang Mua (150,000 VND, open until 6pm), then take a limousine back to Hanoi - the last afternoon train leaves at 4:55pm.",
        },
      ],
    },
    {
      duration: "2D1N",
      label: "Trang An, Tam Coc and the viewpoints",
      days: [
        {
          day: 1,
          title: "Trang An, Hoa Lu, Am Tien Cave, Hang Mua sunset",
          stops: ["trang-an", "hoa-lu-ancient-capital", "am-tien-cave", "hang-mua"],
          notes: "Be at Trang An when ticket sales open at 7am (300,000 VND, about 2.5-3 hours by boat). Hoa Lu Ancient Capital (20,000 VND) and Am Tien Cave (50,000 VND, includes the pagoda; bikes on site for the lake loop) are nearby. Finish at Hang Mua (150,000 VND): about 500 steps, best from 4:30pm for sunset. There's a lotus pond at the foot, in bloom around May-Jun.",
        },
        {
          day: 2,
          title: "Tam Coc by boat, Bich Dong Pagoda, Thung Nham",
          stops: ["tam-coc", "bich-dong-pagoda", "thung-nham-bird-park"],
          notes: "Tam Coc opens at 6am and the light is best before 8am: 120,000 VND entry plus 150,000 VND per boat (up to 4 people). The boat passes three caves. Bich Dong Pagoda is a short ride away (free, 7:30am-4:30pm). Thung Nham bird park (100,000 VND, 7am-5pm) is about 5km from Tam Coc; the birds fly back in the late afternoon. Limousine back to Hanoi in the evening.",
        },
      ],
    },
    {
      duration: "3D2N",
      label: "Slow Ninh Binh",
      days: [
        {
          day: 1,
          title: "Am Tien Cave, Hoa Lu, Hang Mua",
          stops: ["am-tien-cave", "hoa-lu-ancient-capital", "hang-mua"],
          notes: "Arrive from Hanoi in the morning. Am Tien Cave (50,000 VND, 7am-6pm) has a jade lake ringed by cliffs - rent a bike on site and ride the lake loop. Hoa Lu Ancient Capital is next door (20,000 VND, 7am-5pm). Climb Hang Mua for sunset (150,000 VND, about 500 steps, best from 4:30pm).",
        },
        {
          day: 2,
          title: "Trang An boat, Bai Dinh Pagoda",
          stops: ["trang-an", "bai-dinh-pagoda"],
          notes: "Trang An when ticket sales open at 7am (300,000 VND, about 2.5-3 hours by boat). Rest through midday, then Bai Dinh Pagoda after 3pm when it's cooler and quieter: entry is free, the electric cart from the gate is 60,000 VND return, and it's open until 9pm.",
        },
        {
          day: 3,
          title: "Tam Coc by boat, Bich Dong Pagoda, Thung Nham",
          stops: ["tam-coc", "bich-dong-pagoda", "thung-nham-bird-park"],
          notes: "Tam Coc opens at 6am and the light is best before 8am: 120,000 VND entry plus 150,000 VND per boat (up to 4 people), past three caves. Bich Dong Pagoda is a short ride away (free, 7:30am-4:30pm). Thung Nham bird park (100,000 VND, 7am-5pm) is about 5km from Tam Coc. Head back to Hanoi in the afternoon.",
        },
      ],
    },
    {
      duration: "4D3N",
      label: "Slow Ninh Binh plus Van Long",
      days: [
        {
          day: 1,
          title: "Am Tien Cave, Hoa Lu, Hang Mua",
          stops: ["am-tien-cave", "hoa-lu-ancient-capital", "hang-mua"],
          notes: "Arrive from Hanoi in the morning. Am Tien Cave (50,000 VND, 7am-6pm) has a jade lake ringed by cliffs - rent a bike on site and ride the lake loop. Hoa Lu Ancient Capital is next door (20,000 VND, 7am-5pm). Climb Hang Mua for sunset (150,000 VND, about 500 steps, best from 4:30pm).",
        },
        {
          day: 2,
          title: "Trang An boat, Bai Dinh Pagoda",
          stops: ["trang-an", "bai-dinh-pagoda"],
          notes: "Trang An when ticket sales open at 7am (300,000 VND, about 2.5-3 hours by boat). Rest through midday, then Bai Dinh Pagoda after 3pm when it's cooler and quieter: entry is free, the electric cart from the gate is 60,000 VND return, and it's open until 9pm.",
        },
        {
          day: 3,
          title: "Tam Coc by boat, Bich Dong Pagoda, Thung Nham",
          stops: ["tam-coc", "bich-dong-pagoda", "thung-nham-bird-park"],
          notes: "Tam Coc opens at 6am and the light is best before 8am: 120,000 VND entry plus 150,000 VND per boat (up to 4 people), past three caves. Bich Dong Pagoda is a short ride away (free, 7:30am-4:30pm). Thung Nham bird park (100,000 VND, 7am-5pm) is about 5km from Tam Coc. Stay for the late afternoon, when the birds fly back.",
        },
        {
          day: 4,
          title: "Van Long Nature Reserve",
          stops: ["van-long-nature-reserve"],
          notes: "The quietest boat trip in the area: 150,000 VND (20,000 VND entry plus 130,000 VND for the boat), and boats usually take 2 people. You may spot Delacour's langurs on the cliffs. Tipping the rower is customary (around 50,000 VND if you're happy) but voluntary. Then head back to Hanoi. If you're flying in from Ho Chi Minh City, this extra day takes the rush out of the transfers.",
        },
      ],
    },
  ],

  // ─── Cost ────────────────────────────────────────────────
  // ─── Practical ───────────────────────────────────────────
  bestTimeSummary: "There's something to see in every season. Late May-early Jun brings golden rice fields at Tam Coc and lotus in bloom; Sep-Nov is mild with water lilies and good weather for boats and cycling. Jul-Sep are the wettest months, with September the peak. Dec-Mar is the driest period but cool and often grey; Jan-Mar is festival season and Bai Dinh gets very crowded around Tet.",
  bestMonths: [4, 5, 6, 10, 11],

  recommendedStay: "1-3 days",

  transport: "Rent a motorbike or bicycle - the sights are spread out, and many homestays around Tam Coc can arrange one. Grab works but has few drivers; Xanh SM is also available.",

  rentals: [
    {
      vehicle: "motorbike",
      priceRange: "about 100,000-150,000 VND/day (semi-automatic from 80,000, scooters up to 180,000)",
      notes: "Ask about the deposit (passport or cash) before you agree. You need an International Driving Permit (1968 convention) with the motorcycle category plus your home licence. Check the fuel and tyre pressure, test the brakes, and take a video and photos of the bike before you ride off. Get a written contract. Hotels and homestays can arrange a bike, which is convenient but usually 20,000-50,000 VND dearer and the bike quality is unchecked - renting direct is better.",
      shops: [
        { name: "TamCoc Motorbike Rental 93", area: "Tam Coc", address: "Doi 1, Van Lam village, Ninh Hai, Hoa Lu", phone: "0903 183 883", url: "https://www.facebook.com/share/1EFxD7CsfG/", notes: "Semi-automatic 80,000-130,000, scooters 150,000-180,000 VND/day." },
        { name: "Duc Thang", area: "Ninh Binh city", address: "102/6 Le Thai To, Ninh Khanh", phone: "0393 744 732", notes: "Also on Zalo. Semi-automatic 100,000-110,000, scooters 110,000-120,000 VND/day; 2 helmets, 2 raincoats and 1 litre of petrol included." },
        { name: "Duc Anh Motorbike Rental", area: "Ninh Binh city", address: "22 Dinh Tien Hoang", phone: "0987 221 342", notes: "Newer bikes, from 100,000 VND/day." },
        { name: "Viet Dung Motorbike Rental", area: "Ninh Binh city", address: "64 Duong 27/7, Nam Binh", phone: "0943 551 799", url: "https://www.facebook.com/share/19XvGsr5bV/", notes: "120,000-150,000 VND/day." },
        { name: "Motorbike.vn", area: "Yen Khanh", address: "Khanh Van junction, Yen Khanh", phone: "0961 555 046", notes: "From 100,000 VND/day; no deposit." },
      ],
      verifiedAt: "2026-11-03",
    },
    {
      vehicle: "bicycle",
      priceRange: "about 50,000-100,000 VND/day",
      notes: "Many homestays around Tam Coc and Trang An lend or rent bicycles. Am Tien Cave also rents bikes for its lake loop.",
      shops: [
        { name: "Thanh Tam Coc - Rental Bicycle & Electric Bike", area: "Nam Hoa Lu", phone: "0911 170 707", notes: "Bicycles and electric bikes." },
        { name: "Ninh Binh Bicycle Rental", area: "Nam Hoa Lu", phone: "0984 585 235" },
      ],
      verifiedAt: "2026-11-03",
    },
  ],

  // ─── Nearby ──────────────────────────────────────────────
  nearbyDestinations: ["ha-long", "ha-noi", "pu-luong"],

  faqs: [
    {
      question: "How many days do I need in Ninh Binh?",
      answer: "A day trip from Hanoi covers Trang An and Hang Mua. Two days covers the main sights; three suits you if you like cycling and a slower pace. Coming from Ho Chi Minh City, you fly to Hanoi first, so 4 days with 3 nights gives you room for the transfers.",
    },
    {
      question: "Trang An or Tam Coc - which boat trip should I choose?",
      answer: "If you only do one, choose Trang An: the route is longer, with more caves, temples along the way, short walking paths, toilets and snack stops, for 300,000 VND per adult. Tam Coc is shorter, with three caves, and close to Hang Mua: 120,000 VND entry plus 150,000 VND per boat for up to 4 people. Both are best early in the morning.",
    },
    {
      question: "How do Trang An tickets work?",
      answer: "Tickets cost 300,000 VND for adults and 150,000 VND for children, including the boat seat, life jacket and insurance. Book on the [official site](https://muave.disantrangan.vn/home/en) or through Klook, then go straight to the boarding queue. A private boat for up to 4 people costs about 1,200,000 VND. Ticket sales start at 7am and boarding stops around 4-4:30pm depending on the day. After heavy rain one route can close for a few days when the water floods the caves.",
    },
    {
      question: "How do I get from Hanoi to Ninh Binh?",
      answer: "Trains take about 2h10 from Hanoi Station, from 210,000 VND, with nine departures a day. Buses and limousine vans take about 2 hours and cost 100,000-250,000 VND. Book a few days ahead.",
    },
    {
      question: "How do I get around Ninh Binh?",
      answer: "Rent a motorbike (about 100,000-150,000 VND/day) or a bicycle (about 50,000-100,000 VND/day) - the sights are spread out. Grab works but has few drivers; Xanh SM is also available.",
    },
    {
      question: "Where should I stay?",
      answer: "Most homestays are around Tam Coc and Trang An, close to the boats and Hang Mua; Ninh Binh city has the train station. Book early - leaving it to 2 days before often means sold-out rooms or higher prices.",
    },
    {
      question: "Is Ninh Binh like Ha Long Bay?",
      answer: "Both have limestone karsts, but Ninh Binh has no sea, cruises or sunsets over water. Instead you get rice fields, rowing boats through caves, temples, lotus ponds and viewpoint climbs.",
    },
    {
      question: "When is the best time to visit?",
      answer: "Late May-early Jun for golden rice and lotus; Sep-Nov for mild weather and water lilies. Jul-Sep is the wettest period. Jan-Mar is festival season and Bai Dinh gets very crowded around Tet.",
    },
    {
      question: "What should I eat in Ninh Binh?",
      answer: "Mountain goat (de nui) is the local speciality, along with com chay (crispy rice), eel vermicelli (mien luon) and Yen Mac fermented pork (nem chua). See [what to eat in Ninh Binh](/provinces/ninh-binh#h-food).",
    },
  ],

  emergencyContacts: [
    {
      type: "tourist-hotline",
      name: "Ninh Binh Department of Tourism",
      phone: "1900 0117",
      notes: "Tourist information and complaints about services.",
      verifiedAt: "2026-11-03",
    },
    {
      type: "medical",
      name: "Ninh Binh Provincial General Hospital",
      phone: "0229 3871 030",
      address: "Tue Tinh, Nam Thanh, Ninh Binh",
      notes: "Public hospital with an emergency department; some English-speaking staff. The nearest international hospitals are in Hanoi, about 2 hours away - see the Hanoi page.",
      sourceUrl: "https://www.gov.uk/government/publications/list-of-medical-facilities-in-vietnam/list-of-medical-facilities-in-hanoi-and-northern-provinces",
      verifiedAt: "2022-06-24",
    },
  ],

  coordinates: {
    lat: 20.2549,
    lng: 105.9747,
  },
  mapPriority: 2,
  mapZoom: 12,
}
