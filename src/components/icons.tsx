import type { SVGProps } from "react";

export const Icons = {
  Logo: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        viewBox="0 0 729 729"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="729"
          height="729"
          rx="190"
          fill="url(#paint0_linear_111_13)"
        />
        <path
          d="M580 364.5C580 483.518 483.518 580 364.5 580M580 364.5C580 245.483 483.518 149 364.5 149M580 364.5H484.222M364.5 580C245.483 580 149 483.518 149 364.5M364.5 580V484.222M364.5 149C245.483 149 149 245.483 149 364.5M364.5 149V244.778M149 364.5H244.778M364.5 364.5H364.739"
          stroke="url(#paint1_linear_111_13)"
          strokeWidth="50.2759"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M544 19H184C92.873 19 19 92.873 19 184V544C19 635.127 92.873 709 184 709H544C635.127 709 709 635.127 709 544V184C709 92.873 635.127 19 544 19Z"
          stroke="url(#paint2_linear_111_13)"
          strokeWidth="30"
        />
        <defs>
          <linearGradient
            id="paint0_linear_111_13"
            x1="81.5"
            y1="71.5"
            x2="656"
            y2="665.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7174FE" />
            <stop offset="1" stopColor="#555AE8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_111_13"
            x1="580"
            y1="543.5"
            x2="217.5"
            y2="187"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#BABCFF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_111_13"
            x1="364"
            y1="4"
            x2="364"
            y2="724"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.12" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
};
