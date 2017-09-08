import React from 'react'


/*React Submit component
Renders an html input[type=submit]. It is disabled automatically if at least one
input is not valid.
Button text can be set as a child string. .i.e <Submit>Send the stuff!</Submit>
*/
export class Submit extends React.Component {
    render() {
        return (
            <input
                type="submit"
                value={React.Children.toArray(this.props.children)[0]}
                disabled={this.props.disabled}
            />
        )
    }
}



/* React Input component
props:
    - validator: a validator function, if null or undefined the input is always valid
    (every other prop despite value, onChange is passed to the html input)

The validator function return a string if the input value is not valid.
If the input is not valid and the value has been modified (is dirty) an error-label
is displayed with the return value of the error function.
*/
export class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {error: '', dirty: false}
        this.inputTag="input"
    }

    render() {
        let {className, onChange, value, validator, ...nativeProps} = this.props
        let displayError = this.state.dirty && this.state.error

        const input = (
            <this.inputTag
                className={displayError ? 'invalid' : ''}
                value={this.props.value}
                onChange={({target}) => this.onChange(target.name, target.value)}
                {...nativeProps}
            />
        )

        if(!this.props.validator) return input

        return (
            <div className="input-validation">
                {input}
                <div className="error-label">{displayError}</div>
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



/* React TextArea component
(same of Input, just renders a different html tag)
*/
export class TextArea extends Input {
    constructor(props) {
        super(props)

        this.inputTag = 'textarea'
    }
}



/* React Form component
props
    - onSubmit(datapack): callback fired when the user click the Submit component
        - datapack: object, each entry is a pair name->value of an Input in the Form
    - className (passed to html form)
    - name (passed to html form)
*/
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
        //console.log('making for:', parent)
        if(!parent.props) return null

        return React.Children.map(parent.props.children, child => {
            //console.log('child is:', child)
            switch(child.type) {
                case Input:
                case TextArea:
                    return this.makeInput(child)

                case Submit:
                    return this.makeSubmit(child)

                case 'div':
                    return this.makeElement(child)

                default:
                    return child
            }
        })
    }

    makeElement(element) {
        return React.cloneElement(element, {}, this.makeChildren(element))
    }

    makeNativeInput(native) {
        return React.cloneElement(native, {
            value: this.getInputValue(native.props.name),
            onChange: c => this.onChildChange(c)
        })
    }

    makeInput(input) {
        return React.cloneElement(input, {
            value: this.getInputValue(input.props.name),
            onChange: c => this.onChildChange(c)
        })
    }

    makeSubmit(submit) {
        return React.cloneElement(submit, {
            disabled: !this.hasValidInput()
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
        //console.log(this.getDataPack());
        if(this.hasValidInput())
            this.props.onSubmit && this.props.onSubmit(this.getDataPack())
    }
}
