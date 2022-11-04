// NEXT！！！
// アロー関数

// 通常の書き方
const func1 = function (str) {
  return str;
};
// console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str; // 波括弧で囲む場合はreturnが必要。波括弧なし＆returnなしの人もいるが分かりにくいので書くべし
};
// console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
// こうも書ける↓
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// 分割代入
const myProfile = {
  name: "サトシ",
  age: 28
};
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}さいです。`;
// console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}さいです。`;
// console.log(message2);

const myProfile2 = ["サトシ", 14];
const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
// console.log(message3);

const [name2, age2] = myProfile2;
const message4 = `名前は${name2}です。年齢は${age2}です。`;
// console.log(message4);

// NEXT！！！
// デフォルト値、引数など
// 引数なしで関数を呼び出すと「undefined」になる
// 引数にデフォルト値を設定できる

const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

// NEXT！！！
// スプレッド構文
// 配列の中身を順ばんに処理して展開してくれる

// 配列の展開
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// 配列をまとめる

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
// console.log(arr6);

const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// と書くこともできるが、arr8の値を書き換えた時にarr4の値も書き変わってしまう

// NEXT！！！
// mapやfilterを使った配列の処理

// 従来のfor文
const nameArr = ["田中", "山田", "サトシ"];
for (let i = 0; i < nameArr.length; i++) {
  // console.log(`${i + 1}ばんめは${nameArr[i]}です`);
}

// mapの書き方
// 引数2つ目にはナンバリングが入ってくる
// nameArr.map((name, i) => console.log(`${i + 1}ばんめは${name}です`));

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// filterの書き方
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
// console.log(newNumArr);

// 実践的なやつ
const newNameArr = nameArr.map((name) => {
  if (name === "サトシ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
// console.log(newNameArr);

// 三項演算子

const num = "1300";
// console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！" : "許容範囲ないです";
};
// console.log(checkSum(50, 40));

// 論理演算子

// ||は左側がfalseなら右側を返す（左側がtrueなら左側を返す）
const num100 = 100;
const fee = num100 || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す（左側がfalseなら左側を返す）
const numnull = null;
const fee2 = numnull && "何か設定されました";
console.log(fee2);
