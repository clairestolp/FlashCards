import axios from "axios";

const domain = process.env.REACT_APP_LOCALHOST;

export const getUser = (email) => {
  return axios
    .post(`${domain}/users/email`, {
      email,
    })
    .then((response) => {
      return {
        name: {
          firstname: response.data.firstname,
          lastname: response.data.lastname,
        },
        email: response.data.email,
        id: response.data._id,
      };
    })
    .catch((error) => {
      throw error;
    });
};

export const getSubjects = (userId) => {
  return axios
    .get(`${domain}/subjects/${userId}`)
    .then((response) => {
      return response.data.map((subject) => ({
        id: subject._id,
        name: subject.name,
        description: subject.description,
        createdAt: subject.createdAt,
        updatedAt: subject.updatedAt,
      }));
    })
    .catch((error) => {
      throw error;
    });
};
