export default function MarkIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="10.5"
        fill="white"
        fillOpacity="0.4"
        stroke="white"
        strokeWidth="3"
      />
      <circle cx="11.9999" cy="12.0008" r="7.2" fill="white" />
    </svg>
  );
}
