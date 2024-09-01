import { Fragment, useEffect, useMemo } from 'react';

import useGetUserById from '../../hooks/useGetUserById';
import getTokenInfo from '../../../../utils/jwtDecode';
import MyChat from './MyChat';
import OtherChat from './OtherChat';
import useChatInfo from '../../hooks/useChatInfo';
import zustandStore from '../../../../store/store';

export default function ChatContent() {
  const scrollToBottom = zustandStore((state) => state.room_chatScrollToBottom);
  const getUser = useGetUserById();
  const { chatInfo, renderCnt } = useChatInfo();

  const myData = useMemo(() => {
    return getTokenInfo();
  }, []);

  useEffect(() => {
    if (scrollToBottom && renderCnt === 1) scrollToBottom();
  }, [scrollToBottom, renderCnt, chatInfo]);

  return (
    <>
      {chatInfo.map((chat, idx) => {
        const user = getUser(chat.userId);

        return (
          <Fragment key={idx}>
            {myData.userId === chat.userId ? (
              <MyChat chat={chat} />
            ) : (
              <OtherChat chat={chat} user={user} />
            )}
          </Fragment>
        );
      })}
    </>
  );
}
