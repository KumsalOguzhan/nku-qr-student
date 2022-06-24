import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Col, Row } from "reactstrap";
import QRCode from "react-qr-code";

const Qr = () => {
  const [data, setData] = useState("Değer Yok");

  return (
    <div>
      <Row>
        <Col>
          <h1>Qr okuma</h1>
        </Col>
        <Col>
          <h1>Qr üretme</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <QrReader
            className="w-50"
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: "100%" }}
          />
          <p>{data}</p>
        </Col>
        <Col>
          <div>
            <QRCode
              size={256}
              className="w-50"
              value={
                "InspectionID=4"
              }
              viewBox={`0 0 256 256`}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Qr;
