import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Profile } from '../../components/profile/Profile';
import { BrowserRouter } from 'react-router-dom';
import './Profile.scss';

export default {
    title: 'Header/Profile',
    component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
    <BrowserRouter>
        <Profile {...args} />
    </BrowserRouter>
);

export const HasntItems : any = Template.bind({});
HasntItems.args = {
    cartCount: 0
};

export const HasItems: any = Template.bind({});
HasItems.args = {
    cartCount: 1
};
