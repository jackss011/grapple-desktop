import React from 'react'

class AddProjectForm extends React.Component {
    render() {
        return (
            <form className="add-project-form" onSubmit={e => this.onSubmit(e)}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Description"/>

                <div>
                    <input type="submit" className="add" value="Add"/>
                    <input type="button" className="cancel" value="Cancel"/>
                </div>
            </form>
        )
    }

    onSubmit(e) {
        console.log(e)
    }
}

export default AddProjectForm