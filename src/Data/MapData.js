const MapData = [
  {
    id: 1,
    keyPlace: "The Rostov House In Moscow",
    whichChar: "This is where Natasha Rostava is first seen in the plot",
    streetName: "Povarskaya Street",
    lat: 55.7556666767,
    long: 37.5908333433,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Vyazemskiy-Dolgorukiy_estate_%28Znamenskiy_lane%29_3.jpg/220px-Vyazemskiy-Dolgorukiy_estate_%28Znamenskiy_lane%29_3.jpg",
    History:
      "Povarskaya Street follows the track of an ancient road from Moscow to Volokolamsk. In the 1570s Ivan Grozny allocated the street to oprichnina (private royal domain) and the street was taken over by his associates. In the 17th century, however, its upper-class population was diluted by lower classes. The street owes its name to cooks (povara) of the 17th century Muscovite court. Nearby lanes are also named after various court servants: bakers (Khlebny Lane), tablecloth weavers (Skatertny Lane), etc."
  },
  {
    id: 2,
    keyPlace: "The Site Of The Battle Of Austerlitz",
    whichChar:
      "A wounded Prince Andrei is lying on a field staring up the sky when Napoleon appears",
    streetName: "Austerlitz in Moravia",
    lat: 49.128056,
    long: 16.7625,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg/315px-La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg",
    History:
      "The Battle of Austerlitz (2 December 1805/11 Frimaire An XIV FRC), also known as the Battle of the Three Emperors, was one of the most important and decisive engagements of the Napoleonic Wars. The battle occurred near the town of Austerlitz in the Austrian Empire (modern-day Slavkov u Brna in the Czech Republic). The decisive victory of Napoleon's Grande Armée at Austerlitz brought the War of the Third Coalition to a rapid end, with the Treaty of Pressburg signed by the Austrians later in the month.[6] The battle is often cited as a tactical masterpiece, in the same league as other historic engagements like Cannae or Gaugamela."
  },
  {
    id: 3,
    keyPlace: "The Bogucharovo Estate",
    whichChar: "Prince Andrei resides here after the Battle of Austerlitz",
    streetName: "City of Tula, Russia",
    lat: 54.335809,
    long: 37.569225,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bogucharovo_Estate_%28album_by_Dmitry_Khomyakov%29_01.jpg?20221126095654",
    History:
      "The Bogucharovo Estate was a country estate owned by the Bolkonsky family in War and Peace. It was the childhood home of Prince Andrei Bolkonsky and the setting for his marriage to Lise. The estate was described as being in disrepair and unimpressive compared to other estates in the novel. However, it held sentimental value for the Bolkonsky family and played a significant role in their personal histories."
  },
  {
    id: 4,
    keyPlace: "The Otradnoye Estate",
    whichChar:
      "Natasha, Sonya, Count Ilya, Countess Natalya, Petya, Nikolai. It serves as a country home, where the characters bond, reflect on life, and seek refuge from the chaos of war.",
    streetName: "Ostradnoye, Russia",
    lat: 59.783333,
    long: 30.816667,
    img:
      "https://cdn2.oceansbridge.com/2017/07/26195058/In-The-Rooms-Of-A-Semenov-Estate-Of-Otradnoye-1840s-Fedor-Slavyansky-Oil-Painting-768x368.jpg",
    History:
      "It serves as the residence of the Rostov family, one of the book's central characters, and their interactions with the estate and its inhabitants drive much of the plot. During the Napoleonic Wars, the estate is also used as a military headquarters, and several key battles are planned and executed from there. The estate's social significance is also highlighted, as it serves as a gathering place for the aristocracy and a venue for lavish parties and events. Overall, the estate represents the intersection of the personal and political spheres in the lives of the characters, reflecting the tumultuous times in which they live."
  },
  {
    id: 5,
    keyPlace: "The Enlish Embankment",
    whichChar:
      "English Embankment is a location in St. Petersburg where several characters, including Pierre Bezukhov and Anna Pavlovna, reside. It serves as a setting for various social events and gatherings.",
    streetName: "Great Neva/Bolshaya Neva",
    lat: 59.934,
    long: 30.283,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Spb_06-2012_English_Embankment_01.jpg/300px-Spb_06-2012_English_Embankment_01.jpg",
    History:
      "In War and Peace the English Embankment serves as a symbol of wealth and high society in St. Petersburg. Its influence on characters such as Pierre Bezukhov and Anna Pavlovna is demonstrated through their attendance at social events hosted by other wealthy residents of the area. The neighborhood also highlights the class divisions in Russian society, as the characters who live on the English Embankment are often portrayed as being disconnected from the struggles of ordinary people. Overall, the English Embankment plays a significant role in shaping the characters' perspectives and interactions with each other throughout the novel."
  },
  {
    id: 6,
    keyPlace: "The Bolkonsky House In Moscow",
    whichChar:
      "It is the home of Prince Andrei Bolkonsky and his father, Prince Nikolai Bolkonsky, and serves as a setting for several key events in the story.",
    streetName: "9 Vozdvizhenka Street",
    lat: 55.7526,
    long: 37.6052,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Vozdvizenka9.jpg/310px-Vozdvizenka9.jpg",
    History:
      "It serves as the home of Prince Andrei Bolkonsky and his father, Prince Nikolai Bolkonsky, and influences the characters in several ways. The house is depicted as a cold and austere environment, reflecting Prince Nikolai's strict and uncompromising personality. This environment shapes Prince Andrei's outlook on life, leading him to seek greater meaning and purpose beyond his privileged position. The house also serves as a setting for key events in the story, such as Prince Andrei's confrontation with his father and his eventual death. Overall, the Bolkonsky house plays a significant role in shaping the characters' experiences and interactions throughout the novel."
  },
  {
    id: 7,
    keyPlace: "The Borodinskoye Field",
    whichChar:
      "It is the site of the Battle of Borodino between the French and Russian armies",
    streetName:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Borodino_Memorial_2009.JPG/250px-Borodino_Memorial_2009.JPG",
    lat: 55.533333,
    long: 35.816667,
    img:
      "data:image/jpeg;base64,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",
    History:
      "The battle and its aftermath influence several characters in different ways. Andrei Bolkonsky, who is wounded in the battle, undergoes a transformation in his outlook on life. Pierre Bezukhov, who witnesses the horrors of war firsthand, is also profoundly affected. The battle also leads to the death of several major characters, including Prince Bagration and Petya Rostov, further shaping the course of the story. Overall, the Borodinskoye field and the battle that takes place there have a significant impact on the characters and the events of the novel."
  },
  {
    id: 8,
    keyPlace: "The Poklonny Hill",
    whichChar:
      "It was the site of a military review by Napoleon Bonaparte before his invasion of Russia, and serves as a reminder of the conflict that looms over the story.",
    streetName: "",
    lat: 55.731667,
    long: 37.506667,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Victory_park_on_Poklonnaya_Hill1.jpg/320px-Victory_park_on_Poklonnaya_Hill1.jpg",
    History:
      "The Poklonny Field, while only briefly mentioned in War and Peace serves as a symbol of the looming threat of Napoleon's invasion of Russia. The fear and uncertainty caused by this event shape the characters' experiences throughout the novel. The field is a reminder of the danger and potential loss of life that awaits them. It also underscores the social and political tensions that existed at the time. While not a major setting in the story, the Poklonny Field and the events associated with it have a significant impact on the characters and the larger narrative of War and Peace."
  },
  {
    id: 9,
    keyPlace: "Mytischhi",
    whichChar:
      "Mytishchi is a location in War and Peace outside of Moscow, where a battle between the Russian and French armies takes place. It serves as a setting for key events in the story.",
    streetName: "Mytishchi",
    lat: 55.916667,
    long: 37.766667,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Voloshinoi_str_2011.jpg/250px-Voloshinoi_str_2011.jpg",
    History:
      "It becomes a crucial location during the French invasion of Russia, as the Russian army retreats through Mytishchi, causing chaos and destruction. The town's destruction and suffering impact several characters, including Natasha Rostova, who witnesses the horrors of war and develops a new perspective on life. The devastation of Mytishchi also symbolizes the larger devastation of the Napoleonic Wars on both the individual and societal levels."
  },
  {
    id: 10,
    keyPlace: "Bald Hills",
    whichChar:
      "The Bald Hills is a country estate owned by the Bolkonsky family in War and Peace. It serves as a setting for several important events in the story, including Prince Andrei's courtship of Natasha Rostova.",
    streetName: "",
    lat: 51.544444,
    long: 44.838889,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C_%D0%98%D0%BE%D0%B0%D0%BD%D0%BD%D0%B0_%D0%9F%D1%80%D0%B5%D0%B4%D1%82%D0%B5%D1%87%D0%B8_%D0%B2_%D1%81%D0%B5%D0%BB%D0%B5_%D0%9B%D1%8B%D1%81%D1%8B%D0%B5_%D0%93%D0%BE%D1%80%D1%8B_%28%D0%A1%D1%82%D0%B0%D1%80%D0%B0%D1%8F_%D0%91%D0%B0%D1%85%D0%BC%D0%B5%D1%82%D1%8C%D0%B5%D0%B2%D0%BA%D0%B0%29_%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9_%D0%BE%D0%B1%D0%BB._%282%29.jpg/220px-%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C_%D0%98%D0%BE%D0%B0%D0%BD%D0%BD%D0%B0_%D0%9F%D1%80%D0%B5%D0%B4%D1%82%D0%B5%D1%87%D0%B8_%D0%B2_%D1%81%D0%B5%D0%BB%D0%B5_%D0%9B%D1%8B%D1%81%D1%8B%D0%B5_%D0%93%D0%BE%D1%80%D1%8B_%28%D0%A1%D1%82%D0%B0%D1%80%D0%B0%D1%8F_%D0%91%D0%B0%D1%85%D0%BC%D0%B5%D1%82%D1%8C%D0%B5%D0%B2%D0%BA%D0%B0%29_%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9_%D0%BE%D0%B1%D0%BB._%282%29.jpg",
    History:
      "It is depicted as a place of beauty and tranquility, providing a contrast to the more austere atmosphere of the Bolkonsky house in Moscow. The estate is also a setting for key events in the story, including Prince Andrei's courtship of Natasha Rostova. The estate's idyllic nature and its importance to the characters help to underscore the themes of love, family, and the pursuit of happiness that run throughout the novel."
  }
];

export default MapData;
