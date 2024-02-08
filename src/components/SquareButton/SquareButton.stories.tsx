import type { Meta, StoryObj } from '@storybook/react';
import SquareButton from '.';
import StyledText from '../StyledText';

const ComponentMeta: Meta<typeof SquareButton> = {
    title: "SquareButton",
    component: SquareButton,
    argTypes: {
        onPress: { action: 'button pressed' }
    },
    args: {
        title: 'Testing',
        iconName: 'something',
        className: 'w-1/2'
    }
}

export default ComponentMeta;
export const Basic: StoryObj<typeof SquareButton> = {};
