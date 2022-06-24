import { React } from "react";
import { Col, Row } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  classNo: Yup.string().required("Zorunlu alan"),
  //lecture: Yup.string(),
});

const ClassroomCreate = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Row>
        <Col>
          <h1>Derslik oluştur</h1>
        </Col>
      </Row>
      <Row>
        <Formik
          initialValues={{ classNo: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            api
              .post("/classroominsert", values)
              .then((response) => console.log(response))
              .then(() => navigate("/classroom"));
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="classNo">Derslik ismi</Label>
                <Input
                  id="classNo"
                  name="classNo"
                  placeholder="Derslik ismi giriniz"
                  type="text"
                  onChange={handleChange}
                  values={values.classNo}
                />
                {errors.classNo && errors.classNo ? (
                  <div className="text-danger">* {errors.classNo}</div>
                ) : null}
                {/* <Label className="mt-2" for="examplePassword">
                  Dersler
                </Label> */}
                {/* <Input
                  id="lecture"
                  name="text"
                  placeholder="Ders giriniz"
                  type="text"
                  onChange={handleChange}
                  values={values.lecture}
                />
                {errors.lecture && errors.lecture ? (
                  <div className="text-danger">* {errors.lecture}</div>
                ) : null} */}
                <Button type="submit" className="mt-2" color="primary">
                  Kaydet
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Row>
    </div>
  );
};

export default ClassroomCreate;
