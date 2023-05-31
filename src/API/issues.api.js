import axios from 'axios';

const issuesApi = axios.create({
  baseURL: 'http://issuetrackerwazowski-env.eba-4em2umit.eu-west-3.elasticbeanstalk.com/api/v1/'
})

export const getAllIssues = () => {
  return issuesApi.get('/issues');
}

export const getAllUsers = () => {
  return issuesApi.get('/users');
}

export function getIssuesFiltered(status, priority, assignedTo, unassigned, createdBy, searchword, orderBy) {
  return issuesApi.get(`/issues?status=${status}&priority=${priority}&assigned_to=${assignedTo}&unassigned=${unassigned}&created_by=${createdBy}&q=${searchword}&order_by=${orderBy}`);
}
