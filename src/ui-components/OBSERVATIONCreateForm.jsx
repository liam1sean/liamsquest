/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { OBSERVATION } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OBSERVATIONCreateForm(props) {
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
    observation_id: "",
    observation_dt: "",
    frequency: "",
    duration: "",
    intensity: "",
    replacement_behavior: "",
    notes: "",
    lst_updt_dt: "",
    lst_updt_tm: "",
    user_id: "",
  };
  const [observation_id, setObservation_id] = React.useState(
    initialValues.observation_id
  );
  const [observation_dt, setObservation_dt] = React.useState(
    initialValues.observation_dt
  );
  const [frequency, setFrequency] = React.useState(initialValues.frequency);
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [intensity, setIntensity] = React.useState(initialValues.intensity);
  const [replacement_behavior, setReplacement_behavior] = React.useState(
    initialValues.replacement_behavior
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [lst_updt_dt, setLst_updt_dt] = React.useState(
    initialValues.lst_updt_dt
  );
  const [lst_updt_tm, setLst_updt_tm] = React.useState(
    initialValues.lst_updt_tm
  );
  const [user_id, setUser_id] = React.useState(initialValues.user_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setObservation_id(initialValues.observation_id);
    setObservation_dt(initialValues.observation_dt);
    setFrequency(initialValues.frequency);
    setDuration(initialValues.duration);
    setIntensity(initialValues.intensity);
    setReplacement_behavior(initialValues.replacement_behavior);
    setNotes(initialValues.notes);
    setLst_updt_dt(initialValues.lst_updt_dt);
    setLst_updt_tm(initialValues.lst_updt_tm);
    setUser_id(initialValues.user_id);
    setErrors({});
  };
  const validations = {
    observation_id: [],
    observation_dt: [],
    frequency: [],
    duration: [],
    intensity: [],
    replacement_behavior: [],
    notes: [],
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
          observation_id,
          observation_dt,
          frequency,
          duration,
          intensity,
          replacement_behavior,
          notes,
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
          await DataStore.save(new OBSERVATION(modelFields));
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
      {...getOverrideProps(overrides, "OBSERVATIONCreateForm")}
      {...rest}
    >
      <TextField
        label="Observation id"
        isRequired={false}
        isReadOnly={false}
        value={observation_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              observation_id: value,
              observation_dt,
              frequency,
              duration,
              intensity,
              replacement_behavior,
              notes,
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
        label="Observation dt"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={observation_dt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              observation_id,
              observation_dt: value,
              frequency,
              duration,
              intensity,
              replacement_behavior,
              notes,
              lst_updt_dt,
              lst_updt_tm,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.observation_dt ?? value;
          }
          if (errors.observation_dt?.hasError) {
            runValidationTasks("observation_dt", value);
          }
          setObservation_dt(value);
        }}
        onBlur={() => runValidationTasks("observation_dt", observation_dt)}
        errorMessage={errors.observation_dt?.errorMessage}
        hasError={errors.observation_dt?.hasError}
        {...getOverrideProps(overrides, "observation_dt")}
      ></TextField>
      <TextField
        label="Frequency"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={frequency}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              observation_id,
              observation_dt,
              frequency: value,
              duration,
              intensity,
              replacement_behavior,
              notes,
              lst_updt_dt,
              lst_updt_tm,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.frequency ?? value;
          }
          if (errors.frequency?.hasError) {
            runValidationTasks("frequency", value);
          }
          setFrequency(value);
        }}
        onBlur={() => runValidationTasks("frequency", frequency)}
        errorMessage={errors.frequency?.errorMessage}
        hasError={errors.frequency?.hasError}
        {...getOverrideProps(overrides, "frequency")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={duration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              observation_id,
              observation_dt,
              frequency,
              duration: value,
              intensity,
              replacement_behavior,
              notes,
              lst_updt_dt,
              lst_updt_tm,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <TextField
        label="Intensity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={intensity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              observation_id,
              observation_dt,
              frequency,
              duration,
              intensity: value,
              replacement_behavior,
              notes,
              lst_updt_dt,
              lst_updt_tm,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.intensity ?? value;
          }
          if (errors.intensity?.hasError) {
            runValidationTasks("intensity", value);
          }
          setIntensity(value);
        }}
        onBlur={() => runValidationTasks("intensity", intensity)}
        errorMessage={errors.intensity?.errorMessage}
        hasError={errors.intensity?.hasError}
        {...getOverrideProps(overrides, "intensity")}
      ></TextField>
      <TextField
        label="Replacement behavior"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={replacement_behavior}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              observation_id,
              observation_dt,
              frequency,
              duration,
              intensity,
              replacement_behavior: value,
              notes,
              lst_updt_dt,
              lst_updt_tm,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.replacement_behavior ?? value;
          }
          if (errors.replacement_behavior?.hasError) {
            runValidationTasks("replacement_behavior", value);
          }
          setReplacement_behavior(value);
        }}
        onBlur={() =>
          runValidationTasks("replacement_behavior", replacement_behavior)
        }
        errorMessage={errors.replacement_behavior?.errorMessage}
        hasError={errors.replacement_behavior?.hasError}
        {...getOverrideProps(overrides, "replacement_behavior")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              observation_id,
              observation_dt,
              frequency,
              duration,
              intensity,
              replacement_behavior,
              notes: value,
              lst_updt_dt,
              lst_updt_tm,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
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
              observation_id,
              observation_dt,
              frequency,
              duration,
              intensity,
              replacement_behavior,
              notes,
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
              observation_id,
              observation_dt,
              frequency,
              duration,
              intensity,
              replacement_behavior,
              notes,
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
              observation_id,
              observation_dt,
              frequency,
              duration,
              intensity,
              replacement_behavior,
              notes,
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
