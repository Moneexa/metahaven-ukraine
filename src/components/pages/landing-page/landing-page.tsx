import { SubIntro } from "./sub-intro.tsx";
import { AvailableLandMarks } from "./available-landmarks.tsx";
import { ComingSoon } from "./coming-soon.tsx";
import { DonateNow } from "./donate-now.tsx";

export const LandingPage = () => {
  return (
    <div style={{ backgroundColor: "#4D24A8" }}>
      <SubIntro />
      <AvailableLandMarks />
      <ComingSoon />
      <DonateNow />
    </div>
  );
};
