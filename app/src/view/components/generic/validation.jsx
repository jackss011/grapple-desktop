import React from 'react'

import {pick} from '~/model/utils'


export class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {error: '', dirty: false}
    }

    render() {
        let visualError = this.state.dirty && this.state.error

        return (
            <div className="validator">
                <input
                    className={visualError ? 'invalid' : ''}
                    value={this.props.value}
                    onChange={({target}) => this.onChange(target.name, target.value)}
                    {...pick(this.props, 'name', 'type')}
                />
                <div className="label">{visualError}</div>
            </div>
        )
    }

    onChange(name, value) {
        let error = this.props.validator && this.props.validator(value)
        this.setState({error})
        if(value !== '') this.setState({dirty: true})
        this.props.onChange({name, value, valid: error == null})
    }

    componentDidMount() {
        this.onChange(this.props.name, '')
    }
}


export class Form extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <form
                name={this.props.name || ''}
                className={this.props.className || ''}
                onSubmit={e => this.onSubmit(e)}
            >
                {this.makeChildren()}
            </form>
        )
    }

    isInputChild(child) {
        return child.type === Input
    }

    getInputValue(name) {
        return this.state.hasOwnProperty(name)
            ? this.state[name].value
            : null
    }

    makeChildren() {
        return React.Children.map(this.props.children, child => {
            if(!this.isInputChild(child)) return child

            return React.cloneElement(child, {
                value: this.getInputValue(child.props.name),
                onChange: c => this.onChildChange(c)
            })
        })
    }

    onChildChange({name, value, valid}) {
        this.setState({ [name]: {value, valid} })
    }

    hasValidInput() {
        return Object.entries(this.state)
            .reduce((res, [,{valid}]) => res && valid, true)
    }

    getDataPack() {
        return Object.entries(this.state)
            .reduce((res, [name, {value}]) => {
                res[name] = value
                return res
            }, {})
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit && this.props.onSubmit(this.getDataPack())
    }
}
