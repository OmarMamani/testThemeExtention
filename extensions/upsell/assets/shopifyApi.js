import { URL_VARS } from './constants'


  export const addProductToCart = async (data) => {
    const response = await fetch(URL_VARS.addCart, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })

    return { status: response.status, addedProduct: await response.json() }
  }

  export const updateCart = async (data) => {
    const response = await fetch(URL_VARS.updateCart, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })

    return await response.json()
  }

  export const removeCart = async (data) => {
    const response = await fetch(URL_VARS.updateCart, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ ...data, quantity: 0 }),
    })

    return await response.json()
  }
