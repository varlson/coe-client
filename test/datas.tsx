import { INews, ISlide } from "../types/types";
export interface Icard {
  title: string;
  resume: string;
  data: string;
  img?: string;
}

export const cards: Icard[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "11 março 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "12 março 2023",
    img: "card-test1.jpeg",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "21 março 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "10 maio 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "11 maio 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "15 maio 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "21 maio 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "22 maio 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "24 maio 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "11 março 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "11 março 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "11 março 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "11 março 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "11 março 2023",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis alias facere voluptate. Soluta deserunt commodi, odit totam ut tenetur incidunt nulla",
    data: "11 março 2023",
  },
];

// export const newsData: INews[] = [
//   {
//     slug: "politics",
//     img_url: "https://fakeimg.com/politics-news",
//     title: "Government Approves New Climate Change Legislation",
//     body: "In a landmark decision, the government has approved new legislation aimed at combating climate change. The bill, which has been in the works for several years, contains a range of measures designed to reduce carbon emissions and increase the use of renewable energy sources. The legislation has been widely praised by environmentalists, who see it as a significant step in the fight against global warming. However, some critics have raised concerns about the economic impact of the bill, arguing that it could lead to job losses and higher energy prices.",
//     id: "1",
//   },
//   {
//     slug: "health",
//     img_url: "https://fakeimg.com/health-news",
//     title: "New Study Shows Promising Results for Cancer Treatment",
//     body: "A groundbreaking new study has shown promising results in the treatment of cancer. Researchers have developed a new therapy that targets cancer cells while leaving healthy cells untouched. The treatment has been tested on a small group of patients, and the results have been very positive. The therapy has been effective in shrinking tumors and improving the overall health of the patients. The research team is hopeful that this new treatment could lead to a major breakthrough in the fight against cancer.",
//     id: "2",
//   },
//   {
//     slug: "science",
//     img_url: "https://fakeimg.com/science-news",
//     title: "Scientists Discover New Exoplanet with Habitable Conditions",
//     body: "A team of scientists has discovered a new exoplanet that could potentially harbor life. The planet is located in a star system similar to our own, and it has the right conditions for liquid water to exist on its surface. The discovery is a major breakthrough in the search for habitable worlds outside our solar system. The team is planning to conduct further research on the planet to determine if it has an atmosphere and if there are any signs of life present.",
//     id: "3",
//   },
//   {
//     slug: "technology",
//     img_url: "https://fakeimg.com/tech-news",
//     title: "New Smartphone Model Boasts Revolutionary Features",
//     body: "A new smartphone model has been released with revolutionary features that are sure to impress tech enthusiasts. The device boasts a high-resolution camera with advanced image stabilization, a long-lasting battery, and a sleek, modern design. In addition, the phone has an innovative user interface that allows for seamless multitasking and intuitive navigation. Early reviews of the device have been overwhelmingly positive, with many users praising its speed, performance, and overall user experience.",
//     id: "4",
//   },
//   {
//     slug: "business",
//     img_url: "https://fakeimg.com/business-news",
//     title: "Global Company Announces Plans for Expansion",
//     body: "In a major announcement, a global company has revealed plans for a significant expansion of its operations. The company is set to invest billions of dollars in new facilities, research and development, and hiring new employees. The move is expected to create thousands of new jobs and stimulate economic growth in the regions where the company operates. The company's leadership is optimistic about the expansion, citing strong demand for its products and services and a favorable economic climate.",
//     id: "5",
//   },
//   {
//     slug: "sports",
//     img_url: "https://fakeimg.com/sports-news",
//     title: "Star Athlete Breaks World Record in Track and Field",
//     body: "In a stunning performance, a star athlete has broken the world record in track and field. The athlete, who had been training for months leading up to the competition, shattered the previous record by several seconds. The achievement has garnered widespread praise from fans and fellow athletes alike, with many hailing the athlete's dedication and hard work. The athlete has expressed gratitude for the support and is looking forward to competing at the upcoming international championships.",
//     id: "6",
//   },

//   {
//     slug: "entertainment",
//     img_url: "https://fakeimg.com/entertainment-news",
//     title: "Blockbuster Movie Sequel Breaks Box Office Records",
//     body: "The highly anticipated sequel to a blockbuster movie has smashed box office records in its opening weekend. Fans flocked to theaters to see the latest installment in the popular franchise, which has been praised for its stunning visuals, engaging story, and talented cast. The film has been a critical and commercial success, with many predicting that it will go on to become one of the highest-grossing movies of all time. The studio behind the movie is already planning a third installment in the series.",
//     id: "7",
//   },
//   {
//     slug: "education",
//     img_url: "https://fakeimg.com/education-news",
//     title: "New Study Shows Benefits of Music Education for Children",
//     body: "A new study has shown that music education can have significant benefits for children. The study found that children who participated in music programs showed improved cognitive abilities, including better memory, language, and spatial reasoning skills. In addition, the study found that music education had positive effects on children's social and emotional development, including increased self-esteem and a greater sense of community. The findings have led to calls for greater investment in music education programs in schools.",
//     id: "8",
//   },
//   {
//     slug: "travel",
//     img_url: "https://fakeimg.com/travel-news",
//     title: "New Tourist Destination Offers Unique Cultural Experience",
//     body: "A new tourist destination has opened its doors, offering visitors a unique cultural experience. The destination features a range of attractions, including museums, galleries, and cultural centers, all designed to showcase the local history and traditions. Visitors can also enjoy local cuisine, music, and dance performances, as well as participate in traditional craft workshops. The destination has already proven popular with tourists, who appreciate the opportunity to immerse themselves in the local culture.",
//     id: "9",
//   },
//   {
//     slug: "food",
//     img_url: "https://fakeimg.com/food-news",
//     title: "Celebrity Chef Launches New Cookbook Featuring Healthy Recipes",
//     body: "A celebrity chef has launched a new cookbook featuring a range of healthy recipes that are both delicious and easy to prepare. The cookbook includes recipes for breakfast, lunch, and dinner, as well as snacks and desserts. Each recipe is designed to be nutritious and flavorful, using fresh, whole ingredients. The cookbook has been well-received by fans of the chef, who appreciate the focus on healthy eating and the chef's signature culinary style.",
//     id: "10",
//   },
//   {
//     slug: "environment",
//     img_url: "https://fakeimg.com/environment-news",
//     title:
//       "New Recycling Program Aims to Reduce Waste and Promote Sustainability",
//     body: "A new recycling program has been launched with the goal of reducing waste and promoting sustainability. The program encourages residents to separate their recyclable materials from their trash and offers incentives for doing so. The recycled materials are then processed and used to create new products, reducing the need for raw materials and lowering carbon emissions. The program has already been successful in several cities, and there are plans to expand it toother regions in the near future.",
//     id: "11",
//   },
//   {
//     slug: "sports",
//     img_url: "https://fakeimg.com/sports-news",
//     title: "Underdog Team Wins Championship in Dramatic Upset",
//     body: "In a stunning upset, an underdog team has won the championship title in a major sports league. The team, which had been written off by many experts and fans, put on a remarkable performance, defeating their more highly-ranked opponents with a display of skill, determination, and teamwork. The victory has been celebrated by fans around the world, who appreciate the team's grit and resilience in the face of adversity. Many are now hailing the underdogs as an inspiration to others who may face seemingly insurmountable challenges.",
//     id: "12",
//   },
// ];

export const newsData: INews[] = [
  {
    slug: "breaking-news",
    img_url: "https://picsum.photos/800/600?random=6",
    title: "Breaking News: Major earthquake hits California",
    body: "A major earthquake measuring 7.5 on the Richter scale hit California early this morning, causing widespread damage and triggering a tsunami warning for the entire west coast. The epicenter of the quake was located near San Francisco, and many residents reported feeling intense shaking and hearing loud rumbling noises. There have been no reports of fatalities so far, but emergency services are warning people to stay indoors and avoid any unnecessary travel.",
    id: "1234567890",
    date: new Date(),
  },
  {
    slug: "politics-news",
    img_url: "https://picsum.photos/800/600?random=5",
    title: "Election Results: Conservative Party Wins Landslide Victory",
    body: 'In a stunning upset, the Conservative Party has won a landslide victory in the general election, securing a majority of seats in Parliament and ending the Labour Party\'s 13-year run in power. Conservative leader David Cameron hailed the result as a "historic moment" and pledged to implement a wide-ranging agenda of economic reform and social change. Labour leader Ed Miliband has resigned, and the party is now expected to undergo a period of soul-searching and introspection.',
    id: "0987654321",
    date: new Date(),
  },
  {
    slug: "sports-news",
    img_url: "https://picsum.photos/800/600?random=4",
    title: "LeBron James Leads Miami Heat to NBA Championship",
    body: "In a thrilling game that went down to the wire, LeBron James led the Miami Heat to a 98-95 victory over the San Antonio Spurs in Game 7 of the NBA Finals, securing his second championship ring and cementing his status as one of the greatest basketball players of all time. James scored 37 points and pulled down 12 rebounds in the game, and was named the Finals MVP for the second straight year. The victory was a vindication for James, who had faced heavy criticism and scrutiny throughout his career for his inability to win a championship.",
    id: "abcdefghij",
    date: new Date(),
  },
  {
    slug: "tech-news",
    img_url: "https://picsum.photos/800/600?random=1",
    title: "Apple Unveils New iPhone 14 with Foldable Display",
    body: "At its annual fall product launch event, Apple unveiled the highly anticipated iPhone 14 with a foldable display, marking a major departure from the traditional design of the iconic smartphone. The new device features a 6.7-inch OLED screen that can be folded in half, making it more portable and easier to use with one hand. Other new features include an upgraded camera system, faster processor, and longer battery life. The iPhone 14 is set to hit stores next month, with pre-orders starting next week.",
    id: "12bc345def",
    date: new Date(),
  },
  {
    slug: "health-news",
    img_url: "https://picsum.photos/800/600?random=2",
    title: "Study Shows Benefits of Mediterranean Diet for Heart Health",
    body: "A new study published in the Journal of the American Medical Association has found that following a Mediterranean-style diet can significantly reduce the risk of heart disease and stroke. The diet, which is rich in fruits, vegetables, whole grains, and healthy fats like olive oil and nuts, has long been associated with improved cardiovascular health. The study followed over 15,000 participants for a period of 10 years, and found that those who followed the diet closely had a 30% lower risk of heart disease and stroke compared to those who did not.",
    id: "ab23cd45ef",
    date: new Date(),
  },
  {
    slug: "entertainment-news",
    img_url: "https://picsum.photos/800/600?random=3",
    title: "Lady Gaga Announces Las Vegas Residency",
    body: 'Pop superstar Lady Gaga has announced a new residency in Las Vegas, where she will perform a series of shows at the Park Theater starting next month. The residency, titled "Enigma", will feature a mix of Lady Gaga\'s greatest hits and new material, and promises to be a "multi-dimensional sensory experience" for fans. Tickets for the shows are already selling out fast, and fans are eagerly anticipating the chance to see the iconic performer in action.',
    id: "cd34ef56gh",
    date: new Date(),
  },

  {
    slug: "sports-news",
    img_url: "https://picsum.photos/800/600?random=9",
    title: "LeBron James Returns to Cleveland Cavaliers in Blockbuster Trade",
    body: "In a stunning move that has sent shockwaves through the NBA, LeBron James has been traded back to the Cleveland Cavaliers in exchange for three first-round draft picks and two key players. James, who famously left the Cavaliers to join the Miami Heat in 2010, returns to the team that he led to the NBA Finals on multiple occasions. Fans in Cleveland are ecstatic at the news, and are already dreaming of a championship season with James back in the fold.",
    id: "ef45gh67ij",
    date: new Date(),
  },
  {
    slug: "business-news",
    img_url: "https://picsum.photos/800/600?random=8",
    title: "Amazon Announces Record Profits in Q3 2023",
    body: 'E-commerce giant Amazon has reported record profits for the third quarter of 2023, thanks in part to the continued growth of its cloud computing division and the success of its Prime subscription service. The company posted a net income of $10.1 billion for the quarter, up from $6.3 billion in the same period last year. CEO Jeff Bezos hailed the results as a testament to Amazon\'s "relentless focus on customer satisfaction", and said the company is well-positioned for future growth.',
    id: "gh67kqdl89mn",
    date: new Date(),
  },
  {
    slug: "politics-news",
    img_url: "https://picsum.photos/800/600?random=7",
    title: "President Biden Signs Historic Infrastructure Bill into Law",
    body: 'After months of negotiations and intense debate, President Joe Biden has signed the Infrastructure Investment and Jobs Act into law, marking a major victory for his administration and for infrastructure advocates across the country. The $1.2 trillion bill includes funding for a wide range of projects, including roads, bridges, public transit, and high-speed internet. Biden hailed the bill as a "once-in-a-generation investment" that will create millions of jobs and help rebuild the country\'s aging infrastructure.',
    id: "mn89o45p12qr",
    date: new Date(),
  },

  {
    slug: "sports-news",
    img_url: "https://picsum.photos/800/600?random=10",
    title: "LeBron James Returns to Cleveland Cavaliers in Blockbuster Trade",
    body: "In a stunning move that has sent shockwaves through the NBA, LeBron James has been traded back to the Cleveland Cavaliers in exchange for three first-round draft picks and two key players. James, who famously left the Cavaliers to join the Miami Heat in 2010, returns to the team that he led to the NBA Finals on multiple occasions. Fans in Cleveland are ecstatic at the news, and are already dreaming of a championship season with James back in the fold.",
    id: "çef45gh67ij",
    date: new Date(),
  },
  {
    slug: "business-news",
    img_url: "https://picsum.photos/800/600?random=11",
    title: "Amazon Announces Record Profits in Q3 2023",
    body: 'E-commerce giant Amazon has reported record profits for the third quarter of 2023, thanks in part to the continued growth of its cloud computing division and the success of its Prime subscription service. The company posted a net income of $10.1 billion for the quarter, up from $6.3 billion in the same period last year. CEO Jeff Bezos hailed the results as a testament to Amazon\'s "relentless focus on customer satisfaction", and said the company is well-positioned for future growth.',
    id: "gh67kl89mnw",
    date: new Date(),
  },
  {
    slug: "politics-news",
    img_url: "https://picsum.photos/800/600?random=12",
    title: "President Biden Signs Historic Infrastructure Bill into Law",
    body: 'After months of negotiations and intense debate, President Joe Biden has signed the Infrastructure Investment and Jobs Act into law, marking a major victory for his administration and for infrastructure advocates across the country. The $1.2 trillion bill includes funding for a wide range of projects, including roads, bridges, public transit, and high-speed internet. Biden hailed the bill as a "once-in-a-generation investment" that will create millions of jobs and help rebuild the country\'s aging infrastructure.',
    id: "mn8hdp12qr",
    date: new Date(),
  },

  {
    slug: "sports-news",
    img_url: "https://picsum.photos/800/600?random=14",
    title: "LeBron James Returns to Cleveland Cavaliers in Blockbuster Trade",
    body: "In a stunning move that has sent shockwaves through the NBA, LeBron James has been traded back to the Cleveland Cavaliers in exchange for three first-round draft picks and two key players. James, who famously left the Cavaliers to join the Miami Heat in 2010, returns to the team that he led to the NBA Finals on multiple occasions. Fans in Cleveland are ecstatic at the news, and are already dreaming of a championship season with James back in the fold.",
    id: "ef45gh67ij1",
    date: new Date(),
  },
  {
    slug: "business-news",
    img_url: "https://picsum.photos/800/600?random=13",
    title: "Amazon Announces Record Profits in Q3 2023",
    body: 'E-commerce giant Amazon has reported record profits for the third quarter of 2023, thanks in part to the continued growth of its cloud computing division and the success of its Prime subscription service. The company posted a net income of $10.1 billion for the quarter, up from $6.3 billion in the same period last year. CEO Jeff Bezos hailed the results as a testament to Amazon\'s "relentless focus on customer satisfaction", and said the company is well-positioned for future growth.',
    id: "gh67kl89mn",
    date: new Date(),
  },
  {
    slug: "politics-news",
    img_url: "https://picsum.photos/800/600?random=15",
    title: "President Biden Signs Historic Infrastructure Bill into Law",
    body: 'After months of negotiations and intense debate, President Joe Biden has signed the Infrastructure Investment and Jobs Act into law, marking a major victory for his administration and for infrastructure advocates across the country. The $1.2 trillion bill includes funding for a wide range of projects, including roads, bridges, public transit, and high-speed internet. Biden hailed the bill as a "once-in-a-generation investment" that will create millions of jobs and help rebuild the country\'s aging infrastructure.',
    id: "mn89op12qr",
    date: new Date(),
  },
];

export const slide: ISlide[] = [
  {
    title: "Nature's Beauty",
    image_url: "https://picsum.photos/500/300?random=2",
    id: "23456",
  },
  {
    title: "Abstract Shapes",
    image_url: "https://picsum.photos/500/300?random=1",
    id: "12345",
  },
  {
    title: "City Life",
    image_url: "https://picsum.photos/500/300?random=3",
    id: "34567",
  },
  {
    title: "Sunny Beach",
    image_url: "https://picsum.photos/500/300?random=4",
    id: "45678",
  },
  {
    title: "Wilderness Adventure",
    image_url: "https://picsum.photos/500/300?random=5",
    id: "56789",
  },
];

export type showMenuProp = {
  showMenuHandler: () => void;
};
