import './Feedback.scss';
import { useEffect, useRef, useState } from 'react';
import { Rating } from '../../components/rating/Rating';
import { FeedbackReview, IFeedbackReview } from '../../components/feedback-review/FeedbackReview';
import { EMPTY_FUNC } from '../../vars';
import { Button } from '../../components/button/Button';

const feedbackResponse: any = [
    {
        author: {
            image: './img/feedback/2.png',
            name: 'Dronikon',
            publishDate: new Date('2021 10 12'),
        },
        rating: 4,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    }, {
        author: {
            image: './img/feedback/3.png',
            name: 'Dronikon',
            publishDate: new Date('2021 11 15'),
        },
        rating: 5,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    }, {
        author: {
            image: './img/feedback/1.png',
            name: 'Dronikon',
            publishDate: new Date('2021 11 12'),
        },
        rating: 3,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    }, {
        author: {
            image: './img/feedback/5.png',
            name: 'Dronikon',
            publishDate: new Date('2021 11 30'),
        },
        rating: 5,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    }, {
        author: {
            image: './img/feedback/2.png',
            name: 'Dronikon',
            publishDate: new Date('2021 10 12'),
        },
        rating: 5,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    }, {
        author: {
            image: './img/feedback/1.png',
            name: 'Dronikon',
            publishDate: new Date('2021 12 03'),
        },
        rating: 5,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    }, {
        author: {
            image: './img/feedback/3.png',
            name: 'Dronikon',
            publishDate: new Date('2021 10 12'),
        },
        rating: 3,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    }, {
        author: {
            image: './img/feedback/6.png',
            name: 'Dronikon',
            publishDate: new Date('2021 10 12'),
        },
        rating: 4,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    }, {
        author: {
            image: './img/feedback/3.png',
            name: 'Dronikon',
            publishDate: new Date('2021 10 12'),
        },
        rating: 3,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    }, {
        author: {
            image: './img/feedback/1.png',
            name: 'Dronikon',
            publishDate: new Date('2021 10 12'),
        },
        rating: 4,
        text: 'Качественно и смотрится кайфово, мне по крайней мере понравился их подход с оверсайз, обязательно буду и дальше у вас брать!!'
    },
];

export function Feedback() {
    const feedbackHeader: any = useRef();
    const feedbackBody: any = useRef();
    const feedbackHeaderML: any = useRef();

    const [scrollCount, setScrollCount] = useState(0);

    const getMargin = () => {
        try {
            feedbackHeaderML.current = parseFloat(window.getComputedStyle(feedbackHeader.current).marginLeft.slice(0, -2));
            feedbackBody.current.style.marginLeft = feedbackHeaderML.current + 'px';
            if (window.screen.width < 1900)
                feedbackBody.current.style.paddingRight =
                    parseFloat(getComputedStyle(feedbackHeader.current).marginRight.slice(0, -2)) + 15 + 'px';
            else
                feedbackBody.current.style.paddingRight =
                    parseFloat(window.getComputedStyle(feedbackBody.current).width.slice(0, -2)) - parseFloat(window.getComputedStyle(feedbackHeader.current).width.slice(0, -2)) + 15 + 'px';
        } catch (e) {EMPTY_FUNC();}

    };

    useEffect(() => {
        getMargin();
        window.onresize = getMargin;
    }, []);

    useEffect(() => {
        feedbackBody.current.onscroll = () => setScrollCount(feedbackBody.current.scrollLeft);
    }, []);

    return (
        <div className="feedback">
            <div ref={feedbackHeader} className="feedback__header">
                <Rating className='feedback__rating' reviewCount={15} starCount={[10, 3, 1, 1, 0]} />
                <Button className='feedback__btn' isLink to={'/review/background'} title={'Все отзывы'} />
            </div>
            <div ref={feedbackBody} className="feedback__body">
                {feedbackResponse.map((item: IFeedbackReview, index: number) => <FeedbackReview feedbackHeaderML={feedbackHeaderML.current} key={index} index={index} scrollCount={scrollCount} review={item} />)}
            </div>
        </div>
    );
}
