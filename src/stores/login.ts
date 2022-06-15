import { defineStore } from 'pinia'

const LOCAL_STORAGE_API_TOKEN = "apiToken" 

export const loginStore = defineStore({
	id: 'login',
	state: () => ({
		token: null,
		firstname: "",
		name: ""
	}),
	getters: {
		getToken(state) {
			if(state.token == null && LOCAL_STORAGE_API_TOKEN in localStorage) {
				state.token = localStorage.getItem(LOCAL_STORAGE_API_TOKEN)
			}

			return state.token
		},
		
		getHeader(state) {
			return {headers: {"Authorization": "Bearer " + this.getToken}};
		}
	},
	actions: {
		login(login, password) {
		},
		
		logout() {
			this.token = null
			localStorage.removeItem(LOCAL_STORAGE_API_TOKEN)
		}
	}
})
