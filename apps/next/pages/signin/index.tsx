import { SignInScreen } from 'app/features/auth/signin-screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignInScreen />
    </>
  )
}
