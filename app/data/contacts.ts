import { ImageModel } from "~/types/RemixType";

const cardData = [
    { imageSrc: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg", title: "Card 1", buttonText: "Click Me"},
    { imageSrc: "https://deepai.org/static/images/cyberpunkdolphin.png", title: "Card 2", buttonText: "Click Me" },
    { imageSrc: "https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp", title: "Card 3", buttonText: "Click Me" },
    { imageSrc: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg", title: "Card 4", buttonText: "Click Me" },
    { imageSrc: "https://t4.ftcdn.net/jpg/01/62/69/25/360_F_162692511_SidIKVCDnt5UKHPNqpCb2MSKvfBlx1lG.jpg", title: "Card 5", buttonText: "Click Me" },
    { imageSrc: "https://www.w3schools.com/css/img_5terre_wide.jpg", title: "Card 6", buttonText: "Click Me" },
    { imageSrc: "https://i0.wp.com/picjumbo.com/wp-content/uploads/tropical-background-free-download-free-image.jpeg?w=600&quality=80", title: "Card 7", buttonText: "Click Me" },
    { imageSrc: "https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp", title: "Card 8", buttonText: "Click Me" },
    { imageSrc: "https://www.w3schools.com/css/img_5terre_wide.jpg", title: "Card 9", buttonText: "Click Me" },
    { imageSrc: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg", title: "Card 10", buttonText: "Click Me" },
];



export const cardList : ImageModel[] = [
    {
      "img_url": "https://cdn.pixabay.com/photo/2024/08/22/05/03/ai-generated-8988244_640.jpg",
      "likes": 123,
      "views": 343,
      "tags" :[]
    },
    {
      img_url: "https://cdn.pixabay.com/photo/2024/08/22/05/03/ai-generated-8988244_640.jpg",
      likes: 200,
      views: 500,
      tags: ["city", "night", "lights"]
    },
    {
      img_url: "https://cdn.pixabay.com/photo/2024/08/22/05/03/ai-generated-8988244_640.jpg",
      likes: 150,
      views: 420,
      tags: ["forest", "trees", "path"]
    },
    {
      img_url: "https://cdn.pixabay.com/photo/2024/08/22/05/03/ai-generated-8988244_640.jpg",
      likes: 180,
      views: 600,
      tags: ["mountains", "hiking", "adventure"]
    },
  
  ]


  

// export cardData
export default cardData;



