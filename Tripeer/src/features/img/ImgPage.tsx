import useImgCompressor from '../../hooks/useImgCompressor';

export default function ImgPage() {
  const { ImgInput, compressedImg } = useImgCompressor();
  return (
    <>
      <ImgInput />
      <img
        src={compressedImg && window.URL.createObjectURL(compressedImg)}
        alt=""
      />
    </>
  );
}
