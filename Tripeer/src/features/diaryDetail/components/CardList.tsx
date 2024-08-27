import { useParams } from 'react-router-dom';
import DetailCard from './DetailCard';
import { useGetDayListQuery } from '../hooks/useGetDiary';

export default function CardList() {
  const params = useParams();
  const data = useGetDayListQuery(params.id);
  console.log(data);
  return <DetailCard></DetailCard>;
}
