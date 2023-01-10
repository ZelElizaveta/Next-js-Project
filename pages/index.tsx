import React from "react";
import { Button, Htag } from "../components";


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Текст</Htag>
      <Button appearence="primary">Кнопка</Button>
      <Button appearence="ghost" arrow="right">Кнопка</Button>
    </>
  );
}
