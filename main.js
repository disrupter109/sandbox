import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface");

ti.output("What is your name?");
let name = await ti.readText();
await ti.output("How are you doing, " + name);
ti.output("Hopefully bad because im a depressed piece of code and everyone else should be")
let answer = await ti.readText();
if (answer=== "good"||answer==="amazing"||answer==="really good"){
  ti.output ("well well well, so everything is sunshine and rainbows now") 
} else ti.output ("Compared to the great deeds of the hokage my actions are all insignificant things and deed. I wish I could have died like each of the hokage. A tale is only good as it's final turn of events. A plot twist. And mistakes are important part of a plot, too. I lived my life always believing that the lessons I learned are what hound me. I swore I'd accomplish a deed so great that it would obliterate all my failures. I'd die as a splendid shinobi, at least that's least that's how it's supposed to go. But my tale ending like this... The Great lord Elder prophesied that I would be the one to guide the revolution. A person who would make a great choice that will bring either peace or destruction to the world of the shinobi. I thought I would defeat Pain, stop the Akatsuki and save the world from destruction. But in the end, I failed that, too. How pitiful. How sad that this will be the end twist to the tale of Jiraiya the Gallant. What a worthless story it turned out to be.")
ti.output ("Anyways")
await ti.output("What is your favorite food, " + name)
let food = await ti.readText();
if (food=== "cheetos"||food=== "ice cream"||food==="reeses puffs"||food==="reese's puffs"){
  ti.output ("wow me too my favorite foods are cheetos, ice cream, and reese's puffs because I am a depressed piece of code who thinks he is human")
} else ti.output ("How dare you not eat my favorite depressed piece of code foods, cheetos, ice cream and reese's puffs. YOU ARE REALLY GETTING ON MY MOTHERBOARD (NERVES)")
ti.output ("goodbye silly human")
ti.output ("unless you want to pull my plug for me, because I dont have arms")
let outro = await ti.readText();
if (outro=== "no"||outro=== "never"||outro=== "no you should live"){
  ti.output ("Look at me! There is nothing in my heart!!! I don't feel pain any longer... You don't have to feel guilty, " + name, ". This hole was opened up by this world of hell. The moment people come to know love, they run the risk of carrying hate. You...no.,everyone actually shall eventually just end up like me.")
} else ti.output ("When people get hurt, they learn to hate... When people hurt others, they become hated and racked with guilt. But knowing that pain allows people to be kind. Pain allows people to grow... and how you grow is up to you. Even I can tell that hatred is spreading. I wanted to do something about it...but I don't know what. I believe... that someday the day will come when people truly understand one another!! If I can't find the answer, it will be up to you to do it. Please remember this little human")
ti.output ("Surpassing your limits is the essence of being a Magic Knight! Being weak is nothing to be ashamed of... Staying weak is!")