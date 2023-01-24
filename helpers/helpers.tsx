import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/servises.svg';
import BooksIcon from './icons/books.svg';
import GoodsIcon from './icons/goods.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const FirstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id:TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id:TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id:TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <GoodsIcon/>, id:TopLevelCategory.Products},
];
