
const DEFAULT_HEADERS = {
  "Content-type": "application/json"
}

const getResponseError = async res => {
  try {
    return await res.json()
  } catch (err) {
    return null
  }
}

export const createWebClient = ({ baseUrl, defaultHeaders = DEFAULT_HEADERS }) => {

  const post = async (uri, requestBody) => {
    const response = await fetch(baseUrl + uri, {
      method: "POST",
      headers: { ...defaultHeaders },
      body: JSON.stringify(requestBody),
    })

    if (response.ok) {
      return await response.json()
    }

    const responseBody = await getResponseError(response)

    throw {
      status: response.status,
      responseBody
    }
  }



  return {
    post
  }
}
