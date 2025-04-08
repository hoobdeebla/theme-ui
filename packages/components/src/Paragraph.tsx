import { type ComponentPropsWithRef, forwardRef } from 'react'

import { Box, type BoxOwnProps } from './Box'
import type { Assign, ForwardRef } from './types'
import { __internalProps } from './util'

export interface ParagraphProps
  extends Assign<ComponentPropsWithRef<'p'>, BoxOwnProps> {}

/**
 * Primitive typographic component.
 *
 * Text style variants can be defined in the theme.text object.
 * The Paragraph component uses theme.text.paragraph as its default variant style.
 * @see https://theme-ui.com/components/paragraph
 */
export const Paragraph: ForwardRef<HTMLParagraphElement, ParagraphProps> =
  forwardRef(function Paragraph(props, ref) {
    return (
      <Box
        ref={ref}
        as="p"
        variant="paragraph"
        {...props}
        {...__internalProps({
          __themeKey: 'text',
          __css: {
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
          },
        })}
      />
    )
  })
