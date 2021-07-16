interface props{
    cv : HTMLCanvasElement;
    setColor : any;
    url : string;
}

export function ColorThief({cv,setColor,url} : props){
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url + "?" + new Date().getTime();
    img.onload = () => {
      const ctx = cv?.getContext("2d");
      ctx?.drawImage(img, 0, 0, 300, 300);
      var pixel = ctx?.getImageData(0, 0, 1, 1);
      const data = pixel?.data;
      if (data) setColor(`rgba(${data[0]},${data[1]},${data[2]})`);
    };
}