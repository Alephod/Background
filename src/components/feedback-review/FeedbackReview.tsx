import './FeedbackReview.scss';
import starEmpty from './../../img/rating/star-empty.svg';
import starFull from './../../img/rating/star.svg';
import { starArray } from '../../tools/starArray';
import { useRef, useEffect } from 'react';

interface Props {
    review: IFeedbackReview;
    scrollCount?: number;
    index?: any;
}

export interface IFeedbackReview {
    author: {
        image: string;
        name: string;
        publishDate: Date;
    },
    rating: number;
    text: string;
}

export function FeedbackReview({ review, ...props }: Props) {
    const feedbackReview: any = useRef();
    const classBeyond: any = useRef();

    const giveBeyondClassname = () => {
        let xPos: number = 0;
        if (feedbackReview.current.getBoundingClientRect().x)
            xPos = feedbackReview.current.getBoundingClientRect().x;
        if (xPos > 1600 && xPos < 1800) {
            classBeyond.current = 'feedback-review__out-1600';
        } else if (xPos > 1800) {
            classBeyond.current = 'feedback-review__out-1800';
        } else {
            classBeyond.current = '';
        }
    };

    useEffect(() => {
        giveBeyondClassname();
        if (props.scrollCount && props.scrollCount > 650)
            classBeyond.current = '';
    }, [props.scrollCount]);

    return (
        <div ref={feedbackReview} className={`feedback-review ${classBeyond.current != undefined ? classBeyond.current : ''} ${classBeyond.current == undefined && props.index == 5 ? 'feedback-review__out-1600' : ''}${(classBeyond.current == undefined && props.index > 5) ? 'feedback-review__out-1800' : ''}`}>
            <div className="feedback-review__img">
                <img src={review.author.image} alt="" />
            </div>
            <div className="feedback-review__info">
                <p className="feedback-review__name">{review.author.name}</p>
                <p className="feedback-review__date">{review.author.publishDate.toLocaleDateString()}</p>
                <div className="feedback-review__stars">
                    {starArray.map((i: any) => <img key={i} src={review.rating >= i ? starFull : starEmpty} alt="" />)}
                </div>
                <p className="feedback-review__text">{review.text}</p>
            </div>
        </div>
    );
}
