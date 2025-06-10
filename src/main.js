import { useCaseData, presentationContext } from '../data.js';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof useCaseData === 'undefined') {
        console.error("Error: data.js not found or useCaseData is not defined.");
        document.body.innerHTML = `Error: data.js not found.`;
        return;
    }

    const navContainer = document.getElementById('nav-container');
    const modalEl = document.getElementById('modal');

    const icons = {
        data: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7M16 3L16 7M8 3L8 7M4 11L20 11" /></svg>`,
        ai: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V5m0 14v-1M9.5 9.5l-1-1M15.5 15.5l-1-1M15.5 9.5l-1 1M9.5 15.5l-1 1" /></svg>`,
        human: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`,
        feedback: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h5M20 20v-5h-5M4 20L20 4" /></svg>`
    };

    function switchView(targetId) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const navLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
        if (navLink) navLink.classList.add('active');
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.toggle('active', section.id === targetId);
        });
        if (targetId !== 'introduction') window.scrollTo(0, 0);
    }
    
    function openModal(sectionKey, caseKey) {
        const useCase = useCaseData[sectionKey]?.cases.find(c => c.id === caseKey);
        if (!useCase) return;

        // All cases are now treated as custom to use the detailed modal
        renderCustomModal(useCase);
    }

    function renderCustomModal(data) {
        // Fallback for potentially missing data to prevent errors
        const businessModel = data.businessModel || 'Details not available.';
        const processSteps = data.processSteps || [];
        const quantifiedImpact = data.quantifiedImpact || [];
        const strategicTakeaway = data.strategicTakeaway || 'Not available.';
        const relatedConcepts = data.relatedConcepts || [];

        const modalHTML = `
            <div id="modal-content" class="bg-white rounded-lg shadow-2xl w-full max-w-4xl transform transition-all">
                <div class="p-5 border-b border-zinc-200 flex justify-between items-start">
                    <div class="flex-grow">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-2xl font-bold text-zinc-900">${data.company}: ${data.concept}</h3>
                                <p class="text-sm text-fuchsia-600 font-semibold mt-1">${data.imperativeLink || ''}</p>
                            </div>
                            ${data.youtubeUrl ? `<a href="${data.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="ml-4 flex-shrink-0 inline-block bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-red-700 transition-colors whitespace-nowrap">► Watch Video</a>` : ''}
                        </div>
                    </div>
                    <button id="close-modal" class="text-zinc-400 hover:text-zinc-800 text-3xl font-light leading-none ml-4">×</button>
                </div>
                <div class="p-6 md:p-8">
                    <img src="${data.image || ''}" alt="${data.company} Use Case" class="w-full h-auto max-h-96 object-contain rounded-lg mb-6 bg-zinc-200 ${data.image ? '' : 'hidden'}">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-bold text-lg text-zinc-800 mb-2">The AI-Native Business Model</h4>
                            <p class="text-zinc-600">${businessModel}</p>
                            <h4 class="font-bold text-lg text-zinc-800 mt-6 mb-3">How It Works: The Human + AI Process</h4>
                            <div class="space-y-4">${processSteps.map(step => `<div class="flex items-start"><div class="flex-shrink-0">${icons[step.icon]}</div><div class="ml-4"><h5 class="font-semibold text-zinc-700">${step.title}</h5><p class="text-sm text-zinc-500">${step.description}</p></div></div>`).join('')}</div>
                        </div>
                        <div class="bg-zinc-50 p-6 rounded-lg border border-zinc-200">
                            <h4 class="font-bold text-lg text-zinc-800 mb-4">Quantified Impact</h4>
                            <div class="space-y-4">${quantifiedImpact.map(item => `
                                <div>
                                    <p class="text-3xl font-bold text-fuchsia-600">${item.metric}</p>
                                    <p class="text-sm text-zinc-600">${item.description}</p>
                                </div>`).join('')}
                            </div>
                        </div>
                    </div>
                     <div class="mt-8 pt-6 border-t border-zinc-200">
                         <h4 class="font-bold text-lg text-zinc-800 mb-2">Strategic Takeaway for Penti</h4>
                         <p class="text-zinc-600 italic">"${strategicTakeaway}"</p>
                     </div>
                     ${relatedConcepts.length > 0 ? `
                     <div class="mt-6 pt-4 border-t border-zinc-200">
                         <h4 class="font-bold text-lg text-zinc-800 mb-2">Related Concepts</h4>
                         <div class="flex flex-wrap gap-2">
                             ${relatedConcepts.map(concept => `<a href="#${concept.id}" class="concept-link text-sm bg-indigo-100 text-indigo-700 font-medium py-1 px-3 rounded-full hover:bg-indigo-200 transition-colors">${concept.name}</a>`).join('')}
                         </div>
                     </div>
                     ` : ''}
                </div>
            </div>`;
        modalEl.innerHTML = modalHTML;
        showAndBindModal();
    }

    function showAndBindModal() {
        modalEl.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        modalEl.querySelector('#close-modal').addEventListener('click', closeModal);
        modalEl.addEventListener('click', (e) => { if (e.target === modalEl) closeModal(); });
    }

    function closeModal() {
        modalEl.classList.add('hidden');
        document.body.style.overflow = 'auto';
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    
    function findCaseById(caseId) {
        for (const sectionKey in useCaseData) {
            if (useCaseData[sectionKey]?.cases) {
                const foundCase = useCaseData[sectionKey].cases.find(c => c.id === caseId);
                if (foundCase) return { sectionKey: sectionKey, caseKey: caseId };
            }
        }
        return null;
    }

    function handleUrlChange() {
        const caseId = window.location.hash.substring(1);
        if (caseId) {
            const found = findCaseById(caseId);
            if (found) {
                if (modalEl.classList.contains('hidden')) {
                     switchView(found.sectionKey);
                     setTimeout(() => openModal(found.sectionKey, found.caseKey), 50);
                } else {
                     closeModal();
                     setTimeout(() => {
                         switchView(found.sectionKey);
                         openModal(found.sectionKey, found.caseKey);
                     }, 300);
                }
            }
        }
    }

    function initializeDashboard() {
        const navOrder = Object.keys(useCaseData);

        navOrder.forEach((key) => {
            const section = useCaseData[key];
            if (!section) return;

            const navLink = document.createElement('a');
            navLink.className = `nav-link py-2 px-4 rounded-t-lg font-medium text-sm md:text-base whitespace-nowrap`;
            navLink.textContent = section.name;
            navLink.dataset.target = key;
            navContainer.appendChild(navLink);

            const sectionDiv = document.getElementById(key);
            if (sectionDiv && section.cases) {
                let cardHTML = (section.cases).map(uc => {
                    const logo = uc.logo || 'https://logo.clearbit.com/clearbit.com'; // Fallback logo
                    return `<a href="#${uc.id}" class="card"><img src="${logo}" alt="${uc.company} Logo" class="h-12 mx-auto mt-5 mb-4 object-contain"><div class="card-content"><h3 class="font-bold text-lg text-zinc-800">${uc.company}</h3><p class="text-sm text-zinc-500">${uc.concept}</p></div></a>`
                }).join('');
                let sectionHTML = `<div class="text-center mb-10"><h2 class="text-3xl font-bold text-zinc-900">${section.name}</h2><p class="mt-2 max-w-2xl mx-auto text-zinc-600">${section.description}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${cardHTML}</div>`;
                sectionDiv.innerHTML = sectionHTML;
            }
        });

        navContainer.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link')) {
                history.pushState(null, null, ' ');
                switchView(e.target.dataset.target);
            }
        });
        
        const initialHash = window.location.hash.substring(1);
        if (initialHash && findCaseById(initialHash)) {
            handleUrlChange();
        } else {
            switchView('introduction');
        }
        
        window.addEventListener('hashchange', handleUrlChange, false);
    }
    
    const askButton = document.getElementById('ask-button');
    const questionInput = document.getElementById('ai-question');
    const responseEl = document.getElementById('ai-response');

    if (askButton) {
        askButton.addEventListener('click', handleAskAI);
        questionInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') handleAskAI();
        });
    }

    async function handleAskAI() {
        const question = questionInput.value.trim();
        if (!question) return;

        askButton.disabled = true;
        responseEl.textContent = "Thinking...";
        const SECURE_API_ENDPOINT = '/api/ask-ai';
        try {
            const response = await fetch(SECURE_API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: question })
            });
            if (!response.ok) throw new Error(`Server Error: ${response.statusText}`);
            const data = await response.json();
            responseEl.textContent = data.answer;
        } catch (error) {
            console.error("Error fetching AI response:", error);
            responseEl.textContent = "Sorry, there was an error getting a response. Please check the console for details.";
        } finally {
            askButton.disabled = false;
        }
    }
    
    initializeDashboard();
});