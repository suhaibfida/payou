export default function PayouLogo() {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular arrow + dollar */}
      <circle cx="40" cy="40" r="28" stroke="#c0cfc6ff" strokeWidth="6" />
      <path
        d="M60 40a20 20 0 0 1-20 20"
        stroke="#cfd7d3ff"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M20 40a20 20 0 0 1 20-20"
        stroke="#dcebe2ff"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Dollar sign */}
      <text
        x="40"
        y="47"
        fontSize="28"
        fontWeight="bold"
        textAnchor="middle"
        fill="#cdd6d1ff"
      >
        $
      </text>

      {/* Payou text */}
      <text
        x="90"
        y="48"
        fontSize="38"
        fontWeight="600"
        fill="#c5cfcfff"
        fontFamily="Arial, sans-serif"
      >
        Payou
      </text>
    </svg>
  );
}
