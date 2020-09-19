import { v4 } from "uuid";

const RoomIndex = () => {
  return <div></div>;
};

RoomIndex.getInitialProps = ({ res }) => {
  res.redirect("/room/" + v4());
};

export default RoomIndex;
