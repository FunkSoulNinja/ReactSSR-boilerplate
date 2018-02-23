import HomePage from '@pages/HomePage';
import JokeOfDayPage from '@pages/JokeOfDayPage';

export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...JokeOfDayPage,
        path: '/joke',
        exact: true
    }
];
