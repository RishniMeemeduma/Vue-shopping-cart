import axios from "axios";

// state is store objects that holds the application level data that needs to share between components
const state = {
    productItems: []
}

// mutations are used to modify store states
const mutations = {

    UPDATE_PRODUCT_ITEMS(state,payload){
        state.productItems = payload;
    }

}

// action will handle mutations
const actions = {
    getProductItems({commit}){
        axios.get(`/api/products`)
        .then(({data}) => {
            commit('UPDATE_PRODUCT_ITEMS',data);
        })
    }
}

// getters return store states methods
const getters = {
    productItems:state => state.productItems,
    productItemById:(state) => (id) =>{
        return state.productItems.filter(productItem => productItem.id == id);
    }
}

export default {
    state,
    mutations,
    getters,
    actions,
}