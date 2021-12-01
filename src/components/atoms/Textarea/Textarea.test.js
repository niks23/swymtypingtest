import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Textarea from './Textarea';

it("renders correctly", () => {
    const { queryByPlaceholderText } = render(<Textarea />)
    expect(queryByPlaceholderText('Start Typing...')).toBeTruthy();
})

describe("textarea Value", () => {
    it("update on change", () => {
        const { queryByPlaceholderText } = render(<Textarea />)

        const textarea = queryByPlaceholderText('Start Typing...')

        fireEvent.change(textarea, { target: { value: "test" } })

        expect(textarea.value).toBe("test");
    })
})