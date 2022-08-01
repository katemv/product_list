import React, { FC, useCallback, useMemo } from 'react';

import { ReactComponent as RemoveIcon } from 'assets/icons/remove-icon.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add-icon.svg';
import Button from 'components/common/Button';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { decrement, increment } from 'redux/features/cart/cartSlice';
import { selectSelectedItems } from 'redux/features/cart/selectors';
import Colors from 'theme/colors';

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
}) => {
    const dispatch = useAppDispatch();
    const selectedItems = useAppSelector(selectSelectedItems);

    const isAdded = useMemo(() => {
        return !!selectedItems.find((item) => item.category === category && item.id === id && item.count !== 0);
    }, [selectedItems]);

    const currentItemCount = useMemo(() => {
        return selectedItems.find((item) => item.category === category && item.id === id)?.count || 0;
    }, [selectedItems]);

    const controlsDisabled = useMemo(() => currentItemCount === 0, [currentItemCount]);

    const handleAdd = useCallback(() => {
        dispatch(increment({ id, category }));
    }, [id, category]);

    const handleRemove = useCallback(() => {
        dispatch(decrement({ id, category }));
    }, [id, category]);

    return (
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
                    <ControlsContainer disabled={controlsDisabled}>
                        <ControlButton
                            onClick={handleRemove}
                            disabled={controlsDisabled}
                        >
                            <RemoveIcon
                                fill={controlsDisabled ? Colors.greyDark : Colors.purple}
                            />
                        </ControlButton>
                        <span>{controlsDisabled ? '1' : currentItemCount}</span>
                        <ControlButton
                            onClick={handleAdd}
                            disabled={controlsDisabled}
                        >
                            <AddIcon
                                fill={controlsDisabled ? Colors.greyDark : Colors.purple}
                            />
                        </ControlButton>
                    </ControlsContainer>
                    <Price>${price}</Price>
                </PriceRow>
                <Button
                    disabled={isAdded}
                    onClick={handleAdd}
                >
                    {isAdded ? 'In cart' : 'Add to cart'}
                </Button>
            </CardFooter>
        </StyledProductCard>
    );
};

export default ProductCard;
