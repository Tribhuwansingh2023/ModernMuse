import heroMain from "@/assets/hero-main.jpg";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";
import article5 from "@/assets/article-5.jpg";
import article6 from "@/assets/article-6.jpg";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Tech" | "Culture" | "Lifestyle";
  author: string;
  authorRole: string;
  isAuthorVerified?: boolean;
  authorVerificationDate?: string;
  date: string;
  readTime: number;
  image: string;
  editorsPick?: boolean;
}

export const categories = [
  { name: "Tech" as const, description: "From Bengaluru's startup corridors to AI labs across India — exploring the innovation shaping our digital future." },
  { name: "Culture" as const, description: "Art, architecture, cinema, and the creative forces redefining India's cultural identity on the global stage." },
  { name: "Lifestyle" as const, description: "Wellness, travel, sustainable living, and the rituals that craft a life well-lived across urban India." },
];

export const articles: Article[] = [
  {
    slug: "indie-music-scene-mumbai",
    title: "The Indie Music Revolution in Mumbai",
    excerpt: "How Mumbai's underground venues and bedroom producers are rewriting the rules of Indian music.",
    content: `Mumbai doesn't sleep — and neither does its music scene. In the narrow lanes of Bandra and the repurposed mill spaces of Lower Parel, a generation of artists is building something entirely new.\n\nForget Bollywood playback. This is different. Artists like Prateek Kuhad, The F16s, and a wave of electronic producers from Dharavi are blending classical ragas with lo-fi beats, creating sounds that feel simultaneously ancient and futuristic.\n\n"We're not rejecting tradition," says Kavya Menon, who runs a small venue called The Listening Room in Khar. "We're having a conversation with it. Every tabla sample, every tanpura drone — it's a dialogue between who we were and who we're becoming."\n\nThe economics are shifting too. Streaming platforms have democratised distribution. A 22-year-old in Andheri can release a track at midnight and wake up to fifty thousand plays. The gatekeepers haven't disappeared, but their gates are looking increasingly irrelevant.\n\nCritics worry about sustainability. Most indie artists still can't afford to quit their day jobs. But the energy in the room — quite literally, at a packed antiSOCIAL on a Thursday night — tells a different story.\n\nThis isn't a trend. It's a tectonic shift. And Mumbai, chaotic and beautiful as ever, is ground zero.`,
    category: "Culture",
    author: "Meera Iyer",
    authorRole: "Culture Editor",
    isAuthorVerified: true,
    authorVerificationDate: "2025-06-15",
    date: "2026-02-14",
    readTime: 8,
    image: article1,
    editorsPick: true,
  },
  {
    slug: "ai-indian-education",
    title: "AI Is Transforming India's Classrooms — But At What Cost?",
    excerpt: "From rural Rajasthan to IIT campuses, artificial intelligence is reshaping how India learns.",
    content: `In a government school in Jaipur, a ten-year-old girl named Priya practices mathematics on a tablet. The AI tutoring app adapts to her pace, offering easier problems when she struggles, harder ones when she excels. Her teacher, Mr. Sharma, watches from across the room — grateful, but uneasy.\n\n"The machine knows her weaknesses better than I do," he admits. "I have sixty students. It has one. But can it see that she's upset today? Can it know that her father lost his job last week?"\n\nThis tension — between scalable efficiency and irreplaceable human intuition — defines India's AI education experiment. Startups like Byju's, Vedantu, and a new wave of vernacular-first platforms are deploying AI across the country.\n\nThe results are mixed. In urban centres, AI-powered learning has accelerated outcomes measurably. In rural areas, infrastructure gaps — unreliable internet, shared devices, power cuts — create what researchers call the "digital learning divide."\n\nDr. Ananya Kapoor at IIT Delhi argues for a hybrid model. "AI should augment teachers, not replace them. The best outcomes we've seen are where the teacher uses AI insights to personalise their own instruction."\n\nThe scale of the challenge is staggering: 250 million students, 23 official languages, vast economic disparity. No algorithm can solve that alone. But as Priya swipes through her tablet, eyes bright with concentration, it's clear that something important is beginning.`,
    category: "Tech",
    author: "Aarav Sharma",
    authorRole: "Tech Correspondent",
    isAuthorVerified: true,
    authorVerificationDate: "2025-08-23",
    date: "2026-02-12",
    readTime: 7,
    image: article2,
    editorsPick: true,
  },
  {
    slug: "sustainable-living-delhi-ncr",
    title: "Building Green in Delhi NCR: The New Urban Pioneers",
    excerpt: "A growing movement of architects and residents is reimagining sustainable living in India's most polluted region.",
    content: `Every November, Delhi disappears. The air quality index crosses 500 — "hazardous" — and the city becomes a grainy photograph of itself. Schools close. Flights divert. Twenty million people breathe poison.\n\nBut in Gurugram's Sector 56, Rohan Verma tends to his rooftop garden. His three-bedroom apartment runs on solar panels. Rainwater harvesting tanks sit where a second parking spot might be. The air purifiers are homemade — NASA-recommended indoor plants stacked in every corner.\n\n"People think sustainable living in Delhi is an oxymoron," he says, pouring chai made with herbs from his terrace. "I think it's the only rational response."\n\nRohan isn't alone. A network of urban sustainability pioneers is growing across the NCR region. They share composting techniques on WhatsApp groups, organise seed exchanges, and lobby RWAs for solar installations.\n\nArchitect Nandini Joshi's firm specialises in retrofitting existing buildings for energy efficiency. "We don't need to tear things down," she explains. "Simple changes — better insulation, cross-ventilation design, greywater recycling — can reduce a building's carbon footprint by 40%."\n\nThe movement faces resistance. Developers prioritise speed over sustainability. Regulations exist but enforcement is weak. And the scale of Delhi's environmental crisis can feel overwhelming.\n\nBut Rohan is optimistic. "Every terrace garden is a protest," he says. "Every solar panel is a vote for the future we want."`,
    category: "Lifestyle",
    author: "Rohan Verma",
    authorRole: "Environment Writer",
    isAuthorVerified: true,
    authorVerificationDate: "2025-07-10",
    date: "2026-02-10",
    readTime: 8,
    image: article3,
    editorsPick: true,
  },
  {
    slug: "digital-creators-economy-india",
    title: "India's Creator Economy: Beyond the Influencer Bubble",
    excerpt: "How India's digital creators are building real businesses — not just followings — in the world's fastest-growing internet market.",
    content: `Ananya Kapoor has 2.3 million Instagram followers. But that's not what pays her bills.\n\nFrom her studio apartment in Bengaluru's Indiranagar, the 27-year-old runs a digital products business — online courses, design templates, a paid newsletter — that generates more revenue than her brand partnerships ever did.\n\n"Followers are vanity," she says. "Revenue is sanity. I spent two years chasing likes before I realised that a thousand paying subscribers are worth more than a million passive viewers."\n\nAnanya represents a maturing phase of India's creator economy. The first wave was about attention. The second is about conversion. And the numbers are staggering: India's creator economy is projected to reach $25 billion by 2027, with over 80 million creators across platforms.\n\nBut the landscape is bifurcating. At the top, a small elite of creators commands premium brand deals. At the bottom, millions produce content for pennies. The middle class of creators — sustainable, independent, diversified — is still emerging.\n\nPlatforms are adapting. YouTube's Shopping features, Instagram's subscription model, and homegrown apps like ShareChat and Moj are building tools specifically for Indian creators.\n\nThe real revolution isn't happening in English. It's in Hindi, Tamil, Telugu, and Marathi — where creators are reaching audiences that global platforms barely knew existed.`,
    category: "Tech",
    author: "Ananya Kapoor",
    authorRole: "Digital Culture Writer",
    date: "2026-02-08",
    readTime: 6,
    image: article4,
  },
  {
    slug: "startup-culture-bengaluru",
    title: "Bengaluru's Startup Soul: Beyond the Unicorn Headlines",
    excerpt: "In the lanes of Koramangala and the co-working spaces of HSR Layout, a quieter startup revolution is unfolding.",
    content: `The headlines focus on unicorns — billion-dollar valuations, celebrity founders, massive funding rounds. But the real story of Bengaluru's startup ecosystem is being written in smaller rooms.\n\nIn a converted house in Koramangala 4th Block, five engineers are building a soil-testing device for small-hold farmers. Their startup, AgriSense, has no VC backing, no flashy office, no PR team. What they have is a working prototype and letters from three state agriculture departments.\n\n"We could chase funding," says co-founder Vikram Desai. "But we'd rather chase impact. Funding changes your incentives. Suddenly you're optimising for growth, not for the farmer."\n\nThis ethos — impact over exits — characterises a growing counter-current in India's startup capital. Not every founder wants to be the next Flipkart. Some just want to solve a specific problem for a specific community.\n\nThe infrastructure supports both visions. Bengaluru now has over 400 co-working spaces, dozens of accelerators, and a talent pool deepened by IIMs, IITs, and a thriving engineering culture.\n\nBut challenges persist. The city's infrastructure groans under its own success — traffic, water shortages, rising rents. Several startups have quietly relocated to Pune or Hyderabad.\n\nStill, on any given evening in HSR Layout's cafes, you can overhear three conversations about changing the world. Not all of them will succeed. But the ambition is infectious — and unmistakably Bengaluru.`,
    category: "Tech",
    author: "Aarav Sharma",
    authorRole: "Tech Correspondent",
    date: "2026-02-06",
    readTime: 7,
    image: article5,
    editorsPick: true,
  },
  {
    slug: "heritage-architecture-jaipur",
    title: "Jaipur's Living Heritage: Where History Meets Modern Design",
    excerpt: "How Jaipur's architects are preserving centuries-old aesthetics while building for a contemporary India.",
    content: `The Pink City isn't just pink. Stand on the terrace of Nahargarh Fort at sunset, and the palette explodes — amber, rust, gold, terracotta — as the old city catches the dying light. It's a masterclass in colour that no design school could teach.\n\nBut Jaipur's architectural story isn't frozen in time. A new generation of designers is asking: how do you honour a 300-year-old aesthetic while building spaces that work for 21st-century life?\n\nArchitect Priya Rathore's firm, Studio Dharohar, specialises in this tension. Her latest project — a boutique hotel in the walled city — uses traditional jaali (lattice) screens for natural ventilation, reducing air-conditioning needs by 60%. The structural walls are load-bearing stone, just as they were in Sawai Jai Singh's time.\n\n"Heritage isn't a museum piece," she says. "It's a living technology. Our ancestors solved problems of heat, light, and ventilation without electricity. We'd be foolish to ignore those solutions."\n\nThe challenge is regulation. Jaipur's heritage zones have strict building codes, and navigating them requires patience. But Priya sees the constraints as creative catalysts.\n\nMeanwhile, the city's crafts economy — blue pottery, block printing, stone carving — is finding new markets through design collaborations with international brands.\n\nJaipur is proving that tradition and innovation aren't opposites. They're collaborators. And the result is architecture that feels both timeless and urgent.`,
    category: "Culture",
    author: "Meera Iyer",
    authorRole: "Culture Editor",
    date: "2026-02-04",
    readTime: 8,
    image: article6,
    editorsPick: true,
  },
  {
    slug: "hyderabad-food-renaissance",
    title: "Hyderabad's Culinary Renaissance: Beyond Biryani",
    excerpt: "The City of Pearls is reinventing its food identity — one experimental kitchen at a time.",
    content: `Yes, the biryani is extraordinary. But if that's all you know about Hyderabad's food scene, you're missing the revolution happening in Banjara Hills and Jubilee Hills.\n\nChef Samira Hussain runs Spice & Smoke, a 30-seat restaurant where Deccani flavours meet Nordic technique. Her signature dish — slow-cooked haleem deconstructed into a tasting plate with micro-greens from her rooftop farm — has waitlists stretching three weeks.\n\n"Hyderabadi cuisine has always been fusion," she argues. "The Nizams blended Mughlai, Telugu, and Marathwada traditions. We're just continuing that conversation with new vocabulary."\n\nThe city's food scene reflects its dual identity: old-world elegance and tech-hub energy. Software engineers from nearby HITEC City drive across town for weekend brunch at experimental cafes in Attapur and Manikonda.\n\nStreet food is evolving too. The iconic Irani chai spots are being joined by specialty coffee roasters. The dosa cart outside Charminar now competes with a sourdough pizza truck.\n\nFood writer Ravi Teja, who documents this evolution on his blog Deccan Fork, sees it as natural. "Every great food city has layers," he says. "Hyderabad's layers just happen to span five centuries."\n\nThe result is a city where you can eat 400-year-old recipes for lunch and cutting-edge gastronomy for dinner — often on the same street.`,
    category: "Culture",
    author: "Rohan Verma",
    authorRole: "Food & Travel Writer",
    date: "2026-02-02",
    readTime: 7,
    image: article3,
  },
  {
    slug: "wellness-ayurveda-modern-india",
    title: "The New Ayurveda: Ancient Wisdom for Modern Indian Lives",
    excerpt: "How a generation of practitioners is stripping away the mysticism and making Ayurveda relevant for urban India.",
    content: `Dr. Kavita Nair's clinic in Bengaluru's Whitefield doesn't look like what you'd expect. No incense. No chanting. Just clean lines, natural light, and a MacBook on the consultation desk.\n\n"Ayurveda doesn't need mysticism to be effective," she says. "It needs evidence, rigour, and a willingness to integrate with modern medicine rather than compete with it."\n\nDr. Nair represents a growing movement of practitioners who are demystifying Ayurveda for a sceptical urban audience. They publish peer-reviewed research. They collaborate with allopathic doctors. They're transparent about what Ayurveda can and cannot treat.\n\nThe market response has been significant. India's Ayurveda market is projected at $14 billion by 2027, driven largely by millennials seeking preventive, holistic health approaches.\n\nBrands like Forest Essentials and Kama Ayurveda have made Ayurvedic skincare aspirational. But Dr. Nair cautions against superficial adoption. "Taking turmeric lattes isn't Ayurveda. Understanding your prakriti, your constitution, and adapting your diet and lifestyle accordingly — that's Ayurveda."\n\nThe pandemic accelerated interest. Quarantined in apartments, millions of Indians rediscovered home remedies, breathing exercises, and dietary practices their grandmothers had advocated for decades.\n\n"We didn't discover anything new," Dr. Nair smiles. "We just stopped being embarrassed about what we already knew."`,
    category: "Lifestyle",
    author: "Ananya Kapoor",
    authorRole: "Wellness Writer",
    date: "2026-01-30",
    readTime: 6,
    image: article5,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q)
  );
}
