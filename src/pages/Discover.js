import React, { Component } from 'react';
import API from '../utils/API';
import Card from '../components/Card';
import Alert from '../components/Alert';

class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            match: false,
            matchCount: 0
        }
    }

    componentDidMount() {
        this.loadNextDog();
    }

    loadNextDog = () => {
        API.getRandomDog()
            .then(res =>
                this.setState({
                    image: res.data.message
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return(
            <div>
                <h1 className="text-center">Make New Friends!</h1>
                <h3 className="text-center">Thumbs up on any pups you'd like to meet!</h3>
                <Card image={this.state.image} />
                <h1 className="text-center">
                    Made friends with {this.state.matchCount} pups so far!
                </h1>
                <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
                    Yay! That pup liked you too!
                </Alert>
            </div>
        );
    }
}

export default Discover;