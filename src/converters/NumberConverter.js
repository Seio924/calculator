import IConverter from "../interfaces/IConverter.js";

class NumberConverter extends IConverter {
  convertToNumber(value) {
    if (isNaN(value)) {
      throw new Error("[ERROR] 숫자가 아닌 값을 입력할 수 없습니다.");
    }
    return Number(value);
  }

  validate(number) {
    if (number < 0) {
      throw new Error("[ERROR] 음수는 허용되지 않습니다.");
    }
  }

  convertAndValidate(values) {
    const numbers = values.map((number) => {
      const num = this.convertToNumber(number);
      this.validate(num);

      return num;
    });

    return numbers;
  }
}

export default NumberConverter;