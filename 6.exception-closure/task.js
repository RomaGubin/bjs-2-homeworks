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
    return this.a + this.b + this.c;
  }
  
  get area(){
    return +(
      Math.sqrt((triangle.perimeter / 2) * 
      ((triangle.perimeter / 2) - this.a) * 
      ((triangle.perimeter / 2) - this.b) * 
      ((triangle.perimeter / 2) - this.c))).toFixed(3);
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