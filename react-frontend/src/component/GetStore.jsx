import React from "react";
import "./GetStore.css";

const GetStore = (props) => {
  return (
    <div className="card mb-3 container-fluid">
      <div className="row g-0">
        <div className="col-md-4">
          <img className="img-fluid rounded-start" src={props.imgThumb} alt="gambar produk" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="produk card-title">{props.produk}</h5>
            <p className="card-text">
              <small className="harga text-primary">Harga {props.harga}</small>
            </p>
            <p className="deskripsi card-text">{props.deskripsi}</p>
            <button type="button" className="noHp btn btn-primary">
              {props.noHp}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStore;
