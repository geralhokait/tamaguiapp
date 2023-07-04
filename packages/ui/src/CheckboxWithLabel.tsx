import { Check as CheckIcon } from '@tamagui/lucide-icons'
import { Checkbox, Label, SizeTokens, XStack } from 'tamagui'

export function CheckboxWithLabel(props: { size: SizeTokens; defaultChecked?: boolean; checkboxLabel: string; }) {
  const id = `checkbox-${props.size.toString().slice(1)}`
  return (
    <XStack width={300} alignItems="center" space="$4">
      <Checkbox id={id} size={props.size} defaultChecked={props.defaultChecked}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={props.size} htmlFor={id}>
        {props.checkboxLabel}
      </Label>
    </XStack>
  )
}