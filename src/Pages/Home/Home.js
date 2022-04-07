import React, { useState, useEffect } from "react";
import { NavBarDef } from "../../Assets/Components/NavBar/NavBarDef";
import "./home.css";
import mobil from "../../Assets/Img/img_car.png";
import { FooterDef } from "../../Assets/Components/Footer/FooterDef";
import DatePicker from "react-datepicker";
import { CardDef } from "../../Assets/Components/Card/CardDef";
import { CardDesc } from "../../Assets/Components/CardDesc/CardDesc";

export const Home = () => {
  const [tanggal, setTanggal] = useState(new Date());
  const [jam, setJam] = useState(new Date());
  const [dataMobil, setDataMobil] = useState([]);
  const [page, setPage] = useState("1");
  const [idCar, setIdCar] = useState(null);
  const [sopir, setSopir] = useState(null);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://rent-cars-api.herokuapp.com/admin/car",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setDataMobil(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //cek pakai sopir
  const cekSopir = (e) => {
    if (e.target.value === "Dengan Sopir") {
      setSopir(true);
    } else if (e.target.value === "Tanpa Sopir") {
      setSopir(false);
    }
  };

  //handle data dan summon card
  const handleMobil = (data, sopir) => {
    let dataValue = data;
    let dataSupir = sopir;
    return dataValue
      .filter((value) => value.status === dataSupir)
      .map((value, index) => {
        return (
          <CardDef
            image={value.image}
            carName={value.name}
            price={value.price}
            nextPage={(e) => {
              changePage(e, "3");
              setIdCar(value.id);
            }}
          />
        );
      });
  };

  //pindah page di taruh button
  const changePage = (e, page) => {
    e.preventDefault();
    setPage(page);
  };

  return (
    <div>
      <NavBarDef />
      {page === "1" ? (
        <div>
          <div id="parrent-hero">
            <div className="container-xl">
              <div className="hero">
                <div className="row">
                  <div className="col col-lg-6 col-sm-12 col-12 hero-content1">
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p>
                      Selamat datang di Binar Car Rental. Kami menyediakan mobil
                      kualitas terbaik dengan harga terjangkau. Selalu siap
                      melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                  </div>
                  <div className="col col-lg-6 col-sm-12 col-12 hero-content2">
                    <img src={mobil} className="img-fluid img-hero" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="section-02">
            <div className="container-xl">
              <form
                id="form-cari"
                onSubmit={(e) => {
                  changePage(e, "2");
                }}
              >
                <div className="comp-input">
                  <label>Tipe Driver</label>
                  <select
                    required
                    className="box"
                    onChange={(e) => {
                      cekSopir(e);
                    }}
                  >
                    <option disabled selected hidden>
                      Pilih Tipe Driver
                    </option>
                    <option key={1} value={"Dengan Sopir"}>
                      Dengan Sopir
                    </option>
                    <option key={2} value={"Tanpa Sopir"}>
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="comp-input">
                  <label>Tanggal</label>

                  <DatePicker
                    className="box"
                    selected={tanggal}
                    onChange={(date) => setTanggal(date)}
                  />
                </div>
                <div className="comp-input">
                  <label>Waktu Jemput/Ambil</label>
                  <DatePicker
                    className="box"
                    selected={jam}
                    onChange={(date) => setJam(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </div>
                <div className="comp-input">
                  <label>Jumlah Penumpang (optional)</label>
                  <input
                    placeholder="Jumlah Penumpang"
                    className="box jml-penumpang"
                  />
                </div>
                <div className="comp-input">
                  <button className="btn btn-success btn-ijo">
                    Cari Mobil
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {page === "2" ? (
        <div>
          <div id="parrent-hero2">
            <div className="container-xl"></div>
          </div>
          <div id="section-02">
            <div className="container-xl">
              <form id="form-cari" className="page-2">
                <div className="comp-input">
                  <h6>Pencarianmu</h6>
                  <label>Tipe Driver</label>
                  <select
                    required
                    className="box"
                    onChange={(e) => {
                      cekSopir(e);
                    }}
                  >
                    <option value="" disabled selected hidden>
                      Pilih Tipe Driver
                    </option>
                    <option key={1} value={"Dengan Sopir"}>
                      Dengan Sopir
                    </option>
                    <option key={2} value={"Tanpa Sopir"}>
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="comp-input input-page2">
                  <label>Tanggal</label>

                  <DatePicker
                    className="box"
                    selected={tanggal}
                    onChange={(date) => setTanggal(date)}
                  />
                </div>
                <div className="comp-input input-page2">
                  <label>Waktu Jemput/Ambil</label>
                  <DatePicker
                    className="box"
                    selected={jam}
                    onChange={(date) => setJam(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </div>
                <div className="comp-input input-page2">
                  <label>Jumlah Penumpang (optional)</label>
                  <input
                    placeholder="Jumlah Penumpang"
                    type="number"
                    className="box"
                  />
                </div>
                <div className="comp-input input-page2">
                  <button className="btn btn-outline-primary">Edit</button>
                </div>
              </form>
            </div>
          </div>
          <div id="section-03">
            <div className="container-xl">
              <div className="card-container">
                {handleMobil(dataMobil, sopir)}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* {console.log(idCar)} */}
      {page === "3" ? (
        <div>
          <div id="parrent-hero3">
            <div className="container-xl"></div>
          </div>
          <div id="section-02">
            <div className="container-xl">
              <form id="form-cari" className="page-2">
                <div className="comp-input">
                  <h6>Pencarianmu</h6>
                  <label>Tipe Driver</label>
                  <select required className="box" disabled>
                    <option value="" disabled selected hidden>
                      Pilih Tipe Driver
                    </option>
                    <option key={1} value={"Dengan Sopir"}>
                      Dengan Sopir
                    </option>
                    <option key={2} value={"Tanpa Sopir"}>
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="comp-input input-page2">
                  <label>Tanggal</label>

                  <DatePicker
                    className="box"
                    selected={tanggal}
                    onChange={(date) => setTanggal(date)}
                    disabled
                  />
                </div>
                <div className="comp-input input-page2">
                  <label>Waktu Jemput/Ambil</label>
                  <DatePicker
                    className="box"
                    selected={jam}
                    onChange={(date) => setJam(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    disabled
                  />
                </div>
                <div className="comp-input input-page2">
                  <label>Jumlah Penumpang (optional)</label>
                  <input
                    placeholder="Jumlah Penumpang"
                    type="number"
                    className="box"
                    disabled
                  />
                </div>
              </form>
            </div>
          </div>
          <div id="section-03">
            <div className="container-xl">
              <CardDesc />
            </div>
          </div>
        </div>
      ) : null}
      <FooterDef />
    </div>
  );
};
