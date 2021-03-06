import axios, {create} from 'axios';
import process from 'process';

const serverUrl = process.env.SERVER_URL ?? 'http://127.0.0.1:8081';

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