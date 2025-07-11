"use client";

type ScrollArrowProps = {
  targetId: string;
};

export default function ScrollArrow({ targetId }: ScrollArrowProps) {
  const handleClick = () => {
    const nextSection = document.getElementById(targetId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer select-none"
      onClick={handleClick}
      style={{
        width: "40px",
        height: "40px",
        animation: "bounce 2s infinite",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00897B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="6 13 12 19 18 13" />
      </svg>

      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15%);
            }
          }
        `}
      </style>
    </div>
  );
}
