/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// var変数は上書き可能
// val1 = "var変数上書き";
// console.log(val1);

// var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可
// var val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val2);

// letは上書き不可
// const val3 = "const変数を上書き";
// console.log(val2);

// letは再宣言不可
// const val3 = "const変数を再宣言";
// console.log(val2);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 31,
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
const name = "じゃけぇ";
const age = 31;

// 「私の名前ははじゃけぇです。年齢は31歳です。」

// 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// テンプレート文字列を用いた場合
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
