const clickBtn = document.querySelector('#entry');
const searchWord = document.querySelector('#searchWord');
const page = document.querySelector('#page');
const imgElement = document.createElement('img');

clickBtn.addEventListener('submit', function (evt) {
	evt.preventDefault();
	makeRequest(`${searchWord.value}`);
});

async function makeRequest (searchTerm) {
	const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
		params : {
			api_key : 'mXJdxb4nlZHQbA8a72QqZjxqLCpFan70',
			q       : searchTerm,
		},
	});
	page.append(imgElement);
	console.log(res.data.data);
	imgElement.src = res.data.data[0].embed_url;
}
