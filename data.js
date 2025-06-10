export const presentationContext = `
Strategic Imperatives for Penti:
- Imperative 1: Market Growth & Adoption. The AI in retail market is growing rapidly. Generative AI in retail is projected to grow from $1.015B in 2025 to $17.268B by 2034. 89% of retailers are expected to use AI by 2025.
- Imperative 2: AI as a Catalyst. AI is moving from process optimization to enabling entirely new business models.
- Imperative 3: The Rise of AI Agents & 'Machine Customers'. This involves AI making autonomous purchasing decisions.
- Imperative 4: Driving Sustainable & Ethical Practices. Using AI to optimize resources and enhance transparency.
- Imperative 5: Building Agile Foundations. A MACH architecture is crucial for flexibility.
- Imperative 6: Strategic Workforce Transformation. Fostering AI literacy and redefining roles.
`;

export const useCaseData = {
    'introduction': { name: 'Introduction', description: 'Welcome to the AI in Retail Explorer. Please select a category from the navigation above to explore the use cases.' },
    'hyper-personalization': {
        name: 'Hyper-Personalization',
        description: 'Moving beyond broad segmentation to one-to-one engagement, AI leverages vast data to deliver individualized journeys, products, and interactions at scale.',
        cases: [
            { id: 'zara-fast-fashion', company: 'Zara (Inditex)', concept: 'AI-Powered Trend Analysis & Rapid Design', image: '/images/zara.png', isCustom: true, businessModel: "Zara's model uses AI for real-time feedback loops between digital trends and in-store behavior to de-risk new product introductions." },
            { id: 'walmart-semantic-search', company: 'Walmart', concept: 'AI-Powered Semantic Search', image: '/images/walmart.jpg', isCustom: true, businessModel: "Walmart's strategy shifts from keyword to 'semantic' search, using generative AI and deep product tagging to make discovery more intuitive." },
            { id: 'stitch-fix', company: 'Stitch Fix', concept: 'AI-Guided Personal Styling', image: '/images/stitchfix.png', isCustom: true, businessModel: "Stitch Fix's entire operation is built around AI, operating on a subscription basis where algorithms curate personalized clothing 'Fixes'." }
        ]
    },
    'intelligent-operations': {
        name: 'Intelligent Operations',
        description: 'AI is revolutionizing backend retail operations, making them more accurate, efficient, and responsive across the entire value chain.',
        cases: [
            { id: 'walmart-replenishment', company: 'Walmart', concept: 'Automated AI Replenishment System', image: '/images/walmart.jpg', isCustom: true, businessModel: "Walmart uses AI to autonomously forecast demand and automate its massive replenishment process, freeing up employees for higher-value tasks." }
        ]
    },
    'customer-engagement': {
        name: 'Customer Engagement',
        description: 'AI is reshaping customer interactions with 24/7 support, instant responses, and a deep understanding of customer sentiment.',
        cases: [
             { id: 'saks-agentforce', company: 'Saks', concept: 'AI for Frontline Enablement', image: '/images/saks.png', isCustom: true, businessModel: "Saks uses AI to augment its human stylists, providing them with a 360-degree view of the customer to deliver a profoundly personal, data-driven service." }
        ]
    },
    'generative-agentic-ai': {
        name: 'Generative & Agentic AI',
        description: 'Generative AI creates novel content, while Agentic AI performs autonomous tasks, opening new frontiers in design, marketing, and automation.',
        cases: [
            { id: 'puma-gen-ai-imagery', company: 'Puma', concept: 'AI-Powered Content Localization', image: '/images/puma.png', isCustom: true, businessModel: "Puma uses Google's Generative AI to create localized product imagery at scale, replacing the need for costly regional photoshoots." }
        ]
    },
    'phygital-experiences': {
        name: 'Phygital & In-Store Tech',
        description: 'Blending physical and digital to create seamless, engaging, and personalized in-store customer experiences that drive sales and loyalty.',
        cases: [
            { id: 'zara-omnichannel-flagship', company: 'Zara (Inditex)', concept: 'The Omnichannel Flagship Experience', image: '/images/zaramadrid.png', isCustom: true, youtubeUrl: 'https://www.youtube.com/watch?v=p6DkV4QAhDs&t=6s', businessModel: "Zara's flagship strategy deeply integrates its physical stores with its digital app, using RFID to power everything from smart fitting rooms to robotic online order pickup." }
        ]
    },
    'sustainable-ethical-ai': {
        name: 'Sustainable & Ethical AI',
        description: 'Using AI to optimize resource use, minimize waste, and enhance supply chain transparency for more sustainable and ethical operations.',
        cases: [
            { id: 'tommy-hilfiger-zero-waste', company: 'Tommy Hilfiger', concept: 'Designing for Zero Waste with 3D Technology', image: '/images/tommy.png', isCustom: true, businessModel: "Tommy Hilfiger leverages its proprietary 3D design incubator to eliminate the waste associated with physical sample production and shipping." }
        ]
    },
    'platform-enablers': {
        name: 'Platform Enablers',
        description: 'Major technology platforms are providing the foundational AI infrastructure and retail-specific solutions that power industry-wide transformation.',
        cases: [
            { id: 'pepesto-b2ai', company: 'Pepesto', concept: 'The B2AI Grocery Shopping API', image: '/images/pepesto.png', isCustom: true, businessModel: "Pepesto provides a specialized API to other AI developers, abstracting away the complexity of the online grocery ecosystem for any AI agent needing to place real orders." },
            { id: 'google-cloud', company: 'Google Cloud', concept: 'AI-Powered Retail Transformation', image: '/images/googleretail.png', isCustom: true, businessModel: "Google Cloud provides a comprehensive suite of AI solutions to transform retail by enhancing customer service, empowering employees, and generating creative content." },
            { id: 'aws-retail', company: 'Amazon Web Services', concept: 'Foundational Cloud & AI Services', image: '/images/aws.png', isCustom: true, businessModel: "AWS provides scalable cloud infrastructure and a suite of services, allowing retailers to build custom solutions for supply chain, data analytics, and customer experiences." }
        ]
    },
    'concept-explainers': {
        name: 'Concept Explainers',
        description: 'Deep dives into the foundational technologies and strategic concepts driving the AI-powered retail revolution.',
        cases: [
            { id: '3dvd-digital-twins', company: 'Key Concept', concept: '3DVD & Digital Twins', image: 'https://images.unsplash.com/photo-1631975398299-80c550ea4df1?w=600', isCustom: true, businessModel: "A Digital Twin is the complete digital file of a product, containing everything from its 3D model and material specs to pricing and marketing data, shifting the industry from physical to digital workflows." },
            { id: 'mach-architecture', company: 'Key Concept', concept: 'MACH Architecture', image: 'https://images.unsplash.com/photo-1542626991-a2f572aedfe8?w=600', isCustom: true, businessModel: "MACH (Microservices, API-first, Cloud-native, Headless) is a set of principles for building modern, agile software systems that can rapidly integrate best-of-breed AI solutions." }
        ]
    },
    'ask-ai': { name: 'Ask AI', description: 'Ask our AI expert about concepts in retail technology.' }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { presentationContext, useCaseData };
}