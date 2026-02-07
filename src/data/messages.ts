import { Heart } from 'lucide-react';

export interface Message {
  id: number;
  text: string;
  color: string;
}

export const messages: Message[] = [
  {
    id: 1,
    text: `Fun Fact : The person who made this website is highkey obsessed with roses, but this time, it seems a sunflower caught his attention`,
    color: "from-rose-400 to-pink-500"
  },
  {
    id: 2,
    text: "गुलाब सी खिल्ति हो तुम, इत्तर सी हो तुम, बस तुम्हारे ठेहेरने से मेरी दुनिया खुस्बु खुस्बु ",
    color: "from-pink-400 to-rose-500"
  },
  {
    id: 3,
    text: " マカマリが乾くまで、海が蒸発するまで、岩が溶けるまで、私が最後の息を吐くまで、あなたを愛します。",
    color: "from-red-400 to-rose-500"
  },
  {
    id: 4,
    text: "당신은 제 '왕들의 그림' 에서 황제와 같은 존재입니다.",
    color: "from-rose-500 to-red-400"
  },
  {
    id: 5,
    text: "میں آپ کو اپنی پوری دنیا بتا سکتا ہوں ، لیکن مسئلہ یہ ہے کہ پوری کائنات آپ کی نظر میں موجود ہے۔",
    color: "from-pink-500 to-rose-400"
  },
  {
    id: 6,
    text: "Ποτέ δεν είχα αγαπημένο χρώμα, ποτέ δεν χρειάστηκε να το σκεφτώ, αλλά από τότε που ήρθες, έγινες το αγαπημένο μου χρώμα, το αγαπημένο μου τραγούδι, η αγαπημένη μου ταινία και όλα τα άλλα.",
    color: "from-rose-400 to-red-500"
  },
  {
    id: 7,
    text: "Je pourrais utiliser chaque syllabe, dans chaque langue, pour te décrire, et pourtant j'échouerais lamentablement.",
    color: "from-red-500 to-pink-400"
  },
  {
    id: 8,
    text: "यदि मेरो जीवन एउटा बगैचा भएको भए, तिमि त्यस बगैचाको एक मात्र फूल हुने छौ |",
    color: "from-pink-400 to-red-400"
  },
  {
    id: 9,
    text: "Можно было бы нанести мне тысячу ножевых ранений, но я бы всё равно ждал 1001-го удара.",
    color: "from-rose-500 to-pink-500"
  },
  {
    id: 10,
    text: "Надеяться tu чувствам millor.",
    color: "from-red-400 to-rose-400"
  }
];
