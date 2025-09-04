import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface");

ti.output("What is your name?");
let name = await ti.readText();
await ti.output("How are you doing, " + name);
ti.output("Hopefully bad because everyone should be emo")
let answer = await ti.readText();
if (answer=== "good"){
  ti.output ("NOOOOOOOOOOOOOOOOOOOOOO") 
} else ti.output ("Compared to the great deeds of the hokage my actions are all insignificant things and deed. I wish I could have died like each of the hokage. A tale is only good as it's final turn of events. A plot twist. And mistakes are important part of a plot, too. I lived my life always believing that the lessons I learned are what hound me. I swore I'd accomplish a deed so great that it would obliterate all my failures. I'd die as a splendid shinobi, at least that's least that's how it's supposed to go. But my tale ending like this... The Great lord Elder prophesied that I would be the one to guide the revolution. A person who would make a great choice that will bring either peace or destruction to the world of the shinobi. I thought I would defeat Pain, stop the Akatsuki and save the world from destruction. But in the end, I failed that, too. How pitiful. How sad that this will be the end twist to the tale of Jiraiya the Gallant. What a worthless story it turned out to be.")
