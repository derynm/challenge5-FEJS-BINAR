import React from "react";
import "./carddesc.css";

export const CardDesc = () => {
  return (
    <div>
      <div className="card card-edit" style={{ width: "605px" }}>
        <div className="card-body" style={{ padding: "1.5rem" }}>
            <h6>Tentang Paket</h6>
            <p>Include</p>
            <ul>
                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>udah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
