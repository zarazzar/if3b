import axios from "axios";
import React, { Component, Fragment } from "react";
import StorePost from "../component/StorePost";

class Store extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    //pake axios
    axios.get("https://if3b-zarazzar.vercel.app/store").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.post.map((post) => {
          return <StorePost key={post._id} imgThumb={post.urlFoto} produk={post.namaBarang} harga={post.harga} deskripsi={post.deskripsi} noHp={post.nomorHP} />;
        })}
      </Fragment>
    );
  }
}

export default Store;
