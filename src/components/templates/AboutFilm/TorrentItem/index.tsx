import * as Styled from "./index.styled";
import {
  MdDesktopWindows,
  MdKeyboardArrowDown,
  MdOutlineAspectRatio,
} from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useTheme } from "styled-components";

type TorrentItemProps = {
  url: string;
  quality: string;
  type: string;
  video_codec: string;
  seeds: number;
  peers: number;
  size: string;
  date_uploaded: string;
};
const TorrentItem: React.FC<TorrentItemProps> = (props) => {
  const theme = useTheme();
  console.log(theme.accentColor2);
  return (
    <Styled.Container href={props.url}>
      <Styled.FileProperties>
        <Styled.Attribute>
          <Styled.InfoIcon>
            <MdOutlineAspectRatio />
          </Styled.InfoIcon>
          {props.quality}
        </Styled.Attribute>
        <Styled.Attribute>
          <Styled.InfoIcon>
            <MdOutlineVideoSettings />
          </Styled.InfoIcon>
          {props.video_codec}
        </Styled.Attribute>
        <Styled.Attribute>
          <Styled.InfoIcon>
            <MdSettingsApplications />
          </Styled.InfoIcon>
          {props.type}
        </Styled.Attribute>
      </Styled.FileProperties>
      <Styled.TorrentProperties>
        <Styled.Attribute>
          <Styled.InfoIcon>
            <MdDownload />
          </Styled.InfoIcon>
          {props.size}
        </Styled.Attribute>
        <Styled.Attribute $textColor={theme.peersColor}>
          <Styled.InfoIcon $iconColor={theme.peersColor}>
            <MdKeyboardArrowUp />
          </Styled.InfoIcon>
          {props.seeds}
        </Styled.Attribute>
        <Styled.Attribute $textColor={theme.leechesColor}>
          <Styled.InfoIcon $iconColor={theme.leechesColor}>
            <MdKeyboardArrowDown />
          </Styled.InfoIcon>
          {props.peers}{" "}
        </Styled.Attribute>
      </Styled.TorrentProperties>
    </Styled.Container>
  );
};

export default TorrentItem;
