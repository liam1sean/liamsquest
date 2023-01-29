/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BEHAVIOR } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BEHAVIORUpdateFormInputValues = {
    client_id?: string;
    observation_id?: string;
    lst_updt_dt?: string;
    lst_updt_tm?: string;
    user_id?: string;
};
export declare type BEHAVIORUpdateFormValidationValues = {
    client_id?: ValidationFunction<string>;
    observation_id?: ValidationFunction<string>;
    lst_updt_dt?: ValidationFunction<string>;
    lst_updt_tm?: ValidationFunction<string>;
    user_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BEHAVIORUpdateFormOverridesProps = {
    BEHAVIORUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    client_id?: PrimitiveOverrideProps<TextFieldProps>;
    observation_id?: PrimitiveOverrideProps<TextFieldProps>;
    lst_updt_dt?: PrimitiveOverrideProps<TextFieldProps>;
    lst_updt_tm?: PrimitiveOverrideProps<TextFieldProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BEHAVIORUpdateFormProps = React.PropsWithChildren<{
    overrides?: BEHAVIORUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bEHAVIOR?: BEHAVIOR;
    onSubmit?: (fields: BEHAVIORUpdateFormInputValues) => BEHAVIORUpdateFormInputValues;
    onSuccess?: (fields: BEHAVIORUpdateFormInputValues) => void;
    onError?: (fields: BEHAVIORUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BEHAVIORUpdateFormInputValues) => BEHAVIORUpdateFormInputValues;
    onValidate?: BEHAVIORUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BEHAVIORUpdateForm(props: BEHAVIORUpdateFormProps): React.ReactElement;
