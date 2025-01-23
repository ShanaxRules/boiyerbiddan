const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "create kids story on description for 5-8 years old kids , Educational story , and all images in paper cut style: story of boy and magic school , give me 5 chapter, with detailed image text prompt for each of chapter and image prompt for story cover book with story name , all in JSON field format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"bookTitle\": \"Toby and the Whispering Willow School\",\n  \"cover\": {\n    \"imagePrompt\": \"A paper cut style illustration of a whimsical, slightly crooked schoolhouse with a large, friendly looking willow tree beside it. The school has colorful windows and a puff of smoke coming from the chimney. A small boy, Toby, with bright eyes and slightly messy brown hair stands in front of the school holding a book, smiling excitedly. The sky is a gradient of light blue and orange, suggesting sunrise or sunset.  The book title 'Toby and the Whispering Willow School' is displayed in a playful, hand-cut font above the school.\",\n     \"chapter\": \"cover\"\n  },\n  \"chapters\": [\n    {\n      \"chapterNumber\": 1,\n      \"chapterTitle\": \"The Letter That Flew\",\n      \"storyText\": \"Toby loved playing in his backyard. One sunny morning, as he was building a fort with fallen leaves, a letter fluttered down from the sky! It wasn't an ordinary letter. It was made of sparkly paper, and the words seemed to dance on the page. It read, 'Welcome to the Whispering Willow School, Toby! Your magical adventure begins tomorrow!' Toby's eyes widened. A magic school? For him?\",\n       \"imagePrompt\": \"A paper cut style illustration of Toby in his backyard, amidst a pile of colorful leaves. A sparkly, light blue letter is falling gently from the sky toward him. Toby looks up with a surprised expression, his hands reaching out to catch the letter. There is a half-built fort of leaves in the background. The sky is a cheerful yellow with fluffy white paper cut clouds.\",\n       \"chapter\": \"1\"\n    },\n    {\n      \"chapterNumber\": 2,\n      \"chapterTitle\": \"The Whispering Willow\",\n      \"storyText\": \"The next day, Toby followed the directions on the letter. He walked past the grumpy-looking garden gnomes, down a winding path, and suddenly, there it was! A school unlike any he had ever seen. It was built beside a giant willow tree whose branches seemed to whisper secrets to the wind. The school windows glowed with a warm, inviting light. Toby took a deep breath and walked toward the door, his heart pounding with excitement and a tiny bit of nervousness.\",\n      \"imagePrompt\": \"A paper cut style image of a winding path leading to a whimsical school building. The school is next to a large willow tree with many long, drooping branches that have small cut-out shapes like leaves and stars. The school has windows that have inner light source effect in different colors. Toby is shown on the path, his body slightly turned towards the school and eyes are big and curious. The background consists of green hills with few grumpy looking garden gnomes tucked away.\",\n      \"chapter\": \"2\"\n\n    },\n    {\n      \"chapterNumber\": 3,\n       \"chapterTitle\": \"Classroom of Colors\",\n      \"storyText\": \"Inside, the classroom was a kaleidoscope of colors! Instead of desks, there were giant, soft cushions of different shapes and sizes. The teacher, a friendly woman with a warm smile, introduced herself as Ms. Flutterwing. They didn't learn about numbers or letters. Instead, Ms. Flutterwing taught them to make flowers bloom with a gentle clap, and paint pictures in the air using their imagination. Toby laughed as he accidentally made a cloud of tiny, purple stars!\",\n       \"imagePrompt\": \"A paper cut style scene inside the school classroom. Soft, colorful cushions in various shapes are scattered around the room. Ms. Flutterwing, a cheerful woman with a kind face and a dress with paper cut flowers, is smiling at a group of children, including Toby. The children are making flowers appear with hand claps and painting with hand movements in the air using imaginary paintbrushes, with some light-reflecting effects on the colors. Some floating, colored stars are in the image.\",\n       \"chapter\": \"3\"\n    },\n    {\n      \"chapterNumber\": 4,\n      \"chapterTitle\": \"The Magical Garden\",\n      \"storyText\": \"After their lessons, Ms. Flutterwing took them to the magical garden behind the school. There, plants grew in rainbow colors, and little glowing insects buzzed around. Toby learned that by singing to the plants, they could change their colors and even grow larger! Toby sang a silly little tune, and a tiny bluebell grew into a giant, flower big enough to hide him! He giggled with joy.\",\n        \"imagePrompt\": \"A paper cut style scene of a magical garden behind the school. Plants are in vibrant rainbow colors. There are many glowing insects and flowers that seem to sparkle. Toby is singing to a small bluebell flower, and the flower is growing large enough to hide him. Ms. Flutterwing and other children are watching with amazement and happiness. The background is full of unusual, magical plant shapes. \",\n        \"chapter\":\"4\"\n    },\n    {\n      \"chapterNumber\": 5,\n       \"chapterTitle\": \"A Gift to Remember\",\n      \"storyText\": \"As the day ended, Ms. Flutterwing gave each child a small, smooth stone. She explained that each stone held a memory of their day at the Whispering Willow School. Toby held his stone tight, feeling grateful for his magical day. He knew he would never forget the colors, the songs, and the whispering willow tree. He couldn't wait to go back!\",\n      \"imagePrompt\":\"A paper cut style scene of Ms. Flutterwing handing small, smooth stones to Toby and the other children in front of the Whispering Willow School. The school and willow tree are in the background and the sky is turning a light purple, suggesting dusk. Toby is holding his stone close to his chest with a happy expression. The stones have a light reflecting effect. Some small, glowing fireflies fly around the group and the willow tree.\",\n      \"chapter\": \"5\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
  
