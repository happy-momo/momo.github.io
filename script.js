// 从 data.js 读取数据并动态渲染

document.addEventListener('DOMContentLoaded', function() {
  renderAbout();
  renderExperience();
  renderProjects();
  renderInsights();
  renderSocialLinks();
  setupInteractions();
});

// ==================== 渲染关于我 ====================
function renderAbout() {
  const aboutContent = document.getElementById('aboutContent');
  aboutContent.textContent = personalInfo.about;
}

// ==================== 渲染经历时间线 ====================
function renderExperience() {
  const timeline = document.getElementById('experienceTimeline');
  timeline.innerHTML = '';

  experiences.forEach((exp, index) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">${exp.year}</div>
        <div class="timeline-company">${exp.company}</div>
        <div class="timeline-position">${exp.position}</div>
        <div class="timeline-description">${exp.description}</div>
        <button class="timeline-toggle" onclick="toggleDetails(this)">
          查看详情 ▼
        </button>
        <div class="timeline-details">
          <ul>
            ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    timeline.appendChild(item);
  });
}

// ==================== 切换经历详情 ====================
function toggleDetails(button) {
  const details = button.nextElementSibling;
  details.classList.toggle('active');
  button.textContent = details.classList.contains('active') ? '隐藏详情 ▲' : '查看详情 ▼';
}

// ==================== 渲染作品 ====================
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-image">
        ${project.image ? `<img src="${project.image}" alt="${project.title}">` : project.title.charAt(0)}
      </div>
      <div class="project-content">
        <div class="project-category">${project.category}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="${project.link}" target="_blank" class="project-link">
          查看项目 →
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==================== 渲染学习心得 ====================
function renderInsights() {
  const grid = document.getElementById('insightsGrid');
  grid.innerHTML = '';

  insights.forEach(insight => {
    const card = document.createElement('div');
    card.className = 'insight-card';
    card.innerHTML = `
      <div class="insight-category">${insight.category}</div>
      <h3 class="insight-title">${insight.title}</h3>
      <p class="insight-content">${insight.content}</p>
      <div class="insight-date">${formatDate(insight.date)}</div>
    `;
    grid.appendChild(card);
  });
}

// ==================== 渲染社交链接 ====================
function renderSocialLinks() {
  const container = document.getElementById('socialLinks');
  container.innerHTML = '';

  socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.className = 'social-link';
    a.innerHTML = `
      <span class="social-link-icon">${link.icon}</span>
      <span>${link.name}</span>
    `;
    container.appendChild(a);
  });
}

// ==================== 日期格式化 ====================
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// ==================== 交互效果 ====================
function setupInteractions() {
  // 滚动时的视差效果
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
  });

  // 平滑滚动链接
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 观察元素进入视口时的动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card, .insight-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}
