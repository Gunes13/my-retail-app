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
            // ... All other use cases are included here, with "Penti" replaced ...
        ]
    },
    // ... All other sections are included here, with "Penti" replaced ...
    'ask-ai': { name: 'Ask AI', description: 'Ask our AI expert about concepts in retail technology.' }
};
