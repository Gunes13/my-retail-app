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
            }
        ]
    },
    'intelligent-operations': {
        name: 'Intelligent Operations',
        description: 'AI is revolutionizing backend retail operations, making them more accurate, efficient, and responsive across the entire value chain.',
        cases: []
    },
    'customer-engagement': {
        name: 'Customer Engagement',
        description: 'AI is reshaping customer interactions with 24/7 support, instant responses, and a deep understanding of customer sentiment.',
        cases: []
    },
    'generative-agentic-ai': {
        name: 'Generative & Agentic AI',
        description: 'Generative AI creates novel content, while Agentic AI performs autonomous tasks, opening new frontiers in design, marketing, and automation.',
        cases: []
    },
    'phygital-experiences': {
        name: 'Phygital & In-Store Tech',
        description: 'Blending physical and digital to create seamless, engaging, and personalized in-store customer experiences that drive sales and loyalty.',
        cases: []
    },
    'sustainable-ethical-ai': {
        name: 'Sustainable & Ethical AI',
        description: 'Using AI to optimize resource use, minimize waste, and enhance supply chain transparency for more sustainable and ethical operations.',
        cases: []
    },
    'platform-enablers': {
        name: 'Platform Enablers',
        description: 'Major technology platforms are providing the foundational AI infrastructure and retail-specific solutions that power industry-wide transformation.',
        cases: [
             {
                id: "google-cloud",
                company: "Google Cloud",
                concept: "AI-Powered Retail Transformation",
                logo: "https://logo.clearbit.com/google.com",
                image: "/images/googleretail.png",
                imperativeLink: "Imperative 1: Market Growth & Adoption",
                isCustom: true,
                youtubeUrl: 'https://youtu.be/bIelmjhIAZ0',
                businessModel: "Google Cloud provides a comprehensive suite of AI solutions designed to transform retail by enhancing customer service, empowering employees, and generating creative content. By offering powerful platforms like Vertex AI and targeted AI agents, Google enables retailers to drive operational efficiency, deliver personalized experiences, and unlock new avenues for innovation and growth.",
                processSteps: [
                    {
                        icon: "feedback",
                        title: "Personalized Customer Engagement",
                        description: "Deploys AI agents like Carrefour's 'Hopla' assistant for personalized shopping suggestions and powers dynamic, data-driven marketing campaigns."
                    },
                    {
                        icon: "ai",
                        title: "Enhanced Operations & Innovation",
                        description: "Enables deeper data analytics and the use of generative AI for tasks like detecting production flaws, as explored by P&G."
                    },
                    {
                        icon: "human",
                        title: "Empowered Workforce",
                        description: "Provides AI-powered tools to streamline tasks for store associates, including workforce management and real-time access to product information."
                    }
                ],
                quantifiedImpact: [
                    {
                        metric: "40% & 45% Savings",
                        description: "Reduction in operating costs (40%) and energy consumption (45%) reported by Carrefour after migrating to Google Cloud Platform."
                    },
                    {
                        metric: "Vertex AI Platform",
                        description: "A unified platform empowering retailers to build, deploy, and manage custom AI applications using a mix of Google, third-party, and open-source models."
                    },
                    {
                        metric: "AI-Powered Creativity",
                        description: "Enables creative content generation for dynamic social media campaigns (Carrefour) and innovative product image analysis (P&G)."
                    }
                ],
                "strategicTakeaway": "Google Cloud's approach demonstrates the power of a unified data and AI platform. By enabling retailers like Carrefour to achieve significant operational savings, it creates the foundation to then invest in advanced, customer-facing AI like personalized marketing and conversational shopping assistants, proving a virtuous cycle of efficiency and innovation."
            }
        ]
    },
    'concept-explainers': {
        name: 'Concept Explainers',
        description: 'Deep dives into the foundational technologies and strategic concepts driving the AI-powered retail revolution.',
        cases: []
    },
    'ask-ai': { name: 'Ask AI', description: 'Ask our AI expert about concepts in retail technology.' }
};
