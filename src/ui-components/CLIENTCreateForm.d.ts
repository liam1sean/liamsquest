/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CLIENTCreateFormInputValues = {
    client_id?: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    date_of_birth?: string;
    social_security_number?: string;
    image?: string;
    eff_dt?: string;
    canc_dt?: string;
    user_id?: string;
    lst_updt_dt?: string;
    lst_updt_tm?: string;
};
export declare type CLIENTCreateFormValidationValues = {
    client_id?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    middle_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
    social_security_number?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    eff_dt?: ValidationFunction<string>;
    canc_dt?: ValidationFunction<string>;
    user_id?: ValidationFunction<string>;
    lst_updt_dt?: ValidationFunction<string>;
    lst_updt_tm?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CLIENTCreateFormOverridesProps = {
    CLIENTCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    client_id?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    middle_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    social_security_number?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    eff_dt?: PrimitiveOverrideProps<TextFieldProps>;
    canc_dt?: PrimitiveOverrideProps<TextFieldProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
    lst_updt_dt?: PrimitiveOverrideProps<TextFieldProps>;
    lst_updt_tm?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CLIENTCreateFormProps = React.PropsWithChildren<{
    overrides?: CLIENTCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CLIENTCreateFormInputValues) => CLIENTCreateFormInputValues;
    onSuccess?: (fields: CLIENTCreateFormInputValues) => void;
    onError?: (fields: CLIENTCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CLIENTCreateFormInputValues) => CLIENTCreateFormInputValues;
    onValidate?: CLIENTCreateFormValidationValues;
} & React.CSSProperties>;
export default function CLIENTCreateForm(props: CLIENTCreateFormProps): React.ReactElement;
