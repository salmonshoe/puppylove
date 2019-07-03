import axios from "axios";

// By exporting an object, we can pass methods to call the Dog.Ceo API

export default {
    getRandomDog: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getDogsOfBreed: function(breed) {
        return axios.get("https://dog.ceo/api/" + breed + "/images");
    },
    getBaseBreedsList: function() {
        return axios.get("https://dog.ceo/api/breeds/list");
    }   
};