import ActionsGenerator from '../actions/actions-generator'
import ActionTypes from '../actions/action-types'

const formatKey = name => `grapple:${name}`

const set = (key, value) => window.localStorage.setItem(formatKey(key), value)

const get = key => window.localStorage.getItem(formatKey(key))

const remove = key => window.localStorage.removeItem(formatKey(key))

const Keys = {
    SELECTED_PROJECT: 'selected-project'
}


export default ({dispatch}) => next => action => {
    const res = next(action)

    switch(action.type) {
        case ActionTypes.INITIALIZE:
            const selected = get(Keys.SELECTED_PROJECT)
            if(selected) dispatch(ActionsGenerator.selectProject(selected))
            break

        case ActionTypes.SELECT_PROJECT:
            set(Keys.SELECTED_PROJECT, action.uid)
            break

        case ActionTypes.ON_PROJECTS:
            const cursel = get(Keys.SELECTED_PROJECT)
            if(!action.projects || !action.projects.hasOwnProperty(cursel))
                remove(Keys.SELECTED_PROJECT)
            break
    }

    return res
}
