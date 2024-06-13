import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

import About from "~/components/about";
import Appointments from "~/components/appointments";
import Contact from "~/components/contact";
import Footer from "~/components/footer";
import Landing from "~/components/landing";

import background from "../assets/backbackground.jpeg";

export const meta: MetaFunction = () => [
  {
    title: "James the Barber | Stillwater, OK",
    description: "Master barber with old-fashioned customer service.",
  },
];

export default function Index() {
  const appointmentsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (linkName: string) => {
    const ref = linkName === "Appointments" ? appointmentsRef : contactRef;
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <main>
      <div
        style={{
          height: "100vh",
          overflowY: "scroll",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Landing scrollTo={scrollTo} />
        <About scrollTo={scrollTo} />
        <div ref={appointmentsRef}>
          <Appointments />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
