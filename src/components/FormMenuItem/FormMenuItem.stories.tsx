import type { Meta, StoryObj } from '@storybook/react'
import { FormMenuItem } from ".";
import { View } from 'react-native';

const ComponentMeta: Meta<typeof FormMenuItem> = {
    title: "FormMenuItem",
    component: FormMenuItem,
    argTypes: {
        onPress: { action: 'button pressed' }
    },
    args: {
        title: 'My Bills (2)',
        withDiscloserIcon: true
    },
    decorators: [
        (Story) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, paddingHorizontal: 20, backgroundColor: '#eee' }}>
                <View style={{ backgroundColor: '#fff', paddingVertical: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, borderRadius: 12 }}>
                    <Story />
                </View>
            </View>
        ),
    ]
}

export default ComponentMeta

export const Basic: StoryObj<typeof FormMenuItem> = {}