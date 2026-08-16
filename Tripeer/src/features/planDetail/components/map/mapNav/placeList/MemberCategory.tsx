import { handleErrorImg } from '../../../../../../data/defaultImg';
import { ORDER_COLOR } from '../../../../../../data/orderColor';
import { OnlineInfo } from '../../../../../../store/room/RoomSliceState';
import { ORDER_COLOR_TYPE } from '../../../../../../types/UserTypes';
import style from '../../../../assets/map/mapNav/placeList.module.css';

interface ClickableUserInfo extends OnlineInfo {
  isClicked: boolean;
}

export default function MemberCategory({
  userInfo,
  setUserInfo,
}: {
  userInfo: ClickableUserInfo[];
  setUserInfo: (param: ClickableUserInfo[]) => void;
}) {
  const clickHandler = (id: number) => {
    const newUserInfo = userInfo.map((user) => {
      if (user.userId === id) return { ...user, isClicked: !user.isClicked };
      else return { ...user };
    });
    setUserInfo(newUserInfo);
  };
  return (
    <div className={style.memberBox}>
      {userInfo.map((mem) => {
        const num = mem.order as keyof ORDER_COLOR_TYPE;
        const borderStyle = mem.isClicked
          ? { border: `3px solid ${ORDER_COLOR[num]}` }
          : undefined;
        return (
          <img
            src={mem.profileImage}
            className={style.memberImg}
            key={mem.userId}
            style={borderStyle}
            onClick={() => clickHandler(mem.userId)}
            onError={handleErrorImg}
          ></img>
        );
      })}
    </div>
  );
}
