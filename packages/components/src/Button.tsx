import {
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
  type ComponentPropsWithRef,
  type Ref,
} from 'react'

import { Box as _Box, type BoxOwnProps, type BoxProps } from './Box'
import type { Assign, ForwardRef } from './types'
import { __internalProps } from './util'

const Box = _Box as ForwardRefExoticComponent<
  BoxProps & RefAttributes<HTMLButtonElement>
>

export interface ButtonProps
  extends Assign<ComponentPropsWithRef<'button'>, BoxOwnProps> {}
/**
 * Primitive button component with variants
 * @see https://theme-ui.com/components/button
 */
export const Button: ForwardRef<HTMLButtonElement, ButtonProps> = forwardRef(
  function Button(props, ref) {
    return (
      <Box
        ref={ref as Ref<HTMLButtonElement>}
        as="button"
        variant="primary"
        {...(props as BoxProps)}
        {...__internalProps({
          __themeKey: 'buttons',
          __css: {
            appearance: 'none',
            display: props.hidden ? undefined : 'inline-block',
            textAlign: 'center',
            lineHeight: 'inherit',
            textDecoration: 'none',
            fontSize: 'inherit',
            px: 3,
            py: 2,
            color: 'white',
            bg: 'primary',
            border: 0,
            borderRadius: 4,
          },
        })}
      />
    )
  }
)
