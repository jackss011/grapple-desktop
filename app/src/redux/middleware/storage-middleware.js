import ActionsGenerator from '../actions/actions-generator'
import ActionTypes from '../actions/action-types'

const formatKey = name => `grapple:${name}`


export default ({dispatch}) => next => action => {
    const res = next(action)

    switch(action.type) {
        case ActionTypes.INITIALIZE:
            const selected = window.localStorage.getItem(formatKey('selected-project'))
            if(selected) dispatch(ActionsGenerator.selectProject(selected))
            break

        case ActionTypes.SELECT_PROJECT:
            window.localStorage.setItem(formatKey('selected-project'), action.uid)
            break
    }

    return res
}
