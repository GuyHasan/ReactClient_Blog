import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const getFirstArticles = async () => {
	try {
		const response = await axios.get(`${apiUrl}/articles/`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
export const getArticlesByPage = async (pageNum) => {
	try {
		const response = await axios.get(`${apiUrl}/articles?page=${pageNum}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
export const getArticleById = async (articleId) => {
	try {
		const response = await axios.get(`${apiUrl}/articles/${articleId}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
export const createArticle = async (article) => {
	try {
		const token = localStorage.getItem("token");
		const response = await axios.post(`${apiUrl}/articles`, article, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
export const updateArticle = async (articleId, article) => {
	try {
		const token = localStorage.getItem("token");
		const response = await axios.put(`${apiUrl}/articles/${articleId}`, article, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const partialUpdateArticle = async (articleId, article) => {
	try {
		const token = localStorage.getItem("token");
		const response = await axios.patch(`${apiUrl}/articles/${articleId}`, article, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteArticle = async (articleId) => {
	try {
		const token = localStorage.getItem("token");
		const response = await axios.delete(`${apiUrl}/articles/${articleId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
