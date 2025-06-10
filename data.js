export const presentationContext = `
Strategic Imperatives for Penti:
- Imperative 1: Market Growth & Adoption. The AI in retail market is growing rapidly. Generative AI in retail is projected to grow from $1.015B in 2025 to $17.268B by 2034. 89% of retailers are expected to use AI by 2025.
- Imperative 2: AI as a Catalyst. AI is moving from process optimization to enabling entirely new business models, creating data-driven differentiation and new Al-enabled services.
- Imperative 3: The Rise of AI Agents (and the Dawn of the 'Machine Customer'). This involves sophisticated AI agents with reasoning and planning capabilities making autonomous purchasing decisions, requiring businesses to adopt B2AI (Business-to-AI) and API-first strategies.
- Imperative 4: Driving Sustainable & Ethical Practices. AI can optimize resource use, minimize waste, and enhance supply chain transparency. 90% of shoppers believe retailers should disclose AI data use.
- Imperative 5: Building Agile Foundations for AI Success. A MACH (Microservices, API-first, Cloud-native, Headless) architecture is crucial for flexibility, faster time-to-market, and avoiding vendor lock-in.
- Imperative 6: Strategic Workforce Transformation. The focus must be on fostering AI literacy, redefining roles for human-AI collaboration, and upskilling the workforce.
`;

export const useCaseData = {
    'introduction': { name: 'Introduction', description: 'Welcome to the AI in Retail Explorer. Please select a category from the navigation above to explore the use cases.' },
    'hyper-personalization': {
        name: 'Hyper-Personalization',
        description: 'Moving beyond broad segmentation to one-to-one engagement, AI leverages vast data to deliver individualized journeys, products, and interactions at scale.',
        cases: [
            { id: 'zalando-genai', company: 'Zalando', concept: 'The Algorithmic Fashion Companion', image: '/images/Zalando.png' },
            { id: 'walmart-semantic-search', company: 'Walmart', concept: 'AI-Powered Semantic Search & Product Attribution', image: '/images/walmart.jpg' },
            { id: 'stitch-fix', company: 'Stitch Fix', concept: 'AI-Guided Personal Styling', image: '/images/stitchfix.png' },
            { id: 'the-yes', company: 'The Yes (Acquired by Pinterest)', concept: 'The Algorithmic Personal Store', image: '/images/yes.png' },
            { id: 'target-realtime-personalization', company: 'Target', concept: 'Real-Time Personalization Engine', image: '/images/targetmicro.png' },
            { id: 'zara-fast-fashion', company: 'Zara (Inditex)', concept: 'AI-Powered Trend Analysis & Rapid Design', image: '/images/zara.png' },
            { id: 'starbucks-deep-brew', company: 'Starbucks', concept: 'AI-Powered Personalized Promotions', image: '/images/starbucks.png' },
            { id: 'bold-metrics-fit-tech', company: 'Bold Metrics & Others', concept: 'AI-Powered "Better Fit" Technology', image: '/images/bold.png' },
            { id: 'visual-search-discovery', company: 'Pinterest & ASOS', concept: 'AI-Powered Visual Search', image: '/images/pinterest.png' }
        ]
    },
    'intelligent-operations': {
        name: 'Intelligent Operations',
        description: 'AI is revolutionizing backend retail operations, making them more accurate, efficient, and responsive across the entire value chain.',
        cases: [
            { id: 'clo-set-workflow', company: 'CLO-SET', concept: 'The Collaborative 3D Workflow Platform', image: '/images/closet.png' },
            { id: 'walmart-replenishment', company: 'Walmart', concept: 'Automated AI Replenishment System', image: '/images/walmart.png' },
            { id: 'shein-agile-pricing', company: 'SHEIN', concept: 'Real-Time Agile Pricing & Production', image: '/images/shein.png' },
            { id: 'hm-markdown-optimization', company: 'H&M', concept: 'AI-Powered Markdown Optimization', image: '/images/hmpricing.png' },
            { id: 'levis-agentic-ai', company: 'Levi Strauss & Co.', concept: 'Agentic AI for Supply Chain Optimization', image: '/images/levis.png' },
            { id: 'antonioli-assortment-pricing', company: 'Antonioli', concept: 'AI for Assortment & Pricing Optimization', image: '/images/antonioli.png' },
            { id: 'mands-composable-ai', company: 'M&S', concept: 'Composable AI with MACH Architecture', image: '/images/ms.png' },
            { id: 'petco-agile-reinvention', company: 'Petco', concept: 'Agile Reinvention with Microservices', image: '/images/petco.png' }
        ]
    },
    'customer-engagement': {
        name: 'Customer Engagement',
        description: 'AI is reshaping customer interactions with 24/7 support, instant responses, and a deep understanding of customer sentiment.',
        cases: [
            { id: 'saks-agentforce', company: 'Saks', concept: 'AI for Frontline Enablement', image: '/images/saks.png', youtubeUrl: 'https://www.youtube.com/watch?v=XdQxbXAkQHc' },
            { id: 'dsw-support', company: 'DSW', concept: 'End-to-End AI-Powered Customer Support', image: '/images/dsw.png' },
            { id: 'pacsun-support-commerce', company: 'PacSun', concept: 'AI-Powered Conversational Commerce', image: '/images/pacsun.png' },
            { id: 'marriott-sentiment-analysis', company: 'Marriott International', concept: 'AI for Guest Sentiment Analysis', image: '/images/marriott.png' },
            { id: 'mands-contact-center', company: 'M&S', concept: 'AI-Powered Contact Center Transformation', image: '/images/mscc.png' },
            { id: 'bestbuy-genai-support', company: 'Best Buy', concept: 'Generative AI for Accelerated Support', image: '/images/bestbuy.png', youtubeUrl: 'https://www.youtube.com/watch?v=uLB665FUg9I' }
        ]
    },
    'generative-agentic-ai': {
        name: 'Generative & Agentic AI',
        description: 'Generative AI creates novel content, while Agentic AI performs autonomous tasks, opening new frontiers in design, marketing, and automation.',
        cases: [
            { id: 'puma-gen-ai-imagery', company: 'Puma', concept: 'AI-Powered Content Localization', image: '/images/puma.png', youtubeUrl: 'https://www.youtube.com/watch?v=XJpOkh_jXqY' },
            { id: 'mercer-ai-design', company: 'Mercer (formerly CALA)', concept: 'AI-Powered Fashion Supply Chain Platform', image: '/images/mercer.png' },
            { id: 'walmart-agentic-ai', company: 'Walmart', concept: 'Autonomous Personal Shopping Assistant', image: '/images/walmartassist.png' },
            { id: 'google-genai-shopping', company: 'Google', concept: 'AI-Powered Visual & Conversational Shopping', image: '/images/googleshopping.png' },
            { id: 'suzano-genai-materials', company: 'Suzano', concept: 'AI-Powered Sustainable Materials Management', image: '/images/Suzano.png' }
        ]
    },
    'phygital-experiences': {
        name: 'Phygital & In-Store Tech',
        description: 'Blending physical and digital to create seamless, engaging, and personalized in-store customer experiences that drive sales and loyalty.',
        cases: [
            { id: 'zara-omnichannel-flagship', company: 'Zara (Inditex)', concept: 'The Omnichannel Flagship Experience', image: '/images/zaramadrid.png', youtubeUrl: 'https://www.youtube.com/watch?v=p6DkV4QAhDs&t=6s' },
            { id: 'zegna-x-configurator', company: 'Zegna', concept: 'AI-Powered In-Store Co-Creation', image: '/images/zegnax.png' },
            { id: 'ae-interactive-fitting', company: 'American Eagle', concept: 'Connected Fitting Rooms', image: '/images/aeagle.png' },
            { id: 'browns-connected-store', company: 'Browns by Farfetch', concept: 'The Connected Retail Experience', image: '/images/browns.png' }
        ]
    },
    'sustainable-ethical-ai': {
        name: 'Sustainable & Ethical AI',
        description: 'Using AI to optimize resource use, minimize waste, and enhance supply chain transparency for more sustainable and ethical operations.',
        cases: [
            { id: 'tommy-hilfiger-zero-waste', company: 'Tommy Hilfiger', concept: 'Designing for Zero Waste with 3D Technology', image: '/images/tommy.png' },
            { id: 'trustrace-supply-chain', company: 'TrusTrace', concept: 'AI-Powered Supply Chain Transparency', image: '/images/trustrace.png' },
            { id: 'hm-digital-twins', company: 'H&M', concept: 'Digital Twins for Sustainable Design & Marketing', image: '/images/hmdigitaltwin.png' }
        ]
    },
    'platform-enablers': {
        name: 'Platform Enablers',
        description: 'Major technology platforms are providing the foundational AI infrastructure and retail-specific solutions that power industry-wide transformation.',
        cases: [
            { id: 'pepesto-b2ai', company: 'Pepesto', concept: 'The B2AI Grocery Shopping API', image: '/images/pepesto.png' },
            { id: 'msft-azure', company: 'Microsoft Azure', concept: 'Agentic AI Solutions for Retail', image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600' },
            { id: 'google-cloud', company: 'Google Cloud', concept: 'AI-Powered Retail Transformation', image: '/images/googleretail.png' },
            { id: 'aws-retail', company: 'Amazon Web Services', concept: 'Foundational Cloud & AI Services', image: '/images/aws.png' }
        ]
    },
    'concept-explainers': {
        name: 'Concept Explainers',
        description: 'Deep dives into the foundational technologies and strategic concepts driving the AI-powered retail revolution.',
        cases: [
            { id: '3dvd-digital-twins', company: 'Key Concept', concept: '3DVD & Digital Twins', image: 'https://images.unsplash.com/photo-1631975398299-80c550ea4df1?w=600' },
            { id: 'mach-architecture', company: 'Key Concept', concept: 'MACH Architecture', image: 'https://images.unsplash.com/photo-1542626991-a2f572aedfe8?w=600' }
        ]
    },
    'ask-ai': { name: 'Ask AI', description: 'Ask our AI expert about concepts in retail technology.' }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { presentationContext, useCaseData };
}