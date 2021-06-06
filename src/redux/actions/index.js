import wines from '../axios'

export const fetchProducts = () => {
    return function(dispatch){
        const response = wines.get('/wine-shop.json')
        .then(res=>{
            dispatch({
                type:'FETCH_PRODUCTS', payload:res.data
            })
        })
    }
  };