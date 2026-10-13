(() => {
  const d = window.PORTFOLIO_DATA;
  const $ = (selector) => document.querySelector(selector);
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");
  const project = d.projects.find(item => item.slug === slug);
  const category = (d.projectCategories || []).find(item => item.key === project?.category);

  if (!project) {
    document.title = `Project Not Found | ${d.name}`;
    $("#project-detail").innerHTML = `
      <div class="detail-empty">
        <p class="detail-section-label">Portfolio</p>
        <h1>프로젝트를 찾을 수 없습니다.</h1>
        <p>요청한 프로젝트 정보가 없거나 주소가 변경되었습니다.</p>
        <a class="button" href="index.html#portfolio">Portfolio로 돌아가기</a>
      </div>`;
    return;
  }

  document.title = `${project.title} | ${d.name}`;
  $("#detail-category").textContent = category?.label || project.category;
  $("#detail-date").textContent = project.date || "";
  $("#detail-title").textContent = project.title;
  $("#detail-organization").textContent = project.organization || "";
  $("#detail-role").textContent = project.role || "";
  $("#detail-role").hidden = !project.role;
  $("#detail-description").textContent = project.description || "";
  $("#detail-overview").textContent = project.overview || project.description || "";\n
  // 강의노트 기반 문제집 생성 에이전트: Overview 상단 이미지
  if (project.slug === "lecture-note-workbook-agent") {
    const overview = document.querySelector("#detail-overview");
    const image = document.createElement("img");

    image.src = "assets/projects/lecture-note-workbook-agent/08-pixel-agents.png";
    image.alt = "Pixel Agents 멀티 에이전트 협업 작업 화면";
    image.loading = "lazy";

    Object.assign(image.style, {
      display: "block",
      width: "100%",
      maxWidth: "900px",
      height: "auto",
      marginBottom: "28px",
      borderRadius: "10px"
    });

    overview.parentNode.insertBefore(image, overview);
  }

  const detailParagraphs = Array.isArray(project.detail)
    ? project.detail
    : (project.detail ? [project.detail] : []);
  $("#detail-detail").innerHTML = detailParagraphs
    .map(item => `<p>${item}</p>`).join("");
  const media = Array.isArray(project.media) ? project.media : [];
  const mediaSection = $("#detail-media-section");
  if (media.length) {
    mediaSection.hidden = false;
    $("#detail-media").innerHTML = media.map(item => `
      <figure class="detail-media-item">
        <a href="${item.src}" target="_blank" rel="noreferrer" aria-label="${item.alt || item.caption || '프로젝트 이미지'} 크게 보기">
          <img src="${item.src}" alt="${item.alt || ''}" loading="lazy" />
        </a>
        ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ''}
      </figure>`).join("");
  }

  $("#detail-highlights").innerHTML = (project.highlights || [])
    .map(item => `<li>${item}</li>`).join("");
  $("#detail-keywords").innerHTML = (project.keywords || [])
    .map(item => `<span>${item}</span>`).join("");

  if (project.externalUrl) {
    $("#detail-actions").innerHTML = `
      <a class="button" href="${project.externalUrl}" target="_blank" rel="noreferrer">Visit Project ↗</a>`;
  }
})();
