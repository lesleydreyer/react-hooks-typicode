import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);
    return (
        <div>
            <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
        </div>
    )
}

export default ResourceList;

/*same thing as class based instead of hooks
class ResourceList extends React.Component {
    state = { resources: [] };

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({ resources: response.data });
    }

    async componentDidUpdate(prevProps) {
        //have to do prevprops and if otherwise will keep making api calls
        if (prevProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({ resources: response.data });
        }
    }

    render() {
        return (
            <div>
                {this.state.resources.length}
            </div>
        )
    }
}
*/