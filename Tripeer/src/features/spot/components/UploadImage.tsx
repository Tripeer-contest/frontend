import { handleErrorImg } from '../../../data/defaultImg';
import styles from '../assets/UploadImage.module.css';

export default function UploadImage({
  setPostImg,
  previewImg,
  setPreviewImg,
}: {
  setPostImg: (param: File[]) => void;
  previewImg: string[];
  setPreviewImg: (param: string[]) => void;
}) {
  function uploadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const fileArr = Array.from(e.target.files as FileList);
    const limitedFiles = fileArr.slice(0, 3);
    setPostImg(limitedFiles);

    const previews: string[] = [];
    limitedFiles.forEach((file) => {
      const fileRead = new FileReader();
      fileRead.onload = function () {
        if (fileRead.result) {
          previews.push(fileRead.result as string);
          if (previews.length === limitedFiles.length) {
            setPreviewImg(previews);
          }
        }
      };
      fileRead.readAsDataURL(file);
    });
  }
  const deleteFile = () => {
    setPostImg([]);
    setPreviewImg([]);
  };
  return (
    <div>
      <div className={styles.inputHeader}>
        <input
          type="file"
          id="imgUpload"
          accept=".png, .jpeg, .jpg"
          multiple
          onChange={uploadFile}
          className={styles.inputBox}
          style={{
            display: 'none',
          }}
        />
        <label htmlFor="imgUpload" className={styles.uploadBtn}>
          이미지 추가
        </label>
        <div
          className={styles.deleteImgBtn}
          onClick={() => {
            deleteFile();
          }}
        >
          파일 삭제
        </div>
      </div>
      <div className={styles.imgBox}>
        {previewImg.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`preview ${index}`}
            className={styles.preview}
            onError={handleErrorImg}
          />
        ))}
      </div>
    </div>
  );
}
