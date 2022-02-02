import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../components/header/Header';


export default {
    title: 'Header/',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
    <div className='burger-div'>
        <Header {...args} />
    </div>
);

export const Close: any = Template.bind({});
Close.args = {
};

export const Open: any = Template.bind({});
Open.args = {
};
