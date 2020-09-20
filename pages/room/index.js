import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const RoomIndex = () => {
  const router = useRouter();

  const [id, setId] = useState();
  useEffect(() => {
    setId(v4());
  }, []);

  return <div>{router.push("/room/" + id)}</div>;
};

// RoomIndex.getInitialProps = ({ res }) => {
//   if (res) {
//     res.writeHead(301, {
//       Location: "/room/" + v4(),
//     });
//     res.end();
//   }
// };

export default RoomIndex;
