import React from "react";
import {  useLocation, useNavigate } from "react-router-dom";


import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  TextField,
} from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import { useGlobalState } from "../../store/Store";
import { getUsers } from "../../api/Users";
const initialValues = {
  email: "",
  password: "",
};

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Auth = () => {
  const [users, setUsers] = useGlobalState("users");
  const location = useLocation();
  let navigate = useNavigate();
  navigate("/");
  const classes = useStyle();

  const onSubmit = async (values) => {
    const { email, password } = values;
    const users = await getUsers()
    if (location.pathname === "/reg") {
      console.log(users); 
      setUsers((prev) => [...prev, values]);
      return   navigate("/");
    }
    
    const isEmail = users.find((user) => user.email === email);

    if (isEmail) {
      alert("isEmail", isEmail);
      if (isEmail.password === password) {
        return   navigate("/");
      }
    } else {
    }
  };


  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item md={6}>
        <Card className={classes.padding}>
          <CardHeader
            title={
              location.pathname === "/login"
                ? "Увійти ROIDOHA"
                : "Реєстрація ROIDOHA"
            }
          />
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justifyContent="center">
                    <Grid item xs={12} sm={6} md={6}>
                        <Field name="name">
                          {({ field }) => (
                            <TextField
                              required={true}
                              label="Ім'я"
                              variant="outlined"
                              fullWidth
                              {...field}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field name="email">
                          {({ field }) => (
                            <TextField
                              required={true}
                              type="email"
                              label="Пошта"
                              variant="outlined"
                              fullWidth
                              {...field}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field name="password">
                          {({ field }) => (
                            <TextField
                              required={true}
                              type="password"
                              label="Уведіть параль"
                              variant="outlined"
                              fullWidth
                              {...field}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field name="password2">
                          {({ field }) => (
                            <TextField
                              required={true}
                              type="password"
                              label="Уведіть повторно параль "
                              variant="outlined"
                              fullWidth
                              {...field}
                            />
                          )}
                        </Field>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      className={classes.button}
                    >
                      {location.pathname === "/login" ? "Увійти" : "Реєстрація"}
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Auth;