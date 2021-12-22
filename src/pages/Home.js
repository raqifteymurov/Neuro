import React from "react";
import CalmClarity from "../components/CalmClarity/calmClarity";
import DoingMore from "../components/DoingMore/doingMore";
import EnergyFocus from "../components/EnergyFocus/energyFocus";
import Header from "../components/Header/Header";
import Healthinyourpocket from "../components/Healthinyourpocket/Healthinyourpocket";
import Howwedoit from "../components/Howwedoit/howWeDoIt";
import IntheZone from "../components/IntheZone/intheZone";
import MentalGame from "../components/MentalGame/mentalGame";
import Nonsense from "../components/Nonsense/Nonsense";
import OurMission from "../components/OurMission/ourMission";
import RefreshMind from "../components/RefreshMind/refreshMind";
import Subscribe from "../components/Subscribe/subscribe";
 
export default function Home() {
  return (
    <>
      <Header/>
      <Healthinyourpocket />
      <Nonsense />
      <MentalGame />
      <EnergyFocus />
      <CalmClarity/>
      <IntheZone/>
      <Subscribe/>
      <OurMission/>
      <Howwedoit/>
      <DoingMore/>
      <RefreshMind/>
    </>
  );
}
