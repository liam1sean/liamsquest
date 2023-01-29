/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { BEHAVIOR } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BEHAVIORCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    client_id: "",
    observation_id: "",
    lst_updt_dt: "",
    lst_updt_tm: "",
    user_id: "",
  };
  const [client_id, setClient_id] = React.useState(initialValues.client_id);
  const [observation_id, setObservation_id] = React.useState(
    initialValues.observation_id
  );
  const [lst_updt_dt, setLst_updt_dt] = React.useState(
    initialValues.lst_updt_dt
  );
  const [lst_updt_tm, setLst_updt_tm] = React.useState(
    initialValues.lst_updt_tm
  );
  const [user_id, setUser_id] = React.useState(initialValues.user_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setClient_id(initialValues.client_id);
    setObservation_id(initialValues.observation_id);
    setLst_updt_dt(initialValues.lst_updt_dt);
    setLst_updt_tm(initialValues.lst_updt_tm);
    setUser_id(initialValues.user_id);
    setErrors({});
  };
  const validations = {
    client_id: [],
    observation_id: [],
    lst_updt_dt: [],
    lst_updt_tm: [],
    user_id: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          client_id,
          observation_id,
          lst_updt_dt,
          lst_updt_tm,
          user_id,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new BEHAVIOR(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BEHAVIORCreateForm")}
      {...rest}
    >
      <TextField
        label="Client id"
        isRequired={false}
        isReadOnly={false}
        value={client_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id: value,
              observation_id,
              lst_updt_dt,
              lst_updt_tm,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.client_id ?? value;
          }
          if (errors.client_id?.hasError) {
            runValidationTasks("client_id", value);
          }
          setClient_id(value);
        }}
        onBlur={() => runValidationTasks("client_id", client_id)}
        errorMessage={errors.client_id?.errorMessage}
        hasError={errors.client_id?.hasError}
        {...getOverrideProps(overrides, "client_id")}
      ></TextField>
      <TextField
        label="Observation id"
        isRequired={false}
        isReadOnly={false}
        value={observation_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              observation_id: value,
              lst_updt_dt,
              lst_updt_tm,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.observation_id ?? value;
          }
          if (errors.observation_id?.hasError) {
            runValidationTasks("observation_id", value);
          }
          setObservation_id(value);
        }}
        onBlur={() => runValidationTasks("observation_id", observation_id)}
        errorMessage={errors.observation_id?.errorMessage}
        hasError={errors.observation_id?.hasError}
        {...getOverrideProps(overrides, "observation_id")}
      ></TextField>
      <TextField
        label="Lst updt dt"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={lst_updt_dt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              observation_id,
              lst_updt_dt: value,
              lst_updt_tm,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.lst_updt_dt ?? value;
          }
          if (errors.lst_updt_dt?.hasError) {
            runValidationTasks("lst_updt_dt", value);
          }
          setLst_updt_dt(value);
        }}
        onBlur={() => runValidationTasks("lst_updt_dt", lst_updt_dt)}
        errorMessage={errors.lst_updt_dt?.errorMessage}
        hasError={errors.lst_updt_dt?.hasError}
        {...getOverrideProps(overrides, "lst_updt_dt")}
      ></TextField>
      <TextField
        label="Lst updt tm"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={lst_updt_tm}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              observation_id,
              lst_updt_dt,
              lst_updt_tm: value,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.lst_updt_tm ?? value;
          }
          if (errors.lst_updt_tm?.hasError) {
            runValidationTasks("lst_updt_tm", value);
          }
          setLst_updt_tm(value);
        }}
        onBlur={() => runValidationTasks("lst_updt_tm", lst_updt_tm)}
        errorMessage={errors.lst_updt_tm?.errorMessage}
        hasError={errors.lst_updt_tm?.hasError}
        {...getOverrideProps(overrides, "lst_updt_tm")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={user_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              observation_id,
              lst_updt_dt,
              lst_updt_tm,
              user_id: value,
            };
            const result = onChange(modelFields);
            value = result?.user_id ?? value;
          }
          if (errors.user_id?.hasError) {
            runValidationTasks("user_id", value);
          }
          setUser_id(value);
        }}
        onBlur={() => runValidationTasks("user_id", user_id)}
        errorMessage={errors.user_id?.errorMessage}
        hasError={errors.user_id?.hasError}
        {...getOverrideProps(overrides, "user_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
