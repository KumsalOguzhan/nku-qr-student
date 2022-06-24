import { React } from "react";
import { Col, Row } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  Name: Yup.string().required("Zorunlu alan"),
  Surname: Yup.string().required("Zorunlu alan")
});

const TeacherCreate = () => {
  const navigate = useNavigate();

  return (
    <div>
    <Row>
      <Col>
        <h1>Öğretmen oluştur</h1>
      </Col>
    </Row>
    <Row>
      <Formik
        initialValues={{ Name: "", Surname: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          api
            .post("/teacherinsert", values)
            .then((response) => console.log(response))
            .then(() => navigate("/teacher"));
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="Name">Öğretmen Adı</Label>
              <Input
                id="Name"
                name="Name"
                placeholder="Öğretmen ismi giriniz"
                type="text"
                onChange={handleChange}
                values={values.Name}
              />
              {errors.Name && errors.Name ? (
                <div className="text-danger">* {errors.Name}</div>
              ) : null}
              <Label for="Name">Öğretmen Soyadı</Label>
              <Input
                id="Surname"
                name="Surname"
                placeholder="Öğretmen soyadı giriniz"
                type="text"
                onChange={handleChange}
                values={values.Surname}
              />
              {errors.Surname && errors.Surname ? (
                <div className="text-danger">* {errors.Surname}</div>
              ) : null}
              <Button type="submit" className="mt-2" color="primary">
                Kaydet
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </Row>
  </div>
  )
}

export default TeacherCreate