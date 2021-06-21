import styled from "@emotion/styled";

export const Container = styled.div`
    width: 700px;
    padding: 25px 30px;
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const CoverImg = styled.img`
    width: 220px;
    height: 220px;
    object-fit: cover;
    margin-right: 28px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 390px;
    height: 220px;
    justify-content: space-between;
    padding-bottom: 45px;
    position: relative;
`;

export const Date = styled.span`
    font-size: 11px;
    color: #c2c2c2;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.h3`
    font-size: 28px;
    color: white;
    margin: 0 0 0 10px;
`;

export const Des = styled.p`
    font-size: 15px;
    color: #fff5f5;
    margin: 15px 0 0;
`;
