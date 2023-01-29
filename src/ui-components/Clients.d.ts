/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ClientProfileProps } from "./ClientProfile";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientsOverridesProps = {
    Clients?: PrimitiveOverrideProps<CollectionProps>;
    ClientProfile?: ClientProfileProps;
} & EscapeHatchProps;
export declare type ClientsProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ClientProfileProps;
} & {
    overrides?: ClientsOverridesProps | undefined | null;
}>;
export default function Clients(props: ClientsProps): React.ReactElement;
