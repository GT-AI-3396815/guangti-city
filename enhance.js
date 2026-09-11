/* 光体之城增强层 — 文明详情弹层 / 合作表单 / 项目主体 / 项目动态 / 页脚修复
 * 原站为打包后的 React 应用，本文件在渲染完成后注入增强功能，不改动原站任何行为。 */
(function () {
  "use strict";

  var CIVS = {
    "上古昆仑圣域": {
      tag: "宇宙轴心",
      title: "上古昆仑圣域",
      paras: [
        "昆仑是中国神话体系中的万山之祖与宇宙中心。《山海经》《穆天子传》《淮南子》对昆仑的天柱意象、西王母瑶池、建木通天均有系统记载，构成了中华文明对天地秩序最早的宇宙想象。",
        "上古昆仑圣域以「宇宙轴心」为规划母题，将神话地理转译为可进入、可体验、可研学的当代文化空间。"
      ],
      zones: [
        "昆仑天宫主体建筑：以「天柱」为意象的园区制高点地标，承载全园视觉轴线",
        "瑶池仪式剧场：以西王母瑶池传说为蓝本的水景沉浸式演出空间",
        "建木通天装置：贯通地景与天穹的艺术装置群，呈现「绝地天通」的神话叙事",
        "昆仑天文观测台：结合北纬30度天文观测传统的科普与体验设施"
      ]
    },
    "三星堆文明国际馆": {
      tag: "星际桥梁",
      title: "三星堆文明国际馆",
      paras: [
        "三星堆遗址位于四川广汉，1986年一、二号祭祀坑与2021年新发现的六座祭祀坑，出土了青铜神树、纵目青铜面具、金杖、青铜大立人等震惊世界的文物，被誉为20世纪人类最伟大的考古发现之一。",
        "三星堆文明的造型语言与宇宙观念具有强烈的超越性气质，本馆以此为媒介，构建中华史前文明与星际文明想象的对话场域。"
      ],
      zones: [
        "青铜神树复刻装置：以九层神树为核心的多媒体艺术装置，呈现通天神话",
        "祭祀坑沉浸剧场：以考古发现为脚本的沉浸式声光演绎空间",
        "纵目美学长廊：纵目面具造型语言的当代艺术转译展区",
        "公众考古体验工坊：面向青少年与家庭的模拟考古与文物修复体验"
      ]
    },
    "红山文化秘境": {
      tag: "礼制源头",
      title: "红山文化秘境",
      paras: [
        "红山文化分布于西辽河流域，距今约五六千年，以牛河梁遗址的女神庙、积石冢群与C形玉龙闻名。C形玉龙被誉为「中华第一龙」，是龙图腾崇奉的重要源头。",
        "红山文化秘境聚焦中华礼制文明的雏形，呈现祭祀、玉礼与龙图腾如何在这片土地上率先成形。"
      ],
      zones: [
        "玉龙图腾柱阵：以C形玉龙为原型的图腾艺术柱阵与仪式广场",
        "牛河梁秘境剧场：还原积石冢与女神庙空间意象的沉浸式展演区",
        "礼制起源体验馆：中华礼仪文明源头的互动式叙事展馆",
        "玉文化研习所：红山玉器鉴赏、琢玉技艺传承的研学空间"
      ]
    },
    "良渚文明园": {
      tag: "治水智慧",
      title: "良渚文明园",
      paras: [
        "良渚文化分布于环太湖流域，距今约5300至4300年。良渚古城遗址于2019年列入《世界遗产名录》，其外围水利系统是世界上最早的大型水利工程之一，玉琮、玉璧构成的玉礼体系展现出高度成熟的社会组织能力。",
        "良渚文明园以「治水智慧」为策展主轴，呈现五千年文明如何与水共生、以礼立序。"
      ],
      zones: [
        "治水智慧水景园：以良渚水利系统为蓝本的活态水景与水利科普动线",
        "玉琮之光体验馆：玉琮、玉璧礼制体系的数字沉浸展馆",
        "良渚古城意象街巷：还原良渚聚落肌理的可漫步文化街区",
        "稻作文明田园剧场：以五千年稻作传统为底本的四季农耕体验场"
      ]
    },
    "红水河文明长廊": {
      tag: "岩画记忆",
      title: "红水河文明长廊",
      paras: [
        "红水河是珠江流域西江的上游干流，流经广西腹地。华南珠江流域孕育了以史前岩画、大石铲遗存与骆越文化为代表的悠久文明脉络，是华南史前文明的核心代表区域。",
        "红水河文明长廊以「岩画记忆」为主题，把华南史前的山岩叙事带入园区，补全中华文明谱系的南方维度。"
      ],
      zones: [
        "岩画记忆长廊：华南史前岩画艺术的高精度复刻与数字演绎长卷",
        "大石铲农耕遗存展馆：呈现岭南地区新石器时代农耕文明形态",
        "骆越风物街区：骆越文化源流的风物、乐舞与非遗活态体验",
        "山水共生生态廊道：结合喀斯特地貌意象的生态游憩带"
      ]
    }
  };

  var COOP_TYPES = ["投资合作", "业态招商", "媒体合作", "人才自荐", "其他合作"];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- 通用弹层基建 ---------- */
  var maskEl = null, modalContentEl = null;

  function ensureModalShell() {
    if (maskEl) return;
    maskEl = document.createElement("div");
    maskEl.className = "gt-modal-mask";
    maskEl.innerHTML =
      '<div class="gt-modal" role="dialog" aria-modal="true">' +
      '<button class="gt-modal-close" aria-label="关闭">✕</button>' +
      '<div class="gt-modal-content"></div>' +
      "</div>";
    document.body.appendChild(maskEl);
    modalContentEl = maskEl.querySelector(".gt-modal-content");
    maskEl.querySelector(".gt-modal-close").addEventListener("click", closeModal);
    maskEl.addEventListener("click", function (e) { if (e.target === maskEl) closeModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
  }

  function openModal(html) {
    ensureModalShell();
    modalContentEl.innerHTML = html;
    maskEl.classList.add("gt-open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!maskEl) return;
    maskEl.classList.remove("gt-open");
    document.body.style.overflow = "";
  }

  /* ---------- 文明详情弹层 ---------- */
  function civModalHTML(civ) {
    return (
      '<span class="gt-modal-tag">' + esc(civ.tag) + "</span>" +
      "<h2>" + esc(civ.title) + "</h2>" +
      '<div class="gt-modal-divider"></div>' +
      civ.paras.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      "<h3>园区重点内容</h3>" +
      "<ul>" + civ.zones.map(function (z) { return "<li>" + esc(z) + "</li>"; }).join("") + "</ul>"
    );
  }

  function findCivCard(el) {
    var node = el;
    for (var i = 0; i < 12 && node && node !== document.body; i++) {
      var txt = (node.innerText || "");
      if (txt.length < 400) {
        for (var name in CIVS) {
          if (txt.indexOf(name) !== -1) return node;
        }
      }
      node = node.parentElement;
    }
    return null;
  }

  function cardCivName(card) {
    var txt = (card.innerText || "");
    for (var name in CIVS) {
      if (txt.indexOf(name) !== -1) return name;
    }
    return null;
  }

  /* ---------- 合作表单弹层 ---------- */
  function formModalHTML() {
    return (
      '<span class="gt-modal-tag">共创文明未来</span>' +
      "<h2>合作洽谈</h2>" +
      '<div class="gt-modal-divider"></div>' +
      '<p style="margin-bottom:22px;">请填写以下信息，我们将尽快与您联系。带 <span style="color:#E06C5A;">*</span> 为必填项。</p>' +
      '<form id="gt-coop-form" novalidate>' +
      '<div class="gt-form-grid">' +
      '<div class="gt-field"><label>合作类型</label><select name="type">' +
      COOP_TYPES.map(function (t) { return '<option value="' + esc(t) + '">' + esc(t) + "</option>"; }).join("") +
      "</select></div>" +
      '<div class="gt-field" data-name="org"><label>机构 / 单位名称</label><input name="org" type="text" placeholder="请输入机构或单位名称" /><span class="gt-err-msg"></span></div>' +
      '<div class="gt-field" data-name="name"><label>姓名<span class="gt-req">*</span></label><input name="name" type="text" placeholder="请输入您的姓名" /><span class="gt-err-msg"></span></div>' +
      '<div class="gt-field" data-name="contact"><label>联系方式<span class="gt-req">*</span></label><input name="contact" type="text" placeholder="手机号 / 微信号 / 邮箱" /><span class="gt-err-msg"></span></div>' +
      '<div class="gt-field gt-full" data-name="msg"><label>合作意向描述<span class="gt-req">*</span></label><textarea name="msg" placeholder="请简要描述您希望开展的合作内容"></textarea><span class="gt-err-msg"></span></div>' +
      "</div>" +
      '<button type="submit" class="gt-submit-btn">提交合作意向</button>' +
      '<p class="gt-form-tip">提交后将唤起您的邮件客户端并自动生成合作意向邮件，发送至 contact@lightbody.city 即完成合作登记；您也可直接致电或来函与我们联系。</p>' +
      "</form>"
    );
  }

  function showToast(msg) {
    var t = document.createElement("div");
    t.className = "gt-toast";
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("gt-show"); });
    setTimeout(function () {
      t.classList.remove("gt-show");
      setTimeout(function () { t.remove(); }, 400);
    }, 4200);
  }

  function setErr(field, msg) {
    field.classList.add("gt-error");
    field.querySelector(".gt-err-msg").textContent = msg;
  }

  function bindCoopForm(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      var get = function (n) { return form.querySelector('[name="' + n + '"]'); };
      var wrap = function (n) { return form.querySelector('[data-name="' + n + '"]'); };
      ["name", "contact", "msg"].forEach(function (n) {
        var w = wrap(n);
        w.classList.remove("gt-error");
        var v = get(n).value.trim();
        if (!v) { setErr(w, "请填写此项"); ok = false; }
        else if (n === "contact" && v.length < 5) { setErr(w, "联系方式格式不正确"); ok = false; }
        else if (n === "msg" && v.length < 10) { setErr(w, "请至少输入 10 个字，便于我们了解您的需求"); ok = false; }
      });
      if (!ok) return;
      var subject = "【光体之城合作意向】" + get("type").value + " - " + get("name").value.trim();
      var body =
        "合作类型：" + get("type").value + "\n" +
        "机构/单位：" + (get("org").value.trim() || "未填写") + "\n" +
        "姓名：" + get("name").value.trim() + "\n" +
        "联系方式：" + get("contact").value.trim() + "\n\n" +
        "合作意向描述：\n" + get("msg").value.trim();
      var mailto = "mailto:contact@lightbody.city?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      closeModal();
      showToast("合作意向已生成，正在唤起邮件客户端，请确认发送即完成登记");
      setTimeout(function () { window.location.href = mailto; }, 600);
    });
  }

  /* ---------- 全局点击接管 ---------- */
  function bindGlobalClicks() {
    document.addEventListener("click", function (e) {
      var target = e.target;
      if (!(target instanceof Element)) return;
      if (target.closest(".gt-modal-mask")) return; /* 弹层内部点击不重复处理 */

      var coop = target.closest('a[href^="mailto:"]');
      if (coop && (coop.innerText || "").indexOf("合作洽谈") !== -1) {
        e.preventDefault();
        openModal(formModalHTML());
        bindCoopForm(document.getElementById("gt-coop-form"));
        return;
      }

      var card = findCivCard(target);
      if (card) {
        var name = cardCivName(card);
        if (name) {
          e.preventDefault();
          openModal(civModalHTML(CIVS[name]));
        }
      }
    });
  }

  /* ---------- 注入新板块 ---------- */
  function entitySectionHTML() {
    return (
      '<section class="gt-section" id="gt-entity">' +
      '<div class="gt-section-inner">' +
      '<div class="gt-eyebrow">PROJECT ENTITY</div>' +
      '<h2 class="gt-section-title">项目主体与团队</h2>' +
      '<p class="gt-section-sub">千亿级文明工程，以专业组织与专业团队为根基，稳步推进从概念到落地的全过程。</p>' +
      '<div class="gt-entity-grid">' +
      '<div class="gt-entity-card"><h3>开发主体</h3><p>光体之城项目开发主体正在组建中，按「政府指导、企业运作、市场机制」的框架推进公司设立、资本结构设计与项目公司治理体系搭建，同步开展项目立项前置研究。</p></div>' +
      '<div class="gt-entity-card"><h3>核心团队</h3><p>团队由五类专业背景的成员构成：大型文旅项目操盘、考古文博内容策划、科幻文创与IP运营、商业综合体运营管理、数字科技与智慧园区建设，覆盖从策划、规划到运营的全生命周期能力。</p></div>' +
      '<div class="gt-entity-card"><h3>顾问体系</h3><p>正在组建覆盖考古学、文化遗产保护、城市规划、生态可持续发展领域的专家顾问委员会，为五大文明内容体系的学术严谨性把关，并与国内外文博科研机构建立课题合作。</p></div>' +
      "</div>" +
      '<div class="gt-entity-note">如您具备文旅开发、文博研究、科幻产业、商业运营领域的专业资源，欢迎通过「合作洽谈」提交人才自荐或机构合作意向，与我们一起共建光体之城。</div>' +
      "</div></section>"
    );
  }

  function newsSectionHTML() {
    var items = [
      { y: "2026", md: "09.11", title: "「北纬30度·光体之城」官方网站正式上线", desc: "项目概念官网面向全球发布，系统呈现使命愿景、五大文明内容体系、六大功能区规划与项目数据，公众可通过官网了解项目全貌。" },
      { y: "2026", md: "09.11", title: "五大文明内容体系首次公开", desc: "以上古昆仑为宇宙轴心、三星堆、红山、良渚、红水河为四大支柱的文明根脉内容体系在官网首次完整公开，各文明板块的深度内容将持续更新。" },
      { y: "2026", md: "09.11", title: "全球合作通道正式开启", desc: "面向全球开启投资合作、业态招商、媒体合作与人才自荐四类合作通道，合作方可通过官网「合作洽谈」入口提交意向。" }
    ];
    return (
      '<section class="gt-section" id="gt-news">' +
      '<div class="gt-section-inner">' +
      '<div class="gt-eyebrow">PROJECT NEWS</div>' +
      '<h2 class="gt-section-title">项目动态</h2>' +
      '<p class="gt-section-sub">记录光体之城从概念走向现实的每一步。</p>' +
      '<div class="gt-news-list">' +
      items.map(function (n) {
        return '<div class="gt-news-item"><div class="gt-news-date"><div class="gt-y">' + n.y + '</div><div class="gt-md">' + n.md + '</div></div>' +
          '<div class="gt-news-body"><h4>' + esc(n.title) + "</h4><p>" + esc(n.desc) + "</p></div></div>";
      }).join("") +
      "</div></div></section>"
    );
  }

  function disclaimerHTML() {
    return (
      '<div class="gt-disclaimer">' +
      '<p>* 本站所载投资规模、用地规模、就业岗位、游客量、营收目标均为项目概念规划阶段的目标值，最终以政府主管部门批复文件及可行性研究报告为准。</p>' +
      '<p>项目选址、建设时序、业态内容存在调整可能，本站内容不构成任何投资承诺。</p>' +
      '<p class="gt-copy">© 2026 北纬30度 · 光体之城 · 保留所有权利</p>' +
      "</div>"
    );
  }

  function injectSections() {
    var root = document.getElementById("root");
    if (!root) return;
    var footer = document.querySelector("#contact");
    if (!footer) return;

    root.insertAdjacentHTML("beforeend", entitySectionHTML());
    root.insertAdjacentHTML("beforeend", newsSectionHTML());
    root.insertAdjacentHTML("beforeend", disclaimerHTML());
    /* 把原站页脚移到新板块之后，保持「主体/动态 → 页脚 → 声明」的浏览顺序 */
    root.insertBefore(footer, root.querySelector(".gt-disclaimer"));
  }

  /* ---------- 页脚「敬请期待」修复 ---------- */
  function fixFooterPlaceholder() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() === "敬请期待") {
        node.nodeValue = "官网在线合作通道已开启";
      }
    }
  }

  /* ---------- 初始化：等待 React 渲染完成 ---------- */
  function init() {
    if (!document.getElementById("contact")) { setTimeout(init, 300); return; }
    bindGlobalClicks();
    injectSections();
    fixFooterPlaceholder();

    /* 给文明卡片挂上可点样式 */
    document.querySelectorAll("#civilization [class*='group']").forEach(function (el) {
      var txt = el.innerText || "";
      for (var name in CIVS) {
        if (txt.indexOf(name) !== -1 && txt.indexOf("了解详情") !== -1) { el.classList.add("gt-card-hover"); break; }
      }
    });

    /* 新板块入场导航锚点：页脚核心板块里的链接若有指向，保持原样即可 */
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
