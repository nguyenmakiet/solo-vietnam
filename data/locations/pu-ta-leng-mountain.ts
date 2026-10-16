import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const puTaLengMountain: Location = {
  slug: "pu-ta-leng-mountain",
  name: "Pu Ta Leng Mountain",
  updatedAt: "2026-10-11",
  provinces: ["lai-chau"],
  destination: "",
  lat: 22.422453,
  lng: 103.603583,
  address: "Tả Lèng, Lai Châu (formerly Tả Lèng, Hồ Thầu and Giang Ma communes, Tam Đường district, Lai Châu)",
  type: ["mountain"],
  categories: ["nature"],
  experiences: ["trekking", "camping", "photography"],
  tags: [
    "🌸 Ancient Rhododendron Forest",
    "🏔️ One of Vietnam's Highest Peaks",
    "🎋 Bamboo Cloud Forest",
  ],
  bestMonths: [10, 11, 12, 1, 2, 3, 4],
  bestSeasonNote: "Oct - Apr is the dry season and the window most trekkers recommend: clearer skies, longer views, less rain and less slippery trails. Feb - Apr is rhododendron season, when the ancient forests near the summit flower in red, pink, purple and white - but blooming varies a lot from year to year, so ask locals or your operator before you commit to a date. Winter (Dec - Jan) brings thick fog, cold nights and occasionally frost. May - Sep is hotter and much wetter: trails turn to mud, leeches multiply and heavy rain can trigger flash floods along the streams the routes follow, so it is best avoided.",
  bestTimeOfDay: "Start early each day - walking days run 6-10 hours. On summit day, aim to reach the top in the morning or early afternoon so you're back at the hut before dark.",
  timeNeeded: {
    minMinutes: 2880,
    maxMinutes: 4320,
  },
  entranceFee: "No entrance fee. Guided tours start from around 5,000,000 VND per person (2026 price), usually covering guide, porter, meals, hut accommodation and transfers - for example [Tổ Ong Adventure](https://toongadventure.com/tour/tour-trekking-putaleng/). An English-speaking guide costs about 1,000,000 VND extra per person with that operator. Check current prices before booking.",
  openingHours: "No fixed hours. Trekking is best done with a guide or porter; book at least 7 days ahead on weekdays and 30 days ahead for public holidays and Tết.",
  mapUrl: "https://www.google.com/maps?q=22.422453,103.603583",
  streetView: { embedUrl: "" },
  heroImage: heroUrl("pu-ta-leng-lai-chau_rhciv3"),
  gallery: [
    "pu-ta-leng-lai-chau_rhciv3"
  ],
  seoDescription:
    "Pu Ta Leng is one of Vietnam's highest mountains, at about 3,049 m in the Hoàng Liên Sơn range in Lai Châu - a tough 2-3 day trek through primeval forest, mossy streams and bamboo cloud forest to ancient rhododendron groves that flower from February to April.",
  tips: [
    "Time needed: 2 days 1 night (for fit, experienced trekkers) to 3 days 2 nights (average fitness), with 6-10 hours of walking per day",
    "For rhododendrons, go Feb - Apr and choose the Sì Thâu Chải side - it has the best flowering slopes. The Hồ Thầu side has almost none. Flowering varies year to year, so ask locally before you go",
    "The most-recommended combination for a first visit: up from Tả Lèng (gentler climb, big clean huts) and down via Hồ Thầu or Sì Thâu Chải - expect steep descents and rope sections on the way down",
    "Wear rubber boots or waterproof shoes with strong grip and bring rain trousers - the routes cross many streams, and wet rocks and roots are extremely slippery even in good hiking footwear",
    "Not a beginner's mountain: train beforehand with a few smaller peaks and regular 5 km runs. Many sections mean scrambling with hands and feet, some slopes are described as 70-90 degrees, and a few stretches run close to drop-offs",
    "Hire a porter or join a tour - porters carry your load, know the trail and can arrange transport back if you're exhausted. Several trekkers who went without enough food and water describe it as a near-disaster",
    "After heavy rain, wait at least a few days if you can - more than half of the trail can turn to mud",
    "Bring warm layers: temperatures drop fast in fog and wind near the summit. Huts usually provide blankets",
    "Take all your rubbish down with you - trash and names carved into old trees are a real problem on this mountain",
    "From Lai Châu city, a xe ôm or hired car to the trailhead villages (Sì Thâu Chải or Tả Lèng) costs roughly 100,000-300,000 VND each way",
  ],
  content: {
    richSections: [
      {
        id: "about",
        label: "About This Place",
        title: "What Makes Pu Ta Leng Mountain Special",
        blocks: [
          {
            type: "paragraph",
            text: "Pu Ta Leng (often written Putaleng) rises to about 3,049 m in the Hoàng Liên Sơn range, roughly 20 km northeast of Lai Châu city and bordering the Sa Pa area of Lào Cai. Most current lists rank it Vietnam's third-highest peak, after [Fansipan](/locations/fansipan) and [Pu Si Lung](/locations/pu-si-lung-mountain), though some older sources give a higher figure (around 3,096 m) and place it second. Where Fansipan has a cable car and crowds, Pu Ta Leng still feels wild, with trails that see far fewer footprints.",
          },
          {
            type: "paragraph",
            text: "The mountain is a huge massif with three consecutive peaks. The lower slopes are gentle; mid-mountain the ground breaks into rough terraces of boulders and gullies; higher up the slopes become near-vertical, with jagged rock and almost no flat ground.",
          },
          {
            type: "heading",
            text: "The Rhododendron Paradise of Pu Ta Leng",
          },
          {
            type: "paragraph",
            text: "Pu Ta Leng's biggest draw is its forest. Primeval trees hundreds of years old, draped in moss, give way at around 2,600 m to dense, dark bamboo forest, and near the summit to ancient rhododendrons - more than 30 species are reported here. From February to late April they flower in red, pink, purple and white across the upper slopes. On clear days there are cloud seas, sunrises and sunsets; on others, fog fills the forest and the whole mountain feels otherworldly.",
          },
        ],
      },
      {
        id: "how-to-get-there",
        label: "How to Get There",
        title: "How to Get to Pu Ta Leng Mountain",
        blocks: [
          {
            type: "paragraph",
            text: "Lai Châu is about 385 km from Hanoi, roughly 7-10 hours by road. From southern Vietnam, the easiest option is to fly to Nội Bài (Hanoi) or Điện Biên airport, then continue overland to Lai Châu. From Lai Châu city, take a xe ôm or hire a car to the trailhead villages - Sì Thâu Chải or Tả Lèng - for around 100,000-300,000 VND each way. Most groups rest at a homestay near the foot of the mountain before starting.",
          },
          {
            type: "paragraph",
            text: "On the Tả Lèng side, the last stretch of about 6 km from the main road to the start of the trail is usually done on the back of a local's motorbike (around 15 minutes), ending at the edge of the forest beside a small stream. First-timers, or anyone without trekking experience, should book a local trekking tour so the guide, porter and transport are all arranged.",
          },
        ],
      },
      {
        id: "what-to-expect",
        label: "What to Expect",
        title: "What to Expect on the Pu Ta Leng Mountain Trek",
        blocks: [
          {
            type: "paragraph",
            text: "Pu Ta Leng is usually done in 3 days 2 nights, or 2 days 1 night for strong trekkers on shorter routes, with 6-10 hours of walking a day. The trail starts deceptively easy along streams, then turns into rock obstacles through dense forest that get steeper and steeper. In wet weather, rocks and roots are extremely slippery, and some sections are only passable by crawling, scrambling or hauling yourself up on tree roots and fixed ropes. The weather changes quickly between the base and the summit, with thick fog and cold rain common.",
          },
          {
            type: "heading",
            text: "Choosing a Route Up Pu Ta Leng",
          },
          {
            type: "paragraph",
            text: "There are several ways up and down, and each side has its own character: the Tả Lèng side is the gentlest, with younger forest, big fast-flowing streams with little moss, cardamom plantations and the most birdlife; the Sì Thâu Chải side has the best rhododendron slopes but muddy, mossy stream sections and rope climbs; the Hồ Thầu side follows boulder-strewn streams through bamboo forest, is steep, and has very few flowers. Accounts of difficulty differ between sources, so use this as a guide and confirm the current trail with your operator.",
          },
          {
            type: "table",
            headers: ["Route", "Typical duration", "Difficulty", "Best for"],
            rows: [
              ["Tả Lèng up, Hồ Thầu down", "2D1N - 3D2N", "Moderate up, steep down", "First visit; easiest ascent, clean huts"],
              ["Tả Lèng up, Sì Thâu Chải down", "2D1N (fit) - 3D2N (average)", "Moderate up, steep rope descents", "Rhododendrons with a gentler climb"],
              ["Sì Thâu Chải up, Tả Lèng down", "2D1N", "Hardest", "Experienced trekkers; best rhododendrons and cloud sea"],
              ["Hồ Thầu - Sì Thâu Chải", "2D1N", "Medium, many steep slopes", "Fit trekkers wanting flowers on a shorter route"],
              ["Giang Ma - Tả Lèng", "3D2N", "Long, remote", "Old-growth forest, streams and waterfalls; few other trekkers"],
            ],
          },
          {
            type: "heading",
            text: "Huts, Bamboo Forest and the Summit",
          },
          {
            type: "paragraph",
            text: "Nights are spent in simple mountain huts (lán) or camps, often around 2,600 m - on one route the trek to the Giang Ma camp is about 8 km and 4 hours. Huts range from large, clean ones with decent toilets on the Tả Lèng side to small, crowded shelters where everyone sleeps packed together for warmth; blankets are usually provided. From the hut, the final push of about 2 km takes around 2 hours up and 1 hour down, almost entirely under dark bamboo forest, with ancient rhododendrons appearing only near the top.",
          },
          {
            type: "paragraph",
            text: "The summit itself is a small marker in a clearing - there's not much there beyond the satisfaction of reaching it, and on a clear day a view over a sea of mountains. In peak season you may have to queue to photograph the marker, and it is cold at the top, though porters often light a fire.",
          },
          {
            type: "callout",
            variant: "warning",
            title: "Respect the mountain",
            text: "Trekkers report rubbish - plastic bags, food containers, cigarette butts - and names carved into old trees along the route. Carry everything out, and never carve or damage the trees.",
          },
        ],
      },
      {
        id: "travel-tips",
        label: "Travel Tips",
        title: "Travel Tips for Pu Ta Leng Mountain",
        blocks: [
          {
            type: "paragraph",
            text: "Pu Ta Leng rewards the effort more than the summit view. One trekker rated it 9/10 for scenery and how pleasant the climb is, missing only a cloud sea; another put it more bluntly: the scenery is moderate, and it is a mountain to conquer rather than to sightsee. Go for the forest, the streams and the rhododendrons, and you'll rarely be disappointed.",
          },
          {
            type: "bullets",
            items: [
              "Book a porter or tour at least 7 days ahead on weekdays and 30 days ahead for holidays and Tết",
              "Rubber boots (or waterproof trekking shoes with deep grip), rain trousers and a rain jacket",
              "Trekking poles - especially for the steep, muddy descents",
              "Warm layers for the summit and the huts; temperatures drop fast in fog and wind",
              "Enough water and snacks for long days - don't rely on the hut alone",
              "A bag for your rubbish",
            ],
          },
          {
            type: "callout",
            variant: "tip",
            title: "Timing the rhododendrons",
            text: "Bloom intensity changes every year - some years are spectacular, others sparse. If flowers are the reason you're going, ask locals or your operator about this season's bloom a week or two before you travel.",
          },
        ],
      },
    ],
  },
  insights: {
    highlights: [
      "One of Vietnam's highest peaks, at about 3,049 m, usually listed third after Fansipan and Pu Si Lung",
      "Ancient rhododendron forests with more than 30 reported species, flowering Feb - Apr",
      "A changing trail through primeval forest, clear mountain streams and dense bamboo cloud forest, with several route options",
    ],
    thingsToKnow: {
      crowds: "Far quieter than Fansipan, but the summit can get busy in peak rhododendron season, with queues to photograph the marker",
      difficulty: "Hard: 2-3 days, 6-10 hours of walking a day, steep slopes, rock scrambles, rope sections and very slippery wet rocks. Not recommended for first-time trekkers without preparation",
      safety: "Go with a guide or porter. Weather changes fast, with fog and cold rain. Avoid the wet season (May - Sep), when trails flood and turn to mud",
      accessibility: "Not accessible for visitors with limited mobility",
      seasonal: "Oct - Apr is the best window; Feb - Apr for rhododendrons, though blooming varies by year",
    },
    visitorTips: [
      "Pick your route by goal: Tả Lèng for the gentlest climb, Sì Thâu Chải for rhododendrons, Giang Ma for solitude",
      "Bring rubber boots and rain trousers for the many stream crossings",
      "Carry out all your rubbish - litter is a known problem on the trail",
    ],
    faq: [
      {
        question: "Can foreigners climb Pu Ta Leng?",
        answer: "Yes, foreign trekkers do climb Pu Ta Leng on guided tours - some operators offer English-speaking guides for an extra fee (around 1,000,000 VND per person with [Tổ Ong Adventure](https://toongadventure.com/tour/tour-trekking-putaleng/)). Whether a separate permit is needed can depend on current local rules, so confirm with your tour operator before booking.",
      },
      {
        question: "Which Pu Ta Leng route should I choose?",
        answer: "For a first visit, go up from Tả Lèng (the gentlest ascent) and down via Hồ Thầu or Sì Thâu Chải. If rhododendrons are the goal, include the Sì Thâu Chải side. Experienced trekkers looking for the hardest line can go up from Sì Thâu Chải and down to Tả Lèng in 2 days 1 night. For solitude and old-growth forest, the Giang Ma - Tả Lèng route (3 days 2 nights) sees the fewest trekkers.",
      },
      {
        question: "How long does it take to climb Pu Ta Leng?",
        answer: "Usually 3 days 2 nights for average fitness, or 2 days 1 night for strong, experienced trekkers. Expect 6-10 hours of walking per day.",
      },
      {
        question: "How much does a Pu Ta Leng tour cost?",
        answer: "Guided tours start from around 5,000,000 VND per person (2026), typically including guide, porter, meals, huts and transfers. An English-speaking guide adds about 1,000,000 VND per person with some operators. Check current prices with the operator.",
      },
      {
        question: "When do the rhododendrons bloom on Pu Ta Leng?",
        answer: "Usually from February to late April, best on the Sì Thâu Chải side and near the summit. The bloom varies a lot from year to year, so ask locally before you go.",
      },
    ],
    sentiment: {
      positive: "Trekkers describe Pu Ta Leng as one of the most rewarding treks they've done: primeval mossy forest, crystal-clear streams, dark bamboo forest and spectacular rhododendrons near the summit, with friendly porters, warm huts and good food. Reaching the summit after a hard climb is consistently called worth it.",
      negative: "Common complaints are mud, extremely slippery wet rocks and roots, brutal scrambles and rope sections, cold fog near the summit, few views on some routes (especially the Hồ Thầu side), crowded summits in peak season, and rubbish and tree carvings left by other hikers. Some find the scenery only moderate relative to the effort.",
    },
  },
}
