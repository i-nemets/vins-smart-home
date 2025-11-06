import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function toTitle(slug: string) {
  const s = decodeURIComponent(slug).replace(/-/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function Image({ params }: { params: { slug: string } }) {
  const title = toTitle(params.slug);
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#0a0a0a", color: "white", padding: 64 }}>
        <div style={{ fontSize: 24, opacity: 0.8 }}>VINS — Блог</div>
        <div style={{ marginTop: 12, fontSize: 52, fontWeight: 700 }}>{title}</div>
      </div>
    ),
    { ...size }
  );
}


