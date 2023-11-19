/* eslint-disable import/newline-after-import */
import React from "react";
import { Grid } from "@mui/material";
import Header from "../components/header";
import HeadingWrapper from "../components/heaingWrapper";
import Topics from "../components/topics";
import DiscussionRange from "../components/discussionRange";
import Footer from "../components/footer";

const topicList = [
    "Fun",
    "Education",
    "Sports",
    "News",
    "Investment",
    "Facts",
  ];

  const topicTitle = {
    Fun: [
      "Board games revival",
      "Comedy trends",
      "Amusement parks",
      "Escape rooms",
      "Street performances",
      "Online challenges",
      "Festivals impact",
      "Crafting movement",
      "Social gaming",
      "Virtual reality",
    ],
    Education: [
      "Gamified learning",
      "Education systems",
      "Bilingual benefits",
      "Standardized testing",
      "Arts in schools",
      "Tech bootcamps",
      "Homeschooling dynamics",
      "Mentorship importance",
      "Educational equity",
      "Mobile learning",
    ],
    Sports: [
      "Sports medicine",
      "Team sociology",
      "Olympic economics",
      "Gender parity",
      "Fandom psychology",
      "Extreme sports",
      "Sports business",
      "Youth athletics",
      "Data analytics",
      "Doping ethics",
    ],
    News: [
      "Citizen journalism",
      "Whistleblower influence",
      "Fake news",
      "Print media survival",
      "Social media news",
      "Cybersecurity news",
      "Democratic media",
      "News deserts",
      "News economics",
      "Broadcast evolution",
    ],
    Investment: [
      "Robo-advising",
      "Geopolitical impacts",
      "Index funds",
      "Real estate trends",
      "Startup investing",
      "Social trading",
      "Tax strategies",
      "Emerging markets",
      "Financial literacy",
      "Pension futures",
    ],
    Facts: [
      "Animal oddities",
      "Everyday science",
      "Historical obscurities",
      "Science myths",
      "Human body facts",
      "Oceanic discoveries",
      "Space exploration",
      "Ancient tech",
      "World laws",
      "Bizarre news",
    ],
    // Add more mappings as needed
  };
// Home component
export default function Home() {
  return (
    <>
      {/* Main grid container */}
      <Grid
        container
        style={{
          backgroundColor: "#12111A",
          paddingLeft: 30,
          paddingRight: 30,
          height:'100vh'
        }}
      >
        {/* Header section */}
        <Grid item xs={12}>
          <Header username = {"Jane Cooper"} avatar={"https://mui.com/static/images/avatar/2.jpg"}/>
        </Grid>

        {/* HeadingWrapper section */}
        <Grid item xs={12}>
          <HeadingWrapper title={"Content type"} subTitle={"Choose a content type that best fits your needs."} />
        </Grid>

        {/* Topics section */}
        <Grid item xs={12} md={7}>
          <Topics topicList={topicList} topicTitle={topicTitle}/>
        </Grid>

        {/* Discussion Range section */}
        <Grid item xs={12} md={6}>
          <DiscussionRange min={100} max={1000}/>
        </Grid>
      </Grid>

      {/* Footer section */}
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
}
