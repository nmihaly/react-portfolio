import React from 'react';
import { render, cleanup  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

//renders About test
describe('About component', () => {
    // First Test
    it('render', () => {
        render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})