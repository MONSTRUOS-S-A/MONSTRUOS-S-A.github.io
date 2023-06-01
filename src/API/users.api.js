import axios from 'axios';

const issuesApi = axios.create({
  baseURL: 'http://issuetrackerwazowski-env.eba-4em2umit.eu-west-3.elasticbeanstalk.com/api/v1/users'
})

export const getAllUsers = () => {
  return issuesApi.get();
}

export const getAllUsersAndTokens = () => {
  return issuesApi.get('/with_token');
}