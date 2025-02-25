

export const FetchData = async (url: string): Promise<any> => {
  const headersConfig = {

  }

  return await fetch(`${process.env.LOCAL_URL}${url}`, headersConfig).then((res) =>
    res.json()
  )
}

export const PostData = async (url: string, body: any): Promise<any> => {
  const headersConfig = {
    method: 'POST',
    body,
  }

  return await fetch(`${process.env.LOCAL_URL}${url}`, headersConfig).then((res) =>
    res.json()
  )
}

