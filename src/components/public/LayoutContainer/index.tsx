import { Header, PlayBar } from "..";
import styled from '@emotion/styled'
import { PLAYBAR_HEIGHT } from "styles";

interface props{
    children : any;
}

const Wrapper = styled.div`
  width:100%;
  height:100%;
  padding-bottom:${PLAYBAR_HEIGHT};
`

export default function LayoutContainer({ children } : props) {
  return (
    <Wrapper>
      <Header />
      <PlayBar />
      {children}
    </Wrapper>
  );
}
