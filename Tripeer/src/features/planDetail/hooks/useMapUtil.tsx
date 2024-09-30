import { useEffect, useRef } from 'react';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function useMapUtil(map: naver.maps.Map | undefined) {
  const markersRef = useRef<any[]>([]);
  const markerGroupRef = useRef<any[]>([]);
  const [
    setBounds,
    setMoveMap,
    setMarkerSpot,
    setMarkerGroup,
    setRemoveSpot,
    setRemoveGroup,
    setRemoveAll,
  ] = zustandStore(
    useShallow((state) => [
      state.room_setBound,
      state.room_setMoveMap,
      state.room_setMakeMarkerBySpot,
      state.room_setMakeMarkerByGroup,
      state.room_setRemoveMarkerBySpot,
      state.room_setRemoveMarkerByGroup,
      state.room_setRemoveMarkerAll,
    ]),
  );

  useEffect(() => {
    if (map) {
      const getBound = () => {
        const bounds = map.getBounds();
        const minLat = bounds.minY();
        const minLon = bounds.minX();
        const maxLat = bounds.maxY();
        const maxLon = bounds.maxX();
        setBounds(minLat, minLon, maxLat, maxLon);
      };
      const moveMap = (latitude: number, longitude: number) => {
        const mapLatLng = new naver.maps.LatLng(latitude, longitude);
        map.panTo(mapLatLng);
      };
      const makeMarkerBySpot = (
        spot: {
          spotInfoId: number;
          latitude: number;
          longitude: number;
          clickEvent?: (...param: unknown[]) => void;
        },
        options?: {
          imgSrc?: string;
        },
      ) => {
        const { latitude, longitude, spotInfoId } = spot;
        const imgSrc = options?.imgSrc
          ? options.imgSrc
          : 'https://tripeer207.s3.ap-northeast-2.amazonaws.com/front/static/pin.png';
        const clickEvent = spot?.clickEvent ? spot.clickEvent : () => {};
        const markerPosition = new naver.maps.LatLng(latitude, longitude);
        const marker = new naver.maps.Marker({
          position: markerPosition,
          icon: {
            url: imgSrc,
            scaledSize: { width: 30, height: 40 },
          },
        });
        naver.maps.Event.addListener(marker, 'click', clickEvent);
        markersRef.current.push({ marker, id: spotInfoId });
        marker.setMap(map);
      };
      const makeMarkerByGroup = (
        groupId: number,
        spots: {
          latitude: number;
          longitude: number;
          clickEvent?: (...param: unknown[]) => void;
        }[],
        options?: {
          imgSrc?: string;
        },
      ) => {
        const imgSrc = options?.imgSrc
          ? options.imgSrc
          : 'https://tripeer207.s3.ap-northeast-2.amazonaws.com/front/static/pin.png';
        const newMarkers: any[] = [];
        spots.forEach((spot) => {
          const markerPosition = new naver.maps.LatLng(
            spot.latitude,
            spot.longitude,
          );
          const marker = new naver.maps.Marker({
            position: markerPosition,
            icon: {
              url: imgSrc,
              scaledSize: { width: 30, height: 40 },
            },
          });
          const clickEvent = spot?.clickEvent ? spot.clickEvent : () => {};
          naver.maps.Event.addListener(marker, 'click', clickEvent);
          marker.setMap(map);
          newMarkers.push(marker);
        });

        markerGroupRef.current.push({
          id: groupId,
          markers: newMarkers,
        });
      };
      const removeMarkerBySpot = (id: number) => {
        const newMarkers = markersRef.current.filter((item) => {
          if (item.id === id) item.marker.setMap(null);
          else return item;
        });
        markersRef.current = newMarkers;
      };
      const removeMarkerByGroup = (id: number) => {
        const newMarkers = markerGroupRef.current.filter((item) => {
          if (item.id === id) {
            item.markers.forEach((marker: any) => marker.setMap(null));
          } else return item;
        });
        markerGroupRef.current = newMarkers;
      };
      const removeMarkerAll = () => {
        markersRef.current.forEach((item) => {
          item.marker.setMap(null);
        });
        markersRef.current = [];
        markerGroupRef.current.forEach((item) =>
          item.markers.forEach((marker: any) => marker.setMap(null)),
        );
        markerGroupRef.current = [];
      };
      setMarkerSpot(makeMarkerBySpot);
      setMarkerGroup(makeMarkerByGroup);
      setRemoveSpot(removeMarkerBySpot);
      setRemoveGroup(removeMarkerByGroup);
      setRemoveAll(removeMarkerAll);
      setMoveMap(moveMap);
      getBound();
      naver.maps.Event.addListener(map, 'bounds_changed', getBound);
    }
  }, [
    map,
    setBounds,
    setMoveMap,
    setMarkerSpot,
    setMarkerGroup,
    setRemoveSpot,
    setRemoveGroup,
    setRemoveAll,
  ]);
}
