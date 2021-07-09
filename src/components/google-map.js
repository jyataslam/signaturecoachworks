import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        loading="lazy"
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13242.898481846425!2d-116.9821149!3d33.9224864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe84b41634bcf72dd!2sSignature%20Coachworks!5e0!3m2!1sen!2sus!4v1605915699152!5m2!1sen!2sus"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
