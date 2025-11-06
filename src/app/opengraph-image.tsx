import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "white",
          padding: 64,
          fontSize: 56,
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.8 }}>VINS — IoT / IIoT / Smart Home</div>
        <div style={{ marginTop: 16, fontWeight: 600 }}>
          Умный дом, IoT и IIoT под ключ
        </div>
        <div style={{ fontSize: 24, marginTop: 12, opacity: 0.9 }}>
          Проектирование и внедрение «под ключ»
        </div>
      </div>
    ),
    { ...size }
  );
}


