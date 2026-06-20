import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

/* Load Tabler Icons font */
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

/* Custom Hook for Responsiveness */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

/* ─── DATA ─────────────────────────────────────────────────── */

const aims = [
  {
    emoji: "🎯",
    title: "Develop Character",
    desc: "Cultivate integrity, moral courage, and ethical values that define a responsible citizen and a dependable leader.",
  },
  {
    emoji: "🌟",
    title: "Build Leadership",
    desc: "Train cadets to take initiative, manage teams under pressure, and lead with confidence in any environment.",
  },
  {
    emoji: "⚖️",
    title: "Promote Discipline",
    desc: "Foster punctuality, precision, and adherence to duty — habits that translate into excellence in every field.",
  },
  {
    emoji: "🤝",
    title: "Encourage Social Service",
    desc: "Instil a spirit of selfless service through community engagement, disaster relief, and national development activities.",
  },
  {
    emoji: "🕊️",
    title: "Secular Outlook",
    desc: "Promote unity among cadets from all religions, regions, and communities to build a truly inclusive national force.",
  },
  {
    emoji: "🛡️",
    title: "National Manpower Reserve",
    desc: "Create a pool of trained, disciplined youth ready to serve the nation in times of need as a strategic reserve.",
  },
];

const activities = [
  { emoji: "⛺", label: "Annual Training Camps", sub: "ATC / CATC" },
  { emoji: "🪖", label: "Drill & Parade", sub: "Foot drill, ceremonial" },
  { emoji: "🎯", label: "Weapon Training", sub: ".22 rifle, firing" },
  {
    emoji: "🧗",
    label: "Adventure Activities",
    sub: "Rock climbing, rappelling",
  },
  { emoji: "🫶", label: "Social Service", sub: "NSS, community camps" },
  { emoji: "🏛️", label: "Republic Day Camp", sub: "National level, Delhi" },
  { emoji: "🥾", label: "Trekking & Hiking", sub: "National integration" },
  { emoji: "🩸", label: "Blood Donation", sub: "Health drives" },
  { emoji: "🌳", label: "Tree Plantation", sub: "Environmental drives" },
  { emoji: "🚣", label: "Water Sports", sub: "Sailing, kayaking" },
  { emoji: "🐴", label: "Equestrian", sub: "Horse riding camps" },
  { emoji: "✈️", label: "Flying Training", sub: "Air wing gliding" },
];

const benefits = [
  {
    emoji: "👑",
    title: "Leadership Skills",
    desc: "Hands-on experience leading teams in drills, camps, and community projects builds real-world leadership capability.",
  },
  {
    emoji: "📜",
    title: "NCC Certificates A, B & C",
    desc: "Certificates carry significant weightage in college admissions, government job applications, and defence recruitment.",
  },
  {
    emoji: "⭐",
    title: "Defence Recruitment Preference",
    desc: "NCC 'C' Certificate holders get direct entry bonus marks and exemptions in armed forces recruitment across Army, Navy, and Air Force.",
  },
  {
    emoji: "🎤",
    title: "Personality Development",
    desc: "Regular drills, public speaking, and national-level exposure transform cadets into confident, well-spoken individuals.",
  },
  {
    emoji: "🌍",
    title: "National Opportunities",
    desc: "Cadets can represent their state at RDC (New Delhi), Thal Sainik Camp, Youth Exchange Programme, and international events.",
  },
  {
    emoji: "🤝",
    title: "Teamwork & Camaraderie",
    desc: "Life-long bonds formed through shared hardships in camps and parades — a network that spans the entire country.",
  },
  {
    emoji: "🎓",
    title: "Extra Marks & Admission Preference",
    desc: "Many universities and state boards award extra marks or seats to NCC certificate holders during admissions.",
  },
  {
    emoji: "💪",
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
  const isMobile = useMediaQuery("(max-width: 768px)");

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
    <div className="page-layout">
      {/* Integrated Sidebar */}
      <Sidebar />

      <div
        className="main-content"
        style={{ padding: isMobile ? "0 12px 48px" : "0 24px 72px" }}
      >
        {/* Page Header Layout matching Admin Attendance */}
        <div className="page-header" style={{ marginBottom: 16 }}>
          <h1>About NCC</h1>
          <p>National Cadet Corps — Unity and Discipline</p>
        </div>

        {/* ── HERO ── */}
        <div
          style={{
            ...S.hero,
            padding: isMobile ? "24px 20px" : "44px 40px 36px",
          }}
        >
          <div style={S.heroOverlay1} />
          <div style={S.heroOverlay2} />
          <div style={S.heroContent}>
            <div style={S.heroBadge}>
              <i className="ti ti-military-rank" style={{ fontSize: 20 }} />
            </div>
            <div>
              <p style={S.heroEyebrow}>National Cadet Corps — India</p>
              <h1 style={{ ...S.heroTitle, fontSize: isMobile ? 24 : 30 }}>
                Inside the Corps
              </h1>
            </div>
          </div>
          <p style={S.heroDesc}>
            The National Cadet Corps is India's premier tri-service youth
            organisation, operating under the Ministry of Defence since 1948.
            With over 13 lakh cadets across the country, NCC shapes disciplined,
            service-oriented leaders from school and college campuses
            nationwide.
          </p>
          <div style={S.heroPills}>
            <Pill label="Est. 16 April 1948" icon="ti-calendar" />
            <Pill label="Unity and Discipline" icon="ti-quote" />
            <Pill label="13+ Lakh Cadets" icon="ti-users" />
            <Pill label="Tri-Service Organisation" icon="ti-shield" />
          </div>
        </div>

        {/* ── QUICK NAV ── */}
        <div
          style={{
            ...S.navBar,
            overflowX: "auto",
            paddingBottom: isMobile ? 12 : 16,
          }}
        >
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
        <Section id="what" title="What is NCC?" icon="ti-info-circle">
          <div
            style={{
              ...S.twoCol,
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            }}
          >
            <div
              style={{
                ...S.blockquote,
                padding: isMobile
                  ? "16px 16px 16px 22px"
                  : "22px 24px 22px 28px",
              }}
            >
              <div style={S.blockquoteBar} />
              <div>
                <p style={S.blockquoteText}>
                  The <strong>National Cadet Corps (NCC)</strong> is the youth
                  wing of the Indian Armed Forces, open to all school and
                  college students on a voluntary basis. Established on{" "}
                  <strong>16 April 1948</strong> under the NCC Act, it is a
                  tri-service organisation comprising the Army, Navy, and Air
                  Force wings. The NCC is administered by the Ministry of
                  Defence and operates through 17 Directorates spread across the
                  country.
                </p>
                <p
                  style={{
                    ...S.blockquoteText,
                    marginTop: 12,
                    marginBottom: 0,
                  }}
                >
                  The corps does not aim to create professional soldiers but to
                  develop qualities of character, discipline, leadership, and a
                  sense of national service in young Indians — making it a
                  cornerstone of India's youth development ecosystem.
                </p>
              </div>
            </div>
            {/* Native Application Stats Layout Grid instead of basic wrappers */}
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 12,
              }}
            >
              <StatCard emoji="🏛️" label="Founded" value="16 April 1948" />
              <StatCard
                emoji="📋"
                label="Under Ministry"
                value="Ministry of Defence"
              />
              <StatCard
                emoji="🗺️"
                label="Directorates"
                value="17 Across India"
              />
              <StatCard
                emoji="👥"
                label="Cadet Strength"
                value="13+ Lakh Cadets"
              />
              <StatCard
                emoji="✈️"
                label="Organisation Type"
                value="Tri-Service"
              />
              <StatCard emoji="🌐" label="Headquartered" value="New Delhi" />
            </div>
          </div>

          {/* Motto & Flag */}
          <div
            style={{
              ...S.twoColFixed,
              flexDirection: isMobile ? "column" : "row",
              marginTop: 16,
            }}
          >
            <div
              style={{ ...S.mottoCard, padding: isMobile ? "20px" : "28px" }}
            >
              <p style={S.mottoEyebrow}>NCC Motto</p>
              <p style={S.mottoText}>"Unity and Discipline"</p>
              <p style={S.mottoSub}>
                Adopted officially in 1968, the motto captures the dual essence
                of the NCC mission — a united student body bound by the highest
                standards of discipline.
              </p>
            </div>
            <div
              className="card"
              style={{
                flex: 1,
                margin: 0,
                padding: isMobile ? "20px" : "24px",
              }}
            >
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
                  desc="Represents the Naval Wing, symbolising maritime strength."
                />
                <FlagRow
                  color="#4a90d9"
                  label="Light Blue"
                  wing="Air Force Wing"
                  desc="Represents the Air Force Wing, denoting freedom."
                />
              </div>
            </div>
          </div>
        </Section>

        {/* ── HISTORY ── */}
        <Section id="history" title="History of NCC" icon="ti-clock-history">
          <div style={{ ...S.timeline, marginLeft: isMobile ? 15 : 40 }}>
            {nccHistory.map((h, i) => (
              <div
                key={i}
                style={{
                  ...S.timelineItem,
                  gridTemplateColumns: isMobile
                    ? "50px 16px 1fr"
                    : "72px 16px 1fr",
                  gap: isMobile ? 8 : 16,
                }}
              >
                <div style={S.timelineYear}>{h.year}</div>
                <div style={S.timelineDot} />
                <div style={S.timelineText}>{h.event}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── AIMS ── */}
        <Section id="aims" title="Aims of NCC" icon="ti-target">
          <div style={S.aimsGrid}>
            {aims.map((a, i) => (
              <div key={i} className="card" style={{ ...S.aimCard, margin: 0 }}>
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
          title="NCC Divisions & Wings"
          icon="ti-layout-grid"
        >
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <Th>Division</Th>
                  <Th>Eligible For</Th>
                  <Th>Age Group</Th>
                  <Th>Wings</Th>
                </tr>
              </thead>
              <tbody>
                {divisions.map((d, i) => (
                  <tr key={i}>
                    <Td bold>{d.division}</Td>
                    <Td>{d.who}</Td>
                    <Td muted>{d.age}</Td>
                    <Td>{d.wing}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── RANKS ── */}
        <Section id="ranks" title="NCC Rank Structure" icon="ti-military-rank">
          <div
            style={{
              ...S.ranksGrid,
              gridTemplateColumns: isMobile
                ? "repeat(auto-fit, minmax(130px, 1fr))"
                : "repeat(auto-fit, minmax(160px, 1fr))",
            }}
          >
            {rankStructure.map((r, i) => (
              <div
                key={i}
                className="card"
                style={{
                  ...S.rankCard,
                  margin: 0,
                  borderTop: `3px solid ${r.level === "Command" ? "#1e3a5f" : r.level === "Senior" ? "var(--primary)" : "var(--gray)"}`,
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
                          : "var(--gray)",
                  }}
                >
                  {r.level}
                </span>
                <p style={S.rankAbbr}>{r.abbr}</p>
                <p style={S.rankName}>{r.rank}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── ACTIVITIES ── */}
        <Section id="activities" title="NCC Activities" icon="ti-activity">
          <div style={S.activitiesGrid}>
            {activities.map((a, i) => (
              <ActivityCard
                key={i}
                emoji={a.emoji}
                label={a.label}
                sub={a.sub}
              />
            ))}
          </div>
        </Section>

        {/* ── CERTIFICATES ── */}
        <Section
          id="certificates"
          title="NCC Certificates"
          icon="ti-certificate"
        >
          <div style={S.certGrid}>
            {certificates.map((c, i) => (
              <div
                key={i}
                className="card"
                style={{
                  ...S.certCard,
                  margin: 0,
                  borderColor: c.borderColor,
                  background: c.bgColor,
                }}
              >
                <div style={{ ...S.certBar, background: c.accentColor }} />
                <div style={S.certHeader}>
                  <div>
                    <p style={{ ...S.certName, color: c.textColor }}>
                      {c.name}
                    </p>
                    <p style={{ ...S.certLevel, color: c.subColor }}>
                      {c.level}
                    </p>
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
                <div
                  style={{ ...S.certBenefitBox, borderColor: c.borderColor }}
                >
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
        <Section id="benefits" title="Benefits of Joining NCC" icon="ti-star">
          <div style={S.benefitsGrid}>
            {benefits.map((b, i) => (
              <div
                key={i}
                className="card"
                style={{ ...S.benefitCard, margin: 0 }}
              >
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
        <Section id="song" title="NCC Song" icon="ti-music">
          <div
            style={{ ...S.songCard, padding: isMobile ? "20px" : "28px 30px" }}
          >
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
                The NCC Song was composed to embody the spirit of unity across
                all of India's diverse communities. Sung at every parade, it
                reinforces that every cadet is first and foremost an Indian.
              </p>
            </div>
          </div>
        </Section>

        {/* ── OUR UNIT ── */}
        <Section id="unit" title="Our Unit — 38 GUJ BN NCC" icon="ti-flag-3">
          <div
            style={{
              ...S.twoCol,
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 16,
            }}
          >
            {/* Unit Details List */}
            <div style={S.unitGrid}>
              {unitDetails.map((u, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ ...S.unitCard, margin: 0 }}
                >
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

            {/* Google Map Card */}
            <div
              className="card"
              style={{
                margin: 0,
                padding: 12,
                overflow: "hidden",
                minHeight: 250,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ ...S.unitLabel, marginBottom: 8, paddingLeft: 4 }}>
                <i
                  className="ti ti-map-pin"
                  style={{ marginRight: 4, color: "var(--primary)" }}
                />
                Unit Store Location
              </p>
              <div
                style={{
                  flex: 1,
                  borderRadius: 8,
                  overflow: "hidden",
                  position: "relative",
                  minHeight: 200,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6550619704212!2d72.92649537430323!3d22.554590633632003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4fe64792a09d%3A0xe14b75e23f25b2a0!2sINDIAN%20ARMY%20NCC%20STORE!5e0!3m2!1sen!2sin!4v1781930432243!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Indian Army NCC Store Location Map"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* ── ANO MESSAGE ── */}
        <Section id="ano" title="Message from the ANO" icon="ti-message-quote">
          <div
            className="card"
            style={{
              ...S.anoCard,
              margin: 0,
              padding: isMobile ? "20px" : "30px 32px",
            }}
          >
            <div style={S.anoBody}>
              <p style={S.anoQuote}>
                NCC is not merely a course or an activity — it is a transforming
                experience that shapes who you are as a person. Every parade you
                attend, every camp you endure, and every service project you
                lead contributes to building a version of yourself that is
                stronger, more disciplined, and more compassionate.
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
    </div>
  );
}

/* ─── SUB-COMPONENTS ─────────────────────────────────────────── */

function Section({ id, title, icon, children }) {
  return (
    <section id={id} style={styles.section}>
      <div style={styles.sectionHeader}>
        <i
          className={`ti ${icon}`}
          style={{ fontSize: 18, color: "var(--primary)" }}
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
    <div
      className="stat-card"
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        margin: 0,
        padding: "12px",
      }}
    >
      <div style={styles.statIconWrap}>
        <span style={{ fontSize: 18 }}>{emoji}</span>
      </div>
      <div>
        <p style={styles.statLabel}>{label}</p>
        <strong style={{ fontSize: 13, color: "var(--text-color)" }}>
          {value}
        </strong>
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
      <p
        style={{
          ...styles.actLabel,
          color: hovered ? "#fff" : "var(--text-color)",
        }}
      >
        {label}
      </p>
      <p
        style={{
          ...styles.actSub,
          color: hovered ? "rgba(255,255,255,0.7)" : "var(--gray)",
        }}
      >
        {sub}
      </p>
    </div>
  );
}

function Th({ children }) {
  return (
    <th
      style={{
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 12,
        letterSpacing: "0.5px",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children, bold, muted }) {
  return (
    <td
      style={{
        fontWeight: bold ? 600 : 400,
        color: muted ? "var(--gray)" : bold ? "var(--text-color)" : "inherit",
      }}
    >
      {children}
    </td>
  );
}

/* ─── STYLES ─────────────────────────────────────────────────── */

const styles = {
  hero: {
    background: "#1a3052",
    borderRadius: 14,
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
  heroTitle: { color: "#fff", fontWeight: 700, margin: "4px 0 0" },
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
    flexWrap: "nowrap",
    marginBottom: 32,
    borderBottom: "1px solid var(--gray-mid)",
  },
  navBtn: {
    background: "transparent",
    color: "var(--gray)",
    border: "1px solid var(--gray-mid)",
    borderRadius: 8,
    padding: "6px 14px",
    fontSize: 12,
    fontWeight: 500,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    transition: "all 0.15s",
    whiteSpace: "nowrap",
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "var(--text-color)",
    margin: 0,
  },
  sectionDivider: {
    height: 1,
    background: "var(--gray-mid)",
    marginBottom: 20,
  },
  twoCol: { display: "grid", gap: 12 },
  twoColFixed: { display: "flex", gap: 14 },
  blockquote: {
    background: "var(--gray-light)",
    borderRadius: 10,
    display: "flex",
    gap: 0,
    position: "relative",
    border: "1px solid var(--gray-mid)",
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
    color: "var(--text-light)",
  },
  statIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "var(--gray-mid)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  statLabel: {
    fontSize: 10,
    color: "var(--gray)",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    margin: "0 0 3px",
  },
  mottoCard: {
    background: "#1a3052",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
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
  flagEyebrow: {
    fontSize: 11,
    color: "var(--gray)",
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
  flagWing: { fontSize: 13, margin: "0 0 2px" },
  flagDesc: { fontSize: 12, color: "var(--gray)", margin: 0, lineHeight: 1.5 },
  timeline: {
    display: "flex",
    flexDirection: "column",
    borderLeft: "2px solid var(--gray-mid)",
    paddingLeft: 0,
  },
  timelineItem: {
    display: "grid",
    alignItems: "center",
    padding: "14px 0 14px 0px",
    position: "relative",
  },
  timelineYear: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1a3052",
    whiteSpace: "nowrap",
    textAlign: "left",
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#1a3052",
    border: "2px solid #fff",
    boxShadow: "0 0 0 2px var(--gray-mid)",
    flexShrink: 0,
    position: "relative",
    left: -6,
  },
  timelineText: { fontSize: 13, color: "var(--text-light)", lineHeight: 1.7 },
  aimsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 12,
  },
  aimCard: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    borderLeft: "3px solid #1a3052",
  },
  aimIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 10,
    background: "var(--gray-light)",
    border: "1px solid var(--gray-mid)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  aimTitle: { fontSize: 14, fontWeight: 700, margin: "0 0 5px" },
  aimDesc: { fontSize: 13, color: "var(--gray)", margin: 0, lineHeight: 1.6 },
  ranksGrid: { display: "grid", gap: 10 },
  rankCard: { borderRadius: 8, padding: "14px 16px" },
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
    margin: "0 0 4px",
    letterSpacing: 0.5,
  },
  rankName: { fontSize: 12, color: "var(--gray)", margin: 0, lineHeight: 1.4 },
  activitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: 10,
  },
  actCard: {
    background: "var(--gray-light)",
    border: "1px solid var(--gray-mid)",
    borderRadius: 10,
    padding: "18px 14px",
    textAlign: "center",
    cursor: "default",
    transition: "background 0.2s, border-color 0.2s",
  },
  actCardHover: { background: "#1a3052"},
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
    color: "var(--gray)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    margin: "0 0 6px",
  },
  certBodyText: { fontSize: 13, margin: 0, lineHeight: 1.65 },
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
  benefitCard: { display: "flex", gap: 14, alignItems: "flex-start" },
  benefitIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 10,
    background: "var(--gray-light)",
    border: "1px solid var(--gray-mid)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  benefitTitle: { fontSize: 14, fontWeight: 700, margin: "0 0 5px" },
  benefitDesc: {
    fontSize: 13,
    color: "var(--gray)",
    margin: 0,
    lineHeight: 1.6,
  },
  songCard: {
    background: "#1a3052",
    borderRadius: 12,
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 10,
  },
  unitCard: { display: "flex", alignItems: "center", gap: 12 },
  unitIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "var(--gray-light)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  unitLabel: {
    fontSize: 11,
    color: "var(--gray)",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    margin: "0 0 3px",
  },
  unitValue: { fontSize: 14, fontWeight: 600, margin: 0 },
  unitGrid: { display: "grid", gridTemplateColumns: "1fr", gap: 10 },
  anoCard: {
    display: "flex",
    gap: 20,
    position: "relative",
    overflow: "hidden",
  },
  anoBody: { flex: 1 },
  anoQuote: {
    fontSize: 15,
    color: "var(--text-light)",
    fontStyle: "italic",
    lineHeight: 1.85,
    margin: "0 0 24px",
    borderLeft: "3px solid #1a3052",
    paddingLeft: 18,
  },
  anoFooter: {
    display: "flex",
    gap: 14,
    alignItems: "center",
    flexWrap: "wrap",
  },
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
  anoName: { fontSize: 14, fontWeight: 700, margin: "0 0 3px" },
  anoUnit: { fontSize: 12, color: "var(--gray)", margin: 0 },
};
