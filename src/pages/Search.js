// We will need to make a API call to retrieve all dogs available
// We will need a search bar and have our results loaded
import React, {  Component } from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Alert from '../components/Alert';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            breeds: [],
            results: []
        }
    }

        componentDidMount() {
            API.getBaseBreedsList()
                .then(res => this.setState({ breeds: res.data }))
                .catch(err => console.log(err));
        }

        handleInputChange = event => {
            this.setState({ search: event.target.value });
        };

        handleFormSubmit = event => {
            event.preventDefault();
            API.getDogsOfBreed(this.state.search)
                .then(res => {
                    if (res.data.status === "error") {
                        throw new Error(res.data.message);
                    }
                    this.setState({ results: res.data.message, error: "" });
                })
                .catch(err => this.setState({ error: err.message }));
        };

        render() {
            return (
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Search By Breed!</h1>
                    <Alert 
                        type="danger"
                        style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
                    >
                      {this.state.error}    
                    </Alert>
                    <SearchForm 
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange ={this.handleInputChange}
                        breeds={this.state.breeds}
                    />
                    <SearchResults />
                </Container>
            );
        }
    }

export default Search;