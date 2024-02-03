const IframeEmbed = ({ src }: { src: string }) => {
  return (
    <>
      <iframe
        style={{ borderRadius: "12px" }}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        src={src}
      />
    </>
  );
};

export default IframeEmbed;
