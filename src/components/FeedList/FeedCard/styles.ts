import styled from "@emotion/styled";

export const Container = styled.div`
    width: 700px;
    padding: 20px 30px 35px;
    display: flex;
    flex-direction: column;
    background: #242424;
    border-radius: 10px;
    position: relative;
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
    & time{
        font-size: 11px;
    color: #c2c2c2;
    }
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
    line-height:20px;
`;

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    & img{
        width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
    }
    & span {
        font-size: 14px;
    color: #fff5f5;
    font-weight: bold;
    }
`;

export const IconWrapper = styled.div`
    position: absolute;
    left: 510px;
    bottom: 25px;
    display: flex;
    height: 23px;
`;

export const PointerWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 30px;
`;

export const Value = styled.span`
    color: white;
    font-size: 13px;
    margin-left: 7px;
`;
