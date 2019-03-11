import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('FooterTest',()=>{

    let wrapper;

    beforeEach(() => {
        console.log('Before Each ');
        wrapper = shallow(<Footer/>);
    });

    it('render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
})