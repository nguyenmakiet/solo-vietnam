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
        slug: "ba-ria-vung-tau",
        heroImage: heroUrl("vung-tau_rqn1yj"),
        name: "Ba Ria - Vung Tau",
        region: "south",
        description: "Ba Ria - Vung Tau is the beach escape closest to Ho Chi Minh City — just 2 hours by road or a scenic ferry ride across the river. Vung Tau peninsula has a split personality: one side is packed with weekend city crowds, the other hides quieter coves, colonial-era villas, and the famous Christ the King statue overlooking the sea. Con Dao island, administered by this province, is one of Vietnam's most pristine destinations.",
        capital: "Vung Tau City",
        knownFor: "Vung Tau beach, Con Dao island, weekend getaway from HCMC",
        bestTime: "Nov – Apr",
        tags: ["🏖️ Beach", "⛪ Colonial", "🏝️ Con Dao", "🚢 Ferry"],
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
      food: [
        { emoji: "🍖", 
          name: "Thắng cố", 
          image: foodCardUrl("lao-cai-thang-co_fifp4f"),
          description: "Traditional horse meat stew from the Hmong people" },
        { emoji: "🌽", 
          name: "Cơm lam",
          image: foodCardUrl("lao-cai-com-lam_ey9bqj"), 
          description: "Sticky rice cooked in bamboo tubes over open fire" },
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
      food: [
        { emoji: "🦪",
          name: "Hàu sữa", 
          image: foodCardUrl("quang-ninh-hau-nuong-dac-san-ha-long_id6kpt"),
          description: "Fresh oysters — best eaten raw with lime and chili" },
        { 
          emoji: "🍜", 
          name: "Bánh cuốn chả mực", 
          image: foodCardUrl("quang-ninh-banh-cuon-cha-muc_fkowkj"),
          description: "Steamed rice rolls with local seafood filling" },
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
      food: [
        { emoji: "🍜", 
          name: "Cao lầu", 
          image: foodCardUrl("quang-nam-cao-lau_xudxjq"),
          description: "Thick noodles with pork and crispy croutons — only authentic in Hoi An" },
        { emoji: "🥗", 
          name: "White Rose dumplings",
          image: foodCardUrl("quang-nam-white-rose-dumplings_ql8sjc"), 
          description: "Delicate shrimp dumplings shaped like white roses" },
        { emoji: "🥙", 
          name: "Bánh mì Phượng", 
          image: foodCardUrl("quang-nam-banh-mi-phuong_nvw64w"),
          description: "The famous banh mi that Anthony Bourdain called the best sandwich" },
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
      food: [
        { emoji: "🫙", 
          name: "Bún cá Kiên Giang", 
          image: foodCardUrl("bun-ca-kien-giang_ysgeni"),
          description: "The island's famous fish sauce — the best in Vietnam" },
        { emoji: "🍜", 
          name: "Bún quậy", 
          image: foodCardUrl("kien-giang-bun-quay_mljawn"),
          description: "Stirred noodle soup unique to Phu Quoc — silky broth, fresh herbs" },
        { emoji: "🐟", 
          name: "Gỏi cá trích", 
          image: foodCardUrl("kien-giang-goi-ca-trich_khw76w"),
          description: "Fresh herring salad with coconut, a Phu Quoc specialty" },
        { emoji: "🦐", 
          name: "Nhum nướng", 
          image: foodCardUrl("kien-giang-nhum-nuong_coentf"),
          description: "Grilled sea urchin with scallion oil — best eaten on the beach" },
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
  ]
  
  export function getProvinceBySlug(slug: string): Province | undefined {
    return provinces.find((p) => p.slug === slug)
  }