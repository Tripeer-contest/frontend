import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import useMyInfoQuery, { useDuplicateQuery } from './useMyInfoQuery';
import { ProfileFormType } from '../../../types/UserTypes';

export default function useNickValidate(
  form: ProfileFormType,
  setForm: Dispatch<SetStateAction<ProfileFormType>>,
) {
  const { data } = useMyInfoQuery();
  const [nick, setNick] = useState(data.nickname);
  const [warn, setWarn] = useState(false);
  const [getRequest, setGetRequest] = useState(false);
  const duplicate = useDuplicateQuery(nick, getRequest, setGetRequest);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const typing = e.target.value;
    const regExp = /[^a-zA-Z0-9가-힣]/;
    const newForm = { ...form };
    if (regExp.test(typing) || typing.length < 2 || typing.length > 10) {
      setWarn(true);
    } else {
      setWarn(false);
    }
    setForm((prev) => ({ ...prev, nickname: e.target.value }));
    setNick(e.target.value);
  };

  const duplicateCheck = () => {
    if (nick === data.nickname) return;
    setGetRequest(true);
  };

  useEffect(() => {
    if (
      (!warn && duplicate.isSuccess && !duplicate.data) ||
      data.nickname === nick
    ) {
      setForm((prev) => ({ ...prev, nickWarn: false }));
    } else {
      setForm((prev) => ({ ...prev, nickWarn: true }));
    }
  }, [duplicate.isSuccess, warn, setForm, duplicate.data, data, nick]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, nickname: data.nickname }));
  }, [data, setForm]);

  return { duplicate, warn, nick, changeHandler, duplicateCheck };
}
