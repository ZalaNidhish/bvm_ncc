import { useState, useEffect } from "react";

/* Load Tabler Icons font (used for section headers, nav, certificate badges, etc.) */
function useTablerIcons() {
  useEffect(() => {
    if (!document.getElementById("tabler-icons-css")) {
      const link = document.createElement("link");
      link.id = "tabler-icons-css";
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css";
      document.head.appendChild(link);
    }
  }, []);
}

/* ─── DATA ─────────────────────────────────────────────────── */

const aims = [
  {
    emoji: "🎯",
    icon: "ti-shield-check",
    title: "Develop Character",
    desc: "Cultivate integrity, moral courage, and ethical values that define a responsible citizen and a dependable leader.",
  },
  {
    emoji: "🌟",
    icon: "ti-crown",
    title: "Build Leadership",
    desc: "Train cadets to take initiative, manage teams under pressure, and lead with confidence in any environment.",
  },
  {
    emoji: "⚖️",
    icon: "ti-ruler-2",
    title: "Promote Discipline",
    desc: "Foster punctuality, precision, and adherence to duty — habits that translate into excellence in every field.",
  },
  {
    emoji: "🤝",
    icon: "ti-heart-handshake",
    title: "Encourage Social Service",
    desc: "Instil a spirit of selfless service through community engagement, disaster relief, and national development activities.",
  },
  {
    emoji: "🕊️",
    icon: "ti-world",
    title: "Secular Outlook",
    desc: "Promote unity among cadets from all religions, regions, and communities to build a truly inclusive national force.",
  },
  {
    emoji: "🛡️",
    icon: "ti-flag-3",
    title: "National Manpower Reserve",
    desc: "Create a pool of trained, disciplined youth ready to serve the nation in times of need as a strategic reserve.",
  },
];

const activities = [
  {
    emoji: "⛺",
    icon: "ti-tent",
    label: "Annual Training Camps",
    sub: "ATC / CATC",
  },
  {
    emoji: "🪖",
    icon: "ti-military-rank",
    label: "Drill & Parade",
    sub: "Foot drill, ceremonial",
  },
  {
    emoji: "🎯",
    icon: "ti-target-arrow",
    label: "Weapon Training",
    sub: ".22 rifle, firing",
  },
  {
    emoji: "🧗",
    icon: "ti-mountain",
    label: "Adventure Activities",
    sub: "Rock climbing, rappelling",
  },
  {
    emoji: "🫶",
    icon: "ti-heart-handshake",
    label: "Social Service",
    sub: "NSS, community camps",
  },
  {
    emoji: "🏛️",
    icon: "ti-building-arch",
    label: "Republic Day Camp",
    sub: "National level, Delhi",
  },
  {
    emoji: "🥾",
    icon: "ti-map-2",
    label: "Trekking & Hiking",
    sub: "National integration",
  },
  {
    emoji: "🩸",
    icon: "ti-droplet-half-2",
    label: "Blood Donation",
    sub: "Health drives",
  },
  {
    emoji: "🌳",
    icon: "ti-trees",
    label: "Tree Plantation",
    sub: "Environmental drives",
  },
  {
    emoji: "🚣",
    icon: "ti-swim",
    label: "Water Sports",
    sub: "Sailing, kayaking",
  },
  {
    emoji: "🐴",
    icon: "ti-horse",
    label: "Equestrian",
    sub: "Horse riding camps",
  },
  {
    emoji: "✈️",
    icon: "ti-plane",
    label: "Flying Training",
    sub: "Air wing gliding",
  },
];

const benefits = [
  {
    emoji: "👑",
    icon: "ti-crown",
    title: "Leadership Skills",
    desc: "Hands-on experience leading teams in drills, camps, and community projects builds real-world leadership capability.",
  },
  {
    emoji: "📜",
    icon: "ti-certificate",
    title: "NCC Certificates A, B & C",
    desc: "Certificates carry significant weightage in college admissions, government job applications, and defence recruitment.",
  },
  {
    emoji: "⭐",
    icon: "ti-shield-star",
    title: "Defence Recruitment Preference",
    desc: "NCC 'C' Certificate holders get direct entry bonus marks and exemptions in armed forces recruitment across Army, Navy, and Air Force.",
  },
  {
    emoji: "🎤",
    icon: "ti-podium",
    title: "Personality Development",
    desc: "Regular drills, public speaking, and national-level exposure transform cadets into confident, well-spoken individuals.",
  },
  {
    emoji: "🌍",
    icon: "ti-world-check",
    title: "National Opportunities",
    desc: "Cadets can represent their state at RDC (New Delhi), Thal Sainik Camp, Youth Exchange Programme, and international events.",
  },
  {
    emoji: "🤝",
    icon: "ti-users",
    title: "Teamwork & Camaraderie",
    desc: "Life-long bonds formed through shared hardships in camps and parades — a network that spans the entire country.",
  },
  {
    emoji: "🎓",
    icon: "ti-premium-rights",
    title: "Extra Marks & Admission Preference",
    desc: "Many universities and state boards award extra marks or seats to NCC certificate holders during admissions.",
  },
  {
    emoji: "💪",
    icon: "ti-heartbeat",
    title: "Physical & Mental Fitness",
    desc: "Structured PT, drills, and adventure activities build stamina, resilience, and a disciplined lifestyle.",
  },
];

const certificates = [
  {
    name: "Certificate A",
    level: "Junior Level",
    accentColor: "#2563eb",
    bgColor: "#eff6ff",
    borderColor: "#bfdbfe",
    textColor: "#1d4ed8",
    subColor: "#3b82f6",
    eligibility:
      "Awarded to Junior Division / Junior Wing cadets (school level) upon passing the 'A' Certificate Examination conducted by the respective Directorate.",
    requirements: [
      "Minimum 75% attendance in drills and parades",
      "Completion of prescribed NCC training syllabus",
      "Pass written and practical examination",
    ],
    benefits:
      "Earns bonus marks in school board exams in several states. Acts as a foundation for further NCC training.",
  },
  {
    name: "Certificate B",
    level: "Intermediate Level",
    accentColor: "#d97706",
    bgColor: "#fffbeb",
    borderColor: "#fde68a",
    textColor: "#b45309",
    subColor: "#f59e0b",
    eligibility:
      "Awarded to Senior Division / Senior Wing cadets (college level) on passing the 'B' Certificate Examination after a minimum of two years of NCC service.",
    requirements: [
      "Must hold or have appeared for 'A' Certificate",
      "Minimum 75% attendance including at least one camp",
      "Pass written and practical 'B' examination",
    ],
    benefits:
      "Awarded preference in college admissions, police recruitment, and several state government jobs. Mandatory for 'C' Certificate eligibility.",
  },
  {
    name: "Certificate C",
    level: "Senior Level — Most Valued",
    accentColor: "#059669",
    bgColor: "#ecfdf5",
    borderColor: "#6ee7b7",
    textColor: "#047857",
    subColor: "#10b981",
    eligibility:
      "The most prestigious NCC certificate, awarded after completion of SD/SW training with minimum three years of service and participation in a national-level camp.",
    requirements: [
      "Must hold NCC 'B' Certificate",
      "Minimum 3 years of NCC enrolment",
      "Participation in RDC, TSC, or equivalent national camp",
      "Pass the 'C' Certificate Examination",
    ],
    benefits:
      "Carries significant weightage in UPSC, SSB interviews, police services, and direct entry schemes in the Indian Army, Navy, and Air Force.",
  },
];

const divisions = [
  {
    division: "Junior Division (JD)",
    who: "School Boys",
    age: "13 – 18 yrs",
    wing: "Army",
  },
  {
    division: "Junior Wing (JW)",
    who: "School Girls",
    age: "13 – 18 yrs",
    wing: "Army / Air / Naval",
  },
  {
    division: "Senior Division (SD)",
    who: "College Boys",
    age: "18 – 26 yrs",
    wing: "Army",
  },
  {
    division: "Senior Wing (SW)",
    who: "College Girls",
    age: "18 – 26 yrs",
    wing: "Army / Air / Naval",
  },
];

const unitDetails = [
  { label: "Battalion", value: "38 GUJ BN NCC", emoji: "🪖" },
  { label: "Institution", value: "BVM Engineering College", emoji: "🏫" },
  { label: "Directorate", value: "Gujarat NCC Directorate", emoji: "📍" },
  { label: "Group HQ", value: "Anand Group HQ", emoji: "🏢" },
  { label: "Wing", value: "Army Wing", emoji: "🛡️" },
  { label: "State", value: "Gujarat", emoji: "🚩" },
];

const rankStructure = [
  { rank: "Cadet", abbr: "CDT", level: "Entry" },
  { rank: "Lance Corporal", abbr: "L/CPL", level: "Junior" },
  { rank: "Corporal", abbr: "CPL", level: "Junior" },
  { rank: "Sergeant", abbr: "SGT", level: "Senior" },
  { rank: "Company Sergeant Major", abbr: "CSM", level: "Senior" },
  { rank: "Regimental Sergeant Major", abbr: "RSM", level: "Senior" },
  { rank: "Under Officer", abbr: "UO", level: "Command" },
  { rank: "Senior Under Officer", abbr: "SUO", level: "Command" },
];

const nccHistory = [
  {
    year: "1948",
    event:
      "NCC established under the NCC Act, succeeding the University Corps of British India.",
  },
  {
    year: "1950",
    event:
      "Naval and Air wings added; NCC expanded to a tri-service organisation.",
  },
  {
    year: "1952",
    event:
      "Girls Division created — NCC becomes fully inclusive across genders.",
  },
  {
    year: "1968",
    event:
      "Motto 'Unity and Discipline' officially adopted as the cornerstone of NCC's identity.",
  },
  {
    year: "2001",
    event:
      "NCC strength crosses 10 lakh cadets, making it the world's largest uniformed youth organisation.",
  },
  {
    year: "2020",
    event:
      "NCC expansion announced — coverage extended to border and coastal districts for national security focus.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function AboutNCC() {
  useTablerIcons();
  const [activeSection, setActiveSection] = useState("what");

  const navSections = [
    { id: "what", label: "Overview", icon: "ti-info-circle" },
    { id: "history", label: "History", icon: "ti-clock-history" },
    { id: "aims", label: "Aims", icon: "ti-target" },
    { id: "divisions", label: "Divisions", icon: "ti-layout-grid" },
    { id: "ranks", label: "Ranks", icon: "ti-military-rank" },
    { id: "activities", label: "Activities", icon: "ti-activity" },
    { id: "certificates", label: "Certificates", icon: "ti-certificate" },
    { id: "benefits", label: "Benefits", icon: "ti-star" },
    { id: "unit", label: "Our Unit", icon: "ti-flag-3" },
    { id: "ano", label: "ANO Message", icon: "ti-message-quote" },
  ];

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  const S = styles;

  return (
    <div style={S.page}>
      {/* ── HERO ── */}
      <div style={S.hero}>
        <div style={S.heroOverlay1} />
        <div style={S.heroOverlay2} />
        <div style={S.heroContent}>
          <div style={S.heroBadge}>
            <i className="ti ti-military-rank" style={{ fontSize: 20 }} />
          </div>
          <div>
            <p style={S.heroEyebrow}>National Cadet Corps — India</p>
            <h1 style={S.heroTitle}>About NCC</h1>
          </div>
        </div>
        <p style={S.heroDesc}>
          The National Cadet Corps is India's premier tri-service youth
          organisation, operating under the Ministry of Defence since 1948. With
          over 13 lakh cadets across the country, NCC shapes disciplined,
          service-oriented leaders from school and college campuses nationwide.
        </p>
        <div style={S.heroPills}>
          <Pill label="Est. 16 April 1948" icon="ti-calendar" />
          <Pill label="Unity and Discipline" icon="ti-quote" />
          <Pill label="13+ Lakh Cadets" icon="ti-users" />
          <Pill label="Tri-Service Organisation" icon="ti-shield" />
        </div>
      </div>

      {/* ── QUICK NAV ── */}
      <div style={S.navBar}>
        {navSections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            style={{
              ...S.navBtn,
              ...(activeSection === s.id ? S.navBtnActive : {}),
            }}
          >
            <i className={`ti ${s.icon}`} style={{ fontSize: 13 }} />
            {s.label}
          </button>
        ))}
      </div>

      {/* ── WHAT IS NCC ── */}
      <Section id="what" number="01" title="What is NCC?" icon="ti-info-circle">
        <div style={S.twoCol}>
          <div style={{ gridColumn: "1 / -1", ...S.blockquote }}>
            <div style={S.blockquoteBar} />
            <div>
              <p style={S.blockquoteText}>
                The <strong>National Cadet Corps (NCC)</strong> is the youth
                wing of the Indian Armed Forces, open to all school and college
                students on a voluntary basis. Established on{" "}
                <strong>16 April 1948</strong> under the NCC Act, it is a
                tri-service organisation comprising the Army, Navy, and Air
                Force wings. The NCC is administered by the Ministry of Defence
                and operates through 17 Directorates spread across the country.
              </p>
              <p
                style={{ ...S.blockquoteText, marginTop: 12, marginBottom: 0 }}
              >
                The corps does not aim to create professional soldiers but to
                develop qualities of character, discipline, leadership, and a
                sense of national service in young Indians — making it a
                cornerstone of India's youth development ecosystem.
              </p>
            </div>
          </div>
          <StatCard
            icon="ti-calendar-event"
            emoji="🏛️"
            label="Founded"
            value="16 April 1948"
          />
          <StatCard
            icon="ti-building-government"
            emoji="📋"
            label="Under Ministry"
            value="Ministry of Defence"
          />
          <StatCard
            icon="ti-map-pin"
            emoji="🗺️"
            label="Directorates"
            value="17 Across India"
          />
          <StatCard
            icon="ti-users"
            emoji="👥"
            label="Cadet Strength"
            value="13+ Lakh Cadets"
          />
          <StatCard
            icon="ti-wings"
            emoji="✈️"
            label="Organisation Type"
            value="Tri-Service (Army / Navy / Air)"
          />
          <StatCard
            icon="ti-world"
            emoji="🌐"
            label="Headquartered"
            value="New Delhi"
          />
        </div>

        {/* Motto & Flag */}
        <div style={{ ...S.twoColFixed, marginTop: 16 }}>
          <div style={S.mottoCard}>
            <p style={S.mottoEyebrow}>NCC Motto</p>
            <p style={S.mottoText}>"Unity and Discipline"</p>
            <p style={S.mottoSub}>
              Adopted officially in 1968, the motto captures the dual essence of
              the NCC mission — a united student body bound by the highest
              standards of discipline, reflecting the organisation's goal to
              make cadets pillars of a strong, indivisible nation.
            </p>
          </div>
          <div style={S.flagCard}>
            <p style={S.flagEyebrow}>NCC Flag — Tri-Colour Significance</p>
            <div style={S.flagStripes}>
              <FlagRow
                color="#c0392b"
                label="Red"
                wing="Army Wing"
                desc="Represents the Army, the oldest and largest wing of the NCC."
              />
              <FlagRow
                color="#1a3a6b"
                label="Dark Blue"
                wing="Naval Wing"
                desc="Represents the Naval Wing, symbolising India's maritime strength."
              />
              <FlagRow
                color="#4a90d9"
                label="Light Blue"
                wing="Air Force Wing"
                desc="Represents the Air Force Wing, denoting ambition and freedom."
              />
            </div>
            <p style={S.flagNote}>
              The NCC crest — a lotus wreath in gold encircling the letters NCC
              — sits at the centre of the flag, symbolising the unity of purpose
              across all three wings.
            </p>
          </div>
        </div>
      </Section>

      {/* ── HISTORY ── */}
      <Section
        id="history"
        number="02"
        title="History of NCC"
        icon="ti-clock-history"
      >
        <div style={S.timeline}>
          {nccHistory.map((h, i) => (
            <div key={i} style={S.timelineItem}>
              <div style={S.timelineYear}>{h.year}</div>
              <div style={S.timelineDot} />
              <div style={S.timelineText}>{h.event}</div>
            </div>
          ))}
        </div>
        <div style={{ ...S.infoBox, marginTop: 16 }}>
          <i
            className="ti ti-info-circle"
            style={{
              color: "#2563eb",
              fontSize: 16,
              flexShrink: 0,
              marginTop: 2,
            }}
          />
          <p style={S.infoBoxText}>
            The NCC traces its origins to the University Corps established
            during British India. Post-independence, the Government of India
            enacted the NCC Act in 1948 to create a dedicated youth corps. Today
            it is the world's largest uniformed youth organisation and a primary
            feeder institution for India's defence services.
          </p>
        </div>
      </Section>

      {/* ── AIMS ── */}
      <Section id="aims" number="03" title="Aims of NCC" icon="ti-target">
        <div style={S.aimsGrid}>
          {aims.map((a, i) => (
            <div key={i} style={S.aimCard}>
              <div style={S.aimIconWrap}>
                <span style={{ fontSize: 22 }}>{a.emoji}</span>
              </div>
              <div>
                <p style={S.aimTitle}>{a.title}</p>
                <p style={S.aimDesc}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── DIVISIONS ── */}
      <Section
        id="divisions"
        number="04"
        title="NCC Divisions & Wings"
        icon="ti-layout-grid"
      >
        <div style={S.tableWrap}>
          <table style={S.table}>
            <thead style={S.thead}>
              <tr>
                <Th>Division</Th>
                <Th>Eligible For</Th>
                <Th>Age Group</Th>
                <Th>Wings Available</Th>
              </tr>
            </thead>
            <tbody>
              {divisions.map((d, i) => (
                <tr
                  key={i}
                  style={{ background: i % 2 === 0 ? "#f8fafc" : "#ffffff" }}
                >
                  <Td bold>{d.division}</Td>
                  <Td>{d.who}</Td>
                  <Td muted>{d.age}</Td>
                  <Td>{d.wing}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ ...S.twoColFixed, marginTop: 16 }}>
          <div style={S.wingCard}>
            <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>
              🪖
            </span>
            <div>
              <p style={S.wingTitle}>Army Wing</p>
              <p style={S.wingDesc}>
                The oldest and largest wing. Cadets undergo weapon training,
                field craft, map reading, and military-style drills. Army SD/SW
                cadets have direct opportunities at NDA, OTA, and CDS
                selections.
              </p>
            </div>
          </div>
          <div style={S.wingCard}>
            <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>
              ⚓
            </span>
            <div>
              <p style={S.wingTitle}>Naval Wing</p>
              <p style={S.wingDesc}>
                Focuses on seamanship, navigation, sailing, and water sports.
                Naval Wing cadets participate in annual sea camps and can apply
                for direct entries into the Indian Navy through the NCC Special
                Entry.
              </p>
            </div>
          </div>
          <div style={S.wingCard}>
            <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>
              ✈️
            </span>
            <div>
              <p style={S.wingTitle}>Air Force Wing</p>
              <p style={S.wingDesc}>
                Introduces cadets to aviation theory, gliding, and microlight
                flying. Air Wing cadets can qualify for flying scholarships and
                receive preference in Indian Air Force recruitment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── RANKS ── */}
      <Section
        id="ranks"
        number="05"
        title="NCC Rank Structure"
        icon="ti-military-rank"
      >
        <div style={S.ranksGrid}>
          {rankStructure.map((r, i) => (
            <div
              key={i}
              style={{
                ...S.rankCard,
                borderTopColor:
                  r.level === "Command"
                    ? "#1e3a5f"
                    : r.level === "Senior"
                      ? "#2563eb"
                      : r.level === "Junior"
                        ? "#64748b"
                        : "#94a3b8",
              }}
            >
              <span
                style={{
                  ...S.rankLevel,
                  background:
                    r.level === "Command"
                      ? "#1e3a5f"
                      : r.level === "Senior"
                        ? "#dbeafe"
                        : "#f1f5f9",
                  color:
                    r.level === "Command"
                      ? "#fff"
                      : r.level === "Senior"
                        ? "#1d4ed8"
                        : "#64748b",
                }}
              >
                {r.level}
              </span>
              <p style={S.rankAbbr}>{r.abbr}</p>
              <p style={S.rankName}>{r.rank}</p>
            </div>
          ))}
        </div>
        <div style={{ ...S.infoBox, marginTop: 12 }}>
          <i
            className="ti ti-info-circle"
            style={{
              color: "#2563eb",
              fontSize: 16,
              flexShrink: 0,
              marginTop: 2,
            }}
          />
          <p style={S.infoBoxText}>
            Ranks in NCC are held within the corps only and are not equivalent
            to regular military ranks. The highest rank a cadet can hold is
            Senior Under Officer (SUO), typically awarded to the most
            outstanding cadet in the unit.
          </p>
        </div>
      </Section>

      {/* ── ACTIVITIES ── */}
      <Section
        id="activities"
        number="06"
        title="NCC Activities"
        icon="ti-activity"
      >
        <div style={S.activitiesGrid}>
          {activities.map((a, i) => (
            <ActivityCard key={i} emoji={a.emoji} label={a.label} sub={a.sub} />
          ))}
        </div>
        <div style={{ ...S.infoBox, marginTop: 16 }}>
          <i
            className="ti ti-calendar-event"
            style={{
              color: "#2563eb",
              fontSize: 16,
              flexShrink: 0,
              marginTop: 2,
            }}
          />
          <p style={S.infoBoxText}>
            <strong>Annual Training Camp (ATC)</strong> is mandatory for NCC
            cadets and is a prerequisite for certificate examinations. The
            10-day camp covers weapon training, field exercises, cultural
            programmes, and leadership activities. Attendance at a minimum of
            one ATC is required for the 'B' Certificate.
          </p>
        </div>
      </Section>

      {/* ── CERTIFICATES ── */}
      <Section
        id="certificates"
        number="07"
        title="NCC Certificates"
        icon="ti-certificate"
      >
        <div style={S.certGrid}>
          {certificates.map((c, i) => (
            <div
              key={i}
              style={{
                ...S.certCard,
                borderColor: c.borderColor,
                background: c.bgColor,
              }}
            >
              <div style={{ ...S.certBar, background: c.accentColor }} />
              <div style={S.certHeader}>
                <div>
                  <p style={{ ...S.certName, color: c.textColor }}>{c.name}</p>
                  <p style={{ ...S.certLevel, color: c.subColor }}>{c.level}</p>
                </div>
                <div style={{ ...S.certBadge, background: c.accentColor }}>
                  <i
                    className="ti ti-certificate"
                    style={{ fontSize: 18, color: "#fff" }}
                  />
                </div>
              </div>
              <div style={S.certSection}>
                <p style={S.certLabel}>Eligibility</p>
                <p style={S.certBodyText}>{c.eligibility}</p>
              </div>
              <div style={S.certSection}>
                <p style={S.certLabel}>Requirements</p>
                <ul style={S.certList}>
                  {c.requirements.map((r, j) => (
                    <li key={j} style={S.certListItem}>
                      <i
                        className="ti ti-check"
                        style={{
                          color: c.accentColor,
                          fontSize: 13,
                          flexShrink: 0,
                        }}
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ ...S.certBenefitBox, borderColor: c.borderColor }}>
                <p style={S.certLabel}>Career Benefit</p>
                <p
                  style={{
                    ...S.certBodyText,
                    color: c.textColor,
                    fontWeight: 500,
                  }}
                >
                  {c.benefits}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── BENEFITS ── */}
      <Section
        id="benefits"
        number="08"
        title="Benefits of Joining NCC"
        icon="ti-star"
      >
        <div style={S.benefitsGrid}>
          {benefits.map((b, i) => (
            <div key={i} style={S.benefitCard}>
              <div style={S.benefitIconWrap}>
                <span style={{ fontSize: 20 }}>{b.emoji}</span>
              </div>
              <div>
                <p style={S.benefitTitle}>{b.title}</p>
                <p style={S.benefitDesc}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── NCC SONG ── */}
      <Section id="song" number="09" title="NCC Song" icon="ti-music">
        <div style={S.songCard}>
          {/* <div style={S.songLeft}>
            <div style={S.songIconWrap}>
              <span style={{ fontSize: 26 }}>🎵</span>
            </div>
          </div> */}
          <div style={S.songRight}>
            <p style={S.songEyebrow}>NCC Song — Excerpt</p>
            <p style={S.songLyrics}>
              "Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain
              <br />
              Apni Manzil Ek Hai, Ha Ha Ha Ek Hai,
              <br />
              Ho Ho Ho Ek Hai, Hum Sab Bharatiya Hain..."
            </p>
            <p style={S.songDesc}>
              The NCC Song was composed to embody the spirit of unity across all
              of India's diverse communities. Sung at every parade, camp, and
              national event, it reinforces the secular and inclusive ethos of
              the corps — that every cadet, regardless of religion, language, or
              region, is first and foremost Indian.
            </p>
          </div>
        </div>
      </Section>

      {/* ── OUR UNIT ── */}
      <Section
        id="unit"
        number="10"
        title="Our Unit — 38 GUJ BN NCC"
        icon="ti-flag-3"
      >
        <div style={S.unitGrid}>
          {unitDetails.map((u, i) => (
            <div key={i} style={S.unitCard}>
              <div style={S.unitIconWrap}>
                <span style={{ fontSize: 18 }}>{u.emoji}</span>
              </div>
              <div>
                <p style={S.unitLabel}>{u.label}</p>
                <p style={S.unitValue}>{u.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            ...S.infoBox,
            background: "#f0f7ff",
            border: "1.5px solid #bfdbfe",
            marginTop: 14,
          }}
        >
          <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>🏅</span>
          <div>
            <p
              style={{
                ...S.infoBoxText,
                fontWeight: 600,
                color: "#1e40af",
                marginBottom: 6,
              }}
            >
              Unit Highlights
            </p>
            <p style={S.infoBoxText}>
              38 Gujarat Battalion NCC is one of the distinguished units under
              the Gujarat Directorate, with cadets regularly participating in
              state-level and national-level events. The unit has a proud record
              of producing Republic Day Camp participants, Thal Sainik Camp
              achievers, and cadets who have gone on to serve in the Indian
              Armed Forces.
            </p>
          </div>
        </div>
      </Section>

      {/* ── ANO MESSAGE ── */}
      <Section
        id="ano"
        number="11"
        title="Message from the ANO"
        icon="ti-message-quote"
      >
        <div style={S.anoCard}>
          <div style={S.anoQuoteMark}>"</div>
          <div style={S.anoBody}>
            <p style={S.anoQuote}>
              NCC is not merely a course or an activity — it is a transforming
              experience that shapes who you are as a person. Every parade you
              attend, every camp you endure, and every service project you lead
              contributes to building a version of yourself that is stronger,
              more disciplined, and more compassionate. I urge every cadet of 38
              GUJ BN to embrace every opportunity that this corps offers, and to
              wear the uniform with pride.
            </p>
            <div style={S.anoFooter}>
              <div style={S.anoAvatar}>ANO</div>
              <div>
                <p style={S.anoName}>Associate NCC Officer</p>
                <p style={S.anoUnit}>
                  38 GUJ BN NCC — BVM Engineering College, Gujarat
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

/* ─── SUB-COMPONENTS ─────────────────────────────────────────── */

function Section({ id, number, title, icon, children }) {
  return (
    <section id={id} style={styles.section}>
      <div style={styles.sectionHeader}>
        {/* <div style={styles.sectionNum}>{number}</div> */}
        <i
          className={`ti ${icon}`}
          style={{ fontSize: 18, color: "#1e3a5f" }}
          aria-hidden
        />
        <h2 style={styles.sectionTitle}>{title}</h2>
      </div>
      <div style={styles.sectionDivider} />
      {children}
    </section>
  );
}

function Pill({ label, icon }) {
  return (
    <span style={styles.pill}>
      <i className={`ti ${icon}`} style={{ fontSize: 12 }} aria-hidden />
      {label}
    </span>
  );
}

function StatCard({ emoji, label, value }) {
  return (
    <div style={styles.statCard}>
      <div style={styles.statIconWrap}>
        <span style={{ fontSize: 18 }}>{emoji}</span>
      </div>
      <div>
        <p style={styles.statLabel}>{label}</p>
        <p style={styles.statValue}>{value}</p>
      </div>
    </div>
  );
}

function FlagRow({ color, label, wing, desc }) {
  return (
    <div style={styles.flagRow}>
      <div style={{ ...styles.flagSwatch, background: color }} />
      <div>
        <p style={styles.flagWing}>
          <strong>{label}</strong> — {wing}
        </p>
        <p style={styles.flagDesc}>{desc}</p>
      </div>
    </div>
  );
}

function ActivityCard({ emoji, label, sub }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...styles.actCard, ...(hovered ? styles.actCardHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontSize: 26, display: "block", marginBottom: 10 }}>
        {emoji}
      </span>
      <p style={{ ...styles.actLabel, color: hovered ? "#fff" : "#1e293b" }}>
        {label}
      </p>
      <p
        style={{
          ...styles.actSub,
          color: hovered ? "rgba(255,255,255,0.7)" : "#94a3b8",
        }}
      >
        {sub}
      </p>
    </div>
  );
}

function Th({ children }) {
  return <th style={styles.th}>{children}</th>;
}

function Td({ children, bold, muted }) {
  return (
    <td
      style={{
        ...styles.td,
        fontWeight: bold ? 600 : 400,
        color: muted ? "#64748b" : bold ? "#1e293b" : "#475569",
      }}
    >
      {children}
    </td>
  );
}

/* ─── STYLES ─────────────────────────────────────────────────── */

const styles = {
  page: {
    maxWidth: 940,
    margin: "0 auto",
    padding: "0 24px 72px",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    color: "#1e293b",
    lineHeight: 1.6,
  },

  hero: {
    background: "#1a3052",
    borderRadius: 14,
    padding: "44px 40px 36px",
    marginBottom: 24,
    position: "relative",
    overflow: "hidden",
  },
  heroOverlay1: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.04)",
    pointerEvents: "none",
  },
  heroOverlay2: {
    position: "absolute",
    bottom: -60,
    left: "35%",
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.025)",
    pointerEvents: "none",
  },
  heroContent: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 16,
  },
  heroBadge: {
    width: 48,
    height: 48,
    borderRadius: 10,
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    flexShrink: 0,
  },
  heroEyebrow: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 12,
    margin: 0,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  heroTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 700,
    margin: "4px 0 0",
  },
  heroDesc: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 15,
    lineHeight: 1.75,
    maxWidth: 640,
    margin: "0 0 22px",
  },
  heroPills: { display: "flex", gap: 10, flexWrap: "wrap" },
  pill: {
    background: "rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: "5px 14px",
    fontSize: 12,
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    border: "1px solid rgba(255,255,255,0.15)",
  },

  navBar: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    marginBottom: 32,
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: 16,
  },
  navBtn: {
    background: "transparent",
    color: "#64748b",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: "6px 14px",
    fontSize: 12,
    fontWeight: 500,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    transition: "all 0.15s",
  },
  navBtnActive: {
    background: "#1a3052",
    color: "#fff",
    borderColor: "#1a3052",
  },

  section: { marginBottom: 52 },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  sectionNum: {
    background: "#1a3052",
    color: "#fff",
    width: 30,
    height: 30,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 700,
    flexShrink: 0,
    letterSpacing: 0.5,
  },
  sectionTitle: { fontSize: 20, fontWeight: 700, color: "#0f172a", margin: 0 },
  sectionDivider: { height: 1, background: "#e2e8f0", marginBottom: 20 },

  twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  twoColFixed: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },

  blockquote: {
    background: "#f8fafc",
    borderRadius: 10,
    padding: "22px 24px 22px 28px",
    display: "flex",
    gap: 0,
    position: "relative",
    border: "1px solid #e2e8f0",
  },
  blockquoteBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    background: "#1a3052",
    borderRadius: "10px 0 0 10px",
  },
  blockquoteText: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.85,
    color: "#334155",
  },

  statCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    padding: "14px 18px",
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  statIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  statLabel: {
    fontSize: 11,
    color: "#94a3b8",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    margin: "0 0 3px",
  },
  statValue: { fontSize: 14, fontWeight: 600, color: "#1e293b", margin: 0 },

  mottoCard: {
    background: "#1a3052",
    borderRadius: 12,
    padding: "28px 28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mottoEyebrow: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 11,
    margin: "0 0 8px",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  mottoText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 14px",
    fontStyle: "italic",
  },
  mottoSub: {
    color: "rgba(255,255,255,0.68)",
    fontSize: 13,
    lineHeight: 1.75,
    margin: 0,
  },

  flagCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    padding: "24px 24px",
  },
  flagEyebrow: {
    fontSize: 11,
    color: "#94a3b8",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    margin: "0 0 14px",
  },
  flagStripes: { display: "flex", flexDirection: "column", gap: 12 },
  flagRow: { display: "flex", alignItems: "flex-start", gap: 12 },
  flagSwatch: {
    width: 28,
    height: 20,
    borderRadius: 3,
    flexShrink: 0,
    marginTop: 2,
    border: "1px solid rgba(0,0,0,0.1)",
  },
  flagWing: { fontSize: 13, margin: "0 0 2px", color: "#1e293b" },
  flagDesc: { fontSize: 12, color: "#64748b", margin: 0, lineHeight: 1.5 },
  flagNote: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 14,
    marginBottom: 0,
    lineHeight: 1.6,
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    borderLeft: "2px solid #e2e8f0",
    marginLeft: 40,
    paddingLeft: 0,
  },
  timelineItem: {
    display: "grid",
    gridTemplateColumns: "72px 16px 1fr",
    alignItems: "flex-start",
    gap: 16,
    padding: "14px 0 14px 20px",
    position: "relative",
  },
  timelineYear: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1a3052",
    whiteSpace: "nowrap",
    paddingTop: 2,
    textAlign: "right",
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#1a3052",
    border: "2px solid #fff",
    boxShadow: "0 0 0 2px #e2e8f0",
    flexShrink: 0,
    marginTop: 7,
    marginLeft: 20,
    position: "relative",
    left: -25,
  },
  timelineText: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 1.7,
    paddingTop: 2,
    marginLeft: -10,
  },

  infoBox: {
    background: "#f0f9ff",
    border: "1px solid #bae6fd",
    borderRadius: 10,
    padding: "14px 18px",
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
  },
  infoBoxText: { fontSize: 13, color: "#334155", lineHeight: 1.7, margin: 0 },

  aimsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 12,
  },
  aimCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    padding: "18px 18px",
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    borderLeft: "3px solid #1a3052",
  },
  aimIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 10,
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  aimTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1e293b",
    margin: "0 0 5px",
  },
  aimDesc: { fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 },

  tableWrap: {
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid #e2e8f0",
  },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
  thead: { background: "#1a3052" },
  th: {
    background: "#1a3052",
    padding: "12px 18px",
    textAlign: "left",
    color: "#fff",
    fontWeight: 600,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  td: { padding: "12px 18px", borderBottom: "1px solid #f1f5f9" },

  wingCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    padding: "18px 18px",
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
  },
  wingTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1e293b",
    margin: "0 0 6px",
  },
  wingDesc: { fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.65 },

  ranksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 10,
  },
  rankCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderTop: "3px solid #94a3b8",
    borderRadius: 8,
    padding: "14px 16px",
  },
  rankLevel: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "2px 8px",
    display: "inline-block",
    marginBottom: 8,
  },
  rankAbbr: {
    fontSize: 18,
    fontWeight: 800,
    color: "#1e293b",
    margin: "0 0 4px",
    letterSpacing: 0.5,
  },
  rankName: { fontSize: 12, color: "#475569", margin: 0, lineHeight: 1.4 },

  activitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: 10,
  },
  actCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    padding: "18px 14px",
    textAlign: "center",
    cursor: "default",
    transition: "background 0.2s, border-color 0.2s",
  },
  actCardHover: { background: "#1a3052", borderColor: "#1a3052" },
  actLabel: {
    fontSize: 12,
    fontWeight: 600,
    margin: "0 0 4px",
    lineHeight: 1.4,
  },
  actSub: { fontSize: 11, margin: 0, lineHeight: 1.3 },

  certGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  certCard: {
    border: "1.5px solid",
    borderRadius: 12,
    padding: 22,
    position: "relative",
    overflow: "hidden",
  },
  certBar: { position: "absolute", top: 0, left: 0, right: 0, height: 4 },
  certHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
    marginTop: 8,
  },
  certName: { fontSize: 18, fontWeight: 800, margin: 0 },
  certLevel: { fontSize: 12, fontWeight: 600, margin: "4px 0 0" },
  certBadge: {
    width: 38,
    height: 38,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  certSection: { marginBottom: 14 },
  certLabel: {
    fontSize: 10,
    color: "#94a3b8",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    margin: "0 0 6px",
  },
  certBodyText: { fontSize: 13, color: "#475569", margin: 0, lineHeight: 1.65 },
  certList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  certListItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    fontSize: 13,
    color: "#475569",
    lineHeight: 1.5,
  },
  certBenefitBox: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid",
    borderRadius: 8,
    padding: "12px 14px",
  },

  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 12,
  },
  benefitCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    padding: "16px 18px",
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
  },
  benefitIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 10,
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  benefitTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1e293b",
    margin: "0 0 5px",
  },
  benefitDesc: { fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 },

  songCard: {
    background: "#1a3052",
    borderRadius: 12,
    padding: "28px 30px",
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
  },
  songLeft: { flexShrink: 0 },
  songIconWrap: {
    width: 54,
    height: 54,
    borderRadius: 12,
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  songRight: { flex: 1 },
  songEyebrow: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 11,
    margin: "0 0 12px",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  songLyrics: {
    color: "#fff",
    fontSize: 15,
    fontStyle: "italic",
    lineHeight: 1.9,
    margin: "0 0 16px",
    borderLeft: "3px solid rgba(255,255,255,0.25)",
    paddingLeft: 16,
  },
  songDesc: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 13,
    lineHeight: 1.75,
    margin: 0,
  },

  unitGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 10,
  },
  unitCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  unitIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "#f0f4f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  unitLabel: {
    fontSize: 11,
    color: "#94a3b8",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    margin: "0 0 3px",
  },
  unitValue: { fontSize: 14, fontWeight: 600, color: "#1e293b", margin: 0 },

  anoCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    padding: "30px 32px",
    display: "flex",
    gap: 20,
    position: "relative",
    overflow: "hidden",
  },
  anoQuoteMark: {
    fontSize: 80,
    color: "#e2e8f0",
    fontFamily: "Georgia, serif",
    lineHeight: 0.8,
    flexShrink: 0,
    userSelect: "none",
    paddingTop: 20,
  },
  anoBody: { flex: 1 },
  anoQuote: {
    fontSize: 15,
    color: "#334155",
    fontStyle: "italic",
    lineHeight: 1.85,
    margin: "0 0 24px",
    borderLeft: "3px solid #1a3052",
    paddingLeft: 18,
  },
  anoFooter: { display: "flex", gap: 14, alignItems: "center" },
  anoAvatar: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "#1a3052",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 700,
    flexShrink: 0,
    letterSpacing: 0.5,
  },
  anoName: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1e293b",
    margin: "0 0 3px",
  },
  anoUnit: { fontSize: 12, color: "#64748b", margin: 0 },
};
