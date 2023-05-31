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
  let apiUrl = '/issues?';

  if (status) {
    apiUrl += `status=${status}&`;
  }
  if (priority) {
    apiUrl += `priority=${priority}&`;
  }
  if (assignedTo) {
    apiUrl += `assigned_to=${assignedTo}&`;
  }
  if (unassigned) {
    apiUrl += `unassigned=${unassigned}&`;
  }
  if (createdBy) {
    apiUrl += `created_by=${createdBy}&`;
  }
  if (searchword) {
    apiUrl += `q=${searchword}&`;
  }
  if (orderBy) {
    apiUrl += `order_by=${orderBy}`;
  }

  return issuesApi.get(apiUrl);
}

