import { complement, filter, forEach, is, isEmpty } from "ramda";

const DEFAULT_HEADERS = {
  "Content-type": "application/json",
};

const getResponseError = async res => {
  try {
    return await res.json();
  } catch (err) {
    return null;
  }
};

const buildQueryParams = params => {
  let urlSearchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (is(Array, value)) {
      value.forEach(it => urlSearchParams.append(`${key}[]`, it));
    } else {
      urlSearchParams.append(key, value);
    }
  });

  return urlSearchParams;
};

export const createWebClient = ({
  baseUrl,
  defaultHeaders = DEFAULT_HEADERS,
}) => {
  const post = async (uri, requestBody) => {
    const response = await fetch(baseUrl + uri, {
      method: "POST",
      headers: { ...defaultHeaders },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      return await response.json();
    }

    const responseBody = await getResponseError(response);

    throw {
      status: response.status,
      responseBody,
    };
  };

  const get = async (uri, queryParams = {}) => {
    const response = await fetch(
      `${baseUrl}${uri}?${buildQueryParams(queryParams)}`,
      {
        method: "GET",
        headers: { ...defaultHeaders },
      }
    );

    if (response.ok) {
      return await response.json();
    }

    const responseBody = await getResponseError(response);

    throw {
      status: response.status,
      responseBody,
    };
  };

  return {
    post,
    get,
  };
};
