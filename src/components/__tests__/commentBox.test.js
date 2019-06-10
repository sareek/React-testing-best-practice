import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'


let wrapped

beforeEach(() => {
    wrapped = mount(
    <Root>
     <CommentBox />
    </Root>
     )
})

afterEach(() => {
    //for memory optimization
    wrapped.unmount()
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', () => {

beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    }); 
    wrapped.update();
})    

it('has a text area that user can type in',() => {
   
 //wrapped.update(); //forces the component to update so that we are sure that the new mock value we provided to the text area is supplied
  //we are going to pull a prop off textarea element and make sure we pass the correct prop
 expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
})

it('clears a text area on submit', () => {

   // wrapped.update();
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('')
})

})