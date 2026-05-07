/* ============================================================
   CATS.JS — Feline Marginalia for Kitāb al-Asrār
   In the tradition of medieval manuscript cat doodles.
   ============================================================ */

(function() {

  /* ── SVG Definitions ── */

  // Main hijabi cat — sitting upright, peeking over the header
  const CAT_HEADER_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 130" width="120" height="130" class="cat-header" aria-label="A hijabi cat blesses this manuscript" role="img">
    <!-- hijab/body -->
    <ellipse cx="60" cy="105" rx="42" ry="32" fill="#7C2323"/>
    <path d="M18 105 Q20 70 60 68 Q100 70 102 105 Z" fill="#A33333"/>
    <!-- hijab sides framing face -->
    <path d="M28 82 Q22 95 20 110" stroke="#7C2323" stroke-width="3" fill="none"/>
    <path d="M92 82 Q98 95 100 110" stroke="#7C2323" stroke-width="3" fill="none"/>
    <!-- hijab top wrap -->
    <ellipse cx="60" cy="75" rx="34" ry="14" fill="#A33333"/>
    <!-- head -->
    <ellipse cx="60" cy="58" rx="28" ry="26" fill="#F4EBD0"/>
    <!-- ears (inside hijab, just peeking) -->
    <polygon points="36,46 30,30 44,40" fill="#F4EBD0"/>
    <polygon points="84,46 90,30 76,40" fill="#F4EBD0"/>
    <polygon points="37,44 32,33 43,41" fill="#e8b4b8"/>
    <polygon points="83,44 88,33 77,41" fill="#e8b4b8"/>
    <!-- hijab covering ears partially -->
    <ellipse cx="60" cy="70" rx="34" ry="12" fill="#A33333"/>
    <!-- face -->
    <!-- eyes -->
    <ellipse cx="48" cy="56" rx="6" ry="7" fill="#1A1A1A"/>
    <ellipse cx="72" cy="56" rx="6" ry="7" fill="#1A1A1A"/>
    <ellipse cx="50" cy="54" rx="2" ry="2.5" fill="white"/>
    <ellipse cx="74" cy="54" rx="2" ry="2.5" fill="white"/>
    <!-- golden eyes glow -->
    <ellipse cx="48" cy="56" rx="4.5" ry="5.5" fill="#C5A059" opacity="0.3"/>
    <ellipse cx="72" cy="56" rx="4.5" ry="5.5" fill="#C5A059" opacity="0.3"/>
    <!-- nose -->
    <polygon points="60,63 57,67 63,67" fill="#e8b4b8"/>
    <!-- mouth -->
    <path d="M57,67 Q60,71 63,67" stroke="#2E2B26" stroke-width="1.2" fill="none"/>
    <!-- whiskers -->
    <line x1="30" y1="63" x2="52" y2="65" stroke="#2E2B26" stroke-width="0.8" opacity="0.6"/>
    <line x1="30" y1="67" x2="52" y2="67" stroke="#2E2B26" stroke-width="0.8" opacity="0.6"/>
    <line x1="68" y1="65" x2="90" y2="63" stroke="#2E2B26" stroke-width="0.8" opacity="0.6"/>
    <line x1="68" y1="67" x2="90" y2="67" stroke="#2E2B26" stroke-width="0.8" opacity="0.6"/>
    <!-- hijab pin/brooch -->
    <circle cx="60" cy="80" r="3.5" fill="#C5A059"/>
    <circle cx="60" cy="80" r="2" fill="#E8D4A0"/>
    <!-- paws peeking at bottom -->
    <ellipse cx="44" cy="130" rx="12" ry="7" fill="#F4EBD0"/>
    <ellipse cx="76" cy="130" rx="12" ry="7" fill="#F4EBD0"/>
    <!-- toe lines -->
    <line x1="38" y1="128" x2="38" y2="133" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="44" y1="127" x2="44" y2="133" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="50" y1="128" x2="50" y2="133" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="70" y1="128" x2="70" y2="133" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="76" y1="127" x2="76" y2="133" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="82" y1="128" x2="82" y2="133" stroke="#2E2B26" stroke-width="0.8"/>
  </svg>`;

  // Corner peeker cat — just eyes, ears and top of head peeking around the corner
  const CAT_CORNER_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 60" width="70" height="60" class="cat-corner-peek" aria-hidden="true">
    <!-- hijab peek -->
    <ellipse cx="35" cy="55" rx="30" ry="16" fill="#A33333"/>
    <!-- head peeking up -->
    <ellipse cx="35" cy="38" rx="24" ry="22" fill="#F4EBD0"/>
    <!-- ears -->
    <polygon points="14,28 9,12 22,24" fill="#F4EBD0"/>
    <polygon points="56,28 61,12 48,24" fill="#F4EBD0"/>
    <polygon points="15,27 11,16 21,24" fill="#e8b4b8"/>
    <polygon points="55,27 59,16 49,24" fill="#e8b4b8"/>
    <!-- hijab top, covering head partially -->
    <ellipse cx="35" cy="46" rx="28" ry="11" fill="#A33333"/>
    <!-- eyes — wide and curious -->
    <ellipse cx="25" cy="36" rx="5.5" ry="6.5" fill="#1A1A1A"/>
    <ellipse cx="45" cy="36" rx="5.5" ry="6.5" fill="#1A1A1A"/>
    <ellipse cx="27" cy="34" rx="1.8" ry="2.2" fill="white"/>
    <ellipse cx="47" cy="34" rx="1.8" ry="2.2" fill="white"/>
    <!-- nose -->
    <polygon points="35,42 33,45 37,45" fill="#e8b4b8"/>
    <!-- whiskers -->
    <line x1="16" y1="41" x2="30" y2="43" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <line x1="40" y1="43" x2="54" y2="41" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
  </svg>`;

  // Margin cat — sitting sideways like a real manuscript marginalia doodle
  const CAT_MARGIN_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 110" width="60" height="110" class="cat-margin" aria-hidden="true">
    <!-- tail curling behind -->
    <path d="M30 100 Q55 95 52 75 Q50 60 40 65" stroke="#A33333" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- body -->
    <ellipse cx="25" cy="88" rx="18" ry="22" fill="#A33333"/>
    <!-- hijab/body cloth -->
    <ellipse cx="25" cy="85" rx="20" ry="24" fill="#7C2323" opacity="0.5"/>
    <!-- head -->
    <ellipse cx="28" cy="55" rx="18" ry="17" fill="#F4EBD0"/>
    <!-- ear -->
    <polygon points="14,46 8,33 20,44" fill="#F4EBD0"/>
    <polygon points="15,45 10,36 19,43" fill="#e8b4b8"/>
    <polygon points="38,44 44,32 35,43" fill="#F4EBD0"/>
    <polygon points="37,43 43,35 35,42" fill="#e8b4b8"/>
    <!-- hijab -->
    <ellipse cx="28" cy="63" rx="21" ry="10" fill="#A33333"/>
    <path d="M8 63 Q5 75 7 90" stroke="#A33333" stroke-width="4" fill="none"/>
    <!-- eyes -->
    <ellipse cx="22" cy="53" rx="4.5" ry="5" fill="#1A1A1A"/>
    <ellipse cx="34" cy="53" rx="4.5" ry="5" fill="#1A1A1A"/>
    <ellipse cx="23.5" cy="51.5" rx="1.5" ry="1.8" fill="white"/>
    <ellipse cx="35.5" cy="51.5" rx="1.5" ry="1.8" fill="white"/>
    <!-- nose -->
    <polygon points="28,59 26,62 30,62" fill="#e8b4b8"/>
    <!-- mouth -->
    <path d="M26,62 Q28,65 30,62" stroke="#2E2B26" stroke-width="1" fill="none"/>
    <!-- whiskers -->
    <line x1="10" y1="59" x2="23" y2="60" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <line x1="10" y1="62" x2="23" y2="62" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <line x1="33" y1="60" x2="46" y2="59" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <line x1="33" y1="62" x2="46" y2="62" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <!-- paws -->
    <ellipse cx="14" cy="108" rx="9" ry="5" fill="#F4EBD0"/>
    <ellipse cx="34" cy="108" rx="9" ry="5" fill="#F4EBD0"/>
    <line x1="10" y1="106" x2="10" y2="110" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="14" y1="105" x2="14" y2="110" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="18" y1="106" x2="18" y2="110" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="30" y1="106" x2="30" y2="110" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="34" y1="105" x2="34" y2="110" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="38" y1="106" x2="38" y2="110" stroke="#2E2B26" stroke-width="0.7"/>
  </svg>`;

  // Tiny cat paw prints for the section dividers
  const PAW_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28" width="20" height="18" class="cat-paw" aria-hidden="true">
    <ellipse cx="15" cy="18" rx="7" ry="6" fill="#C5A059" opacity="0.7"/>
    <ellipse cx="8" cy="11" rx="3.5" ry="3" fill="#C5A059" opacity="0.7"/>
    <ellipse cx="15" cy="8" rx="3.5" ry="3" fill="#C5A059" opacity="0.7"/>
    <ellipse cx="22" cy="11" rx="3.5" ry="3" fill="#C5A059" opacity="0.7"/>
  </svg>`;

  // Catchword cat — just a sleepy/winking cat face
  const CAT_SLEEPY_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 38" width="40" height="30" class="cat-sleepy" aria-hidden="true">
    <ellipse cx="25" cy="24" rx="20" ry="16" fill="#F4EBD0"/>
    <!-- ears -->
    <polygon points="8,16 4,4 15,13" fill="#F4EBD0"/>
    <polygon points="9,15 6,7 14,13" fill="#e8b4b8"/>
    <polygon points="42,16 46,4 35,13" fill="#F4EBD0"/>
    <polygon points="41,15 44,7 36,13" fill="#e8b4b8"/>
    <!-- hijab suggestion — small cloth at base -->
    <ellipse cx="25" cy="35" rx="18" ry="7" fill="#A33333" opacity="0.8"/>
    <!-- closed/sleepy eyes — curved lines -->
    <path d="M14,22 Q18,19 22,22" stroke="#1A1A1A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M28,22 Q32,19 36,22" stroke="#1A1A1A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- nose -->
    <polygon points="25,26 23,29 27,29" fill="#e8b4b8"/>
    <!-- zzz -->
    <text x="38" y="12" font-size="7" fill="#A33333" font-family="serif" opacity="0.7">z</text>
    <text x="42" y="7" font-size="5" fill="#A33333" font-family="serif" opacity="0.5">z</text>
  </svg>`;

  /* ── Inject Styles ── */
  const style = document.createElement('style');
  style.textContent = `
    /* Header cat wrapper */
    .cat-header-wrapper {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 1.2rem;
      margin-bottom: -0.5rem;
      position: relative;
    }
    .cat-header {
      animation: cat-bob 3.5s ease-in-out infinite;
      transform-origin: bottom center;
      filter: drop-shadow(0 3px 6px rgba(0,0,0,0.18));
    }
    @keyframes cat-bob {
      0%, 100% { transform: translateY(0) rotate(-1deg); }
      50%       { transform: translateY(-5px) rotate(1deg); }
    }

    /* Corner peek cat */
    .cat-corner-container {
      position: absolute;
      bottom: -30px;
      left: -34px;
      z-index: 10;
      animation: cat-peek 5s ease-in-out infinite;
      transform-origin: bottom left;
      filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
    }
    @keyframes cat-peek {
      0%, 40%, 100% { transform: translateX(0); }
      60%, 80%      { transform: translateX(8px); }
    }

    /* Margin cat */
    .cat-margin-container {
      position: absolute;
      right: -72px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      animation: cat-margin-sway 4s ease-in-out infinite;
      transform-origin: bottom center;
      filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
    }
    @keyframes cat-margin-sway {
      0%, 100% { transform: translateY(-50%) rotate(-2deg); }
      50%       { transform: translateY(calc(-50% - 6px)) rotate(2deg); }
    }

    /* Paw prints in section headers */
    .cat-paw {
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.3em;
      animation: paw-stamp 2s ease-in-out infinite;
    }
    @keyframes paw-stamp {
      0%, 90%, 100% { opacity: 1; transform: scale(1); }
      45%            { opacity: 0.6; transform: scale(0.85); }
    }

    /* Catchword sleepy cat */
    .cat-catchword-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;
    }
    .cat-sleepy {
      animation: cat-breathe 4s ease-in-out infinite;
    }
    @keyframes cat-breathe {
      0%, 100% { transform: scaleY(1); }
      50%       { transform: scaleY(1.06); }
    }

    /* Tooltip on hover for the header cat */
    .cat-header-wrapper .cat-tooltip {
      display: none;
      position: absolute;
      top: -2.2rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.72rem;
      font-style: italic;
      color: var(--madder);
      font-family: var(--font-latin, serif);
      white-space: nowrap;
      pointer-events: none;
      background: rgba(244,235,208,0.92);
      padding: 0.2rem 0.6rem;
      border: 1px solid var(--gold-pale, #E8D4A0);
    }
    .cat-header-wrapper:hover .cat-tooltip {
      display: block;
    }

    /* On small screens, hide margin cat */
    @media (max-width: 1060px) {
      .cat-margin-container { display: none; }
    }
    @media (max-width: 720px) {
      .cat-corner-container { display: none; }
    }
  `;
  document.head.appendChild(style);

  /* ── 1. Header Cat ── */
  const titleBlock = document.querySelector('.page-title-block');
  if (titleBlock) {
    const wrapper = document.createElement('div');
    wrapper.className = 'cat-header-wrapper';
    wrapper.innerHTML = CAT_HEADER_SVG + `<span class="cat-tooltip">بِسْمِ الله · In the name of Allah</span>`;
    titleBlock.parentNode.insertBefore(wrapper, titleBlock);
  }

  /* ── 2. Corner Peek Cat ── */
  const page = document.querySelector('.manuscript-page');
  if (page) {
    const cornerCat = document.createElement('div');
    cornerCat.className = 'cat-corner-container';
    cornerCat.innerHTML = CAT_CORNER_SVG;
    page.appendChild(cornerCat);
  }

  /* ── 3. Margin Cat (right side, midway down) ── */
  const pageInner = document.querySelector('.page-inner');
  if (pageInner) {
    // Only show on desktop — the CSS hides it on small screens
    const marginCat = document.createElement('div');
    marginCat.className = 'cat-margin-container';
    marginCat.innerHTML = CAT_MARGIN_SVG;
    // We attach to the manuscript-page so positioning works
    if (page) page.appendChild(marginCat);
  }

  /* ── 4. Paw Print on Every Section Header ── */
  document.querySelectorAll('.section-header').forEach(h => {
    h.insertAdjacentHTML('afterbegin', PAW_SVG);
  });

  /* ── 5. Sleepy Cat by the Catchword ── */
  const catchword = document.querySelector('.catchword');
  if (catchword) {
    const originalText = catchword.innerHTML;
    catchword.innerHTML = `<span class="cat-catchword-wrap">${CAT_SLEEPY_SVG}<span>${originalText}</span></span>`;
  }

})();
