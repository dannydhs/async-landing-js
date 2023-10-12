const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtbGAbsn-s5xOVsFi6EykUQ&part=snippet%2Cid&order=date&maxResults=12';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9effc09736mshb1a1aaf8664d222p1fd1bdjsnc1877780de1e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const content = null || document.getElementById('content')

try {
	const response = await fetch(url, options);
	const result = await response.json();
  let view = `
    ${result.items?.map( item => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${item.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,12).join('')}      
  `
  content.innerHTML = view
} catch (error) {
	console.error(error);
}