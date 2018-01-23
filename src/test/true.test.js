import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon, { spy } from 'sinon';
import SignUpForm from '../components/forms/SignUpForm';

/*describe('a passing test', () => {
    it('should pass', () => {
        expect(true).to.be.true;
    });
});*/
describe('<SignUpForm />', () => {
    let loginSpy = spy();
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SignUpForm submit={loginSpy} />);
    })
    it('renders one <SignUpForm/> components', () => {
        expect(wrapper.find('Form')).to.have.length(1);
    });
    it('renders four input <SignUpForm/>', () => {
        expect(wrapper.find('Form input')).to.have.length(4);
    });
    it('renders one select <SignUpForm/>', () => {
        expect(wrapper.find('Form select')).to.have.length(1);
    });

})
describe('Calendar in SignUpForm', () => {
    let loginSpy = spy();
    let wrapper = mount((<SignUpForm submit={loginSpy} />))
    it('renders one calendar <SignUpForm/>', () => {
        expect(wrapper.find('div.Cal__Container__root')).to.have.length(1);
    });
})

describe('Submit in SignUpForm', () => {
    let onSubmit = sinon.spy();
    let wrapper = mount((<SignUpForm submit={onSubmit} />))
    //console.log(wrapper.debug());
    it('button <SignUpForm/>', () => {
        //expect(wrapper.find('button')).to.have.length(1);
        const button = wrapper.find('button');
        expect(button.text()).to.equal("Log In");
    });
    it('simulates click <SignUpForm/>', () => {
        const button = wrapper.find('button');
        button.simulate('submit');
        expect(onSubmit.calledOnce).to.equal(true);
    });
})


