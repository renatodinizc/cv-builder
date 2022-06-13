import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import toBeInTheDocument from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Item from './Item';

describe('Item', () => {
    it('renders input fild when clicked', () => {
        render(<Item defaultValue='First Name' tag='h2' />);

        const button = screen.getByRole('heading');

        userEvent.click(button);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('updates value of title when user keys down', () => {
        const wrapper = <Item defaultValue='First Name' tag='h2' />
        render(wrapper);

        const button = screen.getByRole('heading');

        userEvent.click(button);
        const input = screen.getByRole('textbox');
        userEvent.type(input, 'Renato');
        expect(input.value).toEqual('First NameRenato');
    });

    it('updates value of title when user keys down WITH ASYNC', async () => {
        const handleChange = jest.fn();
        const wrapper = <Item defaultValue='First Name' tag='h2' />
        render(wrapper);

        const button = screen.getByRole('heading');

        await userEvent.click(button);

        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'Renato');

        expect(handleChange).toHaveBeenCalledTimes(6);

        //await userEvent.keyboard('{Enter}');

    });
});

