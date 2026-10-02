(() => {
  const d = window.PORTFOLIO_DATA;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  const logoGroup = (logos = []) => {
    if (!logos.length) return "";
    return `<div class="item-logo-group" aria-hidden="true">${logos.map(logo => {
      const classes = ["item-logo-badge", logo.className || ""].filter(Boolean).join(" ");
      if (logo.type === "mark") {
        return `<span class="${classes}" title="${logo.alt || logo.text || ""}"><span class="logo-mark-text">${logo.text || ""}</span></span>`;
      }
      return `<span class="${classes}" title="${logo.alt || ""}"><img src="${logo.src}" alt="" loading="lazy" onerror="this.style.display='none'" /></span>`;
    }).join("")}</div>`;
  };

  document.title = `${d.name} | Portfolio`;
  $("#hero-name").textContent = d.name;
  $("#footer-name").textContent = d.name;
  $("#about-text").textContent = d.about;
  $("#resume-link").href = d.resumeUrl || "#";

  let roleIndex = 0;
  const roleEl = $("#hero-roles");
  const renderRole = () => {
    roleEl.textContent = d.roles[roleIndex % d.roles.length];
    roleIndex++;
  };
  renderRole();
  setInterval(renderRole, 2200);

  $("#skills-list").innerHTML = d.skills.map(s => `
    <div class="skill">
      <div class="skill-head"><span>${s.name}</span><span>${s.level}%</span></div>
      <div class="track"><div class="fill" data-level="${s.level}"></div></div>
    </div>`).join("");

  const educationTimeline = (items) => items.map(item => `
    <article class="timeline-item ${item.logos?.length ? "has-logo" : ""}">
      ${item.date ? `<span class="timeline-date">${item.date}</span>` : ""}
      <h3>${item.title}</h3>
      ${item.subtitle ? `<h4>${item.subtitle}</h4>` : ""}
      ${item.description ? `<p>${item.description}</p>` : ""}
      ${logoGroup(item.logos)}
    </article>`).join("");

  const experienceTimeline = (items) => items.map(item => {
    const meta = (item.role || item.organization) ? `
      <div class="timeline-meta">
        <span>${item.organization || ""}</span>
        <span>${item.role || ""}</span>
      </div>` : "";
    return `
      <article class="timeline-item">
        <span class="timeline-date">${item.date}</span>
        <h3>${item.title}</h3>
        ${meta}
        <p>${item.description}</p>
      </article>`;
  }).join("");

  $("#education-list").innerHTML = educationTimeline(d.education);

  const collaborationTimeline = (items) => items.map(item => `
    <article class="featured-collab-card ${item.logos?.length ? "has-logo" : ""}">
      <div class="featured-collab-top">
        <span class="featured-date">${item.date}</span>
        <span class="featured-org">${item.organization || ""}</span>
      </div>
      <h3>${item.title}</h3>
      ${item.role ? `<p class="featured-role">${item.role}</p>` : ""}
      <p>${item.description}</p>
      ${logoGroup(item.logos)}
    </article>`).join("");

  $("#collaboration-list").innerHTML = collaborationTimeline(d.externalCollaboration || []);
  $("#experience-list").innerHTML = experienceTimeline(d.experience);

  const sideProjectTimeline = (items) => items.map(item => `
    <article class="timeline-item">
      <span class="timeline-date">${item.date}</span>
      <h3>${item.url ? `<a class="timeline-title-link" href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a>` : item.title}</h3>
      ${item.organization ? `<div class="timeline-meta"><span></span><span>${item.organization}</span></div>` : ""}
      <p>${item.description}</p>
    </article>`).join("");

  $("#side-projects-list").innerHTML = sideProjectTimeline(d.sideProjects || []);
  $("#awards-list").innerHTML = educationTimeline(d.awards || []);
  $("#scholarships-list").innerHTML = educationTimeline(d.scholarships || []);
  $("#certifications-list").innerHTML = educationTimeline(d.certifications || []);

  const categories = ["all", ...new Set(d.projects.map(p => p.category))];
  $("#filters").innerHTML = categories.map((c, i) =>
    `<button class="filter ${i === 0 ? "active" : ""}" data-filter="${c}">${c}</button>`
  ).join("");

  const projectList = $("#project-list");
  const drawProjects = (filter = "all") => {
    const items = d.projects.filter(p => filter === "all" || p.category === filter);
    projectList.innerHTML = items.map(p => `
      <article class="project">
        <img src="${p.image}" alt="${p.title}">
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.description} · ${p.category}</p>
          <a href="${p.url}" target="_blank" rel="noreferrer">View Project →</a>
        </div>
      </article>`).join("");
  };
  drawProjects();

  $("#filters").addEventListener("click", e => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    $$(".filter").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    drawProjects(btn.dataset.filter);
  });

  const c = d.contact;
  $("#contact-info").innerHTML = `
    <p class="contact-line"><strong>Name</strong> ${d.name}</p>
    <p class="contact-line"><strong>Email</strong> <a href="mailto:${c.email}">${c.email}</a></p>
    <p class="contact-line"><strong>Location</strong> ${c.location}</p>`;
  $("#sidebar-social").innerHTML = d.social.map(x =>
    `<a href="${x.url}" target="_blank" rel="noreferrer" aria-label="${x.label}">${x.label}</a>`
  ).join("");

  const menu = $(".menu-button");
  const nav = $(".nav");
  menu.addEventListener("click", () => nav.classList.toggle("open"));
  $$(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (entry.target.id === "skills") {
        $$(".fill").forEach(el => el.style.width = `${el.dataset.level}%`);
      }
      const id = entry.target.id;
      $$(".nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
    });
  }, { threshold: .25 });
  $$("main section[id]").forEach(s => observer.observe(s));
})();
