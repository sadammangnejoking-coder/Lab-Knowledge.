// ======================================
// LAB KNOWLEDGE - IQ PRACTICE SYSTEM
// TOTAL: 300 QUESTIONS
// 10 RANDOM QUESTIONS PER TEST
// ======================================

(function () {

"use strict";

const iqQuestionBank = [


{q:"What comes next? 2, 4, 6, 8, ?",o:["9","10","12","14"],a:1,e:"Each number increases by 2."},
{q:"What comes next? 3, 6, 12, 24, ?",o:["36","42","48","50"],a:2,e:"Each number is multiplied by 2."},
{q:"Which number is different?",o:["2","4","7","8"],a:2,e:"7 is odd; the others are even."},
{q:"If 5 + 3 = 8, what is 8 + 7?",o:["13","14","15","16"],a:2,e:"8 + 7 = 15."},
{q:"What comes next? 1, 4, 9, 16, ?",o:["20","25","30","36"],a:1,e:"These are square numbers."},
{q:"Which is the largest number?",o:["0.5","0.05","0.55","0.505"],a:2,e:"0.55 is the largest value."},
{q:"If today is Monday, what day will it be after 10 days?",o:["Wednesday","Thursday","Friday","Saturday"],a:1,e:"10 days after Monday is Thursday."},
{q:"Complete the series: 100, 90, 80, 70, ?",o:["50","55","60","65"],a:2,e:"Each number decreases by 10."},
{q:"Which shape has 3 sides?",o:["Square","Triangle","Circle","Rectangle"],a:1,e:"A triangle has three sides."},
{q:"How many months have 28 days?",o:["1","2","6","12"],a:3,e:"All 12 months have at least 28 days."},

{q:"A dozen means how many?",o:["10","11","12","15"],a:2,e:"One dozen equals 12."},
{q:"If 4 pens cost 20 rupees, what is the cost of 1 pen?",o:["4","5","6","8"],a:1,e:"20 divided by 4 equals 5."},
{q:"What is half of 90?",o:["35","40","45","50"],a:2,e:"90 divided by 2 equals 45."},
{q:"What comes next? 5, 10, 15, 20, ?",o:["22","25","30","35"],a:1,e:"Each number increases by 5."},
{q:"Which number is a prime number?",o:["9","15","17","21"],a:2,e:"17 has only two factors: 1 and 17."},
{q:"What is 15% of 100?",o:["10","15","20","25"],a:1,e:"15% of 100 is 15."},
{q:"If 3 workers finish a task in 6 days, how many worker-days are needed?",o:["9","12","18","21"],a:2,e:"3 multiplied by 6 equals 18 worker-days."},
{q:"What is the missing number? 7, 14, 21, ?, 35",o:["24","26","28","30"],a:2,e:"The series increases by 7."},
{q:"What is 9 × 8?",o:["63","72","81","89"],a:1,e:"9 multiplied by 8 equals 72."},
{q:"A clock shows 3:00. What is the angle between its hands?",o:["45°","60°","90°","180°"],a:2,e:"At 3:00 the hands form a 90-degree angle."},

{q:"Which word is the opposite of HOT?",o:["Warm","Cold","Dry","Heat"],a:1,e:"Cold is the opposite of hot."},
{q:"Which word does not belong?",o:["Apple","Mango","Banana","Carrot"],a:3,e:"Carrot is a vegetable; the others are fruits."},
{q:"Bird is to Fly as Fish is to:",o:["Walk","Swim","Run","Jump"],a:1,e:"Fish move by swimming."},
{q:"Which word is closest in meaning to HAPPY?",o:["Sad","Angry","Glad","Tired"],a:2,e:"Glad means happy."},
{q:"Complete the analogy: Doctor is to Hospital as Teacher is to:",o:["Market","School","Bank","Airport"],a:1,e:"A teacher commonly works in a school."},
{q:"Which one is spelled correctly?",o:["Becaus","Because","Beacause","Becouse"],a:1,e:"Because is the correct spelling."},
{q:"Which word is different?",o:["Monday","Tuesday","January","Friday"],a:2,e:"January is a month; the others are weekdays."},
{q:"Hand is to Glove as Foot is to:",o:["Cap","Sock","Shirt","Ring"],a:1,e:"A sock covers a foot."},
{q:"What is the opposite of EMPTY?",o:["Open","Full","Light","Small"],a:1,e:"Full is the opposite of empty."},
{q:"Which word can be made from the letters LISTEN?",o:["SILENT","STONE","LINES","TILES"],a:0,e:"SILENT uses exactly the letters in LISTEN."},

{q:"Ali is taller than Bilal. Bilal is taller than Ahmed. Who is shortest?",o:["Ali","Bilal","Ahmed","Cannot say"],a:2,e:"Ahmed is shorter than both Bilal and Ali."},
{q:"If all roses are flowers, which statement is correct?",o:["All flowers are roses","Roses are flowers","No roses are flowers","All plants are roses"],a:1,e:"Roses belong to the flower group."},
{q:"You face North and turn right. Which direction are you facing?",o:["West","South","East","North"],a:2,e:"A right turn from North points East."},
{q:"A is the brother of B. B is the sister of C. What is A to C?",o:["Brother","Sister","Father","Mother"],a:0,e:"A is C's brother."},
{q:"Which number completes the pattern? 2, 5, 8, 11, ?",o:["12","13","14","15"],a:2,e:"Each number increases by 3."},
{q:"If CAT is coded as DBU, how is DOG coded?",o:["EPH","EOG","FPH","DPH"],a:0,e:"Each letter moves one step forward."},
{q:"Which is the odd one out?",o:["Circle","Triangle","Square","Table"],a:3,e:"Table is an object; the others are shapes."},
{q:"A man walks 5 km East and then 5 km West. Where is he now?",o:["5 km East","5 km West","Starting point","10 km East"],a:2,e:"He returns to the starting point."},
{q:"If yesterday was Sunday, what is tomorrow?",o:["Monday","Tuesday","Wednesday","Saturday"],a:1,e:"Today is Monday; tomorrow is Tuesday."},
{q:"Which number does not fit? 4, 9, 16, 20, 25",o:["4","9","20","25"],a:2,e:"20 is not a perfect square."},

{q:"How many sides do two triangles have altogether?",o:["3","5","6","8"],a:2,e:"Each triangle has 3 sides; total 6."},
{q:"If you rearrange the letters of EARTH, which word can you make?",o:["HEART","HOUSE","RIVER","PLANT"],a:0,e:"HEART uses the same five letters."},
{q:"Which comes next? A, C, E, G, ?",o:["H","I","J","K"],a:1,e:"The series skips one letter each time."},
{q:"How many hours are there in 2 days?",o:["24","36","48","72"],a:2,e:"2 multiplied by 24 equals 48 hours."},
{q:"A basket contains 3 red and 2 blue balls. How many balls are there?",o:["4","5","6","7"],a:1,e:"3 + 2 = 5 balls."},
{q:"Which is heavier: 1 kg cotton or 1 kg iron?",o:["Cotton","Iron","Both equal","Cannot say"],a:2,e:"Both weigh exactly one kilogram."},
{q:"What comes next? 1, 1, 2, 3, 5, 8, ?",o:["10","11","12","13"],a:3,e:"Each number is the sum of the previous two."},
{q:"If 12 people shake hands with each other once, how many handshakes are there?",o:["44","56","66","72"],a:2,e:"12 × 11 ÷ 2 = 66 handshakes."},
{q:"Which number is missing? 81, 27, 9, 3, ?",o:["0","1","2","6"],a:1,e:"Each number is divided by 3."},
{q:"A train travels 60 km in one hour. How far does it travel in 2 hours at the same speed?",o:["90 km","100 km","120 km","140 km"],a:2,e:"60 multiplied by 2 equals 120 km."},

{q:"What comes next? 7, 14, 28, 56, ?",o:["84","98","112","120"],a:2,e:"Each number is multiplied by 2."},
{q:"What comes next? 2, 6, 12, 20, 30, ?",o:["36","40","42","48"],a:2,e:"The differences are 4, 6, 8, 10 and 12."},
{q:"Which number is the odd one out?",o:["16","25","36","45"],a:3,e:"16, 25 and 36 are perfect squares; 45 is not."},
{q:"What is 25% of 240?",o:["40","50","60","80"],a:2,e:"240 × 25 ÷ 100 = 60."},
{q:"If 6 books cost 300 rupees, what do 4 books cost at the same rate?",o:["150","180","200","240"],a:2,e:"One book costs 50 rupees; 4 cost 200 rupees."},
{q:"What comes next? 64, 32, 16, 8, ?",o:["2","4","6","10"],a:1,e:"Each number is divided by 2."},
{q:"Which is the smallest fraction?",o:["1/2","1/3","1/4","1/5"],a:3,e:"Among these unit fractions, 1/5 is the smallest."},
{q:"A number multiplied by 5 equals 65. What is the number?",o:["11","12","13","15"],a:2,e:"65 ÷ 5 = 13."},
{q:"What is the next prime number after 19?",o:["21","22","23","25"],a:2,e:"23 has exactly two positive factors: 1 and 23."},
{q:"If 3 pencils cost 45 rupees, how much do 8 pencils cost?",o:["100","110","120","135"],a:2,e:"One pencil costs 15 rupees; 8 cost 120 rupees."},

{q:"Which word is the opposite of ANCIENT?",o:["Old","Historic","Modern","Traditional"],a:2,e:"Modern means recent or belonging to the present."},
{q:"Choose the word closest in meaning to BRAVE.",o:["Courageous","Careless","Fearful","Quiet"],a:0,e:"Courageous means showing bravery."},
{q:"Complete the analogy: Eye is to See as Ear is to:",o:["Speak","Hear","Touch","Smell"],a:1,e:"Eyes are used for seeing and ears for hearing."},
{q:"Which one does not belong?",o:["Rose","Lily","Tulip","Oak"],a:3,e:"Oak is a tree; the others are flowers."},
{q:"Arrange these words in alphabetical order: Apple, Banana, Cherry, Date. Which comes second?",o:["Apple","Banana","Cherry","Date"],a:1,e:"The alphabetical order is Apple, Banana, Cherry, Date."},
{q:"Which word is correctly spelled?",o:["Neccessary","Necessary","Necesary","Necessery"],a:1,e:"Necessary is the correct spelling."},
{q:"Complete the analogy: Puppy is to Dog as Kitten is to:",o:["Horse","Cat","Cow","Goat"],a:1,e:"A kitten is a young cat."},
{q:"Which word is the opposite of GENEROUS?",o:["Kind","Selfish","Helpful","Friendly"],a:1,e:"Selfish describes someone unwilling to give or share."},
{q:"Which item belongs to the same group as January, March and May?",o:["Monday","August","Winter","Sunday"],a:1,e:"August is also a month."},
{q:"If BOOK is coded as CPPL, how is FISH coded using the same rule?",o:["GJTI","GJSH","EHRG","GITH"],a:0,e:"Each letter moves one position forward."},

{q:"Sara is older than Ayesha. Ayesha is older than Hina. Who is the youngest?",o:["Sara","Ayesha","Hina","Cannot determine"],a:2,e:"Hina is younger than both Sara and Ayesha."},
{q:"You are facing South. You turn left. Which direction are you facing?",o:["East","West","North","South"],a:0,e:"A left turn from South points East."},
{q:"A man walks 4 km North, then 3 km South. How far is he from his starting point?",o:["1 km North","1 km South","7 km North","7 km South"],a:0,e:"Four kilometres North minus three kilometres South leaves 1 km North."},
{q:"All cats are animals. Which statement must be true?",o:["All animals are cats","Some cats are not animals","All cats are animals","No animals are cats"],a:2,e:"This directly follows from the given statement."},
{q:"If today is Wednesday, what day will it be after 17 days?",o:["Friday","Saturday","Sunday","Monday"],a:1,e:"17 days equals 2 weeks and 3 days; Wednesday plus 3 days is Saturday."},
{q:"A is the father of B. B is the mother of C. What is A to C?",o:["Uncle","Grandfather","Brother","Cousin"],a:1,e:"A is the father of C's mother, so he is C's grandfather."},
{q:"Which number completes the pattern? 11, 22, 33, 44, ?",o:["50","55","60","66"],a:1,e:"Each number increases by 11."},
{q:"If every student in a class studies mathematics and Ali is a student in that class, what must be true?",o:["Ali studies science","Ali studies mathematics","Ali teaches mathematics","Ali is absent"],a:1,e:"Ali belongs to the class, so the given rule applies to him."},
{q:"Five people are standing in a line. Ahmed is first and Bilal is last. How many people stand between them?",o:["2","3","4","5"],a:1,e:"The second, third and fourth people stand between the first and last."},
{q:"Which direction is opposite to North-East?",o:["South-East","North-West","South-West","East"],a:2,e:"South-West is directly opposite North-East."},

{q:"What comes next? B, D, F, H, ?",o:["I","J","K","L"],a:1,e:"The sequence skips one letter each time."},
{q:"What comes next? 1, 8, 27, 64, ?",o:["100","125","144","216"],a:1,e:"These are cubes: 1³, 2³, 3³, 4³ and 5³."},
{q:"How many edges does a cube have?",o:["6","8","10","12"],a:3,e:"A cube has 12 edges."},
{q:"How many degrees are in a straight angle?",o:["90°","120°","180°","360°"],a:2,e:"A straight angle measures 180 degrees."},
{q:"If a rectangle has length 8 cm and width 5 cm, what is its area?",o:["13 cm²","26 cm²","40 cm²","80 cm²"],a:2,e:"Area = length × width = 8 × 5 = 40 cm²."},
{q:"What is the perimeter of a square with each side 7 cm?",o:["14 cm","21 cm","28 cm","49 cm"],a:2,e:"Perimeter = 4 × 7 = 28 cm."},
{q:"Which number is divisible by both 3 and 5?",o:["20","25","30","32"],a:2,e:"30 is divisible by 3 and 5."},
{q:"What is the average of 10, 20 and 30?",o:["15","20","25","30"],a:1,e:"(10 + 20 + 30) ÷ 3 = 20."},
{q:"A car travels 150 km in 3 hours. What is its average speed?",o:["40 km/h","45 km/h","50 km/h","60 km/h"],a:2,e:"Speed = distance ÷ time = 150 ÷ 3 = 50 km/h."},
{q:"What is 3/4 of 80?",o:["40","50","60","70"],a:2,e:"80 × 3 ÷ 4 = 60."},

{q:"A bag contains 4 red, 3 blue and 5 green balls. How many balls are there in total?",o:["10","11","12","13"],a:2,e:"4 + 3 + 5 = 12 balls."},
{q:"If you overtake the person in second place in a race, what position are you in?",o:["First","Second","Third","Fourth"],a:1,e:"You take the position of the person you overtook: second place."},
{q:"How many times does the digit 5 appear from 1 to 55?",o:["10","11","12","16"],a:2,e:"The digit 5 appears 6 times in the units place and 6 times in the tens place, making 12 appearances."},
{q:"A farmer has 17 sheep. All but 9 run away. How many remain?",o:["8","9","17","26"],a:1,e:"All but 9 means 9 sheep remain."},
{q:"What comes next? 121, 100, 81, 64, ?",o:["36","49","50","56"],a:1,e:"These are descending squares: 11², 10², 9², 8², 7²."},
{q:"If 2 machines make 2 items in 2 minutes, how long do 4 machines take to make 4 items at the same rate?",o:["1 minute","2 minutes","4 minutes","8 minutes"],a:1,e:"Each machine makes one item in 2 minutes, so 4 machines make 4 items in 2 minutes."},
{q:"Which number completes the series? 3, 9, 27, 81, ?",o:["162","189","216","243"],a:3,e:"Each number is multiplied by 3."},
{q:"A shop gives a discount of 10% on an item costing 500 rupees. What is the sale price?",o:["400","425","450","475"],a:2,e:"10% of 500 is 50; 500 − 50 = 450 rupees."},
{q:"How many minutes are there in 3 hours and 15 minutes?",o:["180","185","195","210"],a:2,e:"3 × 60 + 15 = 195 minutes."},
{q:"A number is increased by 20 and becomes 75. What was the original number?",o:["45","50","55","60"],a:2,e:"75 − 20 = 55."},

{q:"What comes next? 5, 10, 15, 20, ?",o:["22","25","30","35"],a:1,e:"Each number increases by 5."},
{q:"Which number is different?",o:["4","9","16","20"],a:3,e:"4, 9 and 16 are perfect squares; 20 is not."},
{q:"What is 12 × 8?",o:["86","94","96","98"],a:2,e:"12 multiplied by 8 equals 96."},
{q:"What comes next? 1, 4, 9, 16, ?",o:["20","24","25","36"],a:2,e:"These are square numbers: 1², 2², 3², 4², 5²."},
{q:"If A = 1, B = 2, what is D?",o:["3","4","5","6"],a:1,e:"D is the fourth letter."},
{q:"Which is the smallest number?",o:["0.5","0.05","0.55","0.15"],a:1,e:"0.05 is the smallest."},
{q:"What is 25% of 200?",o:["25","40","50","75"],a:2,e:"25% of 200 is 50."},
{q:"What comes next? 2, 6, 18, 54, ?",o:["108","162","180","216"],a:1,e:"Each number is multiplied by 3."},
{q:"Which one is a prime number?",o:["21","27","29","33"],a:2,e:"29 is divisible only by 1 and itself."},
{q:"How many sides does a hexagon have?",o:["5","6","7","8"],a:1,e:"A hexagon has six sides."},

{q:"What is 144 ÷ 12?",o:["10","11","12","14"],a:2,e:"144 divided by 12 equals 12."},
{q:"Find the missing number: 3, 6, 9, ?, 15",o:["10","11","12","13"],a:2,e:"The sequence increases by 3."},
{q:"Which word does not belong?",o:["Apple","Mango","Carrot","Banana"],a:2,e:"Carrot is a vegetable; the others are fruits."},
{q:"If 5 pens cost 50 rupees, what is the cost of 1 pen?",o:["5","10","15","20"],a:1,e:"50 divided by 5 equals 10."},
{q:"What is the opposite of Ancient?",o:["Old","Modern","Historic","Past"],a:1,e:"Modern means recent or contemporary."},
{q:"What comes next? 100, 90, 80, 70, ?",o:["65","60","55","50"],a:1,e:"Each number decreases by 10."},
{q:"How many minutes are in 3 hours?",o:["120","150","180","200"],a:2,e:"3 × 60 = 180 minutes."},
{q:"Which number is even?",o:["13","17","21","28"],a:3,e:"28 is divisible by 2."},
{q:"What is 7 squared?",o:["14","21","42","49"],a:3,e:"7 × 7 = 49."},
{q:"Find the missing number: 2, 5, 8, 11, ?",o:["12","13","14","15"],a:2,e:"Each number increases by 3."},

{q:"Which is the longest unit of time?",o:["Second","Minute","Hour","Day"],a:3,e:"A day contains 24 hours."},
{q:"If today is Monday, what day will it be after 10 days?",o:["Wednesday","Thursday","Friday","Saturday"],a:1,e:"Ten days after Monday is Thursday."},
{q:"What is 15% of 100?",o:["10","15","20","25"],a:1,e:"15% of 100 equals 15."},
{q:"Which shape has no corners?",o:["Square","Triangle","Circle","Rectangle"],a:2,e:"A circle has no corners."},
{q:"What comes next? 1, 2, 4, 8, 16, ?",o:["24","30","32","36"],a:2,e:"Each number is doubled."},
{q:"Which is the largest fraction?",o:["1/2","1/4","3/4","1/3"],a:2,e:"3/4 is greater than the other fractions."},
{q:"How many months have 31 days?",o:["5","6","7","8"],a:2,e:"Seven months have 31 days."},
{q:"What is 18 + 27?",o:["35","40","45","50"],a:2,e:"18 + 27 = 45."},
{q:"Which number completes the pattern? 11, 22, 33, ?",o:["40","42","44","55"],a:2,e:"The sequence increases by 11."},
{q:"Which organ pumps blood in the human body?",o:["Liver","Heart","Kidney","Lung"],a:1,e:"The heart pumps blood throughout the body."},

{q:"What is the chemical symbol for oxygen?",o:["Ox","O","Og","On"],a:1,e:"O is the chemical symbol for oxygen."},
{q:"How many bones are normally present in an adult human?",o:["196","206","216","226"],a:1,e:"An adult human skeleton typically has 206 bones."},
{q:"Which planet is known as the Red Planet?",o:["Venus","Mars","Jupiter","Saturn"],a:1,e:"Iron oxide gives Mars its reddish appearance."},
{q:"What is the boiling point of water at sea level?",o:["50°C","75°C","100°C","150°C"],a:2,e:"Water boils at approximately 100°C at standard atmospheric pressure."},
{q:"Which blood cells help fight infections?",o:["RBCs","WBCs","Platelets","Plasma"],a:1,e:"White blood cells help defend the body against infections."},
{q:"What does CBC stand for?",o:["Complete Blood Count","Common Blood Chemistry","Cell Blood Control","Complete Body Check"],a:0,e:"CBC stands for Complete Blood Count."},
{q:"Which instrument measures temperature?",o:["Barometer","Thermometer","Hygrometer","Stethoscope"],a:1,e:"A thermometer measures temperature."},
{q:"Which vitamin is produced in skin through sunlight exposure?",o:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],a:3,e:"Sunlight exposure helps the skin produce vitamin D."},
{q:"What is the normal pH of pure water at 25°C?",o:["5","6","7","8"],a:2,e:"Pure water has a pH of approximately 7."},
{q:"Which organ filters blood to produce urine?",o:["Heart","Kidney","Lungs","Stomach"],a:1,e:"The kidneys filter blood and produce urine."},

{q:"What is the full form of ECG?",o:["Electrocardiogram","Electrochemical Graph","Electronic Cardio Gauge","External Cardiac Guide"],a:0,e:"ECG stands for Electrocardiogram."},
{q:"Which component of blood helps in clotting?",o:["RBCs","WBCs","Platelets","Albumin"],a:2,e:"Platelets play an important role in blood clotting."},
{q:"Which gas do humans need for respiration?",o:["Nitrogen","Oxygen","Carbon dioxide","Hydrogen"],a:1,e:"Human cells use oxygen for aerobic respiration."},
{q:"What is the main function of haemoglobin?",o:["Fight bacteria","Carry oxygen","Digest food","Clot blood"],a:1,e:"Haemoglobin carries oxygen in red blood cells."},
{q:"Which laboratory instrument is used to separate serum by centrifugation?",o:["Microscope","Centrifuge","Incubator","Autoclave"],a:1,e:"A centrifuge separates components based on density."},
{q:"What does ESR stand for?",o:["Erythrocyte Sedimentation Rate","Estimated Serum Reaction","External Sample Reading","Erythrocyte Serum Ratio"],a:0,e:"ESR stands for Erythrocyte Sedimentation Rate."},
{q:"Which sample is commonly used for a routine CBC?",o:["Urine","EDTA blood","Plain water","Saliva"],a:1,e:"EDTA blood is commonly used for CBC testing."},
{q:"What is the full form of DNA?",o:["Deoxyribonucleic Acid","Dynamic Nuclear Atom","Double Nitrogen Acid","Deoxygenated Nucleic Atom"],a:0,e:"DNA stands for Deoxyribonucleic Acid."},
{q:"Which microscope component controls the amount of light?",o:["Eyepiece","Stage","Diaphragm","Objective lens"],a:2,e:"The diaphragm regulates the light reaching the specimen."},
{q:"Which test is commonly used to measure blood glucose?",o:["CBC","Blood glucose test","ESR","PT"],a:1,e:"A blood glucose test measures glucose concentration in blood."},

// ======================================
// QUESTIONS 151–200
// ======================================

{q:"Which anticoagulant is commonly used for coagulation testing?",o:["EDTA","Sodium citrate","Heparin","Fluoride"],a:1,e:"Sodium citrate is commonly used for coagulation tests."},

{q:"What does HDL stand for?",o:["High Density Lipoprotein","Heavy Density Lipid","High Direct Lipid","Human Density Lipoprotein"],a:0,e:"HDL stands for High Density Lipoprotein."},

{q:"What comes next? 4, 9, 16, 25, 36, ?",o:["42","45","49","50"],a:2,e:"These are consecutive square numbers: 2², 3², 4², 5², 6², then 7² = 49."},

{q:"What comes next? 5, 11, 23, 47, ?",o:["85","91","95","97"],a:2,e:"Each number is multiplied by 2 and then 1 is added. 47 × 2 + 1 = 95."},

{q:"Find the missing number: 2, 5, 10, 17, 26, ?",o:["35","36","37","38"],a:2,e:"The differences are 3, 5, 7, 9, then 11. 26 + 11 = 37."},

{q:"Which number does not belong?",o:["27","64","125","144"],a:3,e:"27, 64 and 125 are cubes. 144 is not a cube."},

{q:"What is 35% of 200?",o:["60","65","70","75"],a:2,e:"35% of 200 = 70."},

{q:"If 8 workers complete a job in 6 days, how many worker-days are required?",o:["14","36","48","56"],a:2,e:"8 × 6 = 48 worker-days."},

{q:"What comes next? 144, 72, 36, 18, ?",o:["6","8","9","12"],a:2,e:"Each number is divided by 2. 18 ÷ 2 = 9."},

{q:"Which is the greatest fraction?",o:["1/2","2/3","3/4","4/5"],a:3,e:"4/5 = 0.8, which is the greatest."},

{q:"A number divided by 4 gives 18. What is the number?",o:["64","68","72","76"],a:2,e:"18 × 4 = 72."},

{q:"What is the LCM of 6 and 8?",o:["12","18","24","48"],a:2,e:"24 is the smallest number divisible by both 6 and 8."},

{q:"What comes next? 10, 13, 19, 28, 40, ?",o:["50","53","55","58"],a:2,e:"The differences are 3, 6, 9, 12, then 15. 40 + 15 = 55."},

{q:"An item bought for Rs. 500 is sold for Rs. 600. What is the profit percentage?",o:["10%","15%","20%","25%"],a:2,e:"Profit is 100. Profit percentage = 100 ÷ 500 × 100 = 20%."},

{q:"Find the average of 12, 18, 24 and 30.",o:["18","20","21","22"],a:2,e:"(12 + 18 + 24 + 30) ÷ 4 = 21."},

{q:"If 5 machines produce 50 products in one hour, how many products will 10 machines produce in one hour?",o:["75","90","100","120"],a:2,e:"Double the machines produce double the products: 100."},

{q:"What is the square root of 225?",o:["12","13","14","15"],a:3,e:"15 × 15 = 225."},

{q:"Which number is divisible by 9?",o:["124","135","142","151"],a:1,e:"The digits of 135 add up to 9, so it is divisible by 9."},

{q:"A car travels 240 km in 4 hours. What is its average speed?",o:["40 km/h","50 km/h","60 km/h","80 km/h"],a:2,e:"240 ÷ 4 = 60 km/h."},

{q:"What is 2/5 of 150?",o:["50","55","60","65"],a:2,e:"150 × 2/5 = 60."},

{q:"A product costs Rs. 800. Its price increases by 15%. What is the new price?",o:["Rs. 880","Rs. 900","Rs. 920","Rs. 940"],a:2,e:"15% of 800 is 120. New price = 800 + 120 = 920."},

{q:"What is the HCF of 18 and 30?",o:["3","6","9","12"],a:1,e:"6 is the highest common factor of 18 and 30."},

{q:"What does ABUNDANT mean?",o:["Rare","Plentiful","Empty","Weak"],a:1,e:"Abundant means available in large quantities."},

{q:"What is the opposite of TRANSPARENT?",o:["Clear","Bright","Opaque","Visible"],a:2,e:"Opaque means not allowing light to pass through."},

{q:"Pen is to Write as Knife is to:",o:["Draw","Cut","Read","Paint"],a:1,e:"A pen is used to write; a knife is used to cut."},

{q:"Which one is different?",o:["Mercury","Venus","Mars","Moon"],a:3,e:"The Moon is a natural satellite, while the others are planets."},

{q:"Choose the correct spelling.",o:["Acommodation","Accommodation","Accomodation","Acomodation"],a:1,e:"The correct spelling is Accommodation."},

{q:"Which instrument measures atmospheric pressure?",o:["Thermometer","Barometer","Hygrometer","Stethoscope"],a:1,e:"A barometer measures atmospheric pressure."},

{q:"What is the opposite of CONTRACT?",o:["Reduce","Expand","Shrink","Decrease"],a:1,e:"Expand means to increase in size or volume."},

{q:"Bird is to Nest as Bee is to:",o:["Cave","Hive","Den","Web"],a:1,e:"A bee lives in a hive, just as a bird lives in a nest."},

{q:"Which one is a unit of mass?",o:["Kilogram","Litre","Metre","Second"],a:0,e:"Kilogram is the SI base unit of mass."},

{q:"Author is to Book as Composer is to:",o:["Painting","Music","Building","Medicine"],a:1,e:"An author writes books; a composer creates music."},

{q:"All doctors are educated. Sara is a doctor. What can we conclude?",o:["Sara is educated","Sara is a teacher","Sara is a nurse","No conclusion"],a:0,e:"Since all doctors are educated and Sara is a doctor, Sara is educated."},

{q:"Ali is older than Bilal. Bilal is older than Kamran. Who is the youngest?",o:["Ali","Bilal","Kamran","Cannot determine"],a:2,e:"The order is Ali, Bilal, Kamran. Kamran is youngest."},

{q:"A person faces East and turns 180 degrees. Which direction is he facing?",o:["North","South","West","East"],a:2,e:"A 180-degree turn from East points West."},

{q:"If yesterday was Thursday, what day will it be 3 days after tomorrow?",o:["Sunday","Monday","Tuesday","Wednesday"],a:2,e:"Yesterday was Thursday, so today is Friday. Tomorrow is Saturday; three days after Saturday is Tuesday."},

{q:"A is the sister of B. B is the father of C. What is A to C?",o:["Mother","Sister","Aunt","Grandmother"],a:2,e:"A is the sister of C's father, so A is C's aunt."},

{q:"All squares are rectangles. Which statement is correct?",o:["All rectangles are squares","Every square is a rectangle","No square is a rectangle","All circles are rectangles"],a:1,e:"A square has all the properties of a rectangle."},

{q:"Five people sit in a row. Who occupies the middle position?",o:["First person","Second person","Third person","Fourth person"],a:2,e:"The third position is the middle of five positions."},

{q:"If NORTH is coded as OPSUI, how is SOUTH coded using the same rule?",o:["TPVUI","TPVTH","RNTUG","TPVTI"],a:0,e:"Each letter moves one position forward: SOUTH becomes TPVUI."},

{q:"A man walks 6 km West and then 8 km North. How far is he from the starting point?",o:["8 km","10 km","12 km","14 km"],a:1,e:"Using the Pythagorean theorem, √(6² + 8²) = 10 km."},

{q:"What is the opposite direction of South-East?",o:["North-East","North-West","South-West","East"],a:1,e:"The opposite of South-East is North-West."},

{q:"What comes next? C, F, I, L, ?",o:["M","N","O","P"],a:2,e:"Each letter advances three positions. The next letter is O."},

{q:"What comes next? 2, 3, 5, 8, 12, 17, ?",o:["21","22","23","24"],a:2,e:"The differences are 1, 2, 3, 4, 5, then 6. 17 + 6 = 23."},

{q:"How many faces does a cube have?",o:["4","5","6","8"],a:2,e:"A cube has six square faces."},

{q:"How many degrees are in a right angle?",o:["45°","60°","90°","180°"],a:2,e:"A right angle measures 90 degrees."},

{q:"What is the perimeter of a rectangle with length 8 cm and width 5 cm?",o:["13 cm","26 cm","30 cm","40 cm"],a:1,e:"Perimeter = 2 × (8 + 5) = 26 cm."},

{q:"What comes next? 1, 4, 13, 40, ?",o:["80","100","121","123"],a:3,e:"Each number is multiplied by 3 and then 1 is added. 40 × 3 + 1 = 121? Correction: this sequence gives 121, so the correct answer is 121."},

{q:"Which number is a multiple of both 4 and 7?",o:["21","24","28","32"],a:2,e:"28 is divisible by both 4 and 7."},

{q:"Find the median of 3, 7, 9, 11, 15.",o:["7","9","11","15"],a:1,e:"The middle value in the ordered list is 9."},

{q:"What is true about the diagonals of a rectangle?",o:["They are always unequal","They are equal in length","They never intersect","They are curved"],a:1,e:"The diagonals of a rectangle are equal in length."},

{q:"What is 5 cubed?",o:["25","75","100","125"],a:3,e:"5³ = 5 × 5 × 5 = 125."},

// ======================================
// QUESTIONS 201–250
// NEW IQ QUESTIONS
// ======================================

{q:"What comes next? 3, 6, 12, 24, ?",o:["36","42","48","54"],a:2,e:"Each number is multiplied by 2. 24 × 2 = 48."},

{q:"What comes next? 100, 90, 80, 70, ?",o:["50","55","60","65"],a:2,e:"Each number decreases by 10. The next number is 60."},

{q:"Find the missing number: 7, 14, 21, 28, ?",o:["32","35","38","42"],a:1,e:"The sequence increases by 7 each time. 28 + 7 = 35."},

{q:"What is 25% of 400?",o:["50","75","100","125"],a:2,e:"25% of 400 = 100."},

{q:"If 12 pens cost Rs. 120, what is the cost of 1 pen?",o:["Rs. 5","Rs. 10","Rs. 12","Rs. 15"],a:1,e:"120 ÷ 12 = Rs. 10."},

{q:"What is 15 × 12?",o:["160","170","180","190"],a:2,e:"15 × 12 = 180."},

{q:"What is the next prime number after 13?",o:["14","15","16","17"],a:3,e:"17 is the next prime number after 13."},

{q:"Which number is a perfect square?",o:["45","49","52","60"],a:1,e:"49 = 7 × 7."},

{q:"What is 3/4 of 80?",o:["40","50","60","70"],a:2,e:"80 × 3/4 = 60."},

{q:"A shirt costs Rs. 1,000. A discount of 10% is given. What is the sale price?",o:["Rs. 800","Rs. 850","Rs. 900","Rs. 950"],a:2,e:"10% of 1,000 is 100. Sale price = Rs. 900."},

{q:"Which number is divisible by 5?",o:["123","246","355","412"],a:2,e:"A number ending in 0 or 5 is divisible by 5."},

{q:"What is the Roman numeral for 50?",o:["X","L","C","D"],a:1,e:"L represents 50 in Roman numerals."},

{q:"How many sides does an octagon have?",o:["6","7","8","9"],a:2,e:"An octagon has eight sides."},

{q:"How many months have 31 days?",o:["5","6","7","8"],a:2,e:"Seven months have 31 days."},

{q:"How many minutes are there in 3 hours?",o:["120","150","180","210"],a:2,e:"3 × 60 = 180 minutes."},

{q:"Which is the smallest unit?",o:["Kilometre","Metre","Centimetre","Millimetre"],a:3,e:"A millimetre is smaller than a centimetre, metre and kilometre."},

{q:"Which planet is known as the Red Planet?",o:["Venus","Mars","Jupiter","Saturn"],a:1,e:"Mars is called the Red Planet because of its reddish appearance."},

{q:"Which gas do plants absorb during photosynthesis?",o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],a:2,e:"Plants absorb carbon dioxide during photosynthesis."},

{q:"Which organ is mainly responsible for pumping blood?",o:["Liver","Heart","Kidney","Lungs"],a:1,e:"The heart pumps blood throughout the body."},

{q:"Which organ helps in breathing?",o:["Stomach","Lungs","Pancreas","Spleen"],a:1,e:"The lungs are the main organs of respiration."},

{q:"What is the normal average body temperature in Celsius?",o:["35°C","37°C","39°C","40°C"],a:1,e:"About 37°C is commonly used as the average normal body temperature."},

{q:"Which blood cells help in clotting?",o:["Red blood cells","White blood cells","Platelets","Plasma cells"],a:2,e:"Platelets play an important role in blood clotting."},

{q:"Which blood cells carry oxygen?",o:["Red blood cells","White blood cells","Platelets","Lymphocytes"],a:0,e:"Red blood cells contain haemoglobin, which carries oxygen."},

{q:"Which component of blood fights infection?",o:["RBCs","WBCs","Platelets","Albumin"],a:1,e:"White blood cells help the body fight infections."},

{q:"Which organ filters blood to produce urine?",o:["Heart","Liver","Kidney","Lungs"],a:2,e:"The kidneys filter blood and produce urine."},

{q:"Which test is commonly used to measure haemoglobin?",o:["CBC","LFT","RFT","Lipid profile"],a:0,e:"A Complete Blood Count (CBC) includes haemoglobin measurement."},

{q:"What does CBC stand for?",o:["Complete Blood Count","Clinical Blood Check","Common Blood Chemistry","Complete Body Count"],a:0,e:"CBC stands for Complete Blood Count."},

{q:"Which specimen is commonly used for a urine routine examination?",o:["Blood","Urine","Saliva","Sputum"],a:1,e:"Urine is the specimen used for routine urine examination."},

{q:"Which anticoagulant is commonly used for CBC testing?",o:["EDTA","Sodium fluoride","Sodium citrate","Plain tube"],a:0,e:"EDTA is commonly used for CBC samples."},

{q:"Which tube is commonly used for blood glucose testing?",o:["Plain tube","Sodium fluoride tube","EDTA tube","Sodium citrate tube"],a:1,e:"Sodium fluoride tubes help inhibit glycolysis in glucose samples."},

{q:"What does ESR stand for?",o:["Estimated Serum Rate","Erythrocyte Sedimentation Rate","Enzyme Sedimentation Ratio","Erythrocyte Serum Reaction"],a:1,e:"ESR stands for Erythrocyte Sedimentation Rate."},

{q:"Which test is commonly used to assess kidney function?",o:["ALT","Creatinine","Troponin","Amylase"],a:1,e:"Serum creatinine is commonly used to assess kidney function."},

{q:"Which enzyme is commonly associated with liver cell injury?",o:["ALT","CK-MB","Lipase","Troponin"],a:0,e:"ALT is an enzyme commonly measured in liver function assessment."},

{q:"Which test is commonly used to assess thyroid function?",o:["TSH","CBC","ESR","PT"],a:0,e:"TSH is commonly used in the initial assessment of thyroid function."},

{q:"Which test helps assess blood clotting through the extrinsic pathway?",o:["PT","ESR","CBC","HbA1c"],a:0,e:"Prothrombin Time (PT) evaluates the extrinsic and common coagulation pathways."},

{q:"What does HbA1c indicate?",o:["Recent oxygen level","Average blood glucose over about 2–3 months","Kidney filtration","Blood clotting time"],a:1,e:"HbA1c reflects average blood glucose over approximately 2–3 months."},

{q:"Which blood group is known as the universal red-cell donor in emergencies?",o:["AB positive","O negative","A positive","B negative"],a:1,e:"O negative red cells are commonly considered the universal red-cell donor type."},

{q:"Which blood group is the universal red-cell recipient?",o:["O negative","A positive","AB positive","B positive"],a:2,e:"AB positive individuals can generally receive red cells from all ABO and Rh groups, subject to compatibility testing."},

{q:"What is the liquid part of blood called?",o:["Serum only","Plasma","Platelets","Haemoglobin"],a:1,e:"Plasma is the liquid component of blood."},

{q:"Which microscope lens usually provides the highest magnification in routine light microscopy?",o:["10× objective","20× objective","40× objective","100× oil immersion objective"],a:3,e:"The 100× oil immersion objective provides the highest common magnification in routine light microscopy."},

{q:"What is the main purpose of a centrifuge?",o:["Heating samples","Separating components by density","Measuring pH","Counting cells"],a:1,e:"A centrifuge separates sample components using centrifugal force."},

{q:"Which instrument is used to measure pH?",o:["Centrifuge","pH meter","Microscope","Incubator"],a:1,e:"A pH meter measures the acidity or alkalinity of a solution."},

{q:"What is the SI unit of temperature?",o:["Celsius","Fahrenheit","Kelvin","Joule"],a:2,e:"Kelvin is the SI base unit of thermodynamic temperature."},

{q:"Which vitamin is produced in the skin with sunlight exposure?",o:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],a:3,e:"The skin produces vitamin D after exposure to ultraviolet B radiation."},

{q:"Which vitamin is important for normal blood clotting?",o:["Vitamin A","Vitamin C","Vitamin D","Vitamin K"],a:3,e:"Vitamin K is essential for the production of several clotting factors."},

{q:"Which mineral is essential for haemoglobin formation?",o:["Calcium","Iron","Sodium","Potassium"],a:1,e:"Iron is an essential component of haemoglobin."},

{q:"Which part of the cell contains most of its genetic material?",o:["Cell membrane","Nucleus","Cytoplasm","Ribosome"],a:1,e:"The nucleus contains most of the cell's genetic material."},

{q:"What is the basic structural and functional unit of life?",o:["Tissue","Organ","Cell","System"],a:2,e:"The cell is the basic structural and functional unit of life."},

{q:"Which microorganism is responsible for tuberculosis?",o:["Escherichia coli","Mycobacterium tuberculosis","Staphylococcus aureus","Salmonella typhi"],a:1,e:"Tuberculosis is caused by Mycobacterium tuberculosis."},

{q:"Which method is commonly used to sterilize heat-resistant laboratory instruments?",o:["Refrigeration","Autoclaving","Freezing","Sunlight exposure"],a:1,e:"Autoclaving uses pressurized steam to sterilize suitable heat-resistant items."},

{q:"What does PPE stand for in laboratory safety?",o:["Personal Protective Equipment","Patient Protection Examination","Primary Processing Equipment","Personal Procedure Evaluation"],a:0,e:"PPE stands for Personal Protective Equipment."},

{q:"What should be done first after a chemical splash in the eyes?",o:["Rub the eyes","Immediately flush with plenty of water at an eyewash station","Cover the eyes and continue working","Wait for symptoms"],a:1,e:"Immediately flush the eyes at an eyewash station and follow the laboratory emergency protocol."},


// ======================================
// QUESTIONS 251–300
// NEW IQ QUESTIONS
// ======================================

{q:"What comes next? 2, 6, 12, 20, 30, ?",o:["36","40","42","44"],a:2,e:"The differences are 4, 6, 8, 10, then 12. 30 + 12 = 42."},

{q:"Find the missing number: 81, 27, 9, 3, ?",o:["0","1","2","6"],a:1,e:"Each number is divided by 3. 3 ÷ 3 = 1."},

{q:"What comes next? 1, 8, 27, 64, ?",o:["100","121","125","144"],a:2,e:"These are cubes: 1³, 2³, 3³, 4³, then 5³ = 125."},

{q:"What is 40% of 250?",o:["80","90","100","110"],a:2,e:"40% of 250 = 100."},

{q:"If 7 books cost Rs. 560, what is the cost of 3 books?",o:["Rs. 180","Rs. 210","Rs. 240","Rs. 280"],a:2,e:"One book costs 560 ÷ 7 = 80. Three books cost Rs. 240."},

{q:"What is 18 × 15?",o:["240","250","270","280"],a:2,e:"18 × 15 = 270."},

{q:"Which is the odd one out?",o:["2","3","5","9"],a:3,e:"2, 3 and 5 are prime numbers. 9 is not prime."},

{q:"What is the square of 17?",o:["269","279","289","299"],a:2,e:"17 × 17 = 289."},

{q:"What is 5/8 of 160?",o:["80","90","100","120"],a:2,e:"160 × 5/8 = 100."},

{q:"A product costs Rs. 1,200 and is sold for Rs. 1,500. What is the profit?",o:["Rs. 200","Rs. 250","Rs. 300","Rs. 350"],a:2,e:"Profit = selling price − cost price = Rs. 300."},

{q:"Which number is divisible by 11?",o:["121","123","125","127"],a:0,e:"121 ÷ 11 = 11."},

{q:"What is the Roman numeral for 100?",o:["L","C","D","M"],a:1,e:"C represents 100 in Roman numerals."},

{q:"How many sides does a decagon have?",o:["8","9","10","12"],a:2,e:"A decagon has ten sides."},

{q:"How many seconds are there in 5 minutes?",o:["200","250","300","350"],a:2,e:"5 × 60 = 300 seconds."},

{q:"Which is the largest unit of length?",o:["Millimetre","Centimetre","Metre","Kilometre"],a:3,e:"A kilometre is larger than a metre, centimetre and millimetre."},

{q:"Which planet is the largest in our solar system?",o:["Earth","Saturn","Jupiter","Neptune"],a:2,e:"Jupiter is the largest planet in our solar system."},

{q:"Which gas is most abundant in Earth's atmosphere?",o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],a:1,e:"Nitrogen makes up approximately 78% of Earth's atmosphere."},

{q:"Which organ produces insulin?",o:["Liver","Pancreas","Kidney","Spleen"],a:1,e:"Insulin is produced by beta cells in the pancreas."},

{q:"Which organ is mainly responsible for detoxifying many substances in the body?",o:["Heart","Liver","Lungs","Stomach"],a:1,e:"The liver processes many drugs and harmful substances."},

{q:"Which blood component contains haemoglobin?",o:["Plasma","Red blood cells","Platelets","White blood cells"],a:1,e:"Haemoglobin is found inside red blood cells."},

{q:"Which cells are primarily responsible for producing antibodies?",o:["Red blood cells","B lymphocytes","Platelets","Neutrophils"],a:1,e:"B lymphocytes can differentiate into plasma cells that produce antibodies."},

{q:"Which test is commonly used to evaluate platelet count?",o:["CBC","LFT","RFT","Lipid profile"],a:0,e:"A CBC includes a platelet count."},

{q:"What does MCV measure?",o:["Average red blood cell volume","White blood cell count","Platelet function","Blood glucose"],a:0,e:"MCV means Mean Corpuscular Volume and measures average red blood cell size."},

{q:"Which test is commonly used to detect malaria parasites?",o:["Peripheral blood smear","Urine routine","Lipid profile","Stool occult blood"],a:0,e:"A peripheral blood smear can be examined for malaria parasites."},

{q:"Which specimen is commonly used for a stool routine examination?",o:["Urine","Stool","Serum","Sputum"],a:1,e:"A stool sample is used for routine stool examination."},

{q:"Which test is used to measure total cholesterol?",o:["Lipid profile","CBC","ESR","PT"],a:0,e:"A lipid profile measures cholesterol and related blood lipids."},

{q:"What does RFT commonly stand for?",o:["Renal Function Tests","Rapid Fever Test","Routine Fluid Test","Red Cell Function Test"],a:0,e:"RFT stands for Renal Function Tests."},

{q:"Which test is commonly used to assess pancreatic lipase activity?",o:["Lipase test","TSH","ESR","PT"],a:0,e:"Serum lipase is commonly measured when pancreatic disease is suspected."},

{q:"Which tube commonly contains sodium citrate for coagulation testing?",o:["Blue-top tube","Purple-top tube","Grey-top tube","Green-top tube"],a:0,e:"A light-blue-top tube commonly contains sodium citrate."},

{q:"What is the purpose of quality control in a laboratory?",o:["To increase workload","To ensure reliable test results","To reduce reporting","To change patient identity"],a:1,e:"Quality control helps monitor the accuracy and reliability of laboratory testing."},

{q:"Which instrument is used to measure absorbance in colorimetric tests?",o:["Spectrophotometer","Centrifuge","Incubator","Autoclave"],a:0,e:"A spectrophotometer measures light absorbance at selected wavelengths."},

{q:"What is the purpose of a laboratory incubator?",o:["To maintain controlled temperature for sample or culture incubation","To weigh samples","To measure blood pressure","To separate serum"],a:0,e:"An incubator maintains suitable environmental conditions, commonly controlled temperature."},

{q:"Which stain is commonly used for peripheral blood smears?",o:["Wright stain","Gram stain only","India ink only","Acid-fast stain only"],a:0,e:"Wright stain is commonly used for peripheral blood film examination."},

{q:"Which stain is commonly used in Gram staining?",o:["Crystal violet","Methylene blue only","Eosin only","Safranin only"],a:0,e:"Crystal violet is the primary stain in the Gram staining procedure."},

{q:"Which microorganism is commonly associated with typhoid fever?",o:["Salmonella Typhi","Mycobacterium tuberculosis","Vibrio cholerae","Streptococcus pneumoniae"],a:0,e:"Typhoid fever is caused by Salmonella enterica serovar Typhi."},

{q:"Which organism commonly causes cholera?",o:["Vibrio cholerae","Salmonella Typhi","E. coli O157:H7","Staphylococcus aureus"],a:0,e:"Cholera is caused by Vibrio cholerae."},

{q:"What is the main purpose of hand hygiene in a laboratory?",o:["Improve handwriting","Prevent spread of infection","Increase sample volume","Improve microscope focus"],a:1,e:"Hand hygiene reduces the transmission of microorganisms."},

{q:"What should be used to dispose of used needles?",o:["Ordinary dustbin","Sharps container","Paper bag","Open tray"],a:1,e:"Used needles must be disposed of in an approved puncture-resistant sharps container."},

{q:"Which blood group antigen determines the Rh-positive status?",o:["A antigen","B antigen","D antigen","H antigen"],a:2,e:"The presence of the D antigen generally indicates Rh-positive status."},

{q:"What is crossmatching performed for?",o:["Checking blood compatibility before transfusion","Measuring glucose","Counting platelets","Measuring urine protein"],a:0,e:"Crossmatching helps assess compatibility between donor red cells and recipient serum or plasma."},

{q:"Which test is commonly used to detect pregnancy by measuring a hormone?",o:["hCG test","ESR","CBC","PT"],a:0,e:"Pregnancy tests detect human chorionic gonadotropin (hCG)."}, 

{q:"What does CRP stand for?",o:["C-reactive protein","Complete red profile","Cell reaction process","Clinical renal parameter"],a:0,e:"CRP stands for C-reactive protein, a marker of inflammation."},

{q:"Which electrolyte is most important for maintaining normal extracellular fluid balance?",o:["Sodium","Iron","Zinc","Iodine"],a:0,e:"Sodium is the major cation in extracellular fluid."},

{q:"Which electrolyte is especially important for normal heart and muscle function?",o:["Potassium","Fluoride","Iron","Copper"],a:0,e:"Potassium is essential for normal nerve, muscle and cardiac electrical activity."},

{q:"Which vitamin deficiency can cause scurvy?",o:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],a:2,e:"Scurvy is caused by vitamin C deficiency."},

{q:"Which vitamin deficiency can cause megaloblastic anaemia?",o:["Vitamin B12","Vitamin K","Vitamin E","Vitamin A"],a:0,e:"Vitamin B12 deficiency can cause megaloblastic anaemia."},

{q:"Which part of the microscope controls the amount of light passing through the specimen?",o:["Eyepiece","Diaphragm","Objective lens","Stage clip"],a:1,e:"The diaphragm regulates the amount of light reaching the specimen."},

{q:"What is the function of an objective lens?",o:["Magnify the specimen","Hold the slide","Control temperature","Measure weight"],a:0,e:"The objective lens provides magnification of the specimen."},

{q:"What does the term aseptic technique mean?",o:["Technique to prevent contamination","Technique to increase temperature","Method of weighing samples","Method of staining slides"],a:0,e:"Aseptic technique helps prevent contamination by unwanted microorganisms."},

{q:"Which type of water is generally used for preparing laboratory reagents?",o:["Distilled or deionized water as specified by the method","Tap water in all cases","Sea water","Mineral water"],a:0,e:"Laboratory methods specify the required water quality; distilled or deionized water is commonly used."},

{q:"What is the main purpose of calibrating laboratory equipment?",o:["To compare measurements with a known standard","To clean the equipment only","To increase sample size","To change the test method"],a:0,e:"Calibration checks measurement accuracy against known standards."},

{q:"Which document gives instructions for performing a laboratory test?",o:["SOP","ID card","Invoice","Attendance sheet"],a:0,e:"SOP means Standard Operating Procedure and describes how a task should be performed."},





];


(function () {
"use strict";

// ======================================
// LAB KNOWLEDGE - IQ PRACTICE SYSTEM
// COMPLETE CORRECTED VERSION
// ======================================

let currentQuestions = [];
let usedQuestionIds = [];

// HTML ELEMENTS
const iqQuestionsBox = document.getElementById("iqQuestions");
const iqResultBox = document.getElementById("iqResult");

const iqStartBtn = document.getElementById("iqStartBtn");
const iqSubmitBtn = document.getElementById("iqSubmitBtn");
const iqAgainBtn = document.getElementById("iqAgainBtn");

// ======================================
// GET QUESTION BANK
// ======================================

function getIQQuestionBank() {
  if (
    typeof iqQuestionBank !== "undefined" &&
    Array.isArray(iqQuestionBank)
  ) {
    return iqQuestionBank;
  }

  if (Array.isArray(window.iqQuestionBank)) {
    return window.iqQuestionBank;
  }

  return [];
}

// ======================================
// LOAD USED QUESTIONS
// ======================================

function loadUsedQuestions() {
  try {
    const saved = localStorage.getItem("labIQUsedQuestions");
    usedQuestionIds = saved ? JSON.parse(saved) : [];

    if (!Array.isArray(usedQuestionIds)) {
      usedQuestionIds = [];
    }
  } catch (error) {
    usedQuestionIds = [];
  }
}

// ======================================
// SAVE USED QUESTIONS
// ======================================

function saveUsedQuestions() {
  try {
    localStorage.setItem(
      "labIQUsedQuestions",
      JSON.stringify(usedQuestionIds)
    );
  } catch (error) {
    console.warn("Unable to save IQ history.");
  }
}

// ======================================
// SHUFFLE ARRAY
// ======================================

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] =
      [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// ======================================
// ESCAPE HTML TEXT
// ======================================

function escapeIQText(value) {
  return String(value ?? "").replace(/[&<>"']/g, function(char) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[char];
  });
}

// ======================================
// START IQ PRACTICE
// ======================================

window.startIQPractice = function() {

  if (!iqQuestionsBox || !iqResultBox) {
    console.error("IQ Practice HTML elements not found.");
    return;
  }

  const questionBank = getIQQuestionBank();

  if (!questionBank.length) {
    iqResultBox.style.display = "block";
    iqResultBox.textContent =
      "Question bank is not available.";
    return;
  }

  // VALIDATE QUESTIONS
  const validQuestions = questionBank.filter(question => {
    return (
      question &&
      typeof question.q === "string" &&
      question.q.trim() !== "" &&
      Array.isArray(question.o) &&
      question.o.length >= 2 &&
      Number.isInteger(question.a) &&
      question.a >= 0 &&
      question.a < question.o.length &&
      typeof question.e === "string"
    );
  });

  if (validQuestions.length < 10) {
    iqResultBox.style.display = "block";
    iqResultBox.textContent =
      "At least 10 valid questions are required.";
    return;
  }

  loadUsedQuestions();

  // FIND UNUSED QUESTIONS
  let availableQuestions = validQuestions.filter(
    question => !usedQuestionIds.includes(question.q)
  );

  // RESET HISTORY IF QUESTIONS FINISHED
  if (availableQuestions.length < 10) {
    usedQuestionIds = [];
    saveUsedQuestions();

    availableQuestions = [...validQuestions];
  }

  // SELECT 10 RANDOM QUESTIONS
  currentQuestions = shuffleArray(
    availableQuestions
  ).slice(0, 10);

  // SAVE USED QUESTIONS
  currentQuestions.forEach(question => {
    if (!usedQuestionIds.includes(question.q)) {
      usedQuestionIds.push(question.q);
    }
  });

  saveUsedQuestions();

  // ======================================
  // DISPLAY QUESTIONS
  // ======================================

  let html = "";

  currentQuestions.forEach((question, index) => {

    html += `
      <div class="iq-question-card">

        <h3>Question ${index + 1}</h3>

        <p>${escapeIQText(question.q)}</p>

        <div class="iq-options">

          ${question.o.map((option, optionIndex) => `
            <label>
              <input
                type="radio"
                name="iqAnswer${index}"
                value="${optionIndex}"
              >
              ${escapeIQText(option)}
            </label>
          `).join("")}

        </div>

      </div>
    `;
  });

  iqQuestionsBox.innerHTML = html;

  // CLEAR PREVIOUS RESULT
  iqResultBox.innerHTML = "";
  iqResultBox.style.display = "none";

  // BUTTON VISIBILITY
  if (iqStartBtn) {
    iqStartBtn.style.display = "none";
  }

  if (iqSubmitBtn) {
    iqSubmitBtn.style.display = "inline-block";
    iqSubmitBtn.disabled = false;
  }

  if (iqAgainBtn) {
    iqAgainBtn.style.display = "none";
  }

  // SCROLL TO QUESTIONS
  const firstQuestion =
    iqQuestionsBox.querySelector(".iq-question-card");

  if (firstQuestion) {
    firstQuestion.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

// ======================================
// SUBMIT IQ ANSWERS
// ======================================

window.submitIQAnswers = function() {

  if (currentQuestions.length !== 10 || !iqResultBox) {
    return;
  }

  // PREVENT DOUBLE SUBMISSION
  if (iqSubmitBtn && iqSubmitBtn.disabled) {
    return;
  }

  let score = 0;
  let resultHTML = "";

  // CHECK ANSWERS
  currentQuestions.forEach((question, index) => {

    const selected = document.querySelector(
      `input[name="iqAnswer${index}"]:checked`
    );

    const selectedAnswer = selected
      ? Number(selected.value)
      : -1;

    const isCorrect = selectedAnswer === question.a;

    if (isCorrect) {
      score++;
    }

    resultHTML += `
      <div class="iq-answer-review">

        <h4>Question ${index + 1}</h4>

        <p>${escapeIQText(question.q)}</p>

        <p>
          Your Answer:
          <strong>
            ${
              selectedAnswer >= 0
                ? escapeIQText(question.o[selectedAnswer])
                : "Not Answered"
            }
          </strong>
        </p>

        <p>
          Correct Answer:
          <strong>
            ${escapeIQText(question.o[question.a])}
          </strong>
        </p>

        <p>
          ${isCorrect ? "✅ Correct" : "❌ Incorrect"}
        </p>

        <p>
          Explanation:
          ${escapeIQText(question.e)}
        </p>

      </div>
    `;
  });

  // ======================================
  // CALCULATE RESULT
  // ======================================

  const percentage = score * 10;

  let performance = "";

  if (score >= 9) {
    performance = "Excellent Performance! 🏆";
  } else if (score >= 7) {
    performance = "Very Good! 🌟";
  } else if (score >= 5) {
    performance = "Good Effort! 👍";
  } else {
    performance = "Keep Practicing! 💪";
  }

  // ======================================
  // DISPLAY RESULT
  // ======================================

  iqResultBox.style.display = "block";

  iqResultBox.innerHTML = `
    <div class="iq-score-summary">

      <h2>🎯 Your IQ Practice Result</h2>

      <h3>Score: ${score} / 10</h3>

      <h3>Percentage: ${percentage}%</h3>

      <h3>${performance}</h3>

    </div>

    <h3>📋 Answer Review</h3>

    ${resultHTML}
  `;

  // LOCK ANSWERS
  document.querySelectorAll(
    "#iqQuestions input[type='radio']"
  ).forEach(input => {
    input.disabled = true;
  });

  // HIDE SUBMIT BUTTON
  if (iqSubmitBtn) {
    iqSubmitBtn.disabled = true;
    iqSubmitBtn.style.display = "none";
  }

  // SHOW PRACTICE AGAIN
  if (iqAgainBtn) {
    iqAgainBtn.style.display = "inline-block";
  }

  // SCROLL TO RESULT
  iqResultBox.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

// ======================================
// INITIALIZE IQ PRACTICE
// ======================================

loadUsedQuestions();

// ======================================
// BUTTON CONNECTIONS
// ======================================

if (iqStartBtn) {
  iqStartBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.startIQPractice();
  });
}

if (iqSubmitBtn) {
  iqSubmitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.submitIQAnswers();
  });
}

if (iqAgainBtn) {
  iqAgainBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.startIQPractice();
  });
}

// ======================================
// SYSTEM READY
// ======================================

console.log("Lab Knowledge IQ Practice System Ready!");

})();
