/** @jsx jsx */
import { Grid, jsx } from "theme-ui";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import Nav from "../../src/components/shared/Nav";
import Channels from "../../src/components/user/dashboard/sidebar/Controls";
import Controls from "../../src/components/user/dashboard/sidebar/Controls";
import Video from "../../src/components/user/dashboard/main/Video";

let Room;
export default Room = ({ query: { roomId } }) => {
  const localRef = useRef(null);
  const remoteRef = useRef(null);
  const router = useRouter();
  const [myPeer, setMyPeer] = useState();
  const [peers, setPeers] = useState({});
  const [stream, setStream] = useState();
  const [socket, setSocket] = useState();

  // Helper functions
  const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => video.play());
  };

  // Set myPeer as needed.
  useEffect(() => {
    const newPeer = async () => {
      // Install PeerJS
      const Peer = (await import("peerjs")).default;
      setMyPeer(new Peer(v4()));
      const thestream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(thestream);
      addVideoStream(localRef.current, thestream);
    };
    newPeer();
  }, [router]);

  useEffect(() => {
    if (myPeer && stream) {
      const startSocket = async () => {
        // install Socket.io
        const socket = (await import("socket.io-client")).default(
          "http://localhost:4201/"
        );

        const connectToUser = (userId, stream) => {
          const call = myPeer.call(userId, stream);
          console.log("connecting!");
          call.on("stream", () => addVideoStream(remoteRef.current, stream));
          call.on("close", () => remoteRef.current.removeAttribute("src"));
          setPeers((v) => (v[userId] = call));
        };

        socket.on("user-connected", (userId) => {
          console.log("connected!!");
          connectToUser(userId, stream);
        });
        socket.on("user-disconnected", (userId) => {
          console.log("disconnected!");
          if (peers[userId]) peers[userId].close();
          remoteRef.current.removeAttribute("src");
        });

        myPeer.on("call", (call) => {
          call.answer(stream);
          call.on("stream", (userVideoStream) => {
            addVideoStream(remoteRef.current, userVideoStream);
          });
        });

        myPeer.on("open", (id) => {
          console.log("RoomId", roomId);
          socket.emit("join-room", roomId, id);
        });
      };
      startSocket();
    }
  }, [myPeer, stream]);

  // console.log = console.warn = console.error = () => {};
  // console.error("hide warnings hack, bitches");
  return (
    <div>
      <div sx={{ variant: "layout.container" }}>
        <header sx={{ variant: "layout.nav" }}>
          <Nav />
        </header>
        <aside sx={{ variant: "layout.sidebar" }}>
          <div sx={{ variant: "components.sidebar" }}>
            <Channels />
            <Controls />
          </div>
        </aside>
        <main sx={{ variant: "layout.video" }}>
          <Grid
            columns={[2, "3fr 1fr"]}
            sx={{
              bg: "red",
            }}
          >
            <main sx={{ variant: "components.main.video" }}>
              <video
                ref={remoteRef}
                muted
                style={{
                  background: "brown",
                  width: "100%",
                  height: "700px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </main>
            <video
              muted
              ref={localRef}
              style={{
                marginTop: "10px",
                background: "brown",
                width: "95%",
                marginLeft: "8px",
              }}
            />
          </Grid>
        </main>
      </div>
    </div>
  );
};

Room.getInitialProps = ({ query }) => {
  return { query };
};
