import Link from "next/link";

// Private internal hub listing every client concept. Not indexed (see layout).
const demos = [
  {
    slug: "luxe",
    name: "The Luxe Beauty & Esthetic Room",
    location: "Round Rock, TX",
    status: "Ready to send",
  },
];

export default function DemosIndex() {
  return (
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "72px 24px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p
        style={{
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          fontSize: 12,
          color: "#8a8a8a",
        }}
      >
        ViTek Systems
      </p>
      <h1 style={{ fontSize: 34, margin: "8px 0 4px" }}>Client Concepts</h1>
      <p style={{ color: "#9a9a9a", margin: "0 0 40px" }}>
        Private sales mockups. Share a direct link — none of these are indexed.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        {demos.map((d) => (
          <Link
            key={d.slug}
            href={`/${d.slug}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              border: "1px solid #262626",
              borderRadius: 10,
              padding: "18px 20px",
              background: "#131313",
            }}
          >
            <span>
              <strong style={{ display: "block", fontSize: 16 }}>{d.name}</strong>
              <span style={{ color: "#8a8a8a", fontSize: 13 }}>{d.location}</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#7bd88f",
                }}
              >
                {d.status}
              </span>
              <span style={{ color: "#666", fontFamily: "monospace" }}>/{d.slug} →</span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
