import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import DynamicTable from "../../components/dynamicTable";
import api from "../../services/api";

const Index = () => {
  const [teachers, setTeachers] = useState();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await api.get("/teacher");
        setTeachers(response.data);
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
    fetchTeachers();
  }, []);

  const handleDelete = async (id) => {
    await api
      .delete(`teacherdelete/${id}`)
      .then((response) => console.log(response));
    setTeachers(teachers.filter((item) => item.TeacherID !== id));
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Öğretmenler</h1>
        </Col>
        <Col>
          <Button className="float-end" color="dark" size="lg">
            <Link to="create">Öğretmen Oluştur</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <DynamicTable
          data={{
            head: [
              { element: "Öğretmen Adı", props: { scope: "col" } },
              { element: "Öğretmen Soyadı", props: { scope: "col" } },
            ],
            body: teachers?.map((teacher) => ({
              id: teacher.TeacherID,
              elements: [
                {
                  element: teacher.Name,
                  props: { className: "" },
                },
                {
                  element: teacher.Surname,
                  props: { className: "" },
                },
                {
                  element: (
                    <Link to={`update/${teacher.TeacherID}`}>Düzenle</Link>
                  ),
                  props: { className: "text-primary" },
                },
                {
                  element: (
                    <Button
                      onClick={() => handleDelete(teacher.TeacherID)}
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
