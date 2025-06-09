export const presentationContext = `
Strategic Imperatives for Penti:
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
                image: 'Zalando.png',
                imperativeLink: 'Transformation 1: Hyper-Personalization at Scale',
                isCustom: true,
                youtubeUrl: null,
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
                strategicTakeaway: "Zalando is building a comprehensive AI 'companion' that combines multiple capabilities (personalization, size prediction, generative content) to create a deeply integrated and sticky customer experience. For Penti, this shows that the future isn't about a single AI feature, but about weaving multiple AI tools together to assist the customer at every single touchpoint, from inspiration and discovery to post-purchase satisfaction.",
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
                image: 'walmartsemantic.png',
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
                strategicTakeaway: "Walmart's move demonstrates that the future of e-commerce search is semantic, not just keyword-based. Winning requires a deep investment in a foundational 'product attribution' data layer that teaches the AI how customers think about products. For Penti, this highlights the critical importance of enriching product data with customer-centric language to power more intelligent and conversational discovery experiences.",
                relatedConcepts: [
                    { id: 'product-attribution', name: 'AI-Powered Product Attribution' },
                    { id: 'multimodal-ai', name: 'Multimodal AI' }
                ]
            },
            // ... all other use cases remain the same ...
            {
                id: 'multimodal-ai',
                company: 'Key Concept',
                concept: 'Multimodal AI',
                logo: 'https://storage.googleapis.com/gemini-generative-ai-media/v1/314159265358/images/15856149-a29d-4848-8373-3f12b7d41a7d.png',
                image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=600',
                imperativeLink: 'Transformation 4: Generative & Agentic AI',
                isCustom: true,
                youtubeUrl: null,
                businessModel: "Multimodal AI is a foundational capability that allows AI systems to understand, interpret, and reason about information from multiple data types—such as text, images, audio, and video—simultaneously. For retail, which is an inherently visual and sensory industry, this is a critical technology that allows AI to bridge the gap between digital and physical worlds and understand products and customer intent with far greater context and accuracy.",
                processSteps: [
                    { icon: 'data', title: 'Ingest Diverse Data Types', description: 'The AI system receives multiple, concurrent inputs, such as a user uploading a photo of an outfit they saw while also typing "find me a cheaper version of this jacket."' },
                    { icon: 'ai', title: 'Cross-Modal Understanding', description: 'The AI processes the different data types and, crucially, finds the relationships between them. It understands that "this jacket" in the text refers to a specific object within the pixels of the image.' },
                    { icon: 'feedback', title: 'Generate Rich, Unified Insight', description: 'By fusing the insights from each data type, the AI generates a single, unified understanding that is more contextually aware than any single mode could provide on its own.' },
                    { icon: 'human', title: 'Power Advanced Experiences', description: 'This deep, contextual understanding is then used as the engine for a new generation of retail experiences, such as visual search, virtual try-on, and smart store analytics.' }
                ],
                quantifiedImpact: [
                    { metric: 'Enables Visual Search', description: 'The core technology that allows a user to "search with their camera," turning any image into a starting point for product discovery.' },
                    { metric: 'Powers Realistic VTO', description: 'Allows Virtual Try-On systems to more accurately map digital garments onto a user\'s unique body shape by understanding both the 2D image and the 3D structure of the clothing.' },
                    { metric: 'Unlocks Richer Attribution', description: 'Computer vision, a form of multimodality, is essential for analyzing product images to extract the detailed visual attributes needed for semantic search and recommendations.' },
                    { metric: 'Deeper Contextual Awareness', description: 'Allows AI to understand customer needs in a more human-like way, combining what they say (text) with what they show (images) to provide better results.' }
                ],
                strategicTakeaway: "For Penti, embracing Multimodal AI is key to creating more intuitive and human-centric customer experiences. It allows the business to move beyond keyword search and understand customers at their moment of inspiration—whether from a social media screenshot or a photo taken in the real world. This capability is foundational to building next-generation e-commerce and phygital applications that truly understand the visual language of fashion.",
                relatedConcepts: []
            }
        ]
    },
    'ask-ai': { name: 'Ask AI', description: 'Ask our AI expert about concepts in retail technology.' }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { presentationContext, useCaseData };
}