import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import { useEffect } from 'react';

const MarkerImg: { [param: string]: string } = {
  맛집: 'https://tripeer207.s3.ap-northeast-2.amazonaws.com/front/static/res_marker.svg',
  명소: 'https://tripeer207.s3.ap-northeast-2.amazonaws.com/front/static/mecca_marker.svg',
  숙박: 'https://tripeer207.s3.ap-northeast-2.amazonaws.com/front/static/stay_marker.svg',
};

export default function useShowMarkerInBound(spot: {
  latitude: number;
  longitude: number;
  spotInfoId: number;
  contentType: string;
}) {
  const [makeMarker, removeMarker, setSpot] = zustandStore(
    useShallow((state) => [
      state.room_makeMarkerBySpot,
      state.room_removeMarkerBySpot,
      state.room_setSpotInfo,
    ]),
  );

  useEffect(() => {
    if (spot) {
      makeMarker &&
        makeMarker(
          {
            ...spot,
            clickEvent: () => {
              setSpot &&
                setSpot({
                  latitude: spot.latitude,
                  longitude: spot.longitude,
                  spotInfoId: spot.spotInfoId,
                });
            },
          },
          { imgSrc: MarkerImg[spot.contentType] },
        );
    }
    return () => {
      removeMarker && removeMarker(spot.spotInfoId);
    };
  }, [spot, makeMarker, removeMarker, setSpot]);
}
