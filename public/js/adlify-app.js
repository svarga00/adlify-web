/**
 * ADLIFY — Frontend interakcie
 *
 * Vkladané do <body> v Layout.astro ako externý súbor /js/adlify-app.js.
 * Čerpá z dizajn tokenov z global.css (--grad-start, --grad-end, --bg, --ink, ...).
 *
 * Obsahuje:
 *  • initCursorBlob          — gradient kruh sledujúci kurzor (desktop only)
 *  • initWordRotator         — striedanie slov v hero a contact headline
 *  • initHeroGrowthChart     — animácia barov v hero chart cards (každých 5s)
 *  • initHeroTicker          — počítadlá čísel v hero
 *  • initCounters            — IntersectionObserver counter animation pre veľké čísla
 *  • initContactDrawer       — slide-in drawer s formulárom (z CTA tlačidiel)
 *  • initBeforeAfterSlider   — drag slider pre Pred/po sekciu (BEFORE/AFTER overlay)
 *  • initRevealOnScroll      — .rv → .rv.in animácia (delegovaná z Layoutu)
 */

(function () {
  'use strict';

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const isTouch = matchMedia('(hover: none) and (pointer: coarse)').matches;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
   * 1) CURSOR BLOB — gradient kruh sledujúci myš
   * ============================================================ */
  function initCursorBlob() {
    if (isTouch || reducedMotion) return;
    if (document.querySelector('[data-cursor-blob]')) return;

    const blob = document.createElement('div');
    blob.setAttribute('aria-hidden', 'true');
    blob.setAttribute('data-cursor-blob', '');
    blob.style.cssText = `
      position: fixed; top: 0; left: 0; width: 500px; height: 500px;
      pointer-events: none; z-index: 1;
      background: radial-gradient(circle, color-mix(in srgb, var(--grad-start) 14%, transparent), transparent 60%);
      mix-blend-mode: multiply; opacity: 0.55; will-change: transform;
      transform: translate3d(-1000px, -1000px, 0);
    `;
    document.body.appendChild(blob);

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let cx = tx, cy = ty;
    window.addEventListener('mousemove', (e) => {
      tx = e.clientX;
      ty = e.clientY;
    });
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      blob.style.transform = `translate3d(${cx - 250}px, ${cy - 250}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  /* ============================================================
   * 2) WORD ROTATOR — striedanie textov v hero / contact headline
   * ============================================================ */
  function initWordRotator() {
    // Hero rotator: nájde span s [data-rotator-target] a strieda 5 fráz
    document.querySelectorAll('[data-rotator-target]').forEach((span) => {
      const heroSequence = [
        'prináša čísla',
        'dvíha tržby',
        'škáluje e-shop',
        'mení návštevy',
        'zarába reálne',
      ];
      let i = 0;
      span.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      span.style.minWidth = span.offsetWidth + 'px'; // prevent layout jump
      setInterval(() => {
        i = (i + 1) % heroSequence.length;
        span.style.opacity = '0';
        span.style.transform = 'translateY(-8px)';
        setTimeout(() => {
          span.textContent = heroSequence[i];
          span.style.transform = 'translateY(8px)';
          void span.offsetWidth;
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        }, 300);
      }, 2200);
    });

    // Contact rotator: každý h1/h2/h3 s .grad span obsahujúcim "audit." sa rotuje
    document.querySelectorAll('h1, h2, h3').forEach((h) => {
      const gradSpan = h.querySelector('.grad');
      if (!gradSpan) return;
      if (gradSpan.hasAttribute('data-rotator-target')) return;
      const txt = (gradSpan.textContent || '').trim();
      const targets = ['audit.', 'stratégiu.', 'plán.', 'call.'];
      if (!targets.includes(txt)) return;

      const startIdx = targets.indexOf(txt);
      const sequence = targets.slice(startIdx).concat(targets.slice(0, startIdx));
      let i = 0;
      gradSpan.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      setInterval(() => {
        i = (i + 1) % sequence.length;
        gradSpan.style.opacity = '0';
        gradSpan.style.transform = 'translateY(-6px)';
        setTimeout(() => {
          gradSpan.textContent = sequence[i];
          gradSpan.style.transform = 'translateY(6px)';
          void gradSpan.offsetWidth;
          gradSpan.style.opacity = '1';
          gradSpan.style.transform = 'translateY(0)';
        }, 250);
      }, 2400);
    });
  }

  /* ============================================================
   * 3) HERO GROWTH CHART — animovať bary v hero card
   * ============================================================ */
  function initHeroGrowthChart() {
    const container = document.querySelector('[data-hero-bars]');
    if (!container) return;
    const bars = Array.from(container.querySelectorAll('.hero-bar'));
    if (!bars.length) return;

    function generateHeights() {
      const arr = [];
      for (let i = 0; i < bars.length; i++) {
        const phase = i / (bars.length - 1);
        const base = 12 + Math.pow(phase, 1.4) * 78;
        const noise = (Math.random() - 0.5) * 6;
        arr.push(Math.max(8, Math.min(96, base + noise)));
      }
      return arr;
    }

    function animate() {
      const heights = generateHeights();
      bars.forEach((b, i) => { b.style.height = heights[i] + '%'; });
    }

    setTimeout(animate, 400);
    if (!reducedMotion) {
      setInterval(() => {
        bars.forEach((b) => { b.style.height = '0%'; });
        setTimeout(animate, 250);
      }, 5000);
    }
  }

  /* ============================================================
   * 4) COUNTER ANIMATION — čísla od 0 do cieľa pri scrolle
   * ============================================================ */
  function initCounters() {
    if (reducedMotion) return;

    const candidates = $$('.num').filter((el) => {
      if (el.dataset.counterDone) return false;
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs < 28) return false;
      // Skip kalkulačka & Pred-po (tie majú vlastnú logiku)
      if (el.closest('.calc, [data-calc-revenue]')) return false;
      if (el.closest('[data-ba-grid], .ba-dashboard')) return false;
      // Skip case karty (tie sa neanimujú)
      if (el.closest('.case-card')) return false;
      return true;
    });

    candidates.forEach((el) => {
      const txt = (el.textContent || '').trim().replace(/\u00a0/g, ' ');
      // Match prefix (€, +, -), číslo (s tisícami), suffix (×, %, +, k, ...)
      const match = txt.match(/^([^\d.,+-]*)([+-]?[\d\s.,]+)([^\d.,]*)$/);
      if (!match) return;
      const prefix = match[1] || '';
      const numRaw = match[2].replace(/\s/g, '').replace(/,/g, '');
      const num = parseFloat(numRaw);
      const suffix = match[3] || '';
      if (isNaN(num) || num === 0) return;
      const hasDecimals = numRaw.includes('.');

      const animate = () => {
        if (el.dataset.counterDone) return;
        el.dataset.counterDone = '1';
        const start = performance.now();
        const duration = 1600;
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const v = num * eased;
          const f = hasDecimals
            ? v.toFixed(1)
            : Math.round(v).toLocaleString('sk-SK').replace(/,/g, ' ');
          el.textContent = prefix + f + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        el.textContent = prefix + '0' + suffix;
        requestAnimationFrame(tick);
      };

      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { animate(); io.disconnect(); }
      }, { threshold: 0.3 });
      io.observe(el);
    });
  }

  /* ============================================================
   * 5) CONTACT DRAWER — slide-in formulár sprava
   * ============================================================ */
  let drawerInstance = null;

  function ensureDrawer() {
    if (drawerInstance) return drawerInstance;

    // Scrim (pozadie)
    const scrim = document.createElement('div');
    scrim.style.cssText = `
      position: fixed; inset: 0; background: rgba(10,10,10,0.55);
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      opacity: 0; pointer-events: none; transition: opacity 0.3s; z-index: 500;
    `;

    // Drawer panel
    const drawer = document.createElement('aside');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.style.cssText = `
      position: fixed; top: 0; right: 0; height: 100dvh;
      width: min(560px, 100vw);
      background: var(--ink); color: var(--bg);
      transform: translateX(100%);
      transition: transform 0.38s cubic-bezier(0.22, 0.8, 0.2, 1);
      z-index: 501; display: flex; flex-direction: column;
      box-shadow: -24px 0 60px -20px rgba(0,0,0,0.5);
      overflow-y: auto;
    `;

    drawer.innerHTML = `
      <div style="padding: 22px 28px; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: space-between;">
        <div>
          <div style="font-family: var(--mono); font-size: 11px; opacity: 0.55; letter-spacing: 0.05em;">[ CONTACT ]</div>
          <div style="font-size: 18px; font-weight: 600; letter-spacing: -0.015em; margin-top: 2px;">Audit zdarma do 24 hodín</div>
        </div>
        <button data-drawer-close aria-label="Zavrieť" style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: var(--bg); display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div style="flex: 1; padding: 28px;">
        <p style="font-size: 14px; line-height: 1.55; opacity: 0.7; margin-bottom: 24px;">
          Napíšte nám pár viet o tom, čo riešite. Pozrieme sa na vaše účty, meranie, a dáme konkrétne odporúčania. Bez záväzku.
        </p>

        <form data-drawer-form>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
            <div>
              <label style="font-size: 11px; font-family: var(--mono); opacity: 0.55; display: block; margin-bottom: 8px; letter-spacing: 0.04em;">MENO *</label>
              <input required name="name"
                     style="width:100%; padding: 12px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.14); border-radius: 10px; color: var(--bg); font: inherit;">
            </div>
            <div>
              <label style="font-size: 11px; font-family: var(--mono); opacity: 0.55; display: block; margin-bottom: 8px; letter-spacing: 0.04em;">E-MAIL *</label>
              <input required type="email" name="email"
                     style="width:100%; padding: 12px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.14); border-radius: 10px; color: var(--bg); font: inherit;">
            </div>
          </div>

          <div style="margin-bottom: 14px;">
            <label style="font-size: 11px; font-family: var(--mono); opacity: 0.55; display: block; margin-bottom: 8px; letter-spacing: 0.04em;">FIRMA / WEB</label>
            <input name="company"
                   style="width:100%; padding: 12px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.14); border-radius: 10px; color: var(--bg); font: inherit;">
          </div>

          <div style="margin-bottom: 14px;">
            <label style="font-size: 11px; font-family: var(--mono); opacity: 0.55; display: block; margin-bottom: 8px; letter-spacing: 0.04em;">SPRÁVA *</label>
            <textarea required name="message" rows="4"
                      style="width:100%; padding: 12px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.14); border-radius: 10px; color: var(--bg); font: inherit; resize: vertical;"></textarea>
          </div>

          <button type="submit" class="btn btn-grad" style="width:100%; justify-content: center; padding: 14px;">
            Odoslať správu
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

          <div data-drawer-status style="margin-top: 12px; padding: 10px; border-radius: 8px; font-size: 13px; display: none;"></div>

          <p style="margin-top: 14px; font-size: 12px; opacity: 0.55; line-height: 1.5;">
            Odpovieme do 24 hodín. Bez predajného tlaku.
          </p>
        </form>
      </div>
    `;

    document.body.appendChild(scrim);
    document.body.appendChild(drawer);

    const close = () => {
      scrim.style.opacity = '0';
      scrim.style.pointerEvents = 'none';
      drawer.style.transform = 'translateX(100%)';
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    const open = (preset) => {
      preset = preset || {};
      scrim.style.opacity = '1';
      scrim.style.pointerEvents = 'auto';
      drawer.style.transform = 'translateX(0)';
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Pre-fill správy ak je preset.plan
      if (preset.plan) {
        const msg = drawer.querySelector('textarea[name="message"]');
        if (msg && !msg.value) msg.value = `Mám záujem o plán ${preset.plan}.`;
      }
      // Auto-focus prvého inputu
      setTimeout(() => {
        const firstInput = drawer.querySelector('input[name="name"]');
        if (firstInput) firstInput.focus();
      }, 400);
    };

    scrim.addEventListener('click', close);
    drawer.querySelector('[data-drawer-close]').addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    // Form submit handler — POST na Netlify funkciu /web-contact
    const form = drawer.querySelector('[data-drawer-form]');
    const status = drawer.querySelector('[data-drawer-status]');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {};
      form.querySelectorAll('input, textarea').forEach((el) => {
        if (el.name) data[el.name] = el.value;
      });

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.6';
      submitBtn.innerHTML = 'Odosielame…';

      try {
        const resp = await fetch('/.netlify/functions/web-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (resp.ok) {
          status.style.display = 'block';
          status.style.background = 'rgba(34,197,94,0.15)';
          status.style.color = '#86efac';
          status.textContent = '✓ Ďakujeme! Ozveme sa do 24 hodín.';
          form.reset();
        } else {
          throw new Error('failed');
        }
      } catch (err) {
        status.style.display = 'block';
        status.style.background = 'rgba(244,80,80,0.15)';
        status.style.color = '#fca5a5';
        status.textContent = 'Nepodarilo sa odoslať. Napíšte priamo na hello@adlify.eu.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.innerHTML = originalLabel;
      }
    });

    drawerInstance = { open, close };
    return drawerInstance;
  }

  function initContactDrawer() {
    // Verejné API
    window.openContact = (preset) => ensureDrawer().open(preset || {});
    window.closeContact = () => ensureDrawer().close();

    // Naviazať na všetky CTA tlačidlá podľa textu
    $$('button, a').forEach((el) => {
      const txt = (el.textContent || '').trim().toLowerCase();
      const triggers = [
        'bezplatná konzultácia',
        'získať audit',
        'napísať nám',
        'otvoriť formulár',
        'audit zadarmo',
        'chcem poradiť',
        'rezervovať',
        'chcem presný plán',
      ];
      if (!triggers.some((t) => txt.includes(t))) return;

      // Skip submit button vo vnútri samotného formulára
      if (el.closest('[data-drawer-form]')) return;

      el.addEventListener('click', (e) => {
        e.preventDefault();
        window.openContact();
      });
    });
  }

  /* ============================================================
   * 6) BEFORE/AFTER SLIDER — Pred-po sekcia
   *    Drag handle uprostred, ľavá strana = BEFORE, pravá = AFTER
   * ============================================================ */
  function initBeforeAfterSlider() {
    const wrapper = document.querySelector('[data-ba-slider]');
    if (!wrapper) return;
    const handle = wrapper.querySelector('[data-ba-handle]');
    const afterLayer = wrapper.querySelector('[data-ba-after]');
    if (!handle || !afterLayer) return;

    // KPI elementy v ľavom stĺpci (text mení sa s pozíciou)
    const elRev  = document.querySelector('[data-ba-metric="revenue"]');
    const elRoas = document.querySelector('[data-ba-metric="roas"]');
    const elConv = document.querySelector('[data-ba-metric="conv"]');
    const elCpa  = document.querySelector('[data-ba-metric="cpa"]');
    const dRev   = document.querySelector('[data-ba-delta="revenue"]');
    const dRoas  = document.querySelector('[data-ba-delta="roas"]');
    const dConv  = document.querySelector('[data-ba-delta="conv"]');
    const dCpa   = document.querySelector('[data-ba-delta="cpa"]');

    // Dashboard label + month label
    const dashMonth = document.querySelector('[data-ba-dash-month]');
    const labelEl   = document.querySelector('[data-ba-month-label]');
    const monthBtns = $$('[data-ba-month]');

    // BEFORE/AFTER labels v dashboarde
    const labelBefore = wrapper.querySelector('[data-ba-label-before]');
    const labelAfter  = wrapper.querySelector('[data-ba-label-after]');

    const KPI = {
      rev:  { before: 27480, after: 87412 },
      roas: { before: 2.11,  after: 5.42  },
      conv: { before: 251,   after: 1284  },
      cpa:  { before: 18.20, after: 8.40  }, // CPA klesá → "+/-" obrátene
    };
    const months = ['Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október'];

    const lerp = (a, b, t) => a + (b - a) * t;
    const fmtEur = (n) => '€' + Math.round(n).toLocaleString('sk-SK').replace(/,/g, ' ');
    const fmtRoas = (n) => n.toFixed(2) + '×';
    const fmtCpa  = (n) => '€' + n.toFixed(1);
    const pct = (val, isLowerBetter) => {
      const sign = val >= 0 ? '+' : '−';
      const isPos = isLowerBetter ? val < 0 : val > 0;
      return {
        text: sign + Math.abs(Math.round(val)) + '%',
        color: isPos ? 'rgb(22, 163, 74)' : 'rgb(220, 38, 38)',
      };
    };

    let pos = 35;     // % zľava (0..100)
    let dragging = false;
    let autoPlay = true;
    let autoT = 0;
    let rafId = null;

    function update() {
      const t = Math.max(0, Math.min(1, pos / 100));

      // Handle position
      handle.style.left = pos + '%';
      // After overlay clip-path: zobrazujeme len pravú časť za handle
      afterLayer.style.clipPath = `inset(0 0 0 ${pos}%)`;

      // KPI hodnoty
      const rev  = lerp(KPI.rev.before,  KPI.rev.after,  t);
      const roas = lerp(KPI.roas.before, KPI.roas.after, t);
      const conv = lerp(KPI.conv.before, KPI.conv.after, t);
      const cpa  = lerp(KPI.cpa.before,  KPI.cpa.after,  t);

      if (elRev)  elRev.textContent  = fmtEur(rev);
      if (elRoas) elRoas.textContent = fmtRoas(roas);
      if (elConv) elConv.textContent = Math.round(conv).toLocaleString('sk-SK').replace(/,/g, ' ');
      if (elCpa)  elCpa.textContent  = fmtCpa(cpa);

      // Delta % (oproti before baseline)
      const upRev  = ((rev  - KPI.rev.before)  / KPI.rev.before)  * 100;
      const upRoas = ((roas - KPI.roas.before) / KPI.roas.before) * 100;
      const upConv = ((conv - KPI.conv.before) / KPI.conv.before) * 100;
      const upCpa  = ((cpa  - KPI.cpa.before)  / KPI.cpa.before)  * 100;

      if (dRev)  { const r = pct(upRev,  false); dRev.textContent  = r.text; dRev.style.color  = r.color; }
      if (dRoas) { const r = pct(upRoas, false); dRoas.textContent = r.text; dRoas.style.color = r.color; }
      if (dConv) { const r = pct(upConv, false); dConv.textContent = r.text; dConv.style.color = r.color; }
      if (dCpa)  { const r = pct(upCpa,  true);  dCpa.textContent  = r.text; dCpa.style.color  = r.color; }

      // Month label + dashboard
      const monthIdx = Math.round(t * 7); // 0..7
      if (labelEl)   labelEl.textContent   = `Mesiac ${monthIdx + 1}/8`;
      if (dashMonth) dashMonth.textContent = months[monthIdx] + ' 2026';

      // Timeline buttons highlight
      monthBtns.forEach((b, i) => b.classList.toggle('active', i === monthIdx));

      // BEFORE/AFTER labels fade
      if (labelBefore) labelBefore.style.opacity = (1 - t * 0.6).toFixed(2);
      if (labelAfter)  labelAfter.style.opacity  = (0.4 + t * 0.6).toFixed(2);
    }

    // Auto-oscillation pri loadne (kým user nezačne ťahať)
    function tick() {
      if (!autoPlay) return;
      autoT += 0.012;
      pos = 50 + Math.sin(autoT) * 35; // oscilácia medzi 15% a 85%
      update();
      rafId = requestAnimationFrame(tick);
    }
    function startAutoPlay() {
      if (rafId) return;
      autoPlay = true;
      tick();
    }
    function stopAutoPlay() {
      autoPlay = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function setPosFromEvent(e) {
      const rect = wrapper.getBoundingClientRect();
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      pos = Math.max(2, Math.min(98, ((cx - rect.left) / rect.width) * 100));
      update();
    }

    const onDown = (e) => {
      stopAutoPlay();
      dragging = true;
      setPosFromEvent(e);
    };
    const onMove = (e) => {
      if (!dragging) return;
      e.preventDefault();
      setPosFromEvent(e);
    };
    const onUp = () => { dragging = false; };

    wrapper.addEventListener('mousedown',  onDown);
    wrapper.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mouseup',    onUp);
    window.addEventListener('touchmove',  onMove, { passive: false });
    window.addEventListener('touchend',   onUp);

    wrapper.style.touchAction = 'none';
    wrapper.style.userSelect = 'none';

    // Click on month → set position
    monthBtns.forEach((btn, idx) => {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', () => {
        stopAutoPlay();
        pos = (idx / 7) * 95 + 2.5;
        update();
      });
    });

    // Štart
    if (reducedMotion) {
      pos = 50;
      update();
    } else {
      startAutoPlay();
    }
  }

  /* ============================================================
   * 7) RANGE SLIDERS — gradient fill na track (calculator)
   *    Inicializujeme aj input rangy ktoré nie sú v calculator
   *    (ale calculator už sa stará sám o seba v index.astro).
   * ============================================================ */
  function initRangeSliders() {
    $$('input[type="range"]').forEach((slider) => {
      // Skip ak už má vlastný handler
      if (slider.dataset.gradientDone) return;
      slider.dataset.gradientDone = '1';

      const update = () => {
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const v   = parseFloat(slider.value) || 0;
        const pct = ((v - min) / (max - min)) * 100;
        slider.style.background =
          `linear-gradient(90deg, var(--grad-start) 0%, var(--grad-end) ${pct}%, var(--bg-mid) ${pct}%)`;
      };
      slider.addEventListener('input', update);
      update();
    });
  }

  /* ============================================================
   * 8) SERVICES ACCORDION — funguje na homepage aj /sluzby
   *    Klik na .svc-row (data-svc-toggle) prepne aktívny .svc-detail-pane
   * ============================================================ */
  function initServicesAccordion() {
    const toggles = $$('[data-svc-toggle]');
    if (!toggles.length) return;
    const panes = $$('[data-svc-pane]');

    toggles.forEach((btn) => {
      if (btn.dataset.svcWired === '1') return;
      btn.dataset.svcWired = '1';
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-svc-toggle');
        toggles.forEach((b) => b.classList.toggle('active', b.getAttribute('data-svc-toggle') === idx));
        panes.forEach((p)   => p.classList.toggle('active', p.getAttribute('data-svc-pane') === idx));
      });
    });
  }

  /* ============================================================
   * INIT — všetky moduly s try/catch wrapperom
   * ============================================================ */
  function init() {
    const safe = (name, fn) => { try { fn(); } catch (e) { console.warn('[adlify-app]', name, e); } };

    safe('cursorBlob',         initCursorBlob);
    safe('wordRotator',        initWordRotator);
    safe('heroGrowthChart',    initHeroGrowthChart);
    safe('counters',           initCounters);
    safe('contactDrawer',      initContactDrawer);
    safe('beforeAfter',        initBeforeAfterSlider);
    safe('rangeSliders',       initRangeSliders);
    safe('servicesAccordion',  initServicesAccordion);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
