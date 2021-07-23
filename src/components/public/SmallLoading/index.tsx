import styled from "@emotion/styled";

export const Wrapepr = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
`;

export default function SmallLoading() {
  return (
    <Wrapepr>
      <div id="loading"></div>
    </Wrapepr>
  );
}
