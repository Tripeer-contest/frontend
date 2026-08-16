import whitePerson from '../assets/trip/whitePerson.svg';
import whiteCar from '../assets/trip/whiteCar.svg';
import whiteBus from '../assets/trip/whiteBus.svg';
import whiteSubway from '../assets/trip/whiteSubway.svg';
import whiteTrain from '../assets/trip/whiteTrain.svg';
import whiteAirplane from '../assets/trip/whiteAirplane.svg';
import whiteFerry from '../assets/trip/whiteFerry.svg';
import smallPerson from '../assets/trip/smallPerson.svg';
import smallBus from '../assets/trip/smallBus.svg';
import smallExpressBus from '../assets/trip/smallExpressBus.svg';
import smallFerry from '../assets/trip/smallFerry.svg';
import smallAirplane from '../assets/trip/smallAirplane.svg';
import smallSubway from '../assets/trip/smallSubway.svg';
import smallTrain from '../assets/trip/smallTrain.svg';
import smallCar from '../assets/trip/smallCar.svg';

const ROUTE_STYLE: {
  [param: string]: {
    Icon: string;
    routeColor: string;
    circleColor: string;
    fontColor: string;
    smallIcon: string;
    info: string;
  };
} = {
  BUS: {
    Icon: whiteBus,
    routeColor: '#F96976',
    circleColor: '#E33E4D',
    fontColor: '#fff',
    smallIcon: smallBus,
    info: '버스',
  },
  WALK: {
    Icon: whitePerson,
    routeColor: '#E2E7EE',
    circleColor: '#CBCBCB',
    fontColor: '#858585',
    smallIcon: smallPerson,
    info: '도보',
  },
  CAR: {
    Icon: whiteCar,
    routeColor: '#4FBDB7',
    circleColor: '#2D8F8A',
    fontColor: '#fff',
    smallIcon: smallCar,
    info: '차',
  },
  SUBWAY: {
    Icon: whiteSubway,
    routeColor: '#FF8E00',
    circleColor: '#D25B06',
    fontColor: '#fff',
    smallIcon: smallSubway,
    info: '지하철',
  },
  EXPRESSBUS: {
    Icon: whiteBus,
    routeColor: '#9F63FF',
    circleColor: '#6C06D2',
    fontColor: '#fff',
    smallIcon: smallExpressBus,
    info: '시외버스',
  },
  TRAIN: {
    Icon: whiteTrain,
    routeColor: '#3E9F48',
    circleColor: '#246C45',
    fontColor: '#fff',
    smallIcon: smallTrain,
    info: '기차',
  },
  AIRPLANE: {
    Icon: whiteAirplane,
    routeColor: '#FFD552',
    circleColor: '#FFC100',
    fontColor: '#3D3C3C',
    smallIcon: smallAirplane,
    info: '비행기',
  },
  FERRY: {
    Icon: whiteFerry,
    routeColor: '#4E8DCC',
    circleColor: '#2D8F8A',
    fontColor: '#fff',
    smallIcon: smallFerry,
    info: '배',
  },
};

export default ROUTE_STYLE;
