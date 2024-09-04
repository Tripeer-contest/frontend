import { useParams } from 'react-router-dom';

export default function useParamsId(): number {
  const params = useParams();
  const id = params.id ? +params.id : NaN;
  return id;
}
