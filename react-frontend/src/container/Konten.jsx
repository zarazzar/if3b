import axios from "axios";
import React, { Component, Fragment } from "react";
import GetKonten from "../component/GetKonten";

class Konten extends Component {
  state = {
    get: [],
  };

  componentDidMount() {
    //pake axios
    axios.get("https://if3b-zarazzar.vercel.app/ternak").then((result) => {
      this.setState({
        get: result.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.get.map((get) => {
          return <GetKonten key={get._id} imgThumb={get.urlFoto} produk={get.namaBarang} harga={get.harga} deskripsi={get.deskripsi} noHp={get.nomorHP} />;
        })}
      </Fragment>
    );
  }
}

export default Konten;
