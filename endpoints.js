import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const url = 'http://10.0.2.2:5001/api';
export const url = 'http://192.168.26.13:5001/api';



// AUTHENTICATION-USER
export const login = async (data) => {
    return await axios.post(`${url}/users/login`, data);
}

export const register = async (data) => {
  return await axios.post(`${url}/users/register`, data);
}

export const currentUser = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.get(`${url}/users/current`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
}

export const uploadUserImage = async (data) => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.post(`${url}/users/upload`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export const getCurrent = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.get(`${url}/users/current`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export const getUser = async (userId) => {

  return await axios.get(`${url}/users/get`, {
    params: { id: userId },
  });
}

export const getUserImageById = async (userId) => {
  const userImage = await getUser(userId)
    .then((response) => {
      return response.userImage;
    }).catch((error) => {
      console.log(error);
    });
  return await axios.get(`${url}/uploads/${userImage}`);
}

export const getUserImage = async (userImage) => {
  return `${userImage}`;
}

export const updateProfile = async (data) => {

  const token = await AsyncStorage.getItem('accessToken');
  return await axios.put(`${url}/users/update`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

// MESSAGES

export const getComms = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.get(`${url}/messages/getUsers`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export const getMessages = async (otherUser) => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.get(`${url}/messages/get`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        otherUser: otherUser
      }
    }
  )
}

export const sendMessage = async (message, otherUser) => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.post(`${url}/messages/send`,
    {
      receiver: otherUser,
      message: message
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

// PETS

/**
 * Retrieves the pets belonging to the current user.
 * @returns {Promise<Object>} A promise that resolves to the response object containing the user's pets.
 */
export const getUserPets = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.get(`${url}/pets/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

/**
 * Adds a pet to the server.
 * @param {Object} data - The data of the pet to be added.
 * @returns {Promise} - A promise that resolves to the response from the server.
 */
export const addPet = async (data) => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.post(`${url}/pets/add`, data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

/**
 * Retrieves a pet by its ID.
 * @param {string} petId - The ID of the pet to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the pet object.
 */
export const getPet = async (petId) => {
  return await axios.get(`${url}/pets/get/${petId}`);
}

/**
 * Retrieves pets from the server.
 * @returns {Promise} A promise that resolves with the response from the server.
 */
export const getPets = async () => {
  return await axios.get(`${url}/pets/get`);
}

export const getPetsByType = async (type) => {
  return await axios.get(`${url}/pets/get/type`,
    {
      params: {
        type: type
      }
    }
  );
}

export const toggleFavourite = async (petId) => {
  const token = await AsyncStorage.getItem('accessToken');
  console.log(`${url}/pets/favourite/${petId}`);
  return await axios.get(`${url}/pets/favourite/${petId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

export const transferPet = async (petId) => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.put(`${url}/pets/transfer`,
    {
      id: petId
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

export const updatePet = async (data) => {
  const token = await AsyncStorage.getItem('accessToken');
  return await axios.put(`${url}/pets/update`, data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}