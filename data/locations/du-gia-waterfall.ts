import { Location } from "@/data/location"
import { heroUrl } from "@/lib/cloudinary"

export const duGiaWaterfall: Location = {
  slug: "du-gia-waterfall",
  name: "Du Già Waterfall",
  provinces: ["ha-giang"],
  destination: "ha-giang-loop",
  lat: "22.92605491197045",
  lng: "105.1988164932612",
  address: "Du Già, Yên Minh, Hà Giang",
  type: "waterfall",
  experiences: ["trekking", "swimming", "photography"],
  tags: ["💧 Jungle Waterfall", "🏊 Natural Pool", "🥾 River Trek", "📸 Photography"],
  bestTime: "Jun – Oct (highest water flow); Sep – Oct for combination of flow and clear weather",
  entranceFee: "Free",
  openingHours: "Open 24/7",
  mapUrl: "",
  heroImage: heroUrl("du-gia-waterfall-hero_placeholder"),
  gallery: [],
  seoDescription:
    "Du Già Waterfall is a multi-tier cascade deep in the valley forest above Du Già Village - reached by a 3km riverside trek, with natural pools at the base for swimming and the dense karst forest of the eastern Ha Giang Loop surrounding it.",
  tips: [
    "Start the trek early morning - the forest trail is cool and shaded until about 9 AM, after which it becomes warm on the exposed river sections",
    "The trail follows the Nhiệm River upstream - there are multiple stream crossings, so wear shoes you can get wet",
    "The main falls drop into a wide pool that is deep enough for swimming - the water is cold and clear even in wet season",
    "The trail continues past the main falls to smaller upper cascades - the upper section sees almost no visitors and is the most scenic part",
    "Ask your Du Già homestay host to guide the trek - they know the river crossings and the upper trail sections that are easy to miss",
  ],
  content: {
    intro:
      "Du Già Waterfall sits 3km upstream from Du Già Village, in the narrow valley where the Nhiệm River descends through forested karst limestone. The falls drop in two main tiers - the lower tier into a wide swimming pool, the upper tier into a narrower rocky basin - with a series of smaller cascades above that most visitors don't reach. The approach is a riverside trail that crosses the stream multiple times, passes through bamboo forest and primary lowland jungle, and follows the river as the valley narrows and the karst walls close in on both sides. The falls are at their most powerful from June to October when monsoon rainfall fills the river, but the combination of water volume and clear weather in September and October is the most rewarding time.",
    howToGetThere:
      "The trail to Du Già Waterfall begins at the southern end of Du Già Village, following a path upstream along the Nhiệm River. The trail is approximately 3km each way - about 45–60 minutes at a moderate pace, longer if the river level requires careful crossing. The trailhead is easily found from the village main road - ask any local or your homestay host for the starting point. No guide is formally required but the upper trail sections are easier with a local guide, particularly in wet season when crossings are higher.",
    whatToExpect:
      "The first kilometre of trail is relatively easy - a clear path through bamboo and mixed forest alongside the river. After the first stream crossing, the trail becomes rougher and the valley narrows. The lower falls are visible before they're audible - the trail opens onto the pool area where the main cascade drops approximately 15 metres into the swimming basin. The water is clear and the pool is deep enough for jumping from the rocks beside the falls. Above the main falls, a steeper path climbs through the forest to the upper cascade area - quieter, denser forest, and significantly fewer people.",
    travelTips:
      "Du Già Waterfall is best paired with a night in Du Già Village - the trek is most enjoyable in the early morning before the day heats up, and returning to the village for lunch after the trek is the natural rhythm. The falls on their own don't require a dedicated trip to the eastern loop, but combined with the village homestay and the valley scenery, they make a compelling case for taking the eastern variant rather than the standard Ha Giang Loop route. For riders who have done the loop before and want new content, Du Già and its waterfall are the most consistent recommendation.",
  },
}
