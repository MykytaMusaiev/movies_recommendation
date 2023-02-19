import React from 'react';
import { ConfirmModal } from '../components';


export default {
    title: 'ConfirmModal component',
    component: ConfirmModal,
};

const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    open: true,
    title: 'My favorite movies',
    url: 'http://localhost:3000/recommend?title=myList&ids=123,246,369',
    onClose: () => {},
    moviesCount: 3
};