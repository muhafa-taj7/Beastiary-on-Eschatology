/* ============================================================
   CATS.JS — Feline Marginalia for Kitāb al-Asrār
   In the tradition of medieval manuscript cat doodles.
   v2: proper hijab scarves, topi caps, two of each, top-border peek
   ============================================================ */

(function() {

  /* ================================================================
     1. HEADER CATS — two cats peeking over the TOP BORDER of the page
        Positioned absolutely, top edge, bodies hidden below border line
     ================================================================ */

  // Hijabi header peeker — scarf wraps head, fabric drapes down both sides
  const HEADER_HIJABI = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 72" width="90" height="72"
       class="cat-header-hijabi" role="img">
    <ellipse cx="45" cy="82" rx="32" ry="20" fill="#A33333"/>
    <ellipse cx="45" cy="46" rx="26" ry="24" fill="#F4EBD0"/>
    
    <polygon points="22,30 14,12 32,26" fill="#F4EBD0"/>
    <polygon points="68,30 76,12 58,26" fill="#F4EBD0"/>
 <polygon points="23,29 16,16 31,26" fill="#e8b4b8"/>
    <polygon points="67,29 74,16 59,26" fill="#e8b4b8"/>
    <path d="
      M 15,70
      C 10,40 20,20 45,20
      C 70,20 80,40 75,70
      L 15,70
      Z
      M 25,50
      C 25,38 35,34 45,31
      C 55,34 65,38 65,59
      C 65,60 55,64 45,64
      C 35,64 25,60 25,59
      Z" fill="#A33333" fill-rule="evenodd" stroke="#7C2323" stroke-width="1.5" />

    <circle cx="45" cy="66" r="2.5" fill="#C5A059"/>
    <ellipse cx="34" cy="48" rx="5" ry="6" fill="#1A1A1A"/>
    <ellipse cx="56" cy="48" rx="5" ry="6" fill="#1A1A1A"/>
    <ellipse cx="35.5" cy="46" rx="1.8" ry="2.2" fill="white"/>
    <!-- whiskers -->
    <line x1="18" y1="50" x2="38" y2="52" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="18" y1="55" x2="38" y2="55" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="52" y1="52" x2="72" y2="50" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="52" y1="55" x2="72" y2="55" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <ellipse cx="57.5" cy="46" rx="1.8" ry="2.2" fill="white"/>
    <!-- mouth -->
    <path d="M42,59 Q45,63 48,59" stroke="#2E2B26" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <polygon points="45,54 42,58 48,58" fill="#e8b4b8"/>
    <ellipse cx="28" cy="71" rx="10" ry="5" fill="#F4EBD0"/>
    <ellipse cx="62" cy="71" rx="10" ry="5" fill="#F4EBD0"/>
    <line x1="23" y1="70" x2="23" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="28" y1="69" x2="28" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="33" y1="70" x2="33" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="57" y1="70" x2="57" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="62" y1="69" x2="62" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="67" y1="70" x2="67" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
  </svg>`;
  
  // Topi male header peeker — red kufi cap sitting on top of head
  const HEADER_TOPI = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 72" width="90" height="72"
       class="cat-header-topi" aria-label="A topi-wearing cat peeks over the manuscript border" role="img">
    <!-- shoulders -->
    <ellipse cx="45" cy="82" rx="30" ry="18" fill="#3D3428"/>
    <!-- head -->
    <ellipse cx="45" cy="47" rx="24" ry="23" fill="#F4EBD0"/>
    <!-- ears -->
    <polygon points="23,32 15,14 33,28" fill="#F4EBD0"/>
    <polygon points="67,32 75,14 57,28" fill="#F4EBD0"/>
    <polygon points="24,31 17,18 32,28" fill="#e8b4b8"/>
    <polygon points="66,31 73,18 58,28" fill="#e8b4b8"/>
    <!-- TOPI / KUFI CAP: rounded dome sitting on the head -->
    <!-- cap dome -->
    <path d="M21,38 Q20,14 45,12 Q70,14 69,38 Z" fill="#A33333"/>
    <!-- cap brim band (darker strip) -->
    <rect x="21" y="34" width="48" height="7" rx="2" fill="#7C2323"/>
    <!-- decorative embroidery arcs on cap -->
    <path d="M26,28 Q45,20 64,28" fill="none" stroke="rgba(255,220,150,0.4)" stroke-width="1.4"/>
    <path d="M30,20 Q45,14 60,20" fill="none" stroke="rgba(255,220,150,0.3)" stroke-width="1.1"/>
    <!-- a small dot motif at cap center -->
    <circle cx="45" cy="16" r="2" fill="rgba(255,220,150,0.4)"/>
    <!-- face -->
    <ellipse cx="34" cy="46" rx="5" ry="5.5" fill="#1A1A1A"/>
    <ellipse cx="56" cy="46" rx="5" ry="5.5" fill="#1A1A1A"/>
    <ellipse cx="35.5" cy="44.5" rx="1.8" ry="2" fill="white"/>
    <ellipse cx="57.5" cy="44.5" rx="1.8" ry="2" fill="white"/>
    <!-- nose -->
    <polygon points="45,52 42,56 48,56" fill="#e8b4b8"/>
    <!-- mouth -->
    <path d="M42,56 Q45,60 48,56" stroke="#2E2B26" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <!-- whiskers -->
    <line x1="18" y1="52" x2="38" y2="54" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="18" y1="57" x2="38" y2="57" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="52" y1="54" x2="72" y2="52" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="52" y1="57" x2="72" y2="57" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <!-- paws gripping border -->
    <ellipse cx="28" cy="71" rx="10" ry="5" fill="#F4EBD0"/>
    <ellipse cx="62" cy="71" rx="10" ry="5" fill="#F4EBD0"/>
    <line x1="23" y1="70" x2="23" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="28" y1="69" x2="28" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="33" y1="70" x2="33" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="57" y1="70" x2="57" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="62" y1="69" x2="62" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
    <line x1="67" y1="70" x2="67" y2="74" stroke="#2E2B26" stroke-width="0.8"/>
  </svg>`;

  /* ================================================================
     2. CORNER PEEK CATS — hijabi (left), topi (right)
     ================================================================ */

  const CORNER_HIJABI = `
 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 72" width="90" height="72"
       class="cat-corner-peek"  role="img">
       <ellipse cx="45" cy="82" rx="32" ry="20" fill="#A33333"/>
    <ellipse cx="45" cy="46" rx="26" ry="24" fill="#F4EBD0"/>
    
    <polygon points="22,30 14,12 32,26" fill="#F4EBD0"/>
    <polygon points="68,30 76,12 58,26" fill="#F4EBD0"/>
 <polygon points="23,29 16,16 31,26" fill="#e8b4b8"/>
    <polygon points="67,29 74,16 59,26" fill="#e8b4b8"/>
    <path d="
      M 15,70
      C 10,40 20,20 45,20
      C 70,20 80,40 75,70
      L 15,70
      Z
      M 25,50
      C 25,38 35,34 45,31
      C 55,34 65,38 65,59
      C 65,60 55,64 45,64
      C 35,64 25,60 25,59
      Z" fill="#A33333" fill-rule="evenodd" stroke="#7C2323" stroke-width="1.5" />

    <circle cx="45" cy="66" r="2.5" fill="#C5A059"/>
    <ellipse cx="34" cy="48" rx="5" ry="6" fill="#1A1A1A"/>
    <ellipse cx="56" cy="48" rx="5" ry="6" fill="#1A1A1A"/>
    <ellipse cx="35.5" cy="46" rx="1.8" ry="2.2" fill="white"/>
    <!-- whiskers -->
    <line x1="18" y1="50" x2="38" y2="52" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="18" y1="55" x2="38" y2="55" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="52" y1="52" x2="72" y2="50" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="52" y1="55" x2="72" y2="55" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <ellipse cx="57.5" cy="46" rx="1.8" ry="2.2" fill="white"/>
    <!-- mouth -->
    <path d="M42,59 Q45,63 48,59" stroke="#2E2B26" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <polygon points="45,54 42,58 48,58" fill="#e8b4b8"/>
   
  </svg>
`;

  const CORNER_TOPI = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 65" width="72" height="65"
       class="cat-corner-peek" aria-hidden="true">
    <ellipse cx="36" cy="78" rx="26" ry="16" fill="#3D3428"/>
    <ellipse cx="36" cy="43" rx="22" ry="21" fill="#F4EBD0"/>
    <!-- ears -->
    <polygon points="16,30 9,13 25,26" fill="#F4EBD0"/>
    <polygon points="56,30 63,13 47,26" fill="#F4EBD0"/>
    <polygon points="17,29 11,17 24,26" fill="#e8b4b8"/>
    <polygon points="55,29 61,17 48,26" fill="#e8b4b8"/>
    <!-- TOPI CAP -->
    <path d="M15,34 Q14,12 36,10 Q58,12 57,34 Z" fill="#A33333"/>
    <rect x="15" y="30" width="42" height="7" rx="2" fill="#7C2323"/>
    <path d="M20,22 Q36,15 52,22" fill="none" stroke="rgba(255,220,150,0.38)" stroke-width="1.2"/>
    <path d="M24,15 Q36,10 48,15" fill="none" stroke="rgba(255,220,150,0.25)" stroke-width="1"/>
    <circle cx="36" cy="13" r="1.8" fill="rgba(255,220,150,0.4)"/>
    <!-- eyes -->
    <ellipse cx="26" cy="42" rx="4.5" ry="5" fill="#1A1A1A"/>
    <ellipse cx="46" cy="42" rx="4.5" ry="5" fill="#1A1A1A"/>
    <ellipse cx="27.5" cy="40.5" rx="1.6" ry="1.9" fill="white"/>
    <ellipse cx="47.5" cy="40.5" rx="1.6" ry="1.9" fill="white"/>
    <polygon points="36,48 33,52 39,52" fill="#e8b4b8"/>
    <line x1="14" y1="47" x2="28" y2="49" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <line x1="44" y1="49" x2="58" y2="47" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
  </svg>`;

  /* ================================================================
     3. MARGIN CATS — hijabi (left), topi (right)
     ================================================================ */

  const MARGIN_HIJABI = `
 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 120" width="64" height="120"
       class="cat-margin" aria-hidden="true">
    <ellipse cx="30" cy="92" rx="20" ry="24" fill="#EAD9B0"/>
    <ellipse cx="30" cy="56" rx="20" ry="19" fill="#F4EBD0"/>
    <polygon points="14,45 7,30 22,42" fill="#F4EBD0"/>
    <polygon points="15,44 9,33 21,42" fill="#e8b4b8"/>
    <polygon points="42,43 49,29 36,41" fill="#F4EBD0"/>
    <polygon points="41,42 47,32 37,41" fill="#e8b4b8"/>
            <path d="M32,108 Q67,100 58,78 Q52,62 61,60" stroke="#3D2028" stroke-width="5" fill="none" stroke-linecap="round"/>


    <path d="
      M 8,80
      C 4,60 10,36 30,36
      C 50,36 56,60 52,80
      C 55,100 45,140 30,115
      C 15,105 5,140 8,85
      Z
      M 15,57
      C 15,46 22,44 30,40
      C 38,44 45,46 45,57
      C 45,66 38,69 30,69
      C 22,69 15,66 15,57
      Z" fill="#A33333" fill-rule="evenodd" stroke="#7C2323" stroke-width="1.5" />

    <path d="M30,69 Q25,85 10,100" stroke="#7C2323" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M30,69 Q35,85 50,100" stroke="#7C2323" stroke-width="1.5" fill="none" opacity="0.6"/>
    <circle cx="30" cy="72" r="2.5" fill="#C5A059"/>
    <circle cx="30" cy="72" r="1.5" fill="#E8D4A0"/>

    <ellipse cx="22" cy="54" rx="4" ry="4.5" fill="#1A1A1A"/>
    <ellipse cx="38" cy="54" rx="4" ry="4.5" fill="#1A1A1A"/>
    <ellipse cx="23.2" cy="52.8" rx="1.4" ry="1.6" fill="white"/>
    <ellipse cx="39.2" cy="52.8" rx="1.4" ry="1.6" fill="white"/>
    <polygon points="30,59 28,62 32,62" fill="#e8b4b8"/>
    <path d="M28,62 Q30,65 32,62" stroke="#2E2B26" stroke-width="1" fill="none"/>
  
    <ellipse cx="18" cy="116" rx="10" ry="5.5" fill="#F4EBD0"/>
    <ellipse cx="38" cy="116" rx="10" ry="5.5" fill="#F4EBD0"/>

    <!-- whiskers -->
    <line x1="15" y1="58" x2="27" y2="60" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="15" y1="63" x2="27" y2="62" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
     <line x1="33" y1="60" x2="45" y2="58" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
    <line x1="33" y1="62" x2="45" y2="63" stroke="#2E2B26" stroke-width="0.8" opacity="0.5"/>
  </svg>`;
  

  const MARGIN_TOPI = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 120" width="64" height="120"
       class="cat-margin" aria-hidden="true">
    <path d="M32,108 Q58,100 55,78 Q52,62 42,67" stroke="#3D3428" stroke-width="5" fill="none" stroke-linecap="round"/>
    <ellipse cx="28" cy="92" rx="20" ry="24" fill="#EAD9B0"/>
    <ellipse cx="28" cy="90" rx="22" ry="25" fill="#3D3428" opacity="0.45"/>
    <!-- head -->
    <ellipse cx="30" cy="56" rx="20" ry="19" fill="#F4EBD0"/>
    <!-- ears -->
    <polygon points="14,45 7,30 22,42" fill="#F4EBD0"/>
    <polygon points="15,44 9,33 21,42" fill="#e8b4b8"/>
    <polygon points="42,43 49,29 36,41" fill="#F4EBD0"/>
    <polygon points="41,42 47,32 37,41" fill="#e8b4b8"/>
    <!-- TOPI CAP -->
    <path d="M11,46 Q10,28 30,26 Q50,28 49,46 Z" fill="#A33333"/>
    <rect x="11" y="42" width="38" height="7" rx="2" fill="#7C2323"/>
    <path d="M16,37 Q30,30 44,37" fill="none" stroke="rgba(255,220,150,0.38)" stroke-width="1.2"/>
    <path d="M20,30 Q30,25 40,30" fill="none" stroke="rgba(255,220,150,0.25)" stroke-width="1"/>
    <circle cx="30" cy="28" r="1.8" fill="rgba(255,220,150,0.4)"/>
    <!-- face -->
    <ellipse cx="22" cy="55" rx="4" ry="4.5" fill="#1A1A1A"/>
    <ellipse cx="38" cy="55" rx="4" ry="4.5" fill="#1A1A1A"/>
    <ellipse cx="23.2" cy="53.5" rx="1.4" ry="1.6" fill="white"/>
    <ellipse cx="39.2" cy="53.5" rx="1.4" ry="1.6" fill="white"/>
    <polygon points="30,60 28,63 32,63" fill="#e8b4b8"/>
    <path d="M28,63 Q30,66 32,63" stroke="#2E2B26" stroke-width="1" fill="none"/>
    <line x1="8"  y1="59" x2="20" y2="61" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <line x1="8"  y1="63" x2="20" y2="63" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <line x1="40" y1="61" x2="52" y2="59" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <line x1="40" y1="63" x2="52" y2="63" stroke="#2E2B26" stroke-width="0.7" opacity="0.5"/>
    <!-- paws -->
    <ellipse cx="16" cy="116" rx="10" ry="5.5" fill="#F4EBD0"/>
    <ellipse cx="36" cy="116" rx="10" ry="5.5" fill="#F4EBD0"/>
    <line x1="11" y1="114" x2="11" y2="119" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="16" y1="113" x2="16" y2="119" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="21" y1="114" x2="21" y2="119" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="31" y1="114" x2="31" y2="119" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="36" y1="113" x2="36" y2="119" stroke="#2E2B26" stroke-width="0.7"/>
    <line x1="41" y1="114" x2="41" y2="119" stroke="#2E2B26" stroke-width="0.7"/>
  </svg>`;

  /* ================================================================
     4. PAW PRINTS (section headers)
     ================================================================ */
  const PAW_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28" width="20" height="18" class="cat-paw" aria-hidden="true">
    <ellipse cx="15" cy="18" rx="7"   ry="6" fill="#C5A059" opacity="0.7"/>
    <ellipse cx="8"  cy="11" rx="3.5" ry="3" fill="#C5A059" opacity="0.7"/>
    <ellipse cx="15" cy="8"  rx="3.5" ry="3" fill="#C5A059" opacity="0.7"/>
    <ellipse cx="22" cy="11" rx="3.5" ry="3" fill="#C5A059" opacity="0.7"/>
  </svg>`;

  /* ================================================================
     5. CATCHWORD CATS — sleepy hijabi + sleepy topi side by side
     ================================================================ */
const CATCHWORD_HIJABI = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 40" width="40" height="30"
       class="cat-sleepy cat-interact" onclick="wakeCat(this)" aria-hidden="true">
    <ellipse cx="26" cy="25" rx="20" ry="17" fill="#F4EBD0"/>
    <polygon points="9,17 4,4 16,14" fill="#F4EBD0"/>
    <polygon points="43,17 48,4 36,14" fill="#F4EBD0"/>

    <path d="M 5,38 C 2,15 10,8 26,8 C 42,8 50,15 47,38 L 5,38 Z M 14,24 C 14,17 20,15 26,15 C 32,15 38,17 38,24 C 38,30 32,32 26,32 C 20,32 14,30 14,24 Z" 
          fill="#A33333" fill-rule="evenodd" stroke="#7C2323" stroke-width="1.2" />

    <circle cx="26" cy="34" r="2" fill="#C5A059"/>
    
    <g class="eye-closed">
      <path d="M17,24 Q20,22 23,24" stroke="#1A1A1A" stroke-width="1.4" fill="none" />
      <path d="M29,24 Q32,22 35,24" stroke="#1A1A1A" stroke-width="1.4" fill="none" />
    </g>

    <g class="eye-open" style="display:none;">
      <circle cx="20" cy="24" r="2.5" fill="#1A1A1A"/>
      <circle cx="32" cy="24" r="2.5" fill="#1A1A1A"/>
    </g>

    <polygon points="26,28 24,31 28,31" fill="#e8b4b8"/>
    
    <g class="z-text">
      <text x="40" y="13" font-size="7" fill="#A33333" font-family="serif" opacity="0.7">z</text>
      <text x="44" y="7"  font-size="5" fill="#A33333" font-family="serif" opacity="0.5">z</text>
    </g>
  </svg>`;

  const CATCHWORD_TOPI = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 40" width="40" height="30"
       class="cat-sleepy cat-sleepy-topi" aria-hidden="true">
    <ellipse cx="26" cy="27" rx="19" ry="16" fill="#F4EBD0"/>
    <!-- ears -->
    <polygon points="9,19 4,6 16,16" fill="#F4EBD0"/>
    <polygon points="10,18 6,9 15,16" fill="#e8b4b8"/>
    <polygon points="43,19 48,6 36,16" fill="#F4EBD0"/>
    <polygon points="42,18 46,9 37,16" fill="#e8b4b8"/>
    <!-- TOPI CAP -->
    <path d="M8,21 Q7,5 26,4 Q45,5 44,21 Z" fill="#A33333"/>
    <rect x="8" y="17" width="36" height="6" rx="2" fill="#7C2323"/>
    <path d="M13,13 Q26,7 39,13" fill="none" stroke="rgba(255,220,150,0.35)" stroke-width="1"/>
    <path d="M18,8"  fill="none"/>
    <circle cx="26" cy="6" r="1.5" fill="rgba(255,220,150,0.4)"/>
    <!-- sleepy closed eyes -->
    <path d="M15,26 Q19,23 23,26" stroke="#1A1A1A" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M29,26 Q33,23 37,26" stroke="#1A1A1A" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <polygon points="26,31 24,34 28,34" fill="#e8b4b8"/>
    <text x="40" y="13" font-size="7" fill="#A33333" font-family="serif" opacity="0.7">z</text>
    <text x="44" y="7"  font-size="5" fill="#A33333" font-family="serif" opacity="0.5">z</text>
  </svg>`;

  /* ================================================================
     STYLES
     ================================================================ */
  const style = document.createElement('style');
  style.textContent = `
    /* ── .manuscript-page needs position:relative for absolute kids ── */
    .manuscript-page { position: relative; }

    /* ── Header cats: row sitting AT the top edge, peeking over ── */
    .cat-top-border-row {
      position: absolute;
      top: -60px;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 4rem;
      pointer-events: none;
      z-index: 20;
    }
    .cat-header-hijabi {
      filter: drop-shadow(0 3px 8px rgba(0,0,0,0.28));
      animation: cat-bob-h 3.8s ease-in-out infinite;
    }
    .cat-header-topi {
      filter: drop-shadow(0 3px 8px rgba(0,0,0,0.28));
      animation: cat-bob-h 4.2s ease-in-out infinite;
      animation-delay: 1.7s;
    }
    @keyframes cat-bob-h {
      0%, 100% { transform: translateY(0)    rotate(-1.5deg); }
      50%       { transform: translateY(-8px) rotate(1.5deg); }
    }

    /* ── Corner cats ── */
    .cat-corner-left {
      position: absolute;
      bottom: -28px;
      left: -36px;
      z-index: 10;
      filter: drop-shadow(2px 3px 5px rgba(0,0,0,0.22));
      animation: peek-left 6s ease-in-out infinite;
      transform-origin: bottom left;
    }
    .cat-corner-right {
      position: absolute;
      bottom: -28px;
      right: -36px;
      z-index: 10;
      filter: drop-shadow(-2px 3px 5px rgba(0,0,0,0.22));
      animation: peek-right 5s ease-in-out infinite;
      animation-delay: 2.2s;
      transform-origin: bottom right;
    }
    @keyframes peek-left {
      0%, 35%, 100% { transform: translate(0,0)        rotate(0deg); }
      55%, 75%       { transform: translate(10px,-5px)  rotate(4deg); }
    }
    @keyframes peek-right {
      0%, 35%, 100% { transform: translate(0,0)         rotate(0deg); }
      55%, 75%       { transform: translate(-10px,-5px)  rotate(-4deg); }
    }

    /* ── Margin cats ── */
    .cat-margin-left {
      position: absolute;
      left: -78px;
      top: 36%;
      z-index: 10;
      filter: drop-shadow(3px 2px 5px rgba(0,0,0,0.2));
      animation: margin-sway 4.5s ease-in-out infinite;
    }
    .cat-margin-right {
      position: absolute;
      right: -78px;
      top: 56%;
      z-index: 10;
      filter: drop-shadow(-3px 2px 5px rgba(0,0,0,0.2));
      animation: margin-sway 4s ease-in-out infinite;
      animation-delay: 1.9s;
    }
    @keyframes margin-sway {
      0%, 100% { transform: translateY(0)    rotate(-2deg); }
      50%       { transform: translateY(-9px) rotate(2deg); }
    }

    /* ── Paw prints ── */
    .cat-paw {
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.35em;
      animation: paw-pulse 3s ease-in-out infinite;
    }
    @keyframes paw-pulse {
      0%, 80%, 100% { opacity: 1;   transform: scale(1); }
      40%            { opacity: 0.6; transform: scale(0.82); }
    }

    /* ── Catchword cats ── */
    .cat-catchword-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;
    }
    .cat-sleepy {
      animation: breathe 4.5s ease-in-out infinite;
    }
    .cat-sleepy-topi { animation-delay: 2.1s; }
    @keyframes breathe {
      0%, 100% { transform: scaleY(1); }
      50%       { transform: scaleY(1.08); }
    }

    /* ── Hide on small screens ── */
    @media (max-width: 1100px) {
      .cat-margin-left, .cat-margin-right { display: none; }
    }
    @media (max-width: 740px) {
      .cat-corner-left, .cat-corner-right { display: none; }
      .cat-top-border-row { gap: 1.5rem; top: -52px; }
    }
  `;
  document.head.appendChild(style);

  /* ================================================================
     DOM INJECTION
     ================================================================ */
  const page = document.querySelector('.manuscript-page');

  /* 1 — Header: hijabi + topi peeking over top border */
  if (page) {
    const row = document.createElement('div');
    row.className = 'cat-top-border-row';
    row.innerHTML = HEADER_HIJABI + HEADER_TOPI;
    page.appendChild(row);
  }

  /* 2 — Corners: hijabi left, topi right */
  if (page) {
    const cl = document.createElement('div');
    cl.className = 'cat-corner-left';
    cl.innerHTML = CORNER_HIJABI;
    page.appendChild(cl);

    const cr = document.createElement('div');
    cr.className = 'cat-corner-right';
    cr.innerHTML = CORNER_TOPI;
    page.appendChild(cr);
  }

  /* 3 — Margins: hijabi left, topi right */
  if (page) {
    const ml = document.createElement('div');
    ml.className = 'cat-margin-left';
    ml.innerHTML = MARGIN_HIJABI;
    page.appendChild(ml);

    const mr = document.createElement('div');
    mr.className = 'cat-margin-right';
    mr.innerHTML = MARGIN_TOPI;
    page.appendChild(mr);
  }

  /* 4 — Paw prints on every section header */
  document.querySelectorAll('.section-header').forEach(h => {
    h.insertAdjacentHTML('afterbegin', PAW_SVG);
  });

  /* 5 — Catchword: hijabi + topi sleeping side by side */
  const catchword = document.querySelector('.catchword');
  if (catchword) {
    const inner = catchword.innerHTML;
    catchword.innerHTML = `
      <span class="cat-catchword-wrap">
        ${CATCHWORD_HIJABI}${CATCHWORD_TOPI}
        <span>${inner}</span>
      </span>`;
  }


   // Function for Margin/Corner cats to "Purr"
document.querySelectorAll('.cat-margin, .cat-corner-peek').forEach(cat => {
  cat.addEventListener('click', function(e) {
    // Trigger animation
    this.classList.remove('cat-purr');
    void this.offsetWidth; // trigger reflow
    this.classList.add('cat-purr');

    // Create a "Meow" (Miyāw) floating text
    const meow = document.createElement('div');
    meow.className = 'cat-speech';
    meow.innerText = 'مياو'; // Arabic for Meow
    meow.style.left = (e.pageX - 20) + 'px';
    meow.style.top = (e.pageY - 40) + 'px';
    document.body.appendChild(meow);

    // Clean up
    setTimeout(() => meow.remove(), 2000);
  });
});

// Function for the Catchword cat to wake up
function wakeCat(element) {
  element.classList.add('cat-awake');
  
  // Go back to sleep after 3 seconds
  setTimeout(() => {
    element.classList.remove('cat-awake');
  }, 3000);
}

   

})();


