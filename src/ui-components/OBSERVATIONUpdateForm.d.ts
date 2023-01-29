/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { OBSERVATION } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OBSERVATIONUpdateFormInputValues = {
    observation_id?: string;
    observation_dt?: string;
    frequency?: number;
    duration?: number;
    intensity?: number;
    replacement_behavior?: number;
    notes?: string;
    lst_updt_dt?: string;
    lst_updt_tm?: string;
    user_id?: string;
};
export declare type OBSERVATIONUpdateFormValidationValues = {
    observation_id?: ValidationFunction<string>;
    observation_dt?: ValidationFunction<string>;
    frequency?: ValidationFunction<number>;
    duration?: ValidationFunction<number>;
    intensity?: ValidationFunction<number>;
    replacement_behavior?: ValidationFunction<number>;
    notes?: ValidationFunction<string>;
    lst_updt_dt?: ValidationFunction<string>;
    lst_updt_tm?: ValidationFunction<string>;
    user_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OBSERVATIONUpdateFormOverridesProps = {
    OBSERVATIONUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    observation_id?: PrimitiveOverrideProps<TextFieldProps>;
    observation_dt?: PrimitiveOverrideProps<TextFieldProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    intensity?: PrimitiveOverrideProps<TextFieldProps>;
    replacement_behavior?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    lst_updt_dt?: PrimitiveOverrideProps<TextFieldProps>;
    lst_updt_tm?: PrimitiveOverrideProps<TextFieldProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OBSERVATIONUpdateFormProps = React.PropsWithChildren<{
    overrides?: OBSERVATIONUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    oBSERVATION?: OBSERVATION;
    onSubmit?: (fields: OBSERVATIONUpdateFormInputValues) => OBSERVATIONUpdateFormInputValues;
    onSuccess?: (fields: OBSERVATIONUpdateFormInputValues) => void;
    onError?: (fields: OBSERVATIONUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OBSERVATIONUpdateFormInputValues) => OBSERVATIONUpdateFormInputValues;
    onValidate?: OBSERVATIONUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OBSERVATIONUpdateForm(props: OBSERVATIONUpdateFormProps): React.ReactElement;
