import styles from '../assets/config/style.module.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ProfileFormType } from '../../../types/UserTypes';
import useMyInfoQuery from './useMyInfoQuery';

export default function useStyleValidate(
  setForm: Dispatch<SetStateAction<ProfileFormType>>,
) {
  const { data } = useMyInfoQuery();
  const [selectedStyle, setSelectedStyle] = useState<
    { name: string; num: number }[]
  >([]);
  const [warn, setWarn] = useState(false);

  const clickHandler = (styleName: string, num: number) => {
    if (selectedStyle.find((style) => style.name === styleName)) {
      setSelectedStyle(
        selectedStyle.filter((style) => style.name !== styleName),
      );
    } else {
      if (selectedStyle.length === 3) return;
      setSelectedStyle([...selectedStyle, { name: styleName, num: num }]);
    }
  };

  const getCategoryStyle = (styleName: string) => {
    return selectedStyle.find((style) => style.name === styleName)
      ? styles.selectedCategory
      : styles.category;
  };

  useEffect(() => {
    const newSelected = [];
    if (data.style1)
      newSelected.push({ name: data.style1, num: data.style1Num });
    if (data.style2)
      newSelected.push({ name: data.style2, num: data.style2Num });
    if (data.style3)
      newSelected.push({ name: data.style3, num: data.style3Num });
    setSelectedStyle(newSelected);
  }, [data]);

  useEffect(() => {
    if (selectedStyle.length) {
      setForm((prev) => ({
        ...prev,
        style: selectedStyle.map((style) => style.num),
        styleWarn: false,
      }));
      setWarn(false);
    } else {
      setForm((prev) => ({
        ...prev,
        style: selectedStyle.map((style) => style.num),
        styleWarn: true,
      }));
      setWarn(true);
    }
  }, [selectedStyle, setForm]);
  return { getCategoryStyle, clickHandler, warn };
}
