import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const CoverImg = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
`;

export const Title = styled.h3`
    color: white;
    font-size: 17px;
    font-weight: bold;
`;

export const UserName = styled.span`
    color: #929292;
    font-size: 12px;
    font-weight: normal;
`;

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
