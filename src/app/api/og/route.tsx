// src/app/api/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

// Load the font from the public directory
const interRegular = fetch(
  new URL("https://fonts.googleapis.com/css2?family=Inter&display=swap")
).then((res) => res.arrayBuffer());

const interBold = fetch(
  new URL(
    "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
  )
).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Get params
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const dsa = searchParams.get("dsa");
    const money = searchParams.get("money");
    const workout = searchParams.get("workout");

    // Load the fonts
    const [interRegularFont, interBoldFont] = await Promise.all([
      interRegular,
      interBold,
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: "40px",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "800px",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                fontWeight: "bold",
                color: "#000",
                marginBottom: "20px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "32px",
                color: "#666",
                marginBottom: "40px",
              }}
            >
              {description}
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              <div
                style={{
                  padding: "12px 24px",
                  borderRadius: "8px",
                  backgroundColor: "#f3f4f6",
                  fontSize: "24px",
                }}
              >
                DSA: {dsa ?? 0}
              </div>
              <div
                style={{
                  padding: "12px 24px",
                  borderRadius: "8px",
                  backgroundColor: "#f3f4f6",
                  fontSize: "24px",
                }}
              >
                Money: ₹{money ?? 0}
              </div>
              <div
                style={{
                  padding: "12px 24px",
                  borderRadius: "8px",
                  backgroundColor: "#f3f4f6",
                  fontSize: "24px",
                }}
              >
                Workout: {workout === "true" ? "✅" : "❌"}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interRegularFont,
            weight: 400,
            style: "normal",
          },
          {
            name: "Inter",
            data: interBoldFont,
            weight: 700,
            style: "normal",
          },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image: ${(e as Error).message}`, {
      status: 500,
    });
  }
}
