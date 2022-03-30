import { Spoiler } from '../spoiler/Spoiler';
import './ProductDesc.scss';

interface Props {
    product: {
        desc?: IDescProduct;
        composition?: ICompositionProduct;
        care?: string[][];
    }
}

interface ICompositionProduct {
    surface?: string;
}


interface IDescProduct {
    sex?: string;
    season?: string;
    purpose?: string;
    neckline?: string;
    modelParameters?: string;
    modelHeight?: string;
}

export function ProductDesc({ product }: Props) {
    const { desc, care, composition } = product;

    return (
        <div className="product-desc">
            {desc && <div className="product-specification">
                <Spoiler title='Описание'>
                    {Object.entries(desc).map((item, index) =>
                        <p key={index} className="product-desc__item">
                            <span>{item[0]}:</span>{item[1]}
                        </p>
                    )}
                </Spoiler>
            </div>}
            {composition && care && <div className='product-composition-care'>
                <Spoiler title='Состав и руководство по уходу'>
                    {Object.entries(composition).map((item, index) =>
                        <p key={index} className="product-desc__item">
                            <span>{item[0]}:</span>{item[1]}
                        </p>
                    )}
                    <div className="product-desc__care">
                        {care.map((item, index) =>
                            <div key={index} className="product-desc__item product-desc__item">
                                <img src={item[0]} alt="" />
                                <p>{item[1]}</p>
                            </div>
                        )}
                    </div>
                </Spoiler>
            </div>}

        </div>
    );
}
