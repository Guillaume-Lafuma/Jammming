import React , {useState , useCallback} from 'react';

const  SearchBar = (props) => {

    const [term, setTerm] = useState('');

    const searchTerm = useCallback((e) => {
        setTerm(e.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props, term]) ;

    return (
        <div>
            <h1>SearchBar</h1>
            <form>
                <input id="search" placeholder="Enter a song name" type="text" onChange={searchTerm}/>
                <button onClick={search}>Search</button>
                <h3>{term}</h3>
            </form>

        </div>
        )
} 

export default SearchBar ;