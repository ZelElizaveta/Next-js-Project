import { SortEnum, SortProps } from "./Sort.props";
import styles from './Sort.module.css';
import cn from 'classnames';
import SortItem from './Sort.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element  => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort == SortEnum.Rating
                })}
            >
                <SortItem className={styles.sortItem}/> По рейтингу 
            </span>
            <span
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}
            >
                <SortItem className={styles.sortItem}/> По цене 
            </span>
        </div>
    );
};