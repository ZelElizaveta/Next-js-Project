import { GetStaticProps } from "next";
import React from "react";
import { useState } from "react";
import {  Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";


function Home({ menu }: HomeProps): JSX.Element {
  const [raiting, setRating] = useState<number>(1);
  return (
    <>
      <Rating rating={raiting} isEditable={true} setRating={setRating}/>
      {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
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
