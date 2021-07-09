export default function FileInput({event}) {
  return (
    <>
      <input
        type="file"
        id="coverInp"
        onChange={(e) => event(e.target)}
        accept="image/png, image/jpeg, image/jpg"
        name="coverSrc"
      />
      <input
        type="file"
        id="musicInp"
        onChange={(e) => event(e.target)}
        accept="audio/*"
        name="musicSrc"
      />
    </>
  );
}
