import { useRef } from "react";

import background from "~/assets/background.jpeg";

import Navbar from "./navbar";

export default function Landing(props: {
  scrollTo: (linkName: string) => void;
}) {
  const { scrollTo } = props;
  const landingRef = useRef<HTMLDivElement>(null);

  return (
    <div className="landing" style={{ backgroundImage: `url(${background})` }}>
      <Navbar landingRef={landingRef} scrollTo={scrollTo} />
      <div className="landingOverlay">
        <svg className="landingSvg" viewBox="0 0 500 500" fill="currentColor">
          <path
            id="curveTop"
            d="M 26.428 148.6 C 31.484 142.5 109.232 51.8 252.212 53 C 392.917 54.2 468.137 143.3 473.572 150"
            fill="transparent"
          />
          <path
            id="curveBottom"
            d="M 26.428 316.967 C 31.484 323.067 109.232 413.767 252.212 412.567 C 392.917 411.367 468.137 322.267 473.572 315.567"
            fill="transparent"
          />
          <text width="500">
            <textPath
              xlinkHref="#curveTop"
              textAnchor="middle"
              startOffset="50%"
              fontFamily="Abril Fatface, serif"
              fontSize="60px"
            >
              James the Barber
            </textPath>
          </text>
          <text width="500">
            <textPath
              xlinkHref="#curveBottom"
              textAnchor="middle"
              startOffset="50%"
              fontFamily="Great Vibes, cursive"
              fontSize="34px"
              alignmentBaseline="hanging"
            >
              Master barber with old-fashioned customer service.
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
