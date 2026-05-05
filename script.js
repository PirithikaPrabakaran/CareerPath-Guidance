const database = {
    "manager": {
        skills: ["Project Management", "AI Generative Models", "Team Leadership", "Strategic Planning", "Communication"],
        tools: ["Microsoft Excel (Advanced)", "Jira", "Trello", "ChatGPT / Gemini for Business", "Slack"],
        web: ["Project Management Institute (PMI)", "Harvard Business Review", "Forbes Career"],
        summary: "Results-driven Manager with expertise in leading cross-functional teams and integrating AI-driven workflows for maximum efficiency."
    },
    "developer": {
        skills: ["Full Stack Development", "API Design", "Code Review", "Agile Methodology"],
        tools: ["VS Code", "GitHub", "Docker", "AWS", "Postman"],
        web: ["GitHub", "Stack Overflow", "Dev.to"],
        summary: "Innovative Developer focused on scalable code and modern architecture."
    }
};

const input = document.getElementById('job-input');
const searchBtn = document.getElementById('search-btn');

// Function to perform search
function performSearch() {
    const query = input.value.toLowerCase().trim();
    if (!query) return;

    // Use specific data if found, otherwise use general data
    const data = database[query] || {
        skills: ["Adaptability", "Time Management", "Communication"],
        tools: ["MS Office", "Zoom", "Google Workspace"],
        web: ["LinkedIn Learning", "Indeed Career Advice"],
        summary: `Highly motivated professional specializing in ${query} strategies and implementation.`
    };

    // UI Updates
    document.querySelector('.search-header').style.padding = "20px";
    document.getElementById('results-area').classList.remove('hidden');

    // Populate Lists
    fillList('skill-list', data.skills);
    fillList('tool-list', data.tools);
    fillList('web-list', data.web);

    // Populate Resume
    document.getElementById('resume-paper').innerHTML = `
        <h2 style="text-align:center; margin-bottom:0;">[YOUR NAME]</h2>
        <p style="text-align:center; font-size:12px;">City, State | Phone: 000-000-0000 | Email: you@example.com</p>
        <hr>
        <strong>Professional Summary</strong>
        <p>${data.summary}</p>
        <strong>Core Competencies</strong>
        <p>${data.skills.join(' • ')}</p>
        <strong>Technical Tools</strong>
        <p>${data.tools.join(' • ')}</p>
        <strong>Experience</strong>
        <p><strong>Senior ${query}</strong> | Company Name | 2022 - Present</p>
        <ul>
            <li>Led successful projects using ${data.tools[0]}.</li>
            <li>Optimized team performance via ${data.skills[0]}.</li>
        </ul>
    `;
}

function fillList(id, items) {
    const list = document.getElementById(id);
    list.innerHTML = items.map(i => `<li>${i}</li>`).join('');
}

// Trigger Search on Click
searchBtn.addEventListener('click', performSearch);

// Trigger Search on 'Enter' Key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});