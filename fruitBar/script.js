const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	const searchTerm = str.toLowerCase();
	const results = fruit.filter(fruit => fruit.toLowerCase().includes(searchTerm));
	return results;
}

function searchHandler(e) {
	const searchInput = e.target.value.toLowerCase().trim();
	if (searchInput === '') {
		suggestions.innerHTML = '';
	} else {
	const results = search(searchInput);
	showSuggestions(results, searchInput);
	}
}

function showSuggestions(results, inputVal) {  
	suggestions.innerHTML = '';
	const ul = document.createElement('ul');
	
	results.forEach(result => {
	  const li = document.createElement('li');
	  li.textContent = result;
  
	  li.addEventListener('mouseover', function() {
		this.classList.add('highlighted');
	  });
  
	  li.addEventListener('mouseout', function() {
	   this.classList.remove('highlighted'); 
	  });
  
	  ul.appendChild(li);
	});
  
	suggestions.appendChild(ul);
  }


function useSuggestion(e) {
	const selectedFruit = e.target.innerText;
	input.value = selectedFruit;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);