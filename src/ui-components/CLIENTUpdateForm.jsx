/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CLIENT } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CLIENTUpdateForm(props) {
  const {
    id: idProp,
    cLIENT,
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
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    social_security_number: "",
    image: "",
    eff_dt: "",
    canc_dt: "",
    user_id: "",
    lst_updt_dt: "",
    lst_updt_tm: "",
  };
  const [client_id, setClient_id] = React.useState(initialValues.client_id);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [middle_name, setMiddle_name] = React.useState(
    initialValues.middle_name
  );
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [date_of_birth, setDate_of_birth] = React.useState(
    initialValues.date_of_birth
  );
  const [social_security_number, setSocial_security_number] = React.useState(
    initialValues.social_security_number
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [eff_dt, setEff_dt] = React.useState(initialValues.eff_dt);
  const [canc_dt, setCanc_dt] = React.useState(initialValues.canc_dt);
  const [user_id, setUser_id] = React.useState(initialValues.user_id);
  const [lst_updt_dt, setLst_updt_dt] = React.useState(
    initialValues.lst_updt_dt
  );
  const [lst_updt_tm, setLst_updt_tm] = React.useState(
    initialValues.lst_updt_tm
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cLIENTRecord
      ? { ...initialValues, ...cLIENTRecord }
      : initialValues;
    setClient_id(cleanValues.client_id);
    setFirst_name(cleanValues.first_name);
    setMiddle_name(cleanValues.middle_name);
    setLast_name(cleanValues.last_name);
    setDate_of_birth(cleanValues.date_of_birth);
    setSocial_security_number(cleanValues.social_security_number);
    setImage(cleanValues.image);
    setEff_dt(cleanValues.eff_dt);
    setCanc_dt(cleanValues.canc_dt);
    setUser_id(cleanValues.user_id);
    setLst_updt_dt(cleanValues.lst_updt_dt);
    setLst_updt_tm(cleanValues.lst_updt_tm);
    setErrors({});
  };
  const [cLIENTRecord, setCLIENTRecord] = React.useState(cLIENT);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(CLIENT, idProp) : cLIENT;
      setCLIENTRecord(record);
    };
    queryData();
  }, [idProp, cLIENT]);
  React.useEffect(resetStateValues, [cLIENTRecord]);
  const validations = {
    client_id: [],
    first_name: [],
    middle_name: [],
    last_name: [{ type: "Required" }],
    date_of_birth: [],
    social_security_number: [],
    image: [],
    eff_dt: [],
    canc_dt: [],
    user_id: [],
    lst_updt_dt: [],
    lst_updt_tm: [],
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
          first_name,
          middle_name,
          last_name,
          date_of_birth,
          social_security_number,
          image,
          eff_dt,
          canc_dt,
          user_id,
          lst_updt_dt,
          lst_updt_tm,
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
          await DataStore.save(
            CLIENT.copyOf(cLIENTRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CLIENTUpdateForm")}
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
              first_name,
              middle_name,
              last_name,
              date_of_birth,
              social_security_number,
              image,
              eff_dt,
              canc_dt,
              user_id,
              lst_updt_dt,
              lst_updt_tm,
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
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              first_name: value,
              middle_name,
              last_name,
              date_of_birth,
              social_security_number,
              image,
              eff_dt,
              canc_dt,
              user_id,
              lst_updt_dt,
              lst_updt_tm,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Middle name"
        isRequired={false}
        isReadOnly={false}
        value={middle_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              first_name,
              middle_name: value,
              last_name,
              date_of_birth,
              social_security_number,
              image,
              eff_dt,
              canc_dt,
              user_id,
              lst_updt_dt,
              lst_updt_tm,
            };
            const result = onChange(modelFields);
            value = result?.middle_name ?? value;
          }
          if (errors.middle_name?.hasError) {
            runValidationTasks("middle_name", value);
          }
          setMiddle_name(value);
        }}
        onBlur={() => runValidationTasks("middle_name", middle_name)}
        errorMessage={errors.middle_name?.errorMessage}
        hasError={errors.middle_name?.hasError}
        {...getOverrideProps(overrides, "middle_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              first_name,
              middle_name,
              last_name: value,
              date_of_birth,
              social_security_number,
              image,
              eff_dt,
              canc_dt,
              user_id,
              lst_updt_dt,
              lst_updt_tm,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date_of_birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              first_name,
              middle_name,
              last_name,
              date_of_birth: value,
              social_security_number,
              image,
              eff_dt,
              canc_dt,
              user_id,
              lst_updt_dt,
              lst_updt_tm,
            };
            const result = onChange(modelFields);
            value = result?.date_of_birth ?? value;
          }
          if (errors.date_of_birth?.hasError) {
            runValidationTasks("date_of_birth", value);
          }
          setDate_of_birth(value);
        }}
        onBlur={() => runValidationTasks("date_of_birth", date_of_birth)}
        errorMessage={errors.date_of_birth?.errorMessage}
        hasError={errors.date_of_birth?.hasError}
        {...getOverrideProps(overrides, "date_of_birth")}
      ></TextField>
      <TextField
        label="Social security number"
        isRequired={false}
        isReadOnly={false}
        value={social_security_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              first_name,
              middle_name,
              last_name,
              date_of_birth,
              social_security_number: value,
              image,
              eff_dt,
              canc_dt,
              user_id,
              lst_updt_dt,
              lst_updt_tm,
            };
            const result = onChange(modelFields);
            value = result?.social_security_number ?? value;
          }
          if (errors.social_security_number?.hasError) {
            runValidationTasks("social_security_number", value);
          }
          setSocial_security_number(value);
        }}
        onBlur={() =>
          runValidationTasks("social_security_number", social_security_number)
        }
        errorMessage={errors.social_security_number?.errorMessage}
        hasError={errors.social_security_number?.hasError}
        {...getOverrideProps(overrides, "social_security_number")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              first_name,
              middle_name,
              last_name,
              date_of_birth,
              social_security_number,
              image: value,
              eff_dt,
              canc_dt,
              user_id,
              lst_updt_dt,
              lst_updt_tm,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Eff dt"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={eff_dt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              first_name,
              middle_name,
              last_name,
              date_of_birth,
              social_security_number,
              image,
              eff_dt: value,
              canc_dt,
              user_id,
              lst_updt_dt,
              lst_updt_tm,
            };
            const result = onChange(modelFields);
            value = result?.eff_dt ?? value;
          }
          if (errors.eff_dt?.hasError) {
            runValidationTasks("eff_dt", value);
          }
          setEff_dt(value);
        }}
        onBlur={() => runValidationTasks("eff_dt", eff_dt)}
        errorMessage={errors.eff_dt?.errorMessage}
        hasError={errors.eff_dt?.hasError}
        {...getOverrideProps(overrides, "eff_dt")}
      ></TextField>
      <TextField
        label="Canc dt"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={canc_dt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              first_name,
              middle_name,
              last_name,
              date_of_birth,
              social_security_number,
              image,
              eff_dt,
              canc_dt: value,
              user_id,
              lst_updt_dt,
              lst_updt_tm,
            };
            const result = onChange(modelFields);
            value = result?.canc_dt ?? value;
          }
          if (errors.canc_dt?.hasError) {
            runValidationTasks("canc_dt", value);
          }
          setCanc_dt(value);
        }}
        onBlur={() => runValidationTasks("canc_dt", canc_dt)}
        errorMessage={errors.canc_dt?.errorMessage}
        hasError={errors.canc_dt?.hasError}
        {...getOverrideProps(overrides, "canc_dt")}
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
              first_name,
              middle_name,
              last_name,
              date_of_birth,
              social_security_number,
              image,
              eff_dt,
              canc_dt,
              user_id: value,
              lst_updt_dt,
              lst_updt_tm,
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
              first_name,
              middle_name,
              last_name,
              date_of_birth,
              social_security_number,
              image,
              eff_dt,
              canc_dt,
              user_id,
              lst_updt_dt: value,
              lst_updt_tm,
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
        value={lst_updt_tm}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client_id,
              first_name,
              middle_name,
              last_name,
              date_of_birth,
              social_security_number,
              image,
              eff_dt,
              canc_dt,
              user_id,
              lst_updt_dt,
              lst_updt_tm: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cLIENT)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cLIENT) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
