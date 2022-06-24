import { React } from "react";
import { Col, Row } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  Name: Yup.string().required("Zorunlu alan"),
});

const SubjectCreate = () => {
  const navigate = useNavigate();

  return (
    <div>
    <Row>
      <Col>
        <h1>Ders oluştur</h1>
      </Col>
    </Row>
    <Row>
      <Formik
        initialValues={{ Name: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          api
            .post("/subjectinsert", values)
            .then((response) => console.log(response))
            .then(() => navigate("/subject"));
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="Name">Ders ismi</Label>
              <Input
                id="Name"
                name="Name"
                placeholder="Ders ismi giriniz"
                type="text"
                onChange={handleChange}
                values={values.Name}
              />
              {errors.Name && errors.Name ? (
                <div className="text-danger">* {errors.Name}</div>
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

export default SubjectCreate