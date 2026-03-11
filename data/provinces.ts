import { foodCardUrl, heroUrl } from "@/lib/cloudinary"

export type Province = {
  slug: string
  name: string
  region: "north" | "central" | "south"
  description?: string
  bestTime?: string
  capital?: string
  knownFor?: string
  tags?: string[]
  food?: { name: string; description: string; emoji: string; image?: string }[]
  heroImage?: string
  popupIntro?: string
  popupDestinations?: string[]
}

export const provinces: Province[] = [
  {
    slug: "an-giang",
    heroImage: heroUrl("an-giang_b8owsr"),
    name: "An Giang",
    region: "south",
    description: "An Giang sits at the heart of the Mekong Delta, bordering Cambodia along the Mekong and Bassac rivers. It's Vietnam's most populous delta province and home to the sacred Nui Sam mountain, floating villages, and a fascinating mix of Kinh, Khmer, Cham, and Chinese communities. For solo travelers, it offers an authentic slice of delta life without the tourist crowds of Can Tho.",
    capital: "Long Xuyen",
    knownFor: "Sam Mountain, Mekong Delta, multi-ethnic culture",
    bestTime: "Nov – Apr (dry season)",
    tags: ["🌊 Mekong", "🛶 River Life", "🏔️ Sam Mountain", "🕌 Culture"],
    popupIntro: "A Mekong Delta province known for sacred mountains, floating villages, and a rich mix of cultures.",
    popupDestinations: [
      "Sam Mountain",
      "Tra Su Cajuput Forest",
      "Chau Doc Floating Village",
      "Ba Chua Xu Temple"
    ],
    food: [
      {
        emoji: "🐟",
        name: "Bún cá",
        image: foodCardUrl("bun-ca-an-giang_f6ajy1"),
        description: "Rice vermicelli soup with fresh fish — An Giang's most iconic breakfast dish, eaten at riverside stalls",
      },
      {
        emoji: "🍲",
        name: "Lẩu mắm",
        image: foodCardUrl("lau-mam-chau-doc-an-giang_talrzy"),
        description: "Fermented fish hotpot packed with vegetables and fresh herbs — pungent, rich, and unforgettable",
      },
      {
        emoji: "🫔",
        name: "Bánh bò thốt nốt",
        image: foodCardUrl("banh-bo-an-giang_mylcee"),
        description: "Sponge cake made with palm sugar from the iconic sugar palm trees — a Khmer-influenced specialty",
      },
      {
        emoji: "🍚",
        name: "Cơm tấm Long Xuyên",
        image: foodCardUrl("com-tam-long-xuyen_phb2yk"),
        description: "Broken rice served with grilled pork, egg meatloaf, and pickled vegetables — the Long Xuyen version is lighter and less sweet than Saigon-style, eaten at open-air stalls from dawn till noon.",
      },
    ],
  },

  {
    slug: "vung-tau",
    heroImage: heroUrl("vung-tau_rqn1yj"),
    name: "Ba Ria - Vung Tau",
    region: "south",
    description: "Ba Ria - Vung Tau is the beach escape closest to Ho Chi Minh City — just 2 hours by road or a scenic ferry ride across the river. Vung Tau peninsula has a split personality: one side is packed with weekend city crowds, the other hides quieter coves, colonial-era villas, and the famous Christ the King statue overlooking the sea. Con Dao island, administered by this province, is one of Vietnam's most pristine destinations.",
    capital: "Vung Tau City",
    knownFor: "Vung Tau beach, Con Dao island, weekend getaway from HCMC",
    bestTime: "Nov – Apr",
    tags: ["🏖️ Beach", "⛪ Colonial", "🏝️ Con Dao", "🚢 Ferry"],
    popupIntro: "The closest beach escape from Ho Chi Minh City, famous for seafood and coastal views.",
    popupDestinations: [
      "Vung Tau Beach",
      "Christ the King Statue",
      "Ho May Park",
      "Con Dao Islands"
    ],
    food: [
      {
        emoji: "🦑",
        name: "Bánh khọt",
        image: foodCardUrl("vung-tau-banh-khot_qegxe0"),
        description: "Crispy mini rice pancakes topped with shrimp — Vung Tau's most beloved street snack, eaten with herbs and dipping sauce",
      },
      {
        emoji: "🦐",
        name: "Hàu nướng mỡ hành",
        image: foodCardUrl("vung-tau-hau-nuong-mo-hanh_svsimd"),
        description: "Grilled oysters with scallion oil and crushed peanuts — best eaten fresh at beachside seafood stalls",
      },
      {
        emoji: "🧁",
        name: "Bánh bông lan trứng muối",
        image: foodCardUrl("banh-bong-lan-trung-muoi-vung-tau_czrhnm"),
        description: "Soft sponge cake filled with salted egg yolk custard — Vung Tau's most iconic street snack and the number one thing locals bring back as gifts. Best eaten warm, straight from the bakery.",
      },
      {
        emoji: "🍜",
        name: "Bún tôm tích",
        image: foodCardUrl("bun-tom-tich-vung-tau_az1gby"),
        description: "Rice vermicelli soup with mantis shrimp — a Vung Tau specialty rarely found elsewhere. The broth is light and naturally sweet from the fresh-caught mantis shrimp, served with herbs and a squeeze of lime.",
      },
    ],
  },

  {
    slug: "bac-giang",
    heroImage: heroUrl("bac-giang_rboylk"),
    name: "Bac Giang",
    region: "north",
    description: "Bac Giang is a quietly rewarding province northeast of Hanoi that most travelers pass through without stopping — which is exactly why it's worth pausing. Famous for its lychee orchards (Vietnam's largest producer), ancient pagodas, and the Buddhist complex at Tay Yen Tu, it offers an unhurried look at northern Vietnamese rural life. The province also has significant historical weight as a base during the resistance wars.",
    capital: "Bac Giang City",
    knownFor: "Lychee orchards, Tay Yen Tu pilgrimage, rural north",
    bestTime: "Mar – May (lychee season), Oct – Dec",
    tags: ["🌿 Rural", "🏯 Pagodas", "🍈 Lychee", "⛰️ Yen Tu"],
    popupIntro: "A quiet northern province known for lychee orchards, pagodas, and rural landscapes.",
    popupDestinations: [
      "Tay Yen Tu",
      "Khuon Than Lake",
      "Vinh Nghiem Pagoda",
      "Luc Ngan Lychee Gardens"
    ],
    food: [
      {
        emoji: "🍈",
        name: "Vải thiều Lục Ngạn",
        image: foodCardUrl("vai-thieu-tuoi-bac-giang_xgbeec"),
        description: "Luc Ngan lychees — considered the finest in Vietnam, intensely sweet and only available June–July",
      },
      {
        emoji: "🐔",
        name: "Gà đồi Yên Thế",
        image: foodCardUrl("bac-giang-ga-doi-yen-the_jtnsse"),
        description: "Free-range hill chicken slow-raised in Yen The — firm meat, rich flavor, typically grilled or braised",
      },
      {
        emoji: "🍢",
        name: "Bánh đa Kế",
        image: foodCardUrl("bac-giang-banh-da-ke_wtbdfj"),
        description: "Sesame-coated rice crackers from Ke village — a regional specialty sold at every local market",
      },
    ],
  },

  {
    slug: "bac-kan",
    heroImage: heroUrl("bac-kan-ba-be_sh2paf"),
    name: "Bac Kan",
    region: "north",
    description: "Bac Kan is one of Vietnam's least-visited provinces, and that's its greatest asset. Nestled in the northeastern mountains, it's home to Ba Be Lake — Vietnam's largest natural freshwater lake and one of the most beautiful in Southeast Asia. Ancient forests, limestone karst, and Tay ethnic minority villages surround the lake on all sides. If you want to experience northern Vietnam completely off the tourist trail, Bac Kan is it.",
    capital: "Bac Kan City",
    knownFor: "Ba Be Lake, Tay ethnic villages, untouched nature",
    bestTime: "Sep – Nov, Mar – May",
    tags: ["🏞️ Ba Be Lake", "🌿 Off the beaten path", "🏕️ Trekking", "🌾 Ethnic villages"],
    popupIntro: "One of Vietnam's least visited provinces, home to Ba Be Lake and pristine forests.",
    popupDestinations: [
      "Ba Be Lake",
      "Puong Cave",
      "Ba Be National Park",
      "Hua Ma Cave"
    ],
    food: [
      {
        emoji: "🐟",
        name: "Cá nướng Ba Bể",
        image: foodCardUrl("bac-kan-ca-nuong-ba-be_c2iias"),
        description: "Grilled freshwater fish caught directly from Ba Be Lake — marinated in local herbs and cooked over charcoal",
      },
      {
        emoji: "🌿",
        name: "Bánh coóc mò",
        image: foodCardUrl("bac-kan-banh-coc-mo_sac4ld"),
        description: "Cone-shaped sticky rice dumplings wrapped in fresh leaves — a traditional Tay ethnic snack from Bac Kan. Filled with sweetened mung bean paste and steamed until fragrant, eaten during festivals and markets.",
      },
      {
        emoji: "🍚",
        name: "Xôi đăm đeng",
        image: foodCardUrl("xoi-dam-den-dac-san-bac-kan_vjpqn1"),
        description: "Black sticky rice cooked with leaves from the đăm đeng plant, giving it a deep purple-black color and a subtle earthy aroma — a Tay ethnic staple eaten at celebrations and family gatherings in the Bac Kan highlands.",
      },
      {
        emoji: "🫘",
        name: "Bánh lá ngải",
        image: foodCardUrl("bac-kan-banh-ngai_ypnemd"),
        description: "Thick glutinous rice cakes pounded with mugwort leaves, giving them a distinctive green color and a mild herbal fragrance. Filled with sweetened mung bean or black sesame paste — a Tay and Nung ethnic specialty eaten during Tet and village festivals.",
      },
    ],
  },

  {
    slug: "bac-lieu",
    heroImage: heroUrl("dien-gio-bac-lieu_tliw5h"),
    name: "Bac Lieu",
    region: "south",
    description: "Bac Lieu is a sleepy coastal province in the deep south of the Mekong Delta that punches above its weight in cultural heritage. It was home to the legendary 'Bac Lieu Prince' — one of Vietnam's most flamboyant colonial-era millionaires — and is considered the birthplace of đờn ca tài tử, the traditional southern folk music now on UNESCO's intangible heritage list. For travelers, it offers bird sanctuaries, salt flats, and authentic Mekong Delta life without any tourist infrastructure.",
    capital: "Bac Lieu City",
    knownFor: "Don ca tai tu music, Bac Lieu Prince mansion, bird sanctuary",
    bestTime: "Nov – Apr",
    tags: ["🎵 Don ca tai tu", "🦜 Bird sanctuary", "🌊 Coastal", "🏛️ Colonial heritage"],
    popupIntro: "A coastal Mekong Delta province known for traditional music and bird sanctuaries.",
    popupDestinations: [
      "Bac Lieu Wind Farm",
      "Bac Lieu Bird Sanctuary",
      "Bac Lieu Prince House",
      "Quan Am Phat Dai Temple"
    ],
    food: [
      {
        emoji: "🍇",
        name: "Nhãn da bò Bạc Liêu",
        image: foodCardUrl("nhan-da-bo_l06w0e"),
        description: "Bac Lieu's prized longan variety — thicker skin, smaller seed, and intensely sweet flesh compared to regular longan. Harvested once a year, locals eat it fresh or sun-dried as a snack.",
      },
      {
        emoji: "🍜",
        name: "Bún nước lèo",
        image: foodCardUrl("bun-nuoc-leo_anxl5o"),
        description: "Rice noodle soup with fermented fish broth and pork — a Khmer-influenced dish unique to the deep south",
      },
      {
        emoji: "🐟",
        name: "Cá kèo kho tộ",
        image: foodCardUrl("ca-keo-kho-to_u6f9wo"),
        description: "Mudskipper fish braised in a clay pot with caramelized pork fat — a Mekong Delta comfort food classic",
      },
    ],
  },
  {
    slug: "lao-cai",
    heroImage: heroUrl("lao-cai_cmouhw"),
    name: "Lao Cai",
    region: "north",
    description: "Home to Sapa's famous rice terraces and ethnic minority villages, Lao Cai is the gateway to Vietnam's mountainous northwest.",
    bestTime: "Sep – Nov, Mar – May",
    capital: "Lao Cai City",
    knownFor: "Sapa trekking",
    tags: ["🏔️ Mountain", "🌿 Nature", "🏕️ Camping"],
    popupIntro: "Gateway to Sapa and Vietnam's most dramatic mountain landscapes.",
    popupDestinations: [
      "Sapa",
      "Fansipan Mountain",
      "Muong Hoa Valley",
      "Bac Ha Market"
    ],
    food: [
      {
        emoji: "🍖",
        name: "Thắng cố",
        image: foodCardUrl("lao-cai-thang-co_fifp4f"),
        description: "Traditional horse meat stew from the Hmong people"
      },
      {
        emoji: "🌽",
        name: "Cơm lam",
        image: foodCardUrl("lao-cai-com-lam_ey9bqj"),
        description: "Sticky rice cooked in bamboo tubes over open fire"
      },
      {
        emoji: "🍜",
        name: "Phở chua Bắc Hà",
        image: foodCardUrl("lao-cai-pho-chua-bac-ha_mtvzvv"),
        description: "Cold rice noodles topped with sliced pork, fried shallots, peanuts, and a tangy-sweet sauce — completely different from the hot pho found elsewhere in Vietnam. A Bac Ha market specialty eaten by Tay and Nung people, best enjoyed at the famous Sunday market.",
      },
      {
        emoji: "🐟",
        name: "Cá suối Sapa",
        image: foodCardUrl("lao-cai-sa-pa-ca-suoi_u2fpzy"),
        description: "Fresh stream fish caught from Sapa's cold mountain creeks, grilled over charcoal with lemongrass and local herbs. The cold, fast-flowing water gives the fish a firm, clean-tasting flesh unlike anything from the lowlands — best eaten at riverside stalls near Muong Hoa Valley.",
      },
    ],
  },
  {
    slug: "quang-ninh",
    heroImage: heroUrl("ha-long-bay_nurgow"),
    name: "Quang Ninh",
    region: "north",
    description: "Home to Ha Long Bay — one of the world's most iconic seascapes. Over 1,600 limestone islands rising from emerald waters.",
    bestTime: "Oct – Apr",
    capital: "Ha Long City",
    knownFor: "Ha Long Bay cruises",
    tags: ["🏖️ Beach", "🌿 Nature", "🚢 Cruising"],
    popupIntro: "Home to the world-famous Ha Long Bay and dramatic limestone seascapes.",
    popupDestinations: [
      "Ha Long Bay",
      "Bai Tu Long Bay",
      "Co To Island",
      "Yen Tu Mountain"
    ],
    food: [
      {
        emoji: "🦪",
        name: "Hàu sữa",
        image: foodCardUrl("quang-ninh-hau-nuong-dac-san-ha-long_id6kpt"),
        description: "Fresh oysters — best eaten raw with lime and chili"
      },
      {
        emoji: "🍜",
        name: "Bánh cuốn chả mực",
        image: foodCardUrl("quang-ninh-banh-cuon-cha-muc_fkowkj"),
        description: "Steamed rice rolls with local seafood filling"
      },
      {
        emoji: "🦑",
        name: "Chả mực Hạ Long",
        image: foodCardUrl("quang-ninh-cha-muc-ha-long.jpg_kfwams"),
        description: "Hand-pounded squid patties — Halong Bay's most famous specialty. Fresh squid is pounded by hand (never blended) to keep the texture springy, then deep-fried until golden. Locals say machine-made versions don't come close.",
      },
      {
        emoji: "🐔",
        name: "Gà đồi Tiên Yên",
        image: foodCardUrl("quang-ninh-ga-doi-tien-yen_qmrr1z"),
        description: "Free-range hill chicken from Tien Yen district, slow-raised on insects and wild grass in the northeastern hills. Firm, flavorful meat that locals boil simply with ginger and eat with salt and lime dipping sauce — no elaborate seasoning needed.",
      },
      {
        emoji: "🦪",
        name: "Cháo hà",
        image: foodCardUrl("quang-ninh-chao-ha_hoh7fp"),
        description: "Congee made with small saltwater clams harvested from Ha Long Bay's tidal flats. The broth is naturally briny and sweet from the clams, finished with fresh ginger and scallions — a classic fisherman's breakfast along the Quang Ninh coast.",
      },
      {
        emoji: "🪱",
        name: "Sá sùng",
        image: foodCardUrl("quang-ninh-sa-sung_a01vzn"),
        description: "Dried peanut worms harvested from the sandy beaches of Van Don island — one of Quang Ninh's most prized and unusual ingredients. Roasted and eaten as a snack, or used to make an intensely savory broth that locals consider the secret behind the best pho in the region.",
      },
      {
        emoji: "🐚",
        name: "Ngán Quảng Ninh",
        image: foodCardUrl("quang-ninh-ngan_afrt2f"),
        description: "A rare saltwater mollusc found only in the tidal mudflats of Quang Ninh — considered one of Vietnam's most prized seafood delicacies. Steamed or eaten raw with lime and ginger, ngán has a rich, creamy flesh with a naturally sweet brine. Peak season is October to February when the roe is fullest.",
      },
    ],
  },
  {
    slug: "quang-nam",
    heroImage: heroUrl("quang-nam_s9khka"),
    name: "Quang Nam",
    region: "central",
    description: "A province steeped in history — home to the UNESCO-listed Ancient Town of Hoi An and the My Son Hindu sanctuary.",
    bestTime: "Feb – Jul",
    capital: "Tam Ky",
    knownFor: "Hoi An Ancient Town",
    tags: ["🏛️ History", "🍜 Food", "🏖️ Beach"],
    popupIntro: "A historic province with lantern-lit towns, ancient temples, and beautiful beaches.",
    popupDestinations: [
      "Hoi An Ancient Town",
      "My Son Sanctuary",
      "An Bang Beach",
      "Cham Islands"
    ],
    food: [
      {
        emoji: "🍜",
        name: "Cao lầu",
        image: foodCardUrl("quang-nam-cao-lau_xudxjq"),
        description: "Thick noodles with pork and crispy croutons — only authentic in Hoi An"
      },
      {
        emoji: "🥗",
        name: "White Rose dumplings",
        image: foodCardUrl("quang-nam-white-rose-dumplings_ql8sjc"),
        description: "Delicate shrimp dumplings shaped like white roses"
      },
      {
        emoji: "🥙",
        name: "Bánh mì Phượng",
        image: foodCardUrl("quang-nam-banh-mi-phuong_nvw64w"),
        description: "The famous banh mi that Anthony Bourdain called the best sandwich"
      },
      {
        emoji: "🍜",
        name: "Mì Quảng",
        image: foodCardUrl("quang-nam-mi-quang_nqkqmx"),
        description: "Quang Nam's most iconic dish — wide turmeric-yellow rice noodles served with minimal broth, topped with pork, shrimp, quail eggs, peanuts, and fresh herbs. Unlike northern pho or southern hu tieu, the broth is just a few spoonfuls — thick, rich, and intensely flavored.",
      },
      {
        emoji: "🍚",
        name: "Cơm gà Tam Kỳ",
        image: foodCardUrl("quang-nam-com-ga-tam-ky_m7alwr"),
        description: "Poached chicken over fragrant rice cooked in chicken broth — Tam Ky's version is considered by many locals to be superior to the more famous Hoi An version. The rice is toasted in chicken fat before cooking, giving it a nutty depth, served with ginger fish sauce and fresh herbs.",
      },
      {
        emoji: "🐍",
        name: "Cháo lươn xanh",
        image: foodCardUrl("quang-nam-chao-luon-xanh_iaxvmh"),
        description: "Rice porridge with freshwater eel cooked with green herbs — a Quang Nam comfort food rarely found outside the province. The eel is stir-fried with turmeric and lemongrass before being added to the congee, giving it a golden color and a warm, aromatic finish.",
      },
    ],
  },
  {
    slug: "kien-giang",
    heroImage: heroUrl("kien-giang-dao-hai-tac_ql7fth"),
    name: "Kien Giang",
    region: "south",
    description: "A province of contrasts — from the vibrant streets of Rach Gia to the pristine beaches of Phu Quoc island.",
    bestTime: "Nov – Apr",
    capital: "Rach Gia",
    knownFor: "Phu Quoc island",
    tags: ["🏖️ Beach", "🌿 Nature", "🍜 Food"],
    popupIntro: "A coastal province famous for tropical islands and seafood in the Gulf of Thailand.",
    popupDestinations: [
      "Phu Quoc Island",
      "Nam Du Islands",
      "Ha Tien",
      "Hon Son Island"
    ],
    food: [
      {
        emoji: "🫙",
        name: "Bún cá Kiên Giang",
        image: foodCardUrl("bun-ca-kien-giang_ysgeni"),
        description: "The island's famous fish sauce — the best in Vietnam"
      },
      {
        emoji: "🍜",
        name: "Bún quậy",
        image: foodCardUrl("kien-giang-bun-quay_mljawn"),
        description: "Stirred noodle soup unique to Phu Quoc — silky broth, fresh herbs"
      },
      {
        emoji: "🐟",
        name: "Gỏi cá trích",
        image: foodCardUrl("kien-giang-goi-ca-trich_khw76w"),
        description: "Fresh herring salad with coconut, a Phu Quoc specialty"
      },
      {
        emoji: "🦐",
        name: "Nhum nướng",
        image: foodCardUrl("kien-giang-nhum-nuong_coentf"),
        description: "Grilled sea urchin with scallion oil — best eaten on the beach"
      },
      {
        emoji: "🫙",
        name: "Mắm cà xỉu",
        image: foodCardUrl("kien-giang-mam-ca-xiu_idrbyp"),
        description: "Fermented small crab paste — a Kien Giang specialty unique to the Gulf of Thailand coast. Intensely salty and umami-rich, eaten as a condiment with steamed rice, raw vegetables, or used as a dipping sauce for boiled pork.",
      },
      {
        emoji: "🌿",
        name: "Bánh ống lá dứa",
        image: foodCardUrl("kien-giang-banh-ong-la-dua_tziwj4"),
        description: "Hollow tube-shaped rice cakes infused with pandan leaf juice, giving them a vivid green color and a sweet grassy fragrance. A popular street snack across Phu Quoc and the Kien Giang islands, filled with sweetened coconut and mung bean paste.",
      },
      {
        emoji: "🦀",
        name: "Bánh canh ghẹ",
        image: foodCardUrl("kien-giang-banh-canh-ghe_zvdzow"),
        description: "Thick tapioca noodle soup with blue swimmer crab and handmade fish cake — one of Phu Quoc's most beloved comfort foods. The broth is slow-cooked from crab shells until deep orange and naturally sweet, served with fried shallots and fresh lime.",
      },
      {
        emoji: "🍚",
        name: "Cơm ghẹ Phú Quốc",
        image: foodCardUrl("kien-giang-com-ghe-phu-quoc_wmsmu3"),
        description: "Steamed rice served with freshly caught blue swimmer crab, stir-fried with garlic, scallions, and a touch of fish sauce. A deceptively simple dish that only works with live crab caught that morning — the reason it tastes different on the island than anywhere else.",
      },
      {
        emoji: "🍲",
        name: "Bún kèn",
        image: foodCardUrl("kien-giang-bun-ken_avvlti"),
        description: "Rice vermicelli in a thick, coconut-based fish curry broth — a Khmer-influenced dish unique to Phu Quoc and the Kien Giang coast. The broth is made from pounded fish, lemongrass, galangal, and coconut milk, served with raw banana blossom and fresh herbs. Rarely found outside the region.",
      },
    ],
  },
  {
    slug: "bac-ninh",
    heroImage: heroUrl("bac-ninh_govvfe"),
    name: "Bắc Ninh",
    region: "north",
    description: "Bắc Ninh is Vietnam's smallest province by area but one of its most culturally rich, lying just 30km northeast of Hanoi. It's the ancient heartland of Kinh Bắc culture — birthplace of quan họ folk singing, a UNESCO Intangible Cultural Heritage. Beyond its temples and communal houses, Bắc Ninh has transformed into a major industrial hub, home to Samsung's largest global factory. For solo travelers, it's an easy day trip from Hanoi that rewards those interested in Vietnamese folk culture and historic pagodas.",
    capital: "Bắc Ninh City",
    knownFor: "Quan họ folk singing, Lim Festival, ancient pagodas",
    bestTime: "Oct – Apr (cool and dry)",
    tags: ["🎶 Folk Music", "🏛️ Pagodas", "🎎 Festivals", "📍 Hanoi Day Trip"],
    popupIntro: "Vietnam's smallest province and cultural heartland of quan họ folk singing, ancient pagodas, and the famous Lim Festival.",
    popupDestinations: [
      "Bút Tháp Pagoda",
      "Dâu Pagoda",
      "Đồng Kỵ Village",
      "Lim Hill (Lim Festival)"
    ],
    food: [
      {
        emoji: "🍜",
        name: "Bánh cuốn Bắc Ninh",
        image: foodCardUrl("banh-cuon-mao-dien-bac-ninh_ydlmcu"),
        description: "Steamed rice rolls filled with pork and wood-ear mushroom — the Bắc Ninh version is thinner and more delicate than Hanoi-style, served with a sweeter dipping sauce",
      },
      {
        emoji: "🐓",
        name: "Cơm gà Hồ",
        image: foodCardUrl("bac-ninh-ga-ho_nfqerb"),
        description: "Heritage breed chicken from Hồ Village, prized for its firm, flavorful meat — roasted or simmered in traditional recipes passed down for generations",
      },
      {
        emoji: "🫕",
        name: "Cháo cá Tích Nghi",
        image: foodCardUrl("bac-ninh-chao-ca-tich-nghi_dq0wqd"),
        description: "Smooth rice porridge with fresh river fish, ginger, and fried shallots — a humble breakfast staple along the Cầu River",
      },
      {
        emoji: "🍡",
        name: "Bánh khúc",
        image: foodCardUrl("bac-ninh-banh-khuc_bsrh0v"),
        description: "Sticky rice dumplings stuffed with mung bean paste and pork fat, wrapped in cudweed leaves — a seasonal winter specialty eaten warm from street vendors",
      },
      {
        emoji: "🍜",
        name: "Phở gan cháy",
        image: foodCardUrl("bac-ninh-pho-gan-chay_jirqoo"),
        description: "Bắc Ninh-style pho topped with charred beef liver — smoky, slightly bitter, and rich, a local variation that sets it apart from Hanoi pho",
      },
      {
        emoji: "🐭",
        name: "Thịt chuột Đình Bảng",
        image: foodCardUrl("bac-ninh-thit-chuot-dinh-bang_lymk7k"),
        description: "Field mouse grilled or stir-fried with lemongrass and chilli — a prized delicacy from Đình Bảng village, eaten as nhậu food and considered a rural specialty unique to Kinh Bắc",
      },
      {
        emoji: "🥢",
        name: "Nem Bùi",
        image: foodCardUrl("bac-ninh-nem-bui_gizxw3"),
        description: "Fermented pork rolls from Bùi village — tangy, aromatic, and wrapped in banana leaf, a Bắc Ninh specialty distinct from the nem versions found elsewhere in the north",
      },
    ],
  },
  {
    slug: "ben-tre",
    heroImage: heroUrl("ben-tre_dvj5yi"),
    name: "Bến Tre",
    region: "south",
    description: "Bến Tre is the 'Land of Coconuts' — a labyrinth of four branches of the Mekong River where coconut palms line every canal and waterway. This compact delta province moves at a slower pace than Can Tho, with rustic homestays, rowing boat tours through narrow creeks, and family-run coconut candy workshops defining the experience. It's an ideal destination for solo travelers seeking genuine Mekong life without tour-group crowds.",
    capital: "Bến Tre City",
    knownFor: "Coconut products, Mekong canals, homestays",
    bestTime: "Nov – Apr (dry season)",
    tags: ["🥥 Coconut", "🛶 Canal Tours", "🌿 Mekong Delta", "🏡 Homestay"],
    popupIntro: "The 'Land of Coconuts' — a quiet Mekong Delta province of winding canals, coconut farms, and authentic riverside homestays.",
    popupDestinations: [
      "Coconut Candy Workshops",
      "Hàm Luông River",
      "Unicorn Island (Cồn Phụng)",
      "Sơn Đốc Fruit Gardens"
    ],
    food: [
      {
        emoji: "🥥",
        name: "Kẹo dừa",
        image: foodCardUrl("keo-dua-ben-tre-1_umnvpi"),
        description: "Chewy coconut candy made from coconut milk and malt — Bến Tre's most famous export, sold in every market and made in family workshops you can visit",
      },
      {
        emoji: "🐟",
        name: "Cá lóc nướng trui",
        image: foodCardUrl("ben-tre-ca-loc-nuong-trui_piubgb"),
        description: "Whole snakehead fish roasted directly over open flame until charred, then wrapped in rice paper with herbs and dipped in fermented fish sauce",
      },
      {
        emoji: "🐛",
        name: "Đuông dừa",
        image: foodCardUrl("ben-tre-duong-dua_owttty"),
        description: "Coconut palm grub eaten alive or grilled — a prized Bến Tre delicacy, fat and creamy with a mild coconut flavour, served at specialty restaurants and rural homestays",
      },
      {
        emoji: "🍵",
        name: "Bánh tráng Mỹ Lồng",
        image: foodCardUrl("ben-tre-banh-trang-my-long_c9z1vp"),
        description: "Celebrated rice paper from Mỹ Lồng village, made with coconut milk for a richer flavour — eaten grilled with toppings or as a wrap",
      },
      {
        emoji: "🫓",
        name: "Bánh phồng Sơn Đốc",
        image: foodCardUrl("ben-tre-banh-phong-son-doc_c0lpmy"),
        description: "Puffed sticky rice crackers from Sơn Đốc village — grilled over charcoal until they balloon up, eaten plain or with coconut jam, a Bến Tre Tết specialty famous across the south",
      },
      {
        emoji: "🍜",
        name: "Bánh canh bột xắt",
        image: foodCardUrl("ben-tre-banh-canh-bot-xat_r7wdtc"),
        description: "Thick tapioca noodle soup with pork or shrimp — the noodles are hand-rolled and chewy, a Bến Tre comfort food distinct from the rice-flour versions found elsewhere",
      },
      {
        emoji: "🥗",
        name: "Gỏi củ hủ dừa",
        image: foodCardUrl("ben-tre-goi-cu-hu-dua_kdlxaa"),
        description: "Salad made from the tender heart of coconut palm, tossed with shrimp, pork, herbs, and roasted peanuts — a refreshing dish that uses every part of Bến Tre's beloved coconut tree",
      },
    ],
  },
  {
    slug: "binh-dinh",
    heroImage: heroUrl("binh-dinh-by-tuan-nguyen_fxt2ot"),
    name: "Bình Định",
    region: "central",
    description: "Bình Định is the beating heart of ancient Champa civilization on Vietnam's central coast. Cham towers rise dramatically from rice paddies and hilltops, while long empty beaches stretch between rocky headlands. The province is also the birthplace of Tây Sơn martial arts and the legendary Quang Trung emperor. For solo travelers, Bình Định offers a compelling mix of history, surf beaches, and seafood without the backpacker infrastructure of nearby Đà Nẵng.",
    capital: "Quy Nhơn",
    knownFor: "Cham towers, Quy Nhơn beach, Tây Sơn history",
    bestTime: "Feb – Aug (dry season on central coast)",
    tags: ["🏛️ Cham Towers", "🏖️ Beaches", "🥊 Martial Arts", "🦞 Seafood"],
    popupIntro: "A central coast province of ancient Cham towers, wind-swept beaches, and Vietnam's finest seafood — still largely off the tourist trail.",
    popupDestinations: [
      "Quy Nhơn Beach",
      "Tháp Đôi Cham Towers",
      "Eo Gió (Windy Pass)",
      "Tây Sơn Museum"
    ],
    food: [
      {
        emoji: "🍜",
        name: "Bún chả cá Quy Nhơn",
        image: foodCardUrl("binh-dinh-bun-cha-ca-quy-nhon_v44l22"),
        description: "Fish cake noodle soup unique to Quy Nhơn — lighter and more delicate than the Đà Nẵng version, with handmade fish cakes and fresh turmeric broth",
      },
      {
        emoji: "🥘",
        name: "Nem chợ Huyện",
        image: foodCardUrl("binh-dinh-nem-cho-huyen_bkom6z"),
        description: "Fermented pork rolls from Chợ Huyện market — tangy, garlicky, and eaten wrapped in fig leaves with chilli, a beloved snack across the province",
      },
      {
        emoji: "🍡",
        name: "Bánh ít lá gai",
        image: foodCardUrl("binh-dinh-banh-it-la-gai_cntn3h"),
        description: "Black sticky rice dumplings made with ramie leaf, filled with mung bean and coconut — a Bình Định specialty eaten at festivals and as offerings, with a distinctive dark colour and earthy flavour",
      },
      {
        emoji: "🥩",
        name: "Tré (Chả tré)",
        image: foodCardUrl("binh-dinh-tre_jdu4f3"),
        description: "Spiced pork rolls wrapped in banana leaf and tied with bamboo strips — fermented slightly for a tangy kick, a Bình Định drinking snack eaten with raw vegetables and chilli",
      },
      {
        emoji: "🦔",
        name: "Mắm nhum",
        image: foodCardUrl("binh-dinh-mam-nhum_x80cts"),
        description: "Fermented sea urchin paste — intensely briny and umami-rich, used as a dipping sauce for boiled pork or fresh vegetables, a coastal Bình Định condiment unlike anything else in Vietnam",
      },
      {
        emoji: "🐄",
        name: "Gié bò Tây Sơn",
        image: foodCardUrl("binh-dinh-de-bo-tay-son_frwcqo"),
        description: "Beef offal simmered with lemongrass, chilli, and roasted sesame in a thick, intensely savoury sauce — a rustic Tây Sơn highland dish with deep roots in Bình Định's cattle-farming culture",
      },
    ],
  },
  {
    slug: "binh-duong",
    heroImage: heroUrl("binh-duong-dai-nam_p8xdyq"),
    name: "Bình Dương",
    region: "south",
    description: "Bình Dương sits just north of Hồ Chí Minh City and is one of Vietnam's fastest-growing industrial provinces — yet beneath the factory zones lies a rich heritage of lacquerware, ceramics, and traditional crafts brought by Teochew Chinese settlers centuries ago. The province's craft villages in Thủ Dầu Một and the ornate Chinese assembly halls of Bình Dương town offer a glimpse into southern Vietnam's artisan past. For solo travelers, it's an underrated half-day trip from Saigon into living craft history.",
    capital: "Thủ Dầu Một",
    knownFor: "Lacquerware, ceramics, Chinese heritage temples",
    bestTime: "Nov – Apr (dry season)",
    tags: ["🏺 Ceramics", "🎨 Lacquerware", "🛕 Temples", "📍 Saigon Day Trip"],
    popupIntro: "An industrial province with a surprising artisan soul — famous for centuries-old lacquerware, ceramics, and ornate Chinese assembly halls.",
    popupDestinations: [
      "Thủ Dầu Một Market",
      "Hội quán Phúc Kiến",
      "Làng sơn mài Tương Bình Hiệp",
      "Bình Dương Ceramic Village"
    ],
    food: [
      {
        emoji: "🍜",
        name: "Bánh bèo bì",
        image: foodCardUrl("binh-duong-banh-beo-bi_jyri8y"),
        description: "Steamed rice cakes topped with dried shrimp, shredded pork skin, and crispy fried shallots — a Bình Dương street food staple eaten for breakfast or as a snack",
      },
      {
        emoji: "🥗",
        name: "Gỏi gà măng cụt",
        image: foodCardUrl("binh-duong-goi-ga-mang-cut_ozaka8"),
        description: "Chicken salad tossed with young mangosteen — the fruit's tartness replaces the usual green banana or lotus stem, a uniquely Bình Dương twist on a classic southern gỏi",
      },
      {
        emoji: "🥩",
        name: "Bò nướng ngói",
        image: foodCardUrl("binh-duong-bo-nuong-ngoi_vdgjwv"),
        description: "Beef grilled directly on a roof tile over charcoal — the clay absorbs excess fat and imparts a subtle earthiness, a Bình Dương specialty served with fresh herbs and rice paper",
      },
      {
        emoji: "🍲",
        name: "Lẩu bò nhúng mắm ruốc",
        image: foodCardUrl("binh-duong-lau-bo-mam-ruoc_so3jzc"),
        description: "Beef hotpot with a shrimp paste-based broth — pungent, rich, and deeply savoury, cooked at the table and eaten with vermicelli, raw vegetables, and fresh herbs",
      },
      {
        emoji: "🍜",
        name: "Bún riêu lưỡi heo",
        image: foodCardUrl("binh-duong-bun-rieu-luoi-heo_wg5yad"),
        description: "Crab paste noodle soup topped with sliced pig tongue — a Bình Dương variation of the classic bún riêu, adding a tender, gelatinous texture that locals swear by",
      },
    ],
  },
  {
    slug: "binh-phuoc",
    heroImage: heroUrl("binh-phuoc2_jdul6e"),
    name: "Bình Phước",
    region: "south",
    description: "Bình Phước is Vietnam's cashew capital — a red-soil highland province bordering Cambodia where vast cashew and rubber plantations roll across gentle hills. It's one of the least-visited provinces in the south, yet holds significant history as a key battleground of the Vietnam War, including the famous Lộc Ninh airstrip. The Stiêng and Mnông ethnic minorities add cultural depth to a province most Vietnamese know only as the source of their cashew nuts.",
    capital: "Đồng Xoài",
    knownFor: "Cashew nuts, war history, ethnic minorities",
    bestTime: "Nov – Apr (dry season)",
    tags: ["🌰 Cashew", "🌿 Highlands", "🏛️ War History", "🧑‍🌾 Ethnic Culture"],
    popupIntro: "Vietnam's cashew heartland — a quiet red-soil province of plantations, Cambodia borderlands, and largely untouched ethnic minority culture.",
    popupDestinations: [
      "Lộc Ninh War Relic Site",
      "Bù Gia Mập National Park",
      "Thác Mơ Reservoir",
      "Đồng Xoài Market"
    ],
    food: [
      {
        emoji: "🥗",
        name: "Gỏi hạt điều",
        image: foodCardUrl("binh-phuoc-goi-hat-dieu_ksxznp"),
        description: "Fresh cashew nut salad tossed with herbs, shrimp, and a tangy lime dressing — a light and crunchy dish that showcases the province's prized cashews in a completely different way",
      },
      {
        emoji: "🎋",
        name: "Cơm lam",
        image: foodCardUrl("binh-phuoc-com-lam_npauef"),
        description: "Sticky rice cooked inside a bamboo tube over open fire — an ethnic minority staple eaten with grilled meat and salt sesame dipping paste, unique to the highland communities of Bình Phước",
      },
      {
        emoji: "🦗",
        name: "binh-phuoc-ve-sau-sua-chien-gion_nwaweu",
        image: foodCardUrl("binh-phuoc-ve-sau-sua-chien-gion_nwaweu"),
        description: "Crispy deep-fried cicada nymphs harvested before they emerge from the ground — crunchy outside, creamy inside, seasoned with salt and chilli, a seasonal highland delicacy",
      },
      {
        emoji: "🌿",
        name: "Lá nhíp xào",
        image: foodCardUrl("la-nhip-xao-binh-phuoc_ncsy2s"),
        description: "Stir-fried nhíp leaves — a wild forest vegetable foraged by Stiêng and Mnông minorities, cooked with garlic and pork fat, with a mild bitterness and tender texture found nowhere else in Vietnam",
      },
      {
        emoji: "🍲",
        name: "Canh thụt",
        image: foodCardUrl("binh-phuoc-canh-thut_ggrq17"),
        description: "A traditional Khmer-influenced soup made by pounding vegetables, fish, and spices inside a bamboo tube — the 'thụt' refers to the pounding motion, creating a thick, smoky, and intensely flavoured broth",
      },
    ],
  },
]

export function getProvinceBySlug(slug: string): Province | undefined {
  return provinces.find((p) => p.slug === slug)
}