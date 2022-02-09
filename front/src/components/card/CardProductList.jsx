import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const CardProductList = (props) => {
  const product = props.data;
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img src={product.img} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle mr-2 d-inline">
              <Link to={product.link} className="text-decoration-none">
                {product.title}
              </Link>
            </h6>
            {product.isNew && (
              <span className="badge bg-success mr-2">New</span>
            )}
            {product.isHot && <span className="badge bg-danger mr-2">Hot</span>}

            <div>
              {
                Array.from({ length: 4 }, (_, key) => {
                  if (key <= 5)
                    return (
                      <IconStarFill className="text-warning mr-1" key={key} />
                    );
                  else
                    return (
                      <IconStarFill className="text-secondary mr-1" key={key} />
                    );
                })}
            </div>
            {product.content &&
              product.content.includes("|") === false && (
                <p className="small mt-2">{product.content}</p>
              )}
            {product.content && product.content.includes("|") && (
              <ul className="mt-2">
                {product.content.split("|").map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <div className="mb-2">
              <span className="font-weight-bold h5">${product.price}</span>
              {product.price * (1 + product.discount) > 0 && (
                <del className="small text-muted ml-2">
                  ${Math.round((product.price * (1 + product.discount) + Number.EPSILON) * 100) / 100}
                </del>
              )}
              {(product.discount > 0 || product.discountPrice > 0) && (
                <span className={`rounded p-1 bg-warning ml-2 small`}>
                  -
                  {product.discount > 0
                    ? Math.ceil(product.discount * 100) + "%"
                    : "$" + product.discountPrice}
                </span>
              )}
            </div>
            {product.isFreeShipping && (
              <p className="text-success small mb-2">
                <IconTruckFill /> Free shipping
              </p>
            )}

            <div className="btn-group btn-block" role="group">
              <button
                type="button"
                className="btn btn-sm btn-primary"
                title="Add to cart"
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                title="Add to wishlist"
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductList;
