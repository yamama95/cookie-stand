
var Seattle = {
    name : seatle,
  min :23,
  max :65,
  AvgCookie :6.3,

  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }


       render :function (){
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = seattle.name;
  
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
      for (var i = 0; i < this.hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hours[i]} `;
      ulEl.appendChild(liEl);
    }
  }
};

Seattle.getCust();
console.log(Seattle.numCust);

var tokyo ={
    name :toky,
  min :3,
  max :24,
  AvgCookie : 1.2,
  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }


render :function (){
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = tokyo.name;
  
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
      for (var i = 0; i < this.hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hours[i]} `;
      ulEl.appendChild(liEl);
    }
  }
};

tokyo.getCust();
console.log(tokyo.numCust);

var Dubai ={
    name :Dubai,
  min :11,
  max:38,
  AvgCookie:3.7,
  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }


render :function (){
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = Dubai.name;
  
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
      for (var i = 0; i < this.hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hours[i]} `;
      ulEl.appendChild(liEl);
    }
  }
};


Dubai.getCust();
console.log(Dubai.numCust);

var Paris={
    name :Pari,
  min :20,
  max :38,
  AvgCookie:2.3,
  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }


render :function (){
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = Paris.name;
  
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
      for (var i = 0; i < this.hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hours[i]} `;
      ulEl.appendChild(liEl);
    }
  }
};



Paris.getCust();
console.log(Paris.numCust);

var lima ={
    name : lim,
  min :2,
  max:16,
  AvgCookie:4.6,
  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }


    render :function (){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = lima.name;
    
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < this.hours.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent = `${this.hours[i]} `;
        ulEl.appendChild(liEl);
        }
  }
};


lima.getCust();
console.log(lima.numCust);











function getRandomCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
// not complete yet