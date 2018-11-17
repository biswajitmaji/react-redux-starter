import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
    let props = {
        course: {},
        // allAuthors: React.PropTypes.array,
        onSave: () => {},
        onChange: () => {},
        saving: saving,
        errors: {}
    };

    return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
    it('Renders form and h1', () => {
        const Wrapper = setup(false);
        expect(Wrapper.find('form').length).toBe(1);
        expect(Wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" whern not saving', () => {
        const Wrapper = setup(false);
        expect(Wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." whern saving', () => {
        const Wrapper = setup(true);
        expect(Wrapper.find('input').props().value).toBe('Saving...');
    });

});