import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
    title: 'Example/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn: any = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut: any = Template.bind({});
LoggedOut.args = {};
