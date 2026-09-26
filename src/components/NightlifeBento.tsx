"use client";

import { useState } from "react";

const CARDS = [
  {
    img: "/designed%20for%20better%20experinece/3e02681ec91f4def8d883c0fa6aa5004.jpg",
    label: "DJ & Live Sets",
    desc: "World-class DJs spinning sets as the ocean stretches endlessly around you.",
    gridColumn: "1 / 3",
    gridRow: "1 / 3",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/4c9891b57000195c116d067e45754251.jpg",
    label: "Drinks With A View",
    desc: "Crafted cocktails served where the horizon never ends.",
    objectPosition: "center bottom",
  },
  {
    img: "/designed%20for%20better%20experinece/5cc854dc50aebc5c63e6d6867e5421cc.jpg",
    label: "Dance Floor",
    desc: "An open-air dancefloor under the stars, every night.",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/18b95c852446fd37894db1c36d2d6d67.jpg",
    label: "Music Floor",
    desc: "Live saxophone, jazz sessions, and acoustic sets on deck.",
    objectPosition: "center bottom",
  },
  {
    img: "/designed%20for%20better%20experinece/50d89a6f2d4183e0c3ec3dbfec284390.jpg",
    label: "Sea Views",
    desc: "Every corner of the ship frames a breathtaking panorama.",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/a4b48f8ec4ef12eb164d5be6d08074ff.jpg",
    label: "Music",
    desc: "The soundtrack to your voyage, curated for every mood.",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/cd7c3c71ea73800270349aef08f89ffc.jpg",
    label: "Cocktails",
    desc: "Bespoke cocktail menus crafted by award-winning mixologists.",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/2c94fa773b4e02d052f067666bb68e33.jpg",
    label: "Rooftop Lounge",
    desc: "Golden hour drinks as the ship sails into the sunset.",
    gridColumn: "3 / 5",
    objectPosition: "center 65%",
  },
];

export default function NightlifeBento() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gridTemplateRows: "290px 290px 220px",
        gap: "10px",
      }}
    >
      {CARDS.map((card, index) => {
        const isHovered = hovered === index;

        return (
          <article
            key={card.label}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              gridColumn: card.gridColumn,
              gridRow: card.gridRow,
              position: "relative",
              overflow: "hidden",
              minWidth: 0,
              borderRadius: "20px",
              cursor: "pointer",
              background: "#111",
            }}
          >
            <img
              src={card.img}
              alt={card.label}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: card.objectPosition,
                display: "block",
                transform: isHovered ? "scale(1.06)" : "scale(1)",
                transition:
                  "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isHovered
                  ? "linear-gradient(to top, rgba(0,0,0,0.86), rgba(0,0,0,0.25), rgba(0,0,0,0.05))"
                  : "linear-gradient(to top, rgba(0,0,0,0.65), transparent 60%)",
                transition: "background 0.4s ease",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(99,60,180,0.3), transparent 60%)",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "16px",
                right: "16px",
                bottom: isHovered ? "58px" : "16px",
                color: "#fff",
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                transition: "bottom 0.3s ease",
                zIndex: 3,
              }}
            >
              {card.label}
            </div>

            <div
              style={{
                position: "absolute",
                left: "16px",
                right: "16px",
                bottom: "16px",
                opacity: isHovered ? 1 : 0,
                transform: isHovered
                  ? "translateY(0)"
                  : "translateY(12px)",
                transition:
                  "opacity 0.35s ease, transform 0.35s ease",
                zIndex: 3,
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "rgba(220,230,255,0.8)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  lineHeight: 1.7,
                }}
              >
                {card.desc}
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "scale(1)" : "scale(0.7)",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease",
                zIndex: 4,
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                ↗
              </span>
            </div>
          </article>
        );
      })}
    </section>
  );
}
