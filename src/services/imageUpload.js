import axios from "axios";

const imageUpload = async (images) => {
  try {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.imgur.com/3/image',
      headers: { 
        'Authorization': 'Client-ID c6e822b79325f86', 
        'Content-Type': 'text/plain'
      }
    };

    const uploadPromises = images.map(async (x, index) => {
      if (typeof x === 'string') return x;

      config.data = x;
      const response = await axios(config);
      console.log(response);

      return response.data.data.link;
    });

    const results = await Promise.all(uploadPromises);

    console.log("All uploads completed:", results);
  } catch (error) {
    console.error("Error during image upload:", error);
  }
};

export default imageUpload;
