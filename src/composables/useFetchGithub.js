import { ref } from "vue";

export const UseFetchGithub = () => {
  const fetchData = async (name) => {
    const url = `https://api.github.com/users/${name}/repos`;

    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const response = await fetch(url, {
      method: "GET",
      headers: { ...defaultHeaders },
    });

    return response.json();
  };

  return { fetchData };
};
