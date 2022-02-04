import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from '../../components/slider/Slider';

export default {
    title: 'Slider',
    component: Slider,
    parameters: {
        actions: {
            handles: ['adasdadas .slider__prev'],
        },
    },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
    <Slider {...args} />
);
export const DefaultSetting: any = Template.bind({});
DefaultSetting.args = {
    sliderInterval: 10000,
    sliderAnimTime: 800,
    images: [
        { id: 0, href: './img/slider/1.jpg' },
        { id: 1, href: './img/slider/2.png' },
        { id: 2, href: './img/slider/3.jpg' },
        { id: 3, href: './img/slider/4.jpg' }
    ]
};
