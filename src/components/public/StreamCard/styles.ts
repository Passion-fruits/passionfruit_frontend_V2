import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const CoverImgHover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImgWrapper = styled.div`
    width: 100%;
    height: 220px;
    position: relative;
    cursor: pointer;

    &:hover div {
        visibility: visible;
    }
`;

export const PlayButton = styled.button`
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background:rgb(0,0,0,0.4);
    cursor: pointer;
`;

export const CoverImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Title = styled.h3`
    color: white;
    font-size: 17px;
    font-weight: bold;
    margin-bottom:7px;
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
