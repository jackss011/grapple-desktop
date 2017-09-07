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
                {this.makeChildren(this)}
            </form>
        )
    }

    getInputValue(name) {
        return this.state.hasOwnProperty(name)
            ? this.state[name].value
            : null
    }

    makeChildren(parent) {
        console.log('making for:', parent)
        if(!parent.props) return null

        return React.Children.map(parent.props.children, child => {
            console.log('child is:', child);
            switch(child.type) {
                case Input: return this.makeInput(child)
                case 'div': return this.makeElement(child)
                default: return child
            }
        })
    }

    makeElement(element) {
        return React.cloneElement(element, {}, this.makeChildren(element))
    }

    makeInput(input) {
        return React.cloneElement(input, {
            value: this.getInputValue(input.props.name),
            onChange: c => this.onChildChange(c)
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
        if(this.hasValidInput())
            this.props.onSubmit && this.props.onSubmit(this.getDataPack())
    }
}