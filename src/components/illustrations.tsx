// Custom illustrations in the Shelfkar palette. Each one stands in for a real
// photo until you add it in src/site.config.ts (see `photos`).

const INK = "#141C3F";
const INK_SOFT = "#3C4570";
const SAFFRON = "#E8A13A";
const SAFFRON_LIGHT = "#F4D3A0";
const LEAF = "#2F6B4F";
const MIST = "#DDE3EC";
const WHITE = "#FFFFFF";

type Props = { className?: string; title: string };

export function FactoryIllustration({ className, title }: Props) {
  return (
    <svg viewBox="0 0 480 360" className={className} role="img" aria-label={title}>
      <defs>
        <clipPath id="ill-factory-clip">
          <rect width="480" height="360" />
        </clipPath>
      </defs>
      <g clipPath="url(#ill-factory-clip)">
        <rect width="480" height="360" fill="#EEF1F5" />
        <rect y="300" width="480" height="60" fill="#E2E7EE" />
        {/* window */}
        <rect x="320" y="44" width="120" height="84" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M380 44v84M320 86h120" stroke={INK} strokeWidth="3" />
        {/* hanging lamp */}
        <path d="M262 0v34" stroke={INK} strokeWidth="3" />
        <path d="M240 54a22 20 0 0 1 44 0z" fill={INK} />
        <rect x="256" y="54" width="12" height="5" rx="2" fill={SAFFRON} />
        {/* mixing tank */}
        <path d="M60 220 54 300M132 220l6 80" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <rect x="48" y="86" width="96" height="134" rx="16" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="M52 206 96 248l44-42" fill={WHITE} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <circle cx="96" cy="126" r="15" fill={WHITE} stroke={INK} strokeWidth="3" />
        <path d="m96 126 8-7" stroke={SAFFRON} strokeWidth="3" strokeLinecap="round" />
        <rect x="66" y="166" width="60" height="16" rx="4" fill={MIST} />
        {/* pipe to filler */}
        <path d="M144 150h86v24" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="219" y="172" width="22" height="14" rx="3" fill={INK_SOFT} />
        <rect x="228" y="186" width="4" height="16" rx="2" fill={SAFFRON} />
        {/* conveyor */}
        <rect x="190" y="266" width="8" height="34" fill={INK_SOFT} />
        <rect x="432" y="266" width="8" height="34" fill={INK_SOFT} />
        <rect x="170" y="252" width="290" height="16" rx="8" fill={INK} />
        {[186, 222, 258, 294, 330, 366, 402, 438].map((x) => (
          <circle key={x} cx={x} cy="260" r="4" fill={INK_SOFT} />
        ))}
        {/* jar being filled */}
        <rect x="210" y="202" width="40" height="50" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="214" y="226" width="32" height="23" rx="6" fill={SAFFRON_LIGHT} />
        {/* finished jars */}
        {[290, 350, 410].map((x) => (
          <g key={x}>
            <rect x={x + 6} y="190" width="28" height="13" rx="3" fill={INK} />
            <rect x={x} y="201" width="40" height="51" rx="9" fill={WHITE} stroke={INK} strokeWidth="3" />
            <rect x={x + 1.5} y="218" width="37" height="15" fill={SAFFRON} />
          </g>
        ))}
        {/* quality check tag */}
        <circle cx="430" cy="166" r="16" fill={LEAF} />
        <path d="m422 166 6 6 11-12" fill="none" stroke={WHITE} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function PackagingIllustration({ className, title }: Props) {
  return (
    <svg viewBox="0 0 480 360" className={className} role="img" aria-label={title}>
      <defs>
        <clipPath id="ill-pack-clip">
          <rect width="480" height="360" />
        </clipPath>
      </defs>
      <g clipPath="url(#ill-pack-clip)">
        <rect width="480" height="360" fill="#EEF1F5" />
        <rect y="272" width="480" height="88" fill="#E2E7EE" />
        {/* colour swatch card */}
        <g transform="rotate(-6 120 100)">
          <rect x="56" y="58" width="132" height="86" rx="10" fill={WHITE} stroke={INK} strokeWidth="3" />
          <circle cx="88" cy="92" r="16" fill={INK} />
          <circle cx="122" cy="92" r="16" fill={SAFFRON} />
          <circle cx="156" cy="92" r="16" fill={LEAF} />
          <rect x="72" y="122" width="72" height="6" rx="3" fill={MIST} />
        </g>
        {/* shipping box */}
        <path d="M52 188 84 162h132l-28 26z" fill="#E2B576" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <rect x="52" y="188" width="136" height="96" fill="#D9A55B" stroke={INK} strokeWidth="3" />
        <path d="M188 188l28-26v96l-28 26z" fill="#C8924A" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <rect x="74" y="210" width="62" height="38" rx="4" fill={WHITE} />
        <rect x="82" y="219" width="40" height="5" rx="2.5" fill={INK} />
        <rect x="82" y="231" width="28" height="5" rx="2.5" fill={MIST} />
        {/* serum bottle */}
        <rect x="270" y="92" width="16" height="36" rx="8" fill={SAFFRON} />
        <rect x="264" y="124" width="28" height="22" rx="4" fill={INK_SOFT} />
        <rect x="250" y="144" width="56" height="140" rx="14" fill={INK} />
        <rect x="256" y="186" width="44" height="58" rx="4" fill={WHITE} />
        <rect x="256" y="200" width="44" height="12" fill={SAFFRON} />
        <rect x="263" y="222" width="30" height="5" rx="2.5" fill={MIST} />
        {/* jar */}
        <rect x="336" y="182" width="78" height="22" rx="6" fill={INK} />
        <rect x="326" y="200" width="98" height="84" rx="18" fill={WHITE} stroke={INK} strokeWidth="3" />
        <rect x="327.5" y="222" width="95" height="30" fill={SAFFRON} />
        <rect x="346" y="232" width="58" height="10" rx="5" fill={INK} />
        {/* leaf sprig, for Ayurvedic and herbal products */}
        <path d="M430 270c0-30 14-52 34-60-2 26-14 46-34 60z" fill={LEAF} />
        <path d="M430 270c6-20 16-38 30-56" stroke="#E3EEE8" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}

export function LaunchIllustration({ className, title }: Props) {
  return (
    <svg viewBox="0 0 480 360" className={className} role="img" aria-label={title}>
      <defs>
        <clipPath id="ill-launch-clip">
          <rect width="480" height="360" />
        </clipPath>
      </defs>
      <g clipPath="url(#ill-launch-clip)">
        <rect width="480" height="360" fill="#EEF1F5" />
        {/* phone */}
        <rect x="160" y="28" width="160" height="320" rx="26" fill={INK} />
        <rect x="170" y="46" width="140" height="290" rx="16" fill={WHITE} />
        {/* profile header */}
        <rect x="182" y="60" width="30" height="30" rx="8" fill={INK} />
        <rect x="190" y="66" width="14" height="14" rx="3" fill={WHITE} />
        <rect x="190" y="71" width="14" height="4" fill={SAFFRON} />
        <rect x="186" y="84" width="22" height="3" rx="1.5" fill={SAFFRON} />
        <rect x="222" y="64" width="64" height="7" rx="3.5" fill={INK} />
        <rect x="222" y="78" width="44" height="6" rx="3" fill={MIST} />
        {/* post grid */}
        {[
          [180, 104, SAFFRON_LIGHT],
          [222, 104, "#E7ECF3"],
          [264, 104, "#F6ECDC"],
          [180, 146, "#E7ECF3"],
          [222, 146, "#F6ECDC"],
          [264, 146, SAFFRON_LIGHT],
        ].map(([x, y, bg]) => (
          <g key={`${x}-${y}`}>
            <rect x={x as number} y={y as number} width="38" height="38" rx="4" fill={bg as string} />
            <rect x={(x as number) + 12} y={(y as number) + 8} width="14" height="5" rx="1.5" fill={INK} />
            <rect x={(x as number) + 10} y={(y as number) + 12} width="18" height="20" rx="4" fill={WHITE} />
            <rect x={(x as number) + 10} y={(y as number) + 18} width="18" height="6" fill={SAFFRON} />
          </g>
        ))}
        {/* product card */}
        <rect x="182" y="202" width="116" height="80" rx="10" fill="#F5F6F8" />
        <rect x="194" y="214" width="56" height="7" rx="3.5" fill={INK} />
        <rect x="194" y="228" width="80" height="5" rx="2.5" fill={MIST} />
        <rect x="194" y="252" width="92" height="20" rx="10" fill={SAFFRON} />
        <rect x="222" y="260" width="36" height="4" rx="2" fill={INK} />
        {/* order notifications */}
        <g>
          <rect x="332" y="86" width="124" height="48" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
          <circle cx="356" cy="110" r="12" fill={LEAF} />
          <path d="m350 110 4.5 4.5 8-9" fill="none" stroke={WHITE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="376" y="101" width="62" height="7" rx="3.5" fill={INK} />
          <rect x="376" y="114" width="40" height="6" rx="3" fill={MIST} />
        </g>
        <g>
          <rect x="344" y="150" width="112" height="44" rx="14" fill={WHITE} stroke={INK} strokeWidth="3" />
          <circle cx="366" cy="172" r="11" fill={LEAF} />
          <path d="m360.5 172 4 4 7.5-8.5" fill="none" stroke={WHITE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="385" y="164" width="54" height="7" rx="3.5" fill={INK} />
          <rect x="385" y="177" width="34" height="6" rx="3" fill={MIST} />
        </g>
        {/* parcel */}
        <path d="M40 236 64 216h76l-20 20z" fill="#E2B576" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <rect x="40" y="236" width="80" height="70" fill="#D9A55B" stroke={INK} strokeWidth="3" />
        <path d="M120 236l20-20v70l-20 20z" fill="#C8924A" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <rect x="74" y="236" width="12" height="70" fill="#E9C48C" />
        <rect x="52" y="256" width="20" height="14" rx="2" fill={WHITE} />
      </g>
    </svg>
  );
}

// Shown in place of the founder photo until one is added.
export function FounderPlaceholder({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
  return (
    <div
      className={`relative flex items-end justify-center overflow-hidden bg-[#EEF1F5] ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* a quiet portrait silhouette until a real photo is added */}
      <svg viewBox="0 0 200 250" className="absolute inset-x-0 bottom-0 h-[82%] w-full" preserveAspectRatio="xMidYMax meet">
        <circle cx="100" cy="92" r="46" fill="#DDE3EC" />
        <path d="M22 250c0-52 35-86 78-86s78 34 78 86z" fill="#DDE3EC" />
      </svg>
      <span className="absolute left-5 top-5 rounded-md bg-white px-2.5 py-1 font-display text-sm font-bold tracking-[-0.01em] text-ink-soft">
        {initials}
      </span>
    </div>
  );
}
