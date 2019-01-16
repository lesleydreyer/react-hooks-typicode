import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resource, setResource] = useState('posts');//array destructuring, resource is value, setResource is functionname, useState is hook (built in function)

    return (
        <div><UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
}

export default App;


/*how you would do it with state instead
class App extends Component {
    state = { resource: 'posts' };

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.setState({ resource: 'posts' })}>Posts</button>
                    <button onClick={() => this.setState({ resource: 'todos' })}>Todos</button>
                </div>
                {this.state.resource}
            </div>
        );
    }
}*/