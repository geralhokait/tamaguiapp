import { styled, YStack } from 'tamagui'

export const CustomYStack = styled(YStack, {
  name: 'MyComponent',
  backgroundColor: 'red',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
})
