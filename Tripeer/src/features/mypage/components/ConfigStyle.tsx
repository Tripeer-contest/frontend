import { useEffect, useState } from 'react';
import styleCategory from '../../../data/TripStyle';
import styles from '../assets/config/style.module.css';
import useMyInfoQuery from '../hooks/useMyInfoQuery';

export default function ConfigStyle() {
  const { data } = useMyInfoQuery();
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);

  const clickHandler = (styleName: string) => {
    if (selectedStyle.find((style) => style === styleName)) {
      setSelectedStyle(selectedStyle.filter((style) => style !== styleName));
    } else {
      if (selectedStyle.length === 3) return;
      setSelectedStyle([...selectedStyle, styleName]);
    }
  };

  const getCategoryStyle = (styleName: string) => {
    return selectedStyle.find((style) => style === styleName)
      ? styles.selectedCategory
      : styles.category;
  };

  useEffect(() => {
    const newSelected = [];
    if (data.style1) newSelected.push(data.style1);
    if (data.style2) newSelected.push(data.style2);
    if (data.style3) newSelected.push(data.style3);
    setSelectedStyle(newSelected);
  }, [data]);

  return (
    <div className={styles.gridBox}>
      <div className={styles.subTitleBox}>
        <p>여행스타일</p>
        <p>(최대 3개)</p>
      </div>
      <div className={styles.styleFlex}>
        {styleCategory.map((category) => (
          <div
            key={category.id}
            onClick={() => clickHandler(category.title)}
            className={getCategoryStyle(category.title)}
          >
            <img src={category.img} alt="category-style" />
            <span>{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
