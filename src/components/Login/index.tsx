import * as S from "./styles";
import Wave from "./components/wave";
import GoogleSpan from "./components/googleSpan";
import GoogleLogin from "react-google-login";

export default function Login() {
  const googleAuth = (event) => {
    console.log(event);
  };
  return (
    <S.Wrapper>
      <Wave />
      <S.CoverWrapper>
        <>
          <S.IntroMent>버터멜론에 오신 것을 환영합니다.</S.IntroMent>
          <S.SubMent>계정이 없으면 자동으로 회원가입됩니다</S.SubMent>
        </>
        <>
          <S.SNSContainer color="#0080FF">FACEBOOK 로그인</S.SNSContainer>
        </>
        <>
          <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            cookiePolicy="single_host_origin"
            render={(e) => (
              <S.SNSContainer
                onClick={e.onClick}
                color="white"
                fontColor="black"
              >
                <GoogleSpan />
                로그인
              </S.SNSContainer>
            )}
            onSuccess={googleAuth}
            onFailure={() => alert("정보를 불러오는데 실패했습니다.")}
          />
        </>
        <>
          <S.SNSContainer color="#00BF18">NAVER 로그인</S.SNSContainer>
        </>
      </S.CoverWrapper>
    </S.Wrapper>
  );
}
