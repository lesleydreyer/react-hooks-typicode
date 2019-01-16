import { useEffect, useState } from 'react';
import axios from 'axios';

//custom hook to reuse between components
const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    }

    useEffect(() => {
        fetchResource(resource);//can't do async in useEffect unless you wrap in an inner function or call a separate function
    }, [resource]);//if you click on posts or todos twice then it doesn't run, it only runs if the [resource] value (todos/posts) has changed
    //useEffect(()=>{}) if you  don't pass in the second argument ([resource]) you'll spam the api server cuz it will keep making api calls
    //useEffect(()=>{},[]) if you call this twice, it will only run the first call
    //useEffect(()=>{},[1]) if you call this twice, it will only run the first call
    //useEffect(()=>{},['hi']) then useEffect(()=>{},[1]) both are run
    //useEffect(()=>{},[{color: ;red'}]) if you call this twice, both will run because objects are not diff objects cuz they are not like other variables
    //useEffect(()=>{},[10, 10]) if you call this twice, it will only run the first call
    //useEffect(()=>{},[10, 10]) and useEffect(()=>{},[10]) both are run

    return resources;
}

export default useResources;