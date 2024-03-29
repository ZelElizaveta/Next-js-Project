import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from 'classnames';
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from './close.svg';
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";



export const ReviewForm = ({productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const{ register, control, handleSubmit, formState: { errors }, reset} = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false); 
	const [error, setError] = useState<string>(); 

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
			if(data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e) {
			setError(e.message);
		}
	};

    return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)}
				{...props}
			>
				<Input 
					placeholder="Имя" 
					{...register('name', {required: {value: true, message: 'Заполните имя'}})}
					error={errors.name}
				/>
				<Input 
					className={styles.title} 
					placeholder="Заголовок отзыва" 
					{...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
					error={errors.title}
				/>
				<div className={styles.rating}>
					<Controller 
						control={control}
						name='rating'
						rules={{required: {value: true, message: 'Укажите рейтинг'}}}
						render={({ field }) => (
							<Rating 
								isEditable 
								rating={field.value} 
								ref={field.ref} 
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea 
					className={styles.description} 
					placeholder="Текст отзыва" 
					{...register('description', {required: {value: true, message: 'Заполните описание'}})}
					error={errors.description}
				/>
				<div className={styles.submit}>
					<Button appearence={"primary"} >Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			{isSuccess && <div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после проверки.
				</div>
				<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)}/>
			</div>}
			{error && <div className={styles.error}>
				Что-то пошло не так, попробуйте обновить страницу
				<CloseIcon className={styles.close} onClick={() => setError(undefined)}/>
			</div>}
		</form>
    );
};