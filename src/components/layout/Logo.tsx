import { SITE_NAME } from "@/lib/constants";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M27 16L29.5981 20.5L25.4019 23.5L24 20H21V25H11V20H8L6.59808 23.5L2.40192 20.5L5 16L2.40192 11.5L6.59808 8.5L8 12H24L25.4019 8.5L29.5981 11.5L27 16Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M13 14H19V17C19 18.1046 18.1046 19 17 19H15C13.8954 19 13 18.1046 13 17V14Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-bold text-lg text-foreground hidden sm:inline-block">{SITE_NAME}</span>
    </div>
  );
}
