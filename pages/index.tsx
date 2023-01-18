import React from "react";
import { useState } from "react";
import {  Rating } from "../components";
import { withLayout } from "../layout/Layout";


function Home(): JSX.Element {
  const [raiting, setRating] = useState<number>(1);
  return (
    <>
      <Rating rating={raiting} isEditable={true} setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);
