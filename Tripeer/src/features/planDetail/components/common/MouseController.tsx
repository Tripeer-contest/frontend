import {
  ChangeEvent,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from '../../assets/common/mouse.module.css';
import {
  isMobileCorrectly,
  mobileSizeCheck,
} from '../../../../utils/checkMobile';
import zustandStore from '../../../../store/store';
import getTokenInfo from '../../../../utils/jwtDecode';
import { useShallow } from 'zustand/react/shallow';
import { ORDER_COLOR } from '../../../../data/orderColor';

interface MouseInfo {
  id: number;
  x: number;
  y: number;
  page: number;
  order: number;
  isDesktop: boolean;
  nickname: string;
}

export default function MouseController({
  page,
  children,
}: {
  page: number;
  children: ReactNode;
}) {
  const [isDesktop, setIsDesktop] = useState(
    !isMobileCorrectly() && !mobileSizeCheck(),
  );
  const [ws, userInfo] = zustandStore(
    useShallow((state) => [state.y_ws, state.room_userInfo]),
  );
  const [showMouse, setShowMouse] = useState<MouseInfo[]>([]);
  const [myMouse, setMyMouse] = useState<number[]>([]);
  const [myMouseColor, setMyMouseColor] = useState<number>(1);
  const [mode, setMode] = useState(false);
  const [showInfo, setShowInfo] = useState('');
  const timer = useRef<number>(0);
  const inputBox = useRef<null | HTMLTextAreaElement>(null);

  const updateMyMouse = useCallback(
    (x: number, y: number) => {
      const info = getTokenInfo();
      const myInfo = userInfo.find((user) => user.userId === info.userId);
      myInfo && setMyMouseColor(myInfo.order);
      myInfo &&
        ws &&
        isDesktop &&
        ws.awareness.setLocalStateField('mouse', {
          id: myInfo.userId,
          x: x,
          y: y,
          page: page,
          order: myInfo.order,
          isDesktop: isDesktop,
          nickname: showInfo ? showInfo : myInfo.nickname,
        });
    },
    [ws, page, userInfo, isDesktop, showInfo],
  );

  const chat = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setShowInfo(e.target.value);
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = 0;
    }
    timer.current = window.setTimeout(() => {
      setShowInfo('');
      setMode(false);
    }, 3000);
  };

  const updateOtherMouse = useCallback(() => {
    if (ws && isDesktop) {
      const info = getTokenInfo();
      const states = ws.awareness.getStates().values();
      let mouseMap: Map<number, MouseInfo> | null = new Map();
      for (const state of states) {
        if (state.mouse && state.mouse.id !== info.userId) {
          const newMouse = state.mouse as MouseInfo;
          mouseMap.set(newMouse.id, newMouse);
        }
      }
      setShowMouse(Array.from(mouseMap.values()));
      mouseMap = null;
    }
  }, [ws, isDesktop]);

  useEffect(() => {
    const mobileCheck = () => {
      if (!mobileSizeCheck()) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    mobileCheck();
    window.addEventListener('resize', mobileCheck);
    return () => {
      window.removeEventListener('resize', mobileCheck);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      ws && ws.awareness.on('change', updateOtherMouse);
    } else {
      ws && ws.awareness.off('change', updateOtherMouse);
    }
  }, [isDesktop, ws, updateOtherMouse]);

  useEffect(() => {
    const changeMode = (e: KeyboardEvent) => {
      if (e.key === '`' && isDesktop) {
        e.preventDefault();
        if (mode) {
          setMode(false);
        } else {
          setMode(true);
        }
      }
    };
    window.addEventListener('keydown', changeMode);
    return () => {
      window.removeEventListener('keydown', changeMode);
    };
  }, [mode, isDesktop]);

  useEffect(() => {
    if (mode && inputBox.current) inputBox.current.focus();
    if (!mode) setShowInfo('');
  }, [mode]);

  useEffect(() => {
    if (showInfo) {
      updateMyMouse(myMouse[0], myMouse[1]);
    }
  }, [showInfo, updateMyMouse, myMouse]);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div
      className={styles.container}
      onMouseMove={(e) => {
        updateMyMouse(e.clientX, e.clientY);
        setMyMouse([e.clientX, e.clientY]);
      }}
    >
      {isDesktop && (
        <>
          {mode ? (
            <textarea
              style={{
                transform: `translate(${myMouse[0] + 10}px, ${myMouse[1] + 20}px)`,
                backgroundColor: `${ORDER_COLOR[myMouseColor]}`,
              }}
              className={`${styles.userInfo} ${styles.userInput}`}
              placeholder="글을 입력하세요."
              ref={inputBox}
              rows={3}
              maxLength={35}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              onChange={(e) => {
                chat(e);
              }}
            />
          ) : (
            <span
              style={{
                transform: `translate(${myMouse[0] + 10}px, ${myMouse[1] + 20}px)`,
                backgroundColor: `${ORDER_COLOR[myMouseColor]}`,
              }}
              className={styles.userInfo}
            >
              Me
            </span>
          )}
        </>
      )}

      {isDesktop &&
        showMouse.map((mouse) => (
          <>
            {page === mouse.page && mouse.isDesktop && (
              <Fragment key={`${mouse.id}`}>
                <img
                  src={`https://tripeer207.s3.ap-northeast-2.amazonaws.com/front/static/mouse${mouse.order}.svg`}
                  className={styles.mousePointer}
                  style={{
                    transform: `translate(${mouse.x}px, ${mouse.y}px)`,
                  }}
                />
                <span
                  className={styles.userInfo}
                  style={{
                    transform: `translate(${mouse.x + 25}px, ${mouse.y + 15}px)`,
                    backgroundColor: `${ORDER_COLOR[mouse.order]}`,
                  }}
                >
                  {mouse.nickname}
                </span>
              </Fragment>
            )}
          </>
        ))}
      {children}
    </div>
  );
}
