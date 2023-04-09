import { Stack } from "shared/components";
import { Application, Flows, Rules, Stats, Terms, Tools } from "./components";

export const sections = [
  Stats.sectionData,
  Terms.sectionData,
  Tools.sectionData,
  Rules.sectionData,
  Application.sectionData,
];

function Main() {
  return (
    <Stack>
      <Stats.default />
      <Flows.default />
      <Terms.default />
      <Tools.default />
      <Rules.default />
      <Application.default />
    </Stack>
  );
}

export default Main;
