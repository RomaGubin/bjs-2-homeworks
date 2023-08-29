//Задача 1
function parseCount(value) {
	let num = Number.parseFloat(value);
	if (!Number(num)) {
		throw new Error("Невалидное значение");
	}
	return num;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		throw new Error("Невалидное значение");
	}
}

//Задача 2

class Triangle {
  constructor(a, b, c) {
    if ((a + b) < c || (a + c) < b || (c + b) < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  get perimeter(){
    return this._perimeter = this.a + this.b + this.c;
  }
  
  get area(){
    return this._area = +(
      Math.sqrt((this._perimeter / 2) * 
      ((this._perimeter / 2) - this.a) * 
      ((this._perimeter / 2) - this.b) * 
      ((this._perimeter / 2) - this.c))).toFixed(3);
    }
}

function getTriangle (a, b, c) {
  try {
		return new Triangle(a, b, c);
	} catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}