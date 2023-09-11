import { memo } from "react";

const MapEmbed: React.FC<{ x: any; y: any }> = ({ x, y }) => {
  return (
    <>
      <iframe
        width="300"
        height="170"
        className="w-[300px] h-[170px] sm:w-[600px] sm:h-[340px]"
        scrolling="no"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        src={`https://maps.google.com/maps?q=${x},${y}&hl=en&z=14&amp&output=embed`}
      ></iframe>
    </>
  );
};

export default memo(MapEmbed);
