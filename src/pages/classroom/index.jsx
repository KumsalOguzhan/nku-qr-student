import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import DynamicTable from "../../components/dynamicTable";
import api from "../../services/api";

const Index = () => {
  const [classroom, setClassroom] = useState();

  useEffect(() => {
    const fetchClassroom = async () => {
      try {
        const response = await api.get("/classroom");
        setClassroom(response.data);
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
    fetchClassroom();
  }, []);

  const handleDelete = async (id) => {
    await api
      .delete(`classroomdelete/${id}`)
      .then((response) => console.log(response));
      setClassroom(classroom.filter(item => item.ClassroomID !== id))
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Derslik listesi</h1>
        </Col>
        <Col>
          <Button className="float-end" color="dark" size="lg">
            <Link to="create">Derslik Oluştur</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <DynamicTable
          data={{
            head: [{ element: "Derslik No", props: { scope: "col" } }],
            body: classroom?.map((classroom) => ({
              id: classroom.ClassroomID,
              elements: [
                {
                  element: classroom.ClassNO,
                  props: { className: "" },
                },
                {
                  element: (
                    <Link to={`update/${classroom.ClassroomID}`}>Düzenle</Link>
                  ),
                  props: { className: "text-primary" },
                },
                {
                  element: (
                    <Button
                      onClick={() => handleDelete(classroom.ClassroomID)}
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
