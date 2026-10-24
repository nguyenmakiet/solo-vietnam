import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const puSiLungMountain: Location = {
  slug: "pu-si-lung-mountain",
  name: "Pu Si Lung Mountain",
  updatedAt: "2026-10-11",
  provinces: ["lai-chau"],
  destination: "",
  lat: 22.625884,
  lng: 102.787515,
  address: "Bum Nưa, Lai Châu (formerly Pa Vệ Sử commune, Mường Tè district, Lai Châu)",
  type: ["mountain"],
  categories: ["nature"],
  experiences: ["trekking", "camping"],
  tags: [
    "🏔️ One of Vietnam's Highest Peaks",
    "🪪 Border Permit Required",
    "🏕️ Multi-Day Jungle Trek",
  ],
  bestMonths: [10, 11, 12, 1, 2, 3, 4, 5],
  bestSeasonNote: "Oct - Apr is the dry season and the most comfortable window: cool, dry weather, less slippery trails, forest flowers in bloom and good odds of a cloud sea. Spring (roughly Feb - Apr) is often called the most beautiful time, with fresh greenery and rhododendrons and orchids flowering. May is still possible but the rains are starting, so expect more mud. Dec - Jan is the quietest stretch with the fewest trekkers; it's cold and snow is rare, and the scenery is drier and less striking. Avoid Jun - Sep: heavy rain, swollen streams and slippery slopes make the route genuinely risky.",
  bestTimeOfDay: "Start walking at first light every day. The aim is to reach each campsite well before dark - the forest gets dark early, and this terrain is not something to navigate by headlamp.",
  timeNeeded: {
    minMinutes: 4320,
    maxMinutes: 5760,
  },
  entranceFee: "No entrance fee. Vietnamese trekkers apply for the border-area permit through the Lai Châu Provincial Border Guard Command, with no fee reported for this route - confirm when you apply. Foreign nationals follow a different procedure through the provincial police immigration office, where the standard permit fee for entering a restricted or border area is 10 USD per person and a sponsoring organisation may be required - and approval for border peaks like this is reportedly not granted in practice. Most trekkers join an all-inclusive tour instead, typically around 6,000,000-9,000,000 VND per person (usually covering transfers, porters, meals and camping gear) - check current prices and inclusions with the operator.",
  openingHours: "No fixed hours. Access depends on holding a border-area permit and on weather conditions.",
  mapUrl: "https://www.google.com/maps?q=22.625884,102.787515",
  streetView: { embedUrl: "" },
  heroImage: heroUrl("pu-si-lung-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Pu Si Lung is one of Vietnam's highest mountains, at roughly 3,076 m on the Vietnam-China border in Lai Châu province - often called the toughest high-peak trek in the country, through primeval forest to border marker 42, with a border-area permit required.",
  tips: [
    "⚠️ A border-area permit is mandatory - climbing without one is illegal, and if anything goes wrong on the mountain nobody is obliged to help you. Apply at the Lai Châu Provincial Border Guard Command on Hoàng Văn Thái street in Lai Châu city, then register at the Pa Vệ Sử border guard post before starting",
    "⚠️ Foreign nationals: border peaks like Pu Si Lung are reportedly off-limits to foreigners in practice. Foreigners apply through the immigration authorities (the provincial police immigration office, standard fee 10 USD per person, often with a sponsoring organisation), after which the request passes to the provincial and local border guards - a slow process with no guarantee. Contact an international tour operator or the relevant Vietnamese authorities well before planning anything",
    "⚠️ Avoid June-September. Heavy rain, swollen streams and slippery slopes make the route genuinely dangerous, and the area is very far from any hospital",
    "When applying for the permit, bring your ID card (or a residence confirmation from your local police) and be specific: purpose of the trip, dates, duration and the full list of people in your group. The more detail you give, the smoother it tends to go",
    "Never trek alone - go with a tour or a group with a local guide. The Pa Vệ Sử border post can help arrange a guide to marker 42 and the summit",
    "Time needed: 3 days 2 nights to 4 days 3 nights on the mountain, plus at least a day each way to reach Mường Tè from Lai Châu city",
    "Budget around 6,000,000-9,000,000 VND per person for an all-inclusive tour. For Vietnamese trekkers no permit fee is reported if you apply yourself - confirm when you apply",
    "Water is the thing people underestimate: plan on 3-4 litres per day, refill from streams with purification tablets or a mini filter, and carry salt tablets and energy bars. At least one trekker reports running so short of water that they chewed bamboo leaves to keep going",
    "There are no food stalls anywhere on the route - carry dry, easy-to-pack food for the whole trek",
    "Leeches and mosquitoes are common - cover up, use leech repellent and insect spray",
    "Phone signal is patchy: some trekkers report Viettel coverage across much of the area, others lose signal completely in the deep forest. Bring a power bank and download an offline map with the trail before you go",
    "Train properly beforehand - stair climbing, walking, running and weights. Even experienced trekkers report knee pain on this route, and some sections mean scrambling with hands and feet on steep rock",
    "The summit is wooded with no wide view - the reward is the primeval forest, the cloud sea and border marker 42, not a summit panorama",
  ],
  content: {
    richSections: [
      {
        id: "about",
        label: "About This Place",
        title: "What Makes Pu Si Lung Mountain Special",
        blocks: [
          {
            type: "paragraph",
            text: "Pu Si Lung is one of the highest mountains in Vietnam, rising to roughly 3,076 m (some sources give 3,083 m) on the border with China in the far northwest of Lai Châu province. Most current lists rank it the country's [second-highest peak](/blog/vietnam-10-highest-mountains), after [Fansipan](/locations/fansipan), though some older sources rank it third behind [Pu Ta Leng](/locations/pu-ta-leng-mountain). Often called the \"roof of the Vietnam-China border\", it is also widely regarded as one of the toughest trekking routes in Vietnam.",
          },
          {
            type: "paragraph",
            text: "The mountain sits in what is now Bum Nưa commune (formerly Pa Vệ Sử commune, Mường Tè district). Border marker 42, at around 2,800 m, stands on the route - the spot almost every trekker wants to reach and photograph. Because the whole area is a sensitive border zone, security is strict and a permit is required. Most local residents in the area are reportedly Thái people, known for welcoming passing travellers.",
          },
          {
            type: "heading",
            text: "Why Trekkers Come to Pu Si Lung",
          },
          {
            type: "paragraph",
            text: "Pu Si Lung is about the journey rather than the summit view. The trail runs through carefully protected primeval forest with huge old trees and rich plant life; in flowering season, orchids, rhododendrons and wild banana flowers add colour. Along the way are waterfalls, deep streams, grassy hills and sheer rock faces. When the cloud sits low, the pass between Mường Nhé and Pa Vệ Sử opens onto a cloud sea, and above 3,000 m the cloud often wraps around you and fills the forest.",
          },
        ],
      },
      {
        id: "how-to-get-there",
        label: "How to Get There",
        title: "How to Get to Pu Si Lung Mountain",
        blocks: [
          {
            type: "paragraph",
            text: "Getting to the trailhead takes several legs. From Hanoi it is roughly 400 km to Lai Châu city (about 7-10 hours). From Lai Châu city it is about 130 km to Mường Tè - take a bus from Lai Châu bus station or ride a motorbike. The road is hard going in places, with gravel sections where you can only manage 10-15 km/h, so consider hiring a porter or a local who knows the road.",
          },
          {
            type: "paragraph",
            text: "From Mường Tè it is about 27 km more to the [Pa Vệ Sử border guard post](https://maps.app.goo.gl/wM2feQyk58U7KFLX9), where you register your permit. Trekkers have traditionally asked the border guards to let them stay the night here, then set off early the next morning - ask, don't assume.",
          },
          {
            type: "heading",
            text: "Getting the Border Permit",
          },
          {
            type: "paragraph",
            text: "Apply at the Lai Châu Provincial Border Guard Command (Bộ Chỉ huy Bộ đội Biên phòng tỉnh Lai Châu) on Hoàng Văn Thái street in Lai Châu city. Bring your ID card or a residence confirmation from your local police, and state clearly why you are going, your dates, how long you will be on the mountain and who is in your group. Once approved, you report to the Pa Vệ Sử border post, which can help arrange a guide to marker 42 and the summit. No fee is reported for Vietnamese trekkers on this route, but confirm when you apply; tour operators usually handle the whole process.",
          },
          {
            type: "callout",
            variant: "warning",
            title: "No permit, no trek",
            text: "Going without a permit is illegal. If anything goes wrong on the mountain, nobody is obliged to help you, and because this is a politically and militarily sensitive border area, the risks are hard to predict. Foreign nationals are reportedly not permitted in practice. The formal route is an application through the immigration authorities (the provincial police immigration office, standard fee 10 USD per person, often needing a sponsoring organisation), coordinated with the provincial and local border guards.",
          },
        ],
      },
      {
        id: "what-to-expect",
        label: "What to Expect",
        title: "What to Expect on the Pu Si Lung Mountain Trek",
        blocks: [
          {
            type: "paragraph",
            text: "The route is commonly given as about 40 km round trip over 4 days 3 nights. It used to be longer - around 50 km round trip from the foot of the mountain plus 16 km from the border post - but a hydropower dam has since shortened the approach. One recent group of five with three porters covered 30.68 km, including the detour to marker 42, in 3 days 2 nights. Plan for 3 days 2 nights to 4 days 3 nights; some itineraries quote longer.",
          },
          {
            type: "heading",
            text: "Terrain: Mud, Streams and Rock",
          },
          {
            type: "paragraph",
            text: "Trekkers often call it the muddiest route in Vietnam. Expect long, steep forest climbs, deep stream crossings, sheer rock sections where you climb with hands and feet, and descents that are hard on the knees. The Nậm Sì Lường stream along the way is closer to a small river - wide, clear and cold. Nights are spent camping in the forest; porters on guided tours usually carry tents and cook.",
          },
          {
            type: "heading",
            text: "Marker 42 and the Summit",
          },
          {
            type: "paragraph",
            text: "Border marker 42, at around 2,800 m, is the highlight for most trekkers. The summit itself is not a rock peak - it is surrounded by trees with no wide view like some other high peaks - but reaching one of the hardest summits in Vietnam is the point.",
          },
          {
            type: "heading",
            text: "Weather and Conditions",
          },
          {
            type: "paragraph",
            text: "The climate swings hard: the sun can be fierce during the day, while nights are bitterly cold. Rain can arrive quickly, and leeches and mosquitoes are common. Phone signal is patchy - some trekkers report Viettel coverage across much of the area, but others lose signal completely in the deep forest.",
          },
          {
            type: "callout",
            variant: "warning",
            title: "Remote means remote",
            text: "Any evacuation would take a long time. Never go alone, always use a local guide, carry enough water and food, and turn back if the weather turns.",
          },
        ],
      },
      {
        id: "travel-tips",
        label: "Travel Tips",
        title: "Travel Tips for Pu Si Lung Mountain",
        blocks: [
          {
            type: "paragraph",
            text: "Pu Si Lung is not for first-timers. Even trekkers who have done several peaks report it as brutal, so build up with easier multi-day treks such as a trail route up [Fansipan](/locations/fansipan) first. Research the route thoroughly and train for weeks beforehand: stair climbing, walking, running and weight training. Most people join an all-inclusive tour (around 6,000,000-9,000,000 VND per person, usually covering transfers, porters, meals and camping gear) with a reputable operator or local guide.",
          },
          {
            type: "heading",
            text: "What to Pack for Pu Si Lung",
          },
          {
            type: "bullets",
            items: [
              "Waterproof trekking shoes or boots with strong grip, in a well-fitting size",
              "Sweat-wicking clothing, a thermal top, gloves and a rain jacket",
              "Sleeping bag (or tent / hammock if your tour doesn't supply one)",
              "Headlamp, trekking poles, power bank and an offline trail map",
              "3-4 litres of water per day, purification tablets or a mini filter, salt tablets, energy bars and dry food",
              "Personal medication, a first-aid kit, insect spray and leech repellent",
            ],
          },
          {
            type: "callout",
            variant: "tip",
            title: "Set the right expectations",
            text: "Come for the forest, the cloud sea, marker 42 and the challenge, not for a summit panorama. The journey to get here is long, which makes it a real commitment if you're coming from southern Vietnam - but for serious trekkers it is often described as a once-in-a-lifetime summit.",
          },
        ],
      },
    ],
  },
  insights: {
    highlights: [
      "One of Vietnam's highest peaks, at roughly 3,076 m, usually ranked second after Fansipan - and widely regarded as one of the toughest treks in the country",
      "Border marker 42 at around 2,800 m on the Vietnam-China boundary",
      "Protected primeval forest, the wide Nậm Sì Lường stream and a cloud sea when the cloud sits low",
    ],
    thingsToKnow: {
      crowds: "Very few trekkers, and fewer still in winter (Dec - Jan)",
      difficulty: "Very hard: roughly 30-40 km over 3 days 2 nights to 4 days 3 nights, on steep, muddy forest trails with rock scrambles and stream crossings. Not for beginners",
      safety: "Border-area permit required; never trek alone. Avoid Jun - Sep because of heavy rain, swollen streams and slippery slopes. Carry enough water - running short is a real risk. Phone signal is patchy",
      accessibility: "Not accessible for visitors with limited mobility. Even the approach involves long, rough roads",
      seasonal: "Oct - Apr is the most comfortable window; spring brings flowers and fresh greenery. Dec - Jan is cold and quieter, with rare snow and drier scenery",
    },
    visitorTips: [
      "Get the permit at the Lai Châu Provincial Border Guard Command before travelling, then register at the Pa Vệ Sử border post - or let a tour operator handle it",
      "If you're a foreign national, assume the answer is no until an operator or the authorities confirm otherwise",
      "Plan on 3-4 litres of water per day and carry a filter - several trekkers have run short",
    ],
    faq: [
      {
        question: "Do I need a permit to climb Pu Si Lung?",
        answer: "Yes. Apply at the Lai Châu Provincial Border Guard Command on Hoàng Văn Thái street in Lai Châu city with your ID card or a residence confirmation, then register at the Pa Vệ Sử border guard post. For Vietnamese trekkers no fee is reported for this route; tour operators usually handle it. Foreign nationals follow a separate procedure (see below).",
      },
      {
        question: "Can foreigners climb Pu Si Lung?",
        answer: "In practice, border peaks like Pu Si Lung are reportedly off-limits to foreign nationals. The formal route is an application through the immigration authorities (the provincial police immigration office, standard fee 10 USD per person, often with a sponsoring organisation), coordinated with the border guards, with no guarantee of approval. Ask an international tour operator or the relevant authorities before planning anything.",
      },
      {
        question: "How long does the Pu Si Lung trek take?",
        answer: "Plan for 3 days 2 nights to 4 days 3 nights on the mountain - roughly 30-40 km round trip depending on the route - plus travel time to Mường Tè, about 130 km from Lai Châu city.",
      },
      {
        question: "How high is Pu Si Lung?",
        answer: "About 3,076 m, though some sources give 3,083 m. Most current lists rank it Vietnam's second-highest peak, after Fansipan; some older sources place it third, behind Pu Ta Leng.",
      },
      {
        question: "Is the summit view worth it?",
        answer: "The summit is wooded, so there's no wide panorama like on some other peaks. Trekkers come for the challenge, the primeval forest, the cloud sea and marker 42 - and most say reaching one of the hardest summits in Vietnam is worth it.",
      },
    ],
    sentiment: {
      positive: "Trekkers describe Pu Si Lung as a summit every serious trekker wants to reach once, valued for its difficulty, the long and remote route and the sense of achievement - even though the summit itself has no wide view.",
      negative: "Commonly described as the muddiest route in Vietnam and gruelling even for experienced trekkers, with knee pain, scary rock sections, water shortages and a long, costly journey just to reach the trailhead, especially from southern Vietnam.",
    },
  },
}
