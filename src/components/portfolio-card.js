import React from "react";
import { Link } from "gatsby";

const PortfolioCard = ({ data }) => {
  const {
    slug,
    title,
    featuredImage: {
      childImageSharp: {
        fluid: { src },
      },
    },
  } = data;

  return (
    <Link to={`/sales/${slug}`}>
      <div className={`singlefolio`}>
        <img src={src} alt={title} />
        <div className="folioHover">
          {/* <p className="cate">${price}</p> */}
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
