import { GetStaticProps } from "next";
import React from "react";
import { useState } from "react";
import {  Input, Rating, Textarea } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";


function Home({ menu }: HomeProps): JSX.Element {
  const [raiting, setRating] = useState<number>(1);
  return (
    <>
      <Rating rating={raiting} isEditable={true} setRating={setRating}/>
      <Input placeholder="text"/>
      <Textarea placeholder="textarea"/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
    });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}
