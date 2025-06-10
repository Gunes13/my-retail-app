export const presentationContext = `
Strategic Imperatives for Penti:
- Imperative 1: Market Growth & Adoption. The AI in retail market is growing rapidly.
- Imperative 2: AI as a Catalyst for new business models.
- Imperative 3: The Rise of AI Agents & 'Machine Customers'.
- Imperative 4: Driving Sustainable & Ethical Practices.
- Imperative 5: Building Agile Foundations (MACH Architecture).
- Imperative 6: Strategic Workforce Transformation.
`;

export const useCaseData = {
    'introduction': { name: 'Introduction', description: 'Welcome to the AI in Retail Explorer.' },
    'hyper-personalization': {
        name: 'Hyper-Personalization',
        description: 'Moving beyond broad segmentation to one-to-one engagement, AI leverages vast data to deliver individualized journeys, products, and interactions at scale.',
        cases: [
            { id: 'zalando-genai', company: 'Zalando', concept: 'The Algorithmic Fashion Companion', image: '/images/Zalando.png', isCustom: true, businessModel: "Zalando's strategy is to create a holistic 'Algorithmic Fashion Companion' that uses multiple AI capabilities to assist customers across their entire journey, providing curated styling, personalized fit advice, and engaging, trend-driven content.", strategicTakeaway: "For Penti, this shows that the future isn't about a single AI feature, but about weaving multiple AI tools together to assist the customer at every single touchpoint." },
            { id: 'walmart-semantic-search', company: 'Walmart', concept: 'AI-Powered Semantic Search & Product Attribution', image: '/images/walmart.jpg', isCustom: true, businessModel: "Walmart's strategy shifts from keyword to 'semantic' search, using generative AI and deep product tagging to make discovery more intuitive.", strategicTakeaway: "This highlights the critical importance of enriching product data with customer-centric language to power more intelligent and conversational discovery experiences." },
            { id: 'stitch-fix', company: 'Stitch Fix', concept: 'AI-Guided Personal Styling', image: '/images/stitchfix.png', isCustom: true, businessModel: 'Stitch Fix has built its entire operation around AI, creating an "AI-native" business model on a subscription basis where algorithms curate personalized clothing "Fixes".', strategicTakeaway: 'This illustrates how AI can be the core of a new retail paradigm, unlocking new ways to serve a customer base beyond traditional models.' },
            { id: 'the-yes', company: 'The Yes (Acquired by Pinterest)', concept: 'The Algorithmic Personal Store', image: '/images/yes.png', isCustom: true, businessModel: "The Yes pioneered a model centered on creating a unique, dynamic, and fully-personalized digital store for each user, creating a 'store of one'.", strategicTakeaway: "The Yes proves that a deep, granular understanding of a product's attributes, combined with a continuous user feedback loop, can create a powerful 'data moat'." },
            { id: 'target-realtime-personalization', company: 'Target', concept: 'Real-Time Personalization Engine', image: '/images/targetmicro.png', isCustom: true, businessModel: "Target transitioned from slow batch-based predictions to a real-time 'Personalization-as-a-Service' model to deliver recommendations in milliseconds.", strategicTakeaway: "Target’s investment in a real-time personalization infrastructure shows that speed is a crucial competitive advantage." },
            { id: 'zara-fast-fashion', company: 'Zara (Inditex)', concept: 'AI-Powered Trend Analysis & Rapid Design', image: '/images/zara.png', isCustom: true, businessModel: "Zara's model is built on 'just-in-time' fashion, using AI to create a real-time feedback loop between digital trends and in-store behavior to de-risk new product introductions.", strategicTakeaway: "Zara demonstrates that AI's greatest power isn't just predicting the future, but reacting to the present with incredible speed." },
            { id: 'starbucks-deep-brew', company: 'Starbucks', concept: 'AI-Powered Personalized Promotions', image: '/images/starbucks.png', isCustom: true, businessModel: "Starbucks leverages its massive loyalty program as a data-gathering engine for its 'Deep Brew' AI platform to deliver hyper-personalized offers.", strategicTakeaway: "Starbucks' success demonstrates the immense value of a strong data feedback loop from a loyalty program to drive profit and engagement." },
            { id: 'bold-metrics-fit-tech', company: 'Bold Metrics & Others', concept: 'AI-Powered "Better Fit" Technology', image: '/images/bold.png', isCustom: true, businessModel: "This technology tackles the massive cost of apparel returns by replacing generic size charts with a personalized, AI-driven size recommendation.", strategicTakeaway: "For Penti, implementing 'Better Fit Technology' is a direct assault on one of the biggest challenges in apparel e-commerce: returns." },
            { id: 'visual-search-discovery', company: 'Pinterest & ASOS', concept: 'AI-Powered Visual Search', image: '/images/pinterest.png', isCustom: true, businessModel: "Visual search technology shortens the path from inspiration to purchase by allowing users to search with images instead of words.", strategicTakeaway: "Visual search is becoming a critical top-of-funnel channel. Integrating a 'Style Match' feature into Penti's own app could capture customers at their moment of inspiration." }
        ]
    },
    'intelligent-operations': {
        name: 'Intelligent Operations',
        description: 'AI is revolutionizing backend retail operations, making them more accurate, efficient, and responsive.',
        cases: [
            { id: 'clo-set-workflow', company: 'CLO-SET', concept: 'The Collaborative 3D Workflow Platform', image: '/images/closet.png', isCustom: true, businessModel: "CLO-SET is a B2B platform that unifies the entire fashion product lifecycle into a single, collaborative digital workspace using 3D assets.", strategicTakeaway: "The maturation of platforms like CLO-SET shows that 3D design is a foundational workflow for modern fashion brands to increase speed and cut costs." },
            { id: 'walmart-replenishment', company: 'Walmart', concept: 'Automated AI Replenishment System', image: '/images/walmart.png', isCustom: true, businessModel: "Walmart uses AI to autonomously forecast demand and automate its massive replenishment process, freeing up employees for higher-value tasks.", strategicTakeaway: "Walmart's system is a prime example of using AI for autonomous decision-making in a core business process, shifting from recommendations to execution." },
            { id: 'shein-agile-pricing', company: 'SHEIN', concept: 'Real-Time Agile Pricing & Production', image: '/images/shein.png', isCustom: true, businessModel: "SHEIN's business model is a fully integrated, AI-driven 'test and repeat' system, using real-time data to test thousands of new styles in ultra-small batches.", strategicTakeaway: "SHEIN's success demonstrates the power of a fully integrated, AI-native retail model that blurs the lines between marketing, production, and pricing." },
            { id: 'hm-markdown-optimization', company: 'H&M', concept: 'AI-Powered Markdown Optimization', image: '/images/hmpricing.png', isCustom: true, businessModel: "H&M uses AI to make its traditional seasonal model more profitable by using proactive, data-driven price optimization and surgical markdowns.", strategicTakeaway: "H&M's strategy shows how AI can be a powerful tool for optimizing traditional retail models, driving immediate financial improvements without a complete supply chain overhaul." },
            { id: 'levis-agentic-ai', company: 'Levi Strauss & Co.', concept: 'Agentic AI for Supply Chain Optimization', image: '/images/levis.png', isCustom: true, businessModel: "Levi's leverages agentic AI to create a self-optimizing supply chain, replacing manual forecasting and inventory management with an autonomous system.", strategicTakeaway: "Levi's application of agentic AI demonstrates a shift from simple automation to autonomous operational management, creating a more resilient and efficient supply chain." },
            { id: 'antonioli-assortment-pricing', company: 'Antonioli', concept: 'AI for Assortment & Pricing Optimization', image: '/images/antonioli.png', isCustom: true, businessModel: "Luxury boutique Antonioli leverages AI to address two of retail's core challenges: what to stock and how to price it, using predictive analytics and dynamic pricing.", strategicTakeaway: "Antonioli's strategy shows that AI can sharpen the two most critical levers for a luxury player: buying and pricing." },
            { id: 'mands-composable-ai', company: 'Marks & Spencer (M&S)', concept: 'Composable AI with MACH Architecture', image: '/images/ms.png', isCustom: true, businessModel: "M&S champions a 'composable AI' strategy, enabled by a MACH architecture, to assemble a best-of-breed portfolio of AI solutions from various specialized partners.", strategicTakeaway: "M&S's composable strategy is a masterclass in future-proofing IT infrastructure, allowing the business to rapidly integrate the best tool for each specific challenge." },
            { id: 'petco-agile-reinvention', company: 'Petco', concept: 'Agile Reinvention with Microservices', image: '/images/petco.png', isCustom: true, businessModel: "Petco strategically moved from a traditional, monolithic application structure to a flexible, cloud-first microservices model to enable business agility.", strategicTakeaway: "Petco's transformation shows that investing in a modern, microservices-based foundation (like MACH) is a prerequisite for rapidly delivering seamless digital experiences." }
        ]
    },
    'customer-engagement': {
        name: 'Customer Engagement',
        description: 'AI is reshaping customer interactions with 24/7 support, instant responses, and a deep understanding of customer sentiment.',
        cases: [
             { id: 'saks-agentforce', company: 'Saks', concept: 'AI for Frontline Enablement', image: '/images/saks.png', isCustom: true, businessModel: "Saks uses AI to augment its human stylists, providing them with a 360-degree view of the customer to deliver a profoundly personal, data-driven service." },
             { id: 'dsw-support', company: 'DSW', concept: 'End-to-End AI-Powered Customer Support', image: '/images/dsw.png', isCustom: true, businessModel: "DSW implements a mature, end-to-end AI support strategy focused on efficiency and proactive, omnichannel self-service with backend automation." },
             { id: 'pacsun-support-commerce', company: 'PacSun', concept: 'AI-Powered Conversational Commerce', image: '/images/pacsun.png', isCustom: true, businessModel: "PacSun transforms its support function from a cost center into a direct revenue driver by using AI to turn support conversations into sales opportunities." },
             { id: 'marriott-sentiment-analysis', company: 'Marriott International', concept: 'AI for Guest Sentiment Analysis', image: '/images/marriott.png', isCustom: true, businessModel: "Marriott utilizes AI-powered sentiment analysis to process guest feedback from thousands of properties worldwide, allowing the company to proactively address issues." },
             { id: 'mands-contact-center', company: 'M&S', concept: 'AI-Powered Contact Center Transformation', image: '/images/mscc.png', isCustom: true, businessModel: "M&S transformed its customer service by replacing a legacy system with Google Cloud Contact Center AI (CCAI) to improve efficiency and customer experience." },
             { id: 'bestbuy-genai-support', company: 'Best Buy', concept: 'Generative AI for Accelerated Support', image: '/images/bestbuy.png', isCustom: true, youtubeUrl: 'https://www.youtube.com/watch?v=uLB665FUg9I', businessModel: "Best Buy is implementing a multi-faceted generative AI strategy to enhance both efficiency and customer experience by augmenting its human workforce with AI tools." }
        ]
    },
    'generative-agentic-ai': {
        name: 'Generative & Agentic AI',
        description: 'Generative AI creates novel content, while Agentic AI performs autonomous tasks, opening new frontiers in design, marketing, and automation.',
        cases: [
            { id: 'puma-gen-ai-imagery', company: 'Puma', concept: 'AI-Powered Content Localization', image: '/images/puma.png', isCustom: true, youtubeUrl: 'https://www.youtube.com/watch?v=XJpOkh_jXqY', businessModel: "Puma uses Google's Generative AI to create localized product imagery at scale, replacing the need for costly regional photoshoots." },
            { id: 'mercer-ai-design', company: 'Mercer (formerly CALA)', concept: 'AI-Powered Fashion Supply Chain Platform', image: '/images/mercer.png', isCustom: true, businessModel: "Mercer provides an end-to-end platform that unifies the fashion design and supply chain process, leveraging Generative AI for initial ideation." },
            { id: 'walmart-agentic-ai', company: 'Walmart', concept: 'Autonomous Personal Shopping Assistant', image: '/images/walmartassist.png', isCustom: true, businessModel: "Walmart is developing autonomous AI agents to act as personal shoppers, aiming to manage a customer's entire shopping journey with proprietary LLMs." },
            { id: 'google-genai-shopping', company: 'Google', concept: 'AI-Powered Visual & Conversational Shopping', image: '/images/googleshopping.png', isCustom: true, businessModel: "Google is integrating its advanced AI capabilities (Gemini) directly into its core search and shopping platforms to transform online shopping into a visual, conversational journey." },
            { id: 'suzano-genai-materials', company: 'Suzano', concept: 'AI-Powered Sustainable Materials Management', image: '/images/Suzano.png', isCustom: true, businessModel: "Suzano leverages generative AI as an internal enterprise tool to unlock the value of its existing data by creating a natural language interface for its complex SAP materials data." }
        ]
    },
    'phygital-experiences': {
        name: 'Phygital & In-Store Tech',
        description: 'Blending physical and digital to create seamless, engaging, and personalized in-store customer experiences that drive sales and loyalty.',
        cases: [
            { id: 'zara-omnichannel-flagship', company: 'Zara (Inditex)', concept: 'The Omnichannel Flagship Experience', image: '/images/zaramadrid.png', isCustom: true, youtubeUrl: 'https://www.youtube.com/watch?v=p6DkV4QAhDs&t=6s', businessModel: "Zara's flagship strategy deeply integrates its physical stores with its digital app, using RFID to power everything from smart fitting rooms to robotic online order pickup." },
            { id: 'zegna-x-configurator', company: 'Zegna', concept: 'AI-Powered In-Store Co-Creation', image: '/images/zegnax.png', isCustom: true, businessModel: "Zegna's strategy elevates luxury 'clienteling' by using an AI-powered platform to offer near-limitless customization in-store, making the customer a co-creator." },
            { id: 'ae-interactive-fitting', company: 'American Eagle', concept: 'Connected Fitting Rooms', image: '/images/aeagle.png', isCustom: true, businessModel: "The strategy is to embed digital commerce capabilities into the fitting room, equipping stalls with interactive tablets to remove friction for shoppers." },
            { id: 'browns-connected-store', company: 'Browns by Farfetch', concept: 'The Connected Retail Experience', image: '/images/browns.png', isCustom: true, businessModel: 'The model is to create a true "phygital" environment by using technology to link a customer\'s digital profile with their physical in-store journey, augmenting the skills of store associates.' }
        ]
    },
    'sustainable-ethical-ai': {
        name: 'Sustainable & Ethical AI',
        description: 'Using AI to optimize resource use, minimize waste, and enhance supply chain transparency for more sustainable and ethical operations.',
        cases: [
            { id: 'tommy-hilfiger-zero-waste', company: 'Tommy Hilfiger', concept: 'Designing for Zero Waste with 3D Technology', image: '/images/tommy.png', isCustom: true, businessModel: "Tommy Hilfiger is strategically leveraging its proprietary 3D design incubator to fundamentally reduce its environmental footprint by eliminating physical samples." },
            { id: 'trustrace-supply-chain', company: 'TrusTrace', concept: 'AI-Powered Supply Chain Transparency', image: '/images/trustrace.png', isCustom: true, businessModel: "TrusTrace provides an AI-powered platform to global fashion brands to unify fragmented supply chain data, enabling proactive risk management and verifiable sustainability claims." },
            { id: 'hm-digital-twins', company: 'H&M', concept: 'Digital Twins for Sustainable Design & Marketing', image: '/images/hmdigitaltwin.png', isCustom: true, businessModel: "H&M is strategically using digital twin technology for both its garments and models to create a more sustainable workflow, reducing prototypes and the need for photoshoots." }
        ]
    },
    'platform-enablers': {
        name: 'Platform Enablers',
        description: 'Major technology platforms are providing the foundational AI infrastructure and retail-specific solutions that power industry-wide transformation.',
        cases: [
            { id: 'pepesto-b2ai', company: 'Pepesto', concept: 'The B2AI Grocery Shopping API', image: '/images/pepesto.png', isCustom: true, businessModel: "Pepesto provides a specialized API to other AI developers, abstracting away the complexity of the online grocery ecosystem for any AI agent needing to place real orders." },
            { id: 'msft-azure', company: 'Microsoft Azure', concept: 'Agentic AI Solutions for Retail', image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600', isCustom: true, businessModel: "Microsoft's 'Retail Ready' AI vision provides a comprehensive suite of agentic AI solutions designed to address immediate retail needs while building for the future." },
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