import { React, useState, useEffect } from "react";
import { Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../services/api";
import DynamicTable from "../../components/dynamicTable";

const Index = () => {
  const [inspections, setInspections] = useState()
  const [students, setStudents] = useState()
  const [subjects, setSubjects] = useState()
  const [lectures, setLectures] = useState()

  useEffect(() => {
    const fetchInspection = async () => {
      try {
        const response = await api.get("/inspection")
        setInspections(response.data)
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    }
    fetchInspection()
  }, [])

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await api.get("/subject");
        setSubjects(response.data);
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
    fetchSubjects();
  }, []);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await api.get("/lecture");
        setLectures(response.data);
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
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get("/student");
        setStudents(response.data);
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
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    await api
      .delete(`inspectiondelete/${id}`)
      .then((response) => console.log(response));
    setInspections(inspections.filter((item) => item.InspectionID !== id));
  };

  const handleStudentName = (id) => {
    return students?.find((item) => item.StudentID === id);
  };

  console.log(inspections)

  return (
    <div>
      <Row>
        <Col>
          <h1>inspection</h1>
        </Col>
        <Col>
          <Button className="float-end" color="dark" size="lg">
            <Link to="create">Yeni inspection</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <DynamicTable
          data={{
            head: [
              { element: "Ders", props: { scope: "col" } },
              { element: "Öğrenci", props: { scope: "col" } },
              { element: "Devamsızlık", props: { scope: "col" } },
            ],
            body: inspections?.map((inspection) => ({
              id: inspection.StudentID,
              elements: [
                {
                  element: "",
                  props: { className: "" },
                },
                {
                  element:
                    handleStudentName(inspection.StudentID).Name +
                    " " +
                    handleStudentName(inspection.StudentID).Surname,
                  props: { className: "" },
                },
                {
                  element: inspection.Statu ? "Girdi" : "Girmedi",
                  props: { className: inspection.Statu ? "text-success" : "text-danger" },
                },
                {
                  element: (
                    <Link to={`update/${inspection.InspectionID}`}>Düzenle</Link>
                  ),
                  props: { className: "text-primary" },
                },
                {
                  element: (
                    <Button
                      onClick={() => handleDelete(inspection.InspectionID)}
                      color="danger"
                    >
                      Sil
                    </Button>
                  ),
                  props: { className: "" },
                },
              ],
            })),
          }}
        />
      </Row>
    </div>
  )
}

export default Index