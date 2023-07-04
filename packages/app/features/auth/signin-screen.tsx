import {
    H1,
    YStack,
    TextInput,
    Text,
    CheckboxWithLabel,
    Button,
    XStack
} from "@my/ui"
import React from "react"
  
export function SignInScreen() {
    return (
      <YStack f={1} jc="center" ai="center" p="$4" space>
        <YStack width={326}>
          <H1 ta="left">Login</H1>
        </YStack>
        <YStack marginTop="$4" space="$2" width={326}>
            <Text color="#989ca3">Email</Text>
            <TextInput placeholder="Email Address"/>
        </YStack>
        <YStack marginTop="$4" space="$2" width={326}>
            <Text color="#989ca3">Password</Text>
            <TextInput placeholder="Password"/>
        </YStack>
        <YStack>
            <CheckboxWithLabel size="$4" checkboxLabel="Remember me"/>
        </YStack>
        <Button marginTop="$2" width={326} backgroundColor="#B80B22" color="white" fontWeight={"700"}>Login</Button>
        <XStack jc="flex-start" width={326}>
            <Text>Don’t have an account?&nbsp;</Text>
            <Text color="#4287f5">Sign Up</Text>
        </XStack>
      </YStack>
    )
}
  