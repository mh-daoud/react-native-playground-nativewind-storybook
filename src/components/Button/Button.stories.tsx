import type { Meta, StoryObj } from '@storybook/react';
import Button from './';
import StyledText from '../StyledText';

const ComponentMeta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {
        onPress: { action: 'pressed the button' },
    },
    args: {
        children: <StyledText>Hello Nopa</StyledText>,
    },
};

export default ComponentMeta;

export const Basic: StoryObj<typeof Button> = {};
export const RoundedButton: StoryObj<typeof Button> = {
    args: {
        ...ComponentMeta.args,
        fullRounded: true
    }
};

// export const AnotherExample: StoryObj<typeof MyButton> = {
//   args: {
//     text: 'Another example',
//   },
// };
