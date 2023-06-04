import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="97"
      fill="none"
      viewBox="0 0 90 97"
    >
      <g filter="url(#filter0_d_207_539)">
        <path
          fill="#000"
          d="M16 35.024c0-3.826 5.629-11.584 5-15.357-1.285-7.71.468-7.495 2.476-5.464 2.963 2.998 6.603 5.464 10.818 5.464h13.53c3.876 0 7.355-2.038 10.153-4.72 2.316-2.22 4.436-2.933 2.523 4.72-1.077 4.307 5.5 10.706 5.5 15.145v23.504c0 6.269-5.082 11.35-11.351 11.35h-29.1A9.55 9.55 0 0116 60.119V35.023z"
        ></path>
      </g>
      <g clipPath="url(#clip0_207_539)">
        <path
          fill="#5EC5DC"
          fillRule="evenodd"
          d="M35.335 31.107c-3.373.884-4.673 6.61-2.239 9.86 2.76 3.685 7.45 1.094 7.45-4.117 0-3.745-2.466-6.463-5.21-5.743zm9.298-.028c-3.717 1.018-4.838 7.288-1.856 10.384 3.176 3.297 7.688-.443 6.949-5.76-.427-3.071-2.822-5.246-5.093-4.624zm-15.931 8.676c-3.529.949-3.63 7.78-.133 8.876 1.895.593 3.677-.78 4.182-3.226.678-3.278-1.512-6.333-4.05-5.65zm23.14.001c-2.357.633-3.469 4.318-2.125 7.039 1.428 2.891 4.933 2.513 5.992-.647 1.165-3.474-1.057-7.147-3.867-6.392zm-12.483 3.72c-2.701.342-5.146 1.878-6.337 3.98a8.463 8.463 0 01-.492.761c-2.237 2.963-1.951 7.159.573 8.406 1.155.57 2.076.35 4.444-1.07 1.712-1.026 1.969-1.135 2.765-1.17 1.47-.062 1.77.042 3.705 1.287 2.187 1.406 3.103 1.632 4.276 1.05 2.497-1.237 2.911-5.3.852-8.356a8.216 8.216 0 01-.41-.674c-1.489-2.932-5.45-4.712-9.376-4.215z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_207_539"
          width="90"
          height="96.668"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="4" dy="7"></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_207_539"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_207_539"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_207_539">
          <path
            fill="#fff"
            d="M0 0H30V30H0z"
            transform="translate(26 29)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logo;
