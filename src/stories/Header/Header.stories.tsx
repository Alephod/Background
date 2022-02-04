import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../components/header/Header';
import { BrowserRouter, Switch } from 'react-router-dom';
import './../../App.scss';


export default {
    title: 'Header/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
    <BrowserRouter>
        <Switch>
            <Header {...args} />
        </Switch>
    </BrowserRouter>
);

export const Logged: any = Template.bind({});
Logged.args = {
};
