import { ADDMV,SEARCH_NAME,SEARCH_RATE } from "./action_types"
const initialState={
    Movies:[
        {
          Id: 1,
          Name: 'Over The Moon',
          Pic: 'https://th.bing.com/th/id/OIP.LFoLqzkcDbjK02GI0wCOIgHaJN?w=124&h=180&c=7&o=5&dpr=2.19&pid=1.7',
          Date: '2020',
          Type: 'Animation',
          Rating: 4,
          Description:'In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.', 
          Trailer: 'https://www.youtube.com/embed/26DIABx44Tw', 
        },
        {
          Id: 2,
          Name: 'The Suicide Squad',
          Pic: 'https://th.bing.com/th/id/OIP.XQ7kqEAxF97HkE75cM5daAHaKC?w=132&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7',
          Date: '2021',
          Type: 'Action',
          Rating: 5,
          Description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.", 
          Trailer: 'https://www.youtube.com/embed/JuDLepNa7hw'
        },
        {
          Id: 3,
          Name: 'Loki',
          Pic: 'https://th.bing.com/th/id/OIP.QGbAX401hhlW3OZiorPZDwHaHa?w=157&h=180&c=7&o=5&dpr=2.19&pid=1.7',
          Date: '2021',
          Type: 'Fantasy',
          Rating: 3,
          Description: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.', 
          Trailer: 'https://www.youtube.com/embed/nW948Va-l10'
        },
        {
          Id: 4,
          Name: 'What if ?',
          Pic: 'https://th.bing.com/th?id=OIF.1tBUbenc%2bkSjLpCbuDdjTA&w=186&h=279&c=7&r=0&o=5&dpr=1.38&pid=1.7',
          Date: '2021',
          Type: 'Animation',
          Rating: 2,
          Description:'Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory.', 
          Trailer: 'https://www.youtube.com/embed//x9D0uUKJ5KI'
        },
        {
          Id: 5,
          Name: 'Jurassic Park',
          Pic: 'https://th.bing.com/th/id/OIP.O0w5yuma7vJlt4eJLIsgIwHaLH?w=123&h=185&c=7&o=5&dpr=2.19&pid=1.7',
          Date: '1993',
          Type: 'Adventure',
          Rating: 5,
          Description: 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the parks cloned dinosaurs to run loose.', 
          Trailer: 'https://www.youtube.com/embed/QWBKEmWWL38'
        },
        {
          Id: 6,
          Name:'Black Widow',
          Pic: 'https://th.bing.com/th/id/OIP.0wxmdLQ5v_x-MEwuwpL47AHaKe?w=182&h=257&c=7&o=5&dpr=2.19&pid=1.7',
          Date: '2021',
          Type: 'Action',
          Rating: 3,
          Description: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.', 
          Trailer: 'https://www.youtube.com/embed/Fp9pNPdNwjI'
        },
      ],
      searchName:'',
      searchRate:1,
    }

const MovieReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADDMV: return{
            ...state,
            Movies: [...state.Movies, action.payload]
        }
        case SEARCH_NAME: return{
              ...state,
              searchName:action.payload
          }
       case SEARCH_RATE: return{
              ...state,
              searchRate:action.payload
          }
    default:return state
    }
}
export default MovieReducer