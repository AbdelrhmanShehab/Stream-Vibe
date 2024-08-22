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
const movies = [
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
    title: "he Lord of the Rings: The Fellowship of the Ring",
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
