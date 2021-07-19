export const TimeCheck = (musicObj, setMusicObj) => {
  if (musicObj.musicSrc !== "") {
    const reader = new FileReader();
    reader.readAsDataURL(musicObj.musicSrc);
    reader.onload = (e) => {
      const result: any = e.target.result;
      const audio = new Audio(result);
      audio.oncanplaythrough = () => {
        setMusicObj({
          ...musicObj,
          duration: audio.duration.toString(),
        });
        if (audio.duration < 60 || audio.duration > 300) {
          alert("1분 이상, 5분 이하의 곡을 업로드해주세요!");
          setMusicObj({
            ...musicObj,
            musicSrc: "",
            duration: "",
          });
        }
      };
    };
  }
};
