/**
 * ============================================================
 * 页面交互逻辑:渲染项目、筛选、移动端导航、滚动动效
 * 一般情况下无需修改本文件
 * ============================================================
 */
(() => {
  "use strict";

  /* ---------- 工具函数:防止注入 ---------- */
  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  const filterBar = document.getElementById("filterBar");
  const projectsGrid = document.getElementById("projectsGrid");

  /* ---------- 渲染筛选按钮(根据项目数据自动生成) ---------- */
  function renderFilters() {
    // "全部" + 项目中实际出现的分类
    const keys = ["all", ...new Set(PROJECTS.map((p) => p.category))];
    filterBar.innerHTML = keys
      .map(
        (key, i) =>
          `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${esc(key)}">${
            key === "all" ? "全部" : esc(CATEGORY_LABELS[key] || key)
          }</button>`
      )
      .join("");
  }

  /* ---------- 渲染项目卡片 ---------- */
  function renderProjects(category = "all") {
    const list =
      category === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === category);

    if (list.length === 0) {
      projectsGrid.innerHTML = `<p class="section-sub">该分类下暂无项目,敬请期待。</p>`;
      return;
    }

    projectsGrid.innerHTML = list
      .map((p, i) => {
        const links = [
          p.github
            ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">GitHub →</a>`
            : "",
          p.demo
            ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">在线演示 →</a>`
            : "",
        ].filter(Boolean);

        const highlights = (p.highlights || [])
          .map((h) => `<li>${esc(h)}</li>`)
          .join("");

        return `
          <article class="project-card" style="animation-delay:${i * 0.08}s">
            <div class="project-thumb" aria-hidden="true">${p.emoji}</div>
            <div class="project-body">
              <h3 class="project-title">${esc(p.title)}</h3>
              ${p.subtitle ? `<p class="project-subtitle">${esc(p.subtitle)}</p>` : ""}
              <p class="project-desc">${esc(p.desc)}</p>
              <ul class="project-highlights">${highlights}</ul>
              <div class="project-tags">
                ${p.tags.map((t) => `<span class="project-tag">${esc(t)}</span>`).join("")}
              </div>
              <div class="project-links">${links.join("") || '<span class="project-links-empty">源码与演示:可私信获取</span>'}</div>
            </div>
          </article>`;
      })
      .join("");
  }

  /* ---------- 筛选交互 ---------- */
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });

  /* ---------- 移动端导航 ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open);
  });

  // 点击导航链接后自动收起菜单
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- 顶部导航滚动阴影 ---------- */
  const header = document.querySelector(".site-header");
  const onScrollHeader = () => header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- 滚动进入动画 ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));

  /* ---------- 页脚年份 ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- 初始化 ---------- */
  renderFilters();
  renderProjects("all");
})();
