import React from 'react';
import shallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
test('testing shallow renderer', ()=>{
    const renderer = new shallowRenderer();
    renderer.render(<Header/>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
})