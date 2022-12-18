import axios from "axios";
import React, { Component, Fragment } from "react";
import GetKonten from "../component/GetKonten";

class Konten extends Component {
  state = {
    get: [],
    formKonten: {},
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
        <div className="form-add-post">
          <form>
            <div class="mb-3">
              <label htmlFor="NamaPeternakan" class="form-label">
                Nama Peternakan
              </label>
              <input type="text" className="form-control" name="nama" id="exampleInputEmail1" />
            </div>
          </form>
        </div>
        {this.state.get.map((get) => {
          return <GetKonten key={get._id} nama={get.nama} postTime={get.createdAt} judul={get.judul} konten={get.konten} />;
        })}
      </Fragment>
    );
  }
}

export default KontenPost;
