import { useEffect } from 'react';
import { useParams } from 'react-router';
import { ProductDesc } from '../../components/product-desc/ProductDesc';
import { ProductImages } from '../../components/product-images/ProductImages';
import { ProductOrder } from '../../components/product-order/ProductOrder';
import './ProductPage.scss';

const productsResponce: Array<any> = [
    {
        href: ['/img/product-page/1/1.jpg', '/img/product-page/1/2.jpg', '/img/product-page/1/3.jpg', '/img/product-page/1/4.jpg', '/img/product-page/1/5.jpg', '/img/product-page/1/6.jpg'],
        info: {
            href: '/img/product-page/1/1.jpg',
            title: 'Футболка с принтом 1',
            cost: '799 РУБ',
            size: ['xs', 's', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Белый': ['#FFF', true],
                'Розовый': ['#C6144B', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-1'
    },
    {
        href: ['/img/product-page/2/1.jpg', '/img/product-page/2/2.jpg', '/img/product-page/2/3.jpg', '/img/product-page/2/4.jpg', '/img/product-page/2/5.jpg', '/img/product-page/2/6.jpg'],
        info: {
            href: '/img/product-page/2/1.jpg',
            title: 'Футболка с принтом 2',
            cost: '799 РУБ',
            size: ['xs', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Синий': ['#172aff', false],
                'Желтый': ['#ebcc34', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-2'
    },
    {
        href: ['/img/product-page/3/1.jpg', '/img/product-page/3/2.jpg', '/img/product-page/3/3.jpg', '/img/product-page/3/4.jpg', '/img/product-page/3/5.jpg', '/img/product-page/3/6.jpg'],
        info: {
            href: '/img/product-page/3/1.jpg',
            title: 'Футболка с принтом 3',
            cost: '799 РУБ',
            size: ['xs', 's', 'xl'],
            colors: {
                'Красный': ['#f00202', true],
                'Белый': ['#FFF', true],
                'Синий': ['#172aff', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-3'
    },
    {
        href: ['/img/product-page/4/1.jpg', '/img/product-page/4/2.jpg', '/img/product-page/4/3.jpg', '/img/product-page/4/4.jpg', '/img/product-page/4/5.jpg', '/img/product-page/4/6.jpg'],
        info: {
            href: '/img/product-page/4/1.jpg',
            title: 'Футболка с принтом 4',
            cost: '799 РУБ',
            size: ['s', 'm', 'l'],
            colors: {
                'Черный': ['#000', false],
                'Белый': ['#FFF', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-4'
    },
    {
        href: ['/img/product-page/5/1.png', '/img/product-page/5/2.png', '/img/product-page/5/3.png', '/img/product-page/5/4.png', '/img/product-page/5/5.png', '/img/product-page/5/6.png'],
        info: {
            href: '/img/product-page/5/1.png',
            title: 'Футболка с принтом 5',
            cost: '799 РУБ',
            size: ['xs', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Синий': ['#172aff', false],
                'Желтый': ['#ebcc34', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-5'
    },
    {
        href: ['/img/product-page/6/1.png', '/img/product-page/6/2.png', '/img/product-page/6/3.png', '/img/product-page/6/4.png', '/img/product-page/6/5.png', '/img/product-page/6/6.png'],
        info: {
            href: '/img/product-page/6/1.png',
            title: 'Футболка с принтом 6',
            cost: '799 РУБ',
            size: ['xs', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Синий': ['#172aff', false],
                'Желтый': ['#ebcc34', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-6'
    },
    {
        href: ['/img/product-page/7/1.png', '/img/product-page/7/2.png', '/img/product-page/7/3.png', '/img/product-page/7/4.png', '/img/product-page/7/5.png', '/img/product-page/7/6.png'],
        info: {
            href: '/img/product-page/7/1.png',
            title: 'Футболка с принтом 7',
            cost: '799 РУБ',
            size: ['xs', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Синий': ['#172aff', false],
                'Желтый': ['#ebcc34', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-7'
    },
    {
        href: ['/img/product-page/8/1.png', '/img/product-page/8/2.png', '/img/product-page/8/3.png', '/img/product-page/8/4.png', '/img/product-page/8/5.png', '/img/product-page/8/6.png'],
        info: {
            href: '/img/product-page/8/1.png',
            title: 'Футболка с принтом 8',
            cost: '799 РУБ',
            size: ['xs', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Синий': ['#172aff', false],
                'Желтый': ['#ebcc34', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-8'
    },
    {
        href: ['/img/product-page/9/1.png', '/img/product-page/9/2.png', '/img/product-page/9/3.png', '/img/product-page/9/4.png', '/img/product-page/9/5.png', '/img/product-page/9/6.png'],
        info: {
            href: '/img/product-page/9/1.png',
            title: 'Футболка с принтом 9',
            cost: '799 РУБ',
            size: ['xs', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Синий': ['#172aff', false],
                'Желтый': ['#ebcc34', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-9'
    },
    {
        href: ['/img/product-page/10/1.png', '/img/product-page/10/2.png', '/img/product-page/10/3.png', '/img/product-page/10/4.png', '/img/product-page/10/5.png', '/img/product-page/10/6.png'],
        info: {
            href: '/img/product-page/10/1.png',
            title: 'Футболка с принтом 10',
            cost: '799 РУБ',
            size: ['xs', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Синий': ['#172aff', false],
                'Желтый': ['#ebcc34', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-10'
    },
    {
        href: ['/img/product-page/11/1.png', '/img/product-page/11/2.png', '/img/product-page/11/3.png', '/img/product-page/11/4.png', '/img/product-page/11/5.png', '/img/product-page/11/6.png'],
        info: {
            href: '/img/product-page/11/1.png',
            title: 'Футболка с принтом 11',
            cost: '799 РУБ',
            size: ['xs', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Синий': ['#172aff', false],
                'Желтый': ['#ebcc34', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-11'
    },
    {
        href: ['/img/product-page/12/1.png', '/img/product-page/12/2.png', '/img/product-page/12/3.png', '/img/product-page/12/4.png', '/img/product-page/12/5.png', '/img/product-page/12/6.png'],
        info: {
            href: '/img/product-page/12/1.png',
            title: 'Футболка с принтом 12',
            cost: '799 РУБ',
            size: ['xs', 'm', 'l', 'xl'],
            colors: {
                'Черный': ['#000', true],
                'Синий': ['#172aff', false],
                'Желтый': ['#ebcc34', true]
            },
            desc: {
                'Пол': 'Мужской',
                'Сезон': 'Круглогодичный',
                'Назначение': 'Повседневный',
                'Вырез горловины': 'Округлая',
                'Параметры модели на фото': '102-82-102',
                'Рост модели': '186см'
            },
            composition: {
                'Внешняя сторона': '100% ХЛОПОК'
            },
            care: [
                ['/img/care/wishing/30deg.svg', 'машинная стирка при макс. темп. 30°C'],
                ['/img/care/bleaching/cant-bleach.svg', 'не использовать отбеливатели'],
                ['/img/care/drying/cant-squeeze-dry.svg', 'не сушить в барабанной сушилке'],
                ['/img/care/ironing/ironing-down-110deg.svg', 'гладить при макс. темп. 110° - без пара'],
                ['/img/care/cleaning/not-dry-cleaning.svg', 'химическая чистка запрещена']
            ]
        },
        linkName: 'futbolka-s-printom-12'
    },
];

export function ProductPage() {
    const { id }: any = useParams();
    const product: any = productsResponce.find(item => item.linkName === id);

    useEffect(() => {
        document.title = product.info.title;
        document.documentElement.scrollTop = 0;
    }, []);

    return (
        <div className="product-page container">
            <ProductImages mobileWidth={900} images={product.href} />
            <ProductOrder product={product.info} linkName={product.linkName} />
            <ProductDesc product={{
                desc: product.info.desc,
                composition: product.info.composition,
                care: product.info.care
            }} />
        </div>
    );
}
