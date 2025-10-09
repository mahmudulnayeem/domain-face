import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          background: "#EF5D6E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10%",
          fontSize: 24,
          fontWeight: 700,
          color: "white",
        }}
      >
        MHN
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
