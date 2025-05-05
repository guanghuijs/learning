export const mock: {
  lan: string;
  text: string;
}[] = [
  {
    lan: 'javascript',
    text: `function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) { //第一个等同于第二个，splice方法删除第二个
              arr.splice(j, 1);
              j--;
          }
      }
  }
  return arr;
}`,
  },
  {
    lan: 'typescript',
    text: `function unique(arr): array {
  for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) { //第一个等同于第二个，splice方法删除第二个
              arr.splice(j, 1);
              j--;
          }
      }
  }
  return arr;
}`,
  },
  {
    lan: 'java',
    text: `public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
    }`,
  },
  {
    lan: 'html',
    text: `<div>1231</div>
<h1>标题</h1>`,
  },
  {
    lan: 'mysql',
    text: `INSERT INTO users (name, email, age) VALUES ('Jane Smith', 'jane.smith@example.com', 30)`,
  },
  {
    lan: 'python',
    text: `print("Hello, World!")`,
  },
  {
    lan: 'css',
    text: `body {
      color: blue;
    }`,
  },
  {
    lan: 'scss',
    text: `div {
      & {
         font-weight: bold;
      }
    }`,
  },
  {
    lan: 'json',
    text: `{
  "name": "John Doe",
  "age": 30,
  "is_student": false,
  "skills": [
    "Python",
    "Java",
    "SQL"
  ],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}`,
  },
];
