import React from "react"
import Header from '../components/Header';
import FAQItem from "../components/FAQItem";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Footer from "../components/Footer";

function StringingPage() {

  const faqData = [
    {
      question: "What tension and/or string is best for me?",
      answer:
        "his is a loaded question and it will really pertain to several different factors. How often do you play? How often do you break strings? What racquet do you use? What is your swing style? Do you hit with a lot of spin? Manufacturers will often give you suggestions on what tension and strings you should use, but it’s just a starting point. Strings are really meant to enhance your playing abilities. So you want to find a string that works well with your game and can be adjusted to different tensions. Higher string tensions will often result in more control, while lower string tensions will often result in more power. Just remember that the tension and string you use will always affect the way you play. You want to make sure you’re getting the proper effects out of that string, so you can remain confident. The current trend with stiffer strings (polyester, kevlar,etc.) is to string them lower (45-50 pounds), while natural gut or multifilament strings can be strung tighter (55-65 pounds) and maintain solid comfort.",
    },
    {
      question: "Why am I having arm or tennis elbow problems?",
      answer:
        "This is probably due to a combination of stiff strings with a high string tension, and overuse of the elbow area when you play. This is very common among players today because of monofilament co-polyester tennis strings. Monofilament strings are seen on tour as being the best string for control and durability; however, what many players don’t realize is they are very firm and require fast racquet head speed consistently. The first questions to ask yourself if you’re getting tennis elbow problems are: how often am I playing and what type of string/tension did I last string my racquets at? If you’re playing 6 days a week and using RPM Blast 15L strung at 60 lbs, you’re probably not doing yourself any good. The first steps to take are: rest your body, lower your string tension 4-5 pounds, and try a softer string construction. Yes, I know most people want to play like their favorite pros, but it doesn’t do you any good if you’re watching from the sidelines and needing cortisone shots every week.",
    },
    // Add more FAQ items as needed
    {
      question: "Do I need to use the same branded string as my racquet?",
      answer:
        "NO! Using the same branded string as your racquet is not a written law and is definitely not enforced. Many players use the recommended string(s) from the manufacturer, but it’s not the only answer to find the best string for your game. The only way you will know is if you test many different strings across multiple brands.",
    },
    {
      question: "When should I restring my tennis racquet?",
      answer:
        "This will vary from player to player as it depends on the type of abuse you put on your tennis racquet. The general rule of thumb is as follows: How ever often you’re playing a week, is usually how often you should get your racquet restrung during the year. For example if you play 4 times a week, you’re looking to get your racquet restrung at least 3-4 times a year. If you love polyester strings, you should know they lose tension faster and should be restrung more frequently. If you’re going to play tournaments, we suggest restringing before every tournament so you can play you’re best tennis. For league, high school or college teams, we suggest restringing in the beginning of season, and every week after that until season ends to maintain a consistent stringbed.",
    },
    {
      question: "What string is most durable?",
      answer:
        "The most durable string on the market is monofilament or polyester; however, this comes at a cost. Usually when you string your racquet with polyester it’s going to be very firm and lose tension faster than any other type of string. The best solution for increased durability is to use a solid core synthetic gut. This offers a middle ground between natural gut softness and polyester firmness, but with better toughness and tension maintenance.",
    },
    {
      question: "I need more control or power, what tension/string should I use?",
      answer:
        "Try a thicker gauge size. Just going up in thickness for a string could make the difference for your racquet and help add more control. No need to over think about switching to a different string, and you’ll get something you enjoy hitting with.Try a higher tension. Like I said before, higher tension usually results in more control. Just bumping up your tension 4-5 pounds can make the difference between a ball going long and landing 5 feet shorter.Try a different string type. Most players believe that switching directly to polyester string is the answer for more control and/or power. This is not true. If you’re using a natural gut or multifilament string, you’re next best solution is actually synthetic gut. And if you’re a current polyester user, you may want to try experimenting with a non-polyester monofilament string. These options give you more control, but without the harshness of a polyester string.",
    },
    {
      question: "What are the differences between the gauges?",
      answer:
        "A gauge is referring to the thickness of the string. Most strings will range from 15g – 20g or 1.05 mm – 1.35 mm. The higher the gauge number on the package, the thinner the string will usually be and vice versa. In example, a 17g would be 1.25 mm and a 16g would be 1.30 mm. Thinner strings tend to provide more power, feel and spin potential, but the thicker string will provide more control and durability. Not every manufacturer has the same thicknesses of string, so always be sure to read the package before purchasing.",
    },
    {
      question: "Why do multifilament strings fray?",
      answer:
        "Multifilaments are a type of string that’s comprised of numerous individual string filaments being wrapped or braided together into a single strand. As you play, your strings will start to rub against each other and the top layers start to break. The bottom layers will remain intact until you wear them down. The more friction you cause from the strings moving across each other, the quicker the strings will break.",
    },
  ];
  
  return (
    <div>
      <Header />
      <main class = "main__stringing">
        <section class ="first__section">
          <h1 class = "heading">Put in a stringing request</h1>
          <div class="login-box">
            <form>
            <br></br>
              <div class="user-box">
                <input type="text" name="" required="" />
                <label>Racket Model</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required="" />
                <label>String Main</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required="" />
                <label>String Cross</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required="" /  >
                <label>Tension</label>
              </div>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
          </div>
        </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section class ="faq__section">
          <h1 className="title">FAQ'S</h1>
          <div className="questions-container">
            {/* Use map to render FAQ items */}
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      
      {/* <section>
        <h1 class = "title">FAQ'S</h1>
        <div class = "questions-container">
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fas fa-chevron-down d-arrow"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
        </div>
            </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default StringingPage;