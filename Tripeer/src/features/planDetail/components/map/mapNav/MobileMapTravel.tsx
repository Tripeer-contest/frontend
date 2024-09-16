import PlaceContent from './placeList/PlaceListContent';

export default function MobileMapTravel() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'scroll',
      }}
    >
      <PlaceContent />
    </div>
  );
}
