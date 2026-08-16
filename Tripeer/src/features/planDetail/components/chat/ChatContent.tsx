import { Fragment, useMemo } from 'react';

import useGetUserById from '../../hooks/useGetUserById';
import getTokenInfo from '../../../../utils/jwtDecode';
import MyChat from './MyChat';
import OtherChat from './OtherChat';
import useChatInfo from '../../hooks/useChatInfo';
import useSetChatScroll from '../../hooks/useSetChatScroll';

export default function ChatContent() {
  const getUser = useGetUserById();
  const { chatInfo, renderCnt } = useChatInfo();
  useSetChatScroll(renderCnt);
  const myData = useMemo(() => {
    return getTokenInfo();
  }, []);

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
