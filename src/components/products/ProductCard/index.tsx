import React, { FC } from 'react';

import { ReactComponent as RemoveIcon } from 'assets/icons/remove-icon.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add-icon.svg';
import Button from 'components/common/Button';

import { ComponentProps } from './types';
import {
    CardFooter,
    CategoryLabel,
    ControlButton,
    ControlsContainer,
    Image,
    Price,
    PriceRow,
    ProductDescription,
    ProductInfoContainer,
    ProductInfoItem,
    ProductTitle,
    RatingLabel,
    StyledProductCard
} from './styles';

const ProductCard: FC<ComponentProps> = ({
    product: {
        id,
        image,
        title,
        category,
        rating,
        description,
        price
    } 
}) => (
    <StyledProductCard key={id}>
        <Image src={image} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductInfoContainer>
            <ProductInfoItem>
                <CategoryLabel>{category}</CategoryLabel>
            </ProductInfoItem>
            <ProductInfoItem>
                <RatingLabel>Rating: {rating.rate}</RatingLabel>
            </ProductInfoItem>
            <ProductInfoItem>
                <RatingLabel>Rates: {rating.count}</RatingLabel>
            </ProductInfoItem>
        </ProductInfoContainer>
        <ProductDescription>{description}</ProductDescription>
        <CardFooter>
            <PriceRow>
                <ControlsContainer>
                    <ControlButton>
                        <RemoveIcon />
                    </ControlButton>
                    <span>1</span>
                    <ControlButton>
                        <AddIcon />
                    </ControlButton>
                </ControlsContainer>
                <Price>${price}</Price>
            </PriceRow>
            <Button>Add to cart</Button>
        </CardFooter>
    </StyledProductCard>
);

export default ProductCard;
