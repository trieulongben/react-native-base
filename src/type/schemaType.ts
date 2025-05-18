import {z} from 'zod';

import {Validators} from '@configs/validators';

export type TEmailSchema = z.infer<typeof Validators.emailSchema>;
export type TVerifyCodeSchema = z.infer<typeof Validators.verifyCodeSchema>;
export type TCreatePasswordSchema = z.infer<
  typeof Validators.createPasswordSchema
>;
export type TLogInSchema = z.infer<typeof Validators.logInSchema>;

export type TEditAccountSchema = z.infer<typeof Validators.editAccountSchema>;
export type TResidencySchema = z.infer<typeof Validators.residencySchema>;
export type TNationalitySchema = z.infer<typeof Validators.nationalitySchema>;
export type TBirthSchema = z.infer<typeof Validators.birthSchema>;
