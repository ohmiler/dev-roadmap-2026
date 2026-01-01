import './style.css'

const roadmapData = [
  {
    phase: "Phase 1",
    icon: "🧠",
    title: "AI-Native Mindset",
    duration: "1-2 เดือน",
    color: "#8b5cf6",
    description: "เปลี่ยน mindset จาก 'เขียนโค้ดเอง' เป็น 'ทำงานร่วมกับ AI' - เรียนรู้วิธีคิดแบบใหม่ที่จะทำให้คุณทำงานได้เร็วขึ้น 10 เท่า",
    topics: [
      { name: "Prompt Engineering พื้นฐาน", icon: "✍️", desc: "เรียนรู้วิธีสื่อสารกับ AI อย่างมีประสิทธิภาพ" },
      { name: "AI-Assisted Development", icon: "🤝", desc: "ใช้ AI ช่วยเขียน debug และ refactor โค้ด" },
      { name: "Code Review with AI", icon: "🔍", desc: "ให้ AI ช่วยตรวจสอบและปรับปรุงโค้ด" },
      { name: "When NOT to use AI", icon: "⚠️", desc: "รู้ข้อจำกัดและเมื่อไหร่ควรเขียนเอง" },
      { name: "AI Ethics & Responsibility", icon: "⚖️", desc: "ใช้ AI อย่างมีจริยธรรมและรับผิดชอบ" }
    ],
    resources: [
      { name: "OpenAI Prompt Engineering", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { name: "Anthropic Claude Docs", url: "https://docs.anthropic.com/" },
      { name: "Google AI Essentials", url: "https://grow.google/ai-essentials/" }
    ],
    tips: "เริ่มจากการใช้ AI ในงานเล็กๆ ก่อน เช่น เขียน commit message, แปลงโค้ด, หา bug"
  },
  {
    phase: "Phase 2",
    icon: "💻",
    title: "Core Dev Skills + AI Tools",
    duration: "2-3 เดือน",
    color: "#3b82f6",
    description: "ฝึกทักษะ Developer พื้นฐานที่ยังจำเป็น ควบคู่กับเครื่องมือ AI ที่ช่วยเพิ่ม productivity แบบก้าวกระโดด",
    topics: [
      { name: "Git & GitHub Workflows", icon: "📚", desc: "Version control, branching, PR reviews" },
      { name: "VSCode + AI Extensions", icon: "⚡", desc: "Copilot, Cursor, Continue, Cline" },
      { name: "Terminal & CLI Mastery", icon: "💻", desc: "Command line, scripting, automation" },
      { name: "Testing with AI", icon: "🧪", desc: "Unit tests, integration tests ด้วย AI" },
      { name: "Documentation Skills", icon: "📝", desc: "เขียน docs ที่ดีด้วยความช่วยเหลือ AI" },
      { name: "Debugging Techniques", icon: "🐛", desc: "หา bug อย่างเป็นระบบ + AI assistance" }
    ],
    resources: [
      { name: "GitHub Skills", url: "https://skills.github.com/" },
      { name: "VSCode Docs", url: "https://code.visualstudio.com/docs" },
      { name: "Missing Semester (MIT)", url: "https://missing.csail.mit.edu/" }
    ],
    tips: "ติดตั้ง GitHub Copilot หรือ Cursor แล้วลองใช้ทุกวัน จดบันทึกว่า prompt แบบไหนได้ผลดี"
  },
  {
    phase: "Phase 3",
    icon: "🏗️",
    title: "Modern Tech Stack 2026",
    duration: "3-4 เดือน",
    color: "#10b981",
    description: "เรียนรู้ tech stack ที่ตลาดต้องการ เน้น fundamentals ที่แข็งแรง เพราะ AI จะช่วยส่วนที่เหลือ",
    topics: [
      { name: "TypeScript Fundamentals", icon: "📘", desc: "Type safety สำหรับ JavaScript" },
      { name: "React / Next.js 15", icon: "⚛️", desc: "Top framework สำหรับ Frontend" },
      { name: "Node.js & Express", icon: "🟢", desc: "Backend JavaScript runtime" },
      { name: "Python for Backend", icon: "🐍", desc: "FastAPI, Django for AI/ML apps" },
      { name: "PostgreSQL & MongoDB", icon: "🗄️", desc: "Relational & NoSQL databases" },
      { name: "REST & GraphQL APIs", icon: "🔌", desc: "API design และ best practices" }
    ],
    resources: [
      { name: "React Docs", url: "https://react.dev/" },
      { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/" },
      { name: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" }
    ],
    tips: "สร้าง full-stack project จริง 2-3 ตัว ใช้ AI ช่วยเรียนรู้ แต่อย่าลืมเข้าใจว่าโค้ดทำงานยังไง"
  },
  {
    phase: "Phase 4",
    icon: "🤖",
    title: "AI Integration & Building",
    duration: "3-4 เดือน",
    color: "#f59e0b",
    description: "เจาะลึกการสร้าง AI-powered applications จริง ตั้งแต่ใช้ LLM APIs ไปจนถึงสร้าง AI Agents",
    topics: [
      { name: "LLM APIs", icon: "🔮", desc: "OpenAI, Anthropic, Google Gemini" },
      { name: "Prompt Templates", icon: "📋", desc: "สร้าง prompts ที่ reusable" },
      { name: "Vector Databases", icon: "🗃️", desc: "Pinecone, Weaviate, ChromaDB" },
      { name: "RAG Systems", icon: "📚", desc: "Retrieval-Augmented Generation" },
      { name: "AI Agents", icon: "🤖", desc: "LangChain, CrewAI, AutoGen" },
      { name: "Fine-tuning Basics", icon: "🔧", desc: "LoRA, QLoRA for custom models" }
    ],
    resources: [
      { name: "LangChain Docs", url: "https://python.langchain.com/docs/" },
      { name: "OpenAI Cookbook", url: "https://cookbook.openai.com/" },
      { name: "Hugging Face Course", url: "https://huggingface.co/learn" }
    ],
    tips: "สร้าง chatbot ง่ายๆ ก่อน แล้วค่อยๆ เพิ่ม RAG, memory, tools ทีละส่วน"
  },
  {
    phase: "Phase 5",
    icon: "🚀",
    title: "Production & DevOps",
    duration: "2-3 เดือน",
    color: "#ef4444",
    description: "Deploy แอพไปใช้งานจริง เรียนรู้ infrastructure, CI/CD และ monitoring สำหรับ AI applications",
    topics: [
      { name: "Docker Fundamentals", icon: "🐳", desc: "Containerization สำหรับ deployment" },
      { name: "Cloud Platforms", icon: "☁️", desc: "AWS, GCP, Azure basics" },
      { name: "CI/CD Pipelines", icon: "🔄", desc: "GitHub Actions, automated testing" },
      { name: "Monitoring & Logging", icon: "📊", desc: "Track performance, errors, usage" },
      { name: "Cost Optimization", icon: "💰", desc: "ลดค่าใช้จ่าย AI/Cloud ให้เหมาะสม" },
      { name: "Security Basics", icon: "🔒", desc: "API security, secrets management" }
    ],
    resources: [
      { name: "Docker Docs", url: "https://docs.docker.com/get-started/" },
      { name: "GitHub Actions", url: "https://docs.github.com/en/actions" },
      { name: "AWS Free Tier", url: "https://aws.amazon.com/free/" }
    ],
    tips: "Deploy project ไป Vercel/Railway ก่อน แล้วค่อย explore cloud providers หลังมีประสบการณ์"
  },
  {
    phase: "Phase 6",
    icon: "🌟",
    title: "Career & Soft Skills",
    duration: "Ongoing",
    color: "#ec4899",
    description: "ทักษะที่ AI ยังแทนที่ไม่ได้ - communication, problem-solving, และการสร้าง network ในวงการ",
    topics: [
      { name: "Portfolio Building", icon: "💼", desc: "สร้าง portfolio ด้วย AI projects" },
      { name: "Technical Writing", icon: "✏️", desc: "เขียนอธิบาย technical concepts" },
      { name: "Problem Decomposition", icon: "🧩", desc: "แบ่งปัญหาใหญ่เป็นงานย่อย" },
      { name: "Staying Updated", icon: "📰", desc: "ติดตาม AI trends อย่างมีประสิทธิภาพ" },
      { name: "Networking", icon: "🤝", desc: "สร้าง connections ในวงการ tech" },
      { name: "Open Source", icon: "🌐", desc: "Contribute และเรียนรู้จาก OSS" }
    ],
    resources: [
      { name: "Dev.to", url: "https://dev.to/" },
      { name: "Twitter/X Tech", url: "https://twitter.com/i/lists" },
      { name: "Thai Tech Meetups", url: "https://www.meetup.com/find/?keywords=tech&location=th" }
    ],
    tips: "เขียน blog หรือทำ video สอนสิ่งที่เรียนรู้ - การสอนคือวิธีเรียนรู้ที่ดีที่สุด"
  }
];

function createRoadmapHTML() {
  const totalDuration = "12-18 เดือน";

  return `
    <nav class="navbar">
      <div class="nav-brand">
        <span class="nav-logo">🚀</span>
        <span class="nav-title">Dev Roadmap 2026</span>
      </div>
      <div class="nav-links">
        <a href="#overview">ภาพรวม</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#resources">Resources</a>
      </div>
    </nav>

    <div class="container">
      <header id="overview">
        <div class="badge-container">
          <div class="badge">🎯 2026 Edition</div>
          <div class="badge badge-outline">ระยะเวลา: ${totalDuration}</div>
        </div>
        <h1>Developer Roadmap<br><span class="gradient-text">ในยุค AI</span></h1>
        <p class="subtitle">
          เส้นทางการเรียนรู้อย่างละเอียดสำหรับนักพัฒนาที่ต้องการประสบความสำเร็จในยุคที่ AI เปลี่ยนแปลงวงการ<br>
          <strong>ไม่ใช่แค่เรียนรู้ AI แต่เรียนรู้ที่จะ "ทำงานร่วมกับ AI"</strong>
        </p>
        
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">6</span>
            <span class="stat-label">Phases</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">36+</span>
            <span class="stat-label">หัวข้อ</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">18+</span>
            <span class="stat-label">Resources</span>
          </div>
        </div>
      </header>

      <section id="roadmap" class="timeline">
        <div class="timeline-line"></div>
        ${roadmapData.map((phase, index) => `
          <div class="phase-card" style="--delay: ${index * 0.15}s; --accent: ${phase.color}">
            <div class="phase-marker">
              <span class="phase-icon">${phase.icon}</span>
            </div>
            
            <div class="phase-content">
              <div class="phase-header">
                <div class="phase-meta">
                  <span class="phase-badge" style="background: ${phase.color}20; color: ${phase.color}">${phase.phase}</span>
                  <span class="duration">⏱️ ${phase.duration}</span>
                </div>
              </div>
              
              <h2 class="phase-title">${phase.title}</h2>
              <p class="description">${phase.description}</p>
              
              <div class="topics-grid">
                ${phase.topics.map(topic => `
                  <div class="topic-item">
                    <div class="topic-header">
                      <span class="topic-icon">${topic.icon}</span>
                      <span class="topic-name">${topic.name}</span>
                    </div>
                    <p class="topic-desc">${topic.desc}</p>
                  </div>
                `).join('')}
              </div>

              <div class="phase-footer">
                <div class="resources">
                  <span class="resources-label">📖 แหล่งเรียนรู้:</span>
                  <div class="resources-list">
                    ${phase.resources.map(r => `<a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-tag">${r.name}</a>`).join('')}
                  </div>
                </div>
                
                <div class="tips-box">
                  <span class="tips-icon">💡</span>
                  <p class="tips-text">${phase.tips}</p>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </section>

      <section id="resources" class="closing-section">
        <div class="closing-card">
          <h2>🎯 เริ่มต้นเลยวันนี้</h2>
          <p>การเดินทางเริ่มต้นด้วยก้าวแรก ไม่ต้องรอให้พร้อม 100% แค่เริ่มลงมือทำ</p>
          <div class="action-buttons">
            <a href="https://github.com" target="_blank" class="btn btn-primary">
              <span>🐙</span> สร้าง GitHub Account
            </a>
            <a href="https://code.visualstudio.com" target="_blank" class="btn btn-secondary">
              <span>💻</span> Download VSCode
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>สร้างด้วย ❤️ โดย <a href="https://www.facebook.com/milerdevpro" target="_blank" rel="noopener noreferrer" class="credit-link">milerdev</a></p>
        <p class="footer-sub">อัพเดทล่าสุด: มกราคม 2026</p>
      </footer>
    </div>
  `;
}

document.querySelector('#app').innerHTML = createRoadmapHTML();

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.phase-card, .stat-item, .closing-card').forEach(el => {
  observer.observe(el);
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
