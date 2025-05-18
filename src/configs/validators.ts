import {z} from 'zod';

// const firstName = z
//   .string({required_error: 'This field is required.'})
//   .trim()
//   .nonempty({message: 'This field is required.'})
//   .max(50, 'It should not exceed 50 characters');

// const lastName = z
//   .string({required_error: 'This field is required.'})
//   .trim()
//   .nonempty({message: 'This field is required.'})
//   .max(50, 'It should not exceed 50 characters');

// const userName = z
//   .string({required_error: 'This field is required.'})
//   .max(50, 'It should not exceed 50 characters')
//   .trim()

//   .nonempty({message: 'This field is required.'});
const name = z
  .string()
  .min(1, 'Username is required')
  .max(25, 'Username cannot be longer than 25 characters')
  .regex(
    /^[a-zA-Z0-9_-]+$/,
    'Invalid username! Please only use letters, numbers, underscores (_), and hyphens (-).',
  );

export const country = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string({required_error: 'This field is required.'}),
  dialCode: z.string(),
  flag: z.string(),
});

const email = z
  .string({required_error: 'This field is required.'})
  .trim()
  .email({
    message: 'Invalid email. Please try again',
  })
  .max(100, 'It should not exceed 100 characters')
  .nonempty({message: 'This field is required.'});

const verifyCode = z
  .string({required_error: 'This field is required.'})
  .trim()
  .min(6, 'It should not be less than 6 characters')
  .max(6, 'It should not exceed 6 characters')
  .nonempty({message: 'This field is required.'});

// const phoneInfo = z.object({
//   name: z.string({required_error: 'This field is required.'}),
//   dialCode: z.string({required_error: 'This field is required.'}),
//   code: z.string({required_error: 'This field is required.'}),
//   flag: z.string({required_error: 'This field is required.'}),
//   phoneNumber: z
//     .string({required_error: 'This field is required.'})
//     .trim()
//     .nonempty({message: 'This field is required.'})
//     .min(10, {message: 'Invalid phone number. Please try again'})
//     .max(14, {message: 'Invalid phone number. Please try again'}),
// });

// const birthday = z.date({required_error: 'This field is required.'});
// const start_date = z.date({required_error: 'This field is required.'});
// const end_date = z.date({required_error: 'This field is required.'});
const password = z.string().refine(
  value => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/;
    return passwordRegex.test(value);
  },
  {
    message:
      'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character.',
  },
);
const rePassword = z.string();
export const createPasswordSchema = z
  .object({
    password,
    rePassword,
  })
  .refine(data => data.password === data.rePassword, {
    // Custom error message
    message: 'Passwords do not match',
    path: ['rePassword'], // This is where the error message will be attached
  });
export const emailSchema = z.object({
  email,
});
export const verifyCodeSchema = z.object({
  verifyCode,
});
export const logInSchema = z.object({
  email,
  password,
});

const username = z
  .string()
  .min(1, 'Please provide your username!')
  .max(20, 'Your username cannot be longer than 20 characters')
  .regex(
    /^[a-zA-Z0-9_-]+$/,
    'Invalid username! Please only use letters, numbers, underscores (_), and hyphens (-).',
  );
const bio = z
  .string()
  .refine(
    value => value.replace('\n', '').length <= 500,
    'Your Bio cannot be longer than 500 characters.',
  );
const birthday = z.string({required_error: 'This field is required.'});

export const nationalitySchema = z.object({
  name,
  country,
});
export const residencySchema = z.object({
  country,
});

export const editAccountSchema = z.object({
  username,
  bio,
});
export const birthSchema = z.object({
  birthday,
});
// export const signUpSchema = z.object({
//   firstName,
//   lastName,
//   userName,
//   email,
//   birthday,
// });

// export const dateFilterSchema = z.object({
//   start_date,
//   end_date,
// });

export const Validators = {
  emailSchema,
  verifyCodeSchema,
  createPasswordSchema,
  logInSchema,
  editAccountSchema,
  nationalitySchema,
  residencySchema,
  birthSchema,
};
