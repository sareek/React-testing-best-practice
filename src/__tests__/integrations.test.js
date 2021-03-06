import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'


beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{name:'Sarik lives in Bhaktapur'}, {name: 'He likes Pokhara'}]
  })
})

afterEach(() => {
 moxios.uninstall()
})


it('can fetch a list of comments and display them', (done) => {
    //attempt to render the entire app

    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    //find the fethComments button and click it
 
    wrapped.find('.fetch-comments').simulate('click')
      
    moxios.wait(() => {
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        done();
        wrapped.unmount();
    })
    // setTimeout(() => {
    //   wrapped.update()
    //   expect(wrapped.find('li').length).toEqual(2)
    //   done();
    //   wrapped.unmount();
    // }, 100)
    //Expect to find a list of comments
     
})