import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {

	 constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('./api/users')
            .then(response => {
            	//console.log(response.json());
                return response.json();
            })
            .then(users => {
                this.setState({ users });
            });
    }

    renderUsers() {
        return this.state.users.map(user => {
            return (
                <tr>
                    <td>{ user.id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                </tr>
            );
        })
    }
    render() {
        return (
            <div>
                <h1>Hello,{window.name }</h1>
                <p>Here are the people using your application...</p>
                <table className="table">
                    <thead>
                        <tr key={this.state.users.id} >
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.renderUsers() }
                    </tbody>
                </table>
               
            </div>
        );
    }
}

export default Example;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}