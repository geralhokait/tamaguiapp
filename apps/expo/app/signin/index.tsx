import { SignInScreen } from 'app/features/auth/signin-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sign In',
        }}
      />
      <SignInScreen />
    </>
  )
}
