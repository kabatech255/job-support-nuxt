import { NuxtI18nInstance } from 'nuxt-i18n'
import { strPatterns, length, MAX_IMAGE_SIZE } from './util'
import {
  AccountVerificationInputs,
  ForgotPasswordInputs,
  PasswordResetInputs,
  ProfileInputs,
  ResetForgottenPasswordInputs,
  SigninInputs,
  SignupInputs,
} from '~/types/ts-axios'

export const signupRule = (i18n: NuxtI18nInstance) => ({
  // メールアドレス: 必須, メール形式, 最小8文字, 最大255文字
  email: [
    (v: SignupInputs['email']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.email'),
      }),
    (v: SignupInputs['email']) =>
      strPatterns.email.test(v) ||
      i18n.t('validation.pattern', {
        attribute: i18n.t('attribute.email'),
      }),
    (v: SignupInputs['email']) =>
      v.length <= length.email[0] ||
      i18n.t('validation.min', {
        attribute: i18n.t('attribute.email'),
        length: length.email[0],
      }),
    (v: SignupInputs['email']) =>
      v.length <= length.email[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.email'),
        length: length.email[1],
      }),
  ],
  // 姓: 必須, 最大128文字
  family_name: [
    (v: SignupInputs['family_name']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.family_name'),
      }),
    (v: SignupInputs['family_name']) =>
      v.length <= length.default[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.family_name'),
        length: length.default[1],
      }),
  ],
  // セイ: 必須, カタカナ, 最大128文字
  family_name_kana: [
    (v: SignupInputs['family_name']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.family_name'),
      }),
    (v: SignupInputs['family_name_kana']) =>
      strPatterns.katakana.test(v) ||
      i18n.t('validation.pattern', {
        attribute: i18n.t('attribute.family_name_kana'),
      }),
    (v: SignupInputs['family_name_kana']) =>
      v.length <= length.default[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.family_name_kana'),
        length: length.default[1],
      }),
  ],
  // 名: 必須, 最大128文字
  given_name: [
    (v: SignupInputs['given_name']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.given_name'),
      }),
    (v: SignupInputs['given_name']) =>
      v.length <= length.default[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.given_name'),
        length: length.default[1],
      }),
  ],
  // メイ: 必須, カタカナ, 最大128文字
  given_name_kana: [
    (v: SignupInputs['given_name']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.given_name'),
      }),
    (v: SignupInputs['given_name_kana']) =>
      strPatterns.katakana.test(v) ||
      i18n.t('validation.pattern', {
        attribute: i18n.t('attribute.given_name_kana'),
      }),
    (v: SignupInputs['given_name_kana']) =>
      v.length <= length.default[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.given_name_kana'),
        length: length.default[1],
      }),
  ],
  // ログインID: 必須, 最小8文字, 最大32文字
  login_id: [
    (v: SignupInputs['login_id']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.login_id'),
      }),
    (v: SignupInputs['login_id']) =>
      v.length >= length.login_id[0] ||
      i18n.t('validation.min', {
        attribute: i18n.t('attribute.login_id'),
        length: length.login_id[0],
      }),
    (v: SignupInputs['login_id']) =>
      v.length <= length.login_id[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.login_id'),
        length: length.login_id[1],
      }),
  ],
  // パスワード: 必須, 大文字・小文字・数字を含む, 最小8文字, 最大64文字
  password: [
    (v: SignupInputs['password']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.password'),
      }),
    (v: SignupInputs['password']) =>
      v.length >= length.password[0] ||
      i18n.t('validation.min', {
        attribute: i18n.t('attribute.password'),
        length: length.password[0],
      }),
    (v: SignupInputs['password']) =>
      v.length <= length.password[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.password'),
        length: length.password[1],
      }),
    (v: SignupInputs['password']) =>
      strPatterns.password.test(v) ||
      i18n.t('validation.pattern', {
        attribute: i18n.t('attribute.password'),
      }),
  ],
  // パスワード: 必須, パスワードと一致
  password_confirmation: (compare: SignupInputs['password']) => [
    (v: SignupInputs['password_confirmation']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.password_confirmation'),
      }),
    (v: SignupInputs['password_confirmation']) =>
      strPatterns.confirm(compare).test(v) ||
      i18n.t('validation.confirmation', {
        attribute: i18n.t('attribute.password_confirmation'),
      }),
  ],
})

export const signinRule = (i18n: NuxtI18nInstance) => ({
  login_id: [
    (v: SigninInputs['login_id']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.login_id'),
      }),
  ],
  password: [
    (v: SigninInputs['password']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.password'),
      }),
  ],
})

export const forgotPasswordRule = (i18n: NuxtI18nInstance) => ({
  login_id: [
    (v: ForgotPasswordInputs['login_id']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.email'),
      }),
  ],
})

export const resetForgottenPasswordRule = (i18n: NuxtI18nInstance) => ({
  login_id: [
    (v: ResetForgottenPasswordInputs['login_id']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.email'),
      }),
  ],
  verification_code: [
    (v: ResetForgottenPasswordInputs['verification_code']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.verification_code'),
      }),
  ],
  password: [
    (v: ResetForgottenPasswordInputs['password']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.password'),
      }),
    (v: ResetForgottenPasswordInputs['password']) =>
      v.length >= length.password[0] ||
      i18n.t('validation.min', {
        attribute: i18n.t('attribute.password'),
        length: length.password[0],
      }),
    (v: ResetForgottenPasswordInputs['password']) =>
      v.length <= length.password[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.password'),
        length: length.password[1],
      }),
    (v: ResetForgottenPasswordInputs['password']) =>
      strPatterns.password.test(v) ||
      i18n.t('validation.pattern', {
        attribute: i18n.t('attribute.password'),
      }),
  ],
  password_confirmation: (
    compare: ResetForgottenPasswordInputs['password']
  ) => [
    (v: ResetForgottenPasswordInputs['password_confirmation']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.password_confirmation'),
      }),
    (v: ResetForgottenPasswordInputs['password_confirmation']) =>
      strPatterns.confirm(compare).test(v) ||
      i18n.t('validation.confirmation', {
        attribute: i18n.t('attribute.password_confirmation'),
      }),
  ],
})

export const accountVerificationRule = (i18n: NuxtI18nInstance) => ({
  login_id: [
    (v: AccountVerificationInputs['login_id']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.email'),
      }),
  ],
  verification_code: [
    (v: AccountVerificationInputs['verification_code']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.verification_code'),
      }),
  ],
})

export const resetPasswordRule = (i18n: NuxtI18nInstance) => ({
  old_password: [
    (v: PasswordResetInputs['old_password']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.old_password'),
      }),
  ],
  password: [
    (v: PasswordResetInputs['password']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.new_password'),
      }),
    (v: PasswordResetInputs['password']) =>
      v.length >= length.password[0] ||
      i18n.t('validation.min', {
        attribute: i18n.t('attribute.new_password'),
        length: length.password[0],
      }),
    (v: PasswordResetInputs['password']) =>
      v.length <= length.password[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.new_password'),
        length: length.password[1],
      }),
    (v: PasswordResetInputs['password']) =>
      strPatterns.password.test(v) ||
      i18n.t('validation.pattern', {
        attribute: i18n.t('attribute.new_password'),
      }),
  ],
  password_confirmation: (compare: PasswordResetInputs['password']) => [
    (v: PasswordResetInputs['password_confirmation']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.new_password_confirmation'),
      }),
    (v: PasswordResetInputs['password_confirmation']) =>
      strPatterns.confirm(compare).test(v) ||
      i18n.t('validation.confirmation', {
        attribute: i18n.t('attribute.new_password_confirmation'),
      }),
  ],
})

export const profileRule = (i18n: NuxtI18nInstance) => ({
  // 姓: 必須, 最大128文字
  family_name: [
    (v: ProfileInputs['family_name']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.family_name'),
      }),
    (v: ProfileInputs['family_name']) =>
      v.length <= length.default[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.family_name'),
        length: length.default[1],
      }),
  ],
  // セイ: 必須, カタカナ, 最大128文字
  family_name_kana: [
    (v: ProfileInputs['family_name']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.family_name'),
      }),
    (v: ProfileInputs['family_name_kana']) =>
      strPatterns.katakana.test(v) ||
      i18n.t('validation.pattern', {
        attribute: i18n.t('attribute.family_name_kana'),
      }),
    (v: ProfileInputs['family_name_kana']) =>
      v.length <= length.default[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.family_name_kana'),
        length: length.default[1],
      }),
  ],
  // 名: 必須, 最大128文字
  given_name: [
    (v: ProfileInputs['given_name']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.given_name'),
      }),
    (v: ProfileInputs['given_name']) =>
      v.length <= length.default[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.given_name'),
        length: length.default[1],
      }),
  ],
  // メイ: 必須, カタカナ, 最大128文字
  given_name_kana: [
    (v: ProfileInputs['given_name']) =>
      !!v ||
      i18n.t('validation.required', {
        attribute: i18n.t('attribute.given_name'),
      }),
    (v: ProfileInputs['given_name_kana']) =>
      strPatterns.katakana.test(v) ||
      i18n.t('validation.pattern', {
        attribute: i18n.t('attribute.given_name_kana'),
      }),
    (v: ProfileInputs['given_name_kana']) =>
      v.length <= length.default[1] ||
      i18n.t('validation.max', {
        attribute: i18n.t('attribute.given_name_kana'),
        length: length.default[1],
      }),
  ],
  // 顔写真: 最大5MB
  file: [
    (v: ProfileInputs['file']) =>
      !v ||
      v.size < MAX_IMAGE_SIZE ||
      i18n.t('validation.imageSize', {
        attribute: i18n.t('attribute.image'),
        size: MAX_IMAGE_SIZE / 1000000,
      }),
  ],
})
