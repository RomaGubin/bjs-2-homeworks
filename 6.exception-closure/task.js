//Задача 1

let num;

function parseCount(value) {
	num = Number.parseFloat(value);
	if (!Number(num)) {
		throw new Error("Невалидное значение");
	} else {
		return num;
	}
}

function validateCount(value) {
	try {
		parseCount(value);
    return num;
	} catch (error) {
		throw new Error("Невалидное значение");
	}
}

//Задача 2

class Triangle {
  constructor(a, b, c) {
    if ((a + b) < c || (a + c) < b || (c + b) < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else {
    this.a = a;
    this.b = b;
    this.c = c;
    this.perimeter = this.a + this.b + this.c;
    this.area = +(
      Math.sqrt((this._perimeter / 2) * 
      ((this._perimeter / 2) - this.a) * 
      ((this._perimeter / 2) - this.b) * 
      ((this._perimeter / 2) - this.c))).toFixed(3);
    }
  }
  get perimeter(){
    return this._perimeter;
  }
  set perimeter(newPerimeter){
    this._perimeter = newPerimeter;
  }
  get area(){
    return this._area;
  }
  set area(newArea){
    this._area = newArea;
  }
}

function getTriangle (a, b, c) {
  try {
		return new Triangle(a, b, c);
	} catch (error) {
		throw new Error("Ошибка! Треугольник не существует");
	}
}