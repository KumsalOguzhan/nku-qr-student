import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { Col, Row } from "reactstrap";
import api from "../../services/api";

const Qr = () => {
  const [data, setData] = useState();
  const [lecture, setLecture] = useState();
  const [subject, setSubject] = useState();
  const [teacher, setTeacher] = useState();
  const [classroom, setClassroom] = useState();

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await api.get(`/lecture/${data}`);
        setLecture(response.data[0]);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    };
    fetchLectures();
  }, [data]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await api.get(`/subject/${lecture.SubjectID}`);
        setSubject(response.data[0]);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    };
    fetchLectures();
  }, [lecture]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await api.get(`/teacher/${lecture.TeacherID}`);
        setTeacher(response.data[0]);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    };
    fetchLectures();
  }, [lecture]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await api.get(`/classroom/${lecture.ClassroomID}`);
        setClassroom(response.data[0]);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    };
    fetchLectures();
  }, [lecture]);

  return (
    <div>
      <Row>
        <Col>
          <h1>Qr okuma</h1>
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
                //console.info(error);
              }
            }}
            style={{ width: "100%" }}
          />
          <p>Ders id: {data}</p>
        </Col>
        <Col>
            <h5>Ders: {subject?.Name}</h5>
            <h5>Öğretmen: {teacher?.Name} {teacher?.Surname}</h5>
            <h5>Sınıf: {classroom?.ClassNO}</h5>
            {subject?.Name ? <h3 className="text-success">Derse katıldı</h3> : null}
        </Col>
      </Row>
    </div>
  );
};

export default Qr;
