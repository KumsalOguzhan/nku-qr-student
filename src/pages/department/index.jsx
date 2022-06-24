import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import DynamicTable from "../../components/dynamicTable";
import api from "../../services/api";

const Index = () => {
  const [departments, setDepartments] = useState();

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await api.get("/departmant");
        setDepartments(response.data);
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
    fetchDepartment();
  }, []);

  console.log(departments);

  const handleDelete = async (id) => {
    await api
      .delete(`departmantdelete/${id}`)
      .then((response) => console.log(response));
      setDepartments(departments.filter(item => item.DepartmantID !== id))
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Bölümler</h1>
        </Col>
        <Col>
          <Button className="float-end" color="dark" size="lg">
            <Link to="create">Bölüm Oluştur</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <DynamicTable
          data={{
            head: [{ element: "Bölüm", props: { scope: "col" } }],
            body: departments?.map((department) => ({
              id: department.DepartmantID,
              elements: [
                {
                  element: department.Name,
                  props: { className: "" },
                },
                {
                  element: (
                    <Link to={`update/${department.DepartmantID}`}>Düzenle</Link>
                  ),
                  props: { className: "text-primary" },
                },
                {
                  element: (
                    <Button
                      onClick={() => handleDelete(department.DepartmantID)}
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