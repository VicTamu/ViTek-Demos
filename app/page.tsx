import type { Metadata } from "next";
import Link from "next/link";

/**
 * Root route. Public by URL but guarded: a trimmed link (…/luxe → …/) must not
 * expose the prospect pipeline. By default this renders a neutral ViTek splash.
 * The private index only appears when `?k=<HUB_KEY>` matches the HUB_KEY env var
 * (set in .env.local locally / Vercel project env). No key set ⇒ always splash.
 */

// Private internal hub listing every client concept. Not indexed (see layout).
const demos = [
  {
    slug: "luxe",
    name: "The Luxe Beauty & Esthetic Room",
    location: "Round Rock, TX",
    status: "Ready to send",
  },
];

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function isUnlocked(params: Record<string, string | string[] | undefined>) {
  const key = process.env.HUB_KEY;
  return Boolean(key) && params.k === key;
}

// Neutral tab title on the splash so a trimmed link reveals nothing.
export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await searchParams;
  return {
    title: isUnlocked(params)
      ? "ViTek Systems — Client Concepts"
      : "ViTek Systems — Web Design Studio",
  };
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  return isUnlocked(params) ? <Hub /> : <Splash />;
}

function Splash() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p
        style={{
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          fontSize: 12,
          color: "#8a8a8a",
          margin: 0,
        }}
      >
        ViTek Systems
      </p>
      <h1 style={{ fontSize: 30, fontWeight: 600, margin: "14px 0 10px" }}>
        Web design for local business.
      </h1>
      <p style={{ color: "#9a9a9a", maxWidth: 440, margin: "0 0 22px", lineHeight: 1.6 }}>
        Custom sites for shops, salons, and studios across the Austin &amp; Round
        Rock area.
      </p>
      <a
        href="mailto:vitecollabs@gmail.com"
        style={{
          fontSize: 14,
          color: "#f5f5f5",
          border: "1px solid #2a2a2a",
          borderRadius: 8,
          padding: "10px 18px",
        }}
      >
        vitecollabs@gmail.com
      </a>
    </main>
  );
}

function Hub() {
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
