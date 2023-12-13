const API_HOST = process.env.REACT_APP_API_HOST;

export const ENDPOINTS = {
  order: {
    checkout: {
      url: API_HOST + '/api/v1/orders/checkout'
    }
  }
  
}