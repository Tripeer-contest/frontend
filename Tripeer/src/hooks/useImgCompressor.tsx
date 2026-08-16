import imageCompression from 'browser-image-compression';
import { ChangeEvent, useCallback, useState } from 'react';

export default function useImgCompressor(options?: {
  maxSizeMB?: number;
  maxWidthOrHeight?: number;
}) {
  const [compressedImg, setCompressedImg] = useState<File>();

  const ImgInput = useCallback(() => {
    const compressorOption = {
      maxSizeMB: 2, // 허용하는 최대 사이즈 지정
      maxWidthOrHeight: 1920, // 허용하는 최대 width, height 값 지정
      ...options,
    };
    const compress = async (img: File) => {
      try {
        return await imageCompression(img, compressorOption);
      } catch {
        console.log('이미지 압축 실패');
      }
    };
    const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files[0]) {
        const compressed = await compress(files[0]);
        setCompressedImg(compressed);
      }
    };
    return <input type="file" accept="image/*" onChange={handleImage} />;
  }, [options]);
  return { ImgInput, compressedImg };
}
