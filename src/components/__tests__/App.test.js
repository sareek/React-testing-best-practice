import React from 'react';
//import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList'
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';


//helper function provided by jest BeforeEach
let wrapped;

beforeEach(() => {
     wrapped = shallow(<App />);
});

it('shows a comment box', () => {
//   const div = document.createElement('div'); 
  /*it is not actually creating a div inside a browser but it is making use of jsdom 
  library to create a fake div that exist solely inside a memory inside a terminal
 */
  
 // ReactDOM.render(<App />, div);

  // Looks inside the div
  //and checks to see if the commentbox is in there
  //console.log(div.innerHTML)

 // expect(div.innerHTML).toContain('Comment Box')
    // expect(div).toHaveAnInstanceOf(CommentBox);

 // ReactDOM.unmountComponentAtNode(div);
  //look at div find App component inside a div and remove that App component completely;
  // so basically it does clean up for optimised performance
  
  /*................................................................ */

//   const wrapped = shallow(<App />);

   expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('shows a comment box', () => {
    // const wrapped = shallow(<App />);
   expect(wrapped.find(CommentList).length).toEqual(1);

})