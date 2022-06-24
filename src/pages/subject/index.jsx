import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import DynamicTable from "../../components/dynamicTable";
import api from "../../services/api";

const Index = () => {
  const [subjects, setSubjects] = useState();

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

  const handleDelete = async (id) => {
    await api
      .delete(`subjectdelete/${id}`)
      .then((response) => console.log(response));
      setSubjects(subjects.filter(item => item.SubjectID !== id))
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Dersler</h1>
        </Col>
        <Col>
          <Button className="float-end" color="dark" size="lg">
            <Link to="create">Ders Oluştur</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <DynamicTable
          data={{
            head: [{ element: "Ders", props: { scope: "col" } }],
            body: subjects?.map((subject) => ({
              id: subject.SubjectID,
              elements: [
                {
                  element: subject.Name,
                  props: { className: "" },
                },
                {
                  element: (
                    <Link to={`update/${subject.SubjectID}`}>Düzenle</Link>
                  ),
                  props: { className: "text-primary" },
                },
                {
                  element: (
                    <Button
                      onClick={() => handleDelete(subject.SubjectID)}
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