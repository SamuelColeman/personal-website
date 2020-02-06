export const getProjects = async () => {
	const response = await fetch('https://personal-website-be.herokuapp.com/api/v1/projects');
	const data = response.json();
	return data;
};

export const getSchools = async () => {
	const response = await fetch('https://personal-website-be.herokuapp.com/api/v1/schools');
	const data = response.json();
	return data;
};