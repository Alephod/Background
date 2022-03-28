import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Burger } from '../../components/burger/Burger';
import './Burger.scss';


export default {
    title: 'Header/Burger',
    component: Burger,
} as ComponentMeta<typeof Burger>;

const Template: ComponentStory<typeof Burger> = (args) => (
    <div className='burger-div'>
        <Burger {...args} />
    </div>
);

export const Close: any = Template.bind({});
Close.args = {
    type: 'close'
};

export const Open: any = Template.bind({});
Open.args = {
    type: 'open'
};
