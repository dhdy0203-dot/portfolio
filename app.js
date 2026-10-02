
(() => {
  const d = window.PORTFOLIO_DATA;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

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

  const timeline = (items) => items.map(item => `
    <article class="timeline-item">
      <span class="timeline-date">${item.date}</span>
      <h3>${item.title}</h3>
      <h4>${item.subtitle}</h4>
      <p>${item.description}</p>
    </article>`).join("");
  $("#education-list").innerHTML = timeline(d.education);
  $("#experience-list").innerHTML = timeline(d.experience);

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
    <p class="contact-line"><strong>GitHub</strong> <a href="${c.github}" target="_blank" rel="noreferrer">${c.github.replace("https://","")}</a></p>
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
