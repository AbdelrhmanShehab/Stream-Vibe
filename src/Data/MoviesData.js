import inceptionPoster from "../assets/imgs/inception.webp";
import shawshankPoster from "../assets/imgs/shawshank.webp";
import batmanPoster from "../assets/imgs/batman.webp";
import matrixPoster from "../assets/imgs/Matrix.webp";
import interstellarPoster from "../assets/imgs/interstellar.jpg";
import fightClubPoster from "../assets/imgs/FightClub.webp";
import silencePoster from "../assets/imgs/silenceLamp.jpg";
import pulbPoster from "../assets/imgs/pulpFiction.webp";
import godfatherPoster from "../assets/imgs/godfather.webp";
import godfatherTwoPoster from "../assets/imgs/godfatherTwo.webp";
import sevenPoster from "../assets/imgs/seven.webp";
import lordOnePoster from "../assets/imgs/lordOne.webp";
import lordTwoPoster from "../assets/imgs/lordTwo.webp";
import lordThreePoster from "../assets/imgs/lordThree.jpg";
import prestigePoster from "../assets/imgs/prestige.webp";
import gladiatorPoster from "../assets/imgs/gladiator.webp";
import titanicPoster from "../assets/imgs/Titanic.webp";
import alienPoster from "../assets/imgs/Alien.webp";
import bladeRunPoster from "../assets/imgs/bladeRunner.webp";
import madMaxPoster from "../assets/imgs/madMax.webp";
import terminatorPoster from "../assets/imgs/terminatorTwo.webp";
import aliensPoster from "../assets/imgs/aliens.webp";
import jokerPoster from "../assets/imgs/joker.webp";
import parasitePoster from "../assets/imgs/parasite.webp";
import clockPoster from "../assets/imgs/clockFilm.webp";
import beautifulMindPoster from "../assets/imgs/beautyMind.jpg";
import sixPoster from "../assets/imgs/sixSin.webp";
import departedPoster from "../assets/imgs/departed.webp";
import notebookPoster from "../assets/imgs/notebook.webp";
import psychoPoster from "../assets/imgs/psycho.webp";
import shutterIslandPoster from "../assets/imgs/shutterIsland.jpg";
import conjPoster from "../assets/imgs/conjuring.webp";
import exorPoster from "../assets/imgs/exorcistt.webp";
import shinPoster from "../assets/imgs/shine.jpg";
import donniePoster from "../assets/imgs/donnieDarko.webp";
import goneGirlPoster from "../assets/imgs/gonegirl.webp";
import trumanPoster from "../assets/imgs/trumanShow.webp";
import lalalandPoster from "../assets/imgs/LaLaLand.webp";
import bladeRunnerOldPoster from "../assets/imgs/BladeRunnerOld.webp";
import arrivalPoster from "../assets/imgs/arrival.webp";
import eternalPoster from "../assets/imgs/eternal.webp";
import spacePoster from "../assets/imgs/spaceFilm.webp";
import gravityPoster from "../assets/imgs/gravity.webp";
import extraPoster from "../assets/imgs/exorcistt.webp";
import starWarsXi from "../assets/imgs/starWarsXI.webp";
import jungleCruise from "../assets/imgs/jungleCruise.webp";
import horrorNight from "../assets/imgs/horrorNight.webp";
import mummy from "../assets/imgs/mummy.webp";
import lionKing from "../assets/imgs/lionKing.webp";
import harryOne from "../assets/imgs/harryOne.webp";
import harryTwo from "../assets/imgs/harryTwo.webp";
import harryThree from "../assets/imgs/harryThree.webp";
import harryFour from "../assets/imgs/harryFour.webp";
import harryFive from "../assets/imgs/harryFive.webp";
import harrySix from "../assets/imgs/harrySix.webp";
import harrySeven from "../assets/imgs/harrySeven.webp";
import harryEight from "../assets/imgs/harryEight.webp";
import killBillPoster from "../assets/imgs/killBillPoster.webp";
import midnightInParisPoster from "../assets/imgs/midnight.webp";
import ingloriousBasterdsPoster from "../assets/imgs/inglourious-basterds.webp";
import babyDriverPoster from "../assets/imgs/baby-driver.webp";
import hungerGamesPoster from "../assets/imgs/hungergames.webp";
import catchingFirePoster from "../assets/imgs/catshingFire.webp";
import mockingjayPart1Poster from "../assets/imgs/MockingjayPart 1.webp";
import mockingjayPart2Poster from "../assets/imgs/MockingjayPart2.webp";
import theMegPoster from "../assets/imgs/meg.webp";
const movies = [
  {
    title: "Kill Bill: Vol. 1",
    image: killBillPoster,
    description:
      "A former assassin, known as The Bride, wakes from a coma and sets out to seek revenge on the team of assassins who betrayed her.",
    category: "Action",
    duration: "1h 51m",
    releaseDate: "2003",
  },
  {
    title: "Midnight in Paris",
    image: midnightInParisPoster,
    description:
      "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s every night at midnight.",
    category: "Romance",
    duration: "1h 34m",
    releaseDate: "2011",
  },
  {
    title: "Inglourious Basterds",
    image: ingloriousBasterdsPoster,
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    category: "Drama",
    duration: "2h 33m",
    releaseDate: "2009",
  },
  {
    title: "Baby Driver",
    image: babyDriverPoster,
    description:
      "After being coerced into working for a crime boss, a talented getaway driver must face the music as a doomed heist threatens his life, love, and freedom.",
    category: "Action",
    duration: "1h 53m",
    releaseDate: "2017",
  },
  {
    title: "The Hunger Games",
    image: hungerGamesPoster,
    description:
      "In a dystopian future, Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games, a televised competition in which teenagers fight to the death.",
    category: "Adventure Sci-Fi",
    duration: "2h 22m",
    releaseDate: "2012",
  },
  {
    title: "Hunger Games Catching Fire",
    image: catchingFirePoster,
    description:
      "Katniss and Peeta become targets of the Capitol after their victory in the 74th Hunger Games sparks rebellion in the Districts of Panem.",
    category: "Adventure Sci-Fi",
    duration: "2h 26m",
    releaseDate: "2013",
  },
  {
    title: "Mockingjay - Part 1",
    image: mockingjayPart1Poster,
    description:
      "Katniss becomes the symbol of rebellion against the oppressive Capitol, but the stakes are higher than ever as she fights to liberate Panem.",
    category: "Adventure/Sci-Fi",
    duration: "2h 3m",
    releaseDate: "2014",
  },
  {
    title: "Mockingjay - Part 2",
    image: mockingjayPart2Poster,
    description:
      "As the war of Panem escalates to the destruction of other districts by the Capitol, Katniss Everdeen, the reluctant leader of the rebellion, must bring together an army against President Snow.",
    category: "Adventure/Sci-Fi",
    duration: "2h 17m",
    releaseDate: "2015",
  },
  {
    title: "The Meg",
    image: theMegPoster,
    description:
      "A deep-sea submersible—part of an international undersea observation program—has been attacked by a massive creature, previously thought to be extinct, and now lies disabled at the bottom of the deepest part of the Pacific Ocean.",
    category: "Action/Horror",
    duration: "1h 53m",
    releaseDate: "2018",
  },
  {
    title: "Inception",
    image: inceptionPoster,
    description:
      "The movie is about a futuristic world where the human mind can be intercepted through dream invasion.",
    category: "Action",
    duration: "2h 28m",
    releaseDate: "2010",
  },
  {
    title: "Shawshank Redemption",
    image: shawshankPoster,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    category: "Drama",
    duration: "2h 22m",
    releaseDate: "1994",
  },
  {
    title: "The Dark Knight",
    image: batmanPoster,
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    category: "Action",
    duration: "2h 32m",
    releaseDate: "2008",
  },
  {
    title: "Fight Club",
    image: fightClubPoster,
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    category: "Drama",
    duration: "2h 19m",
    releaseDate: "1999",
  },

  {
    title: "Interstellar",
    image: interstellarPoster,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    category: "Sci-Fi",
    duration: "2h 49m",
    releaseDate: "2014",
  },
  {
    title: "The Silence of the Lambs",
    image: silencePoster,
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    category: "Horror",
    duration: "1h 58m",
    releaseDate: "1991",
  },
  {
    title: "Pulp Fiction",
    image: pulbPoster,
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    category: "Drama",
    duration: "2h 34m",
    releaseDate: "1994",
  },
  {
    title: "The Godfather",
    image: godfatherPoster,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    category: "Drama",
    duration: "2h 55m",
    releaseDate: "1972",
  },
  {
    title: "The Godfather: Part II",
    image: godfatherTwoPoster,
    description:
      "The early life and career of Vito Corleone in 1920s New York is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    category: "Drama",
    duration: "3h 22m",
    releaseDate: "1974",
  },
  {
    title: "Se7en",
    image: sevenPoster,
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    category: "Drama",
    duration: "2h 7m",
    releaseDate: "1995",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    image: lordOnePoster,
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    category: "Action",
    duration: "3h 21m",
    releaseDate: "2003",
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    image: lordTwoPoster,
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    category: "Action",
    duration: "2h 59m",
    releaseDate: "2002",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    image: lordThreePoster,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    category: "Action",
    duration: "2h 58m",
    releaseDate: "2001",
  },
  {
    title: "The Prestige",
    image: prestigePoster,
    description:
      "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    category: "Drama",
    duration: "2h 10m",
    releaseDate: "2006",
  },
  {
    title: "Gladiator",
    image: gladiatorPoster,
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    category: "Action",
    duration: "2h 35m",
    releaseDate: "2000",
  },
  {
    title: "Titanic",
    image: titanicPoster,
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    category: "Romance",
    duration: "3h 14m",
    releaseDate: "1997",
  },
  {
    title: "Alien",
    image: alienPoster,
    description:
      "After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform.",
    category: "Horror",
    duration: "1h 57m",
    releaseDate: "1979",
  },
  {
    title: "Blade Runner 2049",
    image: bladeRunPoster,
    description:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    category: "Sci-Fi",
    duration: "2h 44m",
    releaseDate: "2017",
  },
  {
    title: "Mad Max: Fury Road",
    image: madMaxPoster,
    description:
      "In a post-apocalyptic wasteland, Max teams up with a mysterious woman, Furiosa, to try and survive.",
    category: "Action",
    duration: "2h",
    releaseDate: "2015",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    image: harryOne,
    description:
      "The first year at Hogwarts School of Witchcraft and Wizardry for Harry Potter, where he discovers his magical heritage.",
    category: "Adventure",
    duration: "2h 32m",
    releaseDate: "2001",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    image: harryTwo,
    description:
      "Harry returns for his second year at Hogwarts, where the Chamber of Secrets has been opened.",
    category: "Adventure",
    duration: "2h 41m",
    releaseDate: "2002",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    image: harryThree,
    description:
      "Harry Potter's third year at Hogwarts is threatened by the escape of Sirius Black from Azkaban.",
    category: "Adventure",
    duration: "2h 22m",
    releaseDate: "2004",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    image: harryFour,
    description:
      "During his fourth year at Hogwarts, Harry competes in the Triwizard Tournament.",
    category: "Adventure",
    duration: "2h 37m",
    releaseDate: "2005",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    image: harryFive,
    description:
      "Harry's fifth year at Hogwarts as he forms Dumbledore's Army to counter the rise of Lord Voldemort.",
    category: "Adventure",
    duration: "2h 18m",
    releaseDate: "2007",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    image: harrySix,
    description:
      "Harry discovers a mysterious book that reveals the dark past of Lord Voldemort.",
    category: "Adventure",
    duration: "2h 33m",
    releaseDate: "2009",
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 1",
    image: harrySeven,
    description:
      "The first part of the final book where Harry, Ron, and Hermione search for Voldemort's Horcruxes.",
    category: "Adventure",
    duration: "2h 26m",
    releaseDate: "2010",
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 2",
    image: harryEight,
    description:
      "The epic conclusion to the Harry Potter series where Harry faces Lord Voldemort in the final battle.",
    category: "Adventure",
    duration: "2h 10m",
    releaseDate: "2011",
  },
  {
    title: "Terminator 2: Judgment Day",
    image: terminatorPoster,
    description:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
    category: "Action",
    duration: "2h 17m",
    releaseDate: "1991",
  },
  {
    title: "Aliens",
    image: aliensPoster,
    description:
      "Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost.",
    category: "Horror",
    duration: "2h 17m",
    releaseDate: "1986",
  },
  {
    title: "Joker",
    image: jokerPoster,
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    category: "Drama",
    duration: "2h 2m",
    releaseDate: "2019",
  },
  {
    title: "Parasite",
    image: parasitePoster,
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    category: "Drama",
    duration: "2h 12m",
    releaseDate: "2019",
  },
  {
    title: "A Clockwork Orange",
    image: clockPoster,
    description:
      "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
    category: "Sci-Fi",
    duration: "2h 16m",
    releaseDate: "1971",
  },
  {
    title: "A Beautiful Mind",
    image: beautifulMindPoster,
    description:
      "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    category: "Drama",
    duration: "2h 15m",
    releaseDate: "2001",
  },
  {
    title: "The Sixth Sense",
    image: sixPoster,
    description:
      "A boy who communicates with spirits that don't know they're dead seeks the help of a disheartened child psychologist.",
    category: "Horror",
    duration: "1h 47m",
    releaseDate: "1999",
  },
  {
    title: "The Departed",
    image: departedPoster,
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    category: "Drama",
    duration: "2h 31m",
    releaseDate: "2006",
  },
  {
    title: "Her",
    image: interstellarPoster,
    description:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    category: "Romance",
    duration: "2h 6m",
    releaseDate: "2013",
  },
  {
    title: "The Notebook",
    image: notebookPoster,
    description:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    category: "Romance",
    duration: "2h 3m",
    releaseDate: "2004",
  },
  {
    title: "Psycho",
    image: psychoPoster,
    description:
      "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    category: "Horror",
    duration: "1h 49m",
    releaseDate: "1960",
  },
  {
    title: "Shutter Island",
    image: shutterIslandPoster,
    description:
      "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    category: "Drama",
    duration: "2h 18m",
    releaseDate: "2010",
  },
  {
    title: "The Conjuring",
    image: conjPoster,
    description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    category: "Horror",
    duration: "1h 52m",
    releaseDate: "2013",
  },
  {
    title: "The Exorcist",
    image: exorPoster,
    description:
      "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
    category: "Horror",
    duration: "2h 2m",
    releaseDate: "1973",
  },
  {
    title: "The Shining",
    image: shinPoster,
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    category: "Horror",
    duration: "2h 26m",
    releaseDate: "1980",
  },
  {
    title: "Donnie Darko",
    image: donniePoster,
    description:
      "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
    category: "Sci-Fi",
    duration: "1h 53m",
    releaseDate: "2001",
  },
  {
    title: "Gone Girl",
    image: goneGirlPoster,
    description:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    category: "Drama",
    duration: "2h 29m",
    releaseDate: "2014",
  },
  {
    title: "The Truman Show",
    image: trumanPoster,
    description:
      "An insurance salesman discovers his whole life is actually a reality TV show.",
    category: "Drama",
    duration: "1h 43m",
    releaseDate: "1998",
  },
  {
    title: "La La Land",
    image: lalalandPoster,
    description:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    category: "Romance",
    duration: "2h 8m",
    releaseDate: "2016",
  },
  {
    title: "Jungle Cruise",
    image: jungleCruise,
    description:
      "Based on Disneyland's theme park ride, where a small riverboat takes a group of travelers through a jungle filled with dangerous animals.",
    category: "Adventure",
    duration: "2h 7m",
    releaseDate: "2021",
  },
  {
    title: "Horror Night",
    image: horrorNight,
    description:
      "A night of terror unfolds as a group of friends find themselves trapped in a haunted house with no way out.",
    category: "Horror",
    duration: "1h 42m",
    releaseDate: "2020",
  },
  {
    title: "The Mummy",
    image: mummy,
    description:
      "An adventurer and a librarian accidentally awaken a cursed mummy while searching for a hidden treasure in Egypt.",
    category: "Adventure",
    duration: "2h 4m",
    releaseDate: "1999",
  },
  {
    title: "Blade Runner",
    image: bladeRunnerOldPoster,
    description:
      "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    category: "Sci-Fi",
    duration: "1h 57m",
    releaseDate: "1982",
  },
  {
    title: "Arrival",
    image: arrivalPoster,
    description:
      "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    category: "Sci-Fi",
    duration: "1h 56m",
    releaseDate: "2016",
  },
  {
    title: "Eternal Sunshine of ..",
    image: eternalPoster,
    description:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    category: "Romance",
    duration: "1h 48m",
    releaseDate: "2004",
  },
  {
    title: "2001: A Space Odyssey",
    image: spacePoster,
    description:
      "After discovering a mysterious artifact buried beneath the lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer HAL 9000.",
    category: "Sci-Fi",
    duration: "2h 29m",
    releaseDate: "1968",
  },
  {
    title: "Gravity",
    image: gravityPoster,
    description:
      "Two astronauts work together to survive after an accident leaves them stranded in space.",
    category: "Sci-Fi",
    duration: "1h 31m",
    releaseDate: "2013",
  },
  {
    title: "E.T. the Extra-Terrestrial",
    image: extraPoster,
    description:
      "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    category: "Sci-Fi",
    duration: "1h 55m",
    releaseDate: "1982",
  },
  {
    title: "The Lion King",
    image: lionKing,
    description:
      "A young lion prince flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and bravery.",
    category: "Adventure",
    duration: "1h 58m",
    releaseDate: "2019",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    image: starWarsXi,
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station.",
    category: "Adventure",
    duration: "2h 1m",
    releaseDate: "1977",
  },
];
export default movies;
//
// action movies
//
export const topActionMovies = [
  {
    title: "The Dark Knight",
    image: "path/to/darkKnight.jpg",
    description:
      "Batman faces his greatest psychological and physical tests as he battles the Joker.",
    category: "Action",
    duration: "2h 32m",
    releaseDate: "2008",
  },
  {
    title: "Inception",
    image: "path/to/inception.jpg",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given a task of inception.",
    category: "Action",
    duration: "2h 28m",
    releaseDate: "2010",
  },
  {
    title: "The Matrix",
    image: "path/to/matrix.jpg",
    description:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    category: "Action",
    duration: "2h 16m",
    releaseDate: "1999",
  },
  {
    title: "Gladiator",
    image: "path/to/gladiator.jpg",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
    category: "Action",
    duration: "2h 35m",
    releaseDate: "2000",
  },
  {
    title: "Mad Max: Fury Road",
    image: "path/to/madMaxFuryRoad.jpg",
    description:
      "In a post-apocalyptic wasteland, Max helps a rebellious woman escape a tyrant.",
    category: "Action",
    duration: "2h",
    releaseDate: "2015",
  },
  {
    title: "Die Hard",
    image: "path/to/dieHard.jpg",
    description:
      "An NYPD officer tries to save his wife and others taken hostage by terrorists during a Christmas party.",
    category: "Action",
    duration: "2h 12m",
    releaseDate: "1988",
  },
  {
    title: "The Avengers",
    image: "path/to/avengers.jpg",
    description:
      "Earth's mightiest heroes must come together to stop Loki and his alien army from enslaving humanity.",
    category: "Action",
    duration: "2h 23m",
    releaseDate: "2012",
  },
  {
    title: "Terminator 2: Judgment Day",
    image: "path/to/terminator2.jpg",
    description:
      "A cyborg, identical to the one who failed to kill Sarah Connor, is sent back in time to protect her son.",
    category: "Action",
    duration: "2h 17m",
    releaseDate: "1991",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    image: "path/to/returnOfTheKing.jpg",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam.",
    category: "Action",
    duration: "3h 21m",
    releaseDate: "2003",
  },
  {
    title: "The Dark Knight Rises",
    image: "path/to/darkKnightRises.jpg",
    description:
      "Eight years after the Joker's reign of anarchy, Batman is forced out of hiding by the arrival of Bane.",
    category: "Action",
    duration: "2h 44m",
    releaseDate: "2012",
  },
];
//
// avdventure movies
//
export const topAdventureMovies = [
  {
    title: "The Lord of the Rings: The Return of the King",
    image: "path/to/returnOfTheKing.jpg",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam.",
    category: "Adventure",
    duration: "3h 21m",
    releaseDate: "2003",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    image: "path/to/fellowshipOfTheRing.jpg",
    description:
      "A meek Hobbit and eight companions set out on a journey to destroy a powerful ring and save Middle-earth.",
    category: "Adventure",
    duration: "2h 58m",
    releaseDate: "2001",
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    image: "path/to/twoTowers.jpg",
    description:
      "While Frodo and Sam edge closer to Mordor with the help of Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    category: "Adventure",
    duration: "2h 59m",
    releaseDate: "2002",
  },
  {
    title: "Indiana Jones and the Raiders of the Lost Ark",
    image: "path/to/raidersOfTheLostArk.jpg",
    description:
      "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.",
    category: "Adventure",
    duration: "1h 55m",
    releaseDate: "1981",
  },
  {
    title: "The Lion King",
    image: "path/to/lionKing.jpg",
    description:
      "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.",
    category: "Adventure",
    duration: "1h 28m",
    releaseDate: "1994",
  },
  {
    title: "Avatar",
    image: "path/to/avatar.jpg",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    category: "Adventure",
    duration: "2h 42m",
    releaseDate: "2009",
  },
  {
    title: "Jurassic Park",
    image: "path/to/jurassicPark.jpg",
    description:
      "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    category: "Adventure",
    duration: "2h 7m",
    releaseDate: "1993",
  },
  {
    title: "The Goonies",
    image: "path/to/goonies.jpg",
    description:
      "A group of young misfits discover an ancient map and set out on a quest to find a legendary pirate's long-lost treasure.",
    category: "Adventure",
    duration: "1h 54m",
    releaseDate: "1985",
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    image: "path/to/piratesOfTheCaribbean.jpg",
    description:
      "Blacksmith Will Turner teams up with eccentric pirate 'Captain' Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    category: "Adventure",
    duration: "2h 23m",
    releaseDate: "2003",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    image: "path/to/starWarsANewHope.jpg",
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    category: "Adventure",
    duration: "2h 1m",
    releaseDate: "1977",
  },
];
//
// drama movies
//
export const topDramaMovies = [
  {
    title: "The Shawshank Redemption",
    image: "path/to/shawshankRedemption.jpg",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    category: "Drama",
    duration: "2h 22m",
    releaseDate: "1994",
  },
  {
    title: "The Godfather",
    image: "path/to/godfather.jpg",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    category: "Drama",
    duration: "2h 55m",
    releaseDate: "1972",
  },
  {
    title: "12 Angry Men",
    image: "path/to/12AngryMen.jpg",
    description:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    category: "Drama",
    duration: "1h 36m",
    releaseDate: "1957",
  },
  {
    title: "Schindler's List",
    image: "path/to/schindlersList.jpg",
    description:
      "In German-occupied Poland during World War II, Oskar Schindler becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    category: "Drama",
    duration: "3h 15m",
    releaseDate: "1993",
  },
  {
    title: "Forrest Gump",
    image: "path/to/forrestGump.jpg",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    category: "Drama",
    duration: "2h 22m",
    releaseDate: "1994",
  },
  {
    title: "Fight Club",
    image: "path/to/fightClub.jpg",
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.",
    category: "Drama",
    duration: "2h 19m",
    releaseDate: "1999",
  },
  {
    title: "The Godfather: Part II",
    image: "path/to/godfatherPart2.jpg",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    category: "Drama",
    duration: "3h 22m",
    releaseDate: "1974",
  },
  {
    title: "The Green Mile",
    image: "path/to/greenMile.jpg",
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    category: "Drama",
    duration: "3h 9m",
    releaseDate: "1999",
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    image: "path/to/oneFlewOver.jpg",
    description:
      "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
    category: "Drama",
    duration: "2h 13m",
    releaseDate: "1975",
  },
  {
    title: "Goodfellas",
    image: "path/to/goodfellas.jpg",
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife and his partners in crime.",
    category: "Drama",
    duration: "2h 26m",
    releaseDate: "1990",
  },
];
//
// horror movies
//
export const topHorrorMovies = [
  {
    title: "The Shining",
    image: "path/to/theShining.jpg",
    description:
      "A family heads to an isolated hotel where an evil presence drives the father into violence.",
    category: "Horror",
    duration: "2h 26m",
    releaseDate: "1980",
  },
  {
    title: "Psycho",
    image: "path/to/psycho.jpg",
    description:
      "A secretary embezzles money and checks into a remote motel run by a young man under the domination of his mother.",
    category: "Horror",
    duration: "1h 49m",
    releaseDate: "1960",
  },
  {
    title: "The Exorcist",
    image: "path/to/theExorcist.jpg",
    description:
      "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests.",
    category: "Horror",
    duration: "2h 12m",
    releaseDate: "1973",
  },
  {
    title: "Get Out",
    image: "path/to/getOut.jpg",
    description:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness leads to a shocking truth.",
    category: "Horror",
    duration: "1h 44m",
    releaseDate: "2017",
  },
  {
    title: "Hereditary",
    image: "path/to/hereditary.jpg",
    description:
      "A grieving family is haunted by tragic and disturbing occurrences.",
    category: "Horror",
    duration: "2h 7m",
    releaseDate: "2018",
  },
  {
    title: "A Nightmare on Elm Street",
    image: "path/to/nightmareOnElmStreet.jpg",
    description:
      "Teenagers are stalked and killed by the mysterious Freddy Krueger in their dreams.",
    category: "Horror",
    duration: "1h 31m",
    releaseDate: "1984",
  },
  {
    title: "Halloween",
    image: "path/to/halloween.jpg",
    description:
      "Fifteen years after murdering his sister, Michael Myers escapes and returns to his hometown.",
    category: "Horror",
    duration: "1h 31m",
    releaseDate: "1978",
  },
  {
    title: "The Conjuring",
    image: "path/to/theConjuring.jpg",
    description:
      "Paranormal investigators help a family terrorized by a dark presence in their farmhouse.",
    category: "Horror",
    duration: "1h 52m",
    releaseDate: "2013",
  },
  {
    title: "The Texas Chain Saw Massacre",
    image: "path/to/texasChainsaw.jpg",
    description:
      "Five friends face a nightmare as they are hunted by a chainsaw-wielding maniac and his family.",
    category: "Horror",
    duration: "1h 23m",
    releaseDate: "1974",
  },
  {
    title: "It",
    image: "path/to/it.jpg",
    description:
      "A group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the town's children.",
    category: "Horror",
    duration: "2h 15m",
    releaseDate: "2017",
  },
];
//
// action movies
//
export const topSciFiMovies = [
  {
    title: "Blade Runner 2049",
    image: "path/to/bladeRunner2049.jpg",
    description:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    category: "Sci-Fi",
    duration: "2h 44m",
    releaseDate: "2017",
  },
  {
    title: "Interstellar",
    image: "path/to/interstellar.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    category: "Sci-Fi",
    duration: "2h 49m",
    releaseDate: "2014",
  },
  {
    title: "Inception",
    image: "path/to/inception.jpg",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    category: "Sci-Fi",
    duration: "2h 28m",
    releaseDate: "2010",
  },
  {
    title: "The Matrix",
    image: "path/to/theMatrix.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    category: "Sci-Fi",
    duration: "2h 16m",
    releaseDate: "1999",
  },
  {
    title: "The Martian",
    image: "path/to/theMartian.jpg",
    description:
      "An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    category: "Sci-Fi",
    duration: "2h 24m",
    releaseDate: "2015",
  },
  {
    title: "2001: A Space Odyssey",
    image: "path/to/2001SpaceOdyssey.jpg",
    description:
      "After discovering a mysterious artifact buried beneath the lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer HAL 9000.",
    category: "Sci-Fi",
    duration: "2h 29m",
    releaseDate: "1968",
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    image: "path/to/empireStrikesBack.jpg",
    description:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
    category: "Sci-Fi",
    duration: "2h 4m",
    releaseDate: "1980",
  },
  {
    title: "Jurassic Park",
    image: "path/to/jurassicPark.jpg",
    description:
      "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    category: "Sci-Fi",
    duration: "2h 7m",
    releaseDate: "1993",
  },
  {
    title: "The Terminator",
    image: "path/to/terminator.jpg",
    description:
      "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
    category: "Sci-Fi",
    duration: "1h 47m",
    releaseDate: "1984",
  },
  {
    title: "Avatar",
    image: "path/to/avatar.jpg",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    category: "Sci-Fi",
    duration: "2h 42m",
    releaseDate: "2009",
  },
];
