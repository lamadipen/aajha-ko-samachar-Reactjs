import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';
//import sinon from 'sinon';


describe.skip('HomeTest',() => {
    let wrapper;

    beforeEach(() => {
        console.log("Before Each");
        wrapper = shallow(<Home />);
    });

    it("renders without crashing", () =>{
       expect(wrapper).toMatchSnapshot();
    });

    it("renders children read more", () => {
        expect(wrapper.find('#readMore').length).toBe(1);
    });
    //fit is focused test only run this test
    //fit("find an html element exist by id", () => {
        // expect(wrapper.get).toEqual();
        // expect(wrapper).toMatch("#readMore");
        //expect(wrapper).toContainMatchingElement('#readMore');
        //expect(wrapper.find('div')).toExist();
        // expect(wrapper.props.children).toEqual([
        //     <span className="heading">Title</span>,
        //     <Subcomponent foo="bar" />
        // ])
        //expect(wrapper.find('#readMore')).toBeChecked();
    //});

    it('allows us to set props', () => {
        const wrapper = shallow(<Home foo="foo"/>);
        expect(wrapper.props().bar).to.equal("foo");
        wrapper.setProps({ foo: 'bar' });
        expect(wrapper.props().foo).to.equal('bar');

    });

    fit('simulates click events', () => {
        const buttonClick = jest.fn();
        wrapper = shallow(<Home invokeMe={buttonClick} />)
        expect(buttonClick).not.toHaveBeenCalled();
        wrapper.find("button").at(0).simulate("click");
        expect(buttonClick).toHaveBeenCalled();

    })



    it("find an html element exist by id", () => {
        expect(wrapper.find().length).toEqual(1);
    });

    describe('event test', () => {
        it('', () => {
            expect(wrapper.instance.state.title).toEqual("Here");
            wrapper.instance().sum();
        })

        it('button click',() => {
            const handleClickMock = jest.fn();
            wrapper.instance().handleClick = handleClickMock;
            expect(handleClickMock).not.toHaveBeenCalled();
            wrapper.find('#buttonGo').simulate("click");
            expect(handleClickMock).toHaveBeenCalledWith(23);
        })
    })






});