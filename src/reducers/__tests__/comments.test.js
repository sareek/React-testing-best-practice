import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

//For testing reducers all we have to do is call the reducer
//pass in some fake action and then make an assertion
//or an expectation around the value the reducer returns


it('handles actions of type SAVE_COMMENT', () => {
const action = {
    type: SAVE_COMMENT,
    payload:'New Comment'
}
 
 const newState = commentsReducer([], action);

 expect(newState).toEqual(['New Comment'])

})

it('habdles action with unknown type', () => {
    const newState = commentsReducer([], {type:'SARIKE'})
    expect(newState).toEqual([])
})