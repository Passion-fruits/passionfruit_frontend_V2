import { Header, PlayBar } from "..";

interface props{
    children : any;
}

export default function LayoutContainer({ children } : props) {
  return (
    <>
      <Header />
      <PlayBar />
      {children}
    </>
  );
}
