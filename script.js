// 2. Syllabus + Notes Data - FULL Book A + Writing + Stories + Comp
const topics = [
  "1. The Honest Woodcutter", "2. The Greedy Dog", "3. My Mother",
  "4. A Rainy Day", "5. The Village School Master", "6. The Quack Doctor",
  "7. The Lion and The Mouse", "8. Allama Iqbal", "9. The Poor Girl",
  "--- Writing Section ---",
  "Application for Leave", "Letter to Friend", "Essay: My School", "Essay: Science",
  "--- Stories ---",
  "Story: The Thirsty Crow", "Story: Honesty is the Best Policy",
  "--- Comprehension ---",
  "Unseen Passage 1"
];

const notesData = {
  // --- Book A Topics ---
  "1. The Honest Woodcutter": "<b>Q1: Moral?</b> Honesty is the best policy.<br><b>MCQ:</b> The woodcutter was ___ a) Greedy b) Honest c) Lazy",
  "2. The Greedy Dog": "<b>Q1:</b> What did the dog lose? <b>Ans:</b> His piece of meat.",
  "3. My Mother": "<b>Q1:</b> Who is the poem about? <b>Ans:</b> His Mother.",

  // --- Applications ---
  "Application for Leave": `
  <b>Q. Write an application to the Headmaster for 3 days leave.</b>
  <br><br>To<br>The Headmaster,<br>Govt. High School, Sillanwali.
  <br><br>Subject: Application for leave.
  <br><br>Respected Sir, <br> 
  With due respect, I beg to state that my cousin is ill. I have to go to Lahore to see him. So, I cannot attend school for three days.
  <br><br>I, therefore, request you to kindly grant me leave for three days from 5th to 7th May.
  <br><br>I shall be very thankful to you.
  <br><br>Yours obediently,<br>Ali Ahmad<br>Class 8th, Roll No. 15<br>Dated: 4th May 2026
  `,

  // --- Letters ---
  "Letter to Friend": `
  <b>Q. Write a letter to your friend congratulating him on his success.</b>
  <br><br>Sillanwali, <br>May 5, 2026
  <br><br>My Dear Ahmad, <br>
  I was very glad to learn of your brilliant success in the Class 8th examination. Please accept my heartiest congratulations.
  <br><br>You have made your parents and teachers proud. I am sure you will work hard in future also.
  <br><br>When will you come to Sillanwali? We will celebrate together.
  <br><br>Yours sincerely,<br>Usman
  `,

  // --- Essays ---
  "Essay: My School": `
  <b>Essay: My School</b>
  <br><br><b>Introduction:</b> My school is Govt. High School Sillanwali. It is a famous school.
  <br><b>Building:</b> It has a big building with many classrooms, a library and a playground.
  <br><b>Teachers:</b> Our teachers are kind and hardworking. They teach us well.
  <br><b>Students:</b> There are about 500 students. We play and study together.
  <br><b>Conclusion:</b> I love my school very much. It is my second home.
  `,
  "Essay: Science": `
  <b>Essay: Science and its Uses</b>
  <br><br><b>Introduction:</b> Science is a blessing of God. It has changed our life.
  <br><b>Uses:</b> Electricity, Mobile, Train, Aeroplane, and Medicine are gifts of science.
  <br><b>Disadvantages:</b> Bombs, Guns and Pollution are also made by science.
  <br><b>Conclusion:</b> We should use science for the good of mankind, not for destruction.
  `,

  // --- Stories - 150 Words PEC Standard ---
  "Story: The Thirsty Crow": `
  <b>Story: The Thirsty Crow</b>
  <br><br>Once, a crow was very thirsty. He flew here and there in search of water. At last, he found a pitcher. But the water was at the bottom. 
  <br><br>The crow could not reach it with his beak. He was very clever. He saw some pebbles lying near the pitcher. 
  <br><br>He picked up the pebbles one by one and dropped them into the pitcher. The water rose up. The crow drank the water and flew away happily.
  <br><br><b>Moral: Necessity is the mother of invention.</b>
  `,
  "Story: Honesty is the Best Policy": `
  <b>Story: Honesty is the Best Policy</b>
  <br><br>Once a woodcutter was cutting wood near a river. His axe fell into the water. He began to weep. 
  <br><br>A fairy came out of the water. She brought a golden axe and asked, "Is this yours?" The woodcutter said, "No". 
  <br><br>Then she brought a silver axe. He again said, "No". At last, she brought his own iron axe. He cried, "Yes, this is mine." 
  <br><br>The fairy was pleased with his honesty. She gave him all the three axes as a reward.
  <br><br><b>Moral: Honesty is the best policy.</b>
  `,

  // --- Comprehension - Unseen Passage ---
  "Unseen Passage 1": `
  <b>Read the passage and answer the questions.</b>
  <br><br><b>Passage:</b> A farmer had four sons. They were always quarrelling. The farmer was very worried. When he was about to die, he called his sons. He gave them a bundle of sticks and asked them to break it. They could not break it. Then he untied the bundle and gave one stick to each son. They broke the sticks easily. The father said, "United we stand, divided we fall."
  <br><br><b>Q1. Why was the farmer worried?</b> <br><b>Ans:</b> Because his four sons were always quarrelling.
  <br><br><b>Q2. What did the farmer ask his sons to do?</b> <br><b>Ans:</b> He asked them to break a bundle of sticks.
  <br><br><b>Q3. What is the moral of the story?</b> <br><b>Ans:</b> Unity is strength.
  `
};
