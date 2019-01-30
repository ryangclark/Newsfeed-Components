// Because classes are not hoisted you will need to start your code at the bottom of the page. Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    this.closeButton = domElement.querySelector('.closeButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    this.closeButton.textContent = 'close';
    this.closeButton.classList.add('hidden');
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.closeButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.classList.toggle('hidden');
    this.closeButton.classList.toggle('hidden');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable 
to iterate over the articles NodeList and create a new instance of Article by 
passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(element => new Article(element));


// ––– STRETCH: Component Generator ––– //
class ArticleCreator {
  constructor(articleContent) {
    this.articleDiv = document.createElement('div');
    this.articleDiv.classList.add('article');
    // Create <h2> for the hedline, then populate it
    this.hed = document.createElement('h2');
    this.hed.textContent = articleContent.hed;
    this.articleDiv.appendChild(this.hed);
    // Create <p> for date, then add "date" class, then populate it
    this.date = document.createElement('p');
    this.date.classList.add('date');
    this.date.textContent = articleContent.date;
    this.articleDiv.appendChild(this.date);
    // Create <p> for body copy, then populate it
    this.body = document.createElement('p');
    this.body.textContent = articleContent.body;
    this.articleDiv.appendChild(this.body);
    // Create buttons
    this.expandButton = document.createElement('button');
    this.expandButton.classList.add('expandButton');
    this.expandButton.textContent = 'expand';
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.articleDiv.appendChild(this.expandButton);
    this.closeButton = document.createElement('button');
    this.closeButton.classList.add('closeButton hidden');
    this.closeButton.textContent = 'close';
    this.closeButton.addEventListener('click', () => this.expandArticle());
    this.articleDiv.appendChild(this.closeButton);
  }
  // Methods
  expandArticle() {
    this.articleDiv.classList.toggle('article-open');
    this.expandButton.classList.toggle('hidden');
    this.closeButton.classList.toggle('hidden');
  }
}
// object with content for new article
const articleContent = {hed: 'Generating Components from Objects', date: 'May 20, 2009', body: 'We can use a class to generate components without manually writing any HTML. It\'s pretty neat and I\'d recommend trying it out.\nThe annoying thing I\'m dealing with right now is escaping all of the apostrophes I\'m using in the contractions.'};

// Create the new article using the Article Creator class
const newArticle = new ArticleCreator(articleContent);
// Add it to div.articles
const divArticles = document.querySelector('.articles');
divArticles.appendChild(newArticle.articleDiv);
// console.log(newArticle.articleDiv);