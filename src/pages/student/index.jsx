import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import DynamicTable from "../../components/dynamicTable";
import api from "../../services/api";

const Index = () => {
  const [students, setStudents] = useState();

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
      .delete(`studentdelete/${id}`)
      .then((response) => console.log(response));
    setStudents(students.filter((item) => item.StudentID !== id));
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Öğrenci Listesi</h1>
        </Col>
        <Col>
          <Button className="float-end" color="dark" size="lg">
            <Link to="create">Öğrenci Oluştur</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <DynamicTable
          data={{
            head: [
              { element: "Öğrenci Adı", props: { scope: "col" } },
              { element: "Öğrenci Soyadı", props: { scope: "col" } },
              { element: "Öğrenci Numarası", props: { scope: "col" } },
            ],
            body: students?.map((student) => ({
              id: student.StudentID,
              elements: [
                {
                  element: student.Name,
                  props: { className: "" },
                },
                {
                  element: student.Surname,
                  props: { className: "" },
                },
                {
                  element: student.StudentNO,
                  props: { className: "" },
                },
                {
                  element: (
                    <Link to={`update/${student.StudentID}`}>Düzenle</Link>
                  ),
                  props: { className: "text-primary" },
                },
                {
                  element: (
                    <Button
                      onClick={() => handleDelete(student.StudentID)}
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
  );
};

export default Index;
