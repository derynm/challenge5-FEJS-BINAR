import React from "react";
import "./carddesc.css";

export const CardDesc = () => {
  return (
    <div>
      <div className="card card-edit" style={{ width: "605px" }}>
        <div className="card-body" style={{ padding: "1.5rem" }}>
          <h5>Tentang Paket</h5>
          <p>Include</p>
          <ul className="card-list-desk">
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>udah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <p>Exclude</p>
          <ul className="card-list-desk">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <h5>Refund, Reschedule, Overtime</h5>
          <ul className="card-list-desk refund">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
