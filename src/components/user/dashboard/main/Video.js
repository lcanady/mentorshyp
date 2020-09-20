/** @jsx jsx */
import { Context, jsx } from "theme-ui";
import { Grid } from "@theme-ui/components";
import { useContext } from "react";

export default function Video() {
  const { localRef, remoteRef } = useContext(Context);
  return (
    <>
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
              height: "100%",
              marginLeft: "8px",
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
    </>
  );
}
