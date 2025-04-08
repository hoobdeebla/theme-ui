import {
  type ComponentPropsWithRef,
  type ReactElement,
  forwardRef,
} from 'react'

import { get, type ThemeUICSSObject } from '@theme-ui/css'

import { Box, type BoxOwnProps, type BoxProps } from './Box'
import { SVG, type SVGProps } from './SVG'
import { getMargin, omitMargin, __internalProps } from './util'
import type { Assign, ForwardRef } from './types'

const DownArrow = (props: SVGProps) => (
  <SVG {...props}>
    <path d="M7 10l5 5 5-5z" />
  </SVG>
)

export interface SelectProps
  extends Assign<ComponentPropsWithRef<'select'>, BoxOwnProps> {
  arrow?: ReactElement
}

/**
 * Select variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.select` variant by default.
 * @see https://theme-ui.com/components/select/
 */
export const Select: ForwardRef<HTMLSelectElement, SelectProps> = forwardRef(
  function Select({ arrow, ...props }, ref) {
    const __css: ThemeUICSSObject = {
      display: 'block',
      width: '100%',
      p: 2,
      paddingRight: 4,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 4,
      color: 'inherit',
      backgroundColor: (theme) => get(theme, 'colors.background', null),
    }

    return (
      <Box
        {...getMargin(props)}
        sx={{
          display: 'flex',
        }}
      >
        <Box
          ref={ref}
          as="select"
          variant="select"
          {...(omitMargin(props) as BoxProps)}
          {...__internalProps({ __themeKey: 'forms', __css })}
        />
        {arrow || (
          <DownArrow
            sx={{
              ml: -28,
              alignSelf: 'center',
              pointerEvents: 'none',
            }}
          />
        )}
      </Box>
    )
  }
)
