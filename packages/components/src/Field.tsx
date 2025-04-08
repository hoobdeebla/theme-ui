import {
  type ElementType,
  type ComponentPropsWithRef,
  type ComponentType,
  type ForwardedRef,
  type JSX,
  forwardRef,
} from 'react'

import { Box } from './Box'
import { Label } from './Label'
import { Input, type InputProps } from './Input'
import { getMargin, type MarginProps, omitMargin } from './util'

export interface FieldOwnProps extends MarginProps {
  /**
   * Text for Label component
   */
  label?: string
  /**
   * Used for the for, id, and name attributes
   */
  name?: string
}

export type FieldProps<T extends ElementType> = FieldOwnProps &
  Omit<ComponentPropsWithRef<T>, 'as' | keyof FieldOwnProps> & {
    /**
     * form control to render, default Input
     */
    as?: T
  }

export interface Field {
  <T extends ElementType = ComponentType<InputProps>>(
    props: FieldProps<T>
  ): JSX.Element
}

export const Field = forwardRef(function Field<
  T extends ElementType = ComponentType<InputProps>,
>(
  {
    // if somebody specifies the generic parameter without passing `as` prop, they get Input anyway
    as: Control = Input as any as T,
    label,
    id,
    name,
    ...rest
  }: FieldProps<T>,
  ref: ForwardedRef<unknown>
) {
  const fieldIdentifier = id || name

  const controlProps = {
    ref,
    name,
    id: fieldIdentifier,
    ...omitMargin(rest),
  } as ComponentPropsWithRef<T>

  return (
    <Box {...getMargin(rest)}>
      <Label htmlFor={fieldIdentifier}>{label}</Label>
      <Control {...controlProps} />
    </Box>
  )
}) as Field // Field is generic bcs of `as` prop, so we can't just use types from forwardRef
