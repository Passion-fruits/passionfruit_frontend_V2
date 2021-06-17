import * as S from "./styles";

export default function Login() {
  return (
    <S.Wrapper>
      <S.CoverWrapper>
        <S.IntroMent>버터멜론에 오신 것을 환영합니다.</S.IntroMent>
        <S.SubMent>계정이 없으면 자동으로 회원가입됩니다</S.SubMent>
        <S.SNSContainer color="#0080FF">FACEBOOK 로그인</S.SNSContainer>
        <S.SNSContainer color="white" fontColor="black">
         <S.ColorSpan color="blue">G</S.ColorSpan> 
         <S.ColorSpan color="red">o</S.ColorSpan>
         <S.ColorSpan color="#CFDE00">o</S.ColorSpan>
         <S.ColorSpan color="blue">g</S.ColorSpan>
         <S.ColorSpan color="#00BF18">l</S.ColorSpan>
         <S.ColorSpan color="red">e </S.ColorSpan>
         로그인
        </S.SNSContainer>
        <S.SNSContainer color="#00BF18">NAVER 로그인</S.SNSContainer>
      </S.CoverWrapper>
      <S.WaveBar time="4" />
      <S.WaveBar time="7" />
      <S.WaveBar time="3" />
      <S.WaveBar time="2.7" />
      <S.WaveBar time="5" />
      <S.WaveBar time="3" />
    </S.Wrapper>
  );
}
