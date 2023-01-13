import { useState } from "react";
import { Button, Htag, P, Tag, Rating } from "../components";


export default function Home(): JSX.Element {
  const [raiting, setRating] = useState<number>(1);
  return (
    <>
      <Rating rating={raiting} isEditable={true} setRating={setRating}/>
    </>
  );
}
