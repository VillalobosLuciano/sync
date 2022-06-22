const Sync = ({ className = '', ...props }) => (
  <svg
    width="333"
    height="312"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 312 333"
    className={className}
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M31.65 196.741 178.8 40.295l61.912 205.658-209.06-49.212Z"
        stroke="#A9FFF1"
      />
    </g>
    <g filter="url(#b)">
      <path
        d="M254.782 240.256 47.514 190.991 193.812 36.124l60.97 204.132Z"
        stroke="#A9FFF1"
        stroke-width="2"
      />
    </g>
    <path
      d="M63.822 185.632 210.212 33.246l58.775 202.972-205.166-50.586Z"
      stroke="#A9FFF1"
      stroke-width="3"
    />
    <defs>
      <filter
        id="a"
        x="26.693"
        y="35.322"
        width="218.746"
        height="215.316"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_6" />
      </filter>
      <filter
        id="b"
        x="41.598"
        y="30.178"
        width="218.638"
        height="215.451"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_6" />
      </filter>
    </defs>
  </svg>
);

export default Sync;
