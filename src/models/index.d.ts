import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBEHAVIOR = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BEHAVIOR, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly client_id?: string | null;
  readonly observation_id?: string | null;
  readonly lst_updt_dt?: string | null;
  readonly lst_updt_tm?: string | null;
  readonly user_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBEHAVIOR = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BEHAVIOR, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly client_id?: string | null;
  readonly observation_id?: string | null;
  readonly lst_updt_dt?: string | null;
  readonly lst_updt_tm?: string | null;
  readonly user_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BEHAVIOR = LazyLoading extends LazyLoadingDisabled ? EagerBEHAVIOR : LazyBEHAVIOR

export declare const BEHAVIOR: (new (init: ModelInit<BEHAVIOR>) => BEHAVIOR) & {
  copyOf(source: BEHAVIOR, mutator: (draft: MutableModel<BEHAVIOR>) => MutableModel<BEHAVIOR> | void): BEHAVIOR;
}

type EagerOBSERVATION = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OBSERVATION, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly observation_id?: string | null;
  readonly observation_dt?: string | null;
  readonly frequency?: number | null;
  readonly duration?: number | null;
  readonly intensity?: number | null;
  readonly replacement_behavior?: number | null;
  readonly notes?: string | null;
  readonly lst_updt_dt?: string | null;
  readonly lst_updt_tm?: string | null;
  readonly user_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOBSERVATION = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OBSERVATION, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly observation_id?: string | null;
  readonly observation_dt?: string | null;
  readonly frequency?: number | null;
  readonly duration?: number | null;
  readonly intensity?: number | null;
  readonly replacement_behavior?: number | null;
  readonly notes?: string | null;
  readonly lst_updt_dt?: string | null;
  readonly lst_updt_tm?: string | null;
  readonly user_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OBSERVATION = LazyLoading extends LazyLoadingDisabled ? EagerOBSERVATION : LazyOBSERVATION

export declare const OBSERVATION: (new (init: ModelInit<OBSERVATION>) => OBSERVATION) & {
  copyOf(source: OBSERVATION, mutator: (draft: MutableModel<OBSERVATION>) => MutableModel<OBSERVATION> | void): OBSERVATION;
}

type EagerCLIENT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CLIENT, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly client_id?: string | null;
  readonly first_name?: string | null;
  readonly middle_name?: string | null;
  readonly last_name: string;
  readonly date_of_birth?: string | null;
  readonly social_security_number?: string | null;
  readonly image?: string | null;
  readonly eff_dt?: string | null;
  readonly canc_dt?: string | null;
  readonly user_id?: string | null;
  readonly lst_updt_dt?: string | null;
  readonly lst_updt_tm?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCLIENT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CLIENT, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly client_id?: string | null;
  readonly first_name?: string | null;
  readonly middle_name?: string | null;
  readonly last_name: string;
  readonly date_of_birth?: string | null;
  readonly social_security_number?: string | null;
  readonly image?: string | null;
  readonly eff_dt?: string | null;
  readonly canc_dt?: string | null;
  readonly user_id?: string | null;
  readonly lst_updt_dt?: string | null;
  readonly lst_updt_tm?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CLIENT = LazyLoading extends LazyLoadingDisabled ? EagerCLIENT : LazyCLIENT

export declare const CLIENT: (new (init: ModelInit<CLIENT>) => CLIENT) & {
  copyOf(source: CLIENT, mutator: (draft: MutableModel<CLIENT>) => MutableModel<CLIENT> | void): CLIENT;
}