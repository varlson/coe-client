import axios from "axios";
import { IPost, userType } from "../types/types";
const headers = {
  "Content-Type": "multipart/form-data",
};

export const getSlides = async () => {
  return new Promise(async (resolve, reject) => {
    const fetchOptions = {
      method: "GET",
    };

    const resp = await fetch("http://localhost:3222/api/slides", fetchOptions);
    const done = await resp.json();
    if (done.success) {
      resolve(done);
    } else {
      reject(done);
    }
  });
};

export const addSlides = async (data) => {
  return new Promise((res, rej) => {
    axios
      .post("http://localhost:3222/api/slide", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          let progress: number = Math.round((event.loaded * 100) / event.total);

          console.log(`A imagem ${"filename"} está ${progress}% carregada... `);
        },
      })
      .then((resp) => {
        res(resp);
      })
      .catch((error) => {
        rej(error);
      });
  });
};

export const login = async (username: string, password: string) => {
  const headers = { "Content-Type": "application/json" };
  const data = {
    username: username,
    password: password,
  };
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3222/api/auth/login", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPosts = async () => {
  return new Promise(async (resolve, reject) => {
    const fetchOptions = {
      method: "GET",
    };

    const resp = await fetch("http://localhost:3222/api/posts", fetchOptions);
    const done = await resp.json();
    console.log("get posts");
    console.log(done);

    if (done.success) {
      resolve(done);
    } else {
      reject(done);
    }
  });
};

export const getPostItem = async (id: string) => {
  return new Promise(async (resolve, reject) => {
    const fetchOptions = {
      method: "GET",
    };

    const resp = await fetch(
      `http://localhost:3222/api/posts/${id}"`,
      fetchOptions
    );
    const done = await resp.json();
    console.log("get posts");
    console.log(done);

    if (done.success) {
      resolve(done);
    } else {
      reject(done);
    }
  });
};

// LIST USER

type errorMsgType = {
  msg: string;
};

export const listUser = async (id: string) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return new Promise<userType | errorMsgType>(async (resolve, reject) => {
    try {
      const promResp = await fetch(
        `http://localhost:3222/api/auth/user/${id}`,
        fetchOptions
      );

      const resp = await promResp.json();
      console.log("resp-user get");
      console.log(resp);
      if (resp.success) {
        resolve(resp.user);
      }

      reject(resp.msg);
    } catch (error: any) {
      reject(error.message);
    }
  });
};

export const listPosts = async (postType: number) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return new Promise<IPost[] | string>(async (resolve, reject) => {
    try {
      const promResp = await fetch(
        `http://localhost:3222/api/posts/lists/${postType}`,
        fetchOptions
      );

      const resp = await promResp.json();

      if (resp.success) {
        resolve(resp.posts);
      }

      reject(resp.msg);
    } catch (error: any) {
      reject(
        error.message || "Houve um erro interno, post nao pode ser listado"
      );
    }
  });
};

export const searchQuery = async (querys: string) => {
  return new Promise<IPost[] | string>(async (resolve, reject) => {
    const url = "http://localhost:3222/api/posts/search";
    const query = JSON.stringify({ query: querys });

    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: query,
      });

      const data = await result.json();

      if (data.success) {
        resolve(data.posts);
      } else {
        reject(data.error);
      }
    } catch (error: any) {
      reject(error.message);
    }
  });
};
