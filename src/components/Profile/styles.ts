import styled from "@emotion/styled";
import { COLOR, HEADER_HEIGHT, MAIN_WIDTH, PLAYBAR_HEIGHT } from 'styles';

export const Wrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
padding-top:${HEADER_HEIGHT};
box-sizing:content-box;
padding-bottom:${PLAYBAR_HEIGHT};
`

interface GBoxProps{
    color:string;
}
export const GradientBox = styled.div<GBoxProps>`
width:100%;
height:280px;
background:${(e)=>`linear-gradient(${e.color},${COLOR.dark})`};
opacity:0.5 ;
position:absolute;
z-index:-1;
`

export const Container = styled.div`
width:${MAIN_WIDTH};
`

export const TOP_BAR = styled.div`
display:flex;
margin-top:70px;
`

export const ProfileInfor = styled.div`
display:flex;
align-items:center;
`

export const Profile = styled.img`
width:240px;
height:240px;
border-radius:80%;
object-fit:cover;
`

export const UserInfor = styled.div`
display:flex;
flex-direction:column;
padding-left:40px;
& h1{
    color:white;
    font-weight:800;
    font-size:55px;
    margin:0;
    text-transform:capitalize;
}
& span{
    color:#C2C2C2;
    font-size:18px;
    margin-top:10px;
}
`