import {
  TBirthSchema,
  TCreatePasswordSchema,
  TEditAccountSchema,
  TEmailSchema,
  TLogInSchema,
  TNationalitySchema,
  TResidencySchema,
  TVerifyCodeSchema,
} from './schemaType';

export namespace Types {
  export namespace schema {
    export type emailSchema = TEmailSchema;
    export type verifyCodeSchema = TVerifyCodeSchema;
    export type createPasswordSchema = TCreatePasswordSchema;
    export type logInSchema = TLogInSchema;
    export type editAccountSchema = TEditAccountSchema;
    export type residencySchema = TResidencySchema;
    export type nationalitySchema = TNationalitySchema;
    export type birthSchema = TBirthSchema;
  }
}
