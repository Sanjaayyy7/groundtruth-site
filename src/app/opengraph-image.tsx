import { ImageResponse } from "next/og";
import { facts } from "@/content/facts";

export const alt =
  "Groundtruth — engineering AI evaluation systems that verify their own evidence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F8F8F6",
          color: "#111111",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#5F6368" }}>
            Engineering case study
          </div>
          <div style={{ fontSize: 110, fontWeight: 600, marginTop: 16 }}>
            Groundtruth
          </div>
          <div style={{ fontSize: 36, marginTop: 24, maxWidth: 900 }}>
            Engineering AI evaluation systems that verify their own evidence.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 48,
            fontSize: 28,
            color: "#5F6368",
            borderTop: "1px solid #E5E7EB",
            paddingTop: 32,
          }}
        >
          <span>{`${facts.commits.value} commits`}</span>
          <span>{`${facts.tests.value} tests`}</span>
          <span>{`${facts.milestones.value} milestones`}</span>
          <span style={{ color: "#047857" }}>{`${facts.release.value}`}</span>
        </div>
      </div>
    ),
    size
  );
}
