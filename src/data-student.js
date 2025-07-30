export const presentationContext = `
Strategic Imperatives:
- Imperative 1: Market Growth & Adoption. The AI in retail market is growing rapidly. Generative AI in retail is projected to grow from $1.015B in 2025 to $17.268B by 2034. 89% of retailers are expected to use AI by 2025.
- Imperative 2: AI as a Catalyst. AI is moving from process optimization to enabling entirely new business models, creating data-driven differentiation and new Al-enabled services.
- Imperative 3: The Rise of AI Agents (and the Dawn of the 'Machine Customer'). This involves sophisticated AI agents with reasoning and planning capabilities making autonomous purchasing decisions, requiring businesses to adopt B2AI (Business-to-AI) and API-first strategies.
- Imperative 4: Driving Sustainable & Ethical Practices. AI can optimize resource use, minimize waste, and enhance supply chain transparency. 90% of shoppers believe retailers should disclose AI data use.
- Imperative 5: Building Agile Foundations for AI Success. A MACH (Microservices, API-first, Cloud-native, Headless) architecture is crucial for flexibility, faster time-to-market, and avoiding vendor lock-in.
- Imperative 6: Strategic Workforce Transformation. The focus must be on fostering AI literacy, redefining roles for human-AI collaboration, and upskilling the workforce.

Key AI-Driven Transformations:
- The synergy of three key technologies: Multimodal AI (the ability to understand diverse data like images/video), Generative AI (the ability to create novel content), and Agentic AI (the ability to act and perform complex tasks).
- Hyper-Personalization at Scale: Moving to true one-to-one engagement. 91% of consumers prefer personalized offers.
- Intelligent Operations: Improving accuracy and efficiency in backend operations like demand forecasting, inventory management, and empowering knowledge work with assistive search.
- Revolutionizing Customer Engagement: Using AI for 24/7 support, personalized assistance, and proactive problem-solving via 'Agentic AI'.
- Enhancing In-Store & Phygital Experiences: Blending digital and physical through smart stores, virtual try-on, clienteling tools, and frictionless checkout.
- Dynamic Pricing: Using AI for real-time price optimization, which requires ethical guidelines to maintain customer trust.

Challenges & Recommendations:
- Challenges are layered: Foundational (technical/data debt), Organizational (talent, ROI, culture), and Strategic (prioritization).
- A recommended 3-Phase Roadmap: 1. Discovery & Strategy (Assess maturity, prioritize use cases). 2. Foundational Build & Pilot Execution (Build infrastructure while proving value with a pilot). 3. Scale & Enterprise Transformation (Roll out successful solutions and drive cultural adoption).
`;

export const useCaseData = {
    'introduction': { name: 'Introduction', description: 'Welcome to the AI in Retail Explorer. Please select a category from the navigation above to explore the use cases.' },
    'hyper-personalization': {
        name: 'Hyper-Personalization',
        description: 'Moving beyond broad segmentation to one-to-one engagement, AI leverages vast data to deliver individualized journeys, products, and interactions at scale.',
        cases: [
            {
                id: 'zalando-genai',
                company: 'Zalando',
                concept: 'The Algorithmic Fashion Companion',
                logo: 'https://logo.clearbit.com/zalando.com',
                image: '/images/Zalando.png',
                imperativeLink: 'Transformation 1: Hyper-Personalization at Scale',
                isCustom: true,
                youtubeUrl: 'https://www.youtube.com/watch?v=Bp272rQQJJo',
                businessModel: "Zalando's strategy is to create a holistic 'Algorithmic Fashion Companion' that uses multiple AI capabilities to assist customers across their entire journey. The model goes beyond simple recommendations to provide curated styling, personalized fit advice, and engaging, trend-driven content, making the shopping experience deeply personal and sticky.",
                processSteps: [
                    { icon: 'ai', title: 'AI-Powered Curation & Styling', description: 'An AI fashion assistant provides curated suggestions and entire outfit recommendations based on a customer\'s free-form queries and preferences.' },
                    { icon: 'feedback', title: 'Personalized Size & Fit Prediction', description: 'The system uses data on purchase history, brand affinities, and, crucially, past returns to predict the best size for a customer, aiming to reduce return rates.' },
                    { icon: 'human', title: 'Localized & Multilingual Support', description: 'The AI is trained to handle multiple languages and dialects, tracking city-based trends to provide more culturally and geographically relevant style advice.' },
                    { icon: 'data', title: 'Trend-Responsive Content', description: 'Zalando uses Generative AI to create marketing imagery in days instead of weeks, allowing it to rapidly build campaigns around fast-moving micro-trends.' }
                ],
                quantifiedImpact: [
                    { metric: 'Algorithmic Fashion Companion', description: 'The AI acts as a personal stylist, offering outfit suggestions and complementary accessories, not just single products.' },
                    { metric: 'Reduced Returns via Sizing', description: 'A core goal of the AI is to leverage customer data to provide better size recommendations, directly tackling a major cost driver in apparel e-commerce.' },
                    { metric: 'Hyper-Responsive Marketing', description: 'Generative AI reduces content creation time from 6-8 weeks to just 3-4 days, enabling immediate campaigns for emerging trends.' },
                    { metric: 'Localized Engagement', description: 'By tracking city-level trends and understanding local nuances, the AI can offer far more relevant and engaging recommendations.' }
                ],
                strategicTakeaway: "Zalando is building a comprehensive AI 'companion' that combines multiple capabilities (personalization, size prediction, generative content) to create a deeply integrated and sticky customer experience. For a leading retailer, this shows that the future isn't about a single AI feature, but about weaving multiple AI tools together to assist the customer at every single touchpoint, from inspiration and discovery to post-purchase satisfaction.",
                relatedConcepts: [
                    { id: 'data-feedback-loop', name: 'The Data Feedback Loop' },
                    { id: 'multimodal-ai', name: 'Multimodal AI' }
                ]
            },
            {
                id: 'walmart-semantic-search',
                company: 'Walmart',
                concept: 'AI-Powered Semantic Search & Product Attribution',
                logo: 'https://logo.clearbit.com/walmart.com',
                image: '/images/walmartsemantic.png',
                imperativeLink: 'Transformation 1: Hyper-Personalization at Scale',
                isCustom: true,
                youtubeUrl: null,
                businessModel: "Walmart's strategy is to shift from simple keyword search to a 'use case' or 'semantic' search model. By using generative AI powered by a deep layer of AI-driven product attribute tagging, Walmart makes product discovery more intuitive and human-like. This approach captures customer intent at a higher level, improving conversion and creating a competitive advantage.",
                processSteps: [
                    { icon: 'ai', title: 'AI Product Attribution (Backend)', description: 'AI enriches every product with hundreds of "customer-centric" attributes beyond simple legacy tags, such as tagging a TV as "good for sports."' },
                    { icon: 'human', title: 'Generative AI Search Query', description: 'A customer uses the app to search for a use case in natural language, such as "Help me plan a football watch party."' },
                    { icon: 'data', title: 'Cross-Category Curation', description: "The generative AI understands the 'intent' behind the query and curates a list of relevant products across multiple categories, like snacks, drinks, and electronics." },
                    { icon: 'feedback', title: 'Personalized Results', description: "The results are personalized based on the customer's history, creating a unique 'store' for that specific need and solving the problem of customers not finding what they're looking for." }
                ],
                quantifiedImpact: [
                    { metric: 'Use-Case Search', description: 'The system allows searching by occasion or use case, not just product names.' },
                    { metric: 'Richer Product Data', description: 'Transforms products with a few attributes into products with many, unlocking their relevance in search and recommendations.' },
                    { metric: 'iOS Launch', description: 'The generative AI-powered search feature was initially launched on the iOS platform.' },
                    { metric: 'Improved Discovery', description: 'Solves the core problem of customers not being able to find products because they don\'t use the retailer\'s "official" keywords.' }
                ],
                strategicTakeaway: "Walmart's move demonstrates that the future of e-commerce search is semantic, not just keyword-based. Winning requires a deep investment in a foundational 'product attribution' data layer that teaches the AI how customers think about products. For a leading retailer, this highlights the critical importance of enriching product data with customer-centric language to power more intelligent and conversational discovery experiences.",
                relatedConcepts: [
                    { id: 'product-attribution', name: 'AI-Powered Product Attribution' },
                    { id: 'multimodal-ai', name: 'Multimodal AI' }
                ]
            },
            {
                id: 'stitch-fix',
                company: 'Stitch Fix',
                concept: 'AI-Guided Personal Styling',
                logo: 'https://logo.clearbit.com/stitchfix.com',
                image: '/images/stitchfix.png',
                imperativeLink: 'Imperative 2: AI as a Catalyst',
                isCustom: true,
                youtubeUrl: null,
                businessModel: 'Stitch Fix has built its entire operation around AI, creating an "AI-native" business model. It operates on a subscription basis where customers pay a styling fee in return for curated "Fixes." This moves beyond traditional retail by acting as an AI-guided curation service rather than a simple storefront.',
                processSteps: [
                    { icon: 'data', title: 'Data Collection', description: 'Gathers rich customer data from style quizzes, direct feedback, purchase history, and stated preferences.' },
                    { icon: 'ai', title: 'AI Curation', description: 'Sophisticated algorithms analyze the data to curate a hyper-personalized selection of clothing, in essence acting as an early "machine customer" by making selections on the user\'s behalf.' },
                    { icon: 'human', title: 'Human Stylist Review', description: 'Human stylists collaborate with the AI, refining its data-driven suggestions with personal touch and nuance.' },
                    { icon: 'feedback', title: 'Customer Feedback Loop', description: 'Feedback on each "Fix" is fed back into the algorithms, continuously improving future recommendations.' }
                ],
                quantifiedImpact: [
                    { metric: '75%', description: 'of clothing selections are driven by AI recommendations.' },
                    { metric: '40%', description: 'increase in Average Order Value (AOV) from personalization.' },
                    { metric: '15%', description: 'improvement in customer retention rates.' },
                    { metric: '$150M', description: 'in annual cost savings attributed to AI efficiencies.' }
                ],
                strategicTakeaway: 'This illustrates how AI can be the core of a new retail paradigm, rather than just an add-on, unlocking new ways to serve a customer base beyond traditional models.',
                relatedConcepts: [{ id: 'data-feedback-loop', name: 'The Data Feedback Loop' }]
            },
            {
                id: 'the-yes',
                company: 'The Yes (Acquired by Pinterest)',
                concept: 'The Algorithmic Personal Store',
                logo: 'https://logo.clearbit.com/pinterest.com',
                image: '/images/yes.png',
                imperativeLink: 'Imperative 2: AI as a Catalyst',
                isCustom: true,
                youtubeUrl: null,
                businessModel: "The Yes pioneered a business model centered on creating a unique, dynamic, and fully-personalized digital store for each user. Instead of presenting a static catalog, its AI created a 'store of one,' turning the entire shopping experience into a data-driven service. This model's value was validated by its strategic acquisition by Pinterest, which sought to integrate this deep personalization technology.",
                processSteps: [
                    {
                        icon: 'data',
                        title: 'Onboarding & Data Collection',
                        description: 'Users begin with an onboarding quiz to establish foundational data on their style, sizing, and budget preferences.'
                    },
                    {
                        icon: 'ai',
                        title: 'AI-Powered Curation',
                        description: 'A sophisticated algorithm processes user data against a vast product catalog, each of the 60,000 items tagged with over 300 attributes, to build a unique shopping feed.'
                    },
                    {
                        icon: 'feedback',
                        title: 'Dynamic Feedback Loop',
                        description: 'The user continuously refines the algorithm by providing simple "YES" or "NO" feedback on presented items, creating a real-time data stream for the AI to learn from.'
                    },
                    {
                        icon: 'human',
                        title: 'The Personalized Store',
                        description: 'The outcome is a completely individualized shopping experience that functions as a personal store, adapting and evolving with every single interaction.'
                    }
                ],
                quantifiedImpact: [
                    {
                        metric: 'Acquired by Pinterest',
                        description: "The platform's deep personalization technology and data-driven approach were so valuable they led to a strategic acquisition by Pinterest."
                    },
                    {
                        metric: '300+ Attributes',
                        description: 'Utilized a highly detailed fashion taxonomy, describing each item with over 300 distinct attributes for granular matching and recommendations.'
                    },
                    {
                        metric: '60,000+ Items',
                        description: 'Personalized a unique shopping feed for each user from a massive, multi-brand assortment of over 60,000 items.'
                    }
                ],
                strategicTakeaway: "The Yes proves that a deep, granular understanding of a product's attributes, combined with a continuous user feedback loop, can create a powerful 'data moat.' This AI-driven differentiation makes the customer experience so unique that it becomes a core competitive advantage.",
                relatedConcepts: [
                    { id: 'product-attribution', name: 'AI-Powered Product Attribution' },
                    { id: 'data-feedback-loop', name: 'The Data Feedback Loop' }
                ]
            },
            {
                id: 'target-realtime-personalization',
                company: 'Target',
                concept: 'Real-Time Personalization Engine',
                logo: 'https://logo.clearbit.com/target.com',
                image: '/images/targetmicro.png',
                imperativeLink: 'Imperative 2: AI as a Catalyst',
                isCustom: true,
                youtubeUrl: null,
                businessModel: "Target transitioned from slow batch-based predictions to a real-time 'Personalization-as-a-Service' model. This in-house AI platform uses a microservices architecture to ingest live customer signals and deliver personalized recommendations in milliseconds across its app and website, aiming to create a unique 'Target of one' for every shopper.",
                processSteps: [
                    { icon: 'data', title: 'Live Signal Ingestion', description: 'The personalization engine ingests real-time user interactions (clickstream data) from the Target app and website.' },
                    { icon: 'ai', title: 'Real-Time AI Scoring', description: 'A suite of specialized model microservices scores deep learning models in real-time, leveraging a feature store that contains aggregated guest preferences.' },
                    { icon: 'human', title: 'Personalized Recommendation Delivery', description: 'The engine delivers billions of individually filtered and re-ranked product recommendations back to the customer on the app or website with less than 50ms latency.' },
                    { icon: 'feedback', title: 'Continuous Model Improvement', description: 'Offline, a Hadoop cluster processes data to generate and update model files, which are stored in GCP buckets and loaded by the microservices, ensuring continuous learning.' }
                ],
                quantifiedImpact: [
                    { metric: '$4 Billion+', description: 'In attributable demand generated by the real-time personalization engine in a single year (2022).' },
                    { metric: '169 Billion', description: 'Personalized recommendations served to guests in 2022.' },
                    { metric: '50ms Latency', description: 'The service level agreement (SLA) for delivering recommendations, enabling a truly real-time experience.' },
                    { metric: 'Microservices Architecture', description: 'Transitioned from a monolithic batch system to an agile and scalable real-time AI platform.' }
                ],
                strategicTakeaway: "Target’s investment in a real-time personalization infrastructure shows that speed is a crucial competitive advantage. By moving beyond daily batch updates to millisecond-level recommendations, they can capture customer intent at the exact moment of interest. For a leading retailer, this demonstrates the strategic value of an agile, API-driven architecture (like MACH) that can support real-time AI, making customer interactions immediately relevant and more profitable.",
                relatedConcepts: [
                    { id: 'mach-architecture', name: 'MACH Architecture' },
                    { id: 'data-feedback-loop', name: 'The Data Feedback Loop' }
                ]
            },
            {
                id: 'zara-fast-fashion',
                company: 'Zara (Inditex)',
                concept: 'AI-Powered Trend Analysis & Rapid Design',
                logo: 'https://logo.clearbit.com/zara.com',
                image: '/images/zara.png',
                imperativeLink: 'Imperative 2: AI as a Catalyst',
                isCustom: true,
                youtubeUrl: null,
                businessModel: "Zara's business model is built on 'just-in-time' fashion, directly challenging traditional seasonal forecasting. By using AI to create a real-time feedback loop between digital trends and in-store customer behavior, Zara de-risks new product introductions. This allows the company to produce smaller, highly-targeted batches with confidence, ensuring new styles are precisely what the market is demanding at that exact moment.",
                processSteps: [
                    {
                        icon: 'ai',
                        title: 'AI-Powered Digital Trendspotting',
                        description: 'AI algorithms continuously monitor social media, blogs, and online communities to identify emerging trends, track influencer styles, and analyze consumer sentiment using NLP.'
                    },
                    {
                        icon: 'human',
                        title: 'In-Store Human Intelligence',
                        description: 'Store managers and associates act as intelligence gatherers, systematically collecting crucial data on what customers ask for, try on, and comment on.'
                    },
                    {
                        icon: 'data',
                        title: 'Centralized Data Analysis',
                        description: 'Both the online AI insights and offline human feedback are fed into a central analytics platform, where the combined data is processed to generate actionable insights.'
                    },
                    {
                        icon: 'feedback',
                        title: 'Rapid Design & Production Cycle',
                        description: "Designers use these data-driven insights to validate concepts and accelerate the creative process, enabling Zara's famously agile supply chain to respond."
                    }
                ],
                quantifiedImpact: [
                    {
                        metric: '2-3 Weeks',
                        description: 'Design-to-retail cycle time, a fraction of the industry average, enabled by real-time data analysis.'
                    },
                    {
                        metric: 'Just-in-Time Production',
                        description: 'Eliminated reliance on traditional seasonal forecasting in favor of a highly responsive, data-driven production model.'
                    },
                    {
                        metric: 'Reduced Markdowns',
                        description: 'Minimizes overproduction and end-of-season markdowns by aligning production closely with validated, real-time demand.'
                    }
                ],
                strategicTakeaway: "Zara demonstrates that AI's greatest power isn't just predicting the future, but reacting to the present with incredible speed. By fusing AI-driven digital listening with human-powered in-store intelligence, they have created a highly-attuned system that validates demand before committing to large-scale production."
            },
            {
                id: 'starbucks-deep-brew',
                company: 'Starbucks',
                concept: 'AI-Powered Personalized Promotions',
                logo: 'https://logo.clearbit.com/starbucks.com',
                image: '/images/starbucks.png',
                imperativeLink: 'Imperative 2: AI as a Catalyst',
                isCustom: true,
                youtubeUrl: null,
                businessModel: "Starbucks' business model leverages its massive Starbucks Rewards loyalty program as a data-gathering engine. The 'Deep Brew' AI platform then processes this rich data to move beyond generic marketing, creating a hyper-personalized experience that delivers individualized offers and recommendations to millions of customers via its mobile app, driving engagement and higher ROI.",
                processSteps: [
                    { icon: 'data', title: 'Data Collection from Loyalty Program', description: 'Gathers extensive data from millions of Rewards members, including purchase history, location, in-app behavior, and contextual information like weather.' },
                    { icon: 'ai', title: 'AI Analysis & Profiling', description: "The Deep Brew AI platform analyzes the data to create a comprehensive profile of each customer, understanding their unique habits and preferences." },
                    { icon: 'feedback', title: 'Personalized Offer Generation', description: 'Based on the user profile, the AI generates tailored incentives, such as discounts on favorite items, "Bonus Star" challenges, and recommendations for new products.' },
                    { icon: 'human', title: 'Targeted Delivery & Engagement', description: 'Personalized offers are delivered directly to customers through the mobile app, encouraging incremental purchases and fostering a stronger brand connection.' }
                ],
                quantifiedImpact: [
                    { metric: '30%', description: 'Increase in marketing Return on Investment (ROI) from personalized offers.' },
                    { metric: '15%', description: 'Rise in customer engagement levels from tailored incentives.' },
                    { metric: 'Higher Conversion', description: 'Personalized offers drive higher conversion rates compared to generic promotions.' },
                    { metric: 'Improved Loyalty', description: 'The tailored experience fosters a stronger, long-term connection with the brand, encouraging repeat business.' }
                ],
                strategicTakeaway: "Starbucks' success with Deep Brew demonstrates the immense value of a strong data feedback loop from a loyalty program. For a leading retailer, this shows that investing in AI to understand customers on a granular level can transform marketing from a cost center into a significant profit driver, creating a win-win scenario where customers receive valuable offers and the business achieves a substantial return.",
                relatedConcepts: [
                    { id: 'data-feedback-loop', name: 'The Data Feedback Loop' },
                    { id: 'dynamic-pricing-promotions', name: 'Dynamic Pricing & Promotion Optimization' }
                ]
            },
            {
                "id": "bold-metrics-fit-tech",
                "company": "Bold Metrics & Others",
                "concept": "AI-Powered \"Better Fit\" Technology",
                "logo": "https://logo.clearbit.com/boldmetrics.com",
                "image": "/images/bold.png",
                "imperativeLink": "Transformation 1: Hyper-Personalization at Scale",
                "isCustom": true,
                "youtubeUrl": null,
                "businessModel": "This technology tackles the massive cost of apparel returns by replacing generic size charts with a personalized, AI-driven recommendation. Companies like Bold Metrics create a 'digital twin' of a shopper by using AI and a vast database of body scans to accurately predict detailed body measurements from just a few simple user inputs. This creates a highly accurate, personalized shopping experience that increases customer confidence and reduces costly returns.",
                "processSteps": [
                    { "icon": "data", "title": "Simple Data Input", "description": "A user provides a few simple data points such as their height, weight, and typical clothing size, rather than using a measuring tape." },
                    { "icon": "ai", "title": "AI Predicts 'Digital Twin'", "description": "Sophisticated AI algorithms process the input against a massive database of body scan data to accurately predict 50+ detailed body measurements for that specific user." },
                    { "icon": "human", "title": "Garment Matching", "description": "The user's predicted measurements (their 'digital twin') are compared against the specific technical specifications of a garment to determine the ideal fit." },
                    { "icon": "feedback", "title": "Personalized Size Recommendation", "description": "The system provides a highly accurate size recommendation for that specific item, eliminating the guesswork that leads to bracketing and returns." }
                ],
                "quantifiedImpact": [
                    { "metric": ">20%", "description": "Reduction in return rates demonstrated in some case studies for retail partners using this technology." },
                    { "metric": "50+ Measurements", "description": "Accurately predicts over 50 different body measurements to create a detailed 'digital twin' of the shopper." },
                    { "metric": "34% to 53%", "description": "The range of online apparel returns attributed to incorrect fit, representing the core problem this technology solves." },
                    { "metric": "Increased Loyalty", "description": "A positive and successful shopping experience fosters brand loyalty and encourages repeat business." }
                ],
                "strategicTakeaway": "For a leading retailer, implementing 'Better Fit Technology' is a direct assault on one of the biggest challenges in apparel e-commerce: returns. This isn't just a defensive move to cut costs; it's a strategic tool to build customer trust, increase conversion rates, and gather invaluable data that can inform future product design and manufacturing for a better fit across all collections."
            },
            {
                id: 'visual-search-discovery',
                company: 'Pinterest & ASOS',
                concept: 'AI-Powered Visual Search',
                logo: 'https://logo.clearbit.com/pinterest.com',
                image: '/images/pinterest.png',
                imperativeLink: 'Transformation 1: Hyper-Personalization at Scale',
                isCustom: true,
                youtubeUrl: null,
                businessModel: "Visual search technology, pioneered by platforms like Pinterest and integrated into retailers like ASOS, creates an entirely new channel for product discovery. The business model is to shorten the path from inspiration to purchase by allowing users to search with images instead of words. This captures high-intent customers at the exact moment of discovery, turning any visual content into a potential storefront and driving significant engagement.",
                processSteps: [
                    { icon: 'human', title: 'Capture Inspiration', description: 'A user captures a photo of an item in the real world or uploads a screenshot of an outfit from social media.' },
                    { icon: 'ai', title: 'AI Visual Analysis', description: 'Sophisticated computer vision algorithms analyze the image, identifying key attributes like color, pattern, shape, and style.' },
                    { icon: 'data', title: 'Database Matching', description: "The AI cross-references the visual data against a massive product catalog, like ASOS's 85,000+ items, to find matches." },
                    { icon: 'feedback', title: 'Surface Similar Products', description: 'The platform presents the user with the exact item or a curated list of visually similar products available for immediate purchase.' }
                ],
                quantifiedImpact: [
                    { metric: '8-10%', description: 'Potential conversion rates for visual search, which can be significantly higher than traditional text-based search.' },
                    { metric: '80%', description: 'of weekly Pinterest users have discovered a new brand or product on the platform, highlighting its power for discovery.' },
                    { metric: '85,000+', description: "The number of products ASOS's Style Match tool scours to find visually similar items for customers." },
                    { metric: 'Reduced Friction', description: 'Removes the challenge of trying to describe a visual item with keywords, creating a more intuitive and satisfying user experience.' }
                ],
                strategicTakeaway: "Visual search is becoming a critical top-of-funnel channel. For a leading retailer, this means ensuring products are visually indexed and discoverable on major platforms like Pinterest is essential. Furthermore, integrating a 'Style Match' feature into a leading retailer's own app could capture customers at their moment of inspiration, guiding them seamlessly from a social media screenshot to a specific a leading retailer product page, thereby boosting engagement and conversion.",
                relatedConcepts: [{ id: 'multimodal-ai', name: 'Multimodal AI' }]
            }
        ]
    },
    'intelligent-operations': {
        name: 'Intelligent Operations',
        description: 'AI is revolutionizing backend retail operations, making them more accurate, efficient, and responsive across the entire value chain.',
        cases: [
            // ... (cases)
        ]
    },
    'customer-engagement': {
        name: 'Customer Engagement',
        description: 'AI is reshaping customer interactions with 24/7 support, instant responses, and a deep understanding of customer sentiment.',
        cases: [
            // ... (cases)
        ]
    },
    'generative-agentic-ai': {
        name: 'Generative & Agentic AI',
        description: 'Generative AI creates novel content, while Agentic AI performs autonomous tasks, opening new frontiers in design, marketing, and automation.',
        cases: [
            // ... (cases)
        ]
    },
    'phygital-experiences': {
        name: 'Phygital & In-Store Tech',
        description: 'Blending physical and digital to create seamless, engaging, and personalized in-store customer experiences that drive sales and loyalty.',
        cases: [
            // ... (cases)
        ]
    },
    'sustainable-ethical-ai': {
        name: 'Sustainable & Ethical AI',
        description: 'Using AI to optimize resource use, minimize waste, and enhance supply chain transparency for more sustainable and ethical operations.',
        cases: [
            // ... (cases)
        ]
    },
    'platform-enablers': {
        name: 'Platform Enablers',
        description: 'Major technology platforms are providing the foundational AI infrastructure and retail-specific solutions that power industry-wide transformation.',
        cases: [
            // ... (cases)
        ]
    },
    'concept-explainers': {
        name: 'Concept Explainers',
        description: 'Deep dives into the foundational technologies and strategic concepts driving the AI-powered retail revolution.',
        cases: [
            // ... (cases)
        ]
    },
    'ask-ai': { name: 'Ask AI', description: 'Ask our AI expert about concepts in retail technology.' }
};
