import {create} from 'axios';

// hardcoding for now since location.origin doesn't work
const serverUrl = 'http://52.13.103.43';

const reviewsConn = create({
    baseURL: serverUrl
});

// should ideally take a product id
const getReviews = () => {
    return reviewsConn.get('/reviews')
        .then(resp => resp.data)
        .catch(err => {
            console.log(err);
            return [];
        });
};

const getImg = (url) => axios.get(url, {
  responseType: 'arraybuffer'
}).then(resp => Buffer.from(resp.data, 'binary'))
  .catch(err => {
    console.log(err);
    return null;
  });


export default getReviews;
export {getImg};