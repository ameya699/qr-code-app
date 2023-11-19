import React, { useState } from "react";
import "../styles/qrcode.css";
import QRCode from "qrcode";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQR = () => {
    if (url.trim().length != 0) {
      QRCode.toDataURL(url.trim(), (err, url) => {
        if (err) return console.log(err);
        console.log(url);
        setQrcode(url);
      });
    } else {
      setUrl("");
    }
  };

  const handlechange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <div className="qr-code-container">
      <div className="qr-input-container">
        <input
          required
          placeholder="Enter url..."
          style={{
            width: "auto",
            minWidth: "250px",
            height: "4vh ",
            borderRadius: "25px",
            background: "#FFF",
            paddingLeft: "1vh",
            paddingRight: "1vh",
            fontSize: "17px",
          }}
          onChange={handlechange}
        />
        <button
          onClick={GenerateQR}
          style={{
            width: "auto",
            height: "4vh",
            borderRadius: "25px",
            background: "#3C8C44",
            cursor: "pointer",
            color: "white",
          }}
        >
          Generate QR-Code
        </button>
      </div>
      {qrcode && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
            alignItems: "center",
          }}
        >
          <img src={qrcode} style={{ width: "30vh" }} />
          <a
            download="qr-code.png"
            href={qrcode}
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "120px",
                height: "4vh",
                borderRadius: "25px",
                background: "#3C8C44",
                cursor: "pointer",
                color: "white",
              }}
            >
              Download
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default QrCode;
