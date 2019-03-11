import React from 'react';
import {shallow} from 'enzyme';
import Body from '../Body';

describe('BodyTest', () => {
    let wrapper;

    beforeEach(() => {
        console.log('Before Each ');
        wrapper = shallow(<Body/>);
    });

    it('render without crahsing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('renders children when passed in', () => {
        const wrapper = shallow((<Body>
        <div className="unique"></div>
        </Body>));
        expect(wrapper.contains(<div className="unique"></div>)).toEqual(true);
    })

})