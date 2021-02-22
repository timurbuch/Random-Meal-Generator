const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
       return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
       this._courses.appetizers = appetizersIn;
   
    },
    get mains() {
       return this._courses.mains;
    },
    set mains(mainsIn) {
      this._courses.mains = mainsIn;
   
    },
    get desserts() {
       return this._courses.desserts;
    },
    set desserts(dessertsIn) {
      this._courses.desserts = dessertsIn;
   
    },
    get courses (){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse  (courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
       return this._courses[courseName].push(dish); 
    },
    getRandomDishFromCourse(courseName){
      dishes = this.courses[courseName];
      randomIndex = Math.floor(Math.random()* dishes.length);
      return dishes[randomIndex];
      
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal consists of ${appetizer.name}, ${main.name} and ${dessert.name}. The total will be ${totalPrice}. `
  
    }
  
  };
  // 
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Tomato Soup', 3.25);
  menu.addDishToCourse('appetizers', 'Baked Shrimps', 5.25);
  menu.addDishToCourse('mains', 'Hamburger', 8.75);
  menu.addDishToCourse('mains', 'Wrap', 8.25);
  menu.addDishToCourse('mains', 'Lobster', 9.75);
  menu.addDishToCourse('desserts', 'Ice Cream', 3.75);
  menu.addDishToCourse('desserts', 'Waffles', 3.25);
  menu.addDishToCourse('desserts', 'Fruit Salad', 4.25);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);