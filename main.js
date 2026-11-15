/* =========================================================
   Worldforge – website
   ---------------------------------------------------------
   CONFIG: everything you may need to change is here.
   ========================================================= */
const CONFIG = {
  links: {
    // Discord invite for the Worldforge server (Discord → Invite People → copy link)
    discord: 'https://discord.gg/teYTWFPcFe',
    // Installer path (put the file into web/download/)
    download: 'download/Worldforge-Setup-1.0.0-r11.exe'
  },
  store: {
    // Game server API. '/api' = the same server that serves this website (server/app.py).
    // If the API runs on another domain, put its full URL here, e.g. 'https://api.example.com/api'.
    api: '/api',
    // Shown only in preview mode (page opened as a file). The live store loads packages from the server.
    packages: [
      { id: 'g1', gold: 100,  bonus: 0,   price: { EUR: '1.99',  CZK: '49.00' },   name: { en: 'Handful of Gold', cs: 'Hrst zlata' } },
      { id: 'g2', gold: 300,  bonus: 20,  price: { EUR: '4.99',  CZK: '129.00' },  name: { en: 'Pouch', cs: 'Měšec' } },
      { id: 'g3', gold: 700,  bonus: 80,  price: { EUR: '10.99', CZK: '279.00' },  name: { en: 'Chest', cs: 'Truhla' }, feat: true },
      { id: 'g4', gold: 1600, bonus: 250, price: { EUR: '23.99', CZK: '599.00' },  name: { en: 'Vault', cs: 'Sejf' } },
      { id: 'g5', gold: 3500, bonus: 700, price: { EUR: '47.99', CZK: '1199.00' }, name: { en: 'Treasure', cs: 'Poklad' }, best: true }
    ]
  }
};

(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const L = window.I18N, t = L.t;
  const loc = () => (L.lang === 'cs' ? 'cs-CZ' : 'en-US');
  const cur = () => (L.lang === 'cs' ? 'CZK' : 'EUR');
  const num = n => Math.round(n).toLocaleString(loc());
  const money = (v, c = cur(), fine = false) => new Intl.NumberFormat(c === 'CZK' ? 'cs-CZ' : (L.lang === 'cs' ? 'cs-CZ' : 'en-IE'), {
    style: 'currency', currency: c, minimumFractionDigits: c === 'CZK' && !fine ? 0 : 2, maximumFractionDigits: c === 'CZK' && !fine ? 0 : 2
  }).format(Number(v));

  /* ---------- links ---------- */
  $$('[data-link]').forEach(a => {
    const url = CONFIG.links[a.dataset.link];
    if (!url) return;
    a.href = url;
    if (a.dataset.link === 'discord') { a.target = '_blank'; a.rel = 'noopener'; }
  });

  /* ---------- toast ---------- */
  const toastEl = $('#toast');
  let toastT;
  function toast(msg, kind = '') {
    toastEl.textContent = msg;
    toastEl.className = 'toast on ' + kind;
    clearTimeout(toastT);
    toastT = setTimeout(() => { toastEl.className = 'toast'; }, 5200);
  }

  /* ---------- navigation ---------- */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  const burger = $('#burger'), links = $('#navLinks');
  burger.addEventListener('click', () => {
    const open = !links.classList.contains('open');
    links.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', e => {
    if (e.target.closest('a')) { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => L.apply(b.dataset.lang)));

  /* =========================================================
     Decorative ribbons – a bundle of curves twisting around a Bézier path
     ========================================================= */
  const NS = 'http://www.w3.org/2000/svg';
  const css = getComputedStyle(document.documentElement);
  const ACCENT = css.getPropertyValue('--accent').trim() || '#e2b552';
  const ACCENT2 = css.getPropertyValue('--accent-2').trim() || '#f3d27a';
  const EMBER = css.getPropertyValue('--ember').trim() || '#ff7d45';
  const RIBBONS = {
    hero: [
      { p: [[-.04, .98], [.22, .98], [.36, .62], [.6, .5]], w: [.2, .09, .015], k: .9, n: 34 },
      { p: [[1.04, -.02], [.88, .02], [.78, .2], [.6, .3]], w: [.16, .07, .012], k: .8, n: 28 }
    ],
    cardA: [
      { p: [[-.02, .12], [.18, .14], [.3, .5], [.5, .5]], w: [.3, .12, .02], k: .7, n: 26 },
      { p: [[.5, .5], [.7, .5], [.82, .78], [1.02, .82]], w: [.02, .12, .26], k: .7, n: 26 }
    ],
    cardF: [{ p: [[.4, .5], [.62, .5], [.75, .3], [1.02, .28]], w: [.01, .14, .34], k: .9, n: 30 }],
    cta: [{ p: [[-.02, 1.05], [.3, 1.0], [.5, .36], [.8, .36]], w: [.4, .16, .02], k: .8, n: 28, ember: true }]
  };
  const bez = (p, t) => { const u = 1 - t, a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t; return [a * p[0][0] + b * p[1][0] + c * p[2][0] + d * p[3][0], a * p[0][1] + b * p[1][1] + c * p[2][1] + d * p[3][1]]; };
  const bezD = (p, t) => { const u = 1 - t; return [3 * u * u * (p[1][0] - p[0][0]) + 6 * u * t * (p[2][0] - p[1][0]) + 3 * t * t * (p[3][0] - p[2][0]), 3 * u * u * (p[1][1] - p[0][1]) + 6 * u * t * (p[2][1] - p[1][1]) + 3 * t * t * (p[3][1] - p[2][1])]; };
  const quad = (w, s) => (1 - s) * (1 - s) * w[0] + 2 * (1 - s) * s * w[1] + s * s * w[2];
  const byEl = new WeakMap();
  const resizer = new ResizeObserver(es => es.forEach(e => { const w = byEl.get(e.target); if (w) w.resize(); }));
  class Waves {
    constructor(svg, ribbons) { byEl.set(svg, this); this.svg = svg; this.ribbons = ribbons; this.t = Math.random() * 10; this.build(); this.resize(); resizer.observe(svg); }
    build() {
      this.svg.innerHTML = '';
      const defs = document.createElementNS(NS, 'defs');
      this.svg.appendChild(defs);
      this.ribbons.forEach(r => {
        const id = 'g' + Math.random().toString(36).slice(2, 8), g = document.createElementNS(NS, 'linearGradient');
        g.setAttribute('id', id); g.setAttribute('gradientUnits', 'userSpaceOnUse');
        const fadeIn = r.w[0] > r.w[2];
        const stops = fadeIn ? [[0, ACCENT, 0], [.4, ACCENT, .45], [.85, ACCENT2, .95], [1, ACCENT2, .5]] : [[0, ACCENT2, .5], [.15, ACCENT2, .95], [.6, ACCENT, .45], [1, ACCENT, 0]];
        if (r.ember) stops.splice(2, 0, [fadeIn ? .7 : .3, EMBER, .7]);
        stops.forEach(([o, c, a]) => { const s = document.createElementNS(NS, 'stop'); s.setAttribute('offset', o); s.setAttribute('stop-color', c); s.setAttribute('stop-opacity', a); g.appendChild(s); });
        defs.appendChild(g);
        r._grad = g; r._paths = [];
        for (let i = 0; i < r.n; i++) { const p = document.createElementNS(NS, 'path'); p.setAttribute('stroke', `url(#${id})`); this.svg.appendChild(p); r._paths.push(p); }
      });
    }
    resize() {
      const b = this.svg.getBoundingClientRect();
      this.W = Math.max(1, b.width); this.H = Math.max(1, b.height);
      this.svg.setAttribute('viewBox', `0 0 ${this.W} ${this.H}`);
      this.ribbons.forEach(r => { r._grad.setAttribute('x1', r.p[0][0] * this.W); r._grad.setAttribute('y1', r.p[0][1] * this.H); r._grad.setAttribute('x2', r.p[3][0] * this.W); r._grad.setAttribute('y2', r.p[3][1] * this.H); });
      this.draw();
    }
    draw() {
      const { W, H } = this, SEG = 56;
      this.ribbons.forEach(r => {
        const P = r.p.map(([x, y]) => [x * W, y * H]), base = [];
        for (let j = 0; j <= SEG; j++) { const s = j / SEG, pt = bez(P, s), d = bezD(P, s), len = Math.hypot(d[0], d[1]) || 1; base.push([pt[0], pt[1], -d[1] / len, d[0] / len, quad(r.w, s) * H, s]); }
        r._paths.forEach((path, i) => {
          const phi = (i / r.n) * Math.PI + this.t * .35;
          let d = '', depth = 0;
          for (let j = 0; j <= SEG; j++) { const [x, y, nx, ny, w, s] = base[j], ang = phi + s * r.k * Math.PI * 2, off = w * Math.sin(ang); depth += Math.cos(ang); d += (j ? 'L' : 'M') + (x + nx * off).toFixed(1) + ' ' + (y + ny * off).toFixed(1); }
          path.setAttribute('d', d);
          path.setAttribute('stroke-opacity', (.18 + .82 * Math.max(0, Math.min(1, .5 + .5 * (depth / (SEG + 1))))).toFixed(2));
        });
      });
    }
  }
  const waves = $$('svg[data-waves]').map(svg => RIBBONS[svg.dataset.waves] && new Waves(svg, JSON.parse(JSON.stringify(RIBBONS[svg.dataset.waves])))).filter(Boolean);
  const visible = new Set();
  const wio = new IntersectionObserver(es => es.forEach(e => { const w = waves.find(x => x.svg === e.target); if (w) e.isIntersecting ? visible.add(w) : visible.delete(w); }), { rootMargin: '100px' });
  waves.forEach(w => wio.observe(w.svg));
  let last = 0;
  (function loop(ts) {
    if (ts - last > 33) { const dt = Math.min(.1, (ts - last) / 1000); last = ts; visible.forEach(w => { w.t += dt; w.draw(); }); }
    if (!reduce) requestAnimationFrame(loop);
  })(0);

  /* ---------- game window mock-up: the online world clock never stops ---------- */
  const dateEl = $('#mockDate'), moneyEl = $('#mockMoney');
  const day = new Date(2026, 0, 1);
  let cash = 1240, tick = 0;
  const showDate = () => { dateEl.textContent = day.toLocaleDateString(loc(), { month: 'long', day: 'numeric', year: 'numeric' }); moneyEl.textContent = num(cash); };
  if (!reduce) setInterval(() => { day.setDate(day.getDate() + 1); cash += 6 + Math.sin(tick++ / 3) * 4; showDate(); }, 1400);

  /* ---------- typing effect in the map card ---------- */
  const typeEl = $('#typeState');
  if (reduce) typeEl.textContent = t('names')[0];
  else {
    let ni = 0, ci = 0, del = false;
    (function type() {
      const names = t('names'), w = names[ni % names.length];
      if (!del) { ci++; if (ci > w.length) { del = true; return setTimeout(type, 1500); } }
      else { ci--; if (ci <= 0) { ci = 0; del = false; ni++; } }
      typeEl.textContent = w.slice(0, ci);
      setTimeout(type, del ? 35 : 85);
    })();
  }

  /* =========================================================
     Gold store
     ========================================================= */
  const API = CONFIG.store.api.replace(/\/$/, '');
  let MODE = location.protocol === 'file:' ? 'preview' : 'checking';   // preview | checking | live | offline
  let PACKS = CONFIG.store.packages;
  const SKEY = 'wf-web-session';
  const saved = { get() { try { return JSON.parse(localStorage.getItem(SKEY)) || null; } catch (e) { return null; } }, set(v) { try { v ? localStorage.setItem(SKEY, JSON.stringify(v)) : localStorage.removeItem(SKEY); } catch (e) { } } };
  let session = saved.get();          // { token, mode, user: { name, gameGold, gameSyncAt, pending, purchases } }
  let pendingPack = null, pollT = null;

  async function api(path, opts = {}) {
    const headers = { 'Content-Type': 'application/json' };
    if (session && session.token) headers.Authorization = 'Bearer ' + session.token;
    const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), opts.timeout || 15000);
    let res;
    try { res = await fetch(API + path, { method: opts.method || 'GET', headers, body: opts.body ? JSON.stringify(opts.body) : undefined, signal: ctl.signal }); }
    catch (e) { const err = new Error('network'); err.status = 0; throw err; }
    finally { clearTimeout(timer); }
    let data = null;
    try { data = await res.json(); } catch (e) { }
    if (!res.ok) { const err = new Error((data && data.error) || 'http_' + res.status); err.status = res.status; throw err; }
    return data;
  }
  const setSession = s => { session = s; saved.set(s); renderAccount(); };
  const packName = id => { const p = PACKS.find(x => x.id === id); return p ? p.name[L.lang] || p.name.en : id; };
  function ago(ts) {
    const s = Math.max(0, Date.now() / 1000 - ts);
    if (s < 60) return t('ago.now');
    if (s < 3600) return t('ago.min', { n: Math.floor(s / 60) });
    if (s < 86400) return t('ago.h', { n: Math.floor(s / 3600) });
    return t('ago.d', { n: Math.floor(s / 86400) });
  }

  // banner + notes depending on the mode
  function renderMode() {
    const b = $('#storeBanner');
    const note = MODE === 'preview' ? t('note.preview') : MODE === 'offline' ? t('banner.offline') : '';
    b.hidden = !note; b.textContent = note; b.className = 'store-banner ' + MODE;
    $$('[data-mode-note]').forEach(n => { n.hidden = !note; n.textContent = note; });
  }

  // account bar, nav button, recent purchases
  const acctEl = $('#acct'), navAcct = $('#navAcct'), navAcctText = $('#navAcctText'), recentEl = $('#recent');
  function renderAccount() {
    const u = session && session.user;
    acctEl.classList.toggle('in', !!u);
    navAcct.classList.toggle('in', !!u);
    if (u) {
      const known = u.gameGold !== null && u.gameGold !== undefined;
      navAcctText.textContent = known ? `${u.name} · ${num(u.gameGold)} ${t('gold')}` : u.name;
      acctEl.innerHTML = `
        <span class="acct-av">${esc(u.name.charAt(0).toUpperCase())}</span>
        <div class="acct-t"><b>${t('acct.in.t', { name: esc(u.name) })}</b>
          <span>${known && u.gameSyncAt ? t('acct.sync', { gold: num(u.gameGold), ago: ago(u.gameSyncAt) }) : t('acct.nosync')}</span></div>
        <div class="acct-act">
          ${u.pending ? `<span class="acct-pend"><i></i>${t('acct.pending', { gold: num(u.pending) })}</span>` : ''}
          ${known ? `<span class="acct-bal"><svg class="i16"><use href="#i-coin"/></svg>${num(u.gameGold)}</span>` : ''}
          <button class="btn btn-ghost btn-sm" type="button" data-act="logout">${t('acct.logout')}</button>
        </div>`;
    } else {
      navAcctText.textContent = t('nav.login');
      acctEl.innerHTML = `
        <span class="acct-av"><svg><use href="#i-user"/></svg></span>
        <div class="acct-t"><b>${t('acct.out.t')}</b><span>${t('acct.out.s')}</span></div>
        <div class="acct-act"><button class="btn btn-gold btn-sm" type="button" data-act="login" ${MODE === 'offline' || MODE === 'checking' ? 'disabled' : ''}>${t('acct.login')}</button></div>`;
    }
    const list = (u && u.purchases) || [];
    recentEl.hidden = !list.length;
    recentEl.innerHTML = list.length ? `<h4>${t('rec.h')}</h4>` + list.slice(0, 3).map(p => {
      const st = p.status === 'refunded' ? ['ref', t('rec.refunded')] : p.deliveredAt ? ['ok', t('rec.delivered')] : ['wait', t('rec.waiting')];
      return `<div class="rec-r"><span class="rec-n">${esc(packName(p.package))}</span><span class="rec-g"><svg class="i14"><use href="#i-coin"/></svg>${num(p.gold)}</span>
        <span class="rec-p">${money(p.amount, p.currency)}</span><span class="rec-d">${p.paidAt ? new Date(p.paidAt * 1000).toLocaleDateString(loc()) : ''}</span>
        <span class="rec-s ${st[0]}">${st[0] === 'ok' ? '<svg class="i14"><use href="#i-check"/></svg>' : '<i></i>'}${st[1]}</span></div>`;
    }).join('') : '';
  }

  // packages
  function renderPacks() {
    const c = cur(), off = MODE === 'offline' || MODE === 'checking';
    $('#packs').innerHTML = PACKS.map((p, i) => {
      const total = p.gold + p.bonus, price = p.price[c];
      const coins = Array.from({ length: Math.min(5, i + 1) }, () => '<svg><use href="#i-coin"/></svg>').join('');
      const tag = p.feat ? t('pack.rec') : p.best ? t('pack.best') : '';
      return `
        <article class="pack${p.feat ? ' feat' : ''}">
          ${tag ? `<span class="pack-badge${p.feat ? '' : ' alt'}">${tag}</span>` : ''}
          <div class="pack-n">${esc(p.name[L.lang] || p.name.en)}</div>
          <div class="pack-coins" aria-hidden="true">${coins}</div>
          <div class="pack-g">${num(total)}<small>${t('gold')}</small></div>
          <div class="pack-b">${p.bonus ? `<em>${t('pack.bonus', { n: num(p.bonus) })}</em>${num(p.gold)} + ${num(p.bonus)}` : t('pack.base')}</div>
          <div class="pack-p"><b>${money(price, c)}</b><span>${t('pack.per', { price: money(price / total * 100, c, true) })}</span></div>
          <button class="btn ${p.feat ? 'btn-gold' : 'btn-ghost'} btn-sm btn-block" type="button" data-buy="${esc(p.id)}" ${off ? 'disabled' : ''}>${t('pack.buy')}</button>
        </article>`;
    }).join('');
  }

  // dialogs
  const loginDlg = $('#loginDlg'), buyDlg = $('#buyDlg'), buyForm = $('#buyForm');
  const openDlg = d => { if (!d.open) { if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', ''); } };
  $$('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d || e.target.closest('[data-close]')) d.close(); }));

  function openLogin() {
    if (MODE === 'offline' || MODE === 'checking') return;
    $('#loginErr').innerHTML = '';
    $('#loginForm').reset();
    openDlg(loginDlg);
    setTimeout(() => $('#loginForm [name=username]').focus(), 50);
  }

  $('#loginForm').addEventListener('submit', async e => {
    e.preventDefault();
    const f = e.target, err = $('#loginErr'), btn = $('#loginBtn');
    const username = f.username.value.trim(), password = f.password.value;
    if (!username || !password) { err.textContent = t('err.empty'); return; }
    btn.disabled = true; btn.textContent = t('login.busy'); err.textContent = '';
    try {
      if (MODE === 'preview') {
        if (password.length < 4) throw Object.assign(new Error('pw'), { status: -1 });
        await new Promise(r => setTimeout(r, 400));
        setSession({ token: 'preview', mode: 'preview', user: { name: username, gameGold: 150, gameSyncAt: Date.now() / 1000, pending: 0, purchases: [] } });
      } else {
        const data = await api('/auth/login', { method: 'POST', body: { username, password } });
        setSession({ token: data.token, mode: 'live', user: data.user });
        refreshMe();
      }
      loginDlg.close();
      toast(t('toast.welcome', { name: session.user.name }), 'ok');
      if (pendingPack) { const id = pendingPack; pendingPack = null; openBuy(id); }
    } catch (ex) {
      if (ex.status === 401) err.innerHTML = `${t('err.cred')}<small>${t('err.cred2')}</small>`;
      else if (ex.status === 429) err.textContent = t('err.many');
      else if (ex.status === -1) err.textContent = t('err.pw4');
      else err.textContent = t('err.net');
    } finally {
      btn.disabled = false; btn.textContent = t('login.btn');
    }
  });

  function logout() {
    if (MODE === 'live' && session && session.token) api('/auth/logout', { method: 'POST' }).catch(() => { });
    clearTimeout(pollT);
    setSession(null);
    toast(t('toast.logout'));
  }

  async function refreshMe() {
    if (MODE !== 'live' || !session || !session.token) return;
    try {
      const before = session.user ? session.user.pending : 0;
      const u = await api('/me');
      setSession({ ...session, user: u });
      if (before > 0 && u.pending < before) toast(t('toast.delivered', { gold: num(before - u.pending) }), 'ok');
      clearTimeout(pollT);
      if (u.pending > 0) pollT = setTimeout(() => { if (document.visibilityState === 'visible') refreshMe(); else pollT = setTimeout(refreshMe, 10000); }, 10000);
    } catch (ex) {
      if (ex.status === 401) setSession(null);
    }
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') refreshMe(); });

  // purchase
  let buying = null;
  function openBuy(id) {
    const p = PACKS.find(x => x.id === id);
    if (!p || MODE === 'offline' || MODE === 'checking') return;
    if (!session) { pendingPack = id; openLogin(); return; }
    buying = p;
    const c = cur(), total = p.gold + p.bonus;
    buyForm.innerHTML = `
      <div class="modal-h"><span class="buy-coin"><svg><use href="#i-coin"/></svg></span><button class="modal-x" type="button" data-close aria-label="${t('close')}">×</button></div>
      <h3>${t('buy.h')}</h3>
      ${MODE === 'preview' ? `<div class="preview-note">${t('note.preview')}</div>` : ''}
      <dl class="sum">
        <div><dt>${t('buy.pkg')}</dt><dd>${esc(p.name[L.lang] || p.name.en)}</dd></div>
        <div><dt>${t('buy.gold')}</dt><dd>${num(total)}${p.bonus ? ` <span class="sum-b">(${t('buy.incl', { n: num(p.bonus) })})</span>` : ''}</dd></div>
        <div><dt>${t('buy.acct')}</dt><dd>${esc(session.user.name)}</dd></div>
        <div class="total"><dt>${t('buy.total')}</dt><dd>${money(p.price[c], c)}</dd></div>
      </dl>
      <p class="pp-note"><span class="pp-logo"><b>Pay</b><i>Pal</i></span>${t('buy.paypal')}</p>
      <label class="check"><input type="checkbox" id="buyAgree"><span>${t('buy.agree')}</span></label>
      <p class="form-err" id="buyErr" role="alert"></p>
      <button class="btn btn-gold btn-block" type="submit" id="buyBtn">${t('buy.btn')}</button>`;
    bindTerms(buyForm);
    openDlg(buyDlg);
  }

  buyForm.addEventListener('submit', async e => {
    e.preventDefault();
    const err = $('#buyErr'), btn = $('#buyBtn');
    if (!$('#buyAgree').checked) { err.textContent = t('buy.needAgree'); return; }
    btn.disabled = true; btn.textContent = t('buy.busy'); err.textContent = '';
    if (MODE === 'preview') {
      await new Promise(r => setTimeout(r, 600));
      buyForm.innerHTML = `
        <div class="modal-h"><span></span><button class="modal-x" type="button" data-close aria-label="${t('close')}">×</button></div>
        <div class="done"><svg><use href="#i-check"/></svg><h3>${t('done.h')}</h3>
          <p>${t('done.p', { gold: num(buying.gold + buying.bonus), name: esc(session.user.name) })}</p>
          <button class="btn btn-gold btn-block" type="button" data-close>${t('done.btn')}</button></div>`;
      return;
    }
    try {
      const data = await api('/store/checkout', { method: 'POST', body: { packageId: buying.id, currency: cur(), lang: L.lang } });
      if (!data || !data.url) throw new Error('no_url');
      location.href = data.url;                       // → PayPal
    } catch (ex) {
      if (ex.status === 401) { buyDlg.close(); setSession(null); pendingPack = buying.id; openLogin(); return; }
      err.textContent = t('buy.err');
      btn.disabled = false; btn.textContent = t('buy.btn');
    }
  });

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-buy]');
    if (b) { openBuy(b.dataset.buy); return; }
    const a = e.target.closest('[data-act]');
    if (a) a.dataset.act === 'login' ? openLogin() : logout();
  });
  navAcct.addEventListener('click', () => { if (session) $('#store').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); else openLogin(); });

  /* ---------- terms of use ---------- */
  const tDlg = $('#terms'), tBody = $('#termsBody');
  function renderTerms() {
    const T = L.TERMS[L.lang];
    tBody.innerHTML = `<p class="preview-note">${t('terms.note')}</p><p class="lead-t">${esc(T.lead)}</p>` + T.sec.map((s, i) => `<h4 id="t${i}">${esc(s[0])}</h4><p>${esc(s[1])}</p>`).join('');
  }
  function bindTerms(root) {
    $$('[data-terms]', root).forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      const i = +a.dataset.terms;
      openDlg(tDlg);
      $$('h4', tBody).forEach(h => h.classList.remove('hit'));
      if (i > 0) { const h = $('#t' + i, tBody); h.classList.add('hit'); h.scrollIntoView({ block: 'start' }); } else tDlg.scrollTop = 0;
    }));
  }
  bindTerms(document);
  $('#termsClose').addEventListener('click', () => tDlg.close());

  /* ---------- language changes re-render the dynamic parts ---------- */
  document.addEventListener('langchange', () => {
    renderMode(); renderPacks(); renderAccount(); renderTerms(); showDate();
    if (buyDlg.open && buying) openBuy(buying.id);
  });

  /* ---------- start ---------- */
  L.apply(L.detect());

  (async () => {
    if (MODE !== 'preview') {
      try { await api('/health', { timeout: 5000 }); MODE = 'live'; } catch (e) { MODE = 'offline'; }
    }
    if (session && session.mode !== (MODE === 'preview' ? 'preview' : 'live')) { session = null; saved.set(null); }
    if (MODE === 'live') {
      try {
        const d = await api('/store/packages');
        PACKS = d.packages.map(p => ({ id: p.id, gold: p.gold, bonus: p.bonus, price: p.price, name: p.name, feat: p.feat, best: p.best }));
      } catch (e) { MODE = 'offline'; }
    }
    renderMode(); renderPacks(); renderAccount();
    // back from PayPal (?purchase=success|cancel|failed)
    const q = new URLSearchParams(location.search), r = q.get('purchase');
    if (r) {
      toast(t(r === 'success' ? 'toast.success' : r === 'cancel' ? 'toast.cancel' : 'toast.failed'), r === 'success' ? 'ok' : r === 'cancel' ? '' : 'err');
      q.delete('purchase');
      history.replaceState(null, '', location.pathname + (q.toString() ? '?' + q : '') + location.hash);
    }
    refreshMe();
  })();

  /* ---------- count-up numbers ---------- */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    const el = e.target, to = +el.dataset.count;
    if (reduce) return;
    const t0 = performance.now();
    (function step(now) { const p = Math.min(1, (now - t0) / 1300); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); })(t0);
  }), { threshold: .6 });
  $$('[data-count]').forEach(el => cio.observe(el));

  /* ---------- reveal on scroll ---------- */
  const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }), { threshold: .1, rootMargin: '0px 0px -40px 0px' });
  $$('.sec-head, .card, .stat, .how li, .si-box, .dc-card, .faq, .states-tiles li').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = ((i % 4) * 60) + 'ms';
    rio.observe(el);
  });
})();
