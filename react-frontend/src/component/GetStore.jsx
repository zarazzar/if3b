import React from "react";

const GetStore = (props) => {
  return (
    <div className="storeAPI container-fluid">
      <div className="card mb-3">
        <img className="imgThumb card-img-top" src={props.imgThumb} alt="" />
        <div className="card-body">
          <h5 className="produk card-title">{props.produk}</h5>
          <p className="card-text">
            <small className="harga text-primary">{props.harga}</small>
          </p>
          <p className="deskripsi card-text">{props.deskripsi}</p>
          <button type="button" className="noHp btn btn-primary">
            {props.noHp}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStore;
