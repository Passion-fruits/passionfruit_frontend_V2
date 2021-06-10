import { MainComponent } from "@src/components";
import LayoutContainer from "@src/components/public/LayoutContainer";

export default function Home() {
  return (
    <LayoutContainer children={<MainComponent/>}/>
  );
}
