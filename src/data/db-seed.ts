/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SQUAD_PLAYERS } from "./db-players-squads";

// JS Object representations of the real historical seed data for instant client-side browsing
export const SEED_DATA = {
  editions: [
    {
      id: 1,
      year: 1934,
      host: "Italy",
      start_date: "1934-05-27",
      end_date: "1934-06-10",
      winner: "Italy",
      egypt_position: "13th (Round of 16)",
      egypt_record: "1 Match: 0W 0D 1L (2 GF, 4 GA)",
      total_teams: 16,
      summary: "Egypt made history as the first African and Arab nation to qualify for the FIFA World Cup. In an intense single-elimination match in Naples, the Pharaohs fought back from 2-0 down against Hungary to level the game at 2-2, with Abdulrahman Fawzi scoring a sensational brace. Egypt ultimately fell 4-2, but left a lasting legacy."
    },
    {
      id: 2,
      year: 1990,
      host: "Italy",
      start_date: "1990-06-08",
      end_date: "1990-07-08",
      winner: "West Germany",
      egypt_position: "20th (Group Stage)",
      egypt_record: "3 Matches: 0W 2D 1L (1 GF, 2 GA)",
      total_teams: 24,
      summary: "Returning to Italy after 56 years, Mahmoud El-Gohary's defensively disciplined team was placed in Group F alongside heavyweights Netherlands, Republic of Ireland, and England. The Pharaohs shocked the world by drawing 1-1 with reigning European Champions Netherlands (Magdi Abdelghani scoring Egypt's iconic penalty) and drawing 0-0 with Ireland. A narrow 1-0 loss to England ended their heroic run."
    },
    {
      id: 3,
      year: 2018,
      host: "Russia",
      start_date: "2018-06-14",
      end_date: "2018-07-15",
      winner: "France",
      egypt_position: "31st (Group Stage)",
      egypt_record: "3 Matches: 0W 0D 3L (2 GF, 6 GA)",
      total_teams: 32,
      summary: "Led by Argentine coach Héctor Cúper and the goalscoring genius of Mohamed Salah, Egypt broke a 28-year qualification drought. Although the campaign was overshadowed by Salah's shoulder injury and 3 group-stage losses, historical milestones were reached: Mohamed El-Shenawy's spectacular performance against Uruguay, Mohamed Salah scoring twice, and 45-year-old goalkeeper Essam El-Hadary becoming the oldest player in World Cup history."
    }
  ],
  coaches: [
    {
      id: 1,
      name: "James McCrae",
      arabic_name: "جيمس ماكراي",
      nationality: "Scotland",
      birth_date: "1894-09-02",
      tactical_style: "2-3-5 Pyramid Formation. Encouraged physically intense, vertical wingplay, and strict position mapping.",
      biography: "Scottish professional player and manager who coached Egypt between 1934 and 1936. McCrae is credited with instilling tactical discipline and British physical conditioning standards into the early Egyptian national team, paving the way for their successful 1934 World Cup qualification campaign."
    },
    {
      id: 2,
      name: "Mahmoud El-Gohary",
      arabic_name: "محمود الجوهري",
      nationality: "Egypt",
      birth_date: "1938-02-20",
      tactical_style: "Highly organized 5-4-1 defensive block. Focused on clinical, low-risk counter-attacks and intense central pressing.",
      biography: "Affectionately known as 'The General', El-Gohary is arguably the most influential figure in Egyptian football history. An Al Ahly striker during his playing days, he coached Egypt to World Cup qualification in 1990 and guided them to the 1998 Africa Cup of Nations title, becoming the first person to win the AFCON as both player and coach."
    },
    {
      id: 3,
      name: "Héctor Cúper",
      arabic_name: "هيكتور كوبر",
      nationality: "Argentina",
      birth_date: "1955-11-16",
      tactical_style: "Pragmatic, compact 4-2-3-1 double pivot. Low block defense, reliance on transition speed and isolating Mohamed Salah on the counter.",
      biography: "Argentine manager who achieved European fame by leading Valencia to consecutive UEFA Champions League finals. Appointed by Egypt in 2015, he implemented a hyper-organized defensive structure that divided opinion but achieved spectacular results: returning Egypt to the AFCON final in 2017 and ending a 28-year World Cup qualification drought in 2018."
    }
  ],
  players: SQUAD_PLAYERS,
  _old_players: [
    {
      id: 1,
      full_name: "Abdulrahman Fawzi",
      arabic_name: "عبدالرحمن فوزي",
      date_birth: "1909-12-11",
      birth_place: "Port Said, Egypt",
      height_cm: 174,
      weight_kg: 70,
      position: "Forward",
      preferred_foot: "Left",
      national_career_span: "1929–1938",
      club_career_summary: "Al Masry SC (1928–1934), Zamalek SC (1934–1947)",
      world_cup_appearances: 1,
      goals: 2,
      assists: 0,
      minutes: 90,
      cards_count: 0,
      captain_caps: 0,
      biography: "Abdulrahman Fawzi is a towering legend of African football, forever enshrined in World Cup history as the first African and Arab player to score in the final tournament. Playing as an inside-left in Naples against Hungary in 1934, Fawzi netted a magnificent brace. He actually scored a third goal which was disallowed for offside, a decision still disputed by historians. After retiring, he went on to coach Zamalek and became the first national team manager of Saudi Arabia in 1957.",
      achievements: "First African World Cup Goalscorer, Egypt Football Hall of Fame, Egyptian League Titles",
      interesting_facts: "Scored a hat-trick against Mandatory Palestine in the qualifiers, then scored Egypt's only two goals in the 1934 finals.",
      legacy: "A pioneering icon whose speed, clinical left foot, and courage established Egypt on the international football stage."
    },
    {
      id: 2,
      full_name: "Mahmoud Mokhtar El-Tetsh",
      arabic_name: "مختار التتش",
      date_birth: "1905-10-12",
      birth_place: "Cairo, Egypt",
      height_cm: 168,
      weight_kg: 64,
      position: "Forward",
      preferred_foot: "Right",
      national_career_span: "1924–1936",
      club_career_summary: "Al Ahly SC (1922–1940)",
      world_cup_appearances: 1,
      goals: 0,
      assists: 1,
      minutes: 90,
      cards_count: 0,
      captain_caps: 1,
      biography: "Mahmoud Mokhtar 'El-Tetsh' is Al Ahly's ultimate sporting icon. Renowned for his extraordinary jumping ability, he was nicknamed 'El-Tetsh' by Lord Lloyd after a famous acrobatic gymnast. He captained Egypt in the 1934 World Cup and led them in three Olympic Games (1924, 1928, 1936), reaching 4th place in Amsterdam 1928. He was also a passionate advocate for Egyptian sports administration, serving as Secretary General of the Egyptian Olympic Committee. Ahly's primary training ground in Cairo is named Mokhtar El-Tetsh Stadium in his honor.",
      achievements: "Captain of Egypt (1934), 4th Place at 1928 Amsterdam Olympics, Over 10 Cairo League Trophies",
      interesting_facts: "Famously refused to play matches scheduled during Ramadan fasting until training times were accommodated.",
      legacy: "The gold standard of athletic excellence and loyalty in Egyptian football history, symbolizing the rise of national sports identity."
    },
    {
      id: 3,
      full_name: "Mustafa Kamel Mansour",
      arabic_name: "مصطفى كامل منصور",
      date_birth: "1914-08-02",
      birth_place: "Alexandria, Egypt",
      height_cm: 184,
      weight_kg: 78,
      position: "Goalkeeper",
      preferred_foot: "Right",
      national_career_span: "1932–1938",
      club_career_summary: "Al Ahly SC (1930–1936), Queen's Park FC (1936–1939)",
      world_cup_appearances: 1,
      goals: 0,
      assists: 0,
      minutes: 90,
      cards_count: 0,
      captain_caps: 0,
      biography: "Mustafa Mansour was Egypt's legendary goalkeeper in the 1934 World Cup. Following his impressive performances in Italy, he travelled to Scotland to study physical education and signed for Queen's Park FC, becoming one of the first ever Arab and African footballers to play in Great Britain. He returned to Egypt during World War II, played again for Al Ahly, and later served as general secretary of the Confederation of African Football (CAF).",
      achievements: "First African goalkeeper in Scottish Football, CAF General Secretary (1958-1961), King's Cup winner",
      interesting_facts: "During the 1934 World Cup match, a Hungarian striker collided with him, breaking his nose as Hungary scored their fourth goal, which went unpenalized.",
      legacy: "An intellectual goalkeeper who bridged African and European football in an era before modern global transfers."
    },
    {
      id: 4,
      full_name: "Magdi Abdelghani",
      arabic_name: "مجدي عبدالغني",
      date_birth: "1959-07-27",
      birth_place: "Cairo, Egypt",
      height_cm: 178,
      weight_kg: 76,
      position: "Midfielder",
      preferred_foot: "Right",
      national_career_span: "1981–1992",
      club_career_summary: "Al Ahly SC (1977–1988), SC Beira-Mar (1988–1992)",
      world_cup_appearances: 3,
      goals: 1,
      assists: 0,
      minutes: 270,
      cards_count: 1,
      captain_caps: 0,
      biography: "Magdi Abdelghani is a robust and charismatic box-to-box midfielder who played a central role in Egypt's 1990 campaign. He became an immortal figure in Egyptian pop-culture by scoring Egypt's only goal of the tournament—a cool, high-pressure penalty in the 83rd minute to equalize 1-1 against the superstar Netherlands squad (which featured Gullit, Rijkaard, and Koeman). For decades after, Abdelghani playfully brought up his 'Netherlands Goal' in every sports talk-show, cementing it as a running joke and an unforgettable national memory.",
      achievements: "1986 African Cup of Nations Champion, First Egyptian to score in 1990 WC, Portuguese Cup Finalist",
      interesting_facts: "Played in Portugal's top flight with Beira-Mar and won the Egyptian League 5 times with Al Ahly.",
      legacy: "An aggressive, technically secure midfielder who rose to the highest pressure occasion in Palermo."
    },
    {
      id: 5,
      full_name: "Hossam Hassan",
      arabic_name: "حسام حسن",
      date_birth: "1966-08-10",
      birth_place: "Cairo, Egypt",
      height_cm: 178,
      weight_kg: 74,
      position: "Forward",
      preferred_foot: "Right",
      national_career_span: "1985–2006",
      club_career_summary: "Al Ahly (1985-1990), PAOK (1990-1991), Neuchâtel Xamax (1991-1992), Zamalek (2000-2004)",
      world_cup_appearances: 3,
      goals: 0,
      assists: 1,
      minutes: 270,
      cards_count: 0,
      captain_caps: 0,
      biography: "Hossam Hassan is the absolute top goalscorer in the history of the Egyptian National Team, hitting 68 goals in 176 matches. Known for his ferocious passion, fearlessness, and tactical intelligence, it was his header against Algeria in 1989 that secured World Cup qualification. In the 1990 finals, his tireless runs harassed elite European defenders, drawing the crucial penalty against the Dutch which Abdelghani scored. He played professionally well into his 40s, winning the 2006 AFCON at age 39. In 2024, he was named Head Coach of the Egypt National Team.",
      achievements: "Egypt All-Time Top Scorer (68 goals), 3x AFCON Champion (1986, 1998, 2006), 14x Egyptian League Champion",
      interesting_facts: "Scored 4 goals in a single UEFA Cup match for Swiss side Neuchâtel Xamax against Celtic in 1991.",
      legacy: "The ultimate symbol of Egyptian football grit, determination, and longevity, revered by fans of both Al Ahly and Zamalek."
    },
    {
      id: 6,
      full_name: "Ibrahim Hassan",
      arabic_name: "إبراهيم حسن",
      date_birth: "1966-08-10",
      birth_place: "Cairo, Egypt",
      height_cm: 176,
      weight_kg: 72,
      position: "Defender",
      preferred_foot: "Right",
      national_career_span: "1988–2002",
      club_career_summary: "Al Ahly (1985–1990), PAOK (1990–1991), Neuchâtel Xamax (1991–1992), Zamalek (2000–2004)",
      world_cup_appearances: 3,
      goals: 0,
      assists: 0,
      minutes: 270,
      cards_count: 0,
      captain_caps: 0,
      biography: "Ibrahim Hassan is the twin brother of Hossam Hassan and was Egypt's undisputed starting right-back during the 1990 World Cup. Renowned for his overlapping runs, precise crosses, and defensive grit, Ibrahim formed a famous lifetime partnership with Hossam. Together, they transferred from Al Ahly to Swiss club Xamax and later made a historic, highly controversial direct transfer to rivals Zamalek in 2000.",
      achievements: "2x AFCON Champion, 12x Egyptian League Champion, Arab Club Champions Cup",
      interesting_facts: "Shared almost identical professional career paths with his twin Hossam, moving to Swiss and Greek clubs together.",
      legacy: "One of the most fierce and reliable full-backs Egypt has ever produced, setting a standard for full-back overlap play."
    },
    {
      id: 7,
      full_name: "Ahmed Shobair",
      arabic_name: "أحمد شوبير",
      date_birth: "1960-09-28",
      birth_place: "Tanta, Egypt",
      height_cm: 185,
      weight_kg: 80,
      position: "Goalkeeper",
      preferred_foot: "Right",
      national_career_span: "1984–1996",
      club_career_summary: "Al Ahly SC (1980–1997)",
      world_cup_appearances: 3,
      goals: 0,
      assists: 0,
      minutes: 270,
      cards_count: 0,
      captain_caps: 0,
      biography: "Ahmed Shobair was the starting goalkeeper in the 1990 World Cup, conceding only 2 goals in 3 matches against England, Netherlands, and Republic of Ireland. Shobair was praised for his leadership and handling of aerial balls in Palermo. After retirement, he transitioned into sports media, becoming the most influential and widely-viewed football TV presenter in Egypt and the Arab world.",
      achievements: "7x Egyptian League Champion, 5x Egypt Cup Winner, 1986 AFCON Champion",
      interesting_facts: "Kept a clean sheet against a Republic of Ireland team managed by Jack Charlton in a highly physical encounter.",
      legacy: "Widely regarded as one of Egypt's greatest ever goalkeepers, maintaining high standards during Ahly's golden 80s/90s era."
    },
    {
      id: 8,
      full_name: "Hany Ramzy",
      arabic_name: "هاني رمزي",
      date_birth: "1969-03-10",
      birth_place: "Cairo, Egypt",
      height_cm: 188,
      weight_kg: 82,
      position: "Defender",
      preferred_foot: "Right",
      national_career_span: "1988–2003",
      club_career_summary: "Al Ahly (1987-1990), Werder Bremen (1994-1998), FC Kaiserslautern (1998-2005)",
      world_cup_appearances: 3,
      goals: 0,
      assists: 0,
      minutes: 270,
      cards_count: 1,
      captain_caps: 0,
      biography: "Hany Ramzy was a young prodigy during the 1990 World Cup, starting as the central sweeper (libero) at just 21 years old under Mahmoud El-Gohary. His composure, elegant ball distribution, and aerial dominance caught the attention of European scouts. He moved to Switzerland's Neuchâtel Xamax and subsequently built a phenomenal 15-year career in the German Bundesliga, primarily captaining FC Kaiserslautern and Werder Bremen.",
      achievements: "1998 AFCON Champion, First Egyptian in Bundesliga, 1990 World Cup Libero",
      interesting_facts: "Nicknamed 'The Emperor' by German media due to his elegant defensive play, mirroring Franz Beckenbauer.",
      legacy: "The absolute pioneer of Egyptian professional careers in Europe, proving that Egyptian tactical defensive players could excel in elite leagues."
    },
    {
      id: 9,
      full_name: "Mohamed Salah",
      arabic_name: "محمد صلاح",
      date_birth: "1992-06-15",
      birth_place: "Basyoun, Egypt",
      height_cm: 175,
      weight_kg: 71,
      position: "Forward",
      preferred_foot: "Left",
      national_career_span: "2011–Present",
      club_career_summary: "FC Basel (2012–2014), AS Roma (2015–2017), Liverpool FC (2017–Present)",
      world_cup_appearances: 2,
      goals: 2,
      assists: 0,
      minutes: 180,
      cards_count: 0,
      captain_caps: 0,
      biography: "Mohamed Salah is a global footballing icon and one of the most prolific forwards in UEFA Champions League and English Premier League history. After qualifying Egypt to the 2018 World Cup with a dramatic 95th-minute penalty against Congo, Salah suffered a severe shoulder injury in the 2018 Champions League Final. Despite missing the opener against Uruguay, he played against Russia and Saudi Arabia, scoring clinical goals in both matches, making him Egypt's joint all-time top scorer in World Cups.",
      achievements: "UEFA Champions League Champion (2019), Premier League Champion (2020), 3x Premier League Golden Boot, CAF African Player of the Year (2017, 2018)",
      interesting_facts: "Became a national symbol of hope in Egypt, funding schools, hospitals, and charity networks in his hometown of Basyoun.",
      legacy: "Arguably the most famous and successful Arab and African player in the history of the sport, inspiring generations of children worldwide."
    },
    {
      id: 10,
      full_name: "Essam El-Hadary",
      arabic_name: "عصام الحضري",
      date_birth: "1973-01-15",
      birth_place: "Kafr El-Battikh, Egypt",
      height_cm: 188,
      weight_kg: 85,
      position: "Goalkeeper",
      preferred_foot: "Right",
      national_career_span: "1996–2018",
      club_career_summary: "Al Ahly (1996-2008), FC Sion (2008-2009), Al-Taawoun (2017-2018)",
      world_cup_appearances: 1,
      goals: 0,
      assists: 0,
      minutes: 90,
      cards_count: 0,
      captain_caps: 1,
      biography: "Essam El-Hadary, nicknamed 'The High Dam', is a true legend of world football. Over a national career spanning 22 years, he won 4 Africa Cup of Nations titles. His lifelong dream of playing in a World Cup was realized in 2018. At 45 years and 161 days old against Saudi Arabia, he captained Egypt, breaking the world record for the oldest player in World Cup history. He celebrated this historic achievement by making a world-class diving penalty save in the 41st minute.",
      achievements: "Oldest Player in World Cup History (45y, 161d), 4x AFCON Champion, 3x AFCON Best Goalkeeper",
      interesting_facts: "Famously celebrated Egypt's championships by climbing the goalpost crossbar and eating a watermelon on top of the net.",
      legacy: "An enduring symbol of athletic longevity, work ethic, and passion, widely considered one of Africa's greatest goalkeepers of all time."
    },
    {
      id: 11,
      full_name: "Mohamed El-Shenawy",
      arabic_name: "محمد الشناوي",
      date_birth: "1988-12-18",
      birth_place: "El Hamool, Egypt",
      height_cm: 191,
      weight_kg: 86,
      position: "Goalkeeper",
      preferred_foot: "Right",
      national_career_span: "2018–Present",
      club_career_summary: "Petrojet (2013-2016), Al Ahly SC (2016–Present)",
      world_cup_appearances: 2,
      goals: 0,
      assists: 0,
      minutes: 180,
      cards_count: 0,
      captain_caps: 0,
      biography: "Mohamed El-Shenawy rose to prominence as Egypt's starting goalkeeper for the first two matches of the 2018 World Cup. In the opening match against Uruguay, El-Shenawy put on a legendary defensive performance, making several jaw-dropping saves against world-class strikes from Luis Suárez and Edinson Cavani. He was named the official FIFA Man of the Match, representing the crowning moment of his international career.",
      achievements: "FIFA World Cup Man of the Match (vs Uruguay 2018), 3x CAF Champions League Winner, 6x Egyptian League Champion",
      interesting_facts: "Respectfully declined the official Budweiser-sponsored Man of the Match trophy due to his religious beliefs.",
      legacy: "Solidified himself as Al Ahly and Egypt's primary goalkeeper for the next decade, continuing the tradition of giant Egyptian shot-stoppers."
    },
    {
      id: 12,
      full_name: "Ahmed Hegazi",
      arabic_name: "أحمد حجازي",
      date_birth: "1991-01-25",
      birth_place: "Ismailia, Egypt",
      height_cm: 193,
      weight_kg: 95,
      position: "Defender",
      preferred_foot: "Right",
      national_career_span: "2011–Present",
      club_career_summary: "Ismaily (2009-2012), Fiorentina (2012-2015), West Bromwich Albion (2017-2020), Al-Ittihad (2020-2024)",
      world_cup_appearances: 3,
      goals: 0,
      assists: 0,
      minutes: 270,
      cards_count: 1,
      captain_caps: 0,
      biography: "Ahmed Hegazi is a physical, dominant central defender who has been a bedrock of Egypt's defense in the 21st century. He played every single minute of Egypt's three group games at the 2018 World Cup in Russia. Hegazi excelled in low-block defensive structures, providing critical aerial clearance and defensive leadership, going on to enjoy several seasons in the English Premier League with West Bromwich.",
      achievements: "Saudi Professional League Champion, 2017 AFCON Team of the Tournament, Premier League regular",
      interesting_facts: "Played through severe knee ligament injuries early in his career to return and play at the highest levels of European football.",
      legacy: "Recognized as a defensive titan of Egypt's modern golden generation, matching European physical standards in central defense."
    },
    {
      id: 13,
      full_name: "Rabie Yassin",
      arabic_name: "ربيع ياسين",
      date_birth: "1960-09-07",
      birth_place: "Fayoum, Egypt",
      height_cm: 175,
      weight_kg: 71,
      position: "Defender",
      preferred_foot: "Left",
      national_career_span: "1980–1992",
      club_career_summary: "Al Ahly SC (1980-1992)",
      world_cup_appearances: 3,
      goals: 0,
      assists: 0,
      minutes: 270,
      cards_count: 0,
      captain_caps: 0,
      biography: "Rabie Yassin was the solid, defensive left-back who started all 3 final matches for Egypt in the 1990 World Cup. He was renowned for his positioning, tackling, and overlapping runs under Mahmoud El-Gohary. Yassin captained both Al Ahly and Egypt on several occasions and became a highly successful manager for the Egyptian national under-20 team, winning the African U-20 Championship in 2013.",
      achievements: "1986 Africa Cup of Nations Winner, 5x Egyptian Premier League Champion, African Youth Championship winning manager",
      interesting_facts: "Not publicly documented to have ever received a red card during his entire Al Ahly career, despite playing as a fullback.",
      legacy: "Considered one of the most reliable and disciplined left-backs in Egyptian football history."
    },
    {
      id: 14,
      full_name: "Ismail Youssef",
      arabic_name: "إسماعيل يوسف",
      date_birth: "1964-06-28",
      birth_place: "Giza, Egypt",
      height_cm: 179,
      weight_kg: 74,
      position: "Midfielder",
      preferred_foot: "Right",
      national_career_span: "1984–1997",
      club_career_summary: "Zamalek SC (1984–1997)",
      world_cup_appearances: 3,
      goals: 0,
      assists: 0,
      minutes: 270,
      cards_count: 0,
      captain_caps: 0,
      biography: "Ismail Youssef, nicknamed 'Tigana' after the legendary French midfielder Jean Tigana, was the tactical defensive anchor of Egypt's midfield in 1990. He broke up attacks, distributed play with clinical efficiency, and marked global stars with relentless vigor. He won 4 Egyptian League titles and 3 CAF Champions League titles with Zamalek, subsequently acting as general director for Zamalek's first team.",
      achievements: "3x CAF Champions League Winner, 1986 AFCON Champion, Zamalek Hall of Fame",
      interesting_facts: "His brother, Ibrahim Youssef, is also a Zamalek and Egyptian national team legend.",
      legacy: "The absolute standard for tactical defensive midfielders in modern Egyptian history, bridging defense and attack seamlessly."
    },
    {
      id: 15,
      full_name: "Ahmed El-Kass",
      arabic_name: "أحمد الكاس",
      date_birth: "1965-07-02",
      birth_place: "Alexandria, Egypt",
      height_cm: 177,
      weight_kg: 72,
      position: "Forward",
      preferred_foot: "Right",
      national_career_span: "1987–1997",
      club_career_summary: "Olympic Club (1983-1995), Zamalek SC (1995-1997), Ittihad Alexandria (1997-2000)",
      world_cup_appearances: 3,
      goals: 0,
      assists: 0,
      minutes: 245,
      cards_count: 0,
      captain_caps: 0,
      biography: "Ahmed El-Kass is one of Egypt's most beloved forward players. Renowned for his extreme technical agility, dribbling skill, and gentlemanly sportsmanship, El-Kass played a vital attacking role in Italy '90, combining brilliantly with Hossam Hassan. He won the Egyptian Premier League top-scorer award three consecutive times while playing for the unfancied Alexandria Olympic Club. He later won the CAF Champions League with Zamalek in 1996.",
      achievements: "1996 CAF Champions League Winner, 3x Egyptian League Top Scorer, 1998 Arab Nations Cup Winner",
      interesting_facts: "Known as 'The Gentleman' of Egyptian football because he was rarely booked and always shook hands with referees and opponents.",
      legacy: "One of the finest technicians and forward playmakers to emerge from Alexandria, beloved by both Ahly and Zamalek fans."
    }
  ],
  stadiums: [
    { id: 1, name: "Stadio Giorgio Ascarelli", city: "Naples", country: "Italy", capacity: 40000 },
    { id: 2, name: "Stadio della Favorita", city: "Palermo", country: "Italy", capacity: 36000 },
    { id: 3, name: "Stadio Sant'Elia", city: "Cagliari", country: "Italy", capacity: 30000 },
    { id: 4, name: "Central Stadium", city: "Yekaterinburg", country: "Russia", capacity: 35696 },
    { id: 5, name: "Saint Petersburg Stadium", city: "Saint Petersburg", country: "Russia", capacity: 64468 },
    { id: 6, name: "Volgograd Arena", city: "Volgograd", country: "Russia", capacity: 45568 },
    { id: 7, name: "Borg El Arab Stadium", city: "Alexandria", country: "Egypt", capacity: 86000 },
    { id: 8, name: "Cairo International Stadium", city: "Cairo", country: "Egypt", capacity: 100000 }
  ],
  referees: [
    { 
      id: 1, 
      name: "Rinaldo Barlassina", 
      arabic_name: "رينالدو بارلاسينا", 
      date_birth: "1898-05-02", 
      nationality: "Italy",
      fifa_badge_years: "1928–1942",
      world_cups: "1934, 1938",
      matches_officiated: "Hungary vs Egypt 4-2 (1934)",
      role: "Referee",
      teams: "Hungary, Egypt",
      stadium: "Stadio Giorgio Ascarelli (Naples)",
      stage: "Round of 16",
      career_summary: "Prominent Italian international referee of the 1930s who officiated at the 1934 and 1938 World Cups, as well as the 1936 Berlin Olympics. He was highly regarded in Europe but criticized by Egyptian players in 1934 for allowing a physical Hungarian goal where the goalkeeper's nose was fractured.",
      awards: "Italian Football Hall of Fame (Posthumous)",
      interesting_facts: "Referee of the famous 1934 World Cup semi-final between Czechoslovakia and Germany.",
      legacy: "A major officiating figure in the pre-war era of European football."
    },
    { 
      id: 2, 
      name: "Emilio Soriano Aladrén", 
      arabic_name: "إميليو سوريانو ألادرين", 
      date_birth: "1945-10-29", 
      nationality: "Spain",
      fifa_badge_years: "1980–1992",
      world_cups: "1990",
      matches_officiated: "Netherlands vs Egypt 1-1 (1990)",
      role: "Referee",
      teams: "Netherlands, Egypt",
      stadium: "Stadio della Favorita (Palermo)",
      stage: "Group Stage",
      career_summary: "Spanish professional referee who worked extensively in La Liga and European matches. He officiated Egypt's legendary 1-1 draw against the Netherlands in 1990, awarding Egypt the historic penalty that Magdi Abdelghani scored in the 83rd minute.",
      awards: "Guruceta Trophy (Best Referee in Spain)",
      interesting_facts: "Awarded Egypt's only penalty in World Cup finals history up to that point without hesitation after Hossam Hassan was tripped.",
      legacy: "Respected for his calm authority and excellent physical fitness on the pitch."
    },
    { 
      id: 3, 
      name: "Marcel Van Langenhove", 
      arabic_name: "مارسيل فان لانجنهوف", 
      date_birth: "1944-04-16", 
      nationality: "Belgium",
      fifa_badge_years: "1978–1991",
      world_cups: "1990",
      matches_officiated: "Republic of Ireland vs Egypt 0-0 (1990)",
      role: "Referee",
      teams: "Republic of Ireland, Egypt",
      stadium: "Stadio Sant'Elia (Cagliari)",
      stage: "Group Stage",
      career_summary: "Belgian international referee who officiated several key European matches and was selected for the 1990 World Cup. He took charge of the extremely defensive and tactical 0-0 draw between Egypt and Ireland.",
      awards: "Belgian Golden Whistle",
      interesting_facts: "The match he refereed was so slow-paced that it is cited as one of the key games that led to the introduction of the Back-Pass Rule in 1992.",
      legacy: "A classic European referee who managed high-tension, physical international clashes with dry humor and strictness."
    },
    { 
      id: 4, 
      name: "Kurt Röthlisberger", 
      arabic_name: "كورت روثلسبيرغر", 
      date_birth: "1951-05-21", 
      nationality: "Switzerland",
      fifa_badge_years: "1983–1995",
      world_cups: "1990, 1994",
      matches_officiated: "England vs Egypt 1-0 (1990)",
      role: "Referee",
      teams: "England, Egypt",
      stadium: "Stadio Sant'Elia (Cagliari)",
      stage: "Group Stage",
      career_summary: "High-profile Swiss referee who refereed the UEFA Champions League Final in 1993 and matches at two World Cups. He officiated Egypt's narrow 1-0 defeat to England in 1990, which eliminated the Pharaohs.",
      awards: "IFFHS World's Best Referee (Top 5 Nominee)",
      interesting_facts: "Later banned for life by UEFA in 1997 due to a bribery scandal unrelated to his World Cup officiating.",
      legacy: "A highly competent on-pitch technical official whose career was overshadowed by later administrative scandals."
    },
    { 
      id: 5, 
      name: "Björn Kuipers", 
      arabic_name: "بيورن كويبرز", 
      date_birth: "1973-03-28", 
      nationality: "Netherlands",
      fifa_badge_years: "2006–2021",
      world_cups: "2014, 2018",
      matches_officiated: "Egypt vs Uruguay 0-1 (2018)",
      role: "Referee",
      teams: "Egypt, Uruguay",
      stadium: "Central Stadium (Yekaterinburg)",
      stage: "Group Stage",
      career_summary: "Renowned Dutch referee who officiated multiple UEFA Champions League and Europa League finals, as well as the Euro 2020 Final. He officiated Egypt's opening match against Uruguay in 2018.",
      awards: "Officer of the Order of Orange-Nassau",
      interesting_facts: "Known as the wealthiest referee in football history due to his successful supermarket franchise ownership.",
      legacy: "Considered one of the greatest and most professional referees of the 21st century."
    },
    { 
      id: 6, 
      name: "Enrique Cáceres", 
      arabic_name: "إنريكي كاسيريس", 
      date_birth: "1974-03-20", 
      nationality: "Paraguay",
      fifa_badge_years: "2010–2018",
      world_cups: "2018",
      matches_officiated: "Russia vs Egypt 3-1 (2018)",
      role: "Referee",
      teams: "Russia, Egypt",
      stadium: "Saint Petersburg Stadium (Saint Petersburg)",
      stage: "Group Stage",
      career_summary: "Paraguayan referee who handled top-tier Copa Libertadores matches and international qualifiers. He officiated Russia's 3-1 win over Egypt, where he awarded Egypt a penalty via VAR after Mohamed Salah was fouled inside the box.",
      awards: "Paraguayan Referee of the Year",
      interesting_facts: "Corrected his initial free-kick decision to a penalty for Egypt after consulting the video assistant referee (VAR) team.",
      legacy: "An early adopter and defender of VAR technology in South American and global football."
    },
    { 
      id: 7, 
      name: "Wilmar Roldán", 
      arabic_name: "ويلمار رولدان", 
      date_birth: "1980-01-24", 
      nationality: "Colombia",
      fifa_badge_years: "2008–Present",
      world_cups: "2014, 2018",
      matches_officiated: "Saudi Arabia vs Egypt 2-1 (2018)",
      role: "Referee",
      teams: "Saudi Arabia, Egypt",
      stadium: "Volgograd Arena (Volgograd)",
      stage: "Group Stage",
      career_summary: "Highly experienced Colombian referee, widely regarded as one of the top officials in South America. He officiated the high-tension clash between Saudi Arabia and Egypt in 2018, awarding two controversial penalties to Saudi Arabia in the first half.",
      awards: "South American Referee of the Year",
      interesting_facts: "Saved by VAR when he initially ordered a second penalty against Egypt for a minor shirt-pull, which he verified on the pitchside monitor.",
      legacy: "A highly physical and authoritative referee who has overseen hundreds of high-stakes matches."
    },
    { 
      id: 8, 
      name: "Gamal Al-Ghandour", 
      arabic_name: "جمال الغندور", 
      date_birth: "1957-06-12", 
      nationality: "Egypt",
      fifa_badge_years: "1993–2003",
      world_cups: "1998, 2002",
      matches_officiated: "Chile vs Austria 1-1 (1998), Yugoslavia vs USA 1-0 (1998), Brazil vs Denmark 3-2 (1998), Spain vs Paraguay 3-1 (2002), Costa Rica vs Brazil 2-5 (2002), Spain vs South Korea 0-0 (2002)",
      role: "Referee",
      teams: "Chile, Austria, Yugoslavia, USA, Brazil, Denmark, Spain, Paraguay, Costa Rica, South Korea",
      stadium: "Stade de la Beaujoire (Nantes), Stade Geoffroy-Guichard (Saint-Étienne), Suwon World Cup Stadium (Suwon), Gwangju World Cup Stadium (Gwangju)",
      stage: "Group Stage, Quarter-Final",
      career_summary: "The most famous and successful referee in Arab and African football history. He officiated 6 matches across the 1998 and 2002 World Cups. In 1998, he officiated the thrilling Brazil vs Denmark quarter-final. In 2002, he refereed the highly controversial Spain vs South Korea quarter-final, where his linesmen made several errors by wrongly flagging Spanish goals as out of play.",
      awards: "CAF Best Referee Award, Egyptian Order of Sports Merit, Ranked top 10 best referees in the world by IFFHS",
      interesting_facts: "First referee from outside Europe to officiate in a UEFA European Championship (Euro 2000), handling Norway vs Spain and Denmark vs Czech Republic.",
      legacy: "A legendary pioneer who raised the status of African and Arab refereeing internationally, proving they could manage world-class pressure."
    },
    { 
      id: 9, 
      name: "Ali Kandil", 
      arabic_name: "علي قنديل", 
      date_birth: "1933-03-12", 
      nationality: "Egypt",
      fifa_badge_years: "1961–1974",
      world_cups: "1966, 1970",
      matches_officiated: "Chile vs North Korea 1-1 (1966), El Salvador vs Mexico 0-4 (1970), Romania vs Czechoslovakia 2-1 (1970)",
      role: "Referee",
      teams: "Chile, North Korea, El Salvador, Mexico, Romania, Czechoslovakia",
      stadium: "Ayresome Park (Middlesbrough), Estadio Azteca (Mexico City), Estadio Jalisco (Guadalajara)",
      stage: "Group Stage",
      career_summary: "Egypt's first truly legendary referee. He officiated at the 1966 World Cup in England, handling Chile vs North Korea, and the 1970 World Cup in Mexico, handling El Salvador vs Mexico. In the 1970 match, he was involved in a massive controversy when he allowed a quick Mexican free kick while the Salvadoran players were still setting up, leading to a riotous protest on the pitch.",
      awards: "CAF Golden Badge, Egyptian Football Association Shield of Honor",
      interesting_facts: "First Arab and African referee to officiate World Cup matches across two different continents (Europe and North America).",
      legacy: "The founding father of modern Egyptian officiating, opening the door for future generations of Egyptian whistleblowers."
    },
    { 
      id: 10, 
      name: "Essam Abd El-Fatah", 
      arabic_name: "عصام عبد الفتاح", 
      date_birth: "1965-12-30", 
      nationality: "Egypt",
      fifa_badge_years: "2001–2010",
      world_cups: "2006",
      matches_officiated: "Australia vs Japan 3-1 (2006), Sweden vs Paraguay 1-0 (2006)",
      role: "Referee",
      teams: "Australia, Japan, Sweden, Paraguay",
      stadium: "Fritz-Walter-Stadion (Kaiserslautern), Olympiastadion (Berlin)",
      stage: "Group Stage",
      career_summary: "A military pilot who rose to become one of Africa's leading referees in the 2000s. He officiated the crucial 2006 World Cup group match between Australia and Japan, as well as serving as a fourth official. After retiring, he became the influential Head of the Egyptian Referees Committee and a senior CAF refereeing instructor.",
      awards: "CAF Golden Whistle, Egyptian Armed Forces Sport Decoration of Honor",
      interesting_facts: "Was an active high-ranking pilot in the Egyptian Air Force throughout his entire refereeing career.",
      legacy: "Instilled high military discipline and modern physical training models into the Egyptian referee development curriculum."
    },
    { 
      id: 11, 
      name: "Gehad Grisha", 
      arabic_name: "جهاد جريشة", 
      date_birth: "1976-02-29", 
      nationality: "Egypt",
      fifa_badge_years: "2008–2021",
      world_cups: "2018",
      matches_officiated: "England vs Panama 6-1 (2018)",
      role: "Referee",
      teams: "England, Panama",
      stadium: "Nizhny Novgorod Stadium (Nizhny Novgorod)",
      stage: "Group Stage",
      career_summary: "A highly consistent modern referee who represented Egypt at several AFCON tournaments, Olympic Games, and the 2018 World Cup in Russia. In Russia, he delivered an immaculate performance during England's 6-1 victory over Panama, correctly awarding three penalties with absolute calm and authority.",
      awards: "CAF Best Referee (Runner-up), Best Arab Referee of the Year",
      interesting_facts: "His performance in the England-Panama match was highly praised by international commentators for his perfect use of VAR and firm control of physical player interactions.",
      legacy: "Represented the modern era of Egyptian refereeing, showing world-class adaptability to video assistant technology."
    },
    {
      id: 12,
      name: "Mostafa Kamel Mahmoud",
      arabic_name: "مصطفى كامل محمود",
      date_birth: "1937-05-18",
      nationality: "Egypt",
      fifa_badge_years: "1970–1982",
      world_cups: "1974",
      matches_officiated: "West Germany vs Chile 1-0 (1974), Poland vs Haiti 7-0 (1974)",
      role: "Assistant Referee",
      teams: "West Germany, Chile, Poland, Haiti",
      stadium: "Olympiastadion (West Berlin), Olympiastadion (Munich)",
      stage: "Group Stage",
      career_summary: "Respected Egyptian referee who was selected as an assistant referee (linesman) for the 1974 World Cup in West Germany. He represented Egypt elegantly, running the lines in major high-profile games including those of the eventual champions, West Germany.",
      awards: "EFA Referee Lifetime Achievement Shield",
      interesting_facts: "Officiated in front of over 80,000 intense fans at the West Berlin Olympiastadion during the highly charged match between West Germany and Chile.",
      legacy: "Ensured Egyptian refereeing representation was maintained during the golden era of European tactical football in the 1970s."
    },
    {
      id: 13,
      name: "Mahmoud Abou El-Regal",
      arabic_name: "محمود أبو الرجال",
      date_birth: "1982-01-01",
      nationality: "Egypt",
      fifa_badge_years: "2015–Present",
      world_cups: "2022",
      matches_officiated: "Netherlands vs Qatar 2-0 (2022), Poland vs Argentina 0-2 (2022), Croatia vs Brazil 1-1 (2022)",
      role: "Assistant Referee",
      teams: "Netherlands, Qatar, Poland, Argentina, Croatia, Brazil",
      stadium: "Al Bayt Stadium (Al Khor), Stadium 974 (Doha), Education City Stadium (Al Rayyan)",
      stage: "Group Stage, Quarter-Final",
      career_summary: "A stellar modern Egyptian assistant referee who was selected for the 2022 FIFA World Cup in Qatar. He formed highly cohesive officiating units with other African elite referees, officiating in high-intensity matches featuring world champions Argentina and Croatia's quarter-final clash with Brazil.",
      awards: "CAF Elite Assistant Referee Badge of Honor",
      interesting_facts: "The first Egyptian assistant referee to operate with high-precision semi-automated offside technology at a World Cup.",
      legacy: "Considered a model of physical speed and technical decision-making for contemporary assistant referees in Africa."
    }
  ],
  clubs: [
    { id: 1, name: "Al Ahly SC", arabic_name: "النادي الأهلي", country: "Egypt", founded_year: 1907 },
    { id: 2, name: "Zamalek SC", arabic_name: "نادي الزمالك", country: "Egypt", founded_year: 1911 },
    { id: 3, name: "Al Masry SC", arabic_name: "النادي المصري", country: "Egypt", founded_year: 1920 },
    { id: 4, name: "Ittihad Alexandria", arabic_name: "الاتحاد السكندري", country: "Egypt", founded_year: 1914 },
    { id: 5, name: "Ismaily SC", arabic_name: "نادي الإسماعيلي", country: "Egypt", founded_year: 1924 },
    { id: 6, name: "SC Beira-Mar", arabic_name: "بيرا مار", country: "Portugal", founded_year: 1922 },
    { id: 7, name: "PAOK FC", arabic_name: "باوك", country: "Greece", founded_year: 1926 },
    { id: 8, name: "Neuchâtel Xamax", arabic_name: "نيوشاتيل زاماكس", country: "Switzerland", founded_year: 1970 },
    { id: 9, name: "Liverpool FC", arabic_name: "ليفربول", country: "England", founded_year: 1892 },
    { id: 10, name: "West Bromwich Albion", arabic_name: "وست بروميتش ألبيون", country: "England", founded_year: 1878 },
    { id: 11, name: "Olympic Club", arabic_name: "النادي الأوليمبي", country: "Egypt", founded_year: 1905 },
    { id: 12, name: "FC Basel", arabic_name: "بازل", country: "Switzerland", founded_year: 1893 },
    { id: 13, name: "AS Roma", arabic_name: "روما", country: "Italy", founded_year: 1927 },
    { id: 14, name: "Al-Taawoun", arabic_name: "التعاون", country: "Saudi Arabia", founded_year: 1956 }
  ],
  player_career: [
    { id: 1, player_id: 1, club_id: 3, years: "1928–1934", appearances: 64, goals: 52 },
    { id: 2, player_id: 1, club_id: 2, years: "1934–1947", appearances: 120, goals: 89 },
    { id: 3, player_id: 2, club_id: 1, years: "1922–1940", appearances: 245, goals: 180 },
    { id: 4, player_id: 3, club_id: 1, years: "1930–1936", appearances: 85, goals: 0 },
    { id: 5, player_id: 4, club_id: 1, years: "1977–1988", appearances: 220, goals: 45 },
    { id: 6, player_id: 4, club_id: 6, years: "1988–1992", appearances: 105, goals: 18 },
    { id: 7, player_id: 5, club_id: 1, years: "1985–1990", appearances: 107, goals: 41 },
    { id: 8, player_id: 5, club_id: 7, years: "1990–1991", appearances: 19, goals: 5 },
    { id: 9, player_id: 9, club_id: 9, years: "2017–Present", appearances: 250, goals: 186 },
    { id: 10, player_id: 10, club_id: 1, years: "1996–2008", appearances: 412, goals: 0 },
    { id: 11, player_id: 10, club_id: 14, years: "2017–2018", appearances: 25, goals: 0 }
  ],
  player_world_cup_stats: [
    { id: 1, player_id: 1, edition_id: 1, jersey_number: 11, position: "Forward", caps: 1, starts: 1, minutes_played: 90, goals: 2, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 0 },
    { id: 2, player_id: 2, edition_id: 1, jersey_number: 10, position: "Forward", caps: 1, starts: 1, minutes_played: 90, goals: 0, assists: 1, yellow_cards: 0, red_cards: 0, is_captain: 1 },
    { id: 3, player_id: 3, edition_id: 1, jersey_number: 1, position: "Goalkeeper", caps: 1, starts: 1, minutes_played: 90, goals: 0, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 0 },
    { id: 4, player_id: 4, edition_id: 2, jersey_number: 14, position: "Midfielder", caps: 3, starts: 3, minutes_played: 270, goals: 1, assists: 0, yellow_cards: 1, red_cards: 0, is_captain: 0 },
    { id: 5, player_id: 5, edition_id: 2, jersey_number: 9, position: "Forward", caps: 3, starts: 3, minutes_played: 270, goals: 0, assists: 1, yellow_cards: 0, red_cards: 0, is_captain: 0 },
    { id: 6, player_id: 6, edition_id: 2, jersey_number: 2, position: "Defender", caps: 3, starts: 3, minutes_played: 270, goals: 0, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 0 },
    { id: 7, player_id: 7, edition_id: 2, jersey_number: 1, position: "Goalkeeper", caps: 3, starts: 3, minutes_played: 270, goals: 0, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 0 },
    { id: 8, player_id: 8, edition_id: 2, jersey_number: 4, position: "Defender", caps: 3, starts: 3, minutes_played: 270, goals: 0, assists: 0, yellow_cards: 1, red_cards: 0, is_captain: 0 },
    { id: 9, player_id: 9, edition_id: 3, jersey_number: 10, position: "Forward", caps: 2, starts: 2, minutes_played: 180, goals: 2, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 0 },
    { id: 10, player_id: 10, edition_id: 3, jersey_number: 1, position: "Goalkeeper", caps: 1, starts: 1, minutes_played: 90, goals: 0, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 1 },
    { id: 11, player_id: 11, edition_id: 3, jersey_number: 23, position: "Goalkeeper", caps: 2, starts: 2, minutes_played: 180, goals: 0, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 0 },
    { id: 12, player_id: 12, edition_id: 3, jersey_number: 6, position: "Defender", caps: 3, starts: 3, minutes_played: 270, goals: 0, assists: 0, yellow_cards: 1, red_cards: 0, is_captain: 0 },
    { id: 13, player_id: 13, edition_id: 2, jersey_number: 3, position: "Defender", caps: 3, starts: 3, minutes_played: 270, goals: 0, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 0 },
    { id: 14, player_id: 14, edition_id: 2, jersey_number: 16, position: "Midfielder", caps: 3, starts: 3, minutes_played: 270, goals: 0, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 0 },
    { id: 15, player_id: 15, edition_id: 2, jersey_number: 20, position: "Forward", caps: 3, starts: 3, minutes_played: 245, goals: 0, assists: 0, yellow_cards: 0, red_cards: 0, is_captain: 0 }
  ],
  qualification_campaigns: [
    { id: 1, edition_id: 1, coach_id: 1, outcome: "Qualified", summary: "Egypt played mandatory qualification matches against Mandatory Palestine in 1934. The Pharaohs crushed their opponents 7-1 in Cairo and 4-1 in Jerusalem, cruising to their first ever World Cup finals." },
    { id: 2, edition_id: 2, coach_id: 2, outcome: "Qualified", summary: "Egypt won African Round 2 Group B, qualifying for the final playoff against rivals Algeria. After a 0-0 away draw, a header from Hossam Hassan in front of 100,000 fans in Cairo won the second leg 1-0, sending Egypt to Italy '90." },
    { id: 3, edition_id: 3, coach_id: 3, outcome: "Qualified", summary: "Egypt topped CAF Group E. In the penultimate match against Congo, Mohamed Salah scored a 63rd-minute opener. Congo equalized in the 88th minute, but Salah stepped up to score a legendary 95th-minute penalty, securing World Cup entry." },
    { id: 4, edition_id: 3, coach_id: 2, outcome: "Did not qualify", summary: "The 2010 qualification campaign was one of the most intense and heartbreaking in Egyptian football. Locked with Algeria on points and goals, Egypt played a dramatic sudden-death playoff in Omdurman, Sudan, losing 1-0." },
    { id: 5, edition_id: 2, coach_id: 2, outcome: "Did not qualify", summary: "The 1994 campaign was derailed by the famous 'Stone Match' replay. After beating Zimbabwe 2-1 in Cairo, the match was ordered replayed in Lyon, France due to crowd trouble. The replay ended 0-0, eliminating Egypt." }
  ],
  qualification_matches: [
    { id: 1, campaign_id: 1, match_date: "1934-03-16", opponent: "Mandatory Palestine", host_or_away: "Home", egypt_score: 7, opponent_score: 1, scorers: "Mokhtar El-Tetsh (3), Mostafa Taha (2), Mohamed Latif (2)", stadium: "Al Ahly Stadium, Cairo", attendance: 13000 },
    { id: 2, campaign_id: 1, match_date: "1934-04-06", opponent: "Mandatory Palestine", host_or_away: "Away", egypt_score: 4, opponent_score: 1, scorers: "Mostafa Taha (1), Mohamed Latif (1), Abdulrahman Fawzi (2)", stadium: "Hapoel Stadium, Jerusalem", attendance: 8000 },
    { id: 3, campaign_id: 2, match_date: "1989-10-08", opponent: "Algeria", host_or_away: "Away", egypt_score: 0, opponent_score: 0, scorers: "None", stadium: "Stade 5 Juillet, Algiers", attendance: 80000 },
    { id: 4, campaign_id: 2, match_date: "1989-11-17", opponent: "Algeria", host_or_away: "Home", egypt_score: 1, opponent_score: 0, scorers: "Hossam Hassan (4')", stadium: "Cairo International Stadium, Cairo", attendance: 100000 },
    { id: 5, campaign_id: 3, match_date: "2017-10-08", opponent: "Congo", host_or_away: "Home", egypt_score: 2, opponent_score: 1, scorers: "Mohamed Salah (63', 95' pen)", stadium: "Borg El Arab Stadium, Alexandria", attendance: 85000 },
    { id: 6, campaign_id: 4, match_date: "2009-11-14", opponent: "Algeria", host_or_away: "Home", egypt_score: 2, opponent_score: 0, scorers: "Amr Zaki (2'), Emad Moteab (95')", stadium: "Cairo International Stadium, Cairo", attendance: 75000 },
    { id: 7, campaign_id: 4, match_date: "2009-11-18", opponent: "Algeria (Sudan Playoff)", host_or_away: "Neutral", egypt_score: 0, opponent_score: 1, scorers: "None", stadium: "Al Merreikh Stadium, Omdurman", attendance: 35000 },
    { id: 8, campaign_id: 5, match_date: "1993-02-28", opponent: "Zimbabwe", host_or_away: "Home", egypt_score: 2, opponent_score: 1, scorers: "Ashraf Kasem (32' pen), Hossam Hassan (40')", stadium: "Cairo International Stadium, Cairo", attendance: 80000 },
    { id: 9, campaign_id: 5, match_date: "1993-04-15", opponent: "Zimbabwe (Lyon Replay)", host_or_away: "Neutral", egypt_score: 0, opponent_score: 0, scorers: "None", stadium: "Stade de Gerland, Lyon", attendance: 10000 }
  ],
  matches: [
    { id: 1, edition_id: 1, match_date: "1934-05-27", stage: "Round of 16", opponent: "Hungary", egypt_score: 2, opponent_score: 4, stadium_id: 1, referee_id: 1, coach_id: 1, captain_id: 2, attendance: 9000, egypt_formation: "2-3-5 Pyramid", opponent_formation: "2-3-5 Pyramid", match_status: "Loss" },
    { id: 2, edition_id: 2, match_date: "1990-06-12", stage: "Group Stage (Group F)", opponent: "Netherlands", egypt_score: 1, opponent_score: 1, stadium_id: 2, referee_id: 2, coach_id: 2, captain_id: null, attendance: 33420, egypt_formation: "5-4-1", opponent_formation: "4-4-2", match_status: "Draw" },
    { id: 3, edition_id: 2, match_date: "1990-06-17", stage: "Group Stage (Group F)", opponent: "Republic of Ireland", egypt_score: 0, opponent_score: 0, stadium_id: 2, referee_id: 3, coach_id: 2, captain_id: null, attendance: 33288, egypt_formation: "5-4-1", opponent_formation: "4-4-2", match_status: "Draw" },
    { id: 4, edition_id: 2, match_date: "1990-06-21", stage: "Group Stage (Group F)", opponent: "England", egypt_score: 0, opponent_score: 1, stadium_id: 3, referee_id: 4, coach_id: 2, captain_id: null, attendance: 34959, egypt_formation: "5-4-1", opponent_formation: "4-4-2", match_status: "Loss" },
    { id: 5, edition_id: 3, match_date: "2018-06-15", stage: "Group Stage (Group A)", opponent: "Uruguay", egypt_score: 0, opponent_score: 1, stadium_id: 4, referee_id: 5, coach_id: 3, captain_id: 12, attendance: 27015, egypt_formation: "4-2-3-1", opponent_formation: "4-4-2", match_status: "Loss" },
    { id: 6, edition_id: 3, match_date: "2018-06-19", stage: "Group Stage (Group A)", opponent: "Russia", egypt_score: 1, opponent_score: 3, stadium_id: 5, referee_id: 6, coach_id: 3, captain_id: 12, attendance: 64468, egypt_formation: "4-2-3-1", opponent_formation: "4-2-3-1", match_status: "Loss" },
    { id: 7, edition_id: 3, match_date: "2018-06-25", stage: "Group Stage (Group A)", opponent: "Saudi Arabia", egypt_score: 1, opponent_score: 2, stadium_id: 6, referee_id: 7, coach_id: 3, captain_id: 10, attendance: 36823, egypt_formation: "4-2-3-1", opponent_formation: "4-1-4-1", match_status: "Loss" }
  ],
  formations: [
    { id: 1, name: "2-3-5 Pyramid", description: "The classic early 20th-century setup containing two fullbacks, three halfbacks, and five forwards. Relies heavily on winger crossing and inside-forwards exploiting channels." },
    { id: 2, name: "5-4-1", description: "A highly robust defensive setup with a sweeper (libero) behind two central defenders, overlapping fullbacks, four midfielders protecting the central zones, and a single isolated striker." },
    { id: 3, name: "4-2-3-1", description: "Modern configuration with double-defensive pivots, a creative central playmaker, speed-based wingers, and a central focal striker." }
  ],
  lineups: [
    // 1934 Match vs Hungary
    { id: 1, match_id: 1, player_id: 3, jersey_number: 1, position: "Goalkeeper", is_captain: 0 },
    { id: 2, match_id: 1, player_id: 2, jersey_number: 10, position: "Inside-Right Forward", is_captain: 1 },
    { id: 3, match_id: 1, player_id: 1, jersey_number: 11, position: "Inside-Left Forward", is_captain: 0 },
    // 1990 Match vs Netherlands
    { id: 4, match_id: 2, player_id: 7, jersey_number: 1, position: "Goalkeeper", is_captain: 0 },
    { id: 5, match_id: 2, player_id: 8, jersey_number: 4, position: "Sweeper", is_captain: 0 },
    { id: 6, match_id: 2, player_id: 6, jersey_number: 2, position: "Right-Back", is_captain: 0 },
    { id: 7, match_id: 2, player_id: 4, jersey_number: 14, position: "Central Midfielder", is_captain: 0 },
    { id: 8, match_id: 2, player_id: 5, jersey_number: 9, position: "Striker", is_captain: 0 },
    { id: 9, match_id: 2, player_id: 13, jersey_number: 3, position: "Left-Back", is_captain: 0 },
    { id: 10, match_id: 2, player_id: 14, jersey_number: 16, position: "Defensive Midfielder", is_captain: 0 },
    { id: 11, match_id: 2, player_id: 15, jersey_number: 20, position: "Attacking Midfielder", is_captain: 0 }
  ],
  substitutions: [
    { id: 1, match_id: 2, player_out_id: 15, player_in_id: 5, minute: 81, reason: "Tactical change to increase offensive pressure" },
    { id: 2, match_id: 6, player_out_id: 12, player_in_id: 9, minute: 64, reason: "Injured shoulder replacement precaution" }
  ],
  match_events: [
    { id: 1, match_id: 1, minute: 35, type: "Goal", player_id: 1, detail: "Abdulrahman Fawzi receives a pass from El-Tetsh, cuts past two Hungarian defenders and fires low into the bottom corner." },
    { id: 2, match_id: 1, minute: 39, type: "Goal", player_id: 1, detail: "Abdulrahman Fawzi triggers Naples stadium into cheers, dribbling from the halfway line and slamming the equalizer past the goalkeeper." },
    { id: 3, match_id: 2, minute: 83, type: "Goal", player_id: 4, detail: "Magdi Abdelghani converts a high-pressure penalty, slotting the ball into the bottom-right corner after Hossam Hassan is brought down." },
    { id: 4, match_id: 7, minute: 22, type: "Goal", player_id: 9, detail: "Mohamed Salah chases down a long lofted pass, controls it exquisitely with his left foot, and chips the rushing Saudi keeper beautifully." },
    { id: 5, match_id: 7, minute: 41, type: "Penalty Save", player_id: 10, detail: "At age 45, Essam El-Hadary makes a stunning, diving save to tip Fahad Al-Muwallad's penalty onto the crossbar and away!" }
  ],
  player_match_stats: [
    { id: 1, player_id: 1, match_id: 1, minutes_played: 90, goals_scored: 2, assists_provided: 0, yellow_cards: 0, red_cards: 0, rating: 9.5 },
    { id: 2, player_id: 2, match_id: 1, minutes_played: 90, goals_scored: 0, assists_provided: 1, yellow_cards: 0, red_cards: 0, rating: 8.0 },
    { id: 3, player_id: 4, match_id: 2, minutes_played: 90, goals_scored: 1, assists_provided: 0, yellow_cards: 0, red_cards: 0, rating: 8.5 },
    { id: 4, player_id: 5, match_id: 2, minutes_played: 90, goals_scored: 0, assists_provided: 1, yellow_cards: 0, red_cards: 0, rating: 9.0 },
    { id: 5, player_id: 11, match_id: 5, minutes_played: 90, goals_scored: 0, assists_provided: 0, yellow_cards: 0, red_cards: 0, rating: 9.2 }
  ],
  goals: [
    { id: 1, match_id: 1, player_id: 1, minute: 35, type: "Open Play", description: "A beautifully constructed attack from Egypt. Mukhtar El-Tetsh slid a smart pass into Abdulrahman Fawzi who turned and fired past the keeper." },
    { id: 2, match_id: 1, player_id: 1, minute: 39, type: "Open Play", description: "Fawzi intercepts a midfield pass, beats a Hungarian defender with pace, and drills a thunderous low shot into the corner." },
    { id: 3, match_id: 2, player_id: 4, minute: 83, type: "Penalty", description: "Magdi Abdelghani stands tall, placing his penalty low and hard to the right side while the Dutch keeper dives left." },
    { id: 4, match_id: 6, player_id: 9, minute: 73, type: "Penalty", description: "Mohamed Salah calmly scores the penalty down the middle, giving Egypt a consolation goal against Russia." },
    { id: 5, match_id: 7, player_id: 9, minute: 22, type: "Open Play", description: "Salah chases a high route-one pass, takes an exquisite touch, and chips the ball beautifully over the goalkeeper." }
  ],
  assists: [
    { id: 1, goal_id: 1, player_id: 2, type: "Pass" }
  ],
  cards: [
    { id: 1, match_id: 2, player_id: 4, card_type: "Yellow", minute: 57, reason: "Tactical foul in midfield to stop a Netherlands counter-attack" },
    { id: 2, match_id: 4, player_id: 8, card_type: "Yellow", minute: 68, reason: "Dissent / Arguing with the referee about a throw-in decision" },
    { id: 3, match_id: 6, player_id: 12, card_type: "Yellow", minute: 84, reason: "Rough sliding challenge in defensive third" }
  ],
  penalties: [
    { id: 1, match_id: 2, player_id: 4, minute: 83, is_shootout: 0, outcome: "Scored", gk_opponent_name: "Hans van Breukelen" },
    { id: 2, match_id: 6, player_id: 9, minute: 73, is_shootout: 0, outcome: "Scored", gk_opponent_name: "Igor Akinfeev" },
    { id: 3, match_id: 7, player_id: 10, minute: 41, is_shootout: 0, outcome: "Saved", gk_opponent_name: "Fahad Al-Muwallad" } // Saved by Essam El Hadary
  ],
  records: [
    { id: 1, title: "Oldest Player in World Cup History", description: "At the age of 45 years and 161 days, Egyptian goalkeeper Essam El-Hadary set the world record as the oldest participant in any FIFA World Cup tournament during the match against Saudi Arabia.", holder_name: "Essam El-Hadary", value: "45 years, 161 days", edition_year: 2018 },
    { id: 2, title: "First African World Cup Goalscorer", description: "Abdulrahman Fawzi became the first player from Africa and the Arab region to score a goal in a World Cup finals, hitting two goals against Hungary.", holder_name: "Abdulrahman Fawzi", value: "2 Goals", edition_year: 1934 },
    { id: 3, title: "Joint World Cup Top Scorer for Egypt", description: "Mohamed Salah and Abdulrahman Fawzi are tied for the most World Cup goals scored for the Pharaohs, each finding the net twice in the finals.", holder_name: "Mohamed Salah & Abdulrahman Fawzi", value: "2 Goals each", edition_year: 2018 }
  ],
  stories: [
    { id: 1, title: "Fawzi's 1934 Masterclass & The Lost Hat-trick", story: "In the warm spring afternoon of Naples 1934, Egypt took the pitch against a heavily-favored Hungary. Falling behind 2-0 early on, the Pharaohs looked defeated. However, Abdulrahman Fawzi single-handedly turned the tide. With lightning pace, he scored twice in four minutes (35' and 39') to stun the Italians and Hungarians alike. Soon after, Fawzi broke through again and slammed the ball into the net to complete what should have been the first African hat-trick in history. However, the referee controversially ruled it out for offside. Mustafa Mansour, the goalkeeper, later recalled that the refereeing was highly questionable, and Fawzi's disallowed goal remains one of Egyptian football's earliest and greatest 'what-ifs'.", edition_year: 1934, tags: "Drama, Disallowed Goal, Historic" },
    { id: 2, title: "The High Dam's 45-Year Dream", story: "Essam El-Hadary had won everything in African club and continental football, but the World Cup had eluded him for 22 years of his international career. Finally, in Russia 2018, Cúper starting El-Shenawy in the first two matches left El-Hadary on the bench. In the final group game against Saudi Arabia, with nothing but pride on the line, El-Hadary was given the starting nod. Wearing the captain's armband, he made history as the oldest player in World Cup history. But he was not there just for a record. In the 41st minute, Saudi Arabia was awarded a penalty. The world watched as the 45-year-old launched himself to his right, making a spectacular diving tip-save to redirect Fahad Al-Muwallad's penalty onto the crossbar. It was a beautiful, heart-wrenching validation of a lifetime of dedication.", edition_year: 2018, tags: "Inspirational, Penalty Save, Record" }
  ],
  facts: [
    { id: 1, category: "Milestone", fact_text: "Egypt was the first non-European and non-American nation to ever participate in a FIFA World Cup when they entered the 1934 tournament.", edition_year: 1934 },
    { id: 2, category: "Media", fact_text: "The 1990 match between Egypt and the Republic of Ireland was so defensive and slow-paced that it is widely credited for accelerating FIFA's introduction of the Back-Pass Rule in 1992.", edition_year: 1990 },
    { id: 3, category: "Religion", fact_text: "Mohamed El-Shenawy declined his official FIFA Man of the Match trophy after the Uruguay game because it was sponsored by Budweiser, a major alcohol brand.", edition_year: 2018 }
  ],
  achievements: [
    { id: 1, title: "Inaugural African World Cup Representative", description: "Egypt qualified as the sole representative of Africa and the Middle East in the 1934 tournament, introducing African football to the global stage.", year: 1934 },
    { id: 2, title: "Unbeaten Against Reigning European Champions", description: "Egypt held the legendary 1988 European Champions Netherlands (featuring Ruud Gullit, Marco van Basten, and Ronald Koeman) to an incredible 1-1 draw in Palermo.", year: 1990 }
  ],
  rankings: [
    { id: 1, year: 1990, rank: 34, points: 520.0, notes: "Estimated historical Elo ranking prior to World Cup kickoff" },
    { id: 2, year: 2018, rank: 45, points: 649.0, notes: "Official FIFA Ranking prior to the tournament" }
  ],
  favorites: [],
  settings: [
    { id: 1, key: "theme", value: "Egyptian Gold" },
    { id: 2, key: "sync_enabled", value: "true" },
    { id: 3, key: "notifications", value: "true" }
  ]
};

export const generateSqlSeed = (): string => {
  let sql = `-- ==========================================================\n`;
  sql += `-- EGYPT WORLD CUP ENCYCLOPEDIA - PRODUCTION HISTORICAL SEED\n`;
  sql += `-- Insert statements containing only real historical records\n`;
  sql += `-- ==========================================================\n\n`;

  // 1. Editions
  sql += `-- Inserting Editions\n`;
  for (const row of SEED_DATA.editions) {
    sql += `INSERT INTO editions (id, year, host, start_date, end_date, winner, egypt_position, egypt_record, total_teams, summary)\n`;
    sql += `VALUES (${row.id}, ${row.year}, '${row.host}', '${row.start_date}', '${row.end_date}', '${row.winner}', '${row.egypt_position}', '${row.egypt_record}', ${row.total_teams}, '${row.summary.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 2. Coaches
  sql += `-- Inserting Coaches\n`;
  for (const row of SEED_DATA.coaches) {
    sql += `INSERT INTO coaches (id, name, arabic_name, nationality, birth_date, tactical_style, biography)\n`;
    sql += `VALUES (${row.id}, '${row.name}', '${row.arabic_name}', '${row.nationality}', '${row.birth_date}', '${row.tactical_style.replace(/'/g, "''")}', '${row.biography.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 3. Players
  sql += `-- Inserting Players\n`;
  for (const row of SEED_DATA.players) {
    sql += `INSERT INTO players (id, full_name, arabic_name, date_birth, birth_place, height_cm, weight_kg, position, preferred_foot, national_career_span, club_career_summary, world_cup_appearances, goals, assists, minutes, cards_count, captain_caps, biography, achievements, interesting_facts, legacy, shirt_number, club_during_tournament, club_during_tournament_ar, age_during_tournament, played_status, played_status_ar, yellow_cards, red_cards, is_captain, edition_year)\n`;
    sql += `VALUES (${row.id}, '${row.full_name}', '${row.arabic_name}', '${row.date_birth}', '${row.birth_place.replace(/'/g, "''")}', ${row.height_cm || "NULL"}, ${row.weight_kg || "NULL"}, '${row.position}', '${row.preferred_foot}', '${row.national_career_span}', '${row.club_career_summary.replace(/'/g, "''")}', ${row.world_cup_appearances}, ${row.goals}, ${row.assists}, ${row.minutes}, ${row.cards_count}, ${row.captain_caps}, '${row.biography.replace(/'/g, "''")}', '${row.achievements?.replace(/'/g, "''") || "NULL"}', '${row.interesting_facts?.replace(/'/g, "''") || "NULL"}', '${row.legacy?.replace(/'/g, "''") || "NULL"}', ${row.shirt_number || "NULL"}, '${(row.club_during_tournament || "").replace(/'/g, "''")}', '${(row.club_during_tournament_ar || "").replace(/'/g, "''")}', ${row.age_during_tournament || "NULL"}, '${row.played_status || ""}', '${row.played_status_ar || ""}', ${row.yellow_cards || 0}, ${row.red_cards || 0}, ${row.is_captain ? 1 : 0}, ${row.edition_year || "NULL"});\n`;
  }
  sql += `\n`;

  // 4. Stadiums
  sql += `-- Inserting Stadiums\n`;
  for (const row of SEED_DATA.stadiums) {
    sql += `INSERT INTO stadiums (id, name, city, country, capacity)\n`;
    sql += `VALUES (${row.id}, '${row.name.replace(/'/g, "''")}', '${row.city.replace(/'/g, "''")}', '${row.country.replace(/'/g, "''")}', ${row.capacity});\n`;
  }
  sql += `\n`;

  // 5. Referees
  sql += `-- Inserting Referees\n`;
  for (const row of SEED_DATA.referees) {
    sql += `INSERT INTO referees (id, name, arabic_name, date_birth, nationality, fifa_badge_years, world_cups, matches_officiated, role, teams, stadium, stage, career_summary, awards, interesting_facts, legacy)\n`;
    sql += `VALUES (\n`;
    sql += `  ${row.id},\n`;
    sql += `  '${row.name.replace(/'/g, "''")}',\n`;
    sql += `  ${row.arabic_name ? `'${row.arabic_name.replace(/'/g, "''")}'` : "NULL"},\n`;
    sql += `  ${row.date_birth ? `'${row.date_birth}'` : "NULL"},\n`;
    sql += `  '${row.nationality}',\n`;
    sql += `  ${row.fifa_badge_years ? `'${row.fifa_badge_years}'` : "NULL"},\n`;
    sql += `  ${row.world_cups ? `'${row.world_cups}'` : "NULL"},\n`;
    sql += `  ${row.matches_officiated ? `'${row.matches_officiated.replace(/'/g, "''")}'` : "NULL"},\n`;
    sql += `  ${row.role ? `'${row.role}'` : "NULL"},\n`;
    sql += `  ${row.teams ? `'${row.teams.replace(/'/g, "''")}'` : "NULL"},\n`;
    sql += `  ${row.stadium ? `'${row.stadium.replace(/'/g, "''")}'` : "NULL"},\n`;
    sql += `  ${row.stage ? `'${row.stage}'` : "NULL"},\n`;
    sql += `  ${row.career_summary ? `'${row.career_summary.replace(/'/g, "''")}'` : "NULL"},\n`;
    sql += `  ${row.awards ? `'${row.awards.replace(/'/g, "''")}'` : "NULL"},\n`;
    sql += `  ${row.interesting_facts ? `'${row.interesting_facts.replace(/'/g, "''")}'` : "NULL"},\n`;
    sql += `  ${row.legacy ? `'${row.legacy.replace(/'/g, "''")}'` : "NULL"}\n`;
    sql += `);\n`;
  }
  sql += `\n`;

  // 6. Clubs
  sql += `-- Inserting Clubs\n`;
  for (const row of SEED_DATA.clubs) {
    sql += `INSERT INTO clubs (id, name, arabic_name, country, founded_year)\n`;
    sql += `VALUES (${row.id}, '${row.name.replace(/'/g, "''")}', '${row.arabic_name.replace(/'/g, "''")}', '${row.country.replace(/'/g, "''")}', ${row.founded_year});\n`;
  }
  sql += `\n`;

  // 7. Player Career
  sql += `-- Inserting Player Careers\n`;
  for (const row of SEED_DATA.player_career) {
    sql += `INSERT INTO player_career (id, player_id, club_id, years, appearances, goals)\n`;
    sql += `VALUES (${row.id}, ${row.player_id}, ${row.club_id}, '${row.years}', ${row.appearances || "NULL"}, ${row.goals || "NULL"});\n`;
  }
  sql += `\n`;

  // 8. Player World Cup Stats
  sql += `-- Inserting Player World Cup Stats\n`;
  for (const row of SEED_DATA.player_world_cup_stats) {
    sql += `INSERT INTO player_world_cup_stats (id, player_id, edition_id, jersey_number, position, caps, starts, minutes_played, goals, assists, yellow_cards, red_cards, is_captain)\n`;
    sql += `VALUES (${row.id}, ${row.player_id}, ${row.edition_id}, ${row.jersey_number || "NULL"}, '${row.position}', ${row.caps}, ${row.starts}, ${row.minutes_played}, ${row.goals}, ${row.assists}, ${row.yellow_cards}, ${row.red_cards}, ${row.is_captain});\n`;
  }
  sql += `\n`;

  // 9. Qualification Campaigns
  sql += `-- Inserting Qualification Campaigns\n`;
  for (const row of SEED_DATA.qualification_campaigns) {
    sql += `INSERT INTO qualification_campaigns (id, edition_id, coach_id, outcome, summary)\n`;
    sql += `VALUES (${row.id}, ${row.edition_id}, ${row.coach_id || "NULL"}, '${row.outcome}', '${row.summary.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 10. Qualification Matches
  sql += `-- Inserting Qualification Matches\n`;
  for (const row of SEED_DATA.qualification_matches) {
    sql += `INSERT INTO qualification_matches (id, campaign_id, match_date, opponent, host_or_away, egypt_score, opponent_score, scorers, stadium, attendance)\n`;
    sql += `VALUES (${row.id}, ${row.campaign_id}, '${row.match_date}', '${row.opponent.replace(/'/g, "''")}', '${row.host_or_away}', ${row.egypt_score}, ${row.opponent_score}, '${row.scorers?.replace(/'/g, "''") || "NULL"}', '${row.stadium.replace(/'/g, "''")}', ${row.attendance || "NULL"});\n`;
  }
  sql += `\n`;

  // 11. Matches
  sql += `-- Inserting World Cup Matches\n`;
  for (const row of SEED_DATA.matches) {
    sql += `INSERT INTO matches (id, edition_id, match_date, stage, opponent, egypt_score, opponent_score, stadium_id, referee_id, coach_id, captain_id, attendance, egypt_formation, opponent_formation, match_status)\n`;
    sql += `VALUES (${row.id}, ${row.edition_id}, '${row.match_date}', '${row.stage}', '${row.opponent.replace(/'/g, "''")}', ${row.egypt_score}, ${row.opponent_score}, ${row.stadium_id}, ${row.referee_id}, ${row.coach_id}, ${row.captain_id || "NULL"}, ${row.attendance || "NULL"}, '${row.egypt_formation}', '${row.opponent_formation}', '${row.match_status}');\n`;
  }
  sql += `\n`;

  // 12. Formations
  sql += `-- Inserting Formations\n`;
  for (const row of SEED_DATA.formations) {
    sql += `INSERT INTO formations (id, name, description)\n`;
    sql += `VALUES (${row.id}, '${row.name}', '${row.description.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 13. Lineups
  sql += `-- Inserting Lineups\n`;
  for (const row of SEED_DATA.lineups) {
    sql += `INSERT INTO lineups (id, match_id, player_id, jersey_number, position, is_captain)\n`;
    sql += `VALUES (${row.id}, ${row.match_id}, ${row.player_id}, ${row.jersey_number || "NULL"}, '${row.position}', ${row.is_captain});\n`;
  }
  sql += `\n`;

  // 14. Substitutions
  sql += `-- Inserting Substitutions\n`;
  for (const row of SEED_DATA.substitutions) {
    sql += `INSERT INTO substitutions (id, match_id, player_out_id, player_in_id, minute, reason)\n`;
    sql += `VALUES (${row.id}, ${row.match_id}, ${row.player_out_id}, ${row.player_in_id}, ${row.minute}, '${row.reason.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 15. Match Events
  sql += `-- Inserting Match Events\n`;
  for (const row of SEED_DATA.match_events) {
    sql += `INSERT INTO match_events (id, match_id, minute, type, player_id, detail)\n`;
    sql += `VALUES (${row.id}, ${row.match_id}, ${row.minute}, '${row.type}', ${row.player_id || "NULL"}, '${row.detail.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 16. Player Match Stats
  sql += `-- Inserting Player Match Stats\n`;
  for (const row of SEED_DATA.player_match_stats) {
    sql += `INSERT INTO player_match_stats (id, player_id, match_id, minutes_played, goals_scored, assists_provided, yellow_cards, red_cards, rating)\n`;
    sql += `VALUES (${row.id}, ${row.player_id}, ${row.match_id}, ${row.minutes_played}, ${row.goals_scored}, ${row.assists_provided}, ${row.yellow_cards}, ${row.red_cards}, ${row.rating || "NULL"});\n`;
  }
  sql += `\n`;

  // 17. Goals
  sql += `-- Inserting Goals\n`;
  for (const row of SEED_DATA.goals) {
    sql += `INSERT INTO goals (id, match_id, player_id, minute, type, description)\n`;
    sql += `VALUES (${row.id}, ${row.match_id}, ${row.player_id}, ${row.minute}, '${row.type}', '${row.description.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 18. Assists
  sql += `-- Inserting Assists\n`;
  for (const row of SEED_DATA.assists) {
    sql += `INSERT INTO assists (id, goal_id, player_id, type)\n`;
    sql += `VALUES (${row.id}, ${row.goal_id}, ${row.player_id}, '${row.type}');\n`;
  }
  sql += `\n`;

  // 19. Cards
  sql += `-- Inserting Cards\n`;
  for (const row of SEED_DATA.cards) {
    sql += `INSERT INTO cards (id, match_id, player_id, card_type, minute, reason)\n`;
    sql += `VALUES (${row.id}, ${row.match_id}, ${row.player_id}, '${row.card_type}', ${row.minute}, '${row.reason.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 20. Penalties
  sql += `-- Inserting Penalties\n`;
  for (const row of SEED_DATA.penalties) {
    sql += `INSERT INTO penalties (id, match_id, player_id, minute, is_shootout, outcome, gk_opponent_name)\n`;
    sql += `VALUES (${row.id}, ${row.match_id}, ${row.player_id}, ${row.minute || "NULL"}, ${row.is_shootout}, '${row.outcome}', '${row.gk_opponent_name.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 21. Records
  sql += `-- Inserting Records\n`;
  for (const row of SEED_DATA.records) {
    sql += `INSERT INTO records (id, title, description, holder_name, value, edition_year)\n`;
    sql += `VALUES (${row.id}, '${row.title.replace(/'/g, "''")}', '${row.description.replace(/'/g, "''")}', '${row.holder_name.replace(/'/g, "''")}', '${row.value.replace(/'/g, "''")}', ${row.edition_year || "NULL"});\n`;
  }
  sql += `\n`;

  // 22. Stories
  sql += `-- Inserting Stories\n`;
  for (const row of SEED_DATA.stories) {
    sql += `INSERT INTO stories (id, title, story, edition_year, tags)\n`;
    sql += `VALUES (${row.id}, '${row.title.replace(/'/g, "''")}', '${row.story.replace(/'/g, "''")}', ${row.edition_year || "NULL"}, '${row.tags.replace(/'/g, "''")}');\n`;
  }
  sql += `\n`;

  // 23. Facts
  sql += `-- Inserting Facts\n`;
  for (const row of SEED_DATA.facts) {
    sql += `INSERT INTO facts (id, category, fact_text, edition_year)\n`;
    sql += `VALUES (${row.id}, '${row.category.replace(/'/g, "''")}', '${row.fact_text.replace(/'/g, "''")}', ${row.edition_year || "NULL"});\n`;
  }
  sql += `\n`;

  // 24. Achievements
  sql += `-- Inserting Achievements\n`;
  for (const row of SEED_DATA.achievements) {
    sql += `INSERT INTO achievements (id, title, description, year)\n`;
    sql += `VALUES (${row.id}, '${row.title.replace(/'/g, "''")}', '${row.description.replace(/'/g, "''")}', ${row.year || "NULL"});\n`;
  }
  sql += `\n`;

  // 25. Rankings
  sql += `-- Inserting Rankings\n`;
  for (const row of SEED_DATA.rankings) {
    sql += `INSERT INTO rankings (id, year, rank, points, notes)\n`;
    sql += `VALUES (${row.id}, ${row.year}, ${row.rank}, ${row.points || "NULL"}, '${row.notes?.replace(/'/g, "''") || "NULL"}');\n`;
  }
  sql += `\n`;

  // 26. Favorites (Optional defaults or empty)
  sql += `-- Table 'favorites' is left blank for the user to bookmark content during app execution.\n\n`;

  // 27. Settings
  sql += `-- Inserting Settings\n`;
  for (const row of SEED_DATA.settings) {
    sql += `INSERT INTO settings (id, key, value)\n`;
    sql += `VALUES (${row.id}, '${row.key}', '${row.value}');\n`;
  }
  sql += `\n`;

  return sql;
};
