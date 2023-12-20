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
  return true;
};

export default TorrentItem;
