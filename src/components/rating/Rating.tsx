import './Rating.scss';
import starFull from './../../img/rating/star.svg';
import starEmpty from './../../img/rating/star-empty.svg';
import starHalf from './../../img/rating/star-half.svg';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { starArray } from '../../tools/starArray';

interface Props {
    reviewCount: number;
    starCount: number[];
    className?: string;
}

const words: string[] = ['Отзыв', 'Отзыва', 'Отзывов'];

export function Rating({ reviewCount, starCount, className }: Props) {
    const [word, setWord] = useState('');
    const [rating, setRating] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    // Окончание слова 'Отзыв' и расчет рейтинга
    useEffect(() => {
        let locRating: string = ((starCount[0] * 5 + starCount[1] * 4 + starCount[2] * 3 + starCount[3] * 2 + starCount[4]) / reviewCount).toFixed(1);
        setRating(parseFloat(locRating));
        setWord(words[2]);
        if (reviewCount == 1 || (reviewCount > 20 && reviewCount % 10 == 1))
            setWord(words[0]);
        else if ((reviewCount > 1 && reviewCount < 5) || (reviewCount > 20 && reviewCount % 10 > 1 && reviewCount % 10 < 5))
            setWord(words[1]);
    }, []);

    const toggleReview = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className={`rating ${className ? className : ''}`}>
            <div className='rating-avg'>
                {starArray.map((i: any) => <div className='rating-avg__item' key={i}>
                    <img src={rating >= i
                        ? starFull
                        : rating * 10 % 10 >= 5 && rating > i - 1 ? starHalf : starEmpty} alt="" />
                </div>)}
                <div onMouseEnter={toggleReview} onMouseLeave={toggleReview} className={`rating-avg__count ${isOpen ? 'rating-avg__count_open' : ''}`}>
                    <p>
                        {`${reviewCount} ${word}`}
                        <span></span>
                    </p>

                </div>
            </div>
            <div className={`rating-desc ${isOpen ? 'rating-desc_open' : ''}`}>
                <p className='rating-desc__title'>
                    <img src={starFull} alt="" />
                    {rating}
                </p>
                <div className="rating-desc__item">
                    <div className="rating-desc__stars">
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                    </div>
                    <div className="rating-desc__progress">
                        <div style={{ width: 100 * starCount[0] / reviewCount + '%' }} className="rating-desc__progress-bar"></div>
                    </div>
                    <p className="rating-desc__count">{starCount[0]}</p>
                </div>
                <div className="rating-desc__item">
                    <div className="rating-desc__stars">
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                        <img src={starEmpty} alt="" />
                    </div>
                    <div className="rating-desc__progress">
                        <div style={{ width: 100 * starCount[1] / reviewCount + '%' }} className="rating-desc__progress-bar"></div>
                    </div>
                    <p className="rating-desc__count">{starCount[1]}</p>
                </div>
                <div className="rating-desc__item">
                    <div className="rating-desc__stars">
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                        <img src={starEmpty} alt="" />
                        <img src={starEmpty} alt="" />
                    </div>
                    <div className="rating-desc__progress">
                        <div style={{ width: 100 * starCount[2] / reviewCount + '%' }} className="rating-desc__progress-bar"></div>
                    </div>
                    <p className="rating-desc__count">{starCount[2]}</p>
                </div>
                <div className="rating-desc__item">
                    <div className="rating-desc__stars">
                        <img src={starFull} alt="" />
                        <img src={starFull} alt="" />
                        <img src={starEmpty} alt="" />
                        <img src={starEmpty} alt="" />
                        <img src={starEmpty} alt="" />
                    </div>
                    <div className="rating-desc__progress">
                        <div style={{ width: 100 * starCount[3] / reviewCount + '%' }} className="rating-desc__progress-bar"></div>
                    </div>
                    <p className="rating-desc__count">{starCount[3]}</p>
                </div>
                <div className="rating-desc__item">
                    <div className="rating-desc__stars">
                        <img src={starFull} alt="" />
                        <img src={starEmpty} alt="" />
                        <img src={starEmpty} alt="" />
                        <img src={starEmpty} alt="" />
                        <img src={starEmpty} alt="" />
                    </div>
                    <div className="rating-desc__progress">
                        <div style={{ width: 100 * starCount[4] / reviewCount + '%' }} className="rating-desc__progress-bar"></div>
                    </div>
                    <p className="rating-desc__count">{starCount[4]}</p>
                </div>
            </div>
        </div>
    );
}
