import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";
import { GetStaticPaths } from "next";
import { FirstLevelMenu } from "../../helpers/helpers";
import { ParsedUrlQuery } from 'node:querystring';


function Type ({ firstCategoryItem }: TypeProps): JSX.Element {
	return (
		<>
			Type : {firstCategoryItem}
		</>
	);
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: FirstLevelMenu.map(m => '/' + m.route),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
    const firstCategoryItem = FirstLevelMenu.find(m => m.route == params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategoryItem.id
    });

	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id
		}
	};
};

interface TypeProps extends Record<string, unknown>{
	menu: MenuItem[];
	firstCategory: number;
}