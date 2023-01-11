import React from "react";
import { Button, Htag, P, Tag } from "../components";


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Текст</Htag>
      <Button appearence="primary">Кнопка</Button>
      <Button appearence="ghost" arrow="right">Кнопка</Button>
      <P size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio nulla totam cum libero, odio repudiandae vero quidem eveniet nam architecto aut labore dolorum. Ea soluta architecto dicta expedita pariatur!</P>
      <Tag color="primary">This is tag</Tag>
    </>
  );
}
