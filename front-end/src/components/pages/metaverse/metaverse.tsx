import { useEffect, useRef, useState } from "react";
import { Container, Box, Notification, rem } from "@mantine/core";
import { DonateButton } from "../../buttons/donate-button";
import { streamResponse } from "../../../service-provider/streaming/stream-response";
import { useLang } from "../../../hooks/lang";
import translations from "../../../languages/Translations";
import { Guide } from "./guide";
import { IconMaximize, IconMinimize, IconX } from "@tabler/icons-react";
// import { AccessButton } from "../../buttons/access-hub-button";


export const Metaverse = () => {
  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState("");
  const contentContainertRef = useRef<HTMLDivElement>(null);
  const iframeContainertRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeContainerWidth, setIframeContainerWidth] = useState<number>(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [error, setError] = useState(false);


  const lang = useLang();
  useEffect(() => {
    const funct = async () => {
      try {
        const resp = await streamResponse();
        setLink(resp.data.connection_link);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    funct();
  }, []);

  const onWindowResize = () => {
    const newWidth = contentContainertRef.current?.getBoundingClientRect().width || 0;
    console.log(newWidth);
    
    setIframeContainerWidth(newWidth);
  }

  useEffect(() => {
    // Hiding guides
    setTimeout(() => {
      setShowGuide(false)
    }, 3000);
    const width = contentContainertRef.current?.getBoundingClientRect().width || 0;
    // Update the state with the width
    setIframeContainerWidth(width);
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    
    window.addEventListener('resize', onWindowResize);
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Enter fullscreen mode
      if (iframeContainertRef.current?.requestFullscreen) {
        iframeContainertRef.current?.requestFullscreen();
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#4D24A8",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Container
        m={0}
        p={0}
        mt={{ md: "165px" }}
        style={{ zIndex: "1" }}
        top={{ md: "5%", base: "83px" }}
        pos="absolute"
        w="130px"
      >
        <DonateButton title={translations["DONATE"][lang]} />
      </Container>
      <Box
        mx={{ md: "130px" }}
        my={{ md: "65px" }}
        style={{ display: "flex", flexDirection: "column", position: "relative", maxWidth: '150vh', height: iframeContainerWidth / 1.78  }}
        ref={contentContainertRef}
      >
        {error && <Notification onClose={() => setError(false)} icon={<IconX style={{ width: rem(20), height: rem(20) }} />} color="red" title="Bummer!">
        Something went wrong while loaing stream
      </Notification>}
        {loading && <>Loading...</>}
        {!loading && link && (
          <>
            {showGuide && <Guide /> }
            <Box style={{ width: "100%", height: '100%'}} ref={iframeContainertRef}>
              <iframe ref={iframeRef} src={link} style={{ width: "100%", height: '100%', position: "absolute", top: 0, left: 0 }} />
              <Box pos="absolute" bottom={10} right={10} style={{cursor: "pointer"}}>
                {isFullScreen?<IconMinimize onClick={toggleFullScreen} />:<IconMaximize onClick={toggleFullScreen} />}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};
